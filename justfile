set dotenv-load := false

# Show all available recipes
default:
  @just --list --unsorted

IS_PROD := env_var_or_default("IS_PROD", "")
DOCKER_FILES := "--file=docker-compose.yml" + (
    if IS_PROD != "true" {" --file=docker-compose.override.yml"} else {""}
)
SERVICE := env_var_or_default("SERVICE", "scheduler")
DC_USER := env_var_or_default("DC_USER", "airflow")

export PROJECT_PY_VERSION := `grep '# PYTHON' requirements_prod.txt | awk -F= '{print $2}'`
export PROJECT_AIRFLOW_VERSION := `grep '^apache-airflow' requirements_prod.txt | awk -F= '{print $3}'`

# Print the required Python version
@py-version:
    echo $PROJECT_PY_VERSION

# Print the current Airflow version
@airflow-version:
    echo $PROJECT_AIRFLOW_VERSION

# Check the installed Python version matches the required Python version and fail if not
check-py-version:
    #! /usr/bin/env sh
    installed_python_version=`python -c 'import sys; print(f"{sys.version_info[0]}.{sys.version_info[1]}")'`
    if [ "$PROJECT_PY_VERSION" != "$installed_python_version" ]
    then
        printf "Detected Python version $installed_python_version but $PROJECT_PY_VERSION is required.\n" > /dev/stderr
        exit 1
    fi

# Install dependencies into the current environment
install: check-py-version
    pip install -r requirements_tooling.txt -r requirements_dev.txt
    pre-commit install

# Create the .env file from the template
dotenv:
    @([ ! -f .env ] && cp env.template .env) || true

# Run docker compose with the specified command
_dc *args:
    docker-compose {{ DOCKER_FILES }} {{ args }}

# Build all (or specified) container(s)
build service="": dotenv
    @just _dc build {{ service }}

# Bring all Docker services up
up flags="": dotenv
    @just _dc up -d {{ flags }}

# Take all Docker services down
down flags="":
    @just _dc down {{ flags }}

# Recreate all volumes and containers from scratch
recreate: dotenv
    @just down -v
    @just up "--force-recreate --build"

# Show logs of all, or named, Docker services
logs service="": up
    @just _dc logs -f {{ service }}

# Pull, build, and deploy all services
deploy:
    -git pull
    @just pull
    @just up

# Run pre-commit on all files
lint hook="":
    pre-commit run {{ hook }} --all-files

# Load any dependencies necessary for actions on the stack without running the webserver
_deps:
    @just up "postgres s3 load_to_s3"

# Mount the tests directory and run a particular command
@_mount-tests command: _deps
    # The test directory is mounted into the container only during testing
    @just _dc run \
        -e AIRFLOW_VAR_INGESTION_LIMIT=1000000 \
        -v {{ justfile_directory() }}/tests:/opt/airflow/tests/ \
        -v {{ justfile_directory() }}/pytest.ini:/opt/airflow/pytest.ini \
        -v {{ justfile_directory() }}/docker:/opt/airflow/docker/ \
        --rm \
        {{ SERVICE }} \
        {{ command }}

# Run a container that can be used for repeated interactive testing
test-session:
    @just _mount-tests bash

# Run pytest using the webserver image
test *pytestargs:
    @just _mount-tests "bash -c \'pytest {{ pytestargs }}\'"

# Open a shell into the webserver container
shell user="airflow": up
    @just _dc exec -u {{ user }} {{ SERVICE }} /bin/bash

# Launch an IPython REPL using the webserver image
ipython: _deps
    @just _dc run \
        --rm \
        -w /opt/airflow/openverse_catalog/dags \
        {{ SERVICE }} \
        bash -c \'ipython\'

# Run a given command in bash using the scheduler image
run *args: _deps
    @just _dc run --rm -u {{ DC_USER }} {{ SERVICE }} bash -c \'{{ args }}\'

# Launch a pgcli shell on the postgres container (defaults to openledger) use "airflow" for airflow metastore
db-shell args="openledger": up
    @just _dc exec postgres pgcli {{ args }}

# Generate the DAG documentation
generate-dag-docs fail_on_diff="false":
    #!/bin/bash
    set -e
    DC_USER=root just run 'python openverse_catalog/utilities/dag_doc_gen/dag_doc_generation.py \&\& chmod 666 /opt/airflow/openverse_catalog/utilities/dag_doc_gen/DAGs.md'
    # Move the file to the top level, since that level is not mounted into the container
    mv openverse_catalog/utilities/dag_doc_gen/DAGs.md DAGs.md
    echo -n "Running linting..."
    # Linting step afterwards is necessary since the generated output differs greatly from what prettier expects
    just lint &>/dev/null || true
    echo "Done!"
    if {{ fail_on_diff }}; then
      set +e
      git diff --exit-code DAGs.md
      if [ $? -ne 0 ]; then
          printf "\n\n\e[31m!! Changes found in DAG documentation, please run 'just generate-dag-docs' locally and commit difference !!\n\n"
          exit 1
      fi
    fi

# Generate files for a new provider
add-provider provider_name endpoint +media_types="image":
    python3 openverse_catalog/templates/create_provider_ingester.py "{{ provider_name }}" "{{ endpoint }}" -m {{ media_types }}

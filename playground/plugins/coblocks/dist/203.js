"use strict";(self.webpackChunkcoblocks=self.webpackChunkcoblocks||[]).push([[203],{4203:function(t,e,o){o.r(e),o.d(e,{default:function(){return L}});var n=o(9196),i=o(5161),l=o.n(i),a=o(4184),s=o.n(a),c=o(9035),r=o(3601),m=o(5377),d=o(5697),b=o.n(d),g=o(5736),p=o(5609),u=o(9307);const _=[{name:(0,g.__)("None","coblocks"),size:0,slug:"no"},{name:(0,g.__)("Small","coblocks"),size:14,slug:"small"},{name:(0,g.__)("Medium","coblocks"),size:24,slug:"medium"},{name:(0,g.__)("Large","coblocks"),size:34,slug:"large"},{name:(0,g.__)("Huge","coblocks"),size:60,slug:"huge"}];class k extends u.Component{constructor(){super(...arguments),this.getSelectValuesFromUtilitySizes=this.getSelectValuesFromUtilitySizes.bind(this),this.getCurrentSelectValue=this.getCurrentSelectValue.bind(this),this.setCurrentSelectValue=this.setCurrentSelectValue.bind(this),this.onChangeValue=this.onChangeValue.bind(this),this.getSelectOptions=this.getSelectOptions.bind(this)}getSelectValuesFromUtilitySizes(t,e){let o;if("string"==typeof e)return o=t.find((t=>t.slug===e)),o?o.slug:"custom"}getCurrentSelectValue(t){const{paddingSize:e,marginSize:o}=this.props;switch(t){case"margin":return o;case"padding":return e}}setCurrentSelectValue(t){const{type:e,setAttributes:o}=this.props;switch(e){case"margin":o({marginSize:t});break;case"padding":o({paddingSize:t})}}onChangeValue(t){const e=_.find((e=>e.slug===t));e&&this.setCurrentSelectValue(this.getSelectValuesFromUtilitySizes(_,e.slug))}getSelectOptions(t){return[...t.map((t=>({label:t.name,value:t.slug})))]}render(){const{type:t}=this.props;return(0,n.createElement)(u.Fragment,null,(0,n.createElement)(p.SelectControl,{className:"components-font-size-picker__select",hideLabelFromVision:!0,label:`Choose ${t} preset`,onChange:this.onChangeValue,options:this.getSelectOptions(_),value:this.getCurrentSelectValue(t)}))}}k.propTypes={marginSize:b().number,paddingSize:b().number,setAttributes:b().func,type:b().string};var h=o(7635),y=o(9818),v=o(4333);const T=["Top","Right","Bottom","Left"],f={margin:{bottom:(0,g.__)("Margin bottom","coblocks"),left:(0,g.__)("Margin left","coblocks"),right:(0,g.__)("Margin right","coblocks"),top:(0,g.__)("Margin top","coblocks")},padding:{bottom:(0,g.__)("Padding bottom","coblocks"),left:(0,g.__)("Padding left","coblocks"),right:(0,g.__)("Padding right","coblocks"),top:(0,g.__)("Padding top","coblocks")}},S=t=>{const{attributes:e,clientId:o,dimensionSize:i,help:a,instanceId:c,label:r=(0,g.__)("Margin","coblocks"),setAttributes:m,type:d="margin",unit:b}=t,{coblocks:u,marginSize:_,paddingSize:v,saveCoBlocksMeta:S}=e,{updateBlockAttributes:$}=(0,y.useDispatch)("core/block-editor"),B=(t,e)=>void 0!==t?`${t}${e}`:null,M=(t,e)=>{if(void 0!==t)return`${e}: ${t} !important`},C=()=>{const e=wp.data.select("core/editor").getEditedPostAttribute("meta"),n=wp.data.select("core/block-editor").getBlock(o);let l={};if(void 0!==u&&void 0!==u.id){const o=t.name.split("/").join("-")+"-"+u.id,a=n.attributes.paddingUnit,s=n.attributes.marginUnit,c={paddingBottom:B(n.attributes.paddingBottom,a),paddingBottomMobile:B(n.attributes.paddingBottomMobile,a),paddingBottomTablet:B(n.attributes.paddingBottomTablet,a),paddingLeft:B(n.attributes.paddingLeft,a),paddingLeftMobile:B(n.attributes.paddingLeftMobile,a),paddingLeftTablet:B(n.attributes.paddingLeftTablet,a),paddingRight:B(n.attributes.paddingRight,a),paddingRightMobile:B(n.attributes.paddingRightMobile,a),paddingRightTablet:B(n.attributes.paddingRightTablet,a),paddingTop:B(n.attributes.paddingTop,a),paddingTopMobile:B(n.attributes.paddingTopMobile,a),paddingTopTablet:B(n.attributes.paddingTopTablet,a)},r={marginBottom:B(n.attributes.marginBottom,s),marginBottomMobile:B(n.attributes.marginBottomMobile,s),marginBottomTablet:B(n.attributes.marginBottomTablet,s),marginLeft:B(n.attributes.marginLeft,s),marginLeftMobile:B(n.attributes.marginLeftMobile,s),marginLeftTablet:B(n.attributes.marginLeftTablet,s),marginRight:B(n.attributes.marginRight,s),marginRightMobile:B(n.attributes.marginRightMobile,s),marginRightTablet:B(n.attributes.marginRightTablet,s),marginTop:B(n.attributes.marginTop,s),marginTopMobile:B(n.attributes.marginTopMobile,s),marginTopTablet:B(n.attributes.marginTopTablet,s)};l=void 0===e||void 0===e._coblocks_dimensions||void 0!==e._coblocks_dimensions&&""===e._coblocks_dimensions?{}:JSON.parse(e._coblocks_dimensions),void 0===l[o]?(l[o]={},l[o][d]={}):void 0===l[o][d]&&(l[o][d]={}),l[o][d]="advanced"===i?"padding"===d?c:r:{},wp.data.dispatch("core/editor").editPost({meta:{_coblocks_dimensions:JSON.stringify(l)}});const m=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.type="text/css";const g=`\n\t\t\t\t@media only screen and (max-width: 768px) {\n\t\t\t\t\t.${o} > div {\n\t\t\t\t\t\t${M(c.paddingTopTablet,"padding-top")}\n\t\t\t\t\t\t${M(c.paddingRightTablet,"padding-right")}\n\t\t\t\t\t\t${M(c.paddingBottomTablet,"padding-bottom")}\n\t\t\t\t\t\t${M(c.paddingLeftTablet,"padding-left")}\n\t\t\t\t\t\t${M(r.marginTopTablet,"margin-top")}\n\t\t\t\t\t\t${M(r.marginRightTablet,"margin-right")}\n\t\t\t\t\t\t${M(r.marginBottomTablet,"margin-bottom")}\n\t\t\t\t\t\t${M(r.marginLeftTablet,"margin-left")}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@media only screen and (max-width: 514px) {\n\t\t\t\t\t.${o} > div {\n\t\t\t\t\t\t${M(c.paddingTopMobile,"padding-top")}\n\t\t\t\t\t\t${M(c.paddingRightMobile,"padding-right")}\n\t\t\t\t\t\t${M(c.paddingBottomMobile,"padding-bottom")}\n\t\t\t\t\t\t${M(c.paddingLeftMobile,"padding-left")}\n\t\t\t\t\t\t${M(r.marginTopMobile,"margin-top")}\n\t\t\t\t\t\t${M(r.marginRightMobile,"margin-right")}\n\t\t\t\t\t\t${M(r.marginBottomMobile,"margin-bottom")}\n\t\t\t\t\t\t${M(r.marginLeftMobile,"margin-left")}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t`;b.styleSheet?b.styleSheet.cssText=g:b.appendChild(document.createTextNode(g)),m.appendChild(b)}};S&&(C(),$(o,{saveCoBlocksMeta:!1}));const E=(e,o)=>{["coblocks/hero"].includes(t.name)&&"no"===e&&(o<0?(e="huge",o=60):o=-1),"padding"===d&&m({paddingSyncUnits:!0}),m({[`${d}Size`]:e}),o&&m({[`${d}Top`]:o=o<0?"":o,[`${d}Right`]:0,[`${d}Bottom`]:o,[`${d}Left`]:0,[`${d}Unit`]:"px"}),C()},L=s()("components-base-control","components-coblocks-dimensions-control",{}),R=`inspector-coblocks-dimensions-control-${c}`,N=[{
/* translators: a unit of size (px) for css markup */
name:(0,g.__)("Pixel","coblocks"),unitValue:"px"},{
/* translators: a unit of size (em) for css markup */
name:(0,g.__)("Em","coblocks"),unitValue:"em"},{
/* translators: a unit of size (vw) for css markup */
name:(0,g.__)("Viewport width","coblocks"),unitValue:"vw"},{
/* translators: a unit of size (vh) for css markup */
name:(0,g.__)("Viewport height","coblocks"),unitValue:"vh"},{
/* translators: a unit of size for css markup */
name:(0,g.__)("Percentage","coblocks"),unitValue:"%"}],z=(e="")=>{const o=t[`syncUnits${e}`];return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"components-coblocks-dimensions-control__inputs"},T.map((o=>(0,n.createElement)("input",{"aria-describedby":a?R+"__help":void 0,"aria-label":f[d][o.toLowerCase()],className:"components-coblocks-dimensions-control__number","data-device-type":e,key:`coblocks-dimensions-control-number-${e}-${o}`,min:"padding"===d?0:void 0,onChange:e=>((e,o)=>{const n=""===e.target.value?void 0:Number(e.target.value);let i="";void 0!==e.target.getAttribute("data-device-type")&&void 0!==e.target.getAttribute("data-device-type")&&(i=e.target.getAttribute("data-device-type")),t["syncUnits"+i]?((t,e)=>{m({[`${d}Top${e}`]:t,[`${d}Right${e}`]:t,[`${d}Bottom${e}`]:t,[`${d}Left${e}`]:t}),C()})(n,i):((t,e,o)=>{m({[`${d}${o}${e}`]:t}),C()})(n,i,o)})(e,o),type:"number",value:t[`value${o}${e}`]}))),(0,n.createElement)(p.Tooltip,{text:o?(0,g.__)("Unsync","coblocks"):(0,g.__)("Sync","coblocks")},(0,n.createElement)(p.Button,{"aria-label":(0,g.__)("Sync units","coblocks"),"aria-pressed":!!o,className:"components-coblocks-dimensions-control_sync","data-device-type":e,isPrimary:!!o,isSecondary:!o,isSmall:!0,onClick:()=>((e="")=>{const o=[t["valueTop"+e],t["valueRight"+e],t["valueBottom"+e],t["valueLeft"+e]],n=Math.max.apply(null,o);m({[`${d}SyncUnits${e}`]:!t[`syncUnits${e}`],[`${d}Top${e}`]:n,[`${d}Right${e}`]:n,[`${d}Bottom${e}`]:n,[`${d}Left${e}`]:n}),C()})(e)},h.bnu))))};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:L},"advanced"===i?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"components-coblocks-dimensions-control__header"},r&&(0,n.createElement)("p",{className:"components-coblocks-dimensions-control__label"},r),(0,n.createElement)("div",{className:"components-coblocks-dimensions-control__actions"},(0,n.createElement)(p.ButtonGroup,{"aria-label":(0,g.__)("Select Units","coblocks"),className:"components-coblocks-dimensions-control__units"},l()(N,(({unitValue:t,name:e})=>(0,n.createElement)(p.Tooltip,{key:`coblocks-dimensions-control-unit-tooltip-${e}`,text:(0,g.sprintf)(/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
(0,g.__)("%s units","coblocks"),e)},(0,n.createElement)(p.Button,{"aria-label":(0,g.sprintf)(/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
(0,g.__)("%s units","coblocks"),e),"aria-pressed":b===t,className:"components-coblocks-dimensions-control__units--"+e,isPrimary:b===t,isSecondary:b!==t,isSmall:!0,key:t,onClick:()=>(m({[`${d}Unit`]:t}),void C())},t))))),(0,n.createElement)(p.Button,{"aria-label":(0,g.sprintf)(/* translators: %s: a texual label  */
(0,g.__)("Turn off advanced %s settings","coblocks"),r.toLowerCase()),isSecondary:!0,isSmall:!0,onClick:()=>E("no",-1),type:"button"},(0,g.__)("Reset","coblocks")))),(0,n.createElement)(p.TabPanel,{activeClass:"is-active",className:"components-coblocks-dimensions-control__mobile-controls",initialTabName:"default",onSelect:t=>{let e="desktop";switch(t){case"desktop":e="tablet";break;case"tablet":e="mobile";break;case"mobile":e="desktop"}const o=document.getElementsByClassName(`components-coblocks-dimensions-control__mobile-controls-item--${d}`);for(let t=0;t<o.length;t++)o[t].style.display="none";"default"===t?document.getElementsByClassName(`components-coblocks-dimensions-control__mobile-controls-item-${d}--tablet`)[0].click():document.getElementsByClassName(`components-coblocks-dimensions-control__mobile-controls-item-${d}--${e}`)[0].style.display="block"},tabs:[{className:`components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${d} components-button is-button is-default is-secondary components-coblocks-dimensions-control__mobile-controls-item--default components-coblocks-dimensions-control__mobile-controls-item-${d}--default`,name:"default",title:h.ugZ},{className:`components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${d} components-button is-button is-default is-secondary components-coblocks-dimensions-control__mobile-controls-item--desktop components-coblocks-dimensions-control__mobile-controls-item-${d}--desktop`,name:"desktop",title:h.ugZ},{className:`components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${d} components-button is-button is-default is-secondary components-coblocks-dimensions-control__mobile-controls-item--tablet components-coblocks-dimensions-control__mobile-controls-item-${d}--tablet`,name:"tablet",title:h.v_G},{className:`components-coblocks-dimensions-control__mobile-controls-item components-coblocks-dimensions-control__mobile-controls-item--${d} components-button is-button is-default is-secondary components-coblocks-dimensions-control__mobile-controls-item--mobile components-coblocks-dimensions-control__mobile-controls-item-${d}--mobile`,name:"mobile",title:h.pY8}]},(t=>{return z(["default","desktop"].includes(t.name)?"":(e=t.name)&&e[0].toUpperCase()+e.slice(1)||"");var e})),(0,n.createElement)("div",{className:"components-coblocks-dimensions-control__input-labels"},(0,n.createElement)("span",{className:"components-coblocks-dimensions-control__number-label"},(0,g.__)("Top","coblocks")),(0,n.createElement)("span",{className:"components-coblocks-dimensions-control__number-label"},(0,g.__)("Right","coblocks")),(0,n.createElement)("span",{className:"components-coblocks-dimensions-control__number-label"},(0,g.__)("Bottom","coblocks")),(0,n.createElement)("span",{className:"components-coblocks-dimensions-control__number-label"},(0,g.__)("Left","coblocks")),(0,n.createElement)("span",{className:"components-coblocks-dimensions-control__number-label-blank"}))):(0,n.createElement)(p.BaseControl,{help:a,id:"textarea-1",label:r},(0,n.createElement)("div",{className:"components-font-size-picker__controls"},(0,n.createElement)(k,{marginSize:_,paddingSize:v,setAttributes:m,type:d}),(0,n.createElement)(p.Button,{"aria-label":(0,g.sprintf)(/* translators: %s: a texual label */
(0,g.__)("Advanced %s settings","coblocks"),r.toLowerCase()),isPrimary:"advanced"===i,isSecondary:!0,isSmall:!0,onClick:()=>E("advanced",""),type:"button"},(0,g.__)("Advanced","coblocks"))))))};S.propTypes={attributes:b().number,clientId:b().number,dimensionSize:b().number,help:b().bool,instanceId:b().number,label:b().string,name:b().string,setAttributes:b().func,type:b().string,unit:b().number};var $=(0,v.withInstanceId)(S),B=o(9338),M=o(2175);const{getComputedStyle:C}=window,E=(0,p.withFallbackStyles)(((t,e)=>{const{backgroundColor:o}=e.attributes,n=t.querySelector('[contenteditable="true"]'),i=n?C(n):null;return{fallbackBackgroundColor:o||!i?void 0:i.backgroundColor}}));var L=(0,v.compose)([r.Z,E])((t=>{const{attributes:e,backgroundColor:o,clientId:i,setAttributes:a,setBackgroundColor:r,setTextColor:d,textColor:b,updateBlockAttributes:u,getBlocksByClientId:_}=t,{columns:k,layout:h,marginBottom:y,marginLeft:v,marginRight:T,marginSize:f,marginTop:S,marginBottomTablet:C,marginLeftTablet:E,marginRightTablet:L,marginTopTablet:R,marginBottomMobile:N,marginLeftMobile:z,marginRightMobile:U,marginTopMobile:V,marginSyncUnits:w,marginSyncUnitsTablet:x,marginSyncUnitsMobile:P,marginUnit:A,paddingBottom:F,paddingLeft:I,paddingRight:O,paddingSize:Z,paddingTop:G,paddingBottomTablet:J,paddingLeftTablet:j,paddingRightTablet:q,paddingTopTablet:D,paddingBottomMobile:H,paddingLeftMobile:K,paddingRightMobile:Y,paddingTopMobile:Q,paddingSyncUnits:W,paddingSyncUnitsTablet:X,paddingSyncUnitsMobile:tt,paddingUnit:et,hasMarginControl:ot}=e;let nt=1;k&&(nt=parseInt(k.toString().split("-")));const it=t=>{const e=t.toString().split("-"),o=_(i);a({layout:t}),void 0!==o[0].innerBlocks&&l()(o[0].innerBlocks,((t,o)=>u(t.clientId,{width:e[o]})))};return(0,n.createElement)(n.Fragment,null,k&&nt>=1&&(0,n.createElement)(n.Fragment,null,h&&(0,n.createElement)(n.Fragment,null,nt>1&&(0,n.createElement)(p.PanelBody,{title:(0,g.__)("Styles","coblocks"),initialOpen:!1},(0,n.createElement)("div",{className:s()("block-editor-block-styles","coblocks-editor-block-styles")},l()(c.sL[nt],(({name:t,key:e,icon:o})=>(0,n.createElement)("div",{key:`style-${t}`,className:s()("block-editor-block-styles__item",{"is-active":h===e}),onClick:()=>it(e),onKeyPress:()=>it(e),role:"button",tabIndex:"0","aria-label":t},(0,n.createElement)("div",{className:"block-editor-block-styles__item-preview"},o)))))),h&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p.PanelBody,{title:(0,g.__)("Row settings","coblocks")},nt>=2&&(0,n.createElement)(B.Z,{...t}),(0,n.createElement)($,{...t,type:"padding",label:(0,g.__)("Padding","coblocks"),help:(0,g.__)("Space inside of the container.","coblocks"),valueTop:G,valueRight:O,valueBottom:F,valueLeft:I,valueTopTablet:D,valueRightTablet:q,valueBottomTablet:J,valueLeftTablet:j,valueTopMobile:Q,valueRightMobile:Y,valueBottomMobile:H,valueLeftMobile:K,unit:et,syncUnits:W,syncUnitsTablet:X,syncUnitsMobile:tt,dimensionSize:Z}),ot&&(0,n.createElement)($,{...t,type:"margin",label:(0,g.__)("Margin","coblocks"),help:(0,g.__)("Space around the container.","coblocks"),valueTop:S,valueRight:T,valueBottom:y,valueLeft:v,valueTopTablet:R,valueRightTablet:L,valueBottomTablet:C,valueLeftTablet:E,valueTopMobile:V,valueRightMobile:U,valueBottomMobile:N,valueLeftMobile:z,unit:A,syncUnits:w,syncUnitsTablet:x,syncUnitsMobile:P,dimensionSize:f})),(0,n.createElement)(M.PanelColorSettings,{title:(0,g.__)("Color settings","coblocks"),initialOpen:!1,colorSettings:[{value:o.color,onChange:t=>{r(t),Z&&"no"!==Z||a({paddingSize:"medium"}),t||a({paddingSize:"no"})},label:(0,g.__)("Background color","coblocks")},{value:b.color,onChange:d,label:(0,g.__)("Text color","coblocks")}]}),(0,n.createElement)(m.OT,{...t,hasOverlay:!0})))))}))}}]);
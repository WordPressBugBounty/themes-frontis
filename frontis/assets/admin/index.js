(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,n=window.wp.editor,a=window.wp.plugins,l=window.wp.data,r=window.wp.components,o=window.wp.element,s=window.wp.apiFetch;var c=e.n(s);const i=window.wp.compose,d=window.wp.blockEditor,m=window.wp.hooks,g=window.wp.i18n,p=["core/archives","core/calendar","core/latest-comments","core/tag-cloud","core/rss"],b=(0,i.createHigherOrderComponent)((e=>n=>{const{attributes:a,name:l,setAttributes:o}=n,{FBHideDesktop:s,FBHideTab:c,FBHideMob:i}=a;return l&&l.includes("core/")&&!p.includes(l)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...n}),(0,t.createElement)(d.InspectorControls,null,(0,t.createElement)(r.Panel,null,(0,t.createElement)(r.PanelBody,{title:"Responsive Settings",initialOpen:!0},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:(0,g.__)("Hide Desktop","frontis-block"),checked:s,onChange:()=>o({FBHideDesktop:!s})})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:(0,g.__)("Hide Tablet","frontis-block"),checked:c,onChange:()=>o({FBHideTab:!c})})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:(0,g.__)("Hide Mobile","frontis-block"),checked:i,onChange:()=>o({FBHideMob:!i})})))))):(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...n}))}),"Responsive");(0,m.addFilter)("editor.BlockEdit","fb/responsive",b),(0,m.addFilter)("blocks.registerBlockType","fb/responsive-attributes",(function(e){const{name:t,attributes:n}=e;return t&&t.includes("core/")&&!p.includes(t)&&n&&(e.attributes=Object.assign(n,{FBHideDesktop:{type:"boolean",default:!1},FBHideTab:{type:"boolean",default:!1},FBHideMob:{type:"boolean",default:!1}})),e}));const u=(0,i.createHigherOrderComponent)((e=>n=>{const{name:a,attributes:l}=n;if(a&&a.includes("core/")&&!p.includes(a)){const{FBHideDesktop:a,FBHideTab:r,FBHideMob:o}=l;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("style",null,"@media (min-width: 1025px) {\n\t\t\t\t\t\t.fb-hide-desktop {\n\t\t\t\t\t\t\tbackground: repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px);\n\t\t\t\t\t\t\topacity: .4;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 768px) and (max-width: 1024px) {\n\t\t\t\t\t\t.fb-hide-tablet {\n\t\t\t\t\t\t\tbackground: repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px);\n\t\t\t\t\t\t\topacity: .4;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (max-width: 767px) {\n\t\t\t\t\t\t.fb-hide-mobile {\n\t\t\t\t\t\t\tbackground: repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px);\n\t\t\t\t\t\t\topacity: .4;\n\t\t\t\t\t\t}\n\t\t\t\t\t}"),(0,t.createElement)(e,{...n,className:`${n?.className?`${n.className} `:""}${a?"fb-hide-desktop ":""}${r?"fb-hide-tablet ":""}${o?"fb-hide-mobile ":""}`}))}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...n}))}),"responsiveCss");(0,m.addFilter)("editor.BlockListBlock","fb/responsive-css",u);const C=(0,i.createHigherOrderComponent)((e=>n=>{const{attributes:a,name:l,setAttributes:o}=n,{imgFull:s}=a,c=()=>{o({imgFull:!s})};return l&&l.includes("core/image")?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...n}),(0,t.createElement)(d.InspectorControls,null,(0,t.createElement)(r.Panel,null,(0,t.createElement)(r.PanelBody,{title:"Image size",initialOpen:!0},(0,t.createElement)(r.CheckboxControl,{__nextHasNoMarginBottom:!0,label:"Full",checked:s,onChange:c}))))):(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...n}))}),"fbImgFluid");(0,m.addFilter)("editor.BlockEdit","fb/fbimgfluid",C),(0,m.addFilter)("blocks.registerBlockType","fb/imgfluid-attributes",(function(e){const{name:t,attributes:n}=e;return t&&t.includes("core/image")&&n&&(e.attributes=Object.assign(n,{imgFull:{type:"boolean",default:!1}})),e}));const h=(0,i.createHigherOrderComponent)((e=>n=>{const{name:a,attributes:l}=n;if(a&&a.includes("core/image")){const{imgFull:a}=l;return console.log(a),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("style",null,"\n                        body .wp-block-image.fbimgfull img {\n                            width: 100%;\n                        }\n                    "),(0,t.createElement)(e,{...n,className:""+(a?"fbimgfull":"")}))}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...n}))}),"imgFluidCss");(0,m.addFilter)("editor.BlockListBlock","fb/imgFluidCss",h);(0,a.registerPlugin)("frontis-site-editor",{icon:(0,t.createElement)("svg",{width:"28",height:"32",viewBox:"0 0 28 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M23.3358 15.9939L26.5034 17.8551C26.9585 18.1229 27.3364 18.508 27.5992 18.9718C27.862 19.4357 28.0003 19.9618 28.0003 20.4974V22.4684C28.0003 23.0039 27.862 23.5301 27.5992 23.9939C27.3364 24.4577 26.9585 24.8429 26.5034 25.1107L23.3358 26.9718L18.6534 29.7239L15.4798 31.5912C15.0247 31.859 14.5084 32 13.9829 32C13.4573 32 12.941 31.859 12.4859 31.5912L9.31836 29.7239V24.2319L13.9829 26.9779L18.6534 24.2319L23.3179 21.492L18.6534 18.746L13.9829 16L18.6534 13.2479L23.3179 10.508L18.6534 7.76198L13.9829 5.02206L9.31836 2.27605L12.4859 0.408765C12.941 0.140974 13.4573 0 13.9829 0C14.5084 0 15.0247 0.140974 15.4798 0.408765L18.6474 2.27605L23.3059 5.02206L26.4734 6.88935C26.9286 7.15713 27.3065 7.54229 27.5693 8.0061C27.832 8.46992 27.9704 8.99606 27.9704 9.53163V11.4966C27.9704 12.0321 27.832 12.5582 27.5693 13.0221C27.3065 13.4859 26.9286 13.871 26.4734 14.1388L23.3358 15.9939Z",fill:"#399CFF"}),(0,t.createElement)("path",{d:"M9.32303 7.7697L4.66451 10.5035V26.9796L1.50293 25.1184C1.04669 24.8514 0.667565 24.4665 0.403713 24.0027C0.139862 23.5388 0.000619462 23.0123 0 22.4761V9.52106C1.33505e-05 8.98549 0.138349 8.45935 0.401119 7.99554C0.663888 7.53172 1.04183 7.14657 1.49695 6.87878L3.16157 5.90242C3.6167 5.63463 4.13298 5.49365 4.65852 5.49365C5.18406 5.49365 5.70034 5.63463 6.15547 5.90242L9.32303 7.7697Z",fill:"#399CFF"}),(0,t.createElement)("path",{d:"M18.6502 13.2578L13.9797 16.0038L10.8121 17.8649C10.357 18.1327 9.84069 18.2737 9.31515 18.2737C8.78961 18.2737 8.27333 18.1327 7.8182 17.8649L4.63867 16.0038L9.30318 13.2639L12.4767 11.3966C12.9319 11.1288 13.4481 10.9878 13.9737 10.9878C14.4992 10.9878 15.0155 11.1288 15.4706 11.3966L18.6502 13.2578Z",fill:"#399CFF"})),render:()=>{if(!window.location.href.includes("site-editor.php"))return null;const e=(0,l.useSelect)((e=>e("core/editor").getEditorSettings()?.colors||[]),[]),[a,s]=(0,o.useState)({disableHeader:!1,disableFooter:!1,stickyHeader:!1,stickyHeaderOffset:0,transparentHeader:!1,scrollToTop:!1,smoothScroll:!1,relatedPosts:!1,authorBox:!1,lazyLoading:!1,stickyHeaderColor:null,transparentHeaderColor:"transparent"}),i=(e,t)=>{const n={...a,[e]:t};s(n),d(n),c()({path:"frontis/v1/global-settings",method:"POST",data:{setting:n}}).then((e=>{console.log("Settings updated:",e)})).catch((e=>{console.error("Error updating settings:",e),s(a)}))};(0,o.useEffect)((()=>{c()({path:"frontis/v1/global-settings"}).then((e=>{s(e),setTimeout((()=>{d(e)}),5e3)}))}),[]);const d=e=>{console.log(e);const t=document.querySelector("iframe.edit-site-visual-editor__editor-canvas"),n=t.contentDocument||t.contentWindow.document,a=n.querySelector("header"),l=n.querySelector("footer");e.disableHeader?(a.style.background="repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px)",a.style.opacity=".4"):(a.style.background="",a.style.opacity="1"),e.disableFooter?(l.style.background="repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px)",l.style.opacity=".4"):(l.style.background="",l.style.opacity="1"),e.stickyHeader?t&&t.contentDocument&&a&&(a.classList.add("fb-sticky-header"),a.style.paddingTop=`${e.stickyHeaderOffset}rem`,t.contentWindow.addEventListener("scroll",(function(){if(t.contentWindow.scrollY>50){a.classList.add("scrolled");const t=n.querySelector(".scrolled");t&&e.stickyHeaderColor&&t.style.setProperty("--wp--preset--sticky--bg",e.stickyHeaderColor)}else a.classList.remove("scrolled")}))):t&&t.contentDocument&&a&&(a.classList.remove("fb-sticky-header"),a.style.paddingTop=""),e.transparentHeader?t&&t.contentDocument&&a&&(a.classList.add("fb-transparent-header"),a.style.setProperty("--wp--preset--transparent--bg",e.transparentHeaderColor)):t&&t.contentDocument&&a&&a.classList.remove("fb-transparent-header")};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.PluginSidebarMoreMenuItem,{target:"frontis-panel"},"Frontis"),(0,t.createElement)(n.PluginSidebar,{name:"frontis-panel",title:"Frontis"},(0,t.createElement)(r.PanelBody,{title:"Header Settings"},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:"Enable Sticky Header",checked:a.stickyHeader,onChange:e=>i("stickyHeader",e)})),a.stickyHeader&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.RangeControl,{label:"Header Offset (Rem)",value:a.stickyHeaderOffset,onChange:e=>i("stickyHeaderOffset",e),min:0,max:100}),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("div",{className:"sticky-wrapper",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}},(0,t.createElement)("div",null,(0,t.createElement)("span",null,"Background Color")),(0,t.createElement)(r.Dropdown,{className:"fb-sticky-header-bg-dropdown",contentClassName:"fb-sticky-header-bg-dropdown-content",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:n})=>(0,t.createElement)(r.Button,{onClick:n,"aria-expanded":e,className:"fb-sticky-header-bg-btn"},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},(0,t.createElement)("path",{d:"M2.66699 14.666H13.3337",stroke:"#1C274C"}),(0,t.createElement)("path",{d:"M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291",stroke:"#1C274C"}))),renderContent:()=>(0,t.createElement)(r.ColorPalette,{colors:e,value:a.stickyHeaderColor,onChange:e=>i("stickyHeaderColor",e)})})))),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:"Enable Transparent Header",checked:a.transparentHeader,onChange:e=>i("transparentHeader",e)})),a.transparentHeader&&(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("div",{className:"sticky-wrapper",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}},(0,t.createElement)("div",null,(0,t.createElement)("span",null,"Background Color")),(0,t.createElement)(r.Dropdown,{className:"fb-sticky-header-bg-dropdown",contentClassName:"fb-sticky-header-bg-dropdown-content",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:n})=>(0,t.createElement)(r.Button,{onClick:n,"aria-expanded":e,className:"fb-sticky-header-bg-btn"},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},(0,t.createElement)("path",{d:"M2.66699 14.666H13.3337",stroke:"#1C274C"}),(0,t.createElement)("path",{d:"M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291",stroke:"#1C274C"}))),renderContent:()=>(0,t.createElement)(r.ColorPalette,{colors:e,value:a.transparentHeaderColor,onChange:e=>i("transparentHeaderColor",e)})})))),(0,t.createElement)(r.PanelBody,{title:"Disable Elements"},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:"Disable Header",checked:a.disableHeader,onChange:e=>i("disableHeader",e)})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:"Disable Footer",checked:a.disableFooter,onChange:e=>i("disableFooter",e)}))),(0,t.createElement)(r.PanelBody,{title:"Features"},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:"Scroll To Top",checked:a.scrollToTop,onChange:e=>i("scrollToTop",e)})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:"Enable Smooth Scroll",checked:a.smoothScroll,onChange:e=>i("smoothScroll",e)})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:"Enable Lazy Loading",checked:a.lazyLoading,onChange:e=>i("lazyLoading",e)})))))}})})();
//# sourceMappingURL=index.js.map
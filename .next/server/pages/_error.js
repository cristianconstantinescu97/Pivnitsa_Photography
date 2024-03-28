(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6968:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>c,getServerSideProps:()=>h,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>y,routeModule:()=>P,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>g});var i=r(7093),a=r(5244),s=r(1323),o=r(29),l=r(5143),d=r(8539),u=e([l]);l=(u.then?(await u)():u)[0];let c=(0,s.l)(d,"default"),p=(0,s.l)(d,"getStaticProps"),f=(0,s.l)(d,"getStaticPaths"),h=(0,s.l)(d,"getServerSideProps"),m=(0,s.l)(d,"config"),y=(0,s.l)(d,"reportWebVitals"),g=(0,s.l)(d,"unstable_getStaticProps"),x=(0,s.l)(d,"unstable_getStaticPaths"),b=(0,s.l)(d,"unstable_getStaticParams"),v=(0,s.l)(d,"unstable_getServerProps"),j=(0,s.l)(d,"unstable_getServerSideProps"),P=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:d});n()}catch(e){n(e)}})},8539:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(167),i=r(997),a=n._(r(6689)),s=n._(r(6665)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return(0,i.jsxs)("div",{style:d.error,children:[(0,i.jsx)(s.default,{children:(0,i.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,i.jsxs)("div",{style:d.desc,children:[(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,i.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,i.jsx)("div",{style:d.wrap,children:(0,i.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,i.jsx)(i.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}u.displayName="ErrorPage",u.getInitialProps=l,u.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2771:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6665:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return m}});let n=r(167),i=r(8760),a=r(997),s=i._(r(6689)),o=n._(r(8747)),l=r(8039),d=r(1988),u=r(2771);function c(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1558);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let a=!0,s=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){s=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,s.useContext)(l.AmpStateContext),n=(0,s.useContext)(d.HeadManagerContext);return(0,a.jsx)(o.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8747:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(6689),i=()=>{},a=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function o(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),a(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1558:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},5403:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>l});var i=r(997);r(6689);var a=r(6197),s=e([a]);a=(s.then?(await s)():s)[0];let o={hidden:{opacity:0,x:-200,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}},l=({children:e})=>i.jsx(a.motion.div,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{type:"linear"},className:"page",children:e});n()}catch(e){n(e)}})},4390:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>o});var i=r(997),a=r(6197);r(6689);var s=e([a]);a=(s.then?(await s)():s)[0];let o=()=>{let e={initial:{width:0},animate:{width:"30vw",transition:{duration:1.5,ease:"easeInOut",delay:.5}}};return i.jsx(a.AnimatePresence,{children:(0,i.jsxs)(a.motion.div,{className:"fixed inset-0 bg-white flex flex-col items-center justify-center z-100",variants:{initial:{opacity:1},animate:{opacity:0,transition:{delay:2.5,duration:.5}}},animate:"animate",children:[i.jsx("div",{className:"relative",children:i.jsx(a.motion.img,{src:"/logo.png",alt:"logo",className:"w-32 h-32 z-100",variants:{initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1.5,transition:{duration:2,delay:.75}}},initial:"initial",animate:"animate"})}),(0,i.jsxs)("div",{className:"flex absolute",style:{marginBottom:"-30vh"},children:[i.jsx(a.motion.div,{className:"h-0.5 bg-black",variants:e}),i.jsx(a.motion.div,{className:"h-0.5 bg-black",variants:e})]})]})})};n()}catch(e){n(e)}})},5143:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>u});var i=r(997);r(108);var a=r(6197),s=r(5403),o=r(4390),l=r(6689),d=e([a,s,o]);function u({Component:e,pageProps:t,router:r}){let[n,d]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=setTimeout(()=>{d(!0)},3e3);return()=>clearTimeout(e)},[]),(0,i.jsxs)(i.Fragment,{children:[!n&&i.jsx(o.Z,{}),i.jsx(a.AnimatePresence,{mode:"wait",onExitComplete:()=>window.scrollTo(0,0),children:i.jsx(s.Z,{children:i.jsx(e,{...t})},r.route)})]})}[a,s,o]=d.then?(await d)():d,n()}catch(e){n(e)}})},29:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(997),i=r(6859);function a(){return(0,n.jsxs)(i.Html,{lang:"en",children:[n.jsx(i.Head,{}),n.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap",rel:"stylesheet"}),(0,n.jsxs)("body",{children:[n.jsx(i.Main,{}),n.jsx(i.NextScript,{})]})]})}},108:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},6197:e=>{"use strict";e.exports=import("framer-motion")},1017:e=>{"use strict";e.exports=require("path")},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var o=a?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(i,s,o):i[s]=e[s]}return i.default=e,n&&n.set(e,i),i}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[859],()=>r(6968));module.exports=n})();
/*! For license information please see _common_react-router.f9f028b527d4da983698.js.LICENSE.txt */
"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[621],{8689:(e,t,r)=>{var a;r.d(t,{$P:()=>h,BV:()=>N,C5:()=>B,Ix:()=>P,Zp:()=>g,jb:()=>s,qh:()=>D,x$:()=>C,zy:()=>v});var n=r(7810),o=r(1534);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}const i=n.createContext(null),u=n.createContext(null),s=n.createContext(null),c=n.createContext(null),p=n.createContext({outlet:null,matches:[],isDataRoute:!1}),d=n.createContext(null);function h(e,t){let{relative:r}=void 0===t?{}:t;m()||(0,o.Oi)(!1);let{basename:a,navigator:l}=n.useContext(s),{hash:i,pathname:u,search:c}=C(e,{relative:r}),p=u;return"/"!==a&&(p="/"===u?a:(0,o.HS)([a,u])),l.createHref({pathname:p,search:c,hash:i})}function m(){return null!=n.useContext(c)}function v(){return m()||(0,o.Oi)(!1),n.useContext(c).location}function f(e){n.useContext(s).static||n.useLayoutEffect(e)}function g(){let{isDataRoute:e}=n.useContext(p);return e?function(){let{router:e}=function(e){let t=n.useContext(i);return t||(0,o.Oi)(!1),t}(R.UseNavigateStable),t=k(S.UseNavigateStable),r=n.useRef(!1);return f((()=>{r.current=!0})),n.useCallback((function(a,n){void 0===n&&(n={}),r.current&&("number"==typeof a?e.navigate(a):e.navigate(a,l({fromRouteId:t},n)))}),[e,t])}():function(){m()||(0,o.Oi)(!1);let e=n.useContext(i),{basename:t,future:r,navigator:a}=n.useContext(s),{matches:l}=n.useContext(p),{pathname:u}=v(),c=JSON.stringify((0,o.yD)(l,r.v7_relativeSplatPath)),d=n.useRef(!1);return f((()=>{d.current=!0})),n.useCallback((function(r,n){if(void 0===n&&(n={}),!d.current)return;if("number"==typeof r)return void a.go(r);let l=(0,o.Gh)(r,JSON.parse(c),u,"path"===n.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:(0,o.HS)([t,l.pathname])),(n.replace?a.replace:a.push)(l,n.state,n)}),[t,a,c,u,e])}()}function C(e,t){let{relative:r}=void 0===t?{}:t,{future:a}=n.useContext(s),{matches:l}=n.useContext(p),{pathname:i}=v(),u=JSON.stringify((0,o.yD)(l,a.v7_relativeSplatPath));return n.useMemo((()=>(0,o.Gh)(e,JSON.parse(u),i,"path"===r)),[e,u,i,r])}function x(e,t,r,a){m()||(0,o.Oi)(!1);let{navigator:i}=n.useContext(s),{matches:u}=n.useContext(p),d=u[u.length-1],h=d?d.params:{},f=(d&&d.pathname,d?d.pathnameBase:"/");d&&d.route;let g,C=v();if(t){var x;let e="string"==typeof t?(0,o.Rr)(t):t;"/"===f||(null==(x=e.pathname)?void 0:x.startsWith(f))||(0,o.Oi)(!1),g=e}else g=C;let y=g.pathname||"/",R=y;if("/"!==f){let e=f.replace(/^\//,"").split("/");R="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let S=(0,o.ue)(e,{pathname:R}),k=function(e,t,r,a){var l;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var i;if(null==(i=r)||!i.errors)return null;e=r.matches}let u=e,s=null==(l=r)?void 0:l.errors;if(null!=s){let e=u.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||(0,o.Oi)(!1),u=u.slice(0,Math.min(u.length,e+1))}let c=!1,p=-1;if(r&&a&&a.v7_partialHydration)for(let e=0;e<u.length;e++){let t=u[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(p=e),t.route.id){let{loaderData:e,errors:a}=r,n=t.route.loader&&void 0===e[t.route.id]&&(!a||void 0===a[t.route.id]);if(t.route.lazy||n){c=!0,u=p>=0?u.slice(0,p+1):[u[0]];break}}}return u.reduceRight(((e,a,o)=>{let l,i=!1,d=null,h=null;var m;r&&(l=s&&a.route.id?s[a.route.id]:void 0,d=a.route.errorElement||E,c&&(p<0&&0===o?(U[m="route-fallback"]||(U[m]=!0),i=!0,h=null):p===o&&(i=!0,h=a.route.hydrateFallbackElement||null)));let v=t.concat(u.slice(0,o+1)),f=()=>{let t;return t=l?d:i?h:a.route.Component?n.createElement(a.route.Component,null):a.route.element?a.route.element:e,n.createElement(O,{match:a,routeContext:{outlet:e,matches:v,isDataRoute:null!=r},children:t})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?n.createElement(b,{location:r.location,revalidation:r.revalidation,component:d,error:l,children:f(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):f()}),null)}(S&&S.map((e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:(0,o.HS)([f,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:(0,o.HS)([f,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,a);return t&&k?n.createElement(c.Provider,{value:{location:l({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:o.rc.Pop}},k):k}function y(){let e=function(){var e;let t=n.useContext(d),r=function(e){let t=n.useContext(u);return t||(0,o.Oi)(!1),t}(S.UseRouteError),a=k(S.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[a]}(),t=(0,o.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:a},r):null,null)}const E=n.createElement(y,null);class b extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?n.createElement(p.Provider,{value:this.props.routeContext},n.createElement(d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O(e){let{routeContext:t,match:r,children:a}=e,o=n.useContext(i);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(p.Provider,{value:t},a)}var R=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(R||{}),S=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(S||{});function k(e){let t=function(e){let t=n.useContext(p);return t||(0,o.Oi)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,o.Oi)(!1),r.route.id}const U={};function B(e){let{to:t,replace:r,state:a,relative:l}=e;m()||(0,o.Oi)(!1);let{future:i,static:u}=n.useContext(s),{matches:c}=n.useContext(p),{pathname:d}=v(),h=g(),f=(0,o.Gh)(t,(0,o.yD)(c,i.v7_relativeSplatPath),d,"path"===l),C=JSON.stringify(f);return n.useEffect((()=>h(JSON.parse(C),{replace:r,state:a,relative:l})),[h,C,l,r,a]),null}function D(e){(0,o.Oi)(!1)}function P(e){let{basename:t="/",children:r=null,location:a,navigationType:i=o.rc.Pop,navigator:u,static:p=!1,future:d}=e;m()&&(0,o.Oi)(!1);let h=t.replace(/^\/*/,"/"),v=n.useMemo((()=>({basename:h,navigator:u,static:p,future:l({v7_relativeSplatPath:!1},d)})),[h,d,u,p]);"string"==typeof a&&(a=(0,o.Rr)(a));let{pathname:f="/",search:g="",hash:C="",state:x=null,key:y="default"}=a,E=n.useMemo((()=>{let e=(0,o.pb)(f,h);return null==e?null:{location:{pathname:e,search:g,hash:C,state:x,key:y},navigationType:i}}),[h,f,g,C,x,y,i]);return null==E?null:n.createElement(s.Provider,{value:v},n.createElement(c.Provider,{children:r,value:E}))}function N(e){let{children:t,location:r}=e;return x(L(t),r)}function L(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,a)=>{if(!n.isValidElement(e))return;let l=[...t,a];if(e.type===n.Fragment)return void r.push.apply(r,L(e.props.children,l));e.type!==D&&(0,o.Oi)(!1),e.props.index&&e.props.children&&(0,o.Oi)(!1);let i={id:e.props.id||l.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=L(e.props.children,l)),r.push(i)})),r}(a||(a=r.t(n,2))).startTransition,new Promise((()=>{})),n.Component}}]);
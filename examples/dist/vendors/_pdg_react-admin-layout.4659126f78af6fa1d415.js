"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[218],{3388:(n,e,t)=>{t.d(e,{i:()=>ln});var r=t(9437),o=t(7581),i=t(1376),a=t(7655),l=t(9252),u=t(3481),c=t(4459),s=t(1050),m=t(6186),d=t(2262),p=t(8110),f=t(5752),x=t(111),g=t(7527),h=t(702),b=t(500),y=t(7810),v=t(8689),A=t(4566),M=t(3112),E=t(8498),B=t(2913);!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}('.simplebar-track.simplebar-vertical {\n  width: 8px !important;\n}\n.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before {\n  opacity: 0.3 !important;\n}\n\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined {\n  padding: 5px 15px 4px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeLarge {\n  padding: 7px 21px 6px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeSmall {\n  padding: 3px 9px 2px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained {\n  padding: 6px 16px 5px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeLarge {\n  padding: 8px 22px 7px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeSmall {\n  padding: 4px 10px 3px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-text {\n  padding: 6px 8px 5px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeLarge {\n  padding: 8px 11px 7px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeSmall {\n  padding: 4px 5px 3px;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\nmain,\ninput,\nbutton,\ntextarea,\npre,\nselect,\na {\n  font-family: "Pretendard", "Apple Gothic", "Dotum", sans-serif;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  box-sizing: border-box;\n  word-break: keep-all;\n  line-height: unset;\n}\n\n*:before,\n*:after {\n  box-sizing: border-box;\n}');var k=function(n){var e=n.info,t=n.badgeVariant,m=n.onClick,d=(0,r.A)(),p=(0,v.zy)(),f=(0,y.useState)(!1),x=f[0],g=f[1],h=(0,y.useState)(!1),b=h[0],M=h[1];(0,y.useEffect)((function(){g(!!e&&(0,E.z2)(e.items)),e.items&&e.items.find((function(n){return p.pathname===n.uri}))&&M(!0)}),[e]),(0,y.useEffect)((function(){x&&null!=b&&e.uri!==p.pathname&&e.items&&!e.items.find((function(n){return p.pathname===n.uri}))&&b&&M(!1),x&&!b&&e.items&&e.items.find((function(n){return p.pathname===n.uri}))&&M(!0)}),[p]);var B=(0,y.useCallback)((function(){M((function(n){return!n}))}),[]),C=(0,y.useMemo)((function(){return e.icon?e.icon.replace(/[A-Z]/g,(function(n,e){return"".concat(e>0?"_":"").concat(n.toLowerCase())})):void 0}),[e]),z=(0,y.useMemo)((function(){return{backgroundColor:x&&b?(0,o.X4)(d.palette.primary.main,d.palette.action.selectedOpacity/2):void 0}}),[b,x,d]),w=(0,y.useMemo)((function(){return x&&null!=b?{marginTop:"auto",marginBottom:"auto",animation:"".concat(b?"open":"close"," 0.1s linear"),transform:"rotate(".concat(b?180:0,"deg)"),"@keyframes open":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(180deg)"}},"@keyframes close":{"0%":{transform:"rotate(180deg)"},"100%":{transform:"rotate(0deg)"}}}:{marginTop:"auto",marginBottom:"auto"}}),[x,b]),S=(0,y.useMemo)((function(){return{backgroundColor:b?(0,o.X4)(d.palette.primary.main,d.palette.action.selectedOpacity/2):void 0}}),[b,d]),V=(0,y.useMemo)((function(){return{sx:{fontWeight:1===e.depth?600:null}}}),[e]);return y.createElement(y.Fragment,null,y.createElement(i.A,{onClick:x?B:function(){m&&m(e)},selected:!x&&e.uri===p.pathname,style:z},y.createElement(a.A,{sx:{minWidth:30}},C&&y.createElement(l.A,{fontSize:"small"},C)),y.createElement(u.A,{primaryTypographyProps:V},e.badge?y.createElement(c.A,{badgeContent:e.badge,color:"error",variant:void 0!==t?t:e.badgeVariant,anchorOrigin:{horizontal:"left",vertical:"top"},slotProps:{badge:{style:{left:"100%",top:"50%",transform:"scale(.8) translate(10px, -50%)"}}}},y.createElement("div",null,e.name)):e.name),x&&y.createElement(A.A,{sx:w})),y.createElement(s.A,{in:b,style:S},x&&e.items&&e.items.map((function(n,e){return y.createElement(k,{key:e,badgeVariant:t,info:n,onClick:m})}))))};function C(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}"function"==typeof SuppressedError&&SuppressedError;var z,w,S,V,_,T,I,L,P,O,D=(0,m.Ay)(d.A)(z||(z=C(["\n  padding: 0;\n"],["\n  padding: 0;\n"]))),N=function(n){var e=n.list,t=n.badgeVariant,r=n.onClick;return y.createElement(D,null,e.map((function(n,e){return y.createElement(k,{key:e,info:n,badgeVariant:t,onClick:r})})))},j=(0,m.Ay)(B.A)(w||(w=C(["\n  max-height: 100%;\n"],["\n  max-height: 100%;\n"]))),G=(0,m.Ay)(p.A)((function(n){return n.theme.unstable_sx({borderBottom:"thin solid #f5f5f5",color:"text.primary"})})),W=function(n){var e=n.logo,t=n.badgeVariant,r=n.list,o=n.onClick;return y.createElement(j,null,y.createElement(G,null,y.createElement(f.A,null,e)),r&&y.createElement(N,{badgeVariant:t,list:r,onClick:o}))},Z=(0,m.Ay)(p.A)(S||(S=C(["\n  position: relative;\n"],["\n  position: relative;\n"]))),q=(0,m.Ay)(p.A)((function(n){return n.theme.unstable_sx({display:{xs:"none",sm:"flex"},alignItems:"center",opacity:.5})})),F=(0,m.Ay)(p.A)(V||(V=C(["\n  margin-right: 0.25rem;\n  line-height: 0;\n"],["\n  margin-right: 0.25rem;\n  line-height: 0;\n"]))),H=(0,m.Ay)(l.A)(_||(_=C(["\n  font-size: 1rem;\n"],["\n  font-size: 1rem;\n"]))),X=(0,m.Ay)(x.A)(T||(T=C(["\n  font-size: 0.7rem;\n"],["\n  font-size: 0.7rem;\n"]))),J=(0,m.Ay)("div")(I||(I=C(["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"],["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"]))),K=(0,m.Ay)("div")(L||(L=C(["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"],["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"]))),Q=function(n){var e=n.title,t=n.icon,r=n.headTitle,o=n.headIcon,i=(0,y.useMemo)((function(){return o?o.replace(/[A-Z]/g,(function(n,e){return"".concat(e>0?"_":"").concat(n.toLowerCase())})):void 0}),[o]),a=(0,y.useMemo)((function(){return t?t.replace(/[A-Z]/g,(function(n,e){return"".concat(e>0?"_":"").concat(n.toLowerCase())})):void 0}),[t]);return y.createElement(Z,null,r&&y.createElement(q,null,i&&y.createElement(F,null,y.createElement(H,null,i)),y.createElement(X,null,r)),y.createElement(J,null,a&&y.createElement(K,null,y.createElement(l.A,{fontSize:"small"},a)),y.createElement("div",null,e)))},R=220,U=(0,m.Ay)(p.A)(P||(P=C(["\n  display: flex;\n  height: 100%;\n"],["\n  display: flex;\n  height: 100%;\n"]))),Y=(0,m.Ay)(g.A)((function(n){return n.theme.unstable_sx({backdropFilter:"blur(20px)",backgroundColor:"rgba(255, 255, 255, 0.7)",color:"text.primary",borderBottom:"thin solid #f5f5f5"})})),$=(0,m.Ay)(p.A)((function(n){return n.theme.unstable_sx({})})),nn=(0,m.Ay)(h.Ay)((function(n){return n.theme.unstable_sx({"& .MuiDrawer-paper":{boxSizing:"border-box",width:R}})})),en=(0,m.Ay)(h.Ay)((function(n){return n.theme.unstable_sx({"& .MuiDrawer-paper":{boxSizing:"border-box",width:R}})})),tn=(0,m.Ay)(p.A)((function(n){return n.theme.unstable_sx({flexGrow:1,p:2,display:"flex",flexDirection:"column",minHeight:"100vh"})})),rn=(0,m.Ay)("div")(O||(O=C(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"],["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"]))),on=["xs","sm","md","lg","xl"],an=function(n){return"xs"===n?"sm":"sm"===n?"md":"md"===n?"lg":"xl"},ln=function(n){var e=n.children,t=n.logo,r=n.badgeVariant,o=n.menu,i=n.menuHideScreen,a=n.appBarControl,l=n.onMenuClick,u=(0,v.zy)(),c=(0,y.useState)(!1),s=c[0],m=c[1],d=(0,y.useState)({}),p=d[0],g=d[1],h=(0,y.useState)(),A=h[0],B=h[1],k=(0,y.useState)(i||"sm"),C=k[0],z=k[1];(0,y.useEffect)((function(){var n={};o&&o.forEach((function(e){(0,E.Ie)(e.uri)&&e.items&&e.items.length>0?e.items.map((function(t){n[t.uri]={name:t.name,parentName:e.name,parentIcon:e.icon}})):e.uri&&(n[e.uri]={name:e.name,icon:e.icon})})),g(n)}),[o]),(0,y.useEffect)((function(){z(i||"sm")}),[i]),(0,y.useEffect)((function(){if(p){var n=p[u.pathname];B(n?y.createElement(Q,{title:n.name,icon:n.icon,headTitle:n.parentName,headIcon:n.parentIcon}):void 0)}}),[u,p]);var w=(0,y.useCallback)((function(){m((function(n){return!n}))}),[]),S=(0,y.useMemo)((function(){var n={},e={};return n[an(C)]="calc(100% - ".concat(R,"px)"),e[an(C)]="".concat(R,"px"),{width:n,ml:e}}),[C]),V=(0,y.useMemo)((function(){var n={};return n[an(C)]="none",{mr:2,display:n}}),[C]),_=(0,y.useMemo)((function(){var n={},e={};return n[an(C)]=R,e[an(C)]=0,{width:n,flexShrink:e}}),[C]),T=(0,y.useMemo)((function(){var n=!1;return{display:on.reduce((function(e,t){return t===C?(n=!0,e[t]="block"):e[t]=n?"none":"block",e}),{})}}),[C]),I=(0,y.useMemo)((function(){var n=!1;return{display:on.reduce((function(e,t){return t===C?(n=!0,e[t]="none"):e[t]=n?"block":"none",e}),{})}}),[C]),L=(0,y.useMemo)((function(){var n={};return n[an(C)]="calc(100% - ".concat(R,"px)"),{width:n}}),[C]);return y.createElement(U,null,y.createElement(Y,{position:"fixed",elevation:0,sx:S},y.createElement(f.A,null,y.createElement(b.A,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:w,sx:V},y.createElement(M.A,null)),y.createElement(x.A,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1}},A),a)),y.createElement($,{component:"nav","aria-label":"mailbox folders",sx:_},y.createElement(nn,{variant:"temporary",open:s,onClose:w,sx:T,ModalProps:{keepMounted:!0}},o&&y.createElement(W,{logo:t,badgeVariant:r,list:o,onClick:function(n){w(),l&&l(n)}})),y.createElement(en,{variant:"permanent",open:!0,sx:I},o&&y.createElement(W,{logo:t,badgeVariant:r,list:o,onClick:l}))),y.createElement(tn,{component:"main",sx:L},y.createElement(f.A,null),y.createElement(rn,null,e)))}}}]);
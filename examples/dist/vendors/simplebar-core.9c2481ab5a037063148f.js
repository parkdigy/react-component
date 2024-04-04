"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[884],{6265:(e,t,i)=>{i.d(t,{A:()=>w});var s=i(6042),l=i(566),r=i(1152),o=function(){return o=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},o.apply(this,arguments)},n=null,a=null;function c(){if(null===n){if("undefined"==typeof document)return n=0;var e=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),e.appendChild(t);var i=t.getBoundingClientRect().right;e.removeChild(t),n=i}return n}function h(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function u(e){return e&&e.ownerDocument?e.ownerDocument:document}r&&window.addEventListener("resize",(function(){a!==window.devicePixelRatio&&(a=window.devicePixelRatio,n=null)}));var d=function(e){return Array.prototype.reduce.call(e,(function(e,t){var i=t.name.match(/data-simplebar-(.+)/);if(i){var s=i[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[s]=!0;break;case"false":e[s]=!1;break;case void 0:e[s]=!0;break;default:e[s]=t.value}}return e}),{})};function p(e,t){var i;e&&(i=e.classList).add.apply(i,t.split(" "))}function v(e,t){e&&t.split(" ").forEach((function(t){e.classList.remove(t)}))}function f(e){return".".concat(e.split(" ").join("."))}var g=Object.freeze({__proto__:null,getElementWindow:h,getElementDocument:u,getOptions:d,addClasses:p,removeClasses:v,classNamesToQuery:f}),b=h,x=u,m=d,y=p,E=v,S=f,w=function(){function e(t,i){void 0===i&&(i={});var r=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var e=b(r.el);r.scrollXTicking||(e.requestAnimationFrame(r.scrollX),r.scrollXTicking=!0),r.scrollYTicking||(e.requestAnimationFrame(r.scrollY),r.scrollYTicking=!0),r.isScrolling||(r.isScrolling=!0,y(r.el,r.classNames.scrolling)),r.showScrollbar("x"),r.showScrollbar("y"),r.onStopScrolling()},this.scrollX=function(){r.axis.x.isOverflowing&&r.positionScrollbar("x"),r.scrollXTicking=!1},this.scrollY=function(){r.axis.y.isOverflowing&&r.positionScrollbar("y"),r.scrollYTicking=!1},this._onStopScrolling=function(){E(r.el,r.classNames.scrolling),r.options.autoHide&&(r.hideScrollbar("x"),r.hideScrollbar("y")),r.isScrolling=!1},this.onMouseEnter=function(){r.isMouseEntering||(y(r.el,r.classNames.mouseEntered),r.showScrollbar("x"),r.showScrollbar("y"),r.isMouseEntering=!0),r.onMouseEntered()},this._onMouseEntered=function(){E(r.el,r.classNames.mouseEntered),r.options.autoHide&&(r.hideScrollbar("x"),r.hideScrollbar("y")),r.isMouseEntering=!1},this._onMouseMove=function(e){r.mouseX=e.clientX,r.mouseY=e.clientY,(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseMoveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseMoveForAxis("y")},this.onMouseLeave=function(){r.onMouseMove.cancel(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseLeaveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseLeaveForAxis("y"),r.mouseX=-1,r.mouseY=-1},this._onWindowResize=function(){r.scrollbarWidth=r.getScrollbarWidth(),r.hideNativeScrollbar()},this.onPointerEvent=function(e){var t,i;r.axis.x.track.el&&r.axis.y.track.el&&r.axis.x.scrollbar.el&&r.axis.y.scrollbar.el&&(r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&(t=r.isWithinBounds(r.axis.x.track.rect)),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&(i=r.isWithinBounds(r.axis.y.track.rect)),(t||i)&&(e.stopPropagation(),"pointerdown"===e.type&&"touch"!==e.pointerType&&(t&&(r.axis.x.scrollbar.rect=r.axis.x.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.x.scrollbar.rect)?r.onDragStart(e,"x"):r.onTrackClick(e,"x")),i&&(r.axis.y.scrollbar.rect=r.axis.y.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.scrollbar.rect)?r.onDragStart(e,"y"):r.onTrackClick(e,"y")))))},this.drag=function(t){var i,s,l,o,n,a,c,h,u,d,p;if(r.draggedAxis&&r.contentWrapperEl){var v=r.axis[r.draggedAxis].track,f=null!==(s=null===(i=v.rect)||void 0===i?void 0:i[r.axis[r.draggedAxis].sizeAttr])&&void 0!==s?s:0,g=r.axis[r.draggedAxis].scrollbar,b=null!==(o=null===(l=r.contentWrapperEl)||void 0===l?void 0:l[r.axis[r.draggedAxis].scrollSizeAttr])&&void 0!==o?o:0,x=parseInt(null!==(a=null===(n=r.elStyles)||void 0===n?void 0:n[r.axis[r.draggedAxis].sizeAttr])&&void 0!==a?a:"0px",10);t.preventDefault(),t.stopPropagation();var m=("y"===r.draggedAxis?t.pageY:t.pageX)-(null!==(h=null===(c=v.rect)||void 0===c?void 0:c[r.axis[r.draggedAxis].offsetAttr])&&void 0!==h?h:0)-r.axis[r.draggedAxis].dragOffset,y=(m="x"===r.draggedAxis&&r.isRtl?(null!==(d=null===(u=v.rect)||void 0===u?void 0:u[r.axis[r.draggedAxis].sizeAttr])&&void 0!==d?d:0)-g.size-m:m)/(f-g.size)*(b-x);"x"===r.draggedAxis&&r.isRtl&&(y=(null===(p=e.getRtlHelpers())||void 0===p?void 0:p.isScrollingToNegative)?-y:y),r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr]=y}},this.onEndDrag=function(e){var t=x(r.el),i=b(r.el);e.preventDefault(),e.stopPropagation(),E(r.el,r.classNames.dragging),t.removeEventListener("mousemove",r.drag,!0),t.removeEventListener("mouseup",r.onEndDrag,!0),r.removePreventClickId=i.setTimeout((function(){t.removeEventListener("click",r.preventClick,!0),t.removeEventListener("dblclick",r.preventClick,!0),r.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=t,this.options=o(o({},e.defaultOptions),i),this.classNames=o(o({},e.defaultOptions.classNames),i.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},"object"!=typeof this.el||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=(0,s.A)(this._onMouseMove,64),this.onWindowResize=(0,l.A)(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=(0,l.A)(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=(0,l.A)(this._onMouseEntered,this.stopScrollDelay),this.init()}return e.getRtlHelpers=function(){if(e.rtlHelpers)return e.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var i=t.firstElementChild,s=null==i?void 0:i.firstElementChild;if(!s)return null;document.body.appendChild(i),i.scrollLeft=0;var l=e.getOffset(i),r=e.getOffset(s);i.scrollLeft=-999;var o=e.getOffset(s);return document.body.removeChild(i),e.rtlHelpers={isScrollOriginAtZero:l.left!==r.left,isScrollingToNegative:r.left!==o.left},e.rtlHelpers},e.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:c()}catch(e){return c()}},e.getOffset=function(e){var t=e.getBoundingClientRect(),i=x(e),s=b(e);return{top:t.top+(s.pageYOffset||i.documentElement.scrollTop),left:t.left+(s.pageXOffset||i.documentElement.scrollLeft)}},e.prototype.init=function(){r&&(this.initDOM(),this.rtlHelpers=e.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.prototype.initDOM=function(){var e,t;this.wrapperEl=this.el.querySelector(S(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(S(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(S(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(S(this.classNames.offset)),this.maskEl=this.el.querySelector(S(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,S(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(S(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(S(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(S(this.classNames.track)).concat(S(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(S(this.classNames.track)).concat(S(this.classNames.vertical))),this.axis.x.scrollbar.el=(null===(e=this.axis.x.track.el)||void 0===e?void 0:e.querySelector(S(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=(null===(t=this.axis.y.track.el)||void 0===t?void 0:t.querySelector(S(this.classNames.scrollbar)))||null,this.options.autoHide||(y(this.axis.x.scrollbar.el,this.classNames.visible),y(this.axis.y.scrollbar.el,this.classNames.visible))},e.prototype.initListeners=function(){var e,t=this,i=b(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),null===(e=this.contentWrapperEl)||void 0===e||e.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize),this.contentEl){if(window.ResizeObserver){var s=!1,l=i.ResizeObserver||ResizeObserver;this.resizeObserver=new l((function(){s&&i.requestAnimationFrame((function(){t.recalculate()}))})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame((function(){s=!0}))}this.mutationObserver=new i.MutationObserver((function(){i.requestAnimationFrame((function(){t.recalculate()}))})),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},e.prototype.recalculate=function(){if(this.heightAutoObserverEl&&this.contentEl&&this.contentWrapperEl&&this.wrapperEl&&this.placeholderEl){var e=b(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.contentEl.offsetWidth,i=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||t>0,l=this.contentWrapperEl.offsetWidth,r=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var n=this.contentEl.scrollHeight,a=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=s?"".concat(t||a,"px"):"auto",this.placeholderEl.style.height="".concat(n,"px");var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==t&&a>t,this.axis.y.isOverflowing=n>c,this.axis.x.isOverflowing="hidden"!==r&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,u=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&a>l-u,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&n>c-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},e.prototype.getScrollbarSize=function(e){var t,i;if(void 0===e&&(e="y"),!this.axis[e].isOverflowing||!this.contentEl)return 0;var s,l=this.contentEl[this.axis[e].scrollSizeAttr],r=null!==(i=null===(t=this.axis[e].track.el)||void 0===t?void 0:t[this.axis[e].offsetSizeAttr])&&void 0!==i?i:0,o=r/l;return s=Math.max(~~(o*r),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(s=Math.min(s,this.options.scrollbarMaxSize)),s},e.prototype.positionScrollbar=function(t){var i,s,l;void 0===t&&(t="y");var r=this.axis[t].scrollbar;if(this.axis[t].isOverflowing&&this.contentWrapperEl&&r.el&&this.elStyles){var o=this.contentWrapperEl[this.axis[t].scrollSizeAttr],n=(null===(i=this.axis[t].track.el)||void 0===i?void 0:i[this.axis[t].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[t].sizeAttr],10),c=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];c="x"===t&&this.isRtl&&(null===(s=e.getRtlHelpers())||void 0===s?void 0:s.isScrollOriginAtZero)?-c:c,"x"===t&&this.isRtl&&(c=(null===(l=e.getRtlHelpers())||void 0===l?void 0:l.isScrollingToNegative)?c:-c);var h=c/(o-a),u=~~((n-r.size)*h);u="x"===t&&this.isRtl?-u+(n-r.size):u,r.el.style.transform="x"===t?"translate3d(".concat(u,"px, 0, 0)"):"translate3d(0, ".concat(u,"px, 0)")}},e.prototype.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,i=this.axis[e].scrollbar.el;t&&i&&this.contentWrapperEl&&(this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(e))):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(e))),this.axis[e].isOverflowing?i.style.display="block":i.style.display="none")},e.prototype.showScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&!this.axis[e].scrollbar.isVisible&&(y(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!0)},e.prototype.hideScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&this.axis[e].scrollbar.isVisible&&(E(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!1)},e.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},e.prototype.onMouseMoveForAxis=function(e){void 0===e&&(e="y");var t=this.axis[e];t.track.el&&t.scrollbar.el&&(t.track.rect=t.track.el.getBoundingClientRect(),t.scrollbar.rect=t.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(t.track.rect)?(this.showScrollbar(e),y(t.track.el,this.classNames.hover),this.isWithinBounds(t.scrollbar.rect)?y(t.scrollbar.el,this.classNames.hover):E(t.scrollbar.el,this.classNames.hover)):(E(t.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)))},e.prototype.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),E(this.axis[e].track.el,this.classNames.hover),E(this.axis[e].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)},e.prototype.onDragStart=function(e,t){var i;void 0===t&&(t="y");var s=x(this.el),l=b(this.el),r=this.axis[t].scrollbar,o="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=o-((null===(i=r.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])||0),this.draggedAxis=t,y(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(l.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.prototype.onTrackClick=function(e,t){var i,s,l,r,o=this;void 0===t&&(t="y");var n=this.axis[t];if(this.options.clickOnTrack&&n.scrollbar.el&&this.contentWrapperEl){e.preventDefault();var a=b(this.el);this.axis[t].scrollbar.rect=n.scrollbar.el.getBoundingClientRect();var c=null!==(s=null===(i=this.axis[t].scrollbar.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])&&void 0!==s?s:0,h=parseInt(null!==(r=null===(l=this.elStyles)||void 0===l?void 0:l[this.axis[t].sizeAttr])&&void 0!==r?r:"0px",10),u=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],d=("y"===t?this.mouseY-c:this.mouseX-c)<0?-1:1,p=-1===d?u-h:u+h,v=function(){o.contentWrapperEl&&(-1===d?u>p&&(u-=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=u,a.requestAnimationFrame(v)):u<p&&(u+=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=u,a.requestAnimationFrame(v)))};v()}},e.prototype.getContentElement=function(){return this.contentEl},e.prototype.getScrollElement=function(){return this.contentWrapperEl},e.prototype.removeListeners=function(){var e=b(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},e.prototype.unMount=function(){this.removeListeners()},e.prototype.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},e.prototype.findChild=function(e,t){var i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return i.call(e,t)}))[0]},e.rtlHelpers=null,e.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},e.getOptions=m,e.helpers=g,e}()}}]);
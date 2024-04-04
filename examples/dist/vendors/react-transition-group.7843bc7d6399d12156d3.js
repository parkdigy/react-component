"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[270],{7279:(t,n,e)=>{e.d(n,{Ay:()=>E});var i=e(6887),r=e(2189),o=e(7810),a=e(2483);var s=e(3079),u="unmounted",l="exited",c="entering",p="entered",d="exiting",h=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var r,o=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?o?(r=l,i.appearStatus=c):r=p:r=n.unmountOnExit||n.mountOnEnter?u:l,i.state={status:r},i.nextCallback=null,i}(0,r.A)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===u?{status:l}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==c&&e!==p&&(n=c):e!==c&&e!==p||(n=d)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!=typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===c){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this);e&&function(t){t.scrollTop}(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:u})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,r=this.props.nodeRef?[i]:[a.findDOMNode(this),i],o=r[0],s=r[1],u=this.getTimeouts(),l=i?u.appear:u.enter;t||e?(this.props.onEnter(o,s),this.safeSetState({status:c},(function(){n.props.onEntering(o,s),n.onTransitionEnd(l,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(o,s)}))}))}))):this.safeSetState({status:p},(function(){n.props.onEntered(o)}))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:a.findDOMNode(this);n?(this.props.onExit(i),this.safeSetState({status:d},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:l},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:l},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],o=r[0],s=r[1];this.props.addEndListener(o,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===u)return null;var n=this.props,e=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.A)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(s.A.Provider,{value:null},"function"==typeof e?e(t,r):o.cloneElement(o.Children.only(e),r))},n}(o.Component);function f(){}h.contextType=s.A,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},h.UNMOUNTED=u,h.EXITED=l,h.ENTERING=c,h.ENTERED=p,h.EXITING=d;const E=h},9449:(t,n,e)=>{e.d(n,{A:()=>f});var i=e(6887),r=e(4180),o=e(9261),a=e(2189),s=e(7810),u=e(3079);function l(t,n){var e=Object.create(null);return t&&s.Children.map(t,(function(t){return t})).forEach((function(t){e[t.key]=function(t){return n&&(0,s.isValidElement)(t)?n(t):t}(t)})),e}function c(t,n,e){return null!=e[n]?e[n]:t.props[n]}function p(t,n,e){var i=l(t.children),r=function(t,n){function e(e){return e in n?n[e]:t[e]}t=t||{},n=n||{};var i,r=Object.create(null),o=[];for(var a in t)a in n?o.length&&(r[a]=o,o=[]):o.push(a);var s={};for(var u in n){if(r[u])for(i=0;i<r[u].length;i++){var l=r[u][i];s[r[u][i]]=e(l)}s[u]=e(u)}for(i=0;i<o.length;i++)s[o[i]]=e(o[i]);return s}(n,i);return Object.keys(r).forEach((function(o){var a=r[o];if((0,s.isValidElement)(a)){var u=o in n,l=o in i,p=n[o],d=(0,s.isValidElement)(p)&&!p.props.in;!l||u&&!d?l||!u||d?l&&u&&(0,s.isValidElement)(p)&&(r[o]=(0,s.cloneElement)(a,{onExited:e.bind(null,a),in:p.props.in,exit:c(a,"exit",t),enter:c(a,"enter",t)})):r[o]=(0,s.cloneElement)(a,{in:!1}):r[o]=(0,s.cloneElement)(a,{onExited:e.bind(null,a),in:!0,exit:c(a,"exit",t),enter:c(a,"enter",t)})}})),r}var d=Object.values||function(t){return Object.keys(t).map((function(n){return t[n]}))},h=function(t){function n(n,e){var i,r=(i=t.call(this,n,e)||this).handleExited.bind((0,o.A)(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}(0,a.A)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(t,n){var e,i,r=n.children,o=n.handleExited;return{children:n.firstRender?(e=t,i=o,l(e.children,(function(t){return(0,s.cloneElement)(t,{onExited:i.bind(null,t),in:!0,appear:c(t,"appear",e),enter:c(t,"enter",e),exit:c(t,"exit",e)})}))):p(t,r,o),firstRender:!1}},e.handleExited=function(t,n){var e=l(this.props.children);t.key in e||(t.props.onExited&&t.props.onExited(n),this.mounted&&this.setState((function(n){var e=(0,r.A)({},n.children);return delete e[t.key],{children:e}})))},e.render=function(){var t=this.props,n=t.component,e=t.childFactory,r=(0,i.A)(t,["component","childFactory"]),o=this.state.contextValue,a=d(this.state.children).map(e);return delete r.appear,delete r.enter,delete r.exit,null===n?s.createElement(u.A.Provider,{value:o},a):s.createElement(u.A.Provider,{value:o},s.createElement(n,r,a))},n}(s.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(t){return t}};const f=h},3079:(t,n,e)=>{e.d(n,{A:()=>i});const i=e(7810).createContext(null)},7728:(t,n,e)=>{e.d(n,{A:()=>f});var i=e(3893),r=e(1234),o=e(115),a=e(6078),s=e(8894);const u=s.createContext(null);function l(t,n){var e=Object.create(null);return t&&s.Children.map(t,(function(t){return t})).forEach((function(t){e[t.key]=function(t){return n&&(0,s.isValidElement)(t)?n(t):t}(t)})),e}function c(t,n,e){return null!=e[n]?e[n]:t.props[n]}function p(t,n,e){var i=l(t.children),r=function(t,n){function e(e){return e in n?n[e]:t[e]}t=t||{},n=n||{};var i,r=Object.create(null),o=[];for(var a in t)a in n?o.length&&(r[a]=o,o=[]):o.push(a);var s={};for(var u in n){if(r[u])for(i=0;i<r[u].length;i++){var l=r[u][i];s[r[u][i]]=e(l)}s[u]=e(u)}for(i=0;i<o.length;i++)s[o[i]]=e(o[i]);return s}(n,i);return Object.keys(r).forEach((function(o){var a=r[o];if((0,s.isValidElement)(a)){var u=o in n,l=o in i,p=n[o],d=(0,s.isValidElement)(p)&&!p.props.in;!l||u&&!d?l||!u||d?l&&u&&(0,s.isValidElement)(p)&&(r[o]=(0,s.cloneElement)(a,{onExited:e.bind(null,a),in:p.props.in,exit:c(a,"exit",t),enter:c(a,"enter",t)})):r[o]=(0,s.cloneElement)(a,{in:!1}):r[o]=(0,s.cloneElement)(a,{onExited:e.bind(null,a),in:!0,exit:c(a,"exit",t),enter:c(a,"enter",t)})}})),r}var d=Object.values||function(t){return Object.keys(t).map((function(n){return t[n]}))},h=function(t){function n(n,e){var i,r=(i=t.call(this,n,e)||this).handleExited.bind((0,o.A)(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}(0,a.A)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(t,n){var e,i,r=n.children,o=n.handleExited;return{children:n.firstRender?(e=t,i=o,l(e.children,(function(t){return(0,s.cloneElement)(t,{onExited:i.bind(null,t),in:!0,appear:c(t,"appear",e),enter:c(t,"enter",e),exit:c(t,"exit",e)})}))):p(t,r,o),firstRender:!1}},e.handleExited=function(t,n){var e=l(this.props.children);t.key in e||(t.props.onExited&&t.props.onExited(n),this.mounted&&this.setState((function(n){var e=(0,r.A)({},n.children);return delete e[t.key],{children:e}})))},e.render=function(){var t=this.props,n=t.component,e=t.childFactory,r=(0,i.A)(t,["component","childFactory"]),o=this.state.contextValue,a=d(this.state.children).map(e);return delete r.appear,delete r.enter,delete r.exit,null===n?s.createElement(u.Provider,{value:o},a):s.createElement(u.Provider,{value:o},s.createElement(n,r,a))},n}(s.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(t){return t}};const f=h}}]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var jf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function ry(){if(Pg)return Ao;Pg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Ao.Fragment=e,Ao.jsx=i,Ao.jsxs=i,Ao}var Bg;function oy(){return Bg||(Bg=1,jf.exports=ry()),jf.exports}var z=oy(),qf={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function ly(){if(Ig)return ee;Ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function _(N,W,V){this.props=N,this.context=W,this.refs=S,this.updater=V||b}_.prototype.isReactComponent={},_.prototype.setState=function(N,W){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,W,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=_.prototype;function A(N,W,V){this.props=N,this.context=W,this.refs=S,this.updater=V||b}var U=A.prototype=new D;U.constructor=A,T(U,_.prototype),U.isPureReactComponent=!0;var k=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},lt=Object.prototype.hasOwnProperty;function R(N,W,V){var Q=V.ref;return{$$typeof:o,type:N,key:W,ref:Q!==void 0?Q:null,props:V}}function L(N,W){return R(N.type,W,N.props)}function rt(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function nt(N){var W={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(V){return W[V]})}var yt=/\/+/g;function X(N,W){return typeof N=="object"&&N!==null&&N.key!=null?nt(""+N.key):W.toString(36)}function $(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(W){N.status==="pending"&&(N.status="fulfilled",N.value=W)},function(W){N.status==="pending"&&(N.status="rejected",N.reason=W)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,W,V,Q,gt){var Mt=typeof N;(Mt==="undefined"||Mt==="boolean")&&(N=null);var Et=!1;if(N===null)Et=!0;else switch(Mt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(N.$$typeof){case o:case e:Et=!0;break;case g:return Et=N._init,B(Et(N._payload),W,V,Q,gt)}}if(Et)return gt=gt(N),Et=Q===""?"."+X(N,0):Q,k(gt)?(V="",Et!=null&&(V=Et.replace(yt,"$&/")+"/"),B(gt,W,V,"",function(jt){return jt})):gt!=null&&(rt(gt)&&(gt=L(gt,V+(gt.key==null||N&&N.key===gt.key?"":(""+gt.key).replace(yt,"$&/")+"/")+Et)),W.push(gt)),1;Et=0;var Ft=Q===""?".":Q+":";if(k(N))for(var Ot=0;Ot<N.length;Ot++)Q=N[Ot],Mt=Ft+X(Q,Ot),Et+=B(Q,W,V,Mt,gt);else if(Ot=M(N),typeof Ot=="function")for(N=Ot.call(N),Ot=0;!(Q=N.next()).done;)Q=Q.value,Mt=Ft+X(Q,Ot++),Et+=B(Q,W,V,Mt,gt);else if(Mt==="object"){if(typeof N.then=="function")return B($(N),W,V,Q,gt);throw W=String(N),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Et}function j(N,W,V){if(N==null)return N;var Q=[],gt=0;return B(N,Q,"","",function(Mt){return W.call(V,Mt,gt++)}),Q}function tt(N){if(N._status===-1){var W=N._result;W=W(),W.then(function(V){(N._status===0||N._status===-1)&&(N._status=1,N._result=V)},function(V){(N._status===0||N._status===-1)&&(N._status=2,N._result=V)}),N._status===-1&&(N._status=0,N._result=W)}if(N._status===1)return N._result.default;throw N._result}var ft=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ht={map:j,forEach:function(N,W,V){j(N,function(){W.apply(this,arguments)},V)},count:function(N){var W=0;return j(N,function(){W++}),W},toArray:function(N){return j(N,function(W){return W})||[]},only:function(N){if(!rt(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ee.Activity=x,ee.Children=ht,ee.Component=_,ee.Fragment=i,ee.Profiler=l,ee.PureComponent=A,ee.StrictMode=s,ee.Suspense=m,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ee.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ee.cache=function(N){return function(){return N.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(N,W,V){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Q=T({},N.props),gt=N.key;if(W!=null)for(Mt in W.key!==void 0&&(gt=""+W.key),W)!lt.call(W,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&W.ref===void 0||(Q[Mt]=W[Mt]);var Mt=arguments.length-2;if(Mt===1)Q.children=V;else if(1<Mt){for(var Et=Array(Mt),Ft=0;Ft<Mt;Ft++)Et[Ft]=arguments[Ft+2];Q.children=Et}return R(N.type,gt,Q)},ee.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ee.createElement=function(N,W,V){var Q,gt={},Mt=null;if(W!=null)for(Q in W.key!==void 0&&(Mt=""+W.key),W)lt.call(W,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(gt[Q]=W[Q]);var Et=arguments.length-2;if(Et===1)gt.children=V;else if(1<Et){for(var Ft=Array(Et),Ot=0;Ot<Et;Ot++)Ft[Ot]=arguments[Ot+2];gt.children=Ft}if(N&&N.defaultProps)for(Q in Et=N.defaultProps,Et)gt[Q]===void 0&&(gt[Q]=Et[Q]);return R(N,Mt,gt)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(N){return{$$typeof:h,render:N}},ee.isValidElement=rt,ee.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:tt}},ee.memo=function(N,W){return{$$typeof:p,type:N,compare:W===void 0?null:W}},ee.startTransition=function(N){var W=P.T,V={};P.T=V;try{var Q=N(),gt=P.S;gt!==null&&gt(V,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(I,ft)}catch(Mt){ft(Mt)}finally{W!==null&&V.types!==null&&(W.types=V.types),P.T=W}},ee.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ee.use=function(N){return P.H.use(N)},ee.useActionState=function(N,W,V){return P.H.useActionState(N,W,V)},ee.useCallback=function(N,W){return P.H.useCallback(N,W)},ee.useContext=function(N){return P.H.useContext(N)},ee.useDebugValue=function(){},ee.useDeferredValue=function(N,W){return P.H.useDeferredValue(N,W)},ee.useEffect=function(N,W){return P.H.useEffect(N,W)},ee.useEffectEvent=function(N){return P.H.useEffectEvent(N)},ee.useId=function(){return P.H.useId()},ee.useImperativeHandle=function(N,W,V){return P.H.useImperativeHandle(N,W,V)},ee.useInsertionEffect=function(N,W){return P.H.useInsertionEffect(N,W)},ee.useLayoutEffect=function(N,W){return P.H.useLayoutEffect(N,W)},ee.useMemo=function(N,W){return P.H.useMemo(N,W)},ee.useOptimistic=function(N,W){return P.H.useOptimistic(N,W)},ee.useReducer=function(N,W,V){return P.H.useReducer(N,W,V)},ee.useRef=function(N){return P.H.useRef(N)},ee.useState=function(N){return P.H.useState(N)},ee.useSyncExternalStore=function(N,W,V){return P.H.useSyncExternalStore(N,W,V)},ee.useTransition=function(){return P.H.useTransition()},ee.version="19.2.5",ee}var Fg;function Xh(){return Fg||(Fg=1,qf.exports=ly()),qf.exports}var Nn=Xh(),Yf={exports:{}},Ro={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function cy(){return Hg||(Hg=1,(function(o){function e(B,j){var tt=B.length;B.push(j);t:for(;0<tt;){var ft=tt-1>>>1,ht=B[ft];if(0<l(ht,j))B[ft]=j,B[tt]=ht,tt=ft;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var j=B[0],tt=B.pop();if(tt!==j){B[0]=tt;t:for(var ft=0,ht=B.length,N=ht>>>1;ft<N;){var W=2*(ft+1)-1,V=B[W],Q=W+1,gt=B[Q];if(0>l(V,tt))Q<ht&&0>l(gt,V)?(B[ft]=gt,B[Q]=tt,ft=Q):(B[ft]=V,B[W]=tt,ft=W);else if(Q<ht&&0>l(gt,tt))B[ft]=gt,B[Q]=tt,ft=Q;else break t}}return j}function l(B,j){var tt=B.sortIndex-j.sortIndex;return tt!==0?tt:B.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,y=3,M=!1,b=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=B)s(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function k(B){if(T=!1,U(B),!b)if(i(m)!==null)b=!0,I||(I=!0,nt());else{var j=i(p);j!==null&&$(k,j.startTime-B)}}var I=!1,P=-1,lt=5,R=-1;function L(){return S?!0:!(o.unstable_now()-R<lt)}function rt(){if(S=!1,I){var B=o.unstable_now();R=B;var j=!0;try{t:{b=!1,T&&(T=!1,D(P),P=-1),M=!0;var tt=y;try{e:{for(U(B),x=i(m);x!==null&&!(x.expirationTime>B&&L());){var ft=x.callback;if(typeof ft=="function"){x.callback=null,y=x.priorityLevel;var ht=ft(x.expirationTime<=B);if(B=o.unstable_now(),typeof ht=="function"){x.callback=ht,U(B),j=!0;break e}x===i(m)&&s(m),U(B)}else s(m);x=i(m)}if(x!==null)j=!0;else{var N=i(p);N!==null&&$(k,N.startTime-B),j=!1}}break t}finally{x=null,y=tt,M=!1}j=void 0}}finally{j?nt():I=!1}}}var nt;if(typeof A=="function")nt=function(){A(rt)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,X=yt.port2;yt.port1.onmessage=rt,nt=function(){X.postMessage(null)}}else nt=function(){_(rt,0)};function $(B,j){P=_(function(){B(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(B){switch(y){case 1:case 2:case 3:var j=3;break;default:j=y}var tt=y;y=j;try{return B()}finally{y=tt}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,j){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var tt=y;y=B;try{return j()}finally{y=tt}},o.unstable_scheduleCallback=function(B,j,tt){var ft=o.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?ft+tt:ft):tt=ft,B){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=tt+ht,B={id:g++,callback:j,priorityLevel:B,startTime:tt,expirationTime:ht,sortIndex:-1},tt>ft?(B.sortIndex=tt,e(p,B),i(m)===null&&B===i(p)&&(T?(D(P),P=-1):T=!0,$(k,tt-ft))):(B.sortIndex=ht,e(m,B),b||M||(b=!0,I||(I=!0,nt()))),B},o.unstable_shouldYield=L,o.unstable_wrapCallback=function(B){var j=y;return function(){var tt=y;y=j;try{return B.apply(this,arguments)}finally{y=tt}}}})(Kf)),Kf}var Gg;function uy(){return Gg||(Gg=1,Zf.exports=cy()),Zf.exports}var Qf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function fy(){if(Vg)return Tn;Vg=1;var o=Xh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Tn.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Tn.requestFormReset=function(m){s.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Tn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tn.version="19.2.5",Tn}var Xg;function hy(){if(Xg)return Qf.exports;Xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qf.exports=fy(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function dy(){if(kg)return Ro;kg=1;var o=uy(),e=Xh(),i=hy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,E=c.child;E;){if(E===a){v=!0,a=c,r=f;break}if(E===r){v=!0,r=c,a=f;break}E=E.sibling}if(!v){for(E=f.child;E;){if(E===a){v=!0,a=f,r=c;break}if(E===r){v=!0,r=f,a=c;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),A=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=rt&&t[rt]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case I:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case A:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:X(t.type)||"Memo";case lt:n=t._payload,t=t._init;try{return X(t(n))}catch{}}return null}var $=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},ft=[],ht=-1;function N(t){return{current:t}}function W(t){0>ht||(t.current=ft[ht],ft[ht]=null,ht--)}function V(t,n){ht++,ft[ht]=t.current,t.current=n}var Q=N(null),gt=N(null),Mt=N(null),Et=N(null);function Ft(t,n){switch(V(Mt,n),V(gt,t),V(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?sg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=sg(n),t=rg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(Q),V(Q,t)}function Ot(){W(Q),W(gt),W(Mt)}function jt(t){t.memoizedState!==null&&V(Et,t);var n=Q.current,a=rg(n,t.type);n!==a&&(V(gt,t),V(Q,a))}function fe(t){gt.current===t&&(W(Q),W(gt)),Et.current===t&&(W(Et),Mo._currentValue=tt)}var it,un;function Ht(t){if(it===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);it=n&&n[1]||"",un=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+it+t+un}var Jt=!1;function Bt(t,n){if(!t||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ut){var et=ut}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ut){et=ut}t.call(mt.prototype)}}else{try{throw Error()}catch(ut){et=ut}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ut){if(ut&&et&&typeof ut.stack=="string")return[ut.stack,et.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],E=f[1];if(v&&E){var F=v.split(`
`),J=E.split(`
`);for(c=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===F.length||c===J.length)for(r=F.length-1,c=J.length-1;1<=r&&0<=c&&F[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(F[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||F[r]!==J[c]){var dt=`
`+F[r].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=r&&0<=c);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ht(a):""}function Ie(t,n){switch(t.tag){case 26:case 27:case 5:return Ht(t.type);case 16:return Ht("Lazy");case 13:return t.child!==n&&n!==null?Ht("Suspense Fallback"):Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 15:return Bt(t.type,!1);case 11:return Bt(t.type.render,!1);case 1:return Bt(t.type,!0);case 31:return Ht("Activity");default:return""}}function ne(t){try{var n="",a=null;do n+=Ie(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var O=Object.prototype.hasOwnProperty,w=o.unstable_scheduleCallback,st=o.unstable_cancelCallback,St=o.unstable_shouldYield,xt=o.unstable_requestPaint,_t=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Nt=o.unstable_UserBlockingPriority,qt=o.unstable_NormalPriority,se=o.unstable_LowPriority,vt=o.unstable_IdlePriority,Ee=o.log,ue=o.unstable_setDisableYieldValue,Qt=null,Dt=null;function Lt(t){if(typeof Ee=="function"&&ue(t),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Qt,t)}catch{}}var kt=Math.clz32?Math.clz32:oe,Se=Math.log,Ve=Math.LN2;function oe(t){return t>>>=0,t===0?32:31-(Se(t)/Ve|0)|0}var Tt=256,H=262144,Rt=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=bt(r):(v&=E,v!==0?c=bt(v):a||(a=E&~t,a!==0&&(c=bt(a))))):(E=r&~f,E!==0?c=bt(E):v!==0?c=bt(v):a||(a=r&~t,a!==0&&(c=bt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Vt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function we(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function ke(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ce(t,n,a,r,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,F=t.expirationTimes,J=t.hiddenUpdates;for(a=v&~a;0<a;){var dt=31-kt(a),mt=1<<dt;E[dt]=0,F[dt]=-1;var et=J[dt];if(et!==null)for(J[dt]=null,dt=0;dt<et.length;dt++){var ut=et[dt];ut!==null&&(ut.lane&=-536870913)}a&=~mt}r!==0&&fn(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function fn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-kt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function kn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-kt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Dr(t,n){var a=n&-n;return a=(a&42)!==0?1:Ur(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ur(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function sa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nr(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:Cg(t.type))}function ja(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var gi=Math.random().toString(36).slice(2),Qe="__reactFiber$"+gi,Mn="__reactProps$"+gi,ra="__reactContainer$"+gi,Or="__reactEvents$"+gi,C="__reactListeners$"+gi,Z="__reactHandles$"+gi,ot="__reactResources$"+gi,ct="__reactMarker$"+gi;function at(t){delete t[Qe],delete t[Mn],delete t[Or],delete t[C],delete t[Z]}function Ct(t){var n=t[Qe];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ra]||a[Qe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=dg(t);t!==null;){if(a=t[Qe])return a;t=dg(t)}return n}t=a,a=t.parentNode}return null}function zt(t){if(t=t[Qe]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Wt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Yt(t){var n=t[ot];return n||(n=t[ot]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function It(t){t[ct]=!0}var $t=new Set,te={};function be(t,n){Je(t,n),Je(t+"Capture",n)}function Je(t,n){for(te[t]=n,t=0;t<n.length;t++)$t.add(n[t])}var $e=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ei={},Be={};function le(t){return O.call(Be,t)?!0:O.call(ei,t)?!1:$e.test(t)?Be[t]=!0:(ei[t]=!0,!1)}function oa(t,n,a){if(le(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Oe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function gn(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Rn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function la(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zr(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function tn(t){if(!t._valueTracker){var n=la(t)?"checked":"value";t._valueTracker=zr(t,n,""+t[n])}}function Ai(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=la(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var On=/[\n"\\]/g;function En(t){return t.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pr(t,n,a,r,c,f,v,E){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Rn(n)):t.value!==""+Rn(n)&&(t.value=""+Rn(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Hc(t,v,Rn(n)):a!=null?Hc(t,v,Rn(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Rn(E):t.removeAttribute("name")}function Br(t,n,a,r,c,f,v,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){tn(t);return}a=a!=null?""+Rn(a):"",n=n!=null?""+Rn(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),tn(t)}function Hc(t,n,a){n==="number"&&ca(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ms(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Rn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function td(t,n,a){if(n!=null&&(n=""+Rn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Rn(a):""}function ed(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if($(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Rn(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),tn(t)}function Es(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var e0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||e0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function id(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&nd(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&nd(t,f,n[f])}function Gc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var n0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),i0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(t){return i0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ui(){}var Vc=null;function Xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ts=null,bs=null;function ad(t){var n=zt(t);if(n&&(t=n.stateNode)){var a=t[Mn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+En(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[Mn]||null;if(!c)throw Error(s(90));Pr(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Ai(r)}break t;case"textarea":td(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ms(t,!!a.multiple,n,!1)}}}var kc=!1;function sd(t,n,a){if(kc)return t(n,a);kc=!0;try{var r=t(n);return r}finally{if(kc=!1,(Ts!==null||bs!==null)&&(Ll(),Ts&&(n=Ts,t=bs,bs=Ts=null,ad(n),t)))for(n=0;n<t.length;n++)ad(t[n])}}function Ir(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Ni)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Wc=!1}var ua=null,jc=null,ko=null;function rd(){if(ko)return ko;var t,n=jc,a=n.length,r,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return ko=c.slice(t,1<r?1-r:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function jo(){return!0}function od(){return!1}function zn(t){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:od,this.isPropagationStopped=od,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=zn(qa),Hr=x({},qa,{view:0,detail:0}),a0=zn(Hr),qc,Yc,Gr,Yo=x({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gr&&(Gr&&t.type==="mousemove"?(qc=t.screenX-Gr.screenX,Yc=t.screenY-Gr.screenY):Yc=qc=0,Gr=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),ld=zn(Yo),s0=x({},Yo,{dataTransfer:0}),r0=zn(s0),o0=x({},Hr,{relatedTarget:0}),Zc=zn(o0),l0=x({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=zn(l0),u0=x({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f0=zn(u0),h0=x({},qa,{data:0}),cd=zn(h0),d0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=m0[t])?!!n[t]:!1}function Kc(){return g0}var _0=x({},Hr,{key:function(t){if(t.key){var n=d0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v0=zn(_0),x0=x({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=zn(x0),y0=x({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),S0=zn(y0),M0=x({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=zn(M0),T0=x({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=zn(T0),A0=x({},qa,{newState:0,oldState:0}),R0=zn(A0),w0=[9,13,27,32],Qc=Ni&&"CompositionEvent"in window,Vr=null;Ni&&"documentMode"in document&&(Vr=document.documentMode);var C0=Ni&&"TextEvent"in window&&!Vr,fd=Ni&&(!Qc||Vr&&8<Vr&&11>=Vr),hd=" ",dd=!1;function pd(t,n){switch(t){case"keyup":return w0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function L0(t,n){switch(t){case"compositionend":return md(n);case"keypress":return n.which!==32?null:(dd=!0,hd);case"textInput":return t=n.data,t===hd&&dd?null:t;default:return null}}function D0(t,n){if(As)return t==="compositionend"||!Qc&&pd(t,n)?(t=rd(),ko=jc=ua=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fd&&n.locale!=="ko"?null:n.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!U0[t.type]:n==="textarea"}function _d(t,n,a,r){Ts?bs?bs.push(r):bs=[r]:Ts=r,n=Bl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Xr=null,kr=null;function N0(t){$m(t,0)}function Zo(t){var n=Wt(t);if(Ai(n))return t}function vd(t,n){if(t==="change")return n}var xd=!1;if(Ni){var Jc;if(Ni){var $c="oninput"in document;if(!$c){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),$c=typeof yd.oninput=="function"}Jc=$c}else Jc=!1;xd=Jc&&(!document.documentMode||9<document.documentMode)}function Sd(){Xr&&(Xr.detachEvent("onpropertychange",Md),kr=Xr=null)}function Md(t){if(t.propertyName==="value"&&Zo(kr)){var n=[];_d(n,kr,t,Xc(t)),sd(N0,n)}}function O0(t,n,a){t==="focusin"?(Sd(),Xr=n,kr=a,Xr.attachEvent("onpropertychange",Md)):t==="focusout"&&Sd()}function z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(kr)}function P0(t,n){if(t==="click")return Zo(n)}function B0(t,n){if(t==="input"||t==="change")return Zo(n)}function I0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:I0;function Wr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!O.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,n){var a=Ed(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ed(a)}}function bd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ad(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ca(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ca(t.document)}return n}function tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var F0=Ni&&"documentMode"in document&&11>=document.documentMode,Rs=null,eu=null,jr=null,nu=!1;function Rd(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Rs==null||Rs!==ca(r)||(r=Rs,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Wr(jr,r)||(jr=r,r=Bl(eu,"onSelect"),0<r.length&&(n=new qo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Rs)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ws={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},iu={},wd={};Ni&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Za(t){if(iu[t])return iu[t];if(!ws[t])return t;var n=ws[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wd)return iu[t]=n[a];return t}var Cd=Za("animationend"),Ld=Za("animationiteration"),Dd=Za("animationstart"),H0=Za("transitionrun"),G0=Za("transitionstart"),V0=Za("transitioncancel"),Ud=Za("transitionend"),Nd=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function _i(t,n){Nd.set(t,n),be(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Cs=0,su=0;function Qo(){for(var t=Cs,n=su=Cs=0;n<t;){var a=ni[n];ni[n++]=null;var r=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&Od(a,c,f)}}function Jo(t,n,a,r){ni[Cs++]=t,ni[Cs++]=n,ni[Cs++]=a,ni[Cs++]=r,su|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function ru(t,n,a,r){return Jo(t,n,a,r),$o(t)}function Ka(t,n){return Jo(t,null,null,n),$o(t)}function Od(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-kt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<mo)throw mo=0,gf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ls={};function X0(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new X0(t,n,a,r)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,r,c,f){var v=0;if(r=t,typeof t=="function")ou(t)&&(v=1);else if(typeof t=="string")v=Yx(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=jn(31,a,n,c),t.elementType=R,t.lanes=f,t;case T:return Qa(a.children,c,f,n);case S:v=8,c|=24;break;case _:return t=jn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case k:return t=jn(13,a,n,c),t.elementType=k,t.lanes=f,t;case I:return t=jn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:v=10;break t;case D:v=9;break t;case U:v=11;break t;case P:v=14;break t;case lt:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(v,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Qa(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function lu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Pd(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function cu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bd=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=Bd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ne(n)},Bd.set(t,n),n)}return{value:t,source:n,stack:ne(n)}}var Ds=[],Us=0,el=null,qr=0,ai=[],si=0,fa=null,Ri=1,wi="";function zi(t,n){Ds[Us++]=qr,Ds[Us++]=el,el=t,qr=n}function Id(t,n,a){ai[si++]=Ri,ai[si++]=wi,ai[si++]=fa,fa=t;var r=Ri;t=wi;var c=32-kt(r)-1;r&=~(1<<c),a+=1;var f=32-kt(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,Ri=1<<32-kt(n)+c|a<<c|r,wi=f+t}else Ri=1<<f|a<<c|r,wi=t}function uu(t){t.return!==null&&(zi(t,1),Id(t,1,0))}function fu(t){for(;t===el;)el=Ds[--Us],Ds[Us]=null,qr=Ds[--Us],Ds[Us]=null;for(;t===fa;)fa=ai[--si],ai[si]=null,wi=ai[--si],ai[si]=null,Ri=ai[--si],ai[si]=null}function Fd(t,n){ai[si++]=Ri,ai[si++]=wi,ai[si++]=fa,Ri=n.id,wi=n.overflow,fa=t}var _n=null,Fe=null,ve=!1,ha=null,ri=!1,hu=Error(s(519));function da(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yr(ii(n,t)),hu}function Hd(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Qe]=t,n[Mn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)me(_o[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Br(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),ed(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||ig(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=Ui),n=!0):n=!1,n||da(t,!0)}function Gd(t){for(_n=t.return;_n;)switch(_n.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:_n=_n.return}}function Ns(t){if(t!==_n)return!1;if(!ve)return Gd(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Df(t.type,t.memoizedProps)),a=!a),a&&Fe&&da(t),Gd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Fe=hg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Fe=hg(t)}else n===27?(n=Fe,Ra(t.type)?(t=Pf,Pf=null,Fe=t):Fe=n):Fe=_n?li(t.stateNode.nextSibling):null;return!0}function Ja(){Fe=_n=null,ve=!1}function du(){var t=ha;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),ha=null),t}function Yr(t){ha===null?ha=[t]:ha.push(t)}var pu=N(null),$a=null,Pi=null;function pa(t,n,a){V(pu,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=pu.current,W(pu)}function mu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function gu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var F=0;F<n.length;F++)if(E.context===n[F]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),mu(f.return,a,t),r||(v=null);break t}f=E.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),mu(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Os(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=c.type;Wn(c.pendingProps.value,v.value)||(t!==null?t.push(E):t=[E])}}else if(c===Et.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Mo):t=[Mo])}c=c.return}t!==null&&gu(n,t,a,r),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ts(t){$a=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vn(t){return Vd($a,t)}function il(t,n){return $a===null&&ts(t),Vd(t,n)}function Vd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(s(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var k0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},W0=o.unstable_scheduleCallback,j0=o.unstable_NormalPriority,en={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new k0,data:new Map,refCount:0}}function Zr(t){t.refCount--,t.refCount===0&&W0(j0,function(){t.controller.abort()})}var Kr=null,vu=0,zs=0,Ps=null;function q0(t,n){if(Kr===null){var a=Kr=[];vu=0,zs=Mf(),Ps={status:"pending",value:void 0,then:function(r){a.push(r)}}}return vu++,n.then(Xd,Xd),n}function Xd(){if(--vu===0&&Kr!==null){Ps!==null&&(Ps.status="fulfilled");var t=Kr;Kr=null,zs=0,Ps=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Y0(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var kd=B.S;B.S=function(t,n){Rm=_t(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&q0(t,n),kd!==null&&kd(t,n)};var es=N(null);function xu(){var t=es.current;return t!==null?t:ze.pooledCache}function al(t,n){n===null?V(es,es.current):V(es,n.pool)}function Wd(){var t=xu();return t===null?null:{parent:en._currentValue,pool:t}}var Bs=Error(s(460)),yu=Error(s(474)),sl=Error(s(542)),rl={then:function(){}};function jd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ui,Ui),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zd(t),t;default:if(typeof n.status=="string")n.then(Ui,Ui);else{if(t=ze,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zd(t),t}throw is=n,Bs}}function ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(is=a,Bs):a}}var is=null;function Yd(){if(is===null)throw Error(s(459));var t=is;return is=null,t}function Zd(t){if(t===Bs||t===sl)throw Error(s(483))}var Is=null,Qr=0;function ol(t){var n=Qr;return Qr+=1,Is===null&&(Is=[]),qd(Is,t,n)}function Jr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Kd(t){function n(q,G){if(t){var K=q.deletions;K===null?(q.deletions=[G],q.flags|=16):K.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function r(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Oi(q,G),q.index=0,q.sibling=null,q}function f(q,G,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<G?(q.flags|=67108866,G):K):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function v(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,G,K,pt){return G===null||G.tag!==6?(G=lu(K,q.mode,pt),G.return=q,G):(G=c(G,K),G.return=q,G)}function F(q,G,K,pt){var Xt=K.type;return Xt===T?dt(q,G,K.props.children,pt,K.key):G!==null&&(G.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===lt&&ns(Xt)===G.type)?(G=c(G,K.props),Jr(G,K),G.return=q,G):(G=tl(K.type,K.key,K.props,null,q.mode,pt),Jr(G,K),G.return=q,G)}function J(q,G,K,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=cu(K,q.mode,pt),G.return=q,G):(G=c(G,K.children||[]),G.return=q,G)}function dt(q,G,K,pt,Xt){return G===null||G.tag!==7?(G=Qa(K,q.mode,pt,Xt),G.return=q,G):(G=c(G,K),G.return=q,G)}function mt(q,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=lu(""+G,q.mode,K),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return K=tl(G.type,G.key,G.props,null,q.mode,K),Jr(K,G),K.return=q,K;case b:return G=cu(G,q.mode,K),G.return=q,G;case lt:return G=ns(G),mt(q,G,K)}if($(G)||nt(G))return G=Qa(G,q.mode,K,null),G.return=q,G;if(typeof G.then=="function")return mt(q,ol(G),K);if(G.$$typeof===A)return mt(q,il(q,G),K);ll(q,G)}return null}function et(q,G,K,pt){var Xt=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Xt!==null?null:E(q,G,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Xt?F(q,G,K,pt):null;case b:return K.key===Xt?J(q,G,K,pt):null;case lt:return K=ns(K),et(q,G,K,pt)}if($(K)||nt(K))return Xt!==null?null:dt(q,G,K,pt,null);if(typeof K.then=="function")return et(q,G,ol(K),pt);if(K.$$typeof===A)return et(q,G,il(q,K),pt);ll(q,K)}return null}function ut(q,G,K,pt,Xt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(K)||null,E(G,q,""+pt,Xt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return q=q.get(pt.key===null?K:pt.key)||null,F(G,q,pt,Xt);case b:return q=q.get(pt.key===null?K:pt.key)||null,J(G,q,pt,Xt);case lt:return pt=ns(pt),ut(q,G,K,pt,Xt)}if($(pt)||nt(pt))return q=q.get(K)||null,dt(G,q,pt,Xt,null);if(typeof pt.then=="function")return ut(q,G,K,ol(pt),Xt);if(pt.$$typeof===A)return ut(q,G,K,il(G,pt),Xt);ll(G,pt)}return null}function Ut(q,G,K,pt){for(var Xt=null,xe=null,Pt=G,re=G=0,_e=null;Pt!==null&&re<K.length;re++){Pt.index>re?(_e=Pt,Pt=null):_e=Pt.sibling;var ye=et(q,Pt,K[re],pt);if(ye===null){Pt===null&&(Pt=_e);break}t&&Pt&&ye.alternate===null&&n(q,Pt),G=f(ye,G,re),xe===null?Xt=ye:xe.sibling=ye,xe=ye,Pt=_e}if(re===K.length)return a(q,Pt),ve&&zi(q,re),Xt;if(Pt===null){for(;re<K.length;re++)Pt=mt(q,K[re],pt),Pt!==null&&(G=f(Pt,G,re),xe===null?Xt=Pt:xe.sibling=Pt,xe=Pt);return ve&&zi(q,re),Xt}for(Pt=r(Pt);re<K.length;re++)_e=ut(Pt,q,re,K[re],pt),_e!==null&&(t&&_e.alternate!==null&&Pt.delete(_e.key===null?re:_e.key),G=f(_e,G,re),xe===null?Xt=_e:xe.sibling=_e,xe=_e);return t&&Pt.forEach(function(Ua){return n(q,Ua)}),ve&&zi(q,re),Xt}function Kt(q,G,K,pt){if(K==null)throw Error(s(151));for(var Xt=null,xe=null,Pt=G,re=G=0,_e=null,ye=K.next();Pt!==null&&!ye.done;re++,ye=K.next()){Pt.index>re?(_e=Pt,Pt=null):_e=Pt.sibling;var Ua=et(q,Pt,ye.value,pt);if(Ua===null){Pt===null&&(Pt=_e);break}t&&Pt&&Ua.alternate===null&&n(q,Pt),G=f(Ua,G,re),xe===null?Xt=Ua:xe.sibling=Ua,xe=Ua,Pt=_e}if(ye.done)return a(q,Pt),ve&&zi(q,re),Xt;if(Pt===null){for(;!ye.done;re++,ye=K.next())ye=mt(q,ye.value,pt),ye!==null&&(G=f(ye,G,re),xe===null?Xt=ye:xe.sibling=ye,xe=ye);return ve&&zi(q,re),Xt}for(Pt=r(Pt);!ye.done;re++,ye=K.next())ye=ut(Pt,q,re,ye.value,pt),ye!==null&&(t&&ye.alternate!==null&&Pt.delete(ye.key===null?re:ye.key),G=f(ye,G,re),xe===null?Xt=ye:xe.sibling=ye,xe=ye);return t&&Pt.forEach(function(sy){return n(q,sy)}),ve&&zi(q,re),Xt}function Ue(q,G,K,pt){if(typeof K=="object"&&K!==null&&K.type===T&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var Xt=K.key;G!==null;){if(G.key===Xt){if(Xt=K.type,Xt===T){if(G.tag===7){a(q,G.sibling),pt=c(G,K.props.children),pt.return=q,q=pt;break t}}else if(G.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===lt&&ns(Xt)===G.type){a(q,G.sibling),pt=c(G,K.props),Jr(pt,K),pt.return=q,q=pt;break t}a(q,G);break}else n(q,G);G=G.sibling}K.type===T?(pt=Qa(K.props.children,q.mode,pt,K.key),pt.return=q,q=pt):(pt=tl(K.type,K.key,K.props,null,q.mode,pt),Jr(pt,K),pt.return=q,q=pt)}return v(q);case b:t:{for(Xt=K.key;G!==null;){if(G.key===Xt)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(q,G.sibling),pt=c(G,K.children||[]),pt.return=q,q=pt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}pt=cu(K,q.mode,pt),pt.return=q,q=pt}return v(q);case lt:return K=ns(K),Ue(q,G,K,pt)}if($(K))return Ut(q,G,K,pt);if(nt(K)){if(Xt=nt(K),typeof Xt!="function")throw Error(s(150));return K=Xt.call(K),Kt(q,G,K,pt)}if(typeof K.then=="function")return Ue(q,G,ol(K),pt);if(K.$$typeof===A)return Ue(q,G,il(q,K),pt);ll(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(q,G.sibling),pt=c(G,K),pt.return=q,q=pt):(a(q,G),pt=lu(K,q.mode,pt),pt.return=q,q=pt),v(q)):a(q,G)}return function(q,G,K,pt){try{Qr=0;var Xt=Ue(q,G,K,pt);return Is=null,Xt}catch(Pt){if(Pt===Bs||Pt===sl)throw Pt;var xe=jn(29,Pt,null,q.mode);return xe.lanes=pt,xe.return=q,xe}finally{}}}var as=Kd(!0),Qd=Kd(!1),ma=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Me&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=$o(t),Od(t,null,a),n}return Jo(t,r,n,a),$o(t)}function $r(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,kn(t,a)}}function Eu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function to(){if(Tu){var t=Ps;if(t!==null)throw t}}function eo(t,n,a,r){Tu=!1;var c=t.updateQueue;ma=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var F=E,J=F.next;F.next=null,v===null?f=J:v.next=J,v=F;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,E=dt.lastBaseUpdate,E!==v&&(E===null?dt.firstBaseUpdate=J:E.next=J,dt.lastBaseUpdate=F))}if(f!==null){var mt=c.baseState;v=0,dt=J=F=null,E=f;do{var et=E.lane&-536870913,ut=et!==E.lane;if(ut?(ge&et)===et:(r&et)===et){et!==0&&et===zs&&(Tu=!0),dt!==null&&(dt=dt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ut=t,Kt=E;et=n;var Ue=a;switch(Kt.tag){case 1:if(Ut=Kt.payload,typeof Ut=="function"){mt=Ut.call(Ue,mt,et);break t}mt=Ut;break t;case 3:Ut.flags=Ut.flags&-65537|128;case 0:if(Ut=Kt.payload,et=typeof Ut=="function"?Ut.call(Ue,mt,et):Ut,et==null)break t;mt=x({},mt,et);break t;case 2:ma=!0}}et=E.callback,et!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[et]:ut.push(et))}else ut={lane:et,tag:E.tag,payload:E.payload,callback:E.callback,next:null},dt===null?(J=dt=ut,F=mt):dt=dt.next=ut,v|=et;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ut=E,E=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);dt===null&&(F=mt),c.baseState=F,c.firstBaseUpdate=J,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Ma|=v,t.lanes=v,t.memoizedState=mt}}function Jd(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function $d(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jd(a[t],n)}var Fs=N(null),cl=N(0);function tp(t,n){t=ji,V(cl,t),V(Fs,n),ji=t|n.baseLanes}function bu(){V(cl,ji),V(Fs,Fs.current)}function Au(){ji=cl.current,W(Fs),W(cl)}var qn=N(null),oi=null;function va(t){var n=t.alternate;V(Ye,Ye.current&1),V(qn,t),oi===null&&(n===null||Fs.current!==null||n.memoizedState!==null)&&(oi=t)}function Ru(t){V(Ye,Ye.current),V(qn,t),oi===null&&(oi=t)}function ep(t){t.tag===22?(V(Ye,Ye.current),V(qn,t),oi===null&&(oi=t)):xa()}function xa(){V(Ye,Ye.current),V(qn,qn.current)}function Yn(t){W(qn),oi===t&&(oi=null),W(Ye)}var Ye=N(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=0,ie=null,Le=null,nn=null,fl=!1,Hs=!1,ss=!1,hl=0,no=0,Gs=null,Z0=0;function We(){throw Error(s(321))}function wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Cu(t,n,a,r,c,f){return Ii=f,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Ip:ku,ss=!1,f=a(r,c),ss=!1,Hs&&(f=ip(n,a,r,c)),np(t),f}function np(t){B.H=so;var n=Le!==null&&Le.next!==null;if(Ii=0,nn=Le=ie=null,fl=!1,no=0,Gs=null,n)throw Error(s(300));t===null||an||(t=t.dependencies,t!==null&&nl(t)&&(an=!0))}function ip(t,n,a,r){ie=t;var c=0;do{if(Hs&&(Gs=null),no=0,Hs=!1,25<=c)throw Error(s(301));if(c+=1,nn=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Fp,f=n(a,r)}while(Hs);return f}function K0(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?io(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(ie.flags|=1024),n}function Lu(){var t=hl!==0;return hl=0,t}function Du(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uu(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Ii=0,nn=Le=ie=null,Hs=!1,no=hl=0,Gs=null}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ie.memoizedState=nn=t:nn=nn.next=t,nn}function Ze(){if(Le===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=nn===null?ie.memoizedState:nn.next;if(n!==null)nn=n,Le=t;else{if(t===null)throw ie.alternate===null?Error(s(467)):Error(s(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},nn===null?ie.memoizedState=nn=t:nn=nn.next=t}return nn}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(t){var n=no;return no+=1,Gs===null&&(Gs=[]),t=qd(Gs,t,n),n=ie,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Ip:ku),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return io(t);if(t.$$typeof===A)return vn(t)}throw Error(s(438,String(t)))}function Nu(t){var n=null,a=ie.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ie.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),ie.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=L;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=Ze();return Ou(n,Le,t)}function Ou(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=v=null,F=null,J=n,dt=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(ge&mt)===mt:(Ii&mt)===mt){var et=J.revertLane;if(et===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===zs&&(dt=!0);else if((Ii&et)===et){J=J.next,et===zs&&(dt=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(E=F=mt,v=f):F=F.next=mt,ie.lanes|=et,Ma|=et;mt=J.action,ss&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else et={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(E=F=et,v=f):F=F.next=et,ie.lanes|=mt,Ma|=mt;J=J.next}while(J!==null&&J!==n);if(F===null?v=f:F.next=E,!Wn(f,t.memoizedState)&&(an=!0,dt&&(a=Ps,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=F,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function zu(t){var n=Ze(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);Wn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function ap(t,n,a){var r=ie,c=Ze(),f=ve;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Wn((Le||c).memoizedState,a);if(v&&(c.memoizedState=a,an=!0),c=c.queue,Iu(op.bind(null,r,c,t),[t]),c.getSnapshot!==n||v||nn!==null&&nn.memoizedState.tag&1){if(r.flags|=2048,Vs(9,{destroy:void 0},rp.bind(null,r,c,a,n),null),ze===null)throw Error(s(349));f||(Ii&127)!==0||sp(r,n,a)}return a}function sp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ie.updateQueue,n===null?(n=dl(),ie.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function rp(t,n,a,r){n.value=a,n.getSnapshot=r,lp(n)&&cp(t)}function op(t,n,a){return a(function(){lp(n)&&cp(t)})}function lp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function cp(t){var n=Ka(t,2);n!==null&&Hn(n,t,2)}function Pu(t){var n=wn();if(typeof t=="function"){var a=t;if(t=a(),ss){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function up(t,n,a,r){return t.baseState=a,Ou(t,Le,typeof r=="function"?r:Fi)}function Q0(t,n,a,r,c){if(vl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,fp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function fp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=B.T,v={};B.T=v;try{var E=a(c,r),F=B.S;F!==null&&F(v,E),hp(t,n,E)}catch(J){Bu(t,n,J)}finally{f!==null&&v.types!==null&&(f.types=v.types),B.T=f}}else try{f=a(c,r),hp(t,n,f)}catch(J){Bu(t,n,J)}}function hp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){dp(t,n,r)},function(r){return Bu(t,n,r)}):dp(t,n,a)}function dp(t,n,a){n.status="fulfilled",n.value=a,pp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,fp(t,a)))}function Bu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,pp(n),n=n.next;while(n!==r)}t.action=null}function pp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function mp(t,n){return n}function gp(t,n){if(ve){var a=ze.formState;if(a!==null){t:{var r=ie;if(ve){if(Fe){e:{for(var c=Fe,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Fe=li(c.nextSibling),r=c.data==="F!";break t}}da(r)}r=!1}r&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mp,lastRenderedState:n},a.queue=r,a=zp.bind(null,ie,r),r.dispatch=a,r=Pu(!1),f=Xu.bind(null,ie,!1,r.queue),r=wn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Q0.bind(null,ie,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function _p(t){var n=Ze();return vp(n,Le,t)}function vp(t,n,a){if(n=Ou(t,n,mp)[0],t=ml(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=io(n)}catch(v){throw v===Bs?sl:v}else r=n;n=Ze();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ie.flags|=2048,Vs(9,{destroy:void 0},J0.bind(null,c,a),null)),[r,f,t]}function J0(t,n){t.action=n}function xp(t){var n=Ze(),a=Le;if(a!==null)return vp(n,a,t);Ze(),n=n.memoizedState,a=Ze();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Vs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ie.updateQueue,n===null&&(n=dl(),ie.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function yp(){return Ze().memoizedState}function gl(t,n,a,r){var c=wn();ie.flags|=t,c.memoizedState=Vs(1|n,{destroy:void 0},a,r===void 0?null:r)}function _l(t,n,a,r){var c=Ze();r=r===void 0?null:r;var f=c.memoizedState.inst;Le!==null&&r!==null&&wu(r,Le.memoizedState.deps)?c.memoizedState=Vs(n,f,a,r):(ie.flags|=t,c.memoizedState=Vs(1|n,f,a,r))}function Sp(t,n){gl(8390656,8,t,n)}function Iu(t,n){_l(2048,8,t,n)}function $0(t){ie.flags|=4;var n=ie.updateQueue;if(n===null)n=dl(),ie.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Mp(t){var n=Ze().memoizedState;return $0({ref:n,nextImpl:t}),function(){if((Me&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ep(t,n){return _l(4,2,t,n)}function Tp(t,n){return _l(4,4,t,n)}function bp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ap(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,bp.bind(null,n,t),a)}function Fu(){}function Rp(t,n){var a=Ze();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&wu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function wp(t,n){var a=Ze();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&wu(n,r[1]))return r[0];if(r=t(),ss){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r}function Hu(t,n,a){return a===void 0||(Ii&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Cm(),ie.lanes|=t,Ma|=t,a)}function Cp(t,n,a,r){return Wn(a,n)?a:Fs.current!==null?(t=Hu(t,a,r),Wn(t,n)||(an=!0),t):(Ii&42)===0||(Ii&1073741824)!==0&&(ge&261930)===0?(an=!0,t.memoizedState=a):(t=Cm(),ie.lanes|=t,Ma|=t,n)}function Lp(t,n,a,r,c){var f=j.p;j.p=f!==0&&8>f?f:8;var v=B.T,E={};B.T=E,Xu(t,!1,n,a);try{var F=c(),J=B.S;if(J!==null&&J(E,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var dt=Y0(F,r);ao(t,n,dt,Qn(t))}else ao(t,n,r,Qn(t))}catch(mt){ao(t,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{j.p=f,v!==null&&E.types!==null&&(v.types=E.types),B.T=v}}function tx(){}function Gu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=Dp(t).queue;Lp(t,c,n,tt,a===null?tx:function(){return Up(t),a(r)})}function Dp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Up(t){var n=Dp(t);n.next===null&&(n=t.alternate.memoizedState),ao(t,n.next.queue,{},Qn())}function Vu(){return vn(Mo)}function Np(){return Ze().memoizedState}function Op(){return Ze().memoizedState}function ex(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=ga(a);var r=_a(n,t,a);r!==null&&(Hn(r,n,a),$r(r,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function nx(t,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?Pp(n,a):(a=ru(t,n,a,r),a!==null&&(Hn(a,t,r),Bp(a,n,r)))}function zp(t,n,a){var r=Qn();ao(t,n,a,r)}function ao(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))Pp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,E=f(v,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,v))return Jo(t,n,c,0),ze===null&&Qo(),!1}catch{}finally{}if(a=ru(t,n,c,r),a!==null)return Hn(a,t,r),Bp(a,n,r),!0}return!1}function Xu(t,n,a,r){if(r={lane:2,revertLane:Mf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(s(479))}else n=ru(t,a,r,2),n!==null&&Hn(n,t,2)}function vl(t){var n=t.alternate;return t===ie||n!==null&&n===ie}function Pp(t,n){Hs=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Bp(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,kn(t,a)}}var so={readContext:vn,use:pl,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};so.useEffectEvent=We;var Ip={readContext:vn,use:pl,useCallback:function(t,n){return wn().memoizedState=[t,n===void 0?null:n],t},useContext:vn,useEffect:Sp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,bp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=wn();n=n===void 0?null:n;var r=t();if(ss){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=wn();if(a!==void 0){var c=a(n);if(ss){Lt(!0);try{a(n)}finally{Lt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=nx.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var n=wn();return t={current:t},n.memoizedState=t},useState:function(t){t=Pu(t);var n=t.queue,a=zp.bind(null,ie,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,n){var a=wn();return Hu(a,t,n)},useTransition:function(){var t=Pu(!1);return t=Lp.bind(null,ie,t.queue,!0,!1),wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ie,c=wn();if(ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ze===null)throw Error(s(349));(ge&127)!==0||sp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Sp(op.bind(null,r,f,t),[t]),r.flags|=2048,Vs(9,{destroy:void 0},rp.bind(null,r,f,a,n),null),a},useId:function(){var t=wn(),n=ze.identifierPrefix;if(ve){var a=wi,r=Ri;a=(r&~(1<<32-kt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Z0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:gp,useActionState:gp,useOptimistic:function(t){var n=wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Xu.bind(null,ie,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return wn().memoizedState=ex.bind(null,ie)},useEffectEvent:function(t){var n=wn(),a={impl:t};return n.memoizedState=a,function(){if((Me&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ku={readContext:vn,use:pl,useCallback:Rp,useContext:vn,useEffect:Iu,useImperativeHandle:Ap,useInsertionEffect:Ep,useLayoutEffect:Tp,useMemo:wp,useReducer:ml,useRef:yp,useState:function(){return ml(Fi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Ze();return Cp(a,Le.memoizedState,t,n)},useTransition:function(){var t=ml(Fi)[0],n=Ze().memoizedState;return[typeof t=="boolean"?t:io(t),n]},useSyncExternalStore:ap,useId:Np,useHostTransitionStatus:Vu,useFormState:_p,useActionState:_p,useOptimistic:function(t,n){var a=Ze();return up(a,Le,t,n)},useMemoCache:Nu,useCacheRefresh:Op};ku.useEffectEvent=Mp;var Fp={readContext:vn,use:pl,useCallback:Rp,useContext:vn,useEffect:Iu,useImperativeHandle:Ap,useInsertionEffect:Ep,useLayoutEffect:Tp,useMemo:wp,useReducer:zu,useRef:yp,useState:function(){return zu(Fi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Ze();return Le===null?Hu(a,t,n):Cp(a,Le.memoizedState,t,n)},useTransition:function(){var t=zu(Fi)[0],n=Ze().memoizedState;return[typeof t=="boolean"?t:io(t),n]},useSyncExternalStore:ap,useId:Np,useHostTransitionStatus:Vu,useFormState:xp,useActionState:xp,useOptimistic:function(t,n){var a=Ze();return Le!==null?up(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:Op};Fp.useEffectEvent=Mp;function Wu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ju={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ga(r);c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Hn(n,t,r),$r(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ga(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Hn(n,t,r),$r(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),r=ga(a);r.tag=2,n!=null&&(r.callback=n),n=_a(t,r,a),n!==null&&(Hn(n,t,a),$r(n,t,a))}};function Hp(t,n,a,r,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Wr(a,r)||!Wr(c,f):!0}function Gp(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ju.enqueueReplaceState(n,n.state,null)}function rs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Vp(t){Ko(t)}function Xp(t){console.error(t)}function kp(t){Ko(t)}function xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Wp(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(t,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(t,n)},a}function jp(t){return t=ga(t),t.tag=3,t}function qp(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Wp(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Wp(n,a,r),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function ix(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Dl():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),xf(t,r,c)),!1;case 22:return a.flags|=65536,r===rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),xf(t,r,c)),!1}throw Error(s(435,a.tag))}return xf(t,r,c),Dl(),!1}if(ve)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==hu&&(t=Error(s(422),{cause:r}),Yr(ii(t,a)))):(r!==hu&&(n=Error(s(423),{cause:r}),Yr(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ii(r,a),c=qu(t.stateNode,r,c),Eu(t,c),je!==4&&(je=2)),!1;var f=Error(s(520),{cause:r});if(f=ii(f,a),po===null?po=[f]:po.push(f),je!==4&&(je=2),n===null)return!0;r=ii(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=qu(a.stateNode,r,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=jp(c),qp(c,t,a,r),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var Yu=Error(s(461)),an=!1;function xn(t,n,a,r){n.child=t===null?Qd(n,null,a,r):as(n,t.child,a,r)}function Yp(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var E in r)E!=="ref"&&(v[E]=r[E])}else v=r;return ts(n),r=Cu(t,n,a,v,f,c),E=Lu(),t!==null&&!an?(Du(t,n,c),Hi(t,n,c)):(ve&&E&&uu(n),n.flags|=1,xn(t,n,r,c),n.child)}function Zp(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Kp(t,n,f,r,c)):(t=tl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Wr,a(v,r)&&t.ref===n.ref)return Hi(t,n,c)}return n.flags|=1,t=Oi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Kp(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Wr(f,r)&&t.ref===n.ref)if(an=!1,n.pendingProps=r=f,nf(t,c))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,Hi(t,n,c)}return Zu(t,n,a,r,c)}function Qp(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Jp(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?tp(n,f):bu(),ep(n);else return r=n.lanes=536870912,Jp(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(al(n,f.cachePool),tp(n,f),xa(),n.memoizedState=null):(t!==null&&al(n,null),bu(),xa());return xn(t,n,c,a),n.child}function ro(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jp(t,n,a,r,c){var f=xu();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),bu(),ep(n),t!==null&&Os(t,n,r,!0),n.childLanes=c,null}function yl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $p(t,n,a){return as(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function ax(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(r.mode==="hidden")return t=yl(n,r),n.lanes=536870912,ro(null,t);if(Ru(n),(t=Fe)?(t=fg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ri,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Pd(t),a.return=n,n.child=a,_n=n,Fe=null)):t=null,t===null)throw da(n);return n.lanes=536870912,null}return yl(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Ru(n),c)if(n.flags&256)n.flags&=-257,n=$p(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(an||Os(t,n,a,!1),c=(a&t.childLanes)!==0,an||c){if(r=ze,r!==null&&(v=Dr(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ka(t,v),Hn(r,t,v),Yu;Dl(),n=$p(t,n,a)}else t=f.treeContext,Fe=li(v.nextSibling),_n=n,ve=!0,ha=null,ri=!1,t!==null&&Fd(n,t),n=yl(n,r),n.flags|=4096;return n}return t=Oi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,r,c){return ts(n),a=Cu(t,n,a,r,void 0,c),r=Lu(),t!==null&&!an?(Du(t,n,c),Hi(t,n,c)):(ve&&r&&uu(n),n.flags|=1,xn(t,n,a,c),n.child)}function tm(t,n,a,r,c,f){return ts(n),n.updateQueue=null,a=ip(n,r,a,c),np(t),r=Lu(),t!==null&&!an?(Du(t,n,f),Hi(t,n,f)):(ve&&r&&uu(n),n.flags|=1,xn(t,n,a,f),n.child)}function em(t,n,a,r,c){if(ts(n),n.stateNode===null){var f=Ls,v=a.contextType;typeof v=="object"&&v!==null&&(f=vn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Su(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?vn(v):Ls,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Wu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&ju.enqueueReplaceState(f,f.state,null),eo(n,r,f,c),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,F=rs(a,E);f.props=F;var J=f.context,dt=a.contextType;v=Ls,typeof dt=="object"&&dt!==null&&(v=vn(dt));var mt=a.getDerivedStateFromProps;dt=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==v)&&Gp(n,f,r,v),ma=!1;var et=n.memoizedState;f.state=et,eo(n,r,f,c),to(),J=n.memoizedState,E||et!==J||ma?(typeof mt=="function"&&(Wu(n,a,mt,r),J=n.memoizedState),(F=ma||Hp(n,a,F,r,et,J,v))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=v,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Mu(t,n),v=n.memoizedProps,dt=rs(a,v),f.props=dt,mt=n.pendingProps,et=f.context,J=a.contextType,F=Ls,typeof J=="object"&&J!==null&&(F=vn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||et!==F)&&Gp(n,f,r,F),ma=!1,et=n.memoizedState,f.state=et,eo(n,r,f,c),to();var ut=n.memoizedState;v!==mt||et!==ut||ma||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof E=="function"&&(Wu(n,a,E,r),ut=n.memoizedState),(dt=ma||Hp(n,a,dt,r,et,ut,F)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ut,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ut,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ut),f.props=r,f.state=ut,f.context=F,r=dt):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Sl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=as(n,t.child,null,c),n.child=as(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Hi(t,n,c),t}function nm(t,n,a,r){return Ja(),n.flags|=256,xn(t,n,a,r),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:Wd()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function im(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(Ye.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(c?va(n):xa(),(t=Fe)?(t=fg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ri,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Pd(t),a.return=n,n.child=a,_n=n,Fe=null)):t=null,t===null)throw da(n);return zf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(xa(),c=n.mode,E=Ml({mode:"hidden",children:E},c),r=Qa(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Qu(a),r.childLanes=Ju(t,v,a),n.memoizedState=Ku,ro(null,r)):(va(n),$u(n,E))}var F=t.memoizedState;if(F!==null&&(E=F.dehydrated,E!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),E=r.fallback,c=n.mode,r=Ml({mode:"visible",children:r.children},c),E=Qa(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,as(n,t.child,null,a),r=n.child,r.memoizedState=Qu(a),r.childLanes=Ju(t,v,a),n.memoizedState=Ku,n=ro(null,r));else if(va(n),zf(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var J=v.dgst;v=J,r=Error(s(419)),r.stack="",r.digest=v,Yr({value:r,source:null,stack:null}),n=tf(t,n,a)}else if(an||Os(t,n,a,!1),v=(a&t.childLanes)!==0,an||v){if(v=ze,v!==null&&(r=Dr(v,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,Ka(t,r),Hn(v,t,r),Yu;Of(E)||Dl(),n=tf(t,n,a)}else Of(E)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Fe=li(E.nextSibling),_n=n,ve=!0,ha=null,ri=!1,t!==null&&Fd(n,t),n=$u(n,r.children),n.flags|=4096);return n}return c?(xa(),E=r.fallback,c=n.mode,F=t.child,J=F.sibling,r=Oi(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,J!==null?E=Oi(J,E):(E=Qa(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,ro(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Qu(a):(c=E.cachePool,c!==null?(F=en._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Wd(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Ju(t,v,a),n.memoizedState=Ku,ro(t.child,r)):(va(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function tf(t,n,a){return as(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function am(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),mu(t.return,n,a)}function ef(t,n,a,r,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function sm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=Ye.current,E=(v&2)!==0;if(E?(v=v&1|2,n.flags|=128):v&=1,V(Ye,v),xn(t,n,r,a),r=ve?qr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&am(t,a,n);else if(t.tag===19)am(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f,r);break;case"together":ef(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function sx(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),pa(n,en,t.memoizedState.cache),Ja();break;case 27:case 5:jt(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?im(t,n,a):(va(n),t=Hi(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Os(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return sm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),V(Ye,Ye.current),r)break;return null;case 22:return n.lanes=0,Qp(t,n,a,n.pendingProps);case 24:pa(n,en,t.memoizedState.cache)}return Hi(t,n,a)}function rm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return an=!1,sx(t,n,a);an=(t.flags&131072)!==0}else an=!1,ve&&(n.flags&1048576)!==0&&Id(n,qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ns(n.elementType),n.type=t,typeof t=="function")ou(t)?(r=rs(t,r),n.tag=1,n=em(null,n,t,r,a)):(n.tag=0,n=Zu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===U){n.tag=11,n=Yp(null,n,t,r,a);break t}else if(c===P){n.tag=14,n=Zp(null,n,t,r,a);break t}}throw n=X(t)||t,Error(s(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=rs(r,n.pendingProps),em(t,n,r,c,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Mu(t,n),eo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,pa(n,en,r),r!==f.cache&&gu(n,[en],a,!0),to(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=nm(t,n,r,a);break t}else if(r!==c){c=ii(Error(s(424)),n),Yr(c),n=nm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Fe=li(t.firstChild),_n=n,ve=!0,ha=null,ri=!0,a=Qd(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),r===c){n=Hi(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=_g(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(a=n.type,t=n.pendingProps,r=Il(Mt.current).createElement(a),r[Qe]=n,r[Mn]=t,yn(r,a,t),It(r),n.stateNode=r):n.memoizedState=_g(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return jt(n),t===null&&ve&&(r=n.stateNode=pg(n.type,n.pendingProps,Mt.current),_n=n,ri=!0,c=Fe,Ra(n.type)?(Pf=c,Fe=li(r.firstChild)):Fe=c),xn(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((c=r=Fe)&&(r=zx(r,n.type,n.pendingProps,ri),r!==null?(n.stateNode=r,_n=n,Fe=li(r.firstChild),ri=!1,c=!0):c=!1),c||da(n)),jt(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,Df(c,f)?r=null:v!==null&&Df(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Cu(t,n,K0,null,null,a),Mo._currentValue=c),Sl(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&ve&&((t=a=Fe)&&(a=Px(a,n.pendingProps,ri),a!==null?(n.stateNode=a,_n=n,Fe=null,t=!0):t=!1),t||da(n)),null;case 13:return im(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=as(n,null,r,a):xn(t,n,r,a),n.child;case 11:return Yp(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),xn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ts(n),c=vn(c),r=r(c),n.flags|=1,xn(t,n,r,a),n.child;case 14:return Zp(t,n,n.type,n.pendingProps,a);case 15:return Kp(t,n,n.type,n.pendingProps,a);case 19:return sm(t,n,a);case 31:return ax(t,n,a);case 22:return Qp(t,n,a,n.pendingProps);case 24:return ts(n),r=vn(en),t===null?(c=xu(),c===null&&(c=ze,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Su(n),pa(n,en,c)):((t.lanes&a)!==0&&(Mu(t,n),eo(n,null,null,a),to()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,en,r)):(r=f.cache,pa(n,en,r),r!==c.cache&&gu(n,[en],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Gi(t){t.flags|=4}function af(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Nm())t.flags|=8192;else throw is=rl,yu}else t.flags&=-16777217}function om(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mg(n))if(Nm())t.flags|=8192;else throw is=rl,yu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,js|=n)}function oo(t,n){if(!ve)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function rx(t,n,a){var r=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(n),null;case 1:return He(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Bi(en),Ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ns(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),He(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Gi(n),f!==null?(He(n),om(n,f)):(He(n),af(n,c,null,r,a))):f?f!==t.memoizedState?(Gi(n),He(n),om(n,f)):(He(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Gi(n),He(n),af(n,c,t,r,a)),null;case 27:if(fe(n),a=Mt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return He(n),null}t=Q.current,Ns(n)?Hd(n):(t=pg(c,r,a),n.stateNode=t,Gi(n))}return He(n),null;case 5:if(fe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return He(n),null}if(f=Q.current,Ns(n))Hd(n);else{var v=Il(Mt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[Qe]=n,f[Mn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(yn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Gi(n)}}return He(n),af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Mt.current,Ns(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=_n,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Qe]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||ig(t.nodeValue,a)),t||da(n,!0)}else t=Il(t).createTextNode(r),t[Qe]=n,n.stateNode=t}return He(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ns(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Qe]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;He(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return He(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ns(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Qe]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;He(n),c=!1}else c=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),He(n),null);case 4:return Ot(),t===null&&Af(n.stateNode.containerInfo),He(n),null;case 10:return Bi(n.type),He(n),null;case 19:if(W(Ye),r=n.memoizedState,r===null)return He(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)oo(r,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,oo(r,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zd(a,t),a=a.sibling;return V(Ye,Ye.current&1|2),ve&&zi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&_t()>wl&&(n.flags|=128,c=!0,oo(r,!1),n.lanes=4194304)}else{if(!c)if(t=ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),oo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!ve)return He(n),null}else 2*_t()-r.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,c=!0,oo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=_t(),t.sibling=null,a=Ye.current,V(Ye,c?a&1|2:a&1),ve&&zi(n,r.treeForkCount),t):(He(n),null);case 22:case 23:return Yn(n),Au(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(He(n),n.subtreeFlags&6&&(n.flags|=8192)):He(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&W(es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(en),He(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ox(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(en),Ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return fe(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(Ye),null;case 4:return Ot(),null;case 10:return Bi(n.type),null;case 22:case 23:return Yn(n),Au(),t!==null&&W(es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(en),null;case 25:return null;default:return null}}function lm(t,n){switch(fu(n),n.tag){case 3:Bi(en),Ot();break;case 26:case 27:case 5:fe(n);break;case 4:Ot();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:W(Ye);break;case 10:Bi(n.type);break;case 22:case 23:Yn(n),Au(),t!==null&&W(es);break;case 24:Bi(en)}}function lo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(E){Re(n,n.return,E)}}function ya(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var v=r.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,c=n;var F=a,J=E;try{J()}catch(dt){Re(c,F,dt)}}}r=r.next}while(r!==f)}}catch(dt){Re(n,n.return,dt)}}function cm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$d(n,a)}catch(r){Re(t,t.return,r)}}}function um(t,n,a){a.props=rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Re(t,n,r)}}function co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Re(t,n,c)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Re(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Re(t,n,c)}else a.current=null}function fm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Re(t,t.return,c)}}function sf(t,n,a){try{var r=t.stateNode;Cx(r,t.type,a,n),r[Mn]=n}catch(c){Re(t,t.return,c)}}function hm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ui));else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(of(t,n,a),t=t.sibling;t!==null;)of(t,n,a),t=t.sibling}function Tl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tl(t,n,a),t=t.sibling;t!==null;)Tl(t,n,a),t=t.sibling}function dm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,r,a),n[Qe]=t,n[Mn]=a}catch(f){Re(t,t.return,f)}}var Vi=!1,sn=!1,lf=!1,pm=typeof WeakSet=="function"?WeakSet:Set,hn=null;function lx(t,n){if(t=t.containerInfo,Cf=Wl,t=Ad(t),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,E=-1,F=-1,J=0,dt=0,mt=t,et=null;e:for(;;){for(var ut;mt!==a||c!==0&&mt.nodeType!==3||(E=v+c),mt!==f||r!==0&&mt.nodeType!==3||(F=v+r),mt.nodeType===3&&(v+=mt.nodeValue.length),(ut=mt.firstChild)!==null;)et=mt,mt=ut;for(;;){if(mt===t)break e;if(et===a&&++J===c&&(E=v),et===f&&++dt===r&&(F=v),(ut=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=ut}a=E===-1||F===-1?null:{start:E,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:t,selectionRange:a},Wl=!1,hn=n;hn!==null;)if(n=hn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,hn=t;else for(;hn!==null;){switch(n=hn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ut=rs(a.type,c);t=r.getSnapshotBeforeUpdate(Ut,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Re(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,hn=t;break}hn=n.return}}function mm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ki(t,a),r&4&&lo(5,a);break;case 1:if(ki(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Re(a,a.return,v)}else{var c=rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Re(a,a.return,v)}}r&64&&cm(a),r&512&&co(a,a.return);break;case 3:if(ki(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$d(t,n)}catch(v){Re(a,a.return,v)}}break;case 27:n===null&&r&4&&dm(a);case 26:case 5:ki(t,a),n===null&&r&4&&fm(a),r&512&&co(a,a.return);break;case 12:ki(t,a);break;case 31:ki(t,a),r&4&&vm(t,a);break;case 13:ki(t,a),r&4&&xm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=_x.bind(null,a),Bx(t,a))));break;case 22:if(r=a.memoizedState!==null||Vi,!r){n=n!==null&&n.memoizedState!==null||sn,c=Vi;var f=sn;Vi=r,(sn=n)&&!f?Wi(t,a,(a.subtreeFlags&8772)!==0):ki(t,a),Vi=c,sn=f}break;case 30:break;default:ki(t,a)}}function gm(t){var n=t.alternate;n!==null&&(t.alternate=null,gm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&at(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xe=null,Pn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)_m(t,n,a),a=a.sibling}function _m(t,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:sn||Ci(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ci(a,n);var r=Xe,c=Pn;Ra(a.type)&&(Xe=a.stateNode,Pn=!1),Xi(t,n,a),xo(a.stateNode),Xe=r,Pn=c;break;case 5:sn||Ci(a,n);case 6:if(r=Xe,c=Pn,Xe=null,Xi(t,n,a),Xe=r,Pn=c,Xe!==null)if(Pn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Re(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Re(a,n,f)}break;case 18:Xe!==null&&(Pn?(t=Xe,cg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),tr(t)):cg(Xe,a.stateNode));break;case 4:r=Xe,c=Pn,Xe=a.stateNode.containerInfo,Pn=!0,Xi(t,n,a),Xe=r,Pn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),sn||ya(4,a,n),Xi(t,n,a);break;case 1:sn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&um(a,n,r)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:sn=(r=sn)||a.memoizedState!==null,Xi(t,n,a),sn=r;break;default:Xi(t,n,a)}}function vm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{tr(t)}catch(a){Re(n,n.return,a)}}}function xm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{tr(t)}catch(a){Re(n,n.return,a)}}function cx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new pm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new pm),n;default:throw Error(s(435,t.tag))}}function bl(t,n){var a=cx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=vx.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,v=n,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Ra(E.type)){Xe=E.stateNode,Pn=!1;break t}break;case 5:Xe=E.stateNode,Pn=!1;break t;case 3:case 4:Xe=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(Xe===null)throw Error(s(160));_m(f,v,c),Xe=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ym(n,t),n=n.sibling}var vi=null;function ym(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),r&4&&(ya(3,t,t.return),lo(3,t),ya(5,t,t.return));break;case 1:Bn(n,t),In(t),r&512&&(sn||a===null||Ci(a,a.return)),r&64&&Vi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=vi;if(Bn(n,t),In(t),r&512&&(sn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ct]||f[Qe]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,r,a),f[Qe]=t,It(f),r=f;break t;case"link":var v=yg("link","href",c).get(r+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(f=v[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;case"meta":if(v=yg("meta","content",c).get(r+(a.content||""))){for(E=0;E<v.length;E++)if(f=v[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Qe]=t,It(f),r=f}t.stateNode=r}else Sg(c,t.type,t.stateNode);else t.stateNode=xg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Sg(c,t.type,t.stateNode):xg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),r&512&&(sn||a===null||Ci(a,a.return)),a!==null&&r&4&&sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),r&512&&(sn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{Es(c,"")}catch(Ut){Re(t,t.return,Ut)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,sf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(lf=!0);break;case 6:if(Bn(n,t),In(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ut){Re(t,t.return,Ut)}}break;case 3:if(Gl=null,c=vi,vi=Fl(n.containerInfo),Bn(n,t),vi=c,In(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{tr(n.containerInfo)}catch(Ut){Re(t,t.return,Ut)}lf&&(lf=!1,Sm(t));break;case 4:r=vi,vi=Fl(t.stateNode.containerInfo),Bn(n,t),In(t),vi=r;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,bl(t,r)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=_t()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,bl(t,r)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,J=Vi,dt=sn;if(Vi=J||c,sn=dt||F,Bn(n,t),sn=dt,Vi=J,In(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Vi||sn||os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=F.stateNode;var mt=F.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ut){Re(F,F.return,Ut)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Ut){Re(F,F.return,Ut)}}}else if(n.tag===18){if(a===null){F=n;try{var ut=F.stateNode;c?ug(ut,!0):ug(F.stateNode,!1)}catch(Ut){Re(F,F.return,Ut)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,bl(t,a))));break;case 19:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,bl(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(hm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=rf(t);Tl(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Es(v,""),a.flags&=-33);var E=rf(t);Tl(t,E,v);break;case 3:case 4:var F=a.stateNode.containerInfo,J=rf(t);of(t,J,F);break;default:throw Error(s(161))}}catch(dt){Re(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Sm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Sm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mm(t,n.alternate,n),n=n.sibling}function os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),os(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&um(n,n.return,a),os(n);break;case 27:xo(n.stateNode);case 26:case 5:Ci(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}t=t.sibling}}function Wi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Wi(c,f,a),lo(4,f);break;case 1:if(Wi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Re(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Jd(F[c],E)}catch(J){Re(r,r.return,J)}}a&&v&64&&cm(f),co(f,f.return);break;case 27:dm(f);case 26:case 5:Wi(c,f,a),a&&r===null&&v&4&&fm(f),co(f,f.return);break;case 12:Wi(c,f,a);break;case 31:Wi(c,f,a),a&&v&4&&vm(c,f);break;case 13:Wi(c,f,a),a&&v&4&&xm(c,f);break;case 22:f.memoizedState===null&&Wi(c,f,a),co(f,f.return);break;case 30:break;default:Wi(c,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zr(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zr(t))}function xi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mm(t,n,a,r),n=n.sibling}function Mm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),c&2048&&lo(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zr(t)));break;case 12:if(c&2048){xi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,E=f.onPostCommit;typeof E=="function"&&E(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Re(n,n.return,F)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,r):uo(t,n):f._visibility&2?xi(t,n,a,r):(f._visibility|=2,Xs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&cf(v,n);break;case 24:xi(t,n,a,r),c&2048&&uf(n.alternate,n);break;default:xi(t,n,a,r)}}function Xs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,E=a,F=r,J=v.flags;switch(v.tag){case 0:case 11:case 15:Xs(f,v,E,F,c),lo(8,v);break;case 23:break;case 22:var dt=v.stateNode;v.memoizedState!==null?dt._visibility&2?Xs(f,v,E,F,c):uo(f,v):(dt._visibility|=2,Xs(f,v,E,F,c)),c&&J&2048&&cf(v.alternate,v);break;case 24:Xs(f,v,E,F,c),c&&J&2048&&uf(v.alternate,v);break;default:Xs(f,v,E,F,c)}n=n.sibling}}function uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:uo(a,r),c&2048&&cf(r.alternate,r);break;case 24:uo(a,r),c&2048&&uf(r.alternate,r);break;default:uo(a,r)}n=n.sibling}}var fo=8192;function ks(t,n,a){if(t.subtreeFlags&fo)for(t=t.child;t!==null;)Em(t,n,a),t=t.sibling}function Em(t,n,a){switch(t.tag){case 26:ks(t,n,a),t.flags&fo&&t.memoizedState!==null&&Zx(a,vi,t.memoizedState,t.memoizedProps);break;case 5:ks(t,n,a);break;case 3:case 4:var r=vi;vi=Fl(t.stateNode.containerInfo),ks(t,n,a),vi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=fo,fo=16777216,ks(t,n,a),fo=r):ks(t,n,a));break;default:ks(t,n,a)}}function Tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];hn=r,Am(r,t)}Tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bm(t),t=t.sibling}function bm(t){switch(t.tag){case 0:case 11:case 15:ho(t),t.flags&2048&&ya(9,t,t.return);break;case 3:ho(t);break;case 12:ho(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):ho(t);break;default:ho(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];hn=r,Am(r,t)}Tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function Am(t,n){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Zr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,hn=r;else t:for(a=t;hn!==null;){r=hn;var c=r.sibling,f=r.return;if(gm(r),r===a){hn=null;break t}if(c!==null){c.return=f,hn=c;break t}hn=f}}}var ux={getCacheForType:function(t){var n=vn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return vn(en).controller.signal}},fx=typeof WeakMap=="function"?WeakMap:Map,Me=0,ze=null,pe=null,ge=0,Ae=0,Zn=null,Sa=!1,Ws=!1,ff=!1,ji=0,je=0,Ma=0,ls=0,hf=0,Kn=0,js=0,po=null,Fn=null,df=!1,Rl=0,Rm=0,wl=1/0,Cl=null,Ea=null,on=0,Ta=null,qs=null,qi=0,pf=0,mf=null,wm=null,mo=0,gf=null;function Qn(){return(Me&2)!==0&&ge!==0?ge&-ge:B.T!==null?Mf():Nr()}function Cm(){if(Kn===0)if((ge&536870912)===0||ve){var t=H;H<<=1,(H&3932160)===0&&(H=262144),Kn=t}else Kn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===ze&&(Ae===2||Ae===9)||t.cancelPendingCommit!==null)&&(Ys(t,0),ba(t,ge,Kn,!1)),qe(t,a),((Me&2)===0||t!==ze)&&(t===ze&&((Me&2)===0&&(ls|=a),je===4&&ba(t,ge,Kn,!1)),Li(t))}function Lm(t,n,a){if((Me&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Vt(t,n),c=r?px(t,n):vf(t,n,!0),f=r;do{if(c===0){Ws&&!r&&ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!hx(a)){c=vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var E=t;c=po;var F=E.current.memoizedState.isDehydrated;if(F&&(Ys(E,v).flags|=256),v=vf(E,v,!1),v!==2){if(ff&&!F){E.errorRecoveryDisabledLanes|=f,ls|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){Ys(t,0),ba(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ba(r,n,Kn,!Sa);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Rl+300-_t(),10<c)){if(ba(r,n,Kn,!Sa),Zt(r,0,!0)!==0)break t;qi=n,r.timeoutHandle=og(Dm.bind(null,r,a,Fn,Cl,df,n,Kn,ls,js,Sa,f,"Throttled",-0,0),c);break t}Dm(r,a,Fn,Cl,df,n,Kn,ls,js,Sa,f,null,-0,0)}}break}while(!0);Li(t)}function Dm(t,n,a,r,c,f,v,E,F,J,dt,mt,et,ut){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ui},Em(n,f,mt);var Ut=(f&62914560)===f?Rl-_t():(f&4194048)===f?Rm-_t():0;if(Ut=Kx(mt,Ut),Ut!==null){qi=f,t.cancelPendingCommit=Ut(Fm.bind(null,t,n,f,a,r,c,v,E,F,dt,mt,null,et,ut)),ba(t,f,v,!J);return}}Fm(t,n,f,a,r,c,v,E,F)}function hx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(t,n,a,r){n&=~hf,n&=~ls,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-kt(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&fn(t,a,n)}function Ll(){return(Me&6)===0?(go(0),!1):!0}function _f(){if(pe!==null){if(Ae===0)var t=pe.return;else t=pe,Pi=$a=null,Uu(t),Is=null,Qr=0,t=pe;for(;t!==null;)lm(t.alternate,t),t=t.return;pe=null}}function Ys(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ux(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qi=0,_f(),ze=t,pe=a=Oi(t.current,null),ge=n,Ae=0,Zn=null,Sa=!1,Ws=Vt(t,n),ff=!1,js=Kn=hf=ls=Ma=je=0,Fn=po=null,df=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-kt(r),f=1<<c;n|=t[c],r&=~f}return ji=n,Qo(),a}function Um(t,n){ie=null,B.H=so,n===Bs||n===sl?(n=Yd(),Ae=3):n===yu?(n=Yd(),Ae=4):Ae=n===Yu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(je=1,xl(t,ii(n,t.current)))}function Nm(){var t=qn.current;return t===null?!0:(ge&4194048)===ge?oi===null:(ge&62914560)===ge||(ge&536870912)!==0?t===oi:!1}function Om(){var t=B.H;return B.H=so,t===null?so:t}function zm(){var t=B.A;return B.A=ux,t}function Dl(){je=4,Sa||(ge&4194048)!==ge&&qn.current!==null||(Ws=!0),(Ma&134217727)===0&&(ls&134217727)===0||ze===null||ba(ze,ge,Kn,!1)}function vf(t,n,a){var r=Me;Me|=2;var c=Om(),f=zm();(ze!==t||ge!==n)&&(Cl=null,Ys(t,n)),n=!1;var v=je;t:do try{if(Ae!==0&&pe!==null){var E=pe,F=Zn;switch(Ae){case 8:_f(),v=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var J=Ae;if(Ae=0,Zn=null,Zs(t,E,F,J),a&&Ws){v=0;break t}break;default:J=Ae,Ae=0,Zn=null,Zs(t,E,F,J)}}dx(),v=je;break}catch(dt){Um(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Pi=$a=null,Me=r,B.H=c,B.A=f,pe===null&&(ze=null,ge=0,Qo()),v}function dx(){for(;pe!==null;)Pm(pe)}function px(t,n){var a=Me;Me|=2;var r=Om(),c=zm();ze!==t||ge!==n?(Cl=null,wl=_t()+500,Ys(t,n)):Ws=Vt(t,n);t:do try{if(Ae!==0&&pe!==null){n=pe;var f=Zn;e:switch(Ae){case 1:Ae=0,Zn=null,Zs(t,n,f,1);break;case 2:case 9:if(jd(f)){Ae=0,Zn=null,Bm(n);break}n=function(){Ae!==2&&Ae!==9||ze!==t||(Ae=7),Li(t)},f.then(n,n);break t;case 3:Ae=7;break t;case 4:Ae=5;break t;case 7:jd(f)?(Ae=0,Zn=null,Bm(n)):(Ae=0,Zn=null,Zs(t,n,f,7));break;case 5:var v=null;switch(pe.tag){case 26:v=pe.memoizedState;case 5:case 27:var E=pe;if(v?Mg(v):E.stateNode.complete){Ae=0,Zn=null;var F=E.sibling;if(F!==null)pe=F;else{var J=E.return;J!==null?(pe=J,Ul(J)):pe=null}break e}}Ae=0,Zn=null,Zs(t,n,f,5);break;case 6:Ae=0,Zn=null,Zs(t,n,f,6);break;case 8:_f(),je=6;break t;default:throw Error(s(462))}}mx();break}catch(dt){Um(t,dt)}while(!0);return Pi=$a=null,B.H=r,B.A=c,Me=a,pe!==null?0:(ze=null,ge=0,Qo(),je)}function mx(){for(;pe!==null&&!St();)Pm(pe)}function Pm(t){var n=rm(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?Ul(t):pe=n}function Bm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=tm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=tm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Uu(n);default:lm(a,n),n=pe=zd(n,ji),n=rm(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?Ul(t):pe=n}function Zs(t,n,a,r){Pi=$a=null,Uu(n),Is=null,Qr=0;var c=n.return;try{if(ix(t,c,n,a,ge)){je=1,xl(t,ii(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;je=1,xl(t,ii(a,t.current)),pe=null;return}n.flags&32768?(ve||r===1?t=!0:Ws||(ge&536870912)!==0?t=!1:(Sa=t=!0,(r===2||r===9||r===3||r===6)&&(r=qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Im(n,t)):Ul(n)}function Ul(t){var n=t;do{if((n.flags&32768)!==0){Im(n,Sa);return}t=n.return;var a=rx(n.alternate,n,ji);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);je===0&&(je=5)}function Im(t,n){do{var a=ox(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);je=6,pe=null}function Fm(t,n,a,r,c,f,v,E,F){t.cancelPendingCommit=null;do Nl();while(on!==0);if((Me&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=su,Ce(t,a,f,v,E,F),t===ze&&(pe=ze=null,ge=0),qs=n,Ta=t,qi=a,pf=f,mf=c,wm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xx(qt,function(){return km(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,c=j.p,j.p=2,v=Me,Me|=4;try{lx(t,n,a)}finally{Me=v,j.p=c,B.T=r}}on=1,Hm(),Gm(),Vm()}}function Hm(){if(on===1){on=0;var t=Ta,n=qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=j.p;j.p=2;var c=Me;Me|=4;try{ym(n,t);var f=Lf,v=Ad(t.containerInfo),E=f.focusedElem,F=f.selectionRange;if(v!==E&&E&&E.ownerDocument&&bd(E.ownerDocument.documentElement,E)){if(F!==null&&tu(E)){var J=F.start,dt=F.end;if(dt===void 0&&(dt=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(dt,E.value.length);else{var mt=E.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var ut=et.getSelection(),Ut=E.textContent.length,Kt=Math.min(F.start,Ut),Ue=F.end===void 0?Kt:Math.min(F.end,Ut);!ut.extend&&Kt>Ue&&(v=Ue,Ue=Kt,Kt=v);var q=Td(E,Kt),G=Td(E,Ue);if(q&&G&&(ut.rangeCount!==1||ut.anchorNode!==q.node||ut.anchorOffset!==q.offset||ut.focusNode!==G.node||ut.focusOffset!==G.offset)){var K=mt.createRange();K.setStart(q.node,q.offset),ut.removeAllRanges(),Kt>Ue?(ut.addRange(K),ut.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),ut.addRange(K))}}}}for(mt=[],ut=E;ut=ut.parentNode;)ut.nodeType===1&&mt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var pt=mt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Wl=!!Cf,Lf=Cf=null}finally{Me=c,j.p=r,B.T=a}}t.current=n,on=2}}function Gm(){if(on===2){on=0;var t=Ta,n=qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=j.p;j.p=2;var c=Me;Me|=4;try{mm(t,n.alternate,n)}finally{Me=c,j.p=r,B.T=a}}on=3}}function Vm(){if(on===4||on===3){on=0,xt();var t=Ta,n=qs,a=qi,r=wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?on=5:(on=0,qs=Ta=null,Xm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),sa(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Qt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,c=j.p,j.p=2,B.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var E=r[v];f(E.value,{componentStack:E.stack})}}finally{B.T=n,j.p=c}}(qi&3)!==0&&Nl(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===gf?mo++:(mo=0,gf=t):mo=0,go(0)}}function Xm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Zr(n)))}function Nl(){return Hm(),Gm(),Vm(),km()}function km(){if(on!==5)return!1;var t=Ta,n=pf;pf=0;var a=sa(qi),r=B.T,c=j.p;try{j.p=32>a?32:a,B.T=null,a=mf,mf=null;var f=Ta,v=qi;if(on=0,qs=Ta=null,qi=0,(Me&6)!==0)throw Error(s(331));var E=Me;if(Me|=4,bm(f.current),Mm(f,f.current,v,a),Me=E,go(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Qt,f)}catch{}return!0}finally{j.p=c,B.T=r,Xm(t,n)}}function Wm(t,n,a){n=ii(a,n),n=qu(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(qe(t,2),Li(t))}function Re(t,n,a){if(t.tag===3)Wm(t,t,a);else for(;n!==null;){if(n.tag===3){Wm(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))){t=ii(a,t),a=jp(2),r=_a(n,a,2),r!==null&&(qp(a,r,n,t),qe(r,2),Li(r));break}}n=n.return}}function xf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new fx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(ff=!0,c.add(a),t=gx.bind(null,t,n,a),n.then(t,t))}function gx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ze===t&&(ge&a)===a&&(je===4||je===3&&(ge&62914560)===ge&&300>_t()-Rl?(Me&2)===0&&Ys(t,0):hf|=a,js===ge&&(js=0)),Li(t)}function jm(t,n){n===0&&(n=Te()),t=Ka(t,n),t!==null&&(qe(t,n),Li(t))}function _x(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),jm(t,a)}function vx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),jm(t,a)}function xx(t,n){return w(t,n)}var Ol=null,Ks=null,yf=!1,zl=!1,Sf=!1,Aa=0;function Li(t){t!==Ks&&t.next===null&&(Ks===null?Ol=Ks=t:Ks=Ks.next=t),zl=!0,yf||(yf=!0,Sx())}function go(t,n){if(!Sf&&zl){Sf=!0;do for(var a=!1,r=Ol;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-kt(42|t)+1)-1,f&=c&~(v&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Km(r,f))}else f=ge,f=Zt(r,r===ze?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Vt(r,f)||(a=!0,Km(r,f));r=r.next}while(a);Sf=!1}}function yx(){qm()}function qm(){zl=yf=!1;var t=0;Aa!==0&&Dx()&&(t=Aa);for(var n=_t(),a=null,r=Ol;r!==null;){var c=r.next,f=Ym(r,n);f===0?(r.next=null,a===null?Ol=c:a.next=c,c===null&&(Ks=a)):(a=r,(t!==0||(f&3)!==0)&&(zl=!0)),r=c}on!==0&&on!==5||go(t),Aa!==0&&(Aa=0)}function Ym(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-kt(f),E=1<<v,F=c[v];F===-1?((E&a)===0||(E&r)!==0)&&(c[v]=we(E,n)):F<=n&&(t.expiredLanes|=E),f&=~E}if(n=ze,a=ge,a=Zt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ae===2||Ae===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&st(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Vt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&st(r),sa(a)){case 2:case 8:a=Nt;break;case 32:a=qt;break;case 268435456:a=vt;break;default:a=qt}return r=Zm.bind(null,t),a=w(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&st(r),t.callbackPriority=2,t.callbackNode=null,2}function Zm(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var r=ge;return r=Zt(t,t===ze?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Lm(t,r,n),Ym(t,_t()),t.callbackNode!=null&&t.callbackNode===a?Zm.bind(null,t):null)}function Km(t,n){if(Nl())return null;Lm(t,n,!0)}function Sx(){Nx(function(){(Me&6)!==0?w(wt,yx):qm()})}function Mf(){if(Aa===0){var t=zs;t===0&&(t=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Aa=t}return Aa}function Qm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xo(""+t)}function Jm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Mx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Qm((c[Mn]||null).action),v=r.submitter;v&&(n=(n=v[Mn]||null)?Qm(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var E=new qo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Aa!==0){var F=v?Jm(c,v):new FormData(c);Gu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(E.preventDefault(),F=v?Jm(c,v):new FormData(c),Gu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Ef=0;Ef<au.length;Ef++){var Tf=au[Ef],Ex=Tf.toLowerCase(),Tx=Tf[0].toUpperCase()+Tf.slice(1);_i(Ex,"on"+Tx)}_i(Cd,"onAnimationEnd"),_i(Ld,"onAnimationIteration"),_i(Dd,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(H0,"onTransitionRun"),_i(G0,"onTransitionStart"),_i(V0,"onTransitionCancel"),_i(Ud,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),be("onBeforeInput",["compositionend","keypress","textInput","paste"]),be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function $m(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var E=r[v],F=E.instance,J=E.currentTarget;if(E=E.listener,F!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(dt){Ko(dt)}c.currentTarget=null,f=F}else for(v=0;v<r.length;v++){if(E=r[v],F=E.instance,J=E.currentTarget,E=E.listener,F!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(dt){Ko(dt)}c.currentTarget=null,f=F}}}}function me(t,n){var a=n[Or];a===void 0&&(a=n[Or]=new Set);var r=t+"__bubble";a.has(r)||(tg(n,t,2,!1),a.add(r))}function bf(t,n,a){var r=0;n&&(r|=4),tg(a,t,r,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[Pl]){t[Pl]=!0,$t.forEach(function(a){a!=="selectionchange"&&(bx.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,bf("selectionchange",!1,n))}}function tg(t,n,a,r){switch(Cg(n)){case 2:var c=$x;break;case 8:c=ty;break;default:c=Gf}a=c.bind(null,n,a,t),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Rf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var E=r.stateNode.containerInfo;if(E===c)break;if(v===4)for(v=r.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;E!==null;){if(v=Ct(E),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){r=f=v;continue t}E=E.parentNode}}r=r.return}sd(function(){var J=f,dt=Xc(a),mt=[];t:{var et=Nd.get(t);if(et!==void 0){var ut=qo,Ut=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":ut=v0;break;case"focusin":Ut="focus",ut=Zc;break;case"focusout":Ut="blur",ut=Zc;break;case"beforeblur":case"afterblur":ut=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=S0;break;case Cd:case Ld:case Dd:ut=c0;break;case Ud:ut=E0;break;case"scroll":case"scrollend":ut=a0;break;case"wheel":ut=b0;break;case"copy":case"cut":case"paste":ut=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=ud;break;case"toggle":case"beforetoggle":ut=R0}var Kt=(n&4)!==0,Ue=!Kt&&(t==="scroll"||t==="scrollend"),q=Kt?et!==null?et+"Capture":null:et;Kt=[];for(var G=J,K;G!==null;){var pt=G;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||q===null||(pt=Ir(G,q),pt!=null&&Kt.push(vo(G,pt,K))),Ue)break;G=G.return}0<Kt.length&&(et=new ut(et,Ut,null,a,dt),mt.push({event:et,listeners:Kt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",ut=t==="mouseout"||t==="pointerout",et&&a!==Vc&&(Ut=a.relatedTarget||a.fromElement)&&(Ct(Ut)||Ut[ra]))break t;if((ut||et)&&(et=dt.window===dt?dt:(et=dt.ownerDocument)?et.defaultView||et.parentWindow:window,ut?(Ut=a.relatedTarget||a.toElement,ut=J,Ut=Ut?Ct(Ut):null,Ut!==null&&(Ue=u(Ut),Kt=Ut.tag,Ut!==Ue||Kt!==5&&Kt!==27&&Kt!==6)&&(Ut=null)):(ut=null,Ut=J),ut!==Ut)){if(Kt=ld,pt="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=ud,pt="onPointerLeave",q="onPointerEnter",G="pointer"),Ue=ut==null?et:Wt(ut),K=Ut==null?et:Wt(Ut),et=new Kt(pt,G+"leave",ut,a,dt),et.target=Ue,et.relatedTarget=K,pt=null,Ct(dt)===J&&(Kt=new Kt(q,G+"enter",Ut,a,dt),Kt.target=K,Kt.relatedTarget=Ue,pt=Kt),Ue=pt,ut&&Ut)e:{for(Kt=Ax,q=ut,G=Ut,K=0,pt=q;pt;pt=Kt(pt))K++;pt=0;for(var Xt=G;Xt;Xt=Kt(Xt))pt++;for(;0<K-pt;)q=Kt(q),K--;for(;0<pt-K;)G=Kt(G),pt--;for(;K--;){if(q===G||G!==null&&q===G.alternate){Kt=q;break e}q=Kt(q),G=Kt(G)}Kt=null}else Kt=null;ut!==null&&eg(mt,et,ut,Kt,!1),Ut!==null&&Ue!==null&&eg(mt,Ue,Ut,Kt,!0)}}t:{if(et=J?Wt(J):window,ut=et.nodeName&&et.nodeName.toLowerCase(),ut==="select"||ut==="input"&&et.type==="file")var xe=vd;else if(gd(et))if(xd)xe=B0;else{xe=z0;var Pt=O0}else ut=et.nodeName,!ut||ut.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Gc(J.elementType)&&(xe=vd):xe=P0;if(xe&&(xe=xe(t,J))){_d(mt,xe,a,dt);break t}Pt&&Pt(t,et,J),t==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&Hc(et,"number",et.value)}switch(Pt=J?Wt(J):window,t){case"focusin":(gd(Pt)||Pt.contentEditable==="true")&&(Rs=Pt,eu=J,jr=null);break;case"focusout":jr=eu=Rs=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Rd(mt,a,dt);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":Rd(mt,a,dt)}var re;if(Qc)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else As?pd(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(fd&&a.locale!=="ko"&&(As||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&As&&(re=rd()):(ua=dt,jc="value"in ua?ua.value:ua.textContent,As=!0)),Pt=Bl(J,_e),0<Pt.length&&(_e=new cd(_e,t,null,a,dt),mt.push({event:_e,listeners:Pt}),re?_e.data=re:(re=md(a),re!==null&&(_e.data=re)))),(re=C0?L0(t,a):D0(t,a))&&(_e=Bl(J,"onBeforeInput"),0<_e.length&&(Pt=new cd("onBeforeInput","beforeinput",null,a,dt),mt.push({event:Pt,listeners:_e}),Pt.data=re)),Mx(mt,t,J,a,dt)}$m(mt,n)})}function vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ir(t,a),c!=null&&r.unshift(vo(t,c,f)),c=Ir(t,n),c!=null&&r.push(vo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Ax(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function eg(t,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var E=a,F=E.alternate,J=E.stateNode;if(E=E.tag,F!==null&&F===r)break;E!==5&&E!==26&&E!==27||J===null||(F=J,c?(J=Ir(a,f),J!=null&&v.unshift(vo(a,J,F))):c||(J=Ir(a,f),J!=null&&v.push(vo(a,J,F)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Rx=/\r\n?/g,wx=/\u0000|\uFFFD/g;function ng(t){return(typeof t=="string"?t:""+t).replace(Rx,`
`).replace(wx,"")}function ig(t,n){return n=ng(n),ng(t)===n}function De(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Es(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Es(t,""+r);break;case"className":Oe(t,"class",r);break;case"tabIndex":Oe(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(t,a,r);break;case"style":id(t,r,f);break;case"data":if(n!=="object"){Oe(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(t,n,"name",c.name,c,null),De(t,n,"formEncType",c.formEncType,c,null),De(t,n,"formMethod",c.formMethod,c,null),De(t,n,"formTarget",c.formTarget,c,null)):(De(t,n,"encType",c.encType,c,null),De(t,n,"method",c.method,c,null),De(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ui);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Xo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":me("beforetoggle",t),me("toggle",t),oa(t,"popover",r);break;case"xlinkActuate":gn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":gn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":gn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":gn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":gn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":gn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":gn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":gn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":gn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":oa(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=n0.get(a)||a,oa(t,a,r))}}function wf(t,n,a,r,c,f){switch(a){case"style":id(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Es(t,r):(typeof r=="number"||typeof r=="bigint")&&Es(t,""+r);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):oa(t,a,r)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:De(t,n,f,v,a,null)}}c&&De(t,n,"srcSet",a.srcSet,a,null),r&&De(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var E=f=v=c=null,F=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":c=dt;break;case"type":v=dt;break;case"checked":F=dt;break;case"defaultChecked":J=dt;break;case"value":f=dt;break;case"defaultValue":E=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:De(t,n,r,dt,a,null)}}Br(t,f,E,F,J,v,c,!1);return;case"select":me("invalid",t),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":v=E;break;case"multiple":r=E;default:De(t,n,c,E,a,null)}n=f,a=v,t.multiple=!!r,n!=null?Ms(t,!!r,n,!1):a!=null&&Ms(t,!!r,a,!0);return;case"textarea":me("invalid",t),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:De(t,n,v,E,a,null)}ed(t,r,c,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(r=a[F],r!=null))switch(F){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:De(t,n,F,r,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(r=0;r<_o.length;r++)me(_o[r],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:De(t,n,J,r,a,null)}return;default:if(Gc(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&wf(t,n,dt,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&De(t,n,E,r,a,null))}function Cx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,E=null,F=null,J=null,dt=null;for(ut in a){var mt=a[ut];if(a.hasOwnProperty(ut)&&mt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":F=mt;default:r.hasOwnProperty(ut)||De(t,n,ut,null,r,mt)}}for(var et in r){var ut=r[et];if(mt=a[et],r.hasOwnProperty(et)&&(ut!=null||mt!=null))switch(et){case"type":f=ut;break;case"name":c=ut;break;case"checked":J=ut;break;case"defaultChecked":dt=ut;break;case"value":v=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==mt&&De(t,n,et,ut,r,mt)}}Pr(t,v,E,F,J,dt,f,c);return;case"select":ut=v=E=et=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ut=F;default:r.hasOwnProperty(f)||De(t,n,f,null,r,F)}for(c in r)if(f=r[c],F=a[c],r.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":et=f;break;case"defaultValue":E=f;break;case"multiple":v=f;default:f!==F&&De(t,n,c,f,r,F)}n=E,a=v,r=ut,et!=null?Ms(t,!!a,et,!1):!!r!=!!a&&(n!=null?Ms(t,!!a,n,!0):Ms(t,!!a,a?[]:"",!1));return;case"textarea":ut=et=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:De(t,n,E,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":et=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&De(t,n,v,c,r,f)}td(t,et,ut);return;case"option":for(var Ut in a)if(et=a[Ut],a.hasOwnProperty(Ut)&&et!=null&&!r.hasOwnProperty(Ut))switch(Ut){case"selected":t.selected=!1;break;default:De(t,n,Ut,null,r,et)}for(F in r)if(et=r[F],ut=a[F],r.hasOwnProperty(F)&&et!==ut&&(et!=null||ut!=null))switch(F){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:De(t,n,F,et,r,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)et=a[Kt],a.hasOwnProperty(Kt)&&et!=null&&!r.hasOwnProperty(Kt)&&De(t,n,Kt,null,r,et);for(J in r)if(et=r[J],ut=a[J],r.hasOwnProperty(J)&&et!==ut&&(et!=null||ut!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:De(t,n,J,et,r,ut)}return;default:if(Gc(n)){for(var Ue in a)et=a[Ue],a.hasOwnProperty(Ue)&&et!==void 0&&!r.hasOwnProperty(Ue)&&wf(t,n,Ue,void 0,r,et);for(dt in r)et=r[dt],ut=a[dt],!r.hasOwnProperty(dt)||et===ut||et===void 0&&ut===void 0||wf(t,n,dt,et,r,ut);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!r.hasOwnProperty(q)&&De(t,n,q,null,r,et);for(mt in r)et=r[mt],ut=a[mt],!r.hasOwnProperty(mt)||et===ut||et==null&&ut==null||De(t,n,mt,et,r,ut)}function ag(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,E=c.duration;if(f&&E&&ag(v)){for(v=0,E=c.responseEnd,r+=1;r<a.length;r++){var F=a[r],J=F.startTime;if(J>E)break;var dt=F.transferSize,mt=F.initiatorType;dt&&ag(mt)&&(F=F.responseEnd,v+=dt*(F<E?1:(E-J)/(F-J)))}if(--r,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cf=null,Lf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function sg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function Dx(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var og=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,Nx=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(t){return lg.resolve(null).then(t).catch(Ox)}:og;function Ox(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function cg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),tr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")xo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,xo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,E=f.nodeName;f[ct]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&xo(t.ownerDocument.body);a=c}while(a);tr(n)}function ug(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function zx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ct])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Px(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function fg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Of(t){return t.data==="$?"||t.data==="$~"}function zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Bx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Pf=null;function hg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function dg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function pg(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);at(t)}var ci=new Map,mg=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=j.d;j.d={f:Ix,r:Fx,D:Hx,C:Gx,L:Vx,m:Xx,X:Wx,S:kx,M:jx};function Ix(){var t=Yi.f(),n=Ll();return t||n}function Fx(t){var n=zt(t);n!==null&&n.tag===5&&n.type==="form"?Up(n):Yi.r(t)}var Qs=typeof document>"u"?null:document;function gg(t,n,a){var r=Qs;if(r&&typeof n=="string"&&n){var c=En(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),mg.has(c)||(mg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),yn(n,"link",t),It(n),r.head.appendChild(n)))}}function Hx(t){Yi.D(t),gg("dns-prefetch",t,null)}function Gx(t,n){Yi.C(t,n),gg("preconnect",t,n)}function Vx(t,n,a){Yi.L(t,n,a);var r=Qs;if(r&&t&&n){var c='link[rel="preload"][as="'+En(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+En(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+En(a.imageSizes)+'"]')):c+='[href="'+En(t)+'"]';var f=c;switch(n){case"style":f=Js(t);break;case"script":f=$s(t)}ci.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(yo(f))||n==="script"&&r.querySelector(So(f))||(n=r.createElement("link"),yn(n,"link",t),It(n),r.head.appendChild(n)))}}function Xx(t,n){Yi.m(t,n);var a=Qs;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+En(r)+'"][href="'+En(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$s(t)}if(!ci.has(f)&&(t=x({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}r=a.createElement("link"),yn(r,"link",t),It(r),a.head.appendChild(r)}}}function kx(t,n,a){Yi.S(t,n,a);var r=Qs;if(r&&t){var c=Yt(r).hoistableStyles,f=Js(t);n=n||"default";var v=c.get(f);if(!v){var E={loading:0,preload:null};if(v=r.querySelector(yo(f)))E.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Bf(t,a);var F=v=r.createElement("link");It(F),yn(F,"link",t),F._p=new Promise(function(J,dt){F.onload=J,F.onerror=dt}),F.addEventListener("load",function(){E.loading|=1}),F.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:E},c.set(f,v)}}}function Wx(t,n){Yi.X(t,n);var a=Qs;if(a&&t){var r=Yt(a).hoistableScripts,c=$s(t),f=r.get(c);f||(f=a.querySelector(So(c)),f||(t=x({src:t,async:!0},n),(n=ci.get(c))&&If(t,n),f=a.createElement("script"),It(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function jx(t,n){Yi.M(t,n);var a=Qs;if(a&&t){var r=Yt(a).hoistableScripts,c=$s(t),f=r.get(c);f||(f=a.querySelector(So(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&If(t,n),f=a.createElement("script"),It(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function _g(t,n,a,r){var c=(c=Mt.current)?Fl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Js(a.href),a=Yt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Js(a.href);var f=Yt(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(yo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||qx(c,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$s(a),a=Yt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Js(t){return'href="'+En(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function vg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function qx(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),yn(n,"link",a),It(n),t.head.appendChild(n))}function $s(t){return'[src="'+En(t)+'"]'}function So(t){return"script[async]"+t}function xg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+En(a.href)+'"]');if(r)return n.instance=r,It(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),It(r),yn(r,"style",c),Hl(r,a.precedence,t),n.instance=r;case"stylesheet":c=Js(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,It(f),f;r=vg(a),(c=ci.get(c))&&Bf(r,c),f=(t.ownerDocument||t).createElement("link"),It(f);var v=f;return v._p=new Promise(function(E,F){v.onload=E,v.onerror=F}),yn(f,"link",r),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=$s(a.src),(c=t.querySelector(So(f)))?(n.instance=c,It(c),c):(r=a,(c=ci.get(f))&&(r=x({},a),If(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),It(c),yn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Hl(r,a.precedence,t));return n.instance}function Hl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var E=r[v];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function yg(t,n,a){if(Gl===null){var r=new Map,c=Gl=new Map;c.set(a,r)}else c=Gl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ct]||f[Qe]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var E=r.get(v);E?E.push(f):r.set(v,[f])}}return r}function Sg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Yx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Zx(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Js(r.href),f=n.querySelector(yo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,It(f);return}f=n.ownerDocument||n,r=vg(r),(c=ci.get(c))&&Bf(r,c),f=f.createElement("link"),It(f);var v=f;v._p=new Promise(function(E,F){v.onload=E,v.onerror=F}),yn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function Kx(t,n){return t.stylesheets&&t.count===0&&kl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*Lx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xl=null;function kl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xl=new Map,n.forEach(Qx,t),Xl=null,Vl.call(t))}function Qx(t,n){if(!(n.state.loading&4)){var a=Xl.get(t);if(a)var r=a.get(null);else{a=new Map,Xl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=Vl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Mo={$$typeof:A,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Jx(t,n,a,r,c,f,v,E,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.hiddenUpdates=ke(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Eg(t,n,a,r,c,f,v,E,F,J,dt,mt){return t=new Jx(t,n,a,v,F,J,dt,mt,E),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Su(f),t}function Tg(t){return t?(t=Ls,t):Ls}function bg(t,n,a,r,c,f){c=Tg(c),r.context===null?r.context=c:r.pendingContext=c,r=ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=_a(t,r,n),a!==null&&(Hn(a,t,n),$r(a,t,n))}function Ag(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){Ag(t,n),(t=t.alternate)&&Ag(t,n)}function Rg(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&Hn(n,t,67108864),Hf(t,67108864)}}function wg(t){if(t.tag===13||t.tag===31){var n=Qn();n=Ur(n);var a=Ka(t,n);a!==null&&Hn(a,t,n),Hf(t,n)}}var Wl=!0;function $x(t,n,a,r){var c=B.T;B.T=null;var f=j.p;try{j.p=2,Gf(t,n,a,r)}finally{j.p=f,B.T=c}}function ty(t,n,a,r){var c=B.T;B.T=null;var f=j.p;try{j.p=8,Gf(t,n,a,r)}finally{j.p=f,B.T=c}}function Gf(t,n,a,r){if(Wl){var c=Vf(r);if(c===null)Rf(t,n,r,jl,a),Lg(t,r);else if(ny(c,t,n,a,r))r.stopPropagation();else if(Lg(t,r),n&4&&-1<ey.indexOf(t)){for(;c!==null;){var f=zt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=bt(f.pendingLanes);if(v!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var F=1<<31-kt(v);E.entanglements[1]|=F,v&=~F}Li(f),(Me&6)===0&&(wl=_t()+500,go(0))}}break;case 31:case 13:E=Ka(f,2),E!==null&&Hn(E,f,2),Ll(),Hf(f,2)}if(f=Vf(r),f===null&&Rf(t,n,r,jl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Rf(t,n,r,null,a)}}function Vf(t){return t=Xc(t),Xf(t)}var jl=null;function Xf(t){if(jl=null,t=Ct(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jl=t,null}function Cg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case wt:return 2;case Nt:return 8;case qt:case se:return 32;case vt:return 268435456;default:return 32}default:return 32}}var kf=!1,wa=null,Ca=null,La=null,Eo=new Map,To=new Map,Da=[],ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lg(t,n){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=zt(n),n!==null&&Rg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function ny(t,n,a,r,c){switch(n){case"focusin":return wa=bo(wa,t,n,a,r,c),!0;case"dragenter":return Ca=bo(Ca,t,n,a,r,c),!0;case"mouseover":return La=bo(La,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,t,n,a,r,c)),!0}return!1}function Dg(t){var n=Ct(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ja(t.priority,function(){wg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ja(t.priority,function(){wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Vc=r,a.target.dispatchEvent(r),Vc=null}else return n=zt(a),n!==null&&Rg(n),t.blockedOn=a,!1;n.shift()}return!0}function Ug(t,n,a){ql(t)&&a.delete(n)}function iy(){kf=!1,wa!==null&&ql(wa)&&(wa=null),Ca!==null&&ql(Ca)&&(Ca=null),La!==null&&ql(La)&&(La=null),Eo.forEach(Ug),To.forEach(Ug)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,kf||(kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,iy)))}var Zl=null;function Ng(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Xf(r||a)===null)continue;break}var f=zt(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function tr(t){function n(F){return Yl(F,t)}wa!==null&&Yl(wa,t),Ca!==null&&Yl(Ca,t),La!==null&&Yl(La,t),Eo.forEach(n),To.forEach(n);for(var a=0;a<Da.length;a++){var r=Da[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Dg(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[Mn]||null;if(typeof f=="function")v||Ng(a);else if(v){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[Mn]||null)E=v.formAction;else if(Xf(c)!==null)continue}else E=v.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),Ng(a)}}}function Og(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(t){this._internalRoot=t}Kl.prototype.render=Wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();bg(a,r,t,n,null,null)},Kl.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;bg(t.current,2,null,t,null,null),Ll(),n[ra]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Nr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&Dg(t)}};var zg=e.version;if(zg!=="19.2.5")throw Error(s(527,zg,"19.2.5"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ay={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Qt=Ql.inject(ay),Dt=Ql}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Vp,f=Xp,v=kp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Eg(t,1,!1,null,null,a,r,null,c,f,v,Og),t[ra]=n.current,Af(t),new Wf(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Vp,v=Xp,E=kp,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Eg(t,1,!0,n,a??null,r,c,F,f,v,E,Og),n.context=Tg(null),a=n.current,r=Qn(),r=Ur(r),c=ga(r),c.callback=null,_a(a,c,r),a=r,n.current.lanes=a,qe(n,a),Li(n),t[ra]=n.current,Af(t),new Kl(n)},Ro.version="19.2.5",Ro}var Wg;function py(){if(Wg)return Yf.exports;Wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yf.exports=dy(),Yf.exports}var my=py();function gy(){const o=Nn.useRef(null),e=Nn.useRef(null);return Nn.useEffect(()=>{const i=o.current,s=e.current;if(!i||!s)return;let l=0,u=0,d=0,h=0,m;const p=b=>{l=b.clientX,u=b.clientY,i.style.left=l+"px",i.style.top=u+"px"},g=s;function x(){d+=(l-d)*.15,h+=(u-h)*.15,g.style.left=d+"px",g.style.top=h+"px",m=requestAnimationFrame(x)}x();const y=b=>{b.addEventListener("mouseenter",()=>g.classList.add("cursor-hover")),b.addEventListener("mouseleave",()=>g.classList.remove("cursor-hover"))},M=new MutationObserver(()=>{document.querySelectorAll('[data-cursor="hover"], a, button').forEach(y)});return M.observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll('[data-cursor="hover"], a, button').forEach(y),window.addEventListener("mousemove",p),()=>{window.removeEventListener("mousemove",p),cancelAnimationFrame(m),M.disconnect()}},[]),z.jsxs(z.Fragment,{children:[z.jsx("div",{ref:o,className:"cursor-dot"}),z.jsx("div",{ref:e,className:"cursor-ring"})]})}function _y(){return z.jsxs("nav",{className:"nav",children:[z.jsxs("div",{className:"nav-logo",children:[z.jsx("span",{className:"nav-logo-dot"}),z.jsx("span",{children:"NAVEEN ◦ 2026"})]}),z.jsx("ul",{className:"nav-links",children:["work","services","experience","about","contact"].map(o=>z.jsx("li",{children:z.jsxs("a",{href:`#${o}`,"data-cursor":"hover",children:[z.jsx("span",{className:"paren",children:"( "}),o,z.jsx("span",{className:"paren",children:" )"})]})},o))}),z.jsxs("div",{className:"nav-status",children:[z.jsx("span",{className:"nav-status-dot"}),z.jsx("span",{children:"Available — Mon–Fri"})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="160",vy=0,jg=1,xy=2,_v=1,yy=2,ta=3,ka=0,Vn=1,ea=2,Ha=0,Er=1,qg=2,Yg=3,Zg=4,Sy=5,ms=100,My=101,Ey=102,Kg=103,Qg=104,Ty=200,by=201,Ay=202,Ry=203,Dh=204,Uh=205,wy=206,Cy=207,Ly=208,Dy=209,Uy=210,Ny=211,Oy=212,zy=213,Py=214,By=0,Iy=1,Fy=2,Ac=3,Hy=4,Gy=5,Vy=6,Xy=7,vv=0,ky=1,Wy=2,Ga=0,jy=1,qy=2,Yy=3,Zy=4,Ky=5,Qy=6,xv=300,br=301,Ar=302,Nh=303,Oh=304,Oc=306,zh=1e3,Ei=1001,Ph=1002,Dn=1003,Jg=1004,Jf=1005,fi=1006,Jy=1007,Io=1008,Va=1009,$y=1010,tS=1011,Wh=1012,yv=1013,Ia=1014,Fa=1015,Fo=1016,Sv=1017,Mv=1018,_s=1020,eS=1021,Ti=1023,nS=1024,iS=1025,vs=1026,Rr=1027,aS=1028,Ev=1029,sS=1030,Tv=1031,bv=1033,$f=33776,th=33777,eh=33778,nh=33779,$g=35840,t_=35841,e_=35842,n_=35843,Av=36196,i_=37492,a_=37496,s_=37808,r_=37809,o_=37810,l_=37811,c_=37812,u_=37813,f_=37814,h_=37815,d_=37816,p_=37817,m_=37818,g_=37819,__=37820,v_=37821,ih=36492,x_=36494,y_=36495,rS=36283,S_=36284,M_=36285,E_=36286,Rv=3e3,xs=3001,oS=3200,lS=3201,wv=0,cS=1,di="",Sn="srgb",aa="srgb-linear",jh="display-p3",zc="display-p3-linear",Rc="linear",Ge="srgb",wc="rec709",Cc="p3",er=7680,T_=519,uS=512,fS=513,hS=514,Cv=515,dS=516,pS=517,mS=518,gS=519,Bh=35044,b_="300 es",Ih=1035,ia=2e3,Lc=2001;class Cr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=Math.PI/180,Fh=180/Math.PI;function Xa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]).toLowerCase()}function Un(o,e,i){return Math.max(e,Math.min(i,o))}function _S(o,e){return(o%e+e)%e}function sh(o,e,i){return(1-i)*o+i*e}function A_(o){return(o&o-1)===0&&o!==0}function Hh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function na(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pe(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ae{constructor(e=0,i=0){ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Un(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(e,i,s,l,u,d,h,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p)}set(e,i,s,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],x=s[7],y=s[2],M=s[5],b=s[8],T=l[0],S=l[3],_=l[6],D=l[1],A=l[4],U=l[7],k=l[2],I=l[5],P=l[8];return u[0]=d*T+h*D+m*k,u[3]=d*S+h*A+m*I,u[6]=d*_+h*U+m*P,u[1]=p*T+g*D+x*k,u[4]=p*S+g*A+x*I,u[7]=p*_+g*U+x*P,u[2]=y*T+M*D+b*k,u[5]=y*S+M*A+b*I,u[8]=y*_+M*U+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-s*u*g+s*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*d-h*p,y=h*m-g*u,M=p*u-d*m,b=i*x+s*y+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=x*T,e[1]=(l*p-g*s)*T,e[2]=(h*s-l*d)*T,e[3]=y*T,e[4]=(g*i-l*m)*T,e[5]=(l*u-h*i)*T,e[6]=M*T,e[7]=(s*m-p*i)*T,e[8]=(d*i-s*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(rh.makeScale(e,i)),this}rotate(e){return this.premultiply(rh.makeRotation(-e)),this}translate(e,i){return this.premultiply(rh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new he;function Lv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function vS(){const o=Dc("canvas");return o.style.display="block",o}const R_={};function Po(o){o in R_||(R_[o]=!0,console.warn(o))}const w_=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),C_=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jl={[aa]:{transfer:Rc,primaries:wc,toReference:o=>o,fromReference:o=>o},[Sn]:{transfer:Ge,primaries:wc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[zc]:{transfer:Rc,primaries:Cc,toReference:o=>o.applyMatrix3(C_),fromReference:o=>o.applyMatrix3(w_)},[jh]:{transfer:Ge,primaries:Cc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(C_),fromReference:o=>o.applyMatrix3(w_).convertLinearToSRGB()}},xS=new Set([aa,zc]),Ne={enabled:!0,_workingColorSpace:aa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!xS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const s=Jl[e].toReference,l=Jl[i].fromReference;return l(s(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Jl[o].primaries},getTransfer:function(o){return o===di?Rc:Jl[o].transfer}};function Tr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function oh(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let nr;class Dv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{nr===void 0&&(nr=Dc("canvas")),nr.width=e.width,nr.height=e.height;const s=nr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=nr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Dc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Tr(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Tr(i[s]/255)*255):i[s]=Tr(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yS=0;class Uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Xa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(lh(l[d].image)):u.push(lh(l[d]))}else u=lh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function lh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Dv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SS=0;class Xn extends Cr{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Ei,l=Ei,u=fi,d=Io,h=Ti,m=Va,p=Xn.DEFAULT_ANISOTROPY,g=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Xa(),this.name="",this.source=new Uv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===xs?Sn:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Sn?xs:Rv}set encoding(e){Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xs?Sn:di}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=xv;Xn.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,i=0,s=0,l=1){pn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],y=m[1],M=m[5],b=m[9],T=m[2],S=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-T)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+T)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const A=(p+1)/2,U=(M+1)/2,k=(_+1)/2,I=(g+y)/4,P=(x+T)/4,lt=(b+S)/4;return A>U&&A>k?A<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(A),l=I/s,u=P/s):U>k?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=I/l,u=lt/l):k<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),s=P/u,l=lt/u),this.set(s,l,u,i),this}let D=Math.sqrt((S-b)*(S-b)+(x-T)*(x-T)+(y-g)*(y-g));return Math.abs(D)<.001&&(D=1),this.x=(S-b)/D,this.y=(x-T)/D,this.z=(y-g)/D,this.w=Math.acos((p+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MS extends Cr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new pn(0,0,e,i),this.scissorTest=!1,this.viewport=new pn(0,0,e,i);const l={width:e,height:i,depth:1};s.encoding!==void 0&&(Po("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===xs?Sn:di),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Xn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,i,s=1){(this.width!==e||this.height!==i||this.depth!==s)&&(this.width=e,this.height=i,this.depth=s,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Uv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends MS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Nv extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ES extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3];const y=u[d+0],M=u[d+1],b=u[d+2],T=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(h===1){e[i+0]=y,e[i+1]=M,e[i+2]=b,e[i+3]=T;return}if(x!==T||m!==y||p!==M||g!==b){let S=1-h;const _=m*y+p*M+g*b+x*T,D=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const k=Math.sqrt(A),I=Math.atan2(k,_*D);S=Math.sin(S*I)/k,h=Math.sin(h*I)/k}const U=h*D;if(m=m*S+y*U,p=p*S+M*U,g=g*S+b*U,x=x*S+T*U,S===1-h){const k=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=k,p*=k,g*=k,x*=k}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=u[d],y=u[d+1],M=u[d+2],b=u[d+3];return e[i]=h*b+g*x+m*M-p*y,e[i+1]=m*b+g*y+p*x-h*M,e[i+2]=p*b+g*M+h*y-m*x,e[i+3]=g*b-h*x-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),x=h(u/2),y=m(s/2),M=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=y*g*x+p*M*b,this._y=p*M*x-y*g*b,this._z=p*g*b+y*M*x,this._w=p*g*x-y*M*b;break;case"YXZ":this._x=y*g*x+p*M*b,this._y=p*M*x-y*g*b,this._z=p*g*b-y*M*x,this._w=p*g*x+y*M*b;break;case"ZXY":this._x=y*g*x-p*M*b,this._y=p*M*x+y*g*b,this._z=p*g*b+y*M*x,this._w=p*g*x-y*M*b;break;case"ZYX":this._x=y*g*x-p*M*b,this._y=p*M*x+y*g*b,this._z=p*g*b-y*M*x,this._w=p*g*x+y*M*b;break;case"YZX":this._x=y*g*x+p*M*b,this._y=p*M*x+y*g*b,this._z=p*g*b-y*M*x,this._w=p*g*x-y*M*b;break;case"XZY":this._x=y*g*x-p*M*b,this._y=p*M*x-y*g*b,this._z=p*g*b+y*M*x,this._w=p*g*x+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=s+h+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-s*p,this._z=u*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),x=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=d*x+this._w*y,this._x=s*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),s*Math.sin(u),s*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,i=0,s=0){Y.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(L_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(L_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),g=2*(h*i-u*l),x=2*(u*s-d*i);return this.x=i+m*p+d*x-h*g,this.y=s+m*g+h*p-u*x,this.z=l+m*x+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ch.copy(this).projectOnVector(e),this.sub(ch)}reflect(e){return this.sub(ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Un(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new Y,L_=new Ho;class Go{constructor(e=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),tc.subVectors(this.max,wo),ir.subVectors(e.a,wo),ar.subVectors(e.b,wo),sr.subVectors(e.c,wo),Na.subVectors(ar,ir),Oa.subVectors(sr,ar),cs.subVectors(ir,sr);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-cs.z,cs.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,cs.z,0,-cs.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-cs.y,cs.x,0];return!uh(i,ir,ar,sr,tc)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,ir,ar,sr,tc))?!1:(ec.crossVectors(Na,Oa),i=[ec.x,ec.y,ec.z],uh(i,ir,ar,sr,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],yi=new Y,$l=new Go,ir=new Y,ar=new Y,sr=new Y,Na=new Y,Oa=new Y,cs=new Y,wo=new Y,tc=new Y,ec=new Y,us=new Y;function uh(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){us.fromArray(o,u);const h=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=e.dot(us),p=i.dot(us),g=s.dot(us);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const TS=new Go,Co=new Y,fh=new Y;class Pc{constructor(e=new Y,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):TS.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(fh)),this.expandByPoint(Co.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new Y,hh=new Y,nc=new Y,za=new Y,dh=new Y,ic=new Y,ph=new Y;class Ov{constructor(e=new Y,i=new Y(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){hh.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),za.copy(this.origin).sub(hh);const u=e.distanceTo(i)*.5,d=-this.direction.dot(nc),h=za.dot(this.direction),m=-za.dot(nc),p=za.lengthSq(),g=Math.abs(1-d*d);let x,y,M,b;if(g>0)if(x=d*m-h,y=d*h-m,b=u*g,x>=0)if(y>=-b)if(y<=b){const T=1/g;x*=T,y*=T,M=x*(x+d*y+2*h)+y*(d*x+y+2*m)+p}else y=u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*m)+p;else y<=-b?(x=Math.max(0,-(-d*u+h)),y=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p):y<=b?(x=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(x=Math.max(0,-(d*u+h)),y=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p);else y=d>0?-u:u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(hh).addScaledVector(nc,y),M}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(u=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-y.z)*x,m=(e.max.z-y.z)*x):(h=(e.max.z-y.z)*x,m=(e.min.z-y.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,s,l,u){dh.subVectors(i,e),ic.subVectors(s,e),ph.crossVectors(dh,ic);let d=this.direction.dot(ph),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;za.subVectors(this.origin,e);const m=h*this.direction.dot(ic.crossVectors(za,ic));if(m<0)return null;const p=h*this.direction.dot(dh.cross(za));if(p<0||m+p>d)return null;const g=-h*za.dot(ph);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,i,s,l,u,d,h,m,p,g,x,y,M,b,T,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p,g,x,y,M,b,T,S)}set(e,i,s,l,u,d,h,m,p,g,x,y,M,b,T,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=y,_[3]=M,_[7]=b,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/rr.setFromMatrixColumn(e,0).length(),u=1/rr.setFromMatrixColumn(e,1).length(),d=1/rr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=d*g,M=d*x,b=h*g,T=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+b*p,i[5]=y-T*p,i[9]=-h*m,i[2]=T-y*p,i[6]=b+M*p,i[10]=d*m}else if(e.order==="YXZ"){const y=m*g,M=m*x,b=p*g,T=p*x;i[0]=y+T*h,i[4]=b*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=M*h-b,i[6]=T+y*h,i[10]=d*m}else if(e.order==="ZXY"){const y=m*g,M=m*x,b=p*g,T=p*x;i[0]=y-T*h,i[4]=-d*x,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*g,i[9]=T-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const y=d*g,M=d*x,b=h*g,T=h*x;i[0]=m*g,i[4]=b*p-M,i[8]=y*p+T,i[1]=m*x,i[5]=T*p+y,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const y=d*m,M=d*p,b=h*m,T=h*p;i[0]=m*g,i[4]=T-y*x,i[8]=b*x+M,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*x+b,i[10]=y-T*x}else if(e.order==="XZY"){const y=d*m,M=d*p,b=h*m,T=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+T,i[5]=d*g,i[9]=M*x-b,i[2]=b*x-M,i[6]=h*g,i[10]=T*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bS,e,AS)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Pa.crossVectors(s,Jn),Pa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Pa.crossVectors(s,Jn)),Pa.normalize(),ac.crossVectors(Jn,Pa),l[0]=Pa.x,l[4]=ac.x,l[8]=Jn.x,l[1]=Pa.y,l[5]=ac.y,l[9]=Jn.y,l[2]=Pa.z,l[6]=ac.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],x=s[5],y=s[9],M=s[13],b=s[2],T=s[6],S=s[10],_=s[14],D=s[3],A=s[7],U=s[11],k=s[15],I=l[0],P=l[4],lt=l[8],R=l[12],L=l[1],rt=l[5],nt=l[9],yt=l[13],X=l[2],$=l[6],B=l[10],j=l[14],tt=l[3],ft=l[7],ht=l[11],N=l[15];return u[0]=d*I+h*L+m*X+p*tt,u[4]=d*P+h*rt+m*$+p*ft,u[8]=d*lt+h*nt+m*B+p*ht,u[12]=d*R+h*yt+m*j+p*N,u[1]=g*I+x*L+y*X+M*tt,u[5]=g*P+x*rt+y*$+M*ft,u[9]=g*lt+x*nt+y*B+M*ht,u[13]=g*R+x*yt+y*j+M*N,u[2]=b*I+T*L+S*X+_*tt,u[6]=b*P+T*rt+S*$+_*ft,u[10]=b*lt+T*nt+S*B+_*ht,u[14]=b*R+T*yt+S*j+_*N,u[3]=D*I+A*L+U*X+k*tt,u[7]=D*P+A*rt+U*$+k*ft,u[11]=D*lt+A*nt+U*B+k*ht,u[15]=D*R+A*yt+U*j+k*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],y=e[10],M=e[14],b=e[3],T=e[7],S=e[11],_=e[15];return b*(+u*m*x-l*p*x-u*h*y+s*p*y+l*h*M-s*m*M)+T*(+i*m*M-i*p*y+u*d*y-l*d*M+l*p*g-u*m*g)+S*(+i*p*x-i*h*M-u*d*x+s*d*M+u*h*g-s*p*g)+_*(-l*h*g-i*m*x+i*h*y+l*d*x-s*d*y+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],y=e[10],M=e[11],b=e[12],T=e[13],S=e[14],_=e[15],D=x*S*p-T*y*p+T*m*M-h*S*M-x*m*_+h*y*_,A=b*y*p-g*S*p-b*m*M+d*S*M+g*m*_-d*y*_,U=g*T*p-b*x*p+b*h*M-d*T*M-g*h*_+d*x*_,k=b*x*m-g*T*m-b*h*y+d*T*y+g*h*S-d*x*S,I=i*D+s*A+l*U+u*k;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=D*P,e[1]=(T*y*u-x*S*u-T*l*M+s*S*M+x*l*_-s*y*_)*P,e[2]=(h*S*u-T*m*u+T*l*p-s*S*p-h*l*_+s*m*_)*P,e[3]=(x*m*u-h*y*u-x*l*p+s*y*p+h*l*M-s*m*M)*P,e[4]=A*P,e[5]=(g*S*u-b*y*u+b*l*M-i*S*M-g*l*_+i*y*_)*P,e[6]=(b*m*u-d*S*u-b*l*p+i*S*p+d*l*_-i*m*_)*P,e[7]=(d*y*u-g*m*u+g*l*p-i*y*p-d*l*M+i*m*M)*P,e[8]=U*P,e[9]=(b*x*u-g*T*u-b*s*M+i*T*M+g*s*_-i*x*_)*P,e[10]=(d*T*u-b*h*u+b*s*p-i*T*p-d*s*_+i*h*_)*P,e[11]=(g*h*u-d*x*u-g*s*p+i*x*p+d*s*M-i*h*M)*P,e[12]=k*P,e[13]=(g*T*l-b*x*l+b*s*y-i*T*y-g*s*S+i*x*S)*P,e[14]=(b*h*l-d*T*l-b*s*m+i*T*m+d*s*S-i*h*S)*P,e[15]=(d*x*l-g*h*l+g*s*m-i*x*m-d*s*y+i*h*y)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,x=h+h,y=u*p,M=u*g,b=u*x,T=d*g,S=d*x,_=h*x,D=m*p,A=m*g,U=m*x,k=s.x,I=s.y,P=s.z;return l[0]=(1-(T+_))*k,l[1]=(M+U)*k,l[2]=(b-A)*k,l[3]=0,l[4]=(M-U)*I,l[5]=(1-(y+_))*I,l[6]=(S+D)*I,l[7]=0,l[8]=(b+A)*P,l[9]=(S-D)*P,l[10]=(1-(y+T))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=rr.set(l[0],l[1],l[2]).length();const d=rr.set(l[4],l[5],l[6]).length(),h=rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,g=1/d,x=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=ia){const m=this.elements,p=2*u/(i-e),g=2*u/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let M,b;if(h===ia)M=-(d+u)/(d-u),b=-2*d*u/(d-u);else if(h===Lc)M=-d/(d-u),b=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=ia){const m=this.elements,p=1/(i-e),g=1/(s-l),x=1/(d-u),y=(i+e)*p,M=(s+l)*g;let b,T;if(h===ia)b=(d+u)*x,T=-2*x;else if(h===Lc)b=u*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=T,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const rr=new Y,Si=new Ke,bS=new Y(0,0,0),AS=new Y(1,1,1),Pa=new Y,ac=new Y,Jn=new Y,D_=new Ke,U_=new Ho;class Bc{constructor(e=0,i=0,s=0,l=Bc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Un(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Un(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Un(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return D_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return U_.setFromEuler(this),this.setFromQuaternion(U_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bc.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RS=0;const N_=new Y,or=new Ho,Qi=new Ke,sc=new Y,Lo=new Y,wS=new Y,CS=new Ho,O_=new Y(1,0,0),z_=new Y(0,1,0),P_=new Y(0,0,1),LS={type:"added"},DS={type:"removed"};class mn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new Y,i=new Bc,s=new Ho,l=new Y(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new he}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return or.setFromAxisAngle(e,i),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,i){return or.setFromAxisAngle(e,i),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(O_,e)}rotateY(e){return this.rotateOnAxis(z_,e)}rotateZ(e){return this.rotateOnAxis(P_,e)}translateOnAxis(e,i){return N_.copy(e).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(O_,e)}translateY(e){return this.translateOnAxis(z_,e)}translateZ(e){return this.translateOnAxis(P_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?sc.copy(e):sc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Lo,sc,this.up):Qi.lookAt(sc,Lo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),or.setFromRotationMatrix(Qi),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(LS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(DS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,wS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const u=i[s];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),x=d(e.shapes),y=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}mn.DEFAULT_UP=new Y(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Y,Ji=new Y,mh=new Y,$i=new Y,lr=new Y,cr=new Y,B_=new Y,gh=new Y,_h=new Y,vh=new Y;let rc=!1;class hi{constructor(e=new Y,i=new Y,s=new Y){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Mi.subVectors(l,i),Ji.subVectors(s,i),mh.subVectors(e,i);const d=Mi.dot(Mi),h=Mi.dot(Ji),m=Mi.dot(mh),p=Ji.dot(Ji),g=Ji.dot(mh),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const y=1/x,M=(p*m-h*g)*y,b=(d*g-h*m)*y;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(e,i,s,l,u,d,h,m){return rc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rc=!0),this.getInterpolation(e,i,s,l,u,d,h,m)}static getInterpolation(e,i,s,l,u,d,h,m){return this.getBarycoord(e,i,s,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(d,$i.y),m.addScaledVector(h,$i.z),m)}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),Ji.subVectors(e,i),Mi.cross(Ji).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Mi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return hi.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,s,l,u){return rc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rc=!0),hi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}getInterpolation(e,i,s,l,u){return hi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;lr.subVectors(l,s),cr.subVectors(u,s),gh.subVectors(e,s);const m=lr.dot(gh),p=cr.dot(gh);if(m<=0&&p<=0)return i.copy(s);_h.subVectors(e,l);const g=lr.dot(_h),x=cr.dot(_h);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(lr,d);vh.subVectors(e,u);const M=lr.dot(vh),b=cr.dot(vh);if(b>=0&&M<=b)return i.copy(u);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(cr,h);const S=g*b-M*x;if(S<=0&&x-g>=0&&M-b>=0)return B_.subVectors(u,l),h=(x-g)/(x-g+(M-b)),i.copy(l).addScaledVector(B_,h);const _=1/(S+T+y);return d=T*_,h=y*_,i.copy(s).addScaledVector(lr,d).addScaledVector(cr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},oc={h:0,s:0,l:0};function xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class de{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ne.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ne.workingColorSpace){if(e=_S(e,1),i=Un(i,0,1),s=Un(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=xh(d,u,e+1/3),this.g=xh(d,u,e),this.b=xh(d,u,e-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(e,i=Sn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Sn){const s=Pv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=oh(e.r),this.g=oh(e.g),this.b=oh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Ne.fromWorkingColorSpace(An.copy(this),e),Math.round(Un(An.r*255,0,255))*65536+Math.round(Un(An.g*255,0,255))*256+Math.round(Un(An.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(An.copy(this),i);const s=An.r,l=An.g,u=An.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Sn){Ne.fromWorkingColorSpace(An.copy(this),e);const i=An.r,s=An.g,l=An.b;return e!==Sn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+i,Ba.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ba),e.getHSL(oc);const s=sh(Ba.h,oc.h,i),l=sh(Ba.s,oc.s,i),u=sh(Ba.l,oc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new de;de.NAMES=Pv;let US=0;class Ss extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Er,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Uh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(s.blending=this.blending),this.side!==ka&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dh&&(s.blendSrc=this.blendSrc),this.blendDst!==Uh&&(s.blendDst=this.blendDst),this.blendEquation!==ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ac&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qh extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new Y,lc=new ae;class pi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(e),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=na(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Pe(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=na(i,this.array)),i}setX(e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=na(i,this.array)),i}setY(e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=na(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=na(i,this.array)),i}setW(e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array),l=Pe(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array),l=Pe(l,this.array),u=Pe(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),e}}class Bv extends pi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Iv extends pi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ti extends pi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let NS=0;const ui=new Ke,yh=new mn,ur=new Y,$n=new Go,Do=new Go,dn=new Y;class mi extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lv(e)?Iv:Bv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,s){return ui.makeTranslation(e,i,s),this.applyMatrix4(ui),this}scale(e,i,s){return ui.makeScale(e,i,s),this.applyMatrix4(ui),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const i=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new ti(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(dn.addVectors($n.min,Do.min),$n.expandByPoint(dn),dn.addVectors($n.max,Do.max),$n.expandByPoint(dn)):($n.expandByPoint(Do.min),$n.expandByPoint(Do.max))}$n.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)dn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(dn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)dn.fromBufferAttribute(h,p),m&&(ur.fromBufferAttribute(e,p),dn.add(ur)),l=Math.max(l,s.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*h),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let L=0;L<h;L++)p[L]=new Y,g[L]=new Y;const x=new Y,y=new Y,M=new Y,b=new ae,T=new ae,S=new ae,_=new Y,D=new Y;function A(L,rt,nt){x.fromArray(l,L*3),y.fromArray(l,rt*3),M.fromArray(l,nt*3),b.fromArray(d,L*2),T.fromArray(d,rt*2),S.fromArray(d,nt*2),y.sub(x),M.sub(x),T.sub(b),S.sub(b);const yt=1/(T.x*S.y-S.x*T.y);isFinite(yt)&&(_.copy(y).multiplyScalar(S.y).addScaledVector(M,-T.y).multiplyScalar(yt),D.copy(M).multiplyScalar(T.x).addScaledVector(y,-S.x).multiplyScalar(yt),p[L].add(_),p[rt].add(_),p[nt].add(_),g[L].add(D),g[rt].add(D),g[nt].add(D))}let U=this.groups;U.length===0&&(U=[{start:0,count:s.length}]);for(let L=0,rt=U.length;L<rt;++L){const nt=U[L],yt=nt.start,X=nt.count;for(let $=yt,B=yt+X;$<B;$+=3)A(s[$+0],s[$+1],s[$+2])}const k=new Y,I=new Y,P=new Y,lt=new Y;function R(L){P.fromArray(u,L*3),lt.copy(P);const rt=p[L];k.copy(rt),k.sub(P.multiplyScalar(P.dot(rt))).normalize(),I.crossVectors(lt,rt);const yt=I.dot(g[L])<0?-1:1;m[L*4]=k.x,m[L*4+1]=k.y,m[L*4+2]=k.z,m[L*4+3]=yt}for(let L=0,rt=U.length;L<rt;++L){const nt=U[L],yt=nt.start,X=nt.count;for(let $=yt,B=yt+X;$<B;$+=3)R(s[$+0]),R(s[$+1]),R(s[$+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new Y,u=new Y,d=new Y,h=new Y,m=new Y,p=new Y,g=new Y,x=new Y;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),T=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),h.add(g),m.add(g),p.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,y=new p.constructor(m.length*g);let M=0,b=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*g;for(let _=0;_<g;_++)y[b++]=p[M++]}return new pi(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,x=p.length;g<x;g++){const y=p[g],M=e(y,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let y=0,M=x.length;y<M;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I_=new Ke,fs=new Ov,cc=new Pc,F_=new Y,fr=new Y,hr=new Y,dr=new Y,Sh=new Y,uc=new Y,fc=new ae,hc=new ae,dc=new ae,H_=new Y,G_=new Y,V_=new Y,pc=new Y,mc=new Y;class bi extends mn{constructor(e=new mi,i=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){uc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],x=u[m];g!==0&&(Sh.fromBufferAttribute(x,e),d?uc.addScaledVector(Sh,g):uc.addScaledVector(Sh.sub(i),g))}i.add(uc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(u),fs.copy(e.ray).recast(e.near),!(cc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(cc,F_)===null||fs.origin.distanceToSquared(F_)>(e.far-e.near)**2))&&(I_.copy(u).invert(),fs.copy(e.ray).applyMatrix4(I_),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,fs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,T=y.length;b<T;b++){const S=y[b],_=d[S.materialIndex],D=Math.max(S.start,M.start),A=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let U=D,k=A;U<k;U+=3){const I=h.getX(U),P=h.getX(U+1),lt=h.getX(U+2);l=gc(this,_,e,s,p,g,x,I,P,lt),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=b,_=T;S<_;S+=3){const D=h.getX(S),A=h.getX(S+1),U=h.getX(S+2);l=gc(this,d,e,s,p,g,x,D,A,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,T=y.length;b<T;b++){const S=y[b],_=d[S.materialIndex],D=Math.max(S.start,M.start),A=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let U=D,k=A;U<k;U+=3){const I=U,P=U+1,lt=U+2;l=gc(this,_,e,s,p,g,x,I,P,lt),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=b,_=T;S<_;S+=3){const D=S,A=S+1,U=S+2;l=gc(this,d,e,s,p,g,x,D,A,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function OS(o,e,i,s,l,u,d,h){let m;if(e.side===Vn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,e.side===ka,h),m===null)return null;mc.copy(h),mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(mc);return p<i.near||p>i.far?null:{distance:p,point:mc.clone(),object:o}}function gc(o,e,i,s,l,u,d,h,m,p){o.getVertexPosition(h,fr),o.getVertexPosition(m,hr),o.getVertexPosition(p,dr);const g=OS(o,e,i,s,fr,hr,dr,pc);if(g){l&&(fc.fromBufferAttribute(l,h),hc.fromBufferAttribute(l,m),dc.fromBufferAttribute(l,p),g.uv=hi.getInterpolation(pc,fr,hr,dr,fc,hc,dc,new ae)),u&&(fc.fromBufferAttribute(u,h),hc.fromBufferAttribute(u,m),dc.fromBufferAttribute(u,p),g.uv1=hi.getInterpolation(pc,fr,hr,dr,fc,hc,dc,new ae),g.uv2=g.uv1),d&&(H_.fromBufferAttribute(d,h),G_.fromBufferAttribute(d,m),V_.fromBufferAttribute(d,p),g.normal=hi.getInterpolation(pc,fr,hr,dr,H_,G_,V_,new Y),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new Y,materialIndex:0};hi.getNormal(fr,hr,dr,x.normal),g.face=x}return g}class Vo extends mi{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],x=[];let y=0,M=0;b("z","y","x",-1,-1,s,i,e,d,u,0),b("z","y","x",1,-1,s,i,-e,d,u,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ti(p,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(x,2));function b(T,S,_,D,A,U,k,I,P,lt,R){const L=U/P,rt=k/lt,nt=U/2,yt=k/2,X=I/2,$=P+1,B=lt+1;let j=0,tt=0;const ft=new Y;for(let ht=0;ht<B;ht++){const N=ht*rt-yt;for(let W=0;W<$;W++){const V=W*L-nt;ft[T]=V*D,ft[S]=N*A,ft[_]=X,p.push(ft.x,ft.y,ft.z),ft[T]=0,ft[S]=0,ft[_]=I>0?1:-1,g.push(ft.x,ft.y,ft.z),x.push(W/P),x.push(1-ht/lt),j+=1}}for(let ht=0;ht<lt;ht++)for(let N=0;N<P;N++){const W=y+N+$*ht,V=y+N+$*(ht+1),Q=y+(N+1)+$*(ht+1),gt=y+(N+1)+$*ht;m.push(W,V,gt),m.push(V,Q,gt),tt+=6}h.addGroup(M,tt,R),M+=tt,y+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const s=wr(o[i]);for(const l in s)e[l]=s[l]}return e}function zS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Fv(o){return o.getRenderTarget()===null?o.outputColorSpace:Ne.workingColorSpace}const PS={clone:wr,merge:Ln};var BS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BS,this.fragmentShader=IS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=zS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Hv extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gn extends Hv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ah*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ah*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class FS extends mn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Gn(pr,mr,e,i);l.layers=this.layers,this.add(l);const u=new Gn(pr,mr,e,i);u.layers=this.layers,this.add(u);const d=new Gn(pr,mr,e,i);d.layers=this.layers,this.add(d);const h=new Gn(pr,mr,e,i);h.layers=this.layers,this.add(h);const m=new Gn(pr,mr,e,i);m.layers=this.layers,this.add(m);const p=new Gn(pr,mr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(x,y,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Gv extends Xn{constructor(e,i,s,l,u,d,h,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:br,super(e,i,s,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HS extends ys{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];i.encoding!==void 0&&(Po("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xs?Sn:di),this.texture=new Gv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:fi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vo(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new bi(l,u),h=i.minFilter;return i.minFilter===Io&&(i.minFilter=fi),new FS(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}const Mh=new Y,GS=new Y,VS=new he;class ds{constructor(e=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Mh.subVectors(s,i).cross(GS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||VS.getNormalMatrix(e),l=this.coplanarPoint(Mh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Pc,_c=new Y;class Yh{constructor(e=new ds,i=new ds,s=new ds,l=new ds,u=new ds,d=new ds){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ia){const s=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],x=l[6],y=l[7],M=l[8],b=l[9],T=l[10],S=l[11],_=l[12],D=l[13],A=l[14],U=l[15];if(s[0].setComponents(m-u,y-p,S-M,U-_).normalize(),s[1].setComponents(m+u,y+p,S+M,U+_).normalize(),s[2].setComponents(m+d,y+g,S+b,U+D).normalize(),s[3].setComponents(m-d,y-g,S-b,U-D).normalize(),s[4].setComponents(m-h,y-x,S-T,U-A).normalize(),i===ia)s[5].setComponents(m+h,y+x,S+T,U+A).normalize();else if(i===Lc)s[5].setComponents(h,x,T,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(_c.x=l.normal.x>0?e.max.x:e.min.x,_c.y=l.normal.y>0?e.max.y:e.min.y,_c.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vv(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function XS(o,e){const i=e.isWebGL2,s=new WeakMap;function l(p,g){const x=p.array,y=p.usage,M=x.byteLength,b=o.createBuffer();o.bindBuffer(g,b),o.bufferData(g,x,y),p.onUploadCallback();let T;if(x instanceof Float32Array)T=o.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)T=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)T=o.SHORT;else if(x instanceof Uint32Array)T=o.UNSIGNED_INT;else if(x instanceof Int32Array)T=o.INT;else if(x instanceof Int8Array)T=o.BYTE;else if(x instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:b,type:T,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version,size:M}}function u(p,g,x){const y=g.array,M=g._updateRange,b=g.updateRanges;if(o.bindBuffer(x,p),M.count===-1&&b.length===0&&o.bufferSubData(x,0,y),b.length!==0){for(let T=0,S=b.length;T<S;T++){const _=b[T];i?o.bufferSubData(x,_.start*y.BYTES_PER_ELEMENT,y,_.start,_.count):o.bufferSubData(x,_.start*y.BYTES_PER_ELEMENT,y.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(x,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):o.bufferSubData(x,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),s.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=s.get(p);g&&(o.deleteBuffer(g.buffer),s.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const y=s.get(p);(!y||y.version<p.version)&&s.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=s.get(p);if(x===void 0)s.set(p,l(p,g));else if(x.version<p.version){if(x.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,p,g),x.version=p.version}}return{get:d,remove:h,update:m}}class Zh extends mi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,x=e/h,y=i/m,M=[],b=[],T=[],S=[];for(let _=0;_<g;_++){const D=_*y-d;for(let A=0;A<p;A++){const U=A*x-u;b.push(U,-D,0),T.push(0,0,1),S.push(A/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<h;D++){const A=D+p*_,U=D+p*(_+1),k=D+1+p*(_+1),I=D+1+p*_;M.push(A,U,I),M.push(U,k,I)}this.setIndex(M),this.setAttribute("position",new ti(b,3)),this.setAttribute("normal",new ti(T,3)),this.setAttribute("uv",new ti(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.width,e.height,e.widthSegments,e.heightSegments)}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ZS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,NM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,KM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,QM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ME=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,QE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ST=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:kS,alphahash_pars_fragment:WS,alphamap_fragment:jS,alphamap_pars_fragment:qS,alphatest_fragment:YS,alphatest_pars_fragment:ZS,aomap_fragment:KS,aomap_pars_fragment:QS,batching_pars_vertex:JS,batching_vertex:$S,begin_vertex:tM,beginnormal_vertex:eM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:aM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:rM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:lM,color_fragment:cM,color_pars_fragment:uM,color_pars_vertex:fM,color_vertex:hM,common:dM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:_M,emissivemap_fragment:vM,emissivemap_pars_fragment:xM,colorspace_fragment:yM,colorspace_pars_fragment:SM,envmap_fragment:MM,envmap_common_pars_fragment:EM,envmap_pars_fragment:TM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:BM,envmap_vertex:AM,fog_vertex:RM,fog_pars_vertex:wM,fog_fragment:CM,fog_pars_fragment:LM,gradientmap_pars_fragment:DM,lightmap_fragment:UM,lightmap_pars_fragment:NM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:zM,lights_pars_begin:PM,lights_toon_fragment:IM,lights_toon_pars_fragment:FM,lights_phong_fragment:HM,lights_phong_pars_fragment:GM,lights_physical_fragment:VM,lights_physical_pars_fragment:XM,lights_fragment_begin:kM,lights_fragment_maps:WM,lights_fragment_end:jM,logdepthbuf_fragment:qM,logdepthbuf_pars_fragment:YM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:KM,map_fragment:QM,map_pars_fragment:JM,map_particle_fragment:$M,map_particle_pars_fragment:tE,metalnessmap_fragment:eE,metalnessmap_pars_fragment:nE,morphcolor_vertex:iE,morphnormal_vertex:aE,morphtarget_pars_vertex:sE,morphtarget_vertex:rE,normal_fragment_begin:oE,normal_fragment_maps:lE,normal_pars_fragment:cE,normal_pars_vertex:uE,normal_vertex:fE,normalmap_pars_fragment:hE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:pE,clearcoat_pars_fragment:mE,iridescence_pars_fragment:gE,opaque_fragment:_E,packing:vE,premultiplied_alpha_fragment:xE,project_vertex:yE,dithering_fragment:SE,dithering_pars_fragment:ME,roughnessmap_fragment:EE,roughnessmap_pars_fragment:TE,shadowmap_pars_fragment:bE,shadowmap_pars_vertex:AE,shadowmap_vertex:RE,shadowmask_pars_fragment:wE,skinbase_vertex:CE,skinning_pars_vertex:LE,skinning_vertex:DE,skinnormal_vertex:UE,specularmap_fragment:NE,specularmap_pars_fragment:OE,tonemapping_fragment:zE,tonemapping_pars_fragment:PE,transmission_fragment:BE,transmission_pars_fragment:IE,uv_pars_fragment:FE,uv_pars_vertex:HE,uv_vertex:GE,worldpos_vertex:VE,background_vert:XE,background_frag:kE,backgroundCube_vert:WE,backgroundCube_frag:jE,cube_vert:qE,cube_frag:YE,depth_vert:ZE,depth_frag:KE,distanceRGBA_vert:QE,distanceRGBA_frag:JE,equirect_vert:$E,equirect_frag:tT,linedashed_vert:eT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:aT,meshlambert_vert:sT,meshlambert_frag:rT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:fT,meshphong_frag:hT,meshphysical_vert:dT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:_T,points_frag:vT,shadow_vert:xT,shadow_frag:yT,sprite_vert:ST,sprite_frag:MT},At={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Di={basic:{uniforms:Ln([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Ln([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Ln([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Ln([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Ln([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Ln([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Ln([At.points,At.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Ln([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Ln([At.common,At.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Ln([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Ln([At.sprite,At.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Ln([At.common,At.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Ln([At.lights,At.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Di.physical={uniforms:Ln([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const vc={r:0,b:0,g:0};function ET(o,e,i,s,l,u,d){const h=new de(0);let m=u===!0?0:1,p,g,x=null,y=0,M=null;function b(S,_){let D=!1,A=_.isScene===!0?_.background:null;A&&A.isTexture&&(A=(_.backgroundBlurriness>0?i:e).get(A)),A===null?T(h,m):A&&A.isColor&&(T(A,1),D=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,d):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Oc)?(g===void 0&&(g=new bi(new Vo(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:wr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ne.getTransfer(A.colorSpace)!==Ge,(x!==A||y!==A.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,x=A,y=A.version,M=o.toneMapping),g.layers.enableAll(),S.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new bi(new Zh(2,2),new Wa({name:"BackgroundMaterial",uniforms:wr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(A.colorSpace)!==Ge,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(x!==A||y!==A.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=A,y=A.version,M=o.toneMapping),p.layers.enableAll(),S.unshift(p,p.geometry,p.material,0,0,null))}function T(S,_){S.getRGB(vc,Fv(o)),s.buffers.color.setClear(vc.r,vc.g,vc.b,_,d)}return{getClearColor:function(){return h},setClearColor:function(S,_=1){h.set(S),m=_,T(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(S){m=S,T(h,m)},render:b}}function TT(o,e,i,s){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||u!==null,h={},m=S(null);let p=m,g=!1;function x(X,$,B,j,tt){let ft=!1;if(d){const ht=T(j,B,$);p!==ht&&(p=ht,M(p.object)),ft=_(X,j,B,tt),ft&&D(X,j,B,tt)}else{const ht=$.wireframe===!0;(p.geometry!==j.id||p.program!==B.id||p.wireframe!==ht)&&(p.geometry=j.id,p.program=B.id,p.wireframe=ht,ft=!0)}tt!==null&&i.update(tt,o.ELEMENT_ARRAY_BUFFER),(ft||g)&&(g=!1,lt(X,$,B,j),tt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(tt).buffer))}function y(){return s.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(X){return s.isWebGL2?o.bindVertexArray(X):u.bindVertexArrayOES(X)}function b(X){return s.isWebGL2?o.deleteVertexArray(X):u.deleteVertexArrayOES(X)}function T(X,$,B){const j=B.wireframe===!0;let tt=h[X.id];tt===void 0&&(tt={},h[X.id]=tt);let ft=tt[$.id];ft===void 0&&(ft={},tt[$.id]=ft);let ht=ft[j];return ht===void 0&&(ht=S(y()),ft[j]=ht),ht}function S(X){const $=[],B=[],j=[];for(let tt=0;tt<l;tt++)$[tt]=0,B[tt]=0,j[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:B,attributeDivisors:j,object:X,attributes:{},index:null}}function _(X,$,B,j){const tt=p.attributes,ft=$.attributes;let ht=0;const N=B.getAttributes();for(const W in N)if(N[W].location>=0){const Q=tt[W];let gt=ft[W];if(gt===void 0&&(W==="instanceMatrix"&&X.instanceMatrix&&(gt=X.instanceMatrix),W==="instanceColor"&&X.instanceColor&&(gt=X.instanceColor)),Q===void 0||Q.attribute!==gt||gt&&Q.data!==gt.data)return!0;ht++}return p.attributesNum!==ht||p.index!==j}function D(X,$,B,j){const tt={},ft=$.attributes;let ht=0;const N=B.getAttributes();for(const W in N)if(N[W].location>=0){let Q=ft[W];Q===void 0&&(W==="instanceMatrix"&&X.instanceMatrix&&(Q=X.instanceMatrix),W==="instanceColor"&&X.instanceColor&&(Q=X.instanceColor));const gt={};gt.attribute=Q,Q&&Q.data&&(gt.data=Q.data),tt[W]=gt,ht++}p.attributes=tt,p.attributesNum=ht,p.index=j}function A(){const X=p.newAttributes;for(let $=0,B=X.length;$<B;$++)X[$]=0}function U(X){k(X,0)}function k(X,$){const B=p.newAttributes,j=p.enabledAttributes,tt=p.attributeDivisors;B[X]=1,j[X]===0&&(o.enableVertexAttribArray(X),j[X]=1),tt[X]!==$&&((s.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,$),tt[X]=$)}function I(){const X=p.newAttributes,$=p.enabledAttributes;for(let B=0,j=$.length;B<j;B++)$[B]!==X[B]&&(o.disableVertexAttribArray(B),$[B]=0)}function P(X,$,B,j,tt,ft,ht){ht===!0?o.vertexAttribIPointer(X,$,B,tt,ft):o.vertexAttribPointer(X,$,B,j,tt,ft)}function lt(X,$,B,j){if(s.isWebGL2===!1&&(X.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const tt=j.attributes,ft=B.getAttributes(),ht=$.defaultAttributeValues;for(const N in ft){const W=ft[N];if(W.location>=0){let V=tt[N];if(V===void 0&&(N==="instanceMatrix"&&X.instanceMatrix&&(V=X.instanceMatrix),N==="instanceColor"&&X.instanceColor&&(V=X.instanceColor)),V!==void 0){const Q=V.normalized,gt=V.itemSize,Mt=i.get(V);if(Mt===void 0)continue;const Et=Mt.buffer,Ft=Mt.type,Ot=Mt.bytesPerElement,jt=s.isWebGL2===!0&&(Ft===o.INT||Ft===o.UNSIGNED_INT||V.gpuType===yv);if(V.isInterleavedBufferAttribute){const fe=V.data,it=fe.stride,un=V.offset;if(fe.isInstancedInterleavedBuffer){for(let Ht=0;Ht<W.locationSize;Ht++)k(W.location+Ht,fe.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ht=0;Ht<W.locationSize;Ht++)U(W.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let Ht=0;Ht<W.locationSize;Ht++)P(W.location+Ht,gt/W.locationSize,Ft,Q,it*Ot,(un+gt/W.locationSize*Ht)*Ot,jt)}else{if(V.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)k(W.location+fe,V.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let fe=0;fe<W.locationSize;fe++)U(W.location+fe);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let fe=0;fe<W.locationSize;fe++)P(W.location+fe,gt/W.locationSize,Ft,Q,gt*Ot,gt/W.locationSize*fe*Ot,jt)}}else if(ht!==void 0){const Q=ht[N];if(Q!==void 0)switch(Q.length){case 2:o.vertexAttrib2fv(W.location,Q);break;case 3:o.vertexAttrib3fv(W.location,Q);break;case 4:o.vertexAttrib4fv(W.location,Q);break;default:o.vertexAttrib1fv(W.location,Q)}}}}I()}function R(){nt();for(const X in h){const $=h[X];for(const B in $){const j=$[B];for(const tt in j)b(j[tt].object),delete j[tt];delete $[B]}delete h[X]}}function L(X){if(h[X.id]===void 0)return;const $=h[X.id];for(const B in $){const j=$[B];for(const tt in j)b(j[tt].object),delete j[tt];delete $[B]}delete h[X.id]}function rt(X){for(const $ in h){const B=h[$];if(B[X.id]===void 0)continue;const j=B[X.id];for(const tt in j)b(j[tt].object),delete j[tt];delete B[X.id]}}function nt(){yt(),g=!0,p!==m&&(p=m,M(p.object))}function yt(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:x,reset:nt,resetDefaultState:yt,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:rt,initAttributes:A,enableAttribute:U,disableUnusedAttributes:I}}function bT(o,e,i,s){const l=s.isWebGL2;let u;function d(g){u=g}function h(g,x){o.drawArrays(u,g,x),i.update(x,u,1)}function m(g,x,y){if(y===0)return;let M,b;if(l)M=o,b="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](u,g,x,y),i.update(x,u,y)}function p(g,x,y){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<y;b++)this.render(g[b],x[b]);else{M.multiDrawArraysWEBGL(u,g,0,x,0,y);let b=0;for(let T=0;T<y;T++)b+=x[T];i.update(b,u,1)}}this.setMode=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=p}function AT(o,e,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const m=u(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=y>0,U=d||e.has("OES_texture_float"),k=A&&U,I=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:b,maxAttributes:T,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:D,vertexTextures:A,floatFragmentTextures:U,floatVertexTextures:k,maxSamples:I}}function RT(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new ds,h=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||s!==0||l;return l=y,s=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,M){const b=x.clippingPlanes,T=x.clipIntersection,S=x.clipShadows,_=o.get(x);if(!l||b===null||b.length===0||u&&!S)u?g(null):p();else{const D=u?0:s,A=D*4;let U=_.clippingState||null;m.value=U,U=g(b,y,A,M);for(let k=0;k!==A;++k)U[k]=i[k];_.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,y,M,b){const T=x!==null?x.length:0;let S=null;if(T!==0){if(S=m.value,b!==!0||S===null){const _=M+T*4,D=y.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<_)&&(S=new Float32Array(_));for(let A=0,U=M;A!==T;++A,U+=4)d.copy(x[A]).applyMatrix4(D,h),d.normal.toArray(S,U),S[U+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function wT(o){let e=new WeakMap;function i(d,h){return h===Nh?d.mapping=br:h===Oh&&(d.mapping=Ar),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Nh||h===Oh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new HS(m.height/2);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class Xv extends Hv{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Sr=4,X_=[.125,.215,.35,.446,.526,.582],gs=20,Eh=new Xv,k_=new de;let Th=null,bh=0,Ah=0;const ps=(1+Math.sqrt(5))/2,gr=1/ps,W_=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,ps,gr),new Y(0,ps,-gr),new Y(gr,0,ps),new Y(-gr,0,ps),new Y(ps,gr,0),new Y(-ps,gr,0)];class j_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Th=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,bh,Ah),e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===br||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Fo,format:Ti,colorSpace:aa,depthBuffer:!1},l=q_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CT(u)),this._blurMaterial=LT(u,e,i)}return l}_compileMaterial(e){const i=new bi(this._lodPlanes[0],e);this._renderer.compile(i,Eh)}_sceneToCubeUV(e,i,s,l){const h=new Gn(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(k_),g.toneMapping=Ga,g.autoClear=!1;const M=new qh({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),b=new bi(new Vo,M);let T=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,T=!0):(M.color.copy(k_),T=!0);for(let _=0;_<6;_++){const D=_%3;D===0?(h.up.set(0,m[_],0),h.lookAt(p[_],0,0)):D===1?(h.up.set(0,0,m[_]),h.lookAt(0,p[_],0)):(h.up.set(0,m[_],0),h.lookAt(0,0,p[_]));const A=this._cubeSize;xc(l,D*A,_>2?A:0,A,A),g.setRenderTarget(l),T&&g.render(b,h),g.render(e,h)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=y,g.autoClear=x,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===br||e.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new bi(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;xc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Eh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=W_[(l-1)%W_.length];this._blur(e,l-1,l,u,d)}i.autoClear=s}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new bi(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gs-1),T=u/b,S=isFinite(u)?1+Math.floor(g*T):gs;S>gs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gs}`);const _=[];let D=0;for(let P=0;P<gs;++P){const lt=P/T,R=Math.exp(-lt*lt/2);_.push(R),P===0?D+=R:P<S&&(D+=2*R)}for(let P=0;P<_.length;P++)_[P]=_[P]/D;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:A}=this;y.dTheta.value=b,y.mipInt.value=A-s;const U=this._sizeLods[l],k=3*U*(l>A-Sr?l-A+Sr:0),I=4*(this._cubeSize-U);xc(i,k,I,3*U,2*U),m.setRenderTarget(i),m.render(x,Eh)}}function CT(o){const e=[],i=[],s=[];let l=o;const u=o-Sr+1+X_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-Sr?m=X_[d-o+Sr-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,b=6,T=3,S=2,_=1,D=new Float32Array(T*b*M),A=new Float32Array(S*b*M),U=new Float32Array(_*b*M);for(let I=0;I<M;I++){const P=I%3*2/3-1,lt=I>2?0:-1,R=[P,lt,0,P+2/3,lt,0,P+2/3,lt+1,0,P,lt,0,P+2/3,lt+1,0,P,lt+1,0];D.set(R,T*b*I),A.set(y,S*b*I);const L=[I,I,I,I,I,I];U.set(L,_*b*I)}const k=new mi;k.setAttribute("position",new pi(D,T)),k.setAttribute("uv",new pi(A,S)),k.setAttribute("faceIndex",new pi(U,_)),e.push(k),l>Sr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function q_(o,e,i){const s=new ys(o,e,i);return s.texture.mapping=Oc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function LT(o,e,i){const s=new Float32Array(gs),l=new Y(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Y_(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Z_(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DT(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Nh||m===Oh,g=m===br||m===Ar;if(p||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let x=e.get(h);return i===null&&(i=new j_(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),e.set(h,x),x.texture}else{if(e.has(h))return e.get(h).texture;{const x=h.image;if(p&&x&&x.height>0||g&&x&&l(x)){i===null&&(i=new j_(o));const y=p?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,y),h.addEventListener("dispose",u),y.texture}else return null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function UT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function NT(o,e,i,s){const l={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);for(const b in y.morphAttributes){const T=y.morphAttributes[b];for(let S=0,_=T.length;S<_;S++)e.remove(T[S])}y.removeEventListener("dispose",d),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const b in y)e.update(y[b],o.ARRAY_BUFFER);const M=x.morphAttributes;for(const b in M){const T=M[b];for(let S=0,_=T.length;S<_;S++)e.update(T[S],o.ARRAY_BUFFER)}}function p(x){const y=[],M=x.index,b=x.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let A=0,U=D.length;A<U;A+=3){const k=D[A+0],I=D[A+1],P=D[A+2];y.push(k,I,I,P,P,k)}}else if(b!==void 0){const D=b.array;T=b.version;for(let A=0,U=D.length/3-1;A<U;A+=3){const k=A+0,I=A+1,P=A+2;y.push(k,I,I,P,P,k)}}else return;const S=new(Lv(y)?Iv:Bv)(y,1);S.version=T;const _=u.get(x);_&&e.remove(_),u.set(x,S)}function g(x){const y=u.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function OT(o,e,i,s){const l=s.isWebGL2;let u;function d(M){u=M}let h,m;function p(M){h=M.type,m=M.bytesPerElement}function g(M,b){o.drawElements(u,b,h,M*m),i.update(b,u,1)}function x(M,b,T){if(T===0)return;let S,_;if(l)S=o,_="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[_](u,b,h,M*m,T),i.update(b,u,T)}function y(M,b,T){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<T;_++)this.render(M[_]/m,b[_]);else{S.multiDrawElementsWEBGL(u,b,0,h,M,0,T);let _=0;for(let D=0;D<T;D++)_+=b[D];i.update(_,u,1)}}this.setMode=d,this.setIndex=p,this.render=g,this.renderInstances=x,this.renderMultiDraw=y}function zT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function PT(o,e){return o[0]-e[0]}function BT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function IT(o,e,i){const s={},l=new Float32Array(8),u=new WeakMap,d=new pn,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function m(p,g,x){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,T=b!==void 0?b.length:0;let S=u.get(g);if(S===void 0||S.count!==T){let $=function(){yt.dispose(),u.delete(g),g.removeEventListener("dispose",$)};var M=$;S!==void 0&&S.texture.dispose();const A=g.morphAttributes.position!==void 0,U=g.morphAttributes.normal!==void 0,k=g.morphAttributes.color!==void 0,I=g.morphAttributes.position||[],P=g.morphAttributes.normal||[],lt=g.morphAttributes.color||[];let R=0;A===!0&&(R=1),U===!0&&(R=2),k===!0&&(R=3);let L=g.attributes.position.count*R,rt=1;L>e.maxTextureSize&&(rt=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const nt=new Float32Array(L*rt*4*T),yt=new Nv(nt,L,rt,T);yt.type=Fa,yt.needsUpdate=!0;const X=R*4;for(let B=0;B<T;B++){const j=I[B],tt=P[B],ft=lt[B],ht=L*rt*4*B;for(let N=0;N<j.count;N++){const W=N*X;A===!0&&(d.fromBufferAttribute(j,N),nt[ht+W+0]=d.x,nt[ht+W+1]=d.y,nt[ht+W+2]=d.z,nt[ht+W+3]=0),U===!0&&(d.fromBufferAttribute(tt,N),nt[ht+W+4]=d.x,nt[ht+W+5]=d.y,nt[ht+W+6]=d.z,nt[ht+W+7]=0),k===!0&&(d.fromBufferAttribute(ft,N),nt[ht+W+8]=d.x,nt[ht+W+9]=d.y,nt[ht+W+10]=d.z,nt[ht+W+11]=ft.itemSize===4?d.w:1)}}S={count:T,texture:yt,size:new ae(L,rt)},u.set(g,S),g.addEventListener("dispose",$)}let _=0;for(let A=0;A<y.length;A++)_+=y[A];const D=g.morphTargetsRelative?1:1-_;x.getUniforms().setValue(o,"morphTargetBaseInfluence",D),x.getUniforms().setValue(o,"morphTargetInfluences",y),x.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}else{const b=y===void 0?0:y.length;let T=s[g.id];if(T===void 0||T.length!==b){T=[];for(let U=0;U<b;U++)T[U]=[U,0];s[g.id]=T}for(let U=0;U<b;U++){const k=T[U];k[0]=U,k[1]=y[U]}T.sort(BT);for(let U=0;U<8;U++)U<b&&T[U][1]?(h[U][0]=T[U][0],h[U][1]=T[U][1]):(h[U][0]=Number.MAX_SAFE_INTEGER,h[U][1]=0);h.sort(PT);const S=g.morphAttributes.position,_=g.morphAttributes.normal;let D=0;for(let U=0;U<8;U++){const k=h[U],I=k[0],P=k[1];I!==Number.MAX_SAFE_INTEGER&&P?(S&&g.getAttribute("morphTarget"+U)!==S[I]&&g.setAttribute("morphTarget"+U,S[I]),_&&g.getAttribute("morphNormal"+U)!==_[I]&&g.setAttribute("morphNormal"+U,_[I]),l[U]=P,D+=P):(S&&g.hasAttribute("morphTarget"+U)===!0&&g.deleteAttribute("morphTarget"+U),_&&g.hasAttribute("morphNormal"+U)===!0&&g.deleteAttribute("morphNormal"+U),l[U]=0)}const A=g.morphTargetsRelative?1:1-D;x.getUniforms().setValue(o,"morphTargetBaseInfluence",A),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function FT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}class kv extends Xn{constructor(e,i,s,l,u,d,h,m,p,g){if(g=g!==void 0?g:vs,g!==vs&&g!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===vs&&(s=Ia),s===void 0&&g===Rr&&(s=_s),super(null,l,u,d,h,m,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Dn,this.minFilter=m!==void 0?m:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Wv=new Xn,jv=new kv(1,1);jv.compareFunction=Cv;const qv=new Nv,Yv=new ES,Zv=new Gv,K_=[],Q_=[],J_=new Float32Array(16),$_=new Float32Array(9),tv=new Float32Array(4);function Lr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=K_[l];if(u===void 0&&(u=new Float32Array(l),K_[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Ic(o,e){let i=Q_[e];i===void 0&&(i=new Int32Array(e),Q_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function HT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function kT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;tv.set(s),o.uniformMatrix2fv(this.addr,!1,tv),cn(i,s)}}function WT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;$_.set(s),o.uniformMatrix3fv(this.addr,!1,$_),cn(i,s)}}function jT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;J_.set(s),o.uniformMatrix4fv(this.addr,!1,J_),cn(i,s)}}function qT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function QT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function eb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?jv:Wv;i.setTexture2D(e||u,l)}function nb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Yv,l)}function ib(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Zv,l)}function ab(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||qv,l)}function sb(o){switch(o){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return XT;case 35674:return kT;case 35675:return WT;case 35676:return jT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return ab}}function rb(o,e){o.uniform1fv(this.addr,e)}function ob(o,e){const i=Lr(e,this.size,2);o.uniform2fv(this.addr,i)}function lb(o,e){const i=Lr(e,this.size,3);o.uniform3fv(this.addr,i)}function cb(o,e){const i=Lr(e,this.size,4);o.uniform4fv(this.addr,i)}function ub(o,e){const i=Lr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function fb(o,e){const i=Lr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function hb(o,e){const i=Lr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function db(o,e){o.uniform1iv(this.addr,e)}function pb(o,e){o.uniform2iv(this.addr,e)}function mb(o,e){o.uniform3iv(this.addr,e)}function gb(o,e){o.uniform4iv(this.addr,e)}function _b(o,e){o.uniform1uiv(this.addr,e)}function vb(o,e){o.uniform2uiv(this.addr,e)}function xb(o,e){o.uniform3uiv(this.addr,e)}function yb(o,e){o.uniform4uiv(this.addr,e)}function Sb(o,e,i){const s=this.cache,l=e.length,u=Ic(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Wv,u[d])}function Mb(o,e,i){const s=this.cache,l=e.length,u=Ic(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Yv,u[d])}function Eb(o,e,i){const s=this.cache,l=e.length,u=Ic(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Zv,u[d])}function Tb(o,e,i){const s=this.cache,l=e.length,u=Ic(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||qv,u[d])}function bb(o){switch(o){case 5126:return rb;case 35664:return ob;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return fb;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return _b;case 36294:return vb;case 36295:return xb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}class Ab{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=sb(i.type)}}class Rb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=bb(i.type)}}class wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const Rh=/(\w+)(\])?(\[|\.)?/g;function ev(o,e){o.seq.push(e),o.map[e.id]=e}function Cb(o,e,i){const s=o.name,l=s.length;for(Rh.lastIndex=0;;){const u=Rh.exec(s),d=Rh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){ev(i,p===void 0?new Ab(h,o,e):new Rb(h,o,e));break}else{let x=i.map[h];x===void 0&&(x=new wb(h),ev(i,x)),i=x}}}class bc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);Cb(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function nv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Lb=37297;let Db=0;function Ub(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function Nb(o){const e=Ne.getPrimaries(Ne.workingColorSpace),i=Ne.getPrimaries(o);let s;switch(e===i?s="":e===Cc&&i===wc?s="LinearDisplayP3ToLinearSRGB":e===wc&&i===Cc&&(s="LinearSRGBToLinearDisplayP3"),o){case aa:case zc:return[s,"LinearTransferOETF"];case Sn:case jh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function iv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Ub(o.getShaderSource(e),d)}else return l}function Ob(o,e){const i=Nb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function zb(o,e){let i;switch(e){case jy:i="Linear";break;case qy:i="Reinhard";break;case Yy:i="OptimizedCineon";break;case Zy:i="ACESFilmic";break;case Qy:i="AgX";break;case Ky:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Pb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function Bb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Mr).join(`
`)}function Ib(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Fb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Mr(o){return o!==""}function av(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(o){return o.replace(Hb,Vb)}const Gb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vb(o,e){let i=ce[e];if(i===void 0){const s=Gb.get(e);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Gh(i)}const Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(o){return o.replace(Xb,kb)}function kb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ov(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===_v?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===yy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case br:case Ar:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Yb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case vv:e="ENVMAP_BLENDING_MULTIPLY";break;case ky:e="ENVMAP_BLENDING_MIX";break;case Wy:e="ENVMAP_BLENDING_ADD";break}return e}function Zb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Kb(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Wb(i),p=jb(i),g=qb(i),x=Yb(i),y=Zb(i),M=i.isWebGL2?"":Pb(i),b=Bb(i),T=Ib(u),S=l.createProgram();let _,D,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Mr).join(`
`),_.length>0&&(_+=`
`),D=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Mr).join(`
`),D.length>0&&(D+=`
`)):(_=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),D=[M,ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ga?zb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Ob("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Mr).join(`
`)),d=Gh(d),d=av(d,i),d=sv(d,i),h=Gh(h),h=av(h,i),h=sv(h,i),d=rv(d),h=rv(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,D=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const U=A+_+d,k=A+D+h,I=nv(l,l.VERTEX_SHADER,U),P=nv(l,l.FRAGMENT_SHADER,k);l.attachShader(S,I),l.attachShader(S,P),i.index0AttributeName!==void 0?l.bindAttribLocation(S,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(S,0,"position"),l.linkProgram(S);function lt(nt){if(o.debug.checkShaderErrors){const yt=l.getProgramInfoLog(S).trim(),X=l.getShaderInfoLog(I).trim(),$=l.getShaderInfoLog(P).trim();let B=!0,j=!0;if(l.getProgramParameter(S,l.LINK_STATUS)===!1)if(B=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,S,I,P);else{const tt=iv(l,I,"vertex"),ft=iv(l,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(S,l.VALIDATE_STATUS)+`

Program Info Log: `+yt+`
`+tt+`
`+ft)}else yt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",yt):(X===""||$==="")&&(j=!1);j&&(nt.diagnostics={runnable:B,programLog:yt,vertexShader:{log:X,prefix:_},fragmentShader:{log:$,prefix:D}})}l.deleteShader(I),l.deleteShader(P),R=new bc(l,S),L=Fb(l,S)}let R;this.getUniforms=function(){return R===void 0&&lt(this),R};let L;this.getAttributes=function(){return L===void 0&&lt(this),L};let rt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return rt===!1&&(rt=l.getProgramParameter(S,Lb)),rt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Db++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=P,this}let Qb=0;class Jb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new $b(e),i.set(e,s)),s}}class $b{constructor(e){this.id=Qb++,this.code=e,this.usedTimes=0}}function tA(o,e,i,s,l,u,d){const h=new zv,m=new Jb,p=[],g=l.isWebGL2,x=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return R===0?"uv":`uv${R}`}function S(R,L,rt,nt,yt){const X=nt.fog,$=yt.geometry,B=R.isMeshStandardMaterial?nt.environment:null,j=(R.isMeshStandardMaterial?i:e).get(R.envMap||B),tt=j&&j.mapping===Oc?j.image.height:null,ft=b[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,N=ht!==void 0?ht.length:0;let W=0;$.morphAttributes.position!==void 0&&(W=1),$.morphAttributes.normal!==void 0&&(W=2),$.morphAttributes.color!==void 0&&(W=3);let V,Q,gt,Mt;if(ft){const qe=Di[ft];V=qe.vertexShader,Q=qe.fragmentShader}else V=R.vertexShader,Q=R.fragmentShader,m.update(R),gt=m.getVertexShaderID(R),Mt=m.getFragmentShaderID(R);const Et=o.getRenderTarget(),Ft=yt.isInstancedMesh===!0,Ot=yt.isBatchedMesh===!0,jt=!!R.map,fe=!!R.matcap,it=!!j,un=!!R.aoMap,Ht=!!R.lightMap,Jt=!!R.bumpMap,Bt=!!R.normalMap,Ie=!!R.displacementMap,ne=!!R.emissiveMap,O=!!R.metalnessMap,w=!!R.roughnessMap,st=R.anisotropy>0,St=R.clearcoat>0,xt=R.iridescence>0,_t=R.sheen>0,Gt=R.transmission>0,wt=st&&!!R.anisotropyMap,Nt=St&&!!R.clearcoatMap,qt=St&&!!R.clearcoatNormalMap,se=St&&!!R.clearcoatRoughnessMap,vt=xt&&!!R.iridescenceMap,Ee=xt&&!!R.iridescenceThicknessMap,ue=_t&&!!R.sheenColorMap,Qt=_t&&!!R.sheenRoughnessMap,Dt=!!R.specularMap,Lt=!!R.specularColorMap,kt=!!R.specularIntensityMap,Se=Gt&&!!R.transmissionMap,Ve=Gt&&!!R.thicknessMap,oe=!!R.gradientMap,Tt=!!R.alphaMap,H=R.alphaTest>0,Rt=!!R.alphaHash,bt=!!R.extensions,Zt=!!$.attributes.uv1,Vt=!!$.attributes.uv2,we=!!$.attributes.uv3;let Te=Ga;return R.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Te=o.toneMapping),{isWebGL2:g,shaderID:ft,shaderType:R.type,shaderName:R.name,vertexShader:V,fragmentShader:Q,defines:R.defines,customVertexShaderID:gt,customFragmentShaderID:Mt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Ot,instancing:Ft,instancingColor:Ft&&yt.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:aa,map:jt,matcap:fe,envMap:it,envMapMode:it&&j.mapping,envMapCubeUVHeight:tt,aoMap:un,lightMap:Ht,bumpMap:Jt,normalMap:Bt,displacementMap:y&&Ie,emissiveMap:ne,normalMapObjectSpace:Bt&&R.normalMapType===cS,normalMapTangentSpace:Bt&&R.normalMapType===wv,metalnessMap:O,roughnessMap:w,anisotropy:st,anisotropyMap:wt,clearcoat:St,clearcoatMap:Nt,clearcoatNormalMap:qt,clearcoatRoughnessMap:se,iridescence:xt,iridescenceMap:vt,iridescenceThicknessMap:Ee,sheen:_t,sheenColorMap:ue,sheenRoughnessMap:Qt,specularMap:Dt,specularColorMap:Lt,specularIntensityMap:kt,transmission:Gt,transmissionMap:Se,thicknessMap:Ve,gradientMap:oe,opaque:R.transparent===!1&&R.blending===Er,alphaMap:Tt,alphaTest:H,alphaHash:Rt,combine:R.combine,mapUv:jt&&T(R.map.channel),aoMapUv:un&&T(R.aoMap.channel),lightMapUv:Ht&&T(R.lightMap.channel),bumpMapUv:Jt&&T(R.bumpMap.channel),normalMapUv:Bt&&T(R.normalMap.channel),displacementMapUv:Ie&&T(R.displacementMap.channel),emissiveMapUv:ne&&T(R.emissiveMap.channel),metalnessMapUv:O&&T(R.metalnessMap.channel),roughnessMapUv:w&&T(R.roughnessMap.channel),anisotropyMapUv:wt&&T(R.anisotropyMap.channel),clearcoatMapUv:Nt&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:qt&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&T(R.sheenRoughnessMap.channel),specularMapUv:Dt&&T(R.specularMap.channel),specularColorMapUv:Lt&&T(R.specularColorMap.channel),specularIntensityMapUv:kt&&T(R.specularIntensityMap.channel),transmissionMapUv:Se&&T(R.transmissionMap.channel),thicknessMapUv:Ve&&T(R.thicknessMap.channel),alphaMapUv:Tt&&T(R.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Bt||st),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:Zt,vertexUv2s:Vt,vertexUv3s:we,pointsUvs:yt.isPoints===!0&&!!$.attributes.uv&&(jt||Tt),fog:!!X,useFog:R.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:yt.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&rt.length>0,shadowMapType:o.shadowMap.type,toneMapping:Te,useLegacyLights:o._useLegacyLights,decodeVideoTexture:jt&&R.map.isVideoTexture===!0&&Ne.getTransfer(R.map.colorSpace)===Ge,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ea,flipSided:R.side===Vn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:bt&&R.extensions.derivatives===!0,extensionFragDepth:bt&&R.extensions.fragDepth===!0,extensionDrawBuffers:bt&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&R.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function _(R){const L=[];if(R.shaderID?L.push(R.shaderID):(L.push(R.customVertexShaderID),L.push(R.customFragmentShaderID)),R.defines!==void 0)for(const rt in R.defines)L.push(rt),L.push(R.defines[rt]);return R.isRawShaderMaterial===!1&&(D(L,R),A(L,R),L.push(o.outputColorSpace)),L.push(R.customProgramCacheKey),L.join()}function D(R,L){R.push(L.precision),R.push(L.outputColorSpace),R.push(L.envMapMode),R.push(L.envMapCubeUVHeight),R.push(L.mapUv),R.push(L.alphaMapUv),R.push(L.lightMapUv),R.push(L.aoMapUv),R.push(L.bumpMapUv),R.push(L.normalMapUv),R.push(L.displacementMapUv),R.push(L.emissiveMapUv),R.push(L.metalnessMapUv),R.push(L.roughnessMapUv),R.push(L.anisotropyMapUv),R.push(L.clearcoatMapUv),R.push(L.clearcoatNormalMapUv),R.push(L.clearcoatRoughnessMapUv),R.push(L.iridescenceMapUv),R.push(L.iridescenceThicknessMapUv),R.push(L.sheenColorMapUv),R.push(L.sheenRoughnessMapUv),R.push(L.specularMapUv),R.push(L.specularColorMapUv),R.push(L.specularIntensityMapUv),R.push(L.transmissionMapUv),R.push(L.thicknessMapUv),R.push(L.combine),R.push(L.fogExp2),R.push(L.sizeAttenuation),R.push(L.morphTargetsCount),R.push(L.morphAttributeCount),R.push(L.numDirLights),R.push(L.numPointLights),R.push(L.numSpotLights),R.push(L.numSpotLightMaps),R.push(L.numHemiLights),R.push(L.numRectAreaLights),R.push(L.numDirLightShadows),R.push(L.numPointLightShadows),R.push(L.numSpotLightShadows),R.push(L.numSpotLightShadowsWithMaps),R.push(L.numLightProbes),R.push(L.shadowMapType),R.push(L.toneMapping),R.push(L.numClippingPlanes),R.push(L.numClipIntersection),R.push(L.depthPacking)}function A(R,L){h.disableAll(),L.isWebGL2&&h.enable(0),L.supportsVertexTextures&&h.enable(1),L.instancing&&h.enable(2),L.instancingColor&&h.enable(3),L.matcap&&h.enable(4),L.envMap&&h.enable(5),L.normalMapObjectSpace&&h.enable(6),L.normalMapTangentSpace&&h.enable(7),L.clearcoat&&h.enable(8),L.iridescence&&h.enable(9),L.alphaTest&&h.enable(10),L.vertexColors&&h.enable(11),L.vertexAlphas&&h.enable(12),L.vertexUv1s&&h.enable(13),L.vertexUv2s&&h.enable(14),L.vertexUv3s&&h.enable(15),L.vertexTangents&&h.enable(16),L.anisotropy&&h.enable(17),L.alphaHash&&h.enable(18),L.batching&&h.enable(19),R.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.skinning&&h.enable(4),L.morphTargets&&h.enable(5),L.morphNormals&&h.enable(6),L.morphColors&&h.enable(7),L.premultipliedAlpha&&h.enable(8),L.shadowMapEnabled&&h.enable(9),L.useLegacyLights&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),R.push(h.mask)}function U(R){const L=b[R.type];let rt;if(L){const nt=Di[L];rt=PS.clone(nt.uniforms)}else rt=R.uniforms;return rt}function k(R,L){let rt;for(let nt=0,yt=p.length;nt<yt;nt++){const X=p[nt];if(X.cacheKey===L){rt=X,++rt.usedTimes;break}}return rt===void 0&&(rt=new Kb(o,L,R,u),p.push(rt)),rt}function I(R){if(--R.usedTimes===0){const L=p.indexOf(R);p[L]=p[p.length-1],p.pop(),R.destroy()}}function P(R){m.remove(R)}function lt(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:U,acquireProgram:k,releaseProgram:I,releaseShaderCache:P,programs:p,dispose:lt}}function eA(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function s(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:s,dispose:l}}function nA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function lv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function cv(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(x,y,M,b,T,S){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:y,material:M,groupOrder:b,renderOrder:x.renderOrder,z:T,group:S},o[e]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=M,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=T,_.group=S),e++,_}function h(x,y,M,b,T,S){const _=d(x,y,M,b,T,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,y,M,b,T,S){const _=d(x,y,M,b,T,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,y){i.length>1&&i.sort(x||nA),s.length>1&&s.sort(y||lv),l.length>1&&l.sort(y||lv)}function g(){for(let x=e,y=o.length;x<y;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function iA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new cv,o.set(s,[d])):l>=u.length?(d=new cv,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function aA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Y,color:new de};break;case"SpotLight":i={position:new Y,direction:new Y,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=i,i}}}function sA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let rA=0;function oA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function lA(o,e){const i=new aA,s=sA(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new Y);const u=new Y,d=new Ke,h=new Ke;function m(g,x){let y=0,M=0,b=0;for(let nt=0;nt<9;nt++)l.probe[nt].set(0,0,0);let T=0,S=0,_=0,D=0,A=0,U=0,k=0,I=0,P=0,lt=0,R=0;g.sort(oA);const L=x===!0?Math.PI:1;for(let nt=0,yt=g.length;nt<yt;nt++){const X=g[nt],$=X.color,B=X.intensity,j=X.distance,tt=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)y+=$.r*B*L,M+=$.g*B*L,b+=$.b*B*L;else if(X.isLightProbe){for(let ft=0;ft<9;ft++)l.probe[ft].addScaledVector(X.sh.coefficients[ft],B);R++}else if(X.isDirectionalLight){const ft=i.get(X);if(ft.color.copy(X.color).multiplyScalar(X.intensity*L),X.castShadow){const ht=X.shadow,N=s.get(X);N.shadowBias=ht.bias,N.shadowNormalBias=ht.normalBias,N.shadowRadius=ht.radius,N.shadowMapSize=ht.mapSize,l.directionalShadow[T]=N,l.directionalShadowMap[T]=tt,l.directionalShadowMatrix[T]=X.shadow.matrix,U++}l.directional[T]=ft,T++}else if(X.isSpotLight){const ft=i.get(X);ft.position.setFromMatrixPosition(X.matrixWorld),ft.color.copy($).multiplyScalar(B*L),ft.distance=j,ft.coneCos=Math.cos(X.angle),ft.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ft.decay=X.decay,l.spot[_]=ft;const ht=X.shadow;if(X.map&&(l.spotLightMap[P]=X.map,P++,ht.updateMatrices(X),X.castShadow&&lt++),l.spotLightMatrix[_]=ht.matrix,X.castShadow){const N=s.get(X);N.shadowBias=ht.bias,N.shadowNormalBias=ht.normalBias,N.shadowRadius=ht.radius,N.shadowMapSize=ht.mapSize,l.spotShadow[_]=N,l.spotShadowMap[_]=tt,I++}_++}else if(X.isRectAreaLight){const ft=i.get(X);ft.color.copy($).multiplyScalar(B),ft.halfWidth.set(X.width*.5,0,0),ft.halfHeight.set(0,X.height*.5,0),l.rectArea[D]=ft,D++}else if(X.isPointLight){const ft=i.get(X);if(ft.color.copy(X.color).multiplyScalar(X.intensity*L),ft.distance=X.distance,ft.decay=X.decay,X.castShadow){const ht=X.shadow,N=s.get(X);N.shadowBias=ht.bias,N.shadowNormalBias=ht.normalBias,N.shadowRadius=ht.radius,N.shadowMapSize=ht.mapSize,N.shadowCameraNear=ht.camera.near,N.shadowCameraFar=ht.camera.far,l.pointShadow[S]=N,l.pointShadowMap[S]=tt,l.pointShadowMatrix[S]=X.shadow.matrix,k++}l.point[S]=ft,S++}else if(X.isHemisphereLight){const ft=i.get(X);ft.skyColor.copy(X.color).multiplyScalar(B*L),ft.groundColor.copy(X.groundColor).multiplyScalar(B*L),l.hemi[A]=ft,A++}}D>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=At.LTC_FLOAT_1,l.rectAreaLTC2=At.LTC_FLOAT_2):(l.rectAreaLTC1=At.LTC_HALF_1,l.rectAreaLTC2=At.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=At.LTC_FLOAT_1,l.rectAreaLTC2=At.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=At.LTC_HALF_1,l.rectAreaLTC2=At.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=b;const rt=l.hash;(rt.directionalLength!==T||rt.pointLength!==S||rt.spotLength!==_||rt.rectAreaLength!==D||rt.hemiLength!==A||rt.numDirectionalShadows!==U||rt.numPointShadows!==k||rt.numSpotShadows!==I||rt.numSpotMaps!==P||rt.numLightProbes!==R)&&(l.directional.length=T,l.spot.length=_,l.rectArea.length=D,l.point.length=S,l.hemi.length=A,l.directionalShadow.length=U,l.directionalShadowMap.length=U,l.pointShadow.length=k,l.pointShadowMap.length=k,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=U,l.pointShadowMatrix.length=k,l.spotLightMatrix.length=I+P-lt,l.spotLightMap.length=P,l.numSpotLightShadowsWithMaps=lt,l.numLightProbes=R,rt.directionalLength=T,rt.pointLength=S,rt.spotLength=_,rt.rectAreaLength=D,rt.hemiLength=A,rt.numDirectionalShadows=U,rt.numPointShadows=k,rt.numSpotShadows=I,rt.numSpotMaps=P,rt.numLightProbes=R,l.version=rA++)}function p(g,x){let y=0,M=0,b=0,T=0,S=0;const _=x.matrixWorldInverse;for(let D=0,A=g.length;D<A;D++){const U=g[D];if(U.isDirectionalLight){const k=l.directional[y];k.direction.setFromMatrixPosition(U.matrixWorld),u.setFromMatrixPosition(U.target.matrixWorld),k.direction.sub(u),k.direction.transformDirection(_),y++}else if(U.isSpotLight){const k=l.spot[b];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(_),k.direction.setFromMatrixPosition(U.matrixWorld),u.setFromMatrixPosition(U.target.matrixWorld),k.direction.sub(u),k.direction.transformDirection(_),b++}else if(U.isRectAreaLight){const k=l.rectArea[T];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(_),h.identity(),d.copy(U.matrixWorld),d.premultiply(_),h.extractRotation(d),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),k.halfWidth.applyMatrix4(h),k.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const k=l.point[M];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(_),M++}else if(U.isHemisphereLight){const k=l.hemi[S];k.direction.setFromMatrixPosition(U.matrixWorld),k.direction.transformDirection(_),S++}}}return{setup:m,setupView:p,state:l}}function uv(o,e){const i=new lA(o,e),s=[],l=[];function u(){s.length=0,l.length=0}function d(x){s.push(x)}function h(x){l.push(x)}function m(x){i.setup(s,x)}function p(x){i.setupView(s,x)}return{init:u,state:{lightsArray:s,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:h}}function cA(o,e){let i=new WeakMap;function s(u,d=0){const h=i.get(u);let m;return h===void 0?(m=new uv(o,e),i.set(u,[m])):d>=h.length?(m=new uv(o,e),h.push(m)):m=h[d],m}function l(){i=new WeakMap}return{get:s,dispose:l}}class uA extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fA extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pA(o,e,i){let s=new Yh;const l=new ae,u=new ae,d=new pn,h=new uA({depthPacking:lS}),m=new fA,p={},g=i.maxTextureSize,x={[ka]:Vn,[Vn]:ka,[ea]:ea},y=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:hA,fragmentShader:dA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new mi;b.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new bi(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_v;let _=this.type;this.render=function(I,P,lt){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const R=o.getRenderTarget(),L=o.getActiveCubeFace(),rt=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(Ha),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const yt=_!==ta&&this.type===ta,X=_===ta&&this.type!==ta;for(let $=0,B=I.length;$<B;$++){const j=I[$],tt=j.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;l.copy(tt.mapSize);const ft=tt.getFrameExtents();if(l.multiply(ft),u.copy(tt.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ft.x),l.x=u.x*ft.x,tt.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ft.y),l.y=u.y*ft.y,tt.mapSize.y=u.y)),tt.map===null||yt===!0||X===!0){const N=this.type!==ta?{minFilter:Dn,magFilter:Dn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new ys(l.x,l.y,N),tt.map.texture.name=j.name+".shadowMap",tt.camera.updateProjectionMatrix()}o.setRenderTarget(tt.map),o.clear();const ht=tt.getViewportCount();for(let N=0;N<ht;N++){const W=tt.getViewport(N);d.set(u.x*W.x,u.y*W.y,u.x*W.z,u.y*W.w),nt.viewport(d),tt.updateMatrices(j,N),s=tt.getFrustum(),U(P,lt,tt.camera,j,this.type)}tt.isPointLightShadow!==!0&&this.type===ta&&D(tt,lt),tt.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(R,L,rt)};function D(I,P){const lt=e.update(T);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ys(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(P,null,lt,y,T,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(P,null,lt,M,T,null)}function A(I,P,lt,R){let L=null;const rt=lt.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(rt!==void 0)L=rt;else if(L=lt.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const nt=L.uuid,yt=P.uuid;let X=p[nt];X===void 0&&(X={},p[nt]=X);let $=X[yt];$===void 0&&($=L.clone(),X[yt]=$,P.addEventListener("dispose",k)),L=$}if(L.visible=P.visible,L.wireframe=P.wireframe,R===ta?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:x[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,lt.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const nt=o.properties.get(L);nt.light=lt}return L}function U(I,P,lt,R,L){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&L===ta)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,I.matrixWorld);const yt=e.update(I),X=I.material;if(Array.isArray(X)){const $=yt.groups;for(let B=0,j=$.length;B<j;B++){const tt=$[B],ft=X[tt.materialIndex];if(ft&&ft.visible){const ht=A(I,ft,R,L);I.onBeforeShadow(o,I,P,lt,yt,ht,tt),o.renderBufferDirect(lt,null,yt,ht,I,tt),I.onAfterShadow(o,I,P,lt,yt,ht,tt)}}}else if(X.visible){const $=A(I,X,R,L);I.onBeforeShadow(o,I,P,lt,yt,$,null),o.renderBufferDirect(lt,null,yt,$,I,null),I.onAfterShadow(o,I,P,lt,yt,$,null)}}const nt=I.children;for(let yt=0,X=nt.length;yt<X;yt++)U(nt[yt],P,lt,R,L)}function k(I){I.target.removeEventListener("dispose",k);for(const lt in p){const R=p[lt],L=I.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function mA(o,e,i){const s=i.isWebGL2;function l(){let H=!1;const Rt=new pn;let bt=null;const Zt=new pn(0,0,0,0);return{setMask:function(Vt){bt!==Vt&&!H&&(o.colorMask(Vt,Vt,Vt,Vt),bt=Vt)},setLocked:function(Vt){H=Vt},setClear:function(Vt,we,Te,ke,qe){qe===!0&&(Vt*=ke,we*=ke,Te*=ke),Rt.set(Vt,we,Te,ke),Zt.equals(Rt)===!1&&(o.clearColor(Vt,we,Te,ke),Zt.copy(Rt))},reset:function(){H=!1,bt=null,Zt.set(-1,0,0,0)}}}function u(){let H=!1,Rt=null,bt=null,Zt=null;return{setTest:function(Vt){Vt?Ot(o.DEPTH_TEST):jt(o.DEPTH_TEST)},setMask:function(Vt){Rt!==Vt&&!H&&(o.depthMask(Vt),Rt=Vt)},setFunc:function(Vt){if(bt!==Vt){switch(Vt){case By:o.depthFunc(o.NEVER);break;case Iy:o.depthFunc(o.ALWAYS);break;case Fy:o.depthFunc(o.LESS);break;case Ac:o.depthFunc(o.LEQUAL);break;case Hy:o.depthFunc(o.EQUAL);break;case Gy:o.depthFunc(o.GEQUAL);break;case Vy:o.depthFunc(o.GREATER);break;case Xy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}bt=Vt}},setLocked:function(Vt){H=Vt},setClear:function(Vt){Zt!==Vt&&(o.clearDepth(Vt),Zt=Vt)},reset:function(){H=!1,Rt=null,bt=null,Zt=null}}}function d(){let H=!1,Rt=null,bt=null,Zt=null,Vt=null,we=null,Te=null,ke=null,qe=null;return{setTest:function(Ce){H||(Ce?Ot(o.STENCIL_TEST):jt(o.STENCIL_TEST))},setMask:function(Ce){Rt!==Ce&&!H&&(o.stencilMask(Ce),Rt=Ce)},setFunc:function(Ce,fn,kn){(bt!==Ce||Zt!==fn||Vt!==kn)&&(o.stencilFunc(Ce,fn,kn),bt=Ce,Zt=fn,Vt=kn)},setOp:function(Ce,fn,kn){(we!==Ce||Te!==fn||ke!==kn)&&(o.stencilOp(Ce,fn,kn),we=Ce,Te=fn,ke=kn)},setLocked:function(Ce){H=Ce},setClear:function(Ce){qe!==Ce&&(o.clearStencil(Ce),qe=Ce)},reset:function(){H=!1,Rt=null,bt=null,Zt=null,Vt=null,we=null,Te=null,ke=null,qe=null}}}const h=new l,m=new u,p=new d,g=new WeakMap,x=new WeakMap;let y={},M={},b=new WeakMap,T=[],S=null,_=!1,D=null,A=null,U=null,k=null,I=null,P=null,lt=null,R=new de(0,0,0),L=0,rt=!1,nt=null,yt=null,X=null,$=null,B=null;const j=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,ft=0;const ht=o.getParameter(o.VERSION);ht.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(ht)[1]),tt=ft>=1):ht.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),tt=ft>=2);let N=null,W={};const V=o.getParameter(o.SCISSOR_BOX),Q=o.getParameter(o.VIEWPORT),gt=new pn().fromArray(V),Mt=new pn().fromArray(Q);function Et(H,Rt,bt,Zt){const Vt=new Uint8Array(4),we=o.createTexture();o.bindTexture(H,we),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Te=0;Te<bt;Te++)s&&(H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY)?o.texImage3D(Rt,0,o.RGBA,1,1,Zt,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(Rt+Te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return we}const Ft={};Ft[o.TEXTURE_2D]=Et(o.TEXTURE_2D,o.TEXTURE_2D,1),Ft[o.TEXTURE_CUBE_MAP]=Et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Ft[o.TEXTURE_2D_ARRAY]=Et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ft[o.TEXTURE_3D]=Et(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),m.setClear(1),p.setClear(0),Ot(o.DEPTH_TEST),m.setFunc(Ac),ne(!1),O(jg),Ot(o.CULL_FACE),Bt(Ha);function Ot(H){y[H]!==!0&&(o.enable(H),y[H]=!0)}function jt(H){y[H]!==!1&&(o.disable(H),y[H]=!1)}function fe(H,Rt){return M[H]!==Rt?(o.bindFramebuffer(H,Rt),M[H]=Rt,s&&(H===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Rt),H===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Rt)),!0):!1}function it(H,Rt){let bt=T,Zt=!1;if(H)if(bt=b.get(Rt),bt===void 0&&(bt=[],b.set(Rt,bt)),H.isWebGLMultipleRenderTargets){const Vt=H.texture;if(bt.length!==Vt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let we=0,Te=Vt.length;we<Te;we++)bt[we]=o.COLOR_ATTACHMENT0+we;bt.length=Vt.length,Zt=!0}}else bt[0]!==o.COLOR_ATTACHMENT0&&(bt[0]=o.COLOR_ATTACHMENT0,Zt=!0);else bt[0]!==o.BACK&&(bt[0]=o.BACK,Zt=!0);Zt&&(i.isWebGL2?o.drawBuffers(bt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function un(H){return S!==H?(o.useProgram(H),S=H,!0):!1}const Ht={[ms]:o.FUNC_ADD,[My]:o.FUNC_SUBTRACT,[Ey]:o.FUNC_REVERSE_SUBTRACT};if(s)Ht[Kg]=o.MIN,Ht[Qg]=o.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(Ht[Kg]=H.MIN_EXT,Ht[Qg]=H.MAX_EXT)}const Jt={[Ty]:o.ZERO,[by]:o.ONE,[Ay]:o.SRC_COLOR,[Dh]:o.SRC_ALPHA,[Uy]:o.SRC_ALPHA_SATURATE,[Ly]:o.DST_COLOR,[wy]:o.DST_ALPHA,[Ry]:o.ONE_MINUS_SRC_COLOR,[Uh]:o.ONE_MINUS_SRC_ALPHA,[Dy]:o.ONE_MINUS_DST_COLOR,[Cy]:o.ONE_MINUS_DST_ALPHA,[Ny]:o.CONSTANT_COLOR,[Oy]:o.ONE_MINUS_CONSTANT_COLOR,[zy]:o.CONSTANT_ALPHA,[Py]:o.ONE_MINUS_CONSTANT_ALPHA};function Bt(H,Rt,bt,Zt,Vt,we,Te,ke,qe,Ce){if(H===Ha){_===!0&&(jt(o.BLEND),_=!1);return}if(_===!1&&(Ot(o.BLEND),_=!0),H!==Sy){if(H!==D||Ce!==rt){if((A!==ms||I!==ms)&&(o.blendEquation(o.FUNC_ADD),A=ms,I=ms),Ce)switch(H){case Er:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFunc(o.ONE,o.ONE);break;case Yg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Er:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Yg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}U=null,k=null,P=null,lt=null,R.set(0,0,0),L=0,D=H,rt=Ce}return}Vt=Vt||Rt,we=we||bt,Te=Te||Zt,(Rt!==A||Vt!==I)&&(o.blendEquationSeparate(Ht[Rt],Ht[Vt]),A=Rt,I=Vt),(bt!==U||Zt!==k||we!==P||Te!==lt)&&(o.blendFuncSeparate(Jt[bt],Jt[Zt],Jt[we],Jt[Te]),U=bt,k=Zt,P=we,lt=Te),(ke.equals(R)===!1||qe!==L)&&(o.blendColor(ke.r,ke.g,ke.b,qe),R.copy(ke),L=qe),D=H,rt=!1}function Ie(H,Rt){H.side===ea?jt(o.CULL_FACE):Ot(o.CULL_FACE);let bt=H.side===Vn;Rt&&(bt=!bt),ne(bt),H.blending===Er&&H.transparent===!1?Bt(Ha):Bt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),m.setFunc(H.depthFunc),m.setTest(H.depthTest),m.setMask(H.depthWrite),h.setMask(H.colorWrite);const Zt=H.stencilWrite;p.setTest(Zt),Zt&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),st(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ot(o.SAMPLE_ALPHA_TO_COVERAGE):jt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(H){nt!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),nt=H)}function O(H){H!==vy?(Ot(o.CULL_FACE),H!==yt&&(H===jg?o.cullFace(o.BACK):H===xy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):jt(o.CULL_FACE),yt=H}function w(H){H!==X&&(tt&&o.lineWidth(H),X=H)}function st(H,Rt,bt){H?(Ot(o.POLYGON_OFFSET_FILL),($!==Rt||B!==bt)&&(o.polygonOffset(Rt,bt),$=Rt,B=bt)):jt(o.POLYGON_OFFSET_FILL)}function St(H){H?Ot(o.SCISSOR_TEST):jt(o.SCISSOR_TEST)}function xt(H){H===void 0&&(H=o.TEXTURE0+j-1),N!==H&&(o.activeTexture(H),N=H)}function _t(H,Rt,bt){bt===void 0&&(N===null?bt=o.TEXTURE0+j-1:bt=N);let Zt=W[bt];Zt===void 0&&(Zt={type:void 0,texture:void 0},W[bt]=Zt),(Zt.type!==H||Zt.texture!==Rt)&&(N!==bt&&(o.activeTexture(bt),N=bt),o.bindTexture(H,Rt||Ft[H]),Zt.type=H,Zt.texture=Rt)}function Gt(){const H=W[N];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function wt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Nt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qt(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qt(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(H){gt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),gt.copy(H))}function Se(H){Mt.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Mt.copy(H))}function Ve(H,Rt){let bt=x.get(Rt);bt===void 0&&(bt=new WeakMap,x.set(Rt,bt));let Zt=bt.get(H);Zt===void 0&&(Zt=o.getUniformBlockIndex(Rt,H.name),bt.set(H,Zt))}function oe(H,Rt){const Zt=x.get(Rt).get(H);g.get(Rt)!==Zt&&(o.uniformBlockBinding(Rt,Zt,H.__bindingPointIndex),g.set(Rt,Zt))}function Tt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),s===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},N=null,W={},M={},b=new WeakMap,T=[],S=null,_=!1,D=null,A=null,U=null,k=null,I=null,P=null,lt=null,R=new de(0,0,0),L=0,rt=!1,nt=null,yt=null,X=null,$=null,B=null,gt.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),m.reset(),p.reset()}return{buffers:{color:h,depth:m,stencil:p},enable:Ot,disable:jt,bindFramebuffer:fe,drawBuffers:it,useProgram:un,setBlending:Bt,setMaterial:Ie,setFlipSided:ne,setCullFace:O,setLineWidth:w,setPolygonOffset:st,setScissorTest:St,activeTexture:xt,bindTexture:_t,unbindTexture:Gt,compressedTexImage2D:wt,compressedTexImage3D:Nt,texImage2D:Dt,texImage3D:Lt,updateUBOMapping:Ve,uniformBlockBinding:oe,texStorage2D:ue,texStorage3D:Qt,texSubImage2D:qt,texSubImage3D:se,compressedTexSubImage2D:vt,compressedTexSubImage3D:Ee,scissor:kt,viewport:Se,reset:Tt}}function gA(o,e,i,s,l,u,d){const h=l.isWebGL2,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,w){return M?new OffscreenCanvas(O,w):Dc("canvas")}function T(O,w,st,St){let xt=1;if((O.width>St||O.height>St)&&(xt=St/Math.max(O.width,O.height)),xt<1||w===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const _t=w?Hh:Math.floor,Gt=_t(xt*O.width),wt=_t(xt*O.height);x===void 0&&(x=b(Gt,wt));const Nt=st?b(Gt,wt):x;return Nt.width=Gt,Nt.height=wt,Nt.getContext("2d").drawImage(O,0,0,Gt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Gt+"x"+wt+")."),Nt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function S(O){return A_(O.width)&&A_(O.height)}function _(O){return h?!1:O.wrapS!==Ei||O.wrapT!==Ei||O.minFilter!==Dn&&O.minFilter!==fi}function D(O,w){return O.generateMipmaps&&w&&O.minFilter!==Dn&&O.minFilter!==fi}function A(O){o.generateMipmap(O)}function U(O,w,st,St,xt=!1){if(h===!1)return w;if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _t=w;if(w===o.RED&&(st===o.FLOAT&&(_t=o.R32F),st===o.HALF_FLOAT&&(_t=o.R16F),st===o.UNSIGNED_BYTE&&(_t=o.R8)),w===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(_t=o.R8UI),st===o.UNSIGNED_SHORT&&(_t=o.R16UI),st===o.UNSIGNED_INT&&(_t=o.R32UI),st===o.BYTE&&(_t=o.R8I),st===o.SHORT&&(_t=o.R16I),st===o.INT&&(_t=o.R32I)),w===o.RG&&(st===o.FLOAT&&(_t=o.RG32F),st===o.HALF_FLOAT&&(_t=o.RG16F),st===o.UNSIGNED_BYTE&&(_t=o.RG8)),w===o.RGBA){const Gt=xt?Rc:Ne.getTransfer(St);st===o.FLOAT&&(_t=o.RGBA32F),st===o.HALF_FLOAT&&(_t=o.RGBA16F),st===o.UNSIGNED_BYTE&&(_t=Gt===Ge?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function k(O,w,st){return D(O,st)===!0||O.isFramebufferTexture&&O.minFilter!==Dn&&O.minFilter!==fi?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function I(O){return O===Dn||O===Jg||O===Jf?o.NEAREST:o.LINEAR}function P(O){const w=O.target;w.removeEventListener("dispose",P),R(w),w.isVideoTexture&&g.delete(w)}function lt(O){const w=O.target;w.removeEventListener("dispose",lt),rt(w)}function R(O){const w=s.get(O);if(w.__webglInit===void 0)return;const st=O.source,St=y.get(st);if(St){const xt=St[w.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&L(O),Object.keys(St).length===0&&y.delete(st)}s.remove(O)}function L(O){const w=s.get(O);o.deleteTexture(w.__webglTexture);const st=O.source,St=y.get(st);delete St[w.__cacheKey],d.memory.textures--}function rt(O){const w=O.texture,st=s.get(O),St=s.get(w);if(St.__webglTexture!==void 0&&(o.deleteTexture(St.__webglTexture),d.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(st.__webglFramebuffer[xt]))for(let _t=0;_t<st.__webglFramebuffer[xt].length;_t++)o.deleteFramebuffer(st.__webglFramebuffer[xt][_t]);else o.deleteFramebuffer(st.__webglFramebuffer[xt]);st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer[xt])}else{if(Array.isArray(st.__webglFramebuffer))for(let xt=0;xt<st.__webglFramebuffer.length;xt++)o.deleteFramebuffer(st.__webglFramebuffer[xt]);else o.deleteFramebuffer(st.__webglFramebuffer);if(st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer),st.__webglMultisampledFramebuffer&&o.deleteFramebuffer(st.__webglMultisampledFramebuffer),st.__webglColorRenderbuffer)for(let xt=0;xt<st.__webglColorRenderbuffer.length;xt++)st.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(st.__webglColorRenderbuffer[xt]);st.__webglDepthRenderbuffer&&o.deleteRenderbuffer(st.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let xt=0,_t=w.length;xt<_t;xt++){const Gt=s.get(w[xt]);Gt.__webglTexture&&(o.deleteTexture(Gt.__webglTexture),d.memory.textures--),s.remove(w[xt])}s.remove(w),s.remove(O)}let nt=0;function yt(){nt=0}function X(){const O=nt;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),nt+=1,O}function $(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function B(O,w){const st=s.get(O);if(O.isVideoTexture&&Ie(O),O.isRenderTargetTexture===!1&&O.version>0&&st.__version!==O.version){const St=O.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(st,O,w);return}}i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+w)}function j(O,w){const st=s.get(O);if(O.version>0&&st.__version!==O.version){gt(st,O,w);return}i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+w)}function tt(O,w){const st=s.get(O);if(O.version>0&&st.__version!==O.version){gt(st,O,w);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+w)}function ft(O,w){const st=s.get(O);if(O.version>0&&st.__version!==O.version){Mt(st,O,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+w)}const ht={[zh]:o.REPEAT,[Ei]:o.CLAMP_TO_EDGE,[Ph]:o.MIRRORED_REPEAT},N={[Dn]:o.NEAREST,[Jg]:o.NEAREST_MIPMAP_NEAREST,[Jf]:o.NEAREST_MIPMAP_LINEAR,[fi]:o.LINEAR,[Jy]:o.LINEAR_MIPMAP_NEAREST,[Io]:o.LINEAR_MIPMAP_LINEAR},W={[uS]:o.NEVER,[gS]:o.ALWAYS,[fS]:o.LESS,[Cv]:o.LEQUAL,[hS]:o.EQUAL,[mS]:o.GEQUAL,[dS]:o.GREATER,[pS]:o.NOTEQUAL};function V(O,w,st){if(st?(o.texParameteri(O,o.TEXTURE_WRAP_S,ht[w.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ht[w.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ht[w.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,N[w.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,N[w.minFilter])):(o.texParameteri(O,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(O,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(w.wrapS!==Ei||w.wrapT!==Ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(O,o.TEXTURE_MAG_FILTER,I(w.magFilter)),o.texParameteri(O,o.TEXTURE_MIN_FILTER,I(w.minFilter)),w.minFilter!==Dn&&w.minFilter!==fi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,W[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const St=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Dn||w.minFilter!==Jf&&w.minFilter!==Io||w.type===Fa&&e.has("OES_texture_float_linear")===!1||h===!1&&w.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||s.get(w).__currentAnisotropy)&&(o.texParameterf(O,St.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy)}}function Q(O,w){let st=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",P));const St=w.source;let xt=y.get(St);xt===void 0&&(xt={},y.set(St,xt));const _t=$(w);if(_t!==O.__cacheKey){xt[_t]===void 0&&(xt[_t]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,st=!0),xt[_t].usedTimes++;const Gt=xt[O.__cacheKey];Gt!==void 0&&(xt[O.__cacheKey].usedTimes--,Gt.usedTimes===0&&L(w)),O.__cacheKey=_t,O.__webglTexture=xt[_t].texture}return st}function gt(O,w,st){let St=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(St=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(St=o.TEXTURE_3D);const xt=Q(O,w),_t=w.source;i.bindTexture(St,O.__webglTexture,o.TEXTURE0+st);const Gt=s.get(_t);if(_t.version!==Gt.__version||xt===!0){i.activeTexture(o.TEXTURE0+st);const wt=Ne.getPrimaries(Ne.workingColorSpace),Nt=w.colorSpace===di?null:Ne.getPrimaries(w.colorSpace),qt=w.colorSpace===di||wt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const se=_(w)&&S(w.image)===!1;let vt=T(w.image,se,!1,l.maxTextureSize);vt=ne(w,vt);const Ee=S(vt)||h,ue=u.convert(w.format,w.colorSpace);let Qt=u.convert(w.type),Dt=U(w.internalFormat,ue,Qt,w.colorSpace,w.isVideoTexture);V(St,w,Ee);let Lt;const kt=w.mipmaps,Se=h&&w.isVideoTexture!==!0&&Dt!==Av,Ve=Gt.__version===void 0||xt===!0,oe=k(w,vt,Ee);if(w.isDepthTexture)Dt=o.DEPTH_COMPONENT,h?w.type===Fa?Dt=o.DEPTH_COMPONENT32F:w.type===Ia?Dt=o.DEPTH_COMPONENT24:w.type===_s?Dt=o.DEPTH24_STENCIL8:Dt=o.DEPTH_COMPONENT16:w.type===Fa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===vs&&Dt===o.DEPTH_COMPONENT&&w.type!==Wh&&w.type!==Ia&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ia,Qt=u.convert(w.type)),w.format===Rr&&Dt===o.DEPTH_COMPONENT&&(Dt=o.DEPTH_STENCIL,w.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=_s,Qt=u.convert(w.type))),Ve&&(Se?i.texStorage2D(o.TEXTURE_2D,1,Dt,vt.width,vt.height):i.texImage2D(o.TEXTURE_2D,0,Dt,vt.width,vt.height,0,ue,Qt,null));else if(w.isDataTexture)if(kt.length>0&&Ee){Se&&Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,kt[0].width,kt[0].height);for(let Tt=0,H=kt.length;Tt<H;Tt++)Lt=kt[Tt],Se?i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,ue,Qt,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,Dt,Lt.width,Lt.height,0,ue,Qt,Lt.data);w.generateMipmaps=!1}else Se?(Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,vt.width,vt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,vt.width,vt.height,ue,Qt,vt.data)):i.texImage2D(o.TEXTURE_2D,0,Dt,vt.width,vt.height,0,ue,Qt,vt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Se&&Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,oe,Dt,kt[0].width,kt[0].height,vt.depth);for(let Tt=0,H=kt.length;Tt<H;Tt++)Lt=kt[Tt],w.format!==Ti?ue!==null?Se?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,vt.depth,ue,Lt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Dt,Lt.width,Lt.height,vt.depth,0,Lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,vt.depth,ue,Qt,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Dt,Lt.width,Lt.height,vt.depth,0,ue,Qt,Lt.data)}else{Se&&Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,kt[0].width,kt[0].height);for(let Tt=0,H=kt.length;Tt<H;Tt++)Lt=kt[Tt],w.format!==Ti?ue!==null?Se?i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,ue,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Dt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,ue,Qt,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,Dt,Lt.width,Lt.height,0,ue,Qt,Lt.data)}else if(w.isDataArrayTexture)Se?(Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,oe,Dt,vt.width,vt.height,vt.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,ue,Qt,vt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Dt,vt.width,vt.height,vt.depth,0,ue,Qt,vt.data);else if(w.isData3DTexture)Se?(Ve&&i.texStorage3D(o.TEXTURE_3D,oe,Dt,vt.width,vt.height,vt.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,ue,Qt,vt.data)):i.texImage3D(o.TEXTURE_3D,0,Dt,vt.width,vt.height,vt.depth,0,ue,Qt,vt.data);else if(w.isFramebufferTexture){if(Ve)if(Se)i.texStorage2D(o.TEXTURE_2D,oe,Dt,vt.width,vt.height);else{let Tt=vt.width,H=vt.height;for(let Rt=0;Rt<oe;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Dt,Tt,H,0,ue,Qt,null),Tt>>=1,H>>=1}}else if(kt.length>0&&Ee){Se&&Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,kt[0].width,kt[0].height);for(let Tt=0,H=kt.length;Tt<H;Tt++)Lt=kt[Tt],Se?i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,ue,Qt,Lt):i.texImage2D(o.TEXTURE_2D,Tt,Dt,ue,Qt,Lt);w.generateMipmaps=!1}else Se?(Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,vt.width,vt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,ue,Qt,vt)):i.texImage2D(o.TEXTURE_2D,0,Dt,ue,Qt,vt);D(w,Ee)&&A(St),Gt.__version=_t.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Mt(O,w,st){if(w.image.length!==6)return;const St=Q(O,w),xt=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+st);const _t=s.get(xt);if(xt.version!==_t.__version||St===!0){i.activeTexture(o.TEXTURE0+st);const Gt=Ne.getPrimaries(Ne.workingColorSpace),wt=w.colorSpace===di?null:Ne.getPrimaries(w.colorSpace),Nt=w.colorSpace===di||Gt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const qt=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,vt=[];for(let Tt=0;Tt<6;Tt++)!qt&&!se?vt[Tt]=T(w.image[Tt],!1,!0,l.maxCubemapSize):vt[Tt]=se?w.image[Tt].image:w.image[Tt],vt[Tt]=ne(w,vt[Tt]);const Ee=vt[0],ue=S(Ee)||h,Qt=u.convert(w.format,w.colorSpace),Dt=u.convert(w.type),Lt=U(w.internalFormat,Qt,Dt,w.colorSpace),kt=h&&w.isVideoTexture!==!0,Se=_t.__version===void 0||St===!0;let Ve=k(w,Ee,ue);V(o.TEXTURE_CUBE_MAP,w,ue);let oe;if(qt){kt&&Se&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,Lt,Ee.width,Ee.height);for(let Tt=0;Tt<6;Tt++){oe=vt[Tt].mipmaps;for(let H=0;H<oe.length;H++){const Rt=oe[H];w.format!==Ti?Qt!==null?kt?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,H,0,0,Rt.width,Rt.height,Qt,Rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,H,Lt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,H,0,0,Rt.width,Rt.height,Qt,Dt,Rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,H,Lt,Rt.width,Rt.height,0,Qt,Dt,Rt.data)}}}else{oe=w.mipmaps,kt&&Se&&(oe.length>0&&Ve++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,Lt,vt[0].width,vt[0].height));for(let Tt=0;Tt<6;Tt++)if(se){kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,vt[Tt].width,vt[Tt].height,Qt,Dt,vt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Lt,vt[Tt].width,vt[Tt].height,0,Qt,Dt,vt[Tt].data);for(let H=0;H<oe.length;H++){const bt=oe[H].image[Tt].image;kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,H+1,0,0,bt.width,bt.height,Qt,Dt,bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,H+1,Lt,bt.width,bt.height,0,Qt,Dt,bt.data)}}else{kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Qt,Dt,vt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Lt,Qt,Dt,vt[Tt]);for(let H=0;H<oe.length;H++){const Rt=oe[H];kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,H+1,0,0,Qt,Dt,Rt.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,H+1,Lt,Qt,Dt,Rt.image[Tt])}}}D(w,ue)&&A(o.TEXTURE_CUBE_MAP),_t.__version=xt.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Et(O,w,st,St,xt,_t){const Gt=u.convert(st.format,st.colorSpace),wt=u.convert(st.type),Nt=U(st.internalFormat,Gt,wt,st.colorSpace);if(!s.get(w).__hasExternalTextures){const se=Math.max(1,w.width>>_t),vt=Math.max(1,w.height>>_t);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,_t,Nt,se,vt,w.depth,0,Gt,wt,null):i.texImage2D(xt,_t,Nt,se,vt,0,Gt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Bt(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,xt,s.get(st).__webglTexture,0,Jt(w)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,St,xt,s.get(st).__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(O,w,st){if(o.bindRenderbuffer(o.RENDERBUFFER,O),w.depthBuffer&&!w.stencilBuffer){let St=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(st||Bt(w)){const xt=w.depthTexture;xt&&xt.isDepthTexture&&(xt.type===Fa?St=o.DEPTH_COMPONENT32F:xt.type===Ia&&(St=o.DEPTH_COMPONENT24));const _t=Jt(w);Bt(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_t,St,w.width,w.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,_t,St,w.width,w.height)}else o.renderbufferStorage(o.RENDERBUFFER,St,w.width,w.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,O)}else if(w.depthBuffer&&w.stencilBuffer){const St=Jt(w);st&&Bt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,St,o.DEPTH24_STENCIL8,w.width,w.height):Bt(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,St,o.DEPTH24_STENCIL8,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,O)}else{const St=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let xt=0;xt<St.length;xt++){const _t=St[xt],Gt=u.convert(_t.format,_t.colorSpace),wt=u.convert(_t.type),Nt=U(_t.internalFormat,Gt,wt,_t.colorSpace),qt=Jt(w);st&&Bt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Nt,w.width,w.height):Bt(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Nt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const St=s.get(w.depthTexture).__webglTexture,xt=Jt(w);if(w.depthTexture.format===vs)Bt(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(w.depthTexture.format===Rr)Bt(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function jt(O){const w=s.get(O),st=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");Ot(w.__webglFramebuffer,O)}else if(st){w.__webglDepthbuffer=[];for(let St=0;St<6;St++)i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[St]),w.__webglDepthbuffer[St]=o.createRenderbuffer(),Ft(w.__webglDepthbuffer[St],O,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),Ft(w.__webglDepthbuffer,O,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function fe(O,w,st){const St=s.get(O);w!==void 0&&Et(St.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&jt(O)}function it(O){const w=O.texture,st=s.get(O),St=s.get(w);O.addEventListener("dispose",lt),O.isWebGLMultipleRenderTargets!==!0&&(St.__webglTexture===void 0&&(St.__webglTexture=o.createTexture()),St.__version=w.version,d.memory.textures++);const xt=O.isWebGLCubeRenderTarget===!0,_t=O.isWebGLMultipleRenderTargets===!0,Gt=S(O)||h;if(xt){st.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(h&&w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer[wt]=[];for(let Nt=0;Nt<w.mipmaps.length;Nt++)st.__webglFramebuffer[wt][Nt]=o.createFramebuffer()}else st.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(h&&w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer=[];for(let wt=0;wt<w.mipmaps.length;wt++)st.__webglFramebuffer[wt]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(_t)if(l.drawBuffers){const wt=O.texture;for(let Nt=0,qt=wt.length;Nt<qt;Nt++){const se=s.get(wt[Nt]);se.__webglTexture===void 0&&(se.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&O.samples>0&&Bt(O)===!1){const wt=_t?w:[w];st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Nt=0;Nt<wt.length;Nt++){const qt=wt[Nt];st.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[Nt]);const se=u.convert(qt.format,qt.colorSpace),vt=u.convert(qt.type),Ee=U(qt.internalFormat,se,vt,qt.colorSpace,O.isXRRenderTarget===!0),ue=Jt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ue,Ee,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,st.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(st.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xt){i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),V(o.TEXTURE_CUBE_MAP,w,Gt);for(let wt=0;wt<6;wt++)if(h&&w.mipmaps&&w.mipmaps.length>0)for(let Nt=0;Nt<w.mipmaps.length;Nt++)Et(st.__webglFramebuffer[wt][Nt],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Nt);else Et(st.__webglFramebuffer[wt],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);D(w,Gt)&&A(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(_t){const wt=O.texture;for(let Nt=0,qt=wt.length;Nt<qt;Nt++){const se=wt[Nt],vt=s.get(se);i.bindTexture(o.TEXTURE_2D,vt.__webglTexture),V(o.TEXTURE_2D,se,Gt),Et(st.__webglFramebuffer,O,se,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,0),D(se,Gt)&&A(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(h?wt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(wt,St.__webglTexture),V(wt,w,Gt),h&&w.mipmaps&&w.mipmaps.length>0)for(let Nt=0;Nt<w.mipmaps.length;Nt++)Et(st.__webglFramebuffer[Nt],O,w,o.COLOR_ATTACHMENT0,wt,Nt);else Et(st.__webglFramebuffer,O,w,o.COLOR_ATTACHMENT0,wt,0);D(w,Gt)&&A(wt),i.unbindTexture()}O.depthBuffer&&jt(O)}function un(O){const w=S(O)||h,st=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let St=0,xt=st.length;St<xt;St++){const _t=st[St];if(D(_t,w)){const Gt=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,wt=s.get(_t).__webglTexture;i.bindTexture(Gt,wt),A(Gt),i.unbindTexture()}}}function Ht(O){if(h&&O.samples>0&&Bt(O)===!1){const w=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],st=O.width,St=O.height;let xt=o.COLOR_BUFFER_BIT;const _t=[],Gt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=s.get(O),Nt=O.isWebGLMultipleRenderTargets===!0;if(Nt)for(let qt=0;qt<w.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let qt=0;qt<w.length;qt++){_t.push(o.COLOR_ATTACHMENT0+qt),O.depthBuffer&&_t.push(Gt);const se=wt.__ignoreDepthValues!==void 0?wt.__ignoreDepthValues:!1;if(se===!1&&(O.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Nt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,wt.__webglColorRenderbuffer[qt]),se===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Gt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Gt])),Nt){const vt=s.get(w[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,vt,0)}o.blitFramebuffer(0,0,st,St,0,0,st,St,xt,o.NEAREST),p&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_t)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let qt=0;qt<w.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,wt.__webglColorRenderbuffer[qt]);const se=s.get(w[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,se,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}}function Jt(O){return Math.min(l.maxSamples,O.samples)}function Bt(O){const w=s.get(O);return h&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(O){const w=d.render.frame;g.get(O)!==w&&(g.set(O,w),O.update())}function ne(O,w){const st=O.colorSpace,St=O.format,xt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Ih||st!==aa&&st!==di&&(Ne.getTransfer(st)===Ge?h===!1?e.has("EXT_sRGB")===!0&&St===Ti?(O.format=Ih,O.minFilter=fi,O.generateMipmaps=!1):w=Dv.sRGBToLinear(w):(St!==Ti||xt!==Va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),w}this.allocateTextureUnit=X,this.resetTextureUnits=yt,this.setTexture2D=B,this.setTexture2DArray=j,this.setTexture3D=tt,this.setTextureCube=ft,this.rebindTextures=fe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=un,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Bt}function _A(o,e,i){const s=i.isWebGL2;function l(u,d=di){let h;const m=Ne.getTransfer(d);if(u===Va)return o.UNSIGNED_BYTE;if(u===Sv)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Mv)return o.UNSIGNED_SHORT_5_5_5_1;if(u===$y)return o.BYTE;if(u===tS)return o.SHORT;if(u===Wh)return o.UNSIGNED_SHORT;if(u===yv)return o.INT;if(u===Ia)return o.UNSIGNED_INT;if(u===Fa)return o.FLOAT;if(u===Fo)return s?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===eS)return o.ALPHA;if(u===Ti)return o.RGBA;if(u===nS)return o.LUMINANCE;if(u===iS)return o.LUMINANCE_ALPHA;if(u===vs)return o.DEPTH_COMPONENT;if(u===Rr)return o.DEPTH_STENCIL;if(u===Ih)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===aS)return o.RED;if(u===Ev)return o.RED_INTEGER;if(u===sS)return o.RG;if(u===Tv)return o.RG_INTEGER;if(u===bv)return o.RGBA_INTEGER;if(u===$f||u===th||u===eh||u===nh)if(m===Ge)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===$f)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===th)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===eh)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===nh)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===$f)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===th)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===eh)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===nh)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===$g||u===t_||u===e_||u===n_)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===$g)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===t_)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===e_)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===n_)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===Av)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===i_||u===a_)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===i_)return m===Ge?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===a_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===s_||u===r_||u===o_||u===l_||u===c_||u===u_||u===f_||u===h_||u===d_||u===p_||u===m_||u===g_||u===__||u===v_)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===s_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===r_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===o_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===l_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===c_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===u_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===f_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===h_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===d_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===p_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===m_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===g_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===__)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===v_)return m===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===ih||u===x_||u===y_)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===ih)return m===Ge?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===x_)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===y_)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===rS||u===S_||u===M_||u===E_)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===ih)return h.COMPRESSED_RED_RGTC1_EXT;if(u===S_)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===M_)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===E_)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===_s?s?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class vA extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zo extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xA={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,s),_=this._getHandJoint(p,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(xA)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new zo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class yA extends Cr{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,y=null,M=null,b=null;const T=i.getContextAttributes();let S=null,_=null;const D=[],A=[],U=new ae;let k=null;const I=new Gn;I.layers.enable(1),I.viewport=new pn;const P=new Gn;P.layers.enable(2),P.viewport=new pn;const lt=[I,P],R=new vA;R.layers.enable(1),R.layers.enable(2);let L=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=D[V];return Q===void 0&&(Q=new wh,D[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=D[V];return Q===void 0&&(Q=new wh,D[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=D[V];return Q===void 0&&(Q=new wh,D[V]=Q),Q.getHandSpace()};function nt(V){const Q=A.indexOf(V.inputSource);if(Q===-1)return;const gt=D[Q];gt!==void 0&&(gt.update(V.inputSource,V.frame,p||d),gt.dispatchEvent({type:V.type,data:V.inputSource}))}function yt(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",yt),l.removeEventListener("inputsourceschange",X);for(let V=0;V<D.length;V++){const Q=A[V];Q!==null&&(A[V]=null,D[V].disconnect(Q))}L=null,rt=null,e.setRenderTarget(S),M=null,y=null,x=null,l=null,_=null,W.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(U.width,U.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){u=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){h=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",yt),l.addEventListener("inputsourceschange",X),T.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(U),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:l.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Q),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),_=new ys(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let Q=null,gt=null,Mt=null;T.depth&&(Mt=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Q=T.stencil?Rr:vs,gt=T.stencil?_s:Ia);const Et={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Et),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),_=new ys(y.textureWidth,y.textureHeight,{format:Ti,type:Va,depthTexture:new kv(y.textureWidth,y.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const Ft=e.properties.get(_);Ft.__ignoreDepthValues=y.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),W.setContext(l),W.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function X(V){for(let Q=0;Q<V.removed.length;Q++){const gt=V.removed[Q],Mt=A.indexOf(gt);Mt>=0&&(A[Mt]=null,D[Mt].disconnect(gt))}for(let Q=0;Q<V.added.length;Q++){const gt=V.added[Q];let Mt=A.indexOf(gt);if(Mt===-1){for(let Ft=0;Ft<D.length;Ft++)if(Ft>=A.length){A.push(gt),Mt=Ft;break}else if(A[Ft]===null){A[Ft]=gt,Mt=Ft;break}if(Mt===-1)break}const Et=D[Mt];Et&&Et.connect(gt)}}const $=new Y,B=new Y;function j(V,Q,gt){$.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(gt.matrixWorld);const Mt=$.distanceTo(B),Et=Q.projectionMatrix.elements,Ft=gt.projectionMatrix.elements,Ot=Et[14]/(Et[10]-1),jt=Et[14]/(Et[10]+1),fe=(Et[9]+1)/Et[5],it=(Et[9]-1)/Et[5],un=(Et[8]-1)/Et[0],Ht=(Ft[8]+1)/Ft[0],Jt=Ot*un,Bt=Ot*Ht,Ie=Mt/(-un+Ht),ne=Ie*-un;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ne),V.translateZ(Ie),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const O=Ot+Ie,w=jt+Ie,st=Jt-ne,St=Bt+(Mt-ne),xt=fe*jt/w*O,_t=it*jt/w*O;V.projectionMatrix.makePerspective(st,St,xt,_t,O,w),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function tt(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;R.near=P.near=I.near=V.near,R.far=P.far=I.far=V.far,(L!==R.near||rt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,rt=R.far);const Q=V.parent,gt=R.cameras;tt(R,Q);for(let Mt=0;Mt<gt.length;Mt++)tt(gt[Mt],Q);gt.length===2?j(R,I,P):R.projectionMatrix.copy(I.projectionMatrix),ft(V,R,Q)};function ft(V,Q,gt){gt===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(gt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Fh*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(V){m=V,y!==null&&(y.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)};let ht=null;function N(V,Q){if(g=Q.getViewerPose(p||d),b=Q,g!==null){const gt=g.views;M!==null&&(e.setRenderTargetFramebuffer(_,M.framebuffer),e.setRenderTarget(_));let Mt=!1;gt.length!==R.cameras.length&&(R.cameras.length=0,Mt=!0);for(let Et=0;Et<gt.length;Et++){const Ft=gt[Et];let Ot=null;if(M!==null)Ot=M.getViewport(Ft);else{const fe=x.getViewSubImage(y,Ft);Ot=fe.viewport,Et===0&&(e.setRenderTargetTextures(_,fe.colorTexture,y.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(_))}let jt=lt[Et];jt===void 0&&(jt=new Gn,jt.layers.enable(Et),jt.viewport=new pn,lt[Et]=jt),jt.matrix.fromArray(Ft.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Ft.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Et===0&&(R.matrix.copy(jt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Mt===!0&&R.cameras.push(jt)}}for(let gt=0;gt<D.length;gt++){const Mt=A[gt],Et=D[gt];Mt!==null&&Et!==void 0&&Et.update(Mt,Q,p||d)}ht&&ht(V,Q),Q.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Q}),b=null}const W=new Vv;W.setAnimationLoop(N),this.setAnimationLoop=function(V){ht=V},this.dispose=function(){}}}function SA(o,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,Fv(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,D,A,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,U)):_.isMeshMatcapMaterial?(u(S,_),b(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),T(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,D,A):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Vn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Vn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const D=e.get(_).envMap;if(D&&(S.envMap.value=D,S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap){S.lightMap.value=_.lightMap;const A=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=_.lightMapIntensity*A,i(_.lightMap,S.lightMapTransform)}_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,D,A){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*D,S.scale.value=A*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),e.get(_).envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,D){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&S.clearcoatNormalScale.value.negate())),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const D=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function MA(o,e,i,s){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(D,A){const U=A.program;s.uniformBlockBinding(D,U)}function p(D,A){let U=l[D.id];U===void 0&&(b(D),U=g(D),l[D.id]=U,D.addEventListener("dispose",S));const k=A.program;s.updateUBOMapping(D,k);const I=e.render.frame;u[D.id]!==I&&(y(D),u[D.id]=I)}function g(D){const A=x();D.__bindingPointIndex=A;const U=o.createBuffer(),k=D.__size,I=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,k,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,U),U}function x(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const A=l[D.id],U=D.uniforms,k=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let I=0,P=U.length;I<P;I++){const lt=Array.isArray(U[I])?U[I]:[U[I]];for(let R=0,L=lt.length;R<L;R++){const rt=lt[R];if(M(rt,I,R,k)===!0){const nt=rt.__offset,yt=Array.isArray(rt.value)?rt.value:[rt.value];let X=0;for(let $=0;$<yt.length;$++){const B=yt[$],j=T(B);typeof B=="number"||typeof B=="boolean"?(rt.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,nt+X,rt.__data)):B.isMatrix3?(rt.__data[0]=B.elements[0],rt.__data[1]=B.elements[1],rt.__data[2]=B.elements[2],rt.__data[3]=0,rt.__data[4]=B.elements[3],rt.__data[5]=B.elements[4],rt.__data[6]=B.elements[5],rt.__data[7]=0,rt.__data[8]=B.elements[6],rt.__data[9]=B.elements[7],rt.__data[10]=B.elements[8],rt.__data[11]=0):(B.toArray(rt.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,rt.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(D,A,U,k){const I=D.value,P=A+"_"+U;if(k[P]===void 0)return typeof I=="number"||typeof I=="boolean"?k[P]=I:k[P]=I.clone(),!0;{const lt=k[P];if(typeof I=="number"||typeof I=="boolean"){if(lt!==I)return k[P]=I,!0}else if(lt.equals(I)===!1)return lt.copy(I),!0}return!1}function b(D){const A=D.uniforms;let U=0;const k=16;for(let P=0,lt=A.length;P<lt;P++){const R=Array.isArray(A[P])?A[P]:[A[P]];for(let L=0,rt=R.length;L<rt;L++){const nt=R[L],yt=Array.isArray(nt.value)?nt.value:[nt.value];for(let X=0,$=yt.length;X<$;X++){const B=yt[X],j=T(B),tt=U%k;tt!==0&&k-tt<j.boundary&&(U+=k-tt),nt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=U,U+=j.storage}}}const I=U%k;return I>0&&(U+=k-I),D.__size=U,D.__cache={},this}function T(D){const A={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(A.boundary=4,A.storage=4):D.isVector2?(A.boundary=8,A.storage=8):D.isVector3||D.isColor?(A.boundary=16,A.storage=12):D.isVector4?(A.boundary=16,A.storage=16):D.isMatrix3?(A.boundary=48,A.storage=48):D.isMatrix4?(A.boundary=64,A.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),A}function S(D){const A=D.target;A.removeEventListener("dispose",S);const U=d.indexOf(A.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[A.id]),delete l[A.id],delete u[A.id]}function _(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class Fc{constructor(e={}){const{canvas:i=vS(),context:s=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let y;s!==null?y=s.getContextAttributes().alpha:y=d;const M=new Uint32Array(4),b=new Int32Array(4);let T=null,S=null;const _=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this._useLegacyLights=!1,this.toneMapping=Ga,this.toneMappingExposure=1;const A=this;let U=!1,k=0,I=0,P=null,lt=-1,R=null;const L=new pn,rt=new pn;let nt=null;const yt=new de(0);let X=0,$=i.width,B=i.height,j=1,tt=null,ft=null;const ht=new pn(0,0,$,B),N=new pn(0,0,$,B);let W=!1;const V=new Yh;let Q=!1,gt=!1,Mt=null;const Et=new Ke,Ft=new ae,Ot=new Y,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return P===null?j:1}let it=s;function un(C,Z){for(let ot=0;ot<C.length;ot++){const ct=C[ot],at=i.getContext(ct,Z);if(at!==null)return at}return null}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",Tt,!1),i.addEventListener("webglcontextrestored",H,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),it===null){const Z=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&Z.shift(),it=un(Z,C),it===null)throw un(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&it instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),it.getShaderPrecisionFormat===void 0&&(it.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ht,Jt,Bt,Ie,ne,O,w,st,St,xt,_t,Gt,wt,Nt,qt,se,vt,Ee,ue,Qt,Dt,Lt,kt,Se;function Ve(){Ht=new UT(it),Jt=new AT(it,Ht,e),Ht.init(Jt),Lt=new _A(it,Ht,Jt),Bt=new mA(it,Ht,Jt),Ie=new zT(it),ne=new eA,O=new gA(it,Ht,Bt,ne,Jt,Lt,Ie),w=new wT(A),st=new DT(A),St=new XS(it,Jt),kt=new TT(it,Ht,St,Jt),xt=new NT(it,St,Ie,kt),_t=new FT(it,xt,St,Ie),ue=new IT(it,Jt,O),se=new RT(ne),Gt=new tA(A,w,st,Ht,Jt,kt,se),wt=new SA(A,ne),Nt=new iA,qt=new cA(Ht,Jt),Ee=new ET(A,w,st,Bt,_t,y,m),vt=new pA(A,_t,Jt),Se=new MA(it,Ie,Jt,Bt),Qt=new bT(it,Ht,Ie,Jt),Dt=new OT(it,Ht,Ie,Jt),Ie.programs=Gt.programs,A.capabilities=Jt,A.extensions=Ht,A.properties=ne,A.renderLists=Nt,A.shadowMap=vt,A.state=Bt,A.info=Ie}Ve();const oe=new yA(A,it);this.xr=oe,this.getContext=function(){return it},this.getContextAttributes=function(){return it.getContextAttributes()},this.forceContextLoss=function(){const C=Ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize($,B,!1))},this.getSize=function(C){return C.set($,B)},this.setSize=function(C,Z,ot=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,B=Z,i.width=Math.floor(C*j),i.height=Math.floor(Z*j),ot===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set($*j,B*j).floor()},this.setDrawingBufferSize=function(C,Z,ot){$=C,B=Z,j=ot,i.width=Math.floor(C*ot),i.height=Math.floor(Z*ot),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ht)},this.setViewport=function(C,Z,ot,ct){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,Z,ot,ct),Bt.viewport(L.copy(ht).multiplyScalar(j).floor())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,Z,ot,ct){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,Z,ot,ct),Bt.scissor(rt.copy(N).multiplyScalar(j).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){Bt.setScissorTest(W=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){ft=C},this.getClearColor=function(C){return C.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(C=!0,Z=!0,ot=!0){let ct=0;if(C){let at=!1;if(P!==null){const Ct=P.texture.format;at=Ct===bv||Ct===Tv||Ct===Ev}if(at){const Ct=P.texture.type,zt=Ct===Va||Ct===Ia||Ct===Wh||Ct===_s||Ct===Sv||Ct===Mv,Wt=Ee.getClearColor(),Yt=Ee.getClearAlpha(),It=Wt.r,$t=Wt.g,te=Wt.b;zt?(M[0]=It,M[1]=$t,M[2]=te,M[3]=Yt,it.clearBufferuiv(it.COLOR,0,M)):(b[0]=It,b[1]=$t,b[2]=te,b[3]=Yt,it.clearBufferiv(it.COLOR,0,b))}else ct|=it.COLOR_BUFFER_BIT}Z&&(ct|=it.DEPTH_BUFFER_BIT),ot&&(ct|=it.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Tt,!1),i.removeEventListener("webglcontextrestored",H,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Nt.dispose(),qt.dispose(),ne.dispose(),w.dispose(),st.dispose(),_t.dispose(),kt.dispose(),Se.dispose(),Gt.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",qe),oe.removeEventListener("sessionend",Ce),Mt&&(Mt.dispose(),Mt=null),fn.stop()};function Tt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const C=Ie.autoReset,Z=vt.enabled,ot=vt.autoUpdate,ct=vt.needsUpdate,at=vt.type;Ve(),Ie.autoReset=C,vt.enabled=Z,vt.autoUpdate=ot,vt.needsUpdate=ct,vt.type=at}function Rt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bt(C){const Z=C.target;Z.removeEventListener("dispose",bt),Zt(Z)}function Zt(C){Vt(C),ne.remove(C)}function Vt(C){const Z=ne.get(C).programs;Z!==void 0&&(Z.forEach(function(ot){Gt.releaseProgram(ot)}),C.isShaderMaterial&&Gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ot,ct,at,Ct){Z===null&&(Z=jt);const zt=at.isMesh&&at.matrixWorld.determinant()<0,Wt=Mn(C,Z,ot,ct,at);Bt.setMaterial(ct,zt);let Yt=ot.index,It=1;if(ct.wireframe===!0){if(Yt=xt.getWireframeAttribute(ot),Yt===void 0)return;It=2}const $t=ot.drawRange,te=ot.attributes.position;let be=$t.start*It,Je=($t.start+$t.count)*It;Ct!==null&&(be=Math.max(be,Ct.start*It),Je=Math.min(Je,(Ct.start+Ct.count)*It)),Yt!==null?(be=Math.max(be,0),Je=Math.min(Je,Yt.count)):te!=null&&(be=Math.max(be,0),Je=Math.min(Je,te.count));const $e=Je-be;if($e<0||$e===1/0)return;kt.setup(at,ct,Wt,ot,Yt);let ei,Be=Qt;if(Yt!==null&&(ei=St.get(Yt),Be=Dt,Be.setIndex(ei)),at.isMesh)ct.wireframe===!0?(Bt.setLineWidth(ct.wireframeLinewidth*fe()),Be.setMode(it.LINES)):Be.setMode(it.TRIANGLES);else if(at.isLine){let le=ct.linewidth;le===void 0&&(le=1),Bt.setLineWidth(le*fe()),at.isLineSegments?Be.setMode(it.LINES):at.isLineLoop?Be.setMode(it.LINE_LOOP):Be.setMode(it.LINE_STRIP)}else at.isPoints?Be.setMode(it.POINTS):at.isSprite&&Be.setMode(it.TRIANGLES);if(at.isBatchedMesh)Be.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)Be.renderInstances(be,$e,at.count);else if(ot.isInstancedBufferGeometry){const le=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,oa=Math.min(ot.instanceCount,le);Be.renderInstances(be,$e,oa)}else Be.render(be,$e)};function we(C,Z,ot){C.transparent===!0&&C.side===ea&&C.forceSinglePass===!1?(C.side=Vn,C.needsUpdate=!0,ja(C,Z,ot),C.side=ka,C.needsUpdate=!0,ja(C,Z,ot),C.side=ea):ja(C,Z,ot)}this.compile=function(C,Z,ot=null){ot===null&&(ot=C),S=qt.get(ot),S.init(),D.push(S),ot.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),C!==ot&&C.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),S.setupLights(A._useLegacyLights);const ct=new Set;return C.traverse(function(at){const Ct=at.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){const Wt=Ct[zt];we(Wt,ot,at),ct.add(Wt)}else we(Ct,ot,at),ct.add(Ct)}),D.pop(),S=null,ct},this.compileAsync=function(C,Z,ot=null){const ct=this.compile(C,Z,ot);return new Promise(at=>{function Ct(){if(ct.forEach(function(zt){ne.get(zt).currentProgram.isReady()&&ct.delete(zt)}),ct.size===0){at(C);return}setTimeout(Ct,10)}Ht.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Te=null;function ke(C){Te&&Te(C)}function qe(){fn.stop()}function Ce(){fn.start()}const fn=new Vv;fn.setAnimationLoop(ke),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(C){Te=C,oe.setAnimationLoop(C),C===null?fn.stop():fn.start()},oe.addEventListener("sessionstart",qe),oe.addEventListener("sessionend",Ce),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(Z),Z=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Z,P),S=qt.get(C,D.length),S.init(),D.push(S),Et.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,Q=se.init(this.clippingPlanes,gt),T=Nt.get(C,_.length),T.init(),_.push(T),kn(C,Z,0,A.sortObjects),T.finish(),A.sortObjects===!0&&T.sort(tt,ft),this.info.render.frame++,Q===!0&&se.beginShadows();const ot=S.state.shadowsArray;if(vt.render(ot,C,Z),Q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(T,C),S.setupLights(A._useLegacyLights),Z.isArrayCamera){const ct=Z.cameras;for(let at=0,Ct=ct.length;at<Ct;at++){const zt=ct[at];Dr(T,C,zt,zt.viewport)}}else Dr(T,C,Z);P!==null&&(O.updateMultisampleRenderTarget(P),O.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(A,C,Z),kt.resetDefaultState(),lt=-1,R=null,D.pop(),D.length>0?S=D[D.length-1]:S=null,_.pop(),_.length>0?T=_[_.length-1]:T=null};function kn(C,Z,ot,ct){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||V.intersectsSprite(C)){ct&&Ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Et);const zt=_t.update(C),Wt=C.material;Wt.visible&&T.push(C,zt,Wt,ot,Ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||V.intersectsObject(C))){const zt=_t.update(C),Wt=C.material;if(ct&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ot.copy(C.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ot.copy(zt.boundingSphere.center)),Ot.applyMatrix4(C.matrixWorld).applyMatrix4(Et)),Array.isArray(Wt)){const Yt=zt.groups;for(let It=0,$t=Yt.length;It<$t;It++){const te=Yt[It],be=Wt[te.materialIndex];be&&be.visible&&T.push(C,zt,be,ot,Ot.z,te)}}else Wt.visible&&T.push(C,zt,Wt,ot,Ot.z,null)}}const Ct=C.children;for(let zt=0,Wt=Ct.length;zt<Wt;zt++)kn(Ct[zt],Z,ot,ct)}function Dr(C,Z,ot,ct){const at=C.opaque,Ct=C.transmissive,zt=C.transparent;S.setupLightsView(ot),Q===!0&&se.setGlobalState(A.clippingPlanes,ot),Ct.length>0&&Ur(at,Ct,Z,ot),ct&&Bt.viewport(L.copy(ct)),at.length>0&&sa(at,Z,ot),Ct.length>0&&sa(Ct,Z,ot),zt.length>0&&sa(zt,Z,ot),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Ur(C,Z,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;const Ct=Jt.isWebGL2;Mt===null&&(Mt=new ys(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")?Fo:Va,minFilter:Io,samples:Ct?4:0})),A.getDrawingBufferSize(Ft),Ct?Mt.setSize(Ft.x,Ft.y):Mt.setSize(Hh(Ft.x),Hh(Ft.y));const zt=A.getRenderTarget();A.setRenderTarget(Mt),A.getClearColor(yt),X=A.getClearAlpha(),X<1&&A.setClearColor(16777215,.5),A.clear();const Wt=A.toneMapping;A.toneMapping=Ga,sa(C,ot,ct),O.updateMultisampleRenderTarget(Mt),O.updateRenderTargetMipmap(Mt);let Yt=!1;for(let It=0,$t=Z.length;It<$t;It++){const te=Z[It],be=te.object,Je=te.geometry,$e=te.material,ei=te.group;if($e.side===ea&&be.layers.test(ct.layers)){const Be=$e.side;$e.side=Vn,$e.needsUpdate=!0,Nr(be,ot,ct,Je,$e,ei),$e.side=Be,$e.needsUpdate=!0,Yt=!0}}Yt===!0&&(O.updateMultisampleRenderTarget(Mt),O.updateRenderTargetMipmap(Mt)),A.setRenderTarget(zt),A.setClearColor(yt,X),A.toneMapping=Wt}function sa(C,Z,ot){const ct=Z.isScene===!0?Z.overrideMaterial:null;for(let at=0,Ct=C.length;at<Ct;at++){const zt=C[at],Wt=zt.object,Yt=zt.geometry,It=ct===null?zt.material:ct,$t=zt.group;Wt.layers.test(ot.layers)&&Nr(Wt,Z,ot,Yt,It,$t)}}function Nr(C,Z,ot,ct,at,Ct){C.onBeforeRender(A,Z,ot,ct,at,Ct),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),at.onBeforeRender(A,Z,ot,ct,C,Ct),at.transparent===!0&&at.side===ea&&at.forceSinglePass===!1?(at.side=Vn,at.needsUpdate=!0,A.renderBufferDirect(ot,Z,ct,at,C,Ct),at.side=ka,at.needsUpdate=!0,A.renderBufferDirect(ot,Z,ct,at,C,Ct),at.side=ea):A.renderBufferDirect(ot,Z,ct,at,C,Ct),C.onAfterRender(A,Z,ot,ct,at,Ct)}function ja(C,Z,ot){Z.isScene!==!0&&(Z=jt);const ct=ne.get(C),at=S.state.lights,Ct=S.state.shadowsArray,zt=at.state.version,Wt=Gt.getParameters(C,at.state,Ct,Z,ot),Yt=Gt.getProgramCacheKey(Wt);let It=ct.programs;ct.environment=C.isMeshStandardMaterial?Z.environment:null,ct.fog=Z.fog,ct.envMap=(C.isMeshStandardMaterial?st:w).get(C.envMap||ct.environment),It===void 0&&(C.addEventListener("dispose",bt),It=new Map,ct.programs=It);let $t=It.get(Yt);if($t!==void 0){if(ct.currentProgram===$t&&ct.lightsStateVersion===zt)return Qe(C,Wt),$t}else Wt.uniforms=Gt.getUniforms(C),C.onBuild(ot,Wt,A),C.onBeforeCompile(Wt,A),$t=Gt.acquireProgram(Wt,Yt),It.set(Yt,$t),ct.uniforms=Wt.uniforms;const te=ct.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=se.uniform),Qe(C,Wt),ct.needsLights=Or(C),ct.lightsStateVersion=zt,ct.needsLights&&(te.ambientLightColor.value=at.state.ambient,te.lightProbe.value=at.state.probe,te.directionalLights.value=at.state.directional,te.directionalLightShadows.value=at.state.directionalShadow,te.spotLights.value=at.state.spot,te.spotLightShadows.value=at.state.spotShadow,te.rectAreaLights.value=at.state.rectArea,te.ltc_1.value=at.state.rectAreaLTC1,te.ltc_2.value=at.state.rectAreaLTC2,te.pointLights.value=at.state.point,te.pointLightShadows.value=at.state.pointShadow,te.hemisphereLights.value=at.state.hemi,te.directionalShadowMap.value=at.state.directionalShadowMap,te.directionalShadowMatrix.value=at.state.directionalShadowMatrix,te.spotShadowMap.value=at.state.spotShadowMap,te.spotLightMatrix.value=at.state.spotLightMatrix,te.spotLightMap.value=at.state.spotLightMap,te.pointShadowMap.value=at.state.pointShadowMap,te.pointShadowMatrix.value=at.state.pointShadowMatrix),ct.currentProgram=$t,ct.uniformsList=null,$t}function gi(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=bc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Qe(C,Z){const ot=ne.get(C);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function Mn(C,Z,ot,ct,at){Z.isScene!==!0&&(Z=jt),O.resetTextureUnits();const Ct=Z.fog,zt=ct.isMeshStandardMaterial?Z.environment:null,Wt=P===null?A.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:aa,Yt=(ct.isMeshStandardMaterial?st:w).get(ct.envMap||zt),It=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,$t=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),te=!!ot.morphAttributes.position,be=!!ot.morphAttributes.normal,Je=!!ot.morphAttributes.color;let $e=Ga;ct.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&($e=A.toneMapping);const ei=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Be=ei!==void 0?ei.length:0,le=ne.get(ct),oa=S.state.lights;if(Q===!0&&(gt===!0||C!==R)){const On=C===R&&ct.id===lt;se.setState(ct,C,On)}let Oe=!1;ct.version===le.__version?(le.needsLights&&le.lightsStateVersion!==oa.state.version||le.outputColorSpace!==Wt||at.isBatchedMesh&&le.batching===!1||!at.isBatchedMesh&&le.batching===!0||at.isInstancedMesh&&le.instancing===!1||!at.isInstancedMesh&&le.instancing===!0||at.isSkinnedMesh&&le.skinning===!1||!at.isSkinnedMesh&&le.skinning===!0||at.isInstancedMesh&&le.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&le.instancingColor===!1&&at.instanceColor!==null||le.envMap!==Yt||ct.fog===!0&&le.fog!==Ct||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==se.numPlanes||le.numIntersection!==se.numIntersection)||le.vertexAlphas!==It||le.vertexTangents!==$t||le.morphTargets!==te||le.morphNormals!==be||le.morphColors!==Je||le.toneMapping!==$e||Jt.isWebGL2===!0&&le.morphTargetsCount!==Be)&&(Oe=!0):(Oe=!0,le.__version=ct.version);let gn=le.currentProgram;Oe===!0&&(gn=ja(ct,Z,at));let Rn=!1,la=!1,zr=!1;const tn=gn.getUniforms(),Ai=le.uniforms;if(Bt.useProgram(gn.program)&&(Rn=!0,la=!0,zr=!0),ct.id!==lt&&(lt=ct.id,la=!0),Rn||R!==C){tn.setValue(it,"projectionMatrix",C.projectionMatrix),tn.setValue(it,"viewMatrix",C.matrixWorldInverse);const On=tn.map.cameraPosition;On!==void 0&&On.setValue(it,Ot.setFromMatrixPosition(C.matrixWorld)),Jt.logarithmicDepthBuffer&&tn.setValue(it,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&tn.setValue(it,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,la=!0,zr=!0)}if(at.isSkinnedMesh){tn.setOptional(it,at,"bindMatrix"),tn.setOptional(it,at,"bindMatrixInverse");const On=at.skeleton;On&&(Jt.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),tn.setValue(it,"boneTexture",On.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}at.isBatchedMesh&&(tn.setOptional(it,at,"batchingTexture"),tn.setValue(it,"batchingTexture",at._matricesTexture,O));const ca=ot.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&Jt.isWebGL2===!0)&&ue.update(at,ot,gn),(la||le.receiveShadow!==at.receiveShadow)&&(le.receiveShadow=at.receiveShadow,tn.setValue(it,"receiveShadow",at.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Ai.envMap.value=Yt,Ai.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),la&&(tn.setValue(it,"toneMappingExposure",A.toneMappingExposure),le.needsLights&&ra(Ai,zr),Ct&&ct.fog===!0&&wt.refreshFogUniforms(Ai,Ct),wt.refreshMaterialUniforms(Ai,ct,j,B,Mt),bc.upload(it,gi(le),Ai,O)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(bc.upload(it,gi(le),Ai,O),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&tn.setValue(it,"center",at.center),tn.setValue(it,"modelViewMatrix",at.modelViewMatrix),tn.setValue(it,"normalMatrix",at.normalMatrix),tn.setValue(it,"modelMatrix",at.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const On=ct.uniformsGroups;for(let En=0,Pr=On.length;En<Pr;En++)if(Jt.isWebGL2){const Br=On[En];Se.update(Br,gn),Se.bind(Br,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function ra(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Or(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,Z,ot){ne.get(C.texture).__webglTexture=Z,ne.get(C.depthTexture).__webglTexture=ot;const ct=ne.get(C);ct.__hasExternalTextures=!0,ct.__hasExternalTextures&&(ct.__autoAllocateDepthBuffer=ot===void 0,ct.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Z){const ot=ne.get(C);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,ot=0){P=C,k=Z,I=ot;let ct=!0,at=null,Ct=!1,zt=!1;if(C){const Yt=ne.get(C);Yt.__useDefaultFramebuffer!==void 0?(Bt.bindFramebuffer(it.FRAMEBUFFER,null),ct=!1):Yt.__webglFramebuffer===void 0?O.setupRenderTarget(C):Yt.__hasExternalTextures&&O.rebindTextures(C,ne.get(C.texture).__webglTexture,ne.get(C.depthTexture).__webglTexture);const It=C.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(zt=!0);const $t=ne.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[Z])?at=$t[Z][ot]:at=$t[Z],Ct=!0):Jt.isWebGL2&&C.samples>0&&O.useMultisampledRTT(C)===!1?at=ne.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?at=$t[ot]:at=$t,L.copy(C.viewport),rt.copy(C.scissor),nt=C.scissorTest}else L.copy(ht).multiplyScalar(j).floor(),rt.copy(N).multiplyScalar(j).floor(),nt=W;if(Bt.bindFramebuffer(it.FRAMEBUFFER,at)&&Jt.drawBuffers&&ct&&Bt.drawBuffers(C,at),Bt.viewport(L),Bt.scissor(rt),Bt.setScissorTest(nt),Ct){const Yt=ne.get(C.texture);it.framebufferTexture2D(it.FRAMEBUFFER,it.COLOR_ATTACHMENT0,it.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Yt.__webglTexture,ot)}else if(zt){const Yt=ne.get(C.texture),It=Z||0;it.framebufferTextureLayer(it.FRAMEBUFFER,it.COLOR_ATTACHMENT0,Yt.__webglTexture,ot||0,It)}lt=-1},this.readRenderTargetPixels=function(C,Z,ot,ct,at,Ct,zt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt){Bt.bindFramebuffer(it.FRAMEBUFFER,Wt);try{const Yt=C.texture,It=Yt.format,$t=Yt.type;if(It!==Ti&&Lt.convert(It)!==it.getParameter(it.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const te=$t===Fo&&(Ht.has("EXT_color_buffer_half_float")||Jt.isWebGL2&&Ht.has("EXT_color_buffer_float"));if($t!==Va&&Lt.convert($t)!==it.getParameter(it.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===Fa&&(Jt.isWebGL2||Ht.has("OES_texture_float")||Ht.has("WEBGL_color_buffer_float")))&&!te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ct&&ot>=0&&ot<=C.height-at&&it.readPixels(Z,ot,ct,at,Lt.convert(It),Lt.convert($t),Ct)}finally{const Yt=P!==null?ne.get(P).__webglFramebuffer:null;Bt.bindFramebuffer(it.FRAMEBUFFER,Yt)}}},this.copyFramebufferToTexture=function(C,Z,ot=0){const ct=Math.pow(2,-ot),at=Math.floor(Z.image.width*ct),Ct=Math.floor(Z.image.height*ct);O.setTexture2D(Z,0),it.copyTexSubImage2D(it.TEXTURE_2D,ot,0,0,C.x,C.y,at,Ct),Bt.unbindTexture()},this.copyTextureToTexture=function(C,Z,ot,ct=0){const at=Z.image.width,Ct=Z.image.height,zt=Lt.convert(ot.format),Wt=Lt.convert(ot.type);O.setTexture2D(ot,0),it.pixelStorei(it.UNPACK_FLIP_Y_WEBGL,ot.flipY),it.pixelStorei(it.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),it.pixelStorei(it.UNPACK_ALIGNMENT,ot.unpackAlignment),Z.isDataTexture?it.texSubImage2D(it.TEXTURE_2D,ct,C.x,C.y,at,Ct,zt,Wt,Z.image.data):Z.isCompressedTexture?it.compressedTexSubImage2D(it.TEXTURE_2D,ct,C.x,C.y,Z.mipmaps[0].width,Z.mipmaps[0].height,zt,Z.mipmaps[0].data):it.texSubImage2D(it.TEXTURE_2D,ct,C.x,C.y,zt,Wt,Z.image),ct===0&&ot.generateMipmaps&&it.generateMipmap(it.TEXTURE_2D),Bt.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,ot,ct,at=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=C.max.x-C.min.x+1,zt=C.max.y-C.min.y+1,Wt=C.max.z-C.min.z+1,Yt=Lt.convert(ct.format),It=Lt.convert(ct.type);let $t;if(ct.isData3DTexture)O.setTexture3D(ct,0),$t=it.TEXTURE_3D;else if(ct.isDataArrayTexture||ct.isCompressedArrayTexture)O.setTexture2DArray(ct,0),$t=it.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}it.pixelStorei(it.UNPACK_FLIP_Y_WEBGL,ct.flipY),it.pixelStorei(it.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ct.premultiplyAlpha),it.pixelStorei(it.UNPACK_ALIGNMENT,ct.unpackAlignment);const te=it.getParameter(it.UNPACK_ROW_LENGTH),be=it.getParameter(it.UNPACK_IMAGE_HEIGHT),Je=it.getParameter(it.UNPACK_SKIP_PIXELS),$e=it.getParameter(it.UNPACK_SKIP_ROWS),ei=it.getParameter(it.UNPACK_SKIP_IMAGES),Be=ot.isCompressedTexture?ot.mipmaps[at]:ot.image;it.pixelStorei(it.UNPACK_ROW_LENGTH,Be.width),it.pixelStorei(it.UNPACK_IMAGE_HEIGHT,Be.height),it.pixelStorei(it.UNPACK_SKIP_PIXELS,C.min.x),it.pixelStorei(it.UNPACK_SKIP_ROWS,C.min.y),it.pixelStorei(it.UNPACK_SKIP_IMAGES,C.min.z),ot.isDataTexture||ot.isData3DTexture?it.texSubImage3D($t,at,Z.x,Z.y,Z.z,Ct,zt,Wt,Yt,It,Be.data):ot.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),it.compressedTexSubImage3D($t,at,Z.x,Z.y,Z.z,Ct,zt,Wt,Yt,Be.data)):it.texSubImage3D($t,at,Z.x,Z.y,Z.z,Ct,zt,Wt,Yt,It,Be),it.pixelStorei(it.UNPACK_ROW_LENGTH,te),it.pixelStorei(it.UNPACK_IMAGE_HEIGHT,be),it.pixelStorei(it.UNPACK_SKIP_PIXELS,Je),it.pixelStorei(it.UNPACK_SKIP_ROWS,$e),it.pixelStorei(it.UNPACK_SKIP_IMAGES,ei),at===0&&ct.generateMipmaps&&it.generateMipmap($t),Bt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),Bt.unbindTexture()},this.resetState=function(){k=0,I=0,P=null,Bt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===jh?"display-p3":"srgb",i.unpackColorSpace=Ne.workingColorSpace===zc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Sn?xs:Rv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xs?Sn:aa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class EA extends Fc{}EA.prototype.isWebGL1Renderer=!0;class Qh extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class TA{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new Y;class Uc{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix4(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyNormalMatrix(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.transformDirection(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}setX(e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=na(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=na(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=na(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=na(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array),l=Pe(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e=e*this.data.stride+this.offset,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array),l=Pe(l,this.array),u=Pe(u,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=u,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new pi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kv extends Ss{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _r;const Uo=new Y,vr=new Y,xr=new Y,yr=new ae,No=new ae,Qv=new Ke,yc=new Y,Oo=new Y,Sc=new Y,fv=new ae,Ch=new ae,hv=new ae;class bA extends mn{constructor(e=new Kv){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new mi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new TA(i,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new Uc(s,3,0,!1)),_r.setAttribute("uv",new Uc(s,2,3,!1))}this.geometry=_r,this.material=e,this.center=new ae(.5,.5)}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),Qv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-xr.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const d=this.center;Mc(yc.set(-.5,-.5,0),xr,d,vr,l,u),Mc(Oo.set(.5,-.5,0),xr,d,vr,l,u),Mc(Sc.set(.5,.5,0),xr,d,vr,l,u),fv.set(0,0),Ch.set(1,0),hv.set(1,1);let h=e.ray.intersectTriangle(yc,Oo,Sc,!1,Uo);if(h===null&&(Mc(Oo.set(-.5,.5,0),xr,d,vr,l,u),Ch.set(0,1),h=e.ray.intersectTriangle(yc,Sc,Oo,!1,Uo),h===null))return;const m=e.ray.origin.distanceTo(Uo);m<e.near||m>e.far||i.push({distance:m,point:Uo.clone(),uv:hi.getInterpolation(Uo,yc,Oo,Sc,fv,Ch,hv,new ae),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Mc(o,e,i,s,l,u){yr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(No.x=u*yr.x-l*yr.y,No.y=l*yr.x+u*yr.y):No.copy(yr),o.copy(e),o.x+=No.x,o.y+=No.y,o.applyMatrix4(Qv)}class Jv extends Ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dv=new Ke,Vh=new Ov,Ec=new Pc,Tc=new Y;class AA extends mn{constructor(e=new mi,i=new Jv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=u,e.ray.intersectsSphere(Ec)===!1)return;dv.copy(l).invert(),Vh.copy(e.ray).applyMatrix4(dv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,x=s.attributes.position;if(p!==null){const y=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let b=y,T=M;b<T;b++){const S=p.getX(b);Tc.fromBufferAttribute(x,S),pv(Tc,S,m,l,e,i,this)}}else{const y=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let b=y,T=M;b<T;b++)Tc.fromBufferAttribute(x,b),pv(Tc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function pv(o,e,i,s,l,u,d){const h=Vh.distanceSqToPoint(o);if(h<i){const m=new Y;Vh.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,object:d})}}class RA extends Xn{constructor(e,i,s,l,u,d,h,m,p){super(e,i,s,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jh extends mi{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],d=[];h(l),p(s),g(),this.setAttribute("position",new ti(u,3)),this.setAttribute("normal",new ti(u.slice(),3)),this.setAttribute("uv",new ti(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const A=new Y,U=new Y,k=new Y;for(let I=0;I<i.length;I+=3)M(i[I+0],A),M(i[I+1],U),M(i[I+2],k),m(A,U,k,D)}function m(D,A,U,k){const I=k+1,P=[];for(let lt=0;lt<=I;lt++){P[lt]=[];const R=D.clone().lerp(U,lt/I),L=A.clone().lerp(U,lt/I),rt=I-lt;for(let nt=0;nt<=rt;nt++)nt===0&&lt===I?P[lt][nt]=R:P[lt][nt]=R.clone().lerp(L,nt/rt)}for(let lt=0;lt<I;lt++)for(let R=0;R<2*(I-lt)-1;R++){const L=Math.floor(R/2);R%2===0?(y(P[lt][L+1]),y(P[lt+1][L]),y(P[lt][L])):(y(P[lt][L+1]),y(P[lt+1][L+1]),y(P[lt+1][L]))}}function p(D){const A=new Y;for(let U=0;U<u.length;U+=3)A.x=u[U+0],A.y=u[U+1],A.z=u[U+2],A.normalize().multiplyScalar(D),u[U+0]=A.x,u[U+1]=A.y,u[U+2]=A.z}function g(){const D=new Y;for(let A=0;A<u.length;A+=3){D.x=u[A+0],D.y=u[A+1],D.z=u[A+2];const U=S(D)/2/Math.PI+.5,k=_(D)/Math.PI+.5;d.push(U,1-k)}b(),x()}function x(){for(let D=0;D<d.length;D+=6){const A=d[D+0],U=d[D+2],k=d[D+4],I=Math.max(A,U,k),P=Math.min(A,U,k);I>.9&&P<.1&&(A<.2&&(d[D+0]+=1),U<.2&&(d[D+2]+=1),k<.2&&(d[D+4]+=1))}}function y(D){u.push(D.x,D.y,D.z)}function M(D,A){const U=D*3;A.x=e[U+0],A.y=e[U+1],A.z=e[U+2]}function b(){const D=new Y,A=new Y,U=new Y,k=new Y,I=new ae,P=new ae,lt=new ae;for(let R=0,L=0;R<u.length;R+=9,L+=6){D.set(u[R+0],u[R+1],u[R+2]),A.set(u[R+3],u[R+4],u[R+5]),U.set(u[R+6],u[R+7],u[R+8]),I.set(d[L+0],d[L+1]),P.set(d[L+2],d[L+3]),lt.set(d[L+4],d[L+5]),k.copy(D).add(A).add(U).divideScalar(3);const rt=S(k);T(I,L+0,D,rt),T(P,L+2,A,rt),T(lt,L+4,U,rt)}}function T(D,A,U,k){k<0&&D.x===1&&(d[A]=D.x-1),U.x===0&&U.z===0&&(d[A]=k/2/Math.PI+.5)}function S(D){return Math.atan2(D.z,-D.x)}function _(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.vertices,e.indices,e.radius,e.details)}}class Nc extends Jh{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Nc(e.radius,e.detail)}}class $h extends mi{constructor(e=1,i=.4,s=64,l=8,u=2,d=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:s,radialSegments:l,p:u,q:d},s=Math.floor(s),l=Math.floor(l);const h=[],m=[],p=[],g=[],x=new Y,y=new Y,M=new Y,b=new Y,T=new Y,S=new Y,_=new Y;for(let A=0;A<=s;++A){const U=A/s*u*Math.PI*2;D(U,u,d,e,M),D(U+.01,u,d,e,b),S.subVectors(b,M),_.addVectors(b,M),T.crossVectors(S,_),_.crossVectors(T,S),T.normalize(),_.normalize();for(let k=0;k<=l;++k){const I=k/l*Math.PI*2,P=-i*Math.cos(I),lt=i*Math.sin(I);x.x=M.x+(P*_.x+lt*T.x),x.y=M.y+(P*_.y+lt*T.y),x.z=M.z+(P*_.z+lt*T.z),m.push(x.x,x.y,x.z),y.subVectors(x,M).normalize(),p.push(y.x,y.y,y.z),g.push(A/s),g.push(k/l)}}for(let A=1;A<=s;A++)for(let U=1;U<=l;U++){const k=(l+1)*(A-1)+(U-1),I=(l+1)*A+(U-1),P=(l+1)*A+U,lt=(l+1)*(A-1)+U;h.push(k,I,lt),h.push(I,P,lt)}this.setIndex(h),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(p,3)),this.setAttribute("uv",new ti(g,2));function D(A,U,k,I,P){const lt=Math.cos(A),R=Math.sin(A),L=k/U*A,rt=Math.cos(L);P.x=I*(2+rt)*.5*lt,P.y=I*(2+rt)*R*.5,P.z=I*Math.sin(L)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class wA extends Ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wv,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class CA extends wA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $v extends mn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const Lh=new Ke,mv=new Y,gv=new Y;class LA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;mv.setFromMatrixPosition(e.matrixWorld),i.position.copy(mv),gv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(gv),i.updateMatrixWorld(),Lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DA extends LA{constructor(){super(new Xv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bo extends $v{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new DA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class t0 extends $v{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);function UA(){const o=Nn.useRef(null);return Nn.useEffect(()=>{const e=o.current;if(!e)return;const i=new Qh,s=new Gn(45,1,.1,100);s.position.z=5;const l=new Fc({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);function u(){const I=e.clientWidth,P=e.clientHeight;l.setSize(I,P),s.aspect=I/P,s.updateProjectionMatrix()}u();const d=new ResizeObserver(u);d.observe(e),i.add(new t0(16777215,.3));const h=new Bo(16777215,1.2);h.position.set(3,4,5),i.add(h);const m=new Bo(16731438,2);m.position.set(-4,2,-3),i.add(m);const p=new Bo(8150271,1.5);p.position.set(4,-2,-3),i.add(p);const g={uTime:{value:0},uIntensity:{value:.8},uAccent:{value:new de(16731438)},uAccent2:{value:new de(8150271)}},x=`
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vDistort;
      uniform float uTime;
      uniform float uIntensity;

      vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
      vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
      vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
      float snoise(vec3 v){
        const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
        vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
        vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
        vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
        i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
        float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
        vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
        vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
        vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
        vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
        vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
        vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
        vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
        p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
        vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
        return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
      }

      void main(){
        vNormal=normalize(normalMatrix*normal);
        float n=snoise(position*1.2+uTime*.25);
        float n2=snoise(position*2.5+uTime*.1)*.3;
        float distort=(n+n2)*uIntensity;
        vDistort=distort;
        vec3 newPos=position+normal*distort*.35;
        vPosition=newPos;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(newPos,1.);
      }
    `,y=`
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vDistort;
      uniform vec3 uAccent;
      uniform vec3 uAccent2;
      uniform float uTime;

      void main(){
        vec3 n=normalize(vNormal);
        vec3 viewDir=normalize(-vPosition);
        float fres=pow(1.-max(dot(n,viewDir),0.),2.);
        vec3 base=mix(vec3(.04,.04,.05),vec3(.08,.08,.1),n.y*.5+.5);
        float mixT=n.x*.5+.5+sin(uTime*.5)*.1;
        vec3 acc=mix(uAccent,uAccent2,mixT);
        vec3 color=mix(base,acc,fres*.9);
        color+=acc*pow(max(vDistort+.5,0.),2.)*.15;
        gl_FragColor=vec4(color,1.);
      }
    `,M=new Wa({uniforms:g,vertexShader:x,fragmentShader:y}),b=new bi(new $h(.95,.32,220,32),M);i.add(b);let T=0,S=0,_=0,D=0;const A=I=>{S=(I.clientX/window.innerWidth-.5)*.6,T=(I.clientY/window.innerHeight-.5)*.6};window.addEventListener("mousemove",A);let U;function k(){U=requestAnimationFrame(k),g.uTime.value+=.01;const I=getComputedStyle(document.documentElement);g.uAccent.value.set(I.getPropertyValue("--accent").trim()),g.uAccent2.value.set(I.getPropertyValue("--accent-2").trim()),b.rotation.y+=.003,b.rotation.x+=.0015,_+=(T-_)*.05,D+=(S-D)*.05,s.position.x=D*.6,s.position.y=-_*.4,s.lookAt(0,0,0),l.render(i,s)}return k(),()=>{cancelAnimationFrame(U),d.disconnect(),window.removeEventListener("mousemove",A),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),z.jsx("div",{ref:o,style:{position:"absolute",inset:0,zIndex:0,overflow:"hidden"}})}function NA(){return z.jsxs("section",{className:"hero",children:[z.jsx(UA,{}),z.jsxs("div",{className:"hero-text",children:[z.jsxs("div",{className:"hero-meta",children:[z.jsxs("span",{children:[z.jsx("span",{className:"dash",children:"— "}),"Full-stack Developer"]}),z.jsxs("span",{children:[z.jsx("span",{className:"dash",children:"— "}),"Remote · India"]}),z.jsxs("span",{children:[z.jsx("span",{className:"dash",children:"— "}),"V1.26 · 001"]})]}),z.jsxs("h1",{className:"hero-title",children:[z.jsx("div",{className:"line",children:z.jsx("span",{children:"Building the"})}),z.jsx("div",{className:"line",children:z.jsxs("span",{children:[z.jsx("span",{className:"gradient-text",children:"quiet"})," web",z.jsx("span",{className:"arrow",children:"↗"})]})}),z.jsx("div",{className:"line",children:z.jsx("span",{children:"one craft at a time."})})]}),z.jsxs("div",{className:"hero-bottom",children:[z.jsx("p",{children:"Full-stack developer building fast, modern websites for founders. Currently building a construction-estimator platform and open for more work."}),z.jsxs("div",{children:[z.jsx("div",{className:"hero-bottom-label",children:"Current Focus"}),z.jsx("div",{className:"hero-bottom-value",children:"React · TypeScript · Node"})]}),z.jsxs("div",{children:[z.jsx("div",{className:"hero-bottom-label",children:"Availability"}),z.jsx("div",{className:"hero-bottom-value accent",children:"Mon–Fri · Remote"})]})]})]}),z.jsx("div",{className:"scroll-cue",children:"scroll"})]})}const OA=["Design","Develop","Ship","Iterate","Design","Develop","Ship","Iterate"];function zA(){return z.jsx("div",{className:"marquee",children:z.jsx("div",{className:"marquee-track",children:OA.map((o,e)=>z.jsxs("span",{children:[z.jsx("span",{className:`item${e%2===1?" alt":""}`,children:o}),z.jsx("span",{className:"item star",children:"✦"})]},e))})})}const PA=[{num:"3+",lbl:`Years building
web products`},{num:"5",lbl:`Projects shipped
in production`},{num:"∞",lbl:`Pixels moved
by 1px`}];function BA(){return z.jsxs("section",{id:"about",className:"section",children:[z.jsxs("div",{className:"section-label",children:[z.jsx("span",{className:"dot"}),z.jsx("span",{className:"num",children:"01 /"})," About"]}),z.jsxs("div",{className:"about-grid",children:[z.jsxs("div",{className:"about-heading",children:["A developer",z.jsx("br",{}),"with ",z.jsx("em",{children:"taste."})]}),z.jsxs("div",{className:"about-body",children:[z.jsx("p",{children:"I'm Naveen — a full-stack developer who designs and ships modern web apps end-to-end. From first wireframe to production deploy, I own the stack: interfaces people love to use, APIs that stay out of the way, and codebases your next hire will thank you for."}),z.jsx("p",{children:"I deliver marketing sites, dashboards, internal tools, and MVPs — with clean architecture, accessible interactions, and the kind of attention to detail that makes a product feel considered. If you want something that looks and performs a cut above — let's talk."}),z.jsx("div",{className:"about-stats",children:PA.map(o=>z.jsxs("div",{children:[z.jsx("div",{className:"stat-num",children:o.num}),z.jsx("div",{className:"stat-lbl",children:o.lbl})]},o.num))})]})]})]})}const IA=[{idx:"(s-01)",title:`Marketing sites
that convert.`,desc:"High-intent landing pages and full marketing sites for early-stage startups. Designed to load in under a second and actually move the needle.",tags:["React","TypeScript","Tailwind","SEO-ready"]},{idx:"(s-02)",title:`Web apps
& dashboards.`,desc:"Full-stack SaaS products, admin panels, internal tools. Auth, roles, realtime — the whole thing. From design to a shipped product on your domain.",tags:["React","Node","Postgres","MongoDB"]},{idx:"(s-03)",title:`Interactive
experiences.`,desc:"Where most devs stop, I start. 3D elements, scroll-driven stories, custom cursors, micro-interactions — the details that make your site feel alive.",tags:["React","WebGL","Motion","Shaders"]},{idx:"(s-04)",title:`MVPs, APIs
& backends.`,desc:"Need to ship an MVP fast, or build a solid backend under an existing product? I design the data model, build the API, and wire it all the way through.",tags:["Express","REST","PostgreSQL","MongoDB"]}];function FA(){return z.jsxs("section",{id:"services",className:"section",children:[z.jsxs("div",{className:"section-label",children:[z.jsx("span",{className:"dot"}),z.jsx("span",{className:"num",children:"02 /"})," What I do"]}),z.jsx("div",{className:"services-grid",children:IA.map(o=>z.jsxs("div",{className:"service","data-cursor":"hover",children:[z.jsx("div",{className:"service-idx",children:o.idx}),z.jsx("h3",{children:o.title}),z.jsx("p",{children:o.desc}),z.jsx("div",{className:"service-tags",children:o.tags.map(e=>z.jsx("span",{children:e},e))}),z.jsx("svg",{className:"arrow-corner",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:z.jsx("path",{d:"M7 17L17 7M17 7H9M17 7V15"})})]},o.idx))})]})}function HA(){const o=Nn.useRef(null);return Nn.useEffect(()=>{const e=o.current;if(!e)return;const i=new Qh,s=new Gn(45,1,.1,100);s.position.z=7;const l=new Fc({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);function u(){const R=e.clientWidth,L=e.clientHeight;l.setSize(R,L),s.aspect=R/L,s.updateProjectionMatrix()}u(),window.addEventListener("resize",u),i.add(new t0(16777215,.5));const d=new Bo(16777215,1);d.position.set(2,3,4),i.add(d);const h=new Bo(8150271,1);h.position.set(-3,-2,3),i.add(h);const m=new bi(new Nc(1.2,2),new CA({color:657931,metalness:.4,roughness:.25,clearcoat:1,clearcoatRoughness:.1,reflectivity:.8})),p=new bi(new Nc(1.22,1),new qh({color:8150271,wireframe:!0,transparent:!0,opacity:.35})),g=["React","TypeScript","Node.js","Express","PostgreSQL","MongoDB","Tailwind","Claude","Claude Design"];function x(R,L){const rt=document.createElement("canvas");rt.width=256,rt.height=128;const nt=rt.getContext("2d"),yt=24,X=8,$=8,B=240,j=112;nt.fillStyle="#111113",nt.beginPath(),nt.moveTo(X+yt,$),nt.arcTo(X+B,$,X+B,$+j,yt),nt.arcTo(X+B,$+j,X,$+j,yt),nt.arcTo(X,$+j,X,$,yt),nt.arcTo(X,$,X+B,$,yt),nt.closePath(),nt.fill(),nt.strokeStyle=L,nt.lineWidth=2,nt.stroke(),nt.fillStyle="#f5f5f0",nt.font="600 44px Geist, sans-serif",nt.textAlign="center",nt.textBaseline="middle",nt.fillText(R,128,64),nt.fillStyle=L,nt.beginPath(),nt.arc(32,32,6,0,Math.PI*2),nt.fill();const tt=new RA(rt);return tt.anisotropy=4,tt}const y=[];g.forEach((R,L)=>{const rt=new Kv({map:x(R,L%2===0?"#ff4d2e":"#7c5cff"),transparent:!0}),nt=new bA(rt);nt.scale.set(1.3,.65,1);const yt=2/g.length,X=L*yt-1+yt/2,$=Math.sqrt(1-X*X),B=L*Math.PI*(3-Math.sqrt(5));nt.position.set(Math.cos(B)*$*2.9,X*2.9,Math.sin(B)*$*2.9),nt.userData.phase=Math.random()*Math.PI*2,y.push(nt)});const M=new zo;i.add(M),y.forEach(R=>M.add(R)),M.add(m),M.add(p);let b=!1,T=0,S=0,_=0,D=0;const A=R=>{b=!0,T=R.clientX,S=R.clientY},U=()=>{b=!1},k=R=>{b&&(_+=(R.clientX-T)*.005,D+=(R.clientY-S)*.005,T=R.clientX,S=R.clientY)};e.addEventListener("pointerdown",A),window.addEventListener("pointerup",U),window.addEventListener("pointermove",k);let I=0,P;function lt(){P=requestAnimationFrame(lt),I+=.01,b||(_+=.003),M.rotation.y=_,M.rotation.x=Math.max(-.7,Math.min(.7,D)),y.forEach(R=>{const L=1+Math.sin(I+R.userData.phase)*.08;R.scale.set(1.3*L,.65*L,1)}),l.render(i,s)}return lt(),()=>{cancelAnimationFrame(P),window.removeEventListener("resize",u),e.removeEventListener("pointerdown",A),window.removeEventListener("pointerup",U),window.removeEventListener("pointermove",k),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),z.jsx("div",{ref:o,style:{width:"100%",height:"100%",position:"absolute",inset:0}})}const GA=[{name:"React",cat:"UI"},{name:"TypeScript",cat:"language"},{name:"Tailwind",cat:"styles"},{name:"Node.js",cat:"runtime"},{name:"Express",cat:"backend"},{name:"PostgreSQL",cat:"database"},{name:"MongoDB",cat:"database"},{name:"REST APIs",cat:"integration"},{name:"Claude",cat:"AI pair"},{name:"Claude Design",cat:"AI design"},{name:"Git",cat:"version"},{name:"WebSockets",cat:"realtime"}];function VA(){return z.jsxs("section",{id:"stack",className:"section",children:[z.jsxs("div",{className:"section-label",children:[z.jsx("span",{className:"dot"}),z.jsx("span",{className:"num",children:"03 /"})," Tech stack"]}),z.jsxs("div",{className:"stack-grid",children:[z.jsx("div",{className:"stack-canvas-wrap",children:z.jsx(HA,{})}),z.jsxs("div",{className:"stack-copy",children:[z.jsxs("h2",{children:["Modern tools,",z.jsx("br",{}),"handpicked.",z.jsx("em",{children:"*"})]}),z.jsx("p",{children:"I stay picky about what I use so you don't have to. Every tool here has earned its place through a dozen shipped projects. Drag the sphere."}),z.jsx("div",{className:"stack-list",children:GA.map((o,e)=>z.jsxs("div",{className:`stack-list-row ${e%2===0?"odd":"even"}`,children:[z.jsx("span",{children:o.name}),z.jsx("span",{className:"cat",children:o.cat})]},o.name))})]})]})]})}const XA=[{size:"feat",thumb:"aurora",metaLeft:"01 · Current client",status:"● In Progress · 2026",statusColor:"#ffb800",statusBorder:"rgba(255,184,0,0.4)",title:"EmpireConstruction",sub:"Website + construction estimator tool · React · Node · Postgres",svg:z.jsxs("svg",{viewBox:"0 0 220 140",fill:"none",children:[z.jsx("rect",{x:"10",y:"10",width:"200",height:"120",rx:"6",stroke:"white",strokeOpacity:"0.5",strokeWidth:"1"}),z.jsx("rect",{x:"20",y:"22",width:"70",height:"10",rx:"2",fill:"white",fillOpacity:"0.85"}),z.jsx("rect",{x:"20",y:"38",width:"110",height:"4",rx:"2",fill:"white",fillOpacity:"0.35"}),z.jsx("rect",{x:"20",y:"48",width:"80",height:"4",rx:"2",fill:"white",fillOpacity:"0.35"}),z.jsx("rect",{x:"20",y:"68",width:"180",height:"1",fill:"white",fillOpacity:"0.3"}),z.jsx("rect",{x:"20",y:"78",width:"44",height:"14",rx:"2",fill:"white",fillOpacity:"0.15"}),z.jsx("rect",{x:"66",y:"78",width:"44",height:"14",rx:"2",fill:"white",fillOpacity:"0.15"}),z.jsx("rect",{x:"112",y:"78",width:"44",height:"14",rx:"2",fill:"#ff4d2e"}),z.jsx("text",{x:"134",y:"89",fill:"white",fontFamily:"monospace",fontSize:"7",textAnchor:"middle",fontWeight:"600",children:"ESTIMATE"}),z.jsx("rect",{x:"20",y:"100",width:"180",height:"22",rx:"3",fill:"white",fillOpacity:"0.08"}),z.jsx("text",{x:"28",y:"114",fill:"white",fontFamily:"monospace",fontSize:"7",fillOpacity:"0.7",children:"PROJECT TOTAL"}),z.jsx("text",{x:"192",y:"114",fill:"white",fontFamily:"monospace",fontSize:"9",textAnchor:"end",fontWeight:"700",children:"$248,500"})]})},{size:"small",thumb:"warm",metaLeft:"02 · Zeb",status:"2025–26",title:"Lynxis",sub:"Shipping & Rail Terminal · 10K users",svg:z.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[z.jsx("rect",{x:"18",y:"24",width:"64",height:"52",rx:"3",stroke:"white",strokeOpacity:"0.7",strokeWidth:"1"}),z.jsx("rect",{x:"24",y:"30",width:"52",height:"12",rx:"1",fill:"white",fillOpacity:"0.15"}),z.jsx("rect",{x:"28",y:"34",width:"20",height:"3",rx:"1.5",fill:"white",fillOpacity:"0.7"}),z.jsx("rect",{x:"24",y:"46",width:"24",height:"26",rx:"1",fill:"white",fillOpacity:"0.1"}),z.jsx("rect",{x:"52",y:"46",width:"24",height:"12",rx:"1",fill:"white",fillOpacity:"0.1"}),z.jsx("rect",{x:"52",y:"60",width:"24",height:"12",rx:"1",fill:"white"})]})},{size:"wide",thumb:"cool",metaLeft:"03 · AVASOFT",status:"2024",title:"Pulse",sub:"Application assessment tool · React · PDF export",svg:z.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[z.jsx("rect",{x:"20",y:"20",width:"60",height:"60",rx:"4",stroke:"white",strokeOpacity:"0.6",strokeWidth:"1"}),z.jsx("rect",{x:"26",y:"26",width:"30",height:"4",rx:"2",fill:"white",fillOpacity:"0.8"}),z.jsx("rect",{x:"26",y:"34",width:"48",height:"22",rx:"2",fill:"#7c5cff",fillOpacity:"0.25",stroke:"#7c5cff",strokeWidth:"0.8"}),z.jsx("path",{d:"M30 48 L38 42 L46 50 L54 40 L62 46 L70 38",stroke:"#7c5cff",strokeWidth:"1.2",fill:"none"}),z.jsx("rect",{x:"26",y:"62",width:"14",height:"12",rx:"1",fill:"white",fillOpacity:"0.15"}),z.jsx("rect",{x:"43",y:"62",width:"14",height:"12",rx:"1",fill:"white",fillOpacity:"0.15"}),z.jsx("rect",{x:"60",y:"62",width:"14",height:"12",rx:"1",fill:"white",fillOpacity:"0.15"})]})},{size:"wide",thumb:"iso",metaLeft:"04 · AVASOFT",status:"2024",title:"RACPAD",sub:"Rent-A-Center · React refactor · 200K→50K LOC",svg:z.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[z.jsx("text",{x:"50",y:"42",fill:"white",fillOpacity:"0.9",fontFamily:"monospace",fontSize:"11",textAnchor:"middle",fontWeight:"700",children:"1M USERS"}),z.jsx("text",{x:"50",y:"56",fill:"#ff4d2e",fontFamily:"monospace",fontSize:"7",textAnchor:"middle",children:"2,000 STORES"}),z.jsx("rect",{x:"20",y:"64",width:"60",height:"2",rx:"1",fill:"white",fillOpacity:"0.2"}),z.jsx("rect",{x:"20",y:"64",width:"45",height:"2",rx:"1",fill:"#ff4d2e"}),z.jsx("text",{x:"50",y:"76",fill:"white",fillOpacity:"0.5",fontFamily:"monospace",fontSize:"6",textAnchor:"middle",children:"200K → 50K LOC"})]})},{size:"small",thumb:"mono",metaLeft:"05 · AVASOFT",status:"2023",title:"Hive",sub:"Employee assessment · React + Node + Lambda",svg:z.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[z.jsx("circle",{cx:"50",cy:"40",r:"12",stroke:"white",strokeOpacity:"0.7",strokeWidth:"1.2"}),z.jsx("circle",{cx:"50",cy:"40",r:"4",fill:"white",fillOpacity:"0.9"}),z.jsx("rect",{x:"30",y:"62",width:"40",height:"2",rx:"1",fill:"white",fillOpacity:"0.4"}),z.jsx("rect",{x:"30",y:"68",width:"28",height:"2",rx:"1",fill:"white",fillOpacity:"0.4"}),z.jsx("rect",{x:"30",y:"74",width:"34",height:"2",rx:"1",fill:"white",fillOpacity:"0.4"})]})}];function kA(){return z.jsxs("section",{id:"work",className:"section",children:[z.jsxs("div",{className:"section-label",children:[z.jsx("span",{className:"dot"}),z.jsx("span",{className:"num",children:"04 /"})," Selected work"]}),z.jsxs("div",{className:"projects-head",children:[z.jsxs("h2",{children:["Things",z.jsx("br",{}),"I've ",z.jsx("em",{children:"shipped."})]}),z.jsx("div",{className:"projects-count",children:"5 projects · 2023 — 2026"})]}),z.jsx("p",{style:{fontFamily:"var(--mono)",fontSize:12,color:"var(--fg-dim)",maxWidth:640,marginBottom:48,lineHeight:1.6},children:"A mix of current freelance work and select projects from my time at Zeb and AVASOFT."}),z.jsx("div",{className:"projects-grid",children:XA.map((o,e)=>z.jsxs("div",{className:`project ${o.size}`,"data-cursor":"hover",onMouseLeave:i=>{i.currentTarget.style.transform=""},onMouseMove:i=>{const s=i.currentTarget,l=s.getBoundingClientRect(),u=(i.clientX-l.left)/l.width-.5,d=(i.clientY-l.top)/l.height-.5;s.style.transform=`perspective(800px) rotateX(${-d*4}deg) rotateY(${u*4}deg)`},children:[z.jsx("div",{className:`project-thumb thumb-${o.thumb}`,children:z.jsx("div",{className:"project-thumb-icon",children:o.svg})}),z.jsxs("div",{className:"project-overlay",children:[z.jsxs("div",{className:"project-meta-top",children:[z.jsx("span",{children:o.metaLeft}),z.jsx("span",{className:"status-pill",style:o.statusColor?{color:o.statusColor,borderColor:o.statusBorder}:void 0,children:o.status})]}),z.jsxs("div",{className:"project-title-block",children:[z.jsx("h3",{children:o.title}),z.jsx("div",{className:"project-sub",children:o.sub})]})]})]},e))})]})}const WA=[{period:`Sep 2025 —
Feb 2026`,years:"6 mos",role:"Senior Software Engineer",company:"Zeb",type:"Full-time",location:"Chennai, India · On-site",desc:"Led a frontend team of 5, focused on a client-facing logistics platform. Owned the frontend architecture and coding standards across React, JavaScript, and TypeScript applications — significantly improving maintainability and scalability.",achievements:["Ran regular code reviews and mentored developers on best practices, lifting overall engineering standards.","Led advanced UI features including dashboards and live-update modules, improving UX and operational efficiency.","Coordinated full-stack development efforts, ensuring seamless integration with backend services and REST APIs."]},{period:`Feb 2023 —
Aug 2025`,years:"2 yrs 7 mos",role:"Software Engineer",company:"AVASOFT",type:"Full-time",location:"Chennai, India",desc:"Built and maintained complex web applications with React, TypeScript, HTML, and CSS. Developed REST APIs using Node.js and Express.js for business workflows and reporting, wrote Jest unit tests for reliability, and drove Agile/Scrum delivery with CI/CD.",achievements:["Shipped multiple enterprise applications, improving functionality and user experience across product lines.","Drove performance work via code refactoring and lazy loading — measurably faster, more maintainable apps.","Resolved stubborn UI/API issues, collaborating with DevOps for smooth production releases."]}];function jA(){return z.jsxs("section",{id:"experience",className:"section",children:[z.jsxs("div",{className:"section-label",children:[z.jsx("span",{className:"dot"}),z.jsx("span",{className:"num",children:"05 /"})," Experience"]}),z.jsxs("div",{className:"experience-grid",children:[z.jsxs("div",{className:"experience-heading",children:["Where I've",z.jsx("br",{}),z.jsx("em",{children:"built."})]}),z.jsx("div",{className:"exp-list",children:WA.map((o,e)=>z.jsxs("div",{className:"exp-item",children:[z.jsxs("div",{className:"exp-period",children:[o.period,z.jsx("span",{className:"exp-period-years",children:o.years})]}),z.jsxs("div",{children:[z.jsx("div",{className:"exp-role",children:o.role}),z.jsxs("div",{className:"exp-company",children:[z.jsx("span",{children:o.company}),z.jsx("span",{className:"sep",children:"·"}),z.jsx("span",{children:o.type}),z.jsx("span",{className:"sep",children:"·"}),z.jsx("span",{className:"loc",children:o.location})]}),z.jsx("p",{className:"exp-desc",children:o.desc}),z.jsx("ul",{className:"exp-achievements",children:o.achievements.map((i,s)=>z.jsx("li",{children:i},s))})]})]},e))})]})]})}const qA=[{k:"Typical engagement",v:"2–10 weeks"},{k:"Working hours",v:"Mon–Fri · IST"},{k:"Response time",v:"< 24 hours",green:!0},{k:"Working globally",v:"Yes"}];function YA(){return z.jsx("section",{className:"section",children:z.jsxs("div",{className:"callout-grid",children:[z.jsxs("div",{children:[z.jsxs("blockquote",{className:"callout-quote",children:[z.jsx("span",{className:"callout-quote-mark",children:'"'}),"I build things I'd want to ",z.jsx("em",{children:"use"})," — fast, clear, and quietly considered. No bloat, no trend-chasing, no surprises in the codebase."]}),z.jsxs("div",{className:"callout-attr",children:[z.jsx("div",{className:"callout-avatar"}),z.jsxs("div",{children:[z.jsx("div",{children:"Naveen · Full-stack Developer"}),z.jsx("div",{style:{color:"var(--fg-faint)",marginTop:2},children:"Freelance, 2026"})]})]})]}),z.jsx("div",{className:"callout-side",children:qA.map(o=>z.jsxs("div",{className:"callout-kv",children:[z.jsx("span",{className:"k",children:o.k}),z.jsx("span",{style:o.green?{color:"#00ff88"}:void 0,children:o.v})]},o.k))})]})})}function ZA(){const o=Nn.useRef(null);return Nn.useEffect(()=>{const e=o.current;if(!e)return;const i=new Qh,s=new Gn(50,1,.1,100);s.position.z=5;const l=new Fc({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);function u(){const S=e.clientWidth,_=e.clientHeight;l.setSize(S,_),s.aspect=S/_,s.updateProjectionMatrix()}u(),window.addEventListener("resize",u);const d=800,h=new mi,m=new Float32Array(d*3);for(let S=0;S<d;S++)m[S*3]=(Math.random()-.5)*14,m[S*3+1]=(Math.random()-.5)*8,m[S*3+2]=(Math.random()-.5)*10;h.setAttribute("position",new pi(m,3));const p=new Jv({color:16731438,size:.02,transparent:!0,opacity:.7}),g=new AA(h,p);i.add(g);let x=0,y=0;const M=S=>{x=(S.clientX/window.innerWidth-.5)*.5,y=(S.clientY/window.innerHeight-.5)*.5};window.addEventListener("mousemove",M);let b;function T(){b=requestAnimationFrame(T),g.rotation.y+=8e-4,g.rotation.x=y*.2,s.position.x+=(x-s.position.x)*.03,s.lookAt(0,0,0);const S=getComputedStyle(document.documentElement);p.color.set(S.getPropertyValue("--accent").trim()),l.render(i,s)}return T(),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",u),window.removeEventListener("mousemove",M),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),z.jsx("div",{ref:o,style:{position:"absolute",inset:0,zIndex:0,opacity:.5}})}const KA=["< $2K","$2K — $5K","$5K — $10K","$10K+","Not sure yet"],QA=["Marketing site / landing page","Web app / dashboard","E-commerce","Interactive / 3D experience","MVP for a startup","Backend / API","Maintenance & support","Something else"];function JA(){const[o,e]=Nn.useState(""),[i,s]=Nn.useState(""),[l,u]=Nn.useState(""),d=h=>{h.preventDefault();const m=new FormData(h.currentTarget),p=(m.get("name")||"").trim(),g=(m.get("email")||"").trim(),x=(m.get("message")||"").trim();if(!p||!g||!x){u("error"),s("Please fill in name, email and a message.");return}const y=encodeURIComponent(`New project inquiry — ${p}`),M=encodeURIComponent(`Name: ${p}
Email: ${g}
Company: ${m.get("company")||"—"}
Project type: ${m.get("project_type")||"—"}
Budget: ${o||"—"}

${x}`);window.location.href=`mailto:naveenjohnken@gmail.com?subject=${y}&body=${M}`,u("success"),s("Opening your mail client… if nothing happens, email naveenjohnken@gmail.com directly.")};return z.jsxs("section",{id:"contact",className:"contact-section",children:[z.jsx(ZA,{}),z.jsxs("div",{className:"contact-inner",children:[z.jsxs("div",{className:"section-label",children:[z.jsx("span",{className:"dot"}),z.jsx("span",{className:"num",children:"06 /"})," Let's build"]}),z.jsxs("h2",{className:"contact-heading",children:["Got an ",z.jsx("em",{children:"idea?"}),z.jsx("br",{}),"Let's ship it."]}),z.jsxs("div",{className:"contact-layout",children:[z.jsxs("form",{className:"contact-form",onSubmit:d,noValidate:!0,children:[z.jsxs("div",{className:"field",children:[z.jsxs("label",{children:["Your name ",z.jsx("span",{className:"req",children:"*"})]}),z.jsx("input",{type:"text",name:"name",placeholder:"Jane Doe",required:!0,"data-cursor":"hover"})]}),z.jsxs("div",{className:"field",children:[z.jsxs("label",{children:["Email ",z.jsx("span",{className:"req",children:"*"})]}),z.jsx("input",{type:"email",name:"email",placeholder:"you@company.com",required:!0,"data-cursor":"hover"})]}),z.jsxs("div",{className:"field",children:[z.jsx("label",{children:"Company / Project"}),z.jsx("input",{type:"text",name:"company",placeholder:"Optional","data-cursor":"hover"})]}),z.jsxs("div",{className:"field",children:[z.jsx("label",{children:"Project type"}),z.jsx("select",{name:"project_type","data-cursor":"hover",children:QA.map(h=>z.jsx("option",{children:h},h))})]}),z.jsxs("div",{className:"field",children:[z.jsx("label",{children:"Estimated budget (USD)"}),z.jsx("div",{className:"budget-pills",children:KA.map(h=>z.jsx("button",{type:"button","data-cursor":"hover",className:`budget-pill${o===h?" active":""}`,onClick:()=>e(h),children:h},h))})]}),z.jsxs("div",{className:"field",children:[z.jsxs("label",{children:["Tell me about your project ",z.jsx("span",{className:"req",children:"*"})]}),z.jsx("textarea",{name:"message",placeholder:"What are you building, what's the timeline, what does success look like?",required:!0,"data-cursor":"hover"})]}),z.jsxs("button",{type:"submit",className:"submit-btn","data-cursor":"hover",children:[z.jsx("span",{style:{width:8,height:8,background:"var(--bg)",borderRadius:"50%",display:"inline-block",flexShrink:0}}),"Send message",z.jsx("span",{children:"→"})]}),i&&z.jsx("div",{className:`form-status ${l}`,children:i})]}),z.jsxs("div",{children:[z.jsxs("div",{className:"contact-info-grid",children:[z.jsxs("div",{className:"contact-info-col",children:[z.jsx("div",{className:"label",children:"Email"}),z.jsx("a",{href:"mailto:naveenjohnken@gmail.com","data-cursor":"hover",children:"naveenjohnken@gmail.com"})]}),z.jsxs("div",{className:"contact-info-col",children:[z.jsx("div",{className:"label",children:"Socials"}),z.jsx("a",{href:"https://www.linkedin.com/in/naveen-j-322b86210/",target:"_blank",rel:"noopener","data-cursor":"hover",children:"LinkedIn ↗"})]}),z.jsxs("div",{className:"contact-info-col",children:[z.jsx("div",{className:"label",children:"Based in"}),z.jsx("p",{children:"India · Remote-first"}),z.jsx("p",{style:{color:"var(--fg-dim)"},children:"Working globally"})]}),z.jsxs("div",{className:"contact-info-col",children:[z.jsx("div",{className:"label",children:"Availability"}),z.jsx("p",{style:{color:"var(--accent)"},children:"Mon–Fri · IST"}),z.jsx("p",{style:{color:"var(--fg-dim)"},children:"Taking new work"})]})]}),z.jsxs("div",{className:"contact-next",children:[z.jsx("div",{className:"next-label",children:"What happens next"}),z.jsx("p",{children:"— I reply within 24 hours (weekdays)."}),z.jsx("p",{children:"— We jump on a 20-minute intro call to scope the project."}),z.jsx("p",{children:"— I send a quote + timeline within 3 business days."})]})]})]})]})]})}function $A(){const[o,e]=Nn.useState("—");return Nn.useEffect(()=>{function i(){const l=new Date,u=String(l.getHours()).padStart(2,"0"),d=String(l.getMinutes()).padStart(2,"0");e(`${u}:${d} IST · Available`)}i();const s=setInterval(i,3e4);return()=>clearInterval(s)},[]),z.jsxs("footer",{className:"footer",children:[z.jsx("div",{children:"© 2026 Naveen John Kennedy · Built with care"}),z.jsxs("div",{className:"footer-time",children:[z.jsx("span",{style:{width:6,height:6,background:"#00ff88",borderRadius:"50%",boxShadow:"0 0 6px #00ff88",display:"inline-block"}}),o]}),z.jsx("a",{href:"#",children:"↑ Back to top"})]})}function t1(){return z.jsxs(z.Fragment,{children:[z.jsx(gy,{}),z.jsx(_y,{}),z.jsx(NA,{}),z.jsx(zA,{}),z.jsx(BA,{}),z.jsx(FA,{}),z.jsx(VA,{}),z.jsx(kA,{}),z.jsx(jA,{}),z.jsx(YA,{}),z.jsx(JA,{}),z.jsx($A,{})]})}my.createRoot(document.getElementById("root")).render(z.jsx(Nn.StrictMode,{children:z.jsx(t1,{})}));

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Qf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function _y(){if(Vg)return Uo;Vg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var jg;function vy(){return jg||(jg=1,Qf.exports=_y()),Qf.exports}var D=vy(),Jf={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function xy(){if(Xg)return ee;Xg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function g(N,X,G){this.props=N,this.context=X,this.refs=S,this.updater=G||b}g.prototype.isReactComponent={},g.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function L(){}L.prototype=g.prototype;function E(N,X,G){this.props=N,this.context=X,this.refs=S,this.updater=G||b}var R=E.prototype=new L;R.constructor=E,T(R,g.prototype),R.isPureReactComponent=!0;var I=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},et=Object.prototype.hasOwnProperty;function C(N,X,G){var Q=G.ref;return{$$typeof:o,type:N,key:X,ref:Q!==void 0?Q:null,props:G}}function P(N,X){return C(N.type,X,N.props)}function ut(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function ht(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(G){return X[G]})}var Mt=/\/+/g;function k(N,X){return typeof N=="object"&&N!==null&&N.key!=null?ht(""+N.key):X.toString(36)}function K(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function F(N,X,G,Q,gt){var St=typeof N;(St==="undefined"||St==="boolean")&&(N=null);var Et=!1;if(N===null)Et=!0;else switch(St){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(N.$$typeof){case o:case e:Et=!0;break;case _:return Et=N._init,F(Et(N._payload),X,G,Q,gt)}}if(Et)return gt=gt(N),Et=Q===""?"."+k(N,0):Q,I(gt)?(G="",Et!=null&&(G=Et.replace(Mt,"$&/")+"/"),F(gt,X,G,"",function(Wt){return Wt})):gt!=null&&(ut(gt)&&(gt=P(gt,G+(gt.key==null||N&&N.key===gt.key?"":(""+gt.key).replace(Mt,"$&/")+"/")+Et)),X.push(gt)),1;Et=0;var Ft=Q===""?".":Q+":";if(I(N))for(var Ot=0;Ot<N.length;Ot++)Q=N[Ot],St=Ft+k(Q,Ot),Et+=F(Q,X,G,St,gt);else if(Ot=M(N),typeof Ot=="function")for(N=Ot.call(N),Ot=0;!(Q=N.next()).done;)Q=Q.value,St=Ft+k(Q,Ot++),Et+=F(Q,X,G,St,gt);else if(St==="object"){if(typeof N.then=="function")return F(K(N),X,G,Q,gt);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Et}function q(N,X,G){if(N==null)return N;var Q=[],gt=0;return F(N,Q,"","",function(St){return X.call(G,St,gt++)}),Q}function W(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(G){(N._status===0||N._status===-1)&&(N._status=1,N._result=G)},function(G){(N._status===0||N._status===-1)&&(N._status=2,N._result=G)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var ft=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ot={map:q,forEach:function(N,X,G){q(N,function(){X.apply(this,arguments)},G)},count:function(N){var X=0;return q(N,function(){X++}),X},toArray:function(N){return q(N,function(X){return X})||[]},only:function(N){if(!ut(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ee.Activity=v,ee.Children=ot,ee.Component=g,ee.Fragment=i,ee.Profiler=l,ee.PureComponent=E,ee.StrictMode=s,ee.Suspense=p,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ee.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},ee.cache=function(N){return function(){return N.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(N,X,G){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Q=T({},N.props),gt=N.key;if(X!=null)for(St in X.key!==void 0&&(gt=""+X.key),X)!et.call(X,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&X.ref===void 0||(Q[St]=X[St]);var St=arguments.length-2;if(St===1)Q.children=G;else if(1<St){for(var Et=Array(St),Ft=0;Ft<St;Ft++)Et[Ft]=arguments[Ft+2];Q.children=Et}return C(N.type,gt,Q)},ee.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ee.createElement=function(N,X,G){var Q,gt={},St=null;if(X!=null)for(Q in X.key!==void 0&&(St=""+X.key),X)et.call(X,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(gt[Q]=X[Q]);var Et=arguments.length-2;if(Et===1)gt.children=G;else if(1<Et){for(var Ft=Array(Et),Ot=0;Ot<Et;Ot++)Ft[Ot]=arguments[Ot+2];gt.children=Ft}if(N&&N.defaultProps)for(Q in Et=N.defaultProps,Et)gt[Q]===void 0&&(gt[Q]=Et[Q]);return C(N,St,gt)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(N){return{$$typeof:h,render:N}},ee.isValidElement=ut,ee.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:W}},ee.memo=function(N,X){return{$$typeof:m,type:N,compare:X===void 0?null:X}},ee.startTransition=function(N){var X=O.T,G={};O.T=G;try{var Q=N(),gt=O.S;gt!==null&&gt(G,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(B,ft)}catch(St){ft(St)}finally{X!==null&&G.types!==null&&(X.types=G.types),O.T=X}},ee.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ee.use=function(N){return O.H.use(N)},ee.useActionState=function(N,X,G){return O.H.useActionState(N,X,G)},ee.useCallback=function(N,X){return O.H.useCallback(N,X)},ee.useContext=function(N){return O.H.useContext(N)},ee.useDebugValue=function(){},ee.useDeferredValue=function(N,X){return O.H.useDeferredValue(N,X)},ee.useEffect=function(N,X){return O.H.useEffect(N,X)},ee.useEffectEvent=function(N){return O.H.useEffectEvent(N)},ee.useId=function(){return O.H.useId()},ee.useImperativeHandle=function(N,X,G){return O.H.useImperativeHandle(N,X,G)},ee.useInsertionEffect=function(N,X){return O.H.useInsertionEffect(N,X)},ee.useLayoutEffect=function(N,X){return O.H.useLayoutEffect(N,X)},ee.useMemo=function(N,X){return O.H.useMemo(N,X)},ee.useOptimistic=function(N,X){return O.H.useOptimistic(N,X)},ee.useReducer=function(N,X,G){return O.H.useReducer(N,X,G)},ee.useRef=function(N){return O.H.useRef(N)},ee.useState=function(N){return O.H.useState(N)},ee.useSyncExternalStore=function(N,X,G){return O.H.useSyncExternalStore(N,X,G)},ee.useTransition=function(){return O.H.useTransition()},ee.version="19.2.5",ee}var kg;function Zh(){return kg||(kg=1,Jf.exports=xy()),Jf.exports}var Xe=Zh(),$f={exports:{}},No={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function yy(){return Wg||(Wg=1,(function(o){function e(F,q){var W=F.length;F.push(q);t:for(;0<W;){var ft=W-1>>>1,ot=F[ft];if(0<l(ot,q))F[ft]=q,F[W]=ot,W=ft;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var q=F[0],W=F.pop();if(W!==q){F[0]=W;t:for(var ft=0,ot=F.length,N=ot>>>1;ft<N;){var X=2*(ft+1)-1,G=F[X],Q=X+1,gt=F[Q];if(0>l(G,W))Q<ot&&0>l(gt,G)?(F[ft]=gt,F[Q]=W,ft=Q):(F[ft]=G,F[X]=W,ft=X);else if(Q<ot&&0>l(gt,W))F[ft]=gt,F[Q]=W,ft=Q;else break t}}return q}function l(F,q){var W=F.sortIndex-q.sortIndex;return W!==0?W:F.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,v=null,y=3,M=!1,b=!1,T=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var q=i(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=F)s(m),q.sortIndex=q.expirationTime,e(p,q);else break;q=i(m)}}function I(F){if(T=!1,R(F),!b)if(i(p)!==null)b=!0,B||(B=!0,ht());else{var q=i(m);q!==null&&K(I,q.startTime-F)}}var B=!1,O=-1,et=5,C=-1;function P(){return S?!0:!(o.unstable_now()-C<et)}function ut(){if(S=!1,B){var F=o.unstable_now();C=F;var q=!0;try{t:{b=!1,T&&(T=!1,L(O),O=-1),M=!0;var W=y;try{e:{for(R(F),v=i(p);v!==null&&!(v.expirationTime>F&&P());){var ft=v.callback;if(typeof ft=="function"){v.callback=null,y=v.priorityLevel;var ot=ft(v.expirationTime<=F);if(F=o.unstable_now(),typeof ot=="function"){v.callback=ot,R(F),q=!0;break e}v===i(p)&&s(p),R(F)}else s(p);v=i(p)}if(v!==null)q=!0;else{var N=i(m);N!==null&&K(I,N.startTime-F),q=!1}}break t}finally{v=null,y=W,M=!1}q=void 0}}finally{q?ht():B=!1}}}var ht;if(typeof E=="function")ht=function(){E(ut)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,k=Mt.port2;Mt.port1.onmessage=ut,ht=function(){k.postMessage(null)}}else ht=function(){g(ut,0)};function K(F,q){O=g(function(){F(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(F){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var W=y;y=q;try{return F()}finally{y=W}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=y;y=F;try{return q()}finally{y=W}},o.unstable_scheduleCallback=function(F,q,W){var ft=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ft+W:ft):W=ft,F){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=W+ot,F={id:_++,callback:q,priorityLevel:F,startTime:W,expirationTime:ot,sortIndex:-1},W>ft?(F.sortIndex=W,e(m,F),i(p)===null&&F===i(m)&&(T?(L(O),O=-1):T=!0,K(I,W-ft))):(F.sortIndex=ot,e(p,F),b||M||(b=!0,B||(B=!0,ht()))),F},o.unstable_shouldYield=P,o.unstable_wrapCallback=function(F){var q=y;return function(){var W=y;y=q;try{return F.apply(this,arguments)}finally{y=W}}}})(eh)),eh}var qg;function Sy(){return qg||(qg=1,th.exports=yy()),th.exports}var nh={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function My(){if(Yg)return An;Yg=1;var o=Zh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,_)},An.flushSync=function(p){var m=d.T,_=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=m,s.p=_,s.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=h(_,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):_==="script"&&s.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=h(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},An.requestFormReset=function(p){s.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,_){return d.H.useFormState(p,m,_)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.5",An}var Zg;function Ey(){if(Zg)return nh.exports;Zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),nh.exports=My(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Ty(){if(Kg)return No;Kg=1;var o=Sy(),e=Zh(),i=Ey();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,A=c.child;A;){if(A===a){x=!0,a=c,r=f;break}if(A===r){x=!0,r=c,a=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===a){x=!0,a=f,r=c;break}if(A===r){x=!0,r=f,a=c;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),E=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function ht(t){return t===null||typeof t!="object"?null:(t=ut&&t[ut]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function k(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case E:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:k(t.type)||"Memo";case et:n=t._payload,t=t._init;try{return k(t(n))}catch{}}return null}var K=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ft=[],ot=-1;function N(t){return{current:t}}function X(t){0>ot||(t.current=ft[ot],ft[ot]=null,ot--)}function G(t,n){ot++,ft[ot]=t.current,t.current=n}var Q=N(null),gt=N(null),St=N(null),Et=N(null);function Ft(t,n){switch(G(St,n),G(gt,t),G(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?fg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=fg(n),t=hg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(Q),G(Q,t)}function Ot(){X(Q),X(gt),X(St)}function Wt(t){t.memoizedState!==null&&G(Et,t);var n=Q.current,a=hg(n,t.type);n!==a&&(G(gt,t),G(Q,a))}function he(t){gt.current===t&&(X(Q),X(gt)),Et.current===t&&(X(Et),wo._currentValue=W)}var it,hn;function Ht(t){if(it===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);it=n&&n[1]||"",hn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+it+t+hn}var Jt=!1;function Bt(t,n){if(!t||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ct){var nt=ct}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ct){nt=ct}t.call(mt.prototype)}}else{try{throw Error()}catch(ct){nt=ct}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ct){if(ct&&nt&&typeof ct.stack=="string")return[ct.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var H=x.split(`
`),tt=A.split(`
`);for(c=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(r===H.length||c===tt.length)for(r=H.length-1,c=tt.length-1;1<=r&&0<=c&&H[r]!==tt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(H[r]!==tt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||H[r]!==tt[c]){var dt=`
`+H[r].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=r&&0<=c);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ht(a):""}function Ie(t,n){switch(t.tag){case 26:case 27:case 5:return Ht(t.type);case 16:return Ht("Lazy");case 13:return t.child!==n&&n!==null?Ht("Suspense Fallback"):Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 15:return Bt(t.type,!1);case 11:return Bt(t.type.render,!1);case 1:return Bt(t.type,!0);case 31:return Ht("Activity");default:return""}}function ne(t){try{var n="",a=null;do n+=Ie(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var z=Object.prototype.hasOwnProperty,w=o.unstable_scheduleCallback,st=o.unstable_cancelCallback,yt=o.unstable_shouldYield,xt=o.unstable_requestPaint,_t=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Nt=o.unstable_UserBlockingPriority,qt=o.unstable_NormalPriority,se=o.unstable_LowPriority,vt=o.unstable_IdlePriority,Ee=o.log,ue=o.unstable_setDisableYieldValue,Qt=null,Dt=null;function Lt(t){if(typeof Ee=="function"&&ue(t),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Qt,t)}catch{}}var Xt=Math.clz32?Math.clz32:oe,Se=Math.log,Ve=Math.LN2;function oe(t){return t>>>=0,t===0?32:31-(Se(t)/Ve|0)|0}var Tt=256,V=262144,Rt=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=bt(r):(x&=A,x!==0?c=bt(x):a||(a=A&~t,a!==0&&(c=bt(a))))):(A=r&~f,A!==0?c=bt(A):x!==0?c=bt(x):a||(a=r&~t,a!==0&&(c=bt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Vt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function we(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function ke(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ze(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ce(t,n,a,r,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,tt=t.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Xt(a),mt=1<<dt;A[dt]=0,H[dt]=-1;var nt=tt[dt];if(nt!==null)for(tt[dt]=null,dt=0;dt<nt.length;dt++){var ct=nt[dt];ct!==null&&(ct.lane&=-536870913)}a&=~mt}r!==0&&dn(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function dn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Xt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Yn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Xt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Br(t,n){var a=n&-n;return a=(a&42)!==0?1:Ir(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ir(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function sa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fr(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:zg(t.type))}function Za(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var _i=Math.random().toString(36).slice(2),Je="__reactFiber$"+_i,Tn="__reactProps$"+_i,ra="__reactContainer$"+_i,Hr="__reactEvents$"+_i,U="__reactListeners$"+_i,J="__reactHandles$"+_i,rt="__reactResources$"+_i,lt="__reactMarker$"+_i;function at(t){delete t[Je],delete t[Tn],delete t[Hr],delete t[U],delete t[J]}function Ct(t){var n=t[Je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ra]||a[Je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=xg(t);t!==null;){if(a=t[Je])return a;t=xg(t)}return n}t=a,a=t.parentNode}return null}function zt(t){if(t=t[Je]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Yt(t){var n=t[rt];return n||(n=t[rt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function It(t){t[lt]=!0}var $t=new Set,te={};function be(t,n){$e(t,n),$e(t+"Capture",n)}function $e(t,n){for(te[t]=n,t=0;t<n.length;t++)$t.add(n[t])}var tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ai={},Be={};function le(t){return z.call(Be,t)?!0:z.call(ai,t)?!1:tn.test(t)?Be[t]=!0:(ai[t]=!0,!1)}function oa(t,n,a){if(le(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Oe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function vn(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function la(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gr(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function en(t){if(!t._valueTracker){var n=la(t)?"checked":"value";t._valueTracker=Gr(t,n,""+t[n])}}function Ai(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=la(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function bn(t){return t.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vr(t,n,a,r,c,f,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ln(n)):t.value!==""+Ln(n)&&(t.value=""+Ln(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?kc(t,x,Ln(n)):a!=null?kc(t,x,Ln(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Ln(A):t.removeAttribute("name")}function jr(t,n,a,r,c,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){en(t);return}a=a!=null?""+Ln(a):"",n=n!=null?""+Ln(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),en(t)}function kc(t,n,a){n==="number"&&ca(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bs(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Ln(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function rd(t,n,a){if(n!=null&&(n=""+Ln(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ln(a):""}function od(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(K(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Ln(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),en(t)}function As(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var hv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ld(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||hv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function cd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&ld(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&ld(t,f,n[f])}function Wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return pv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ui(){}var qc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rs=null,ws=null;function ud(t){var n=zt(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Vr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[Tn]||null;if(!c)throw Error(s(90));Vr(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Ai(r)}break t;case"textarea":rd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&bs(t,!!a.multiple,n,!1)}}}var Zc=!1;function fd(t,n,a){if(Zc)return t(n,a);Zc=!0;try{var r=t(n);return r}finally{if(Zc=!1,(Rs!==null||ws!==null)&&(Bl(),Rs&&(n=Rs,t=ws,ws=Rs=null,ud(n),t)))for(n=0;n<t.length;n++)ud(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Tn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Ni)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Kc=!1}var ua=null,Qc=null,Qo=null;function hd(){if(Qo)return Qo;var t,n=Qc,a=n.length,r,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return Qo=c.slice(t,1<r?1-r:void 0)}function Jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function dd(){return!1}function Fn(t){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:dd,this.isPropagationStopped=dd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Fn(Ka),Wr=v({},Ka,{view:0,detail:0}),mv=Fn(Wr),Jc,$c,qr,el=v({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(Jc=t.screenX-qr.screenX,$c=t.screenY-qr.screenY):$c=Jc=0,qr=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),pd=Fn(el),gv=v({},el,{dataTransfer:0}),_v=Fn(gv),vv=v({},Wr,{relatedTarget:0}),tu=Fn(vv),xv=v({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=Fn(xv),Sv=v({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mv=Fn(Sv),Ev=v({},Ka,{data:0}),md=Fn(Ev),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Av[t])?!!n[t]:!1}function eu(){return Rv}var wv=v({},Wr,{key:function(t){if(t.key){var n=Tv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cv=Fn(wv),Lv=v({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=Fn(Lv),Dv=v({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Uv=Fn(Dv),Nv=v({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=Fn(Nv),zv=v({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=Fn(zv),Bv=v({},Ka,{newState:0,oldState:0}),Iv=Fn(Bv),Fv=[9,13,27,32],nu=Ni&&"CompositionEvent"in window,Yr=null;Ni&&"documentMode"in document&&(Yr=document.documentMode);var Hv=Ni&&"TextEvent"in window&&!Yr,_d=Ni&&(!nu||Yr&&8<Yr&&11>=Yr),vd=" ",xd=!1;function yd(t,n){switch(t){case"keyup":return Fv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function Gv(t,n){switch(t){case"compositionend":return Sd(n);case"keypress":return n.which!==32?null:(xd=!0,vd);case"textInput":return t=n.data,t===vd&&xd?null:t;default:return null}}function Vv(t,n){if(Cs)return t==="compositionend"||!nu&&yd(t,n)?(t=hd(),Qo=Qc=ua=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _d&&n.locale!=="ko"?null:n.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!jv[t.type]:n==="textarea"}function Ed(t,n,a,r){Rs?ws?ws.push(r):ws=[r]:Rs=r,n=Xl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Zr=null,Kr=null;function Xv(t){sg(t,0)}function nl(t){var n=kt(t);if(Ai(n))return t}function Td(t,n){if(t==="change")return n}var bd=!1;if(Ni){var iu;if(Ni){var au="oninput"in document;if(!au){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),au=typeof Ad.oninput=="function"}iu=au}else iu=!1;bd=iu&&(!document.documentMode||9<document.documentMode)}function Rd(){Zr&&(Zr.detachEvent("onpropertychange",wd),Kr=Zr=null)}function wd(t){if(t.propertyName==="value"&&nl(Kr)){var n=[];Ed(n,Kr,t,Yc(t)),fd(Xv,n)}}function kv(t,n,a){t==="focusin"?(Rd(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",wd)):t==="focusout"&&Rd()}function Wv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(Kr)}function qv(t,n){if(t==="click")return nl(n)}function Yv(t,n){if(t==="input"||t==="change")return nl(n)}function Zv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Zv;function Qr(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!z.call(n,c)||!Zn(t[c],n[c]))return!1}return!0}function Cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,n){var a=Cd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cd(a)}}function Dd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ud(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ca(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ca(t.document)}return n}function su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Kv=Ni&&"documentMode"in document&&11>=document.documentMode,Ls=null,ru=null,Jr=null,ou=!1;function Nd(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Ls==null||Ls!==ca(r)||(r=Ls,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Qr(Jr,r)||(Jr=r,r=Xl(ru,"onSelect"),0<r.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ls)))}function Qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ds={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},lu={},Od={};Ni&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ja(t){if(lu[t])return lu[t];if(!Ds[t])return t;var n=Ds[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Od)return lu[t]=n[a];return t}var zd=Ja("animationend"),Pd=Ja("animationiteration"),Bd=Ja("animationstart"),Qv=Ja("transitionrun"),Jv=Ja("transitionstart"),$v=Ja("transitioncancel"),Id=Ja("transitionend"),Fd=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function vi(t,n){Fd.set(t,n),be(n,[t])}var il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Us=0,uu=0;function al(){for(var t=Us,n=uu=Us=0;n<t;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&Hd(a,c,f)}}function sl(t,n,a,r){si[Us++]=t,si[Us++]=n,si[Us++]=a,si[Us++]=r,uu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function fu(t,n,a,r){return sl(t,n,a,r),rl(t)}function $a(t,n){return sl(t,null,null,n),rl(t)}function Hd(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Xt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function rl(t){if(50<So)throw So=0,Sf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ns={};function tx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,r){return new tx(t,n,a,r)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Gd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ol(t,n,a,r,c,f){var x=0;if(r=t,typeof t=="function")hu(t)&&(x=1);else if(typeof t=="string")x=sy(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=Kn(31,a,n,c),t.elementType=C,t.lanes=f,t;case T:return ts(a.children,c,f,n);case S:x=8,c|=24;break;case g:return t=Kn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case I:return t=Kn(13,a,n,c),t.elementType=I,t.lanes=f,t;case B:return t=Kn(19,a,n,c),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:x=10;break t;case L:x=9;break t;case R:x=11;break t;case O:x=14;break t;case et:x=16,r=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Kn(x,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ts(t,n,a,r){return t=Kn(7,t,r,n),t.lanes=a,t}function du(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Vd(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function pu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var jd=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=jd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ne(n)},jd.set(t,n),n)}return{value:t,source:n,stack:ne(n)}}var Os=[],zs=0,ll=null,$r=0,oi=[],li=0,fa=null,Ri=1,wi="";function zi(t,n){Os[zs++]=$r,Os[zs++]=ll,ll=t,$r=n}function Xd(t,n,a){oi[li++]=Ri,oi[li++]=wi,oi[li++]=fa,fa=t;var r=Ri;t=wi;var c=32-Xt(r)-1;r&=~(1<<c),a+=1;var f=32-Xt(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,Ri=1<<32-Xt(n)+c|a<<c|r,wi=f+t}else Ri=1<<f|a<<c|r,wi=t}function mu(t){t.return!==null&&(zi(t,1),Xd(t,1,0))}function gu(t){for(;t===ll;)ll=Os[--zs],Os[zs]=null,$r=Os[--zs],Os[zs]=null;for(;t===fa;)fa=oi[--li],oi[li]=null,wi=oi[--li],oi[li]=null,Ri=oi[--li],oi[li]=null}function kd(t,n){oi[li++]=Ri,oi[li++]=wi,oi[li++]=fa,Ri=n.id,wi=n.overflow,fa=t}var xn=null,Fe=null,ve=!1,ha=null,ci=!1,_u=Error(s(519));function da(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(ri(n,t)),_u}function Wd(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Je]=t,n[Tn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)me(Eo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),jr(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),od(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||cg(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=Ui),n=!0):n=!1,n||da(t,!0)}function qd(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:xn=xn.return}}function Ps(t){if(t!==xn)return!1;if(!ve)return qd(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pf(t.type,t.memoizedProps)),a=!a),a&&Fe&&da(t),qd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Fe=vg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Fe=vg(t)}else n===27?(n=Fe,Ra(t.type)?(t=Gf,Gf=null,Fe=t):Fe=n):Fe=xn?fi(t.stateNode.nextSibling):null;return!0}function es(){Fe=xn=null,ve=!1}function vu(){var t=ha;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),ha=null),t}function to(t){ha===null?ha=[t]:ha.push(t)}var xu=N(null),ns=null,Pi=null;function pa(t,n,a){G(xu,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=xu.current,X(xu)}function yu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Su(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),yu(f.return,a,t),r||(x=null);break t}f=A.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),yu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Bs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=c.type;Zn(c.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(c===Et.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(wo):t=[wo])}c=c.return}t!==null&&Su(n,t,a,r),n.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function is(t){ns=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return Yd(ns,t)}function ul(t,n){return ns===null&&is(t),Yd(t,n)}function Yd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(s(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},nx=o.unstable_scheduleCallback,ix=o.unstable_NormalPriority,nn={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new ex,data:new Map,refCount:0}}function eo(t){t.refCount--,t.refCount===0&&nx(ix,function(){t.controller.abort()})}var no=null,Eu=0,Is=0,Fs=null;function ax(t,n){if(no===null){var a=no=[];Eu=0,Is=Rf(),Fs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Eu++,n.then(Zd,Zd),n}function Zd(){if(--Eu===0&&no!==null){Fs!==null&&(Fs.status="fulfilled");var t=no;no=null,Is=0,Fs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function sx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Kd=F.S;F.S=function(t,n){Nm=_t(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ax(t,n),Kd!==null&&Kd(t,n)};var as=N(null);function Tu(){var t=as.current;return t!==null?t:ze.pooledCache}function fl(t,n){n===null?G(as,as.current):G(as,n.pool)}function Qd(){var t=Tu();return t===null?null:{parent:nn._currentValue,pool:t}}var Hs=Error(s(460)),bu=Error(s(474)),hl=Error(s(542)),dl={then:function(){}};function Jd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $d(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ui,Ui),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ep(t),t;default:if(typeof n.status=="string")n.then(Ui,Ui);else{if(t=ze,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ep(t),t}throw rs=n,Hs}}function ss(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rs=a,Hs):a}}var rs=null;function tp(){if(rs===null)throw Error(s(459));var t=rs;return rs=null,t}function ep(t){if(t===Hs||t===hl)throw Error(s(483))}var Gs=null,io=0;function pl(t){var n=io;return io+=1,Gs===null&&(Gs=[]),$d(Gs,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function np(t){function n(Y,j){if(t){var $=Y.deletions;$===null?(Y.deletions=[j],Y.flags|=16):$.push(j)}}function a(Y,j){if(!t)return null;for(;j!==null;)n(Y,j),j=j.sibling;return null}function r(Y){for(var j=new Map;Y!==null;)Y.key!==null?j.set(Y.key,Y):j.set(Y.index,Y),Y=Y.sibling;return j}function c(Y,j){return Y=Oi(Y,j),Y.index=0,Y.sibling=null,Y}function f(Y,j,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<j?(Y.flags|=67108866,j):$):(Y.flags|=67108866,j)):(Y.flags|=1048576,j)}function x(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,j,$,pt){return j===null||j.tag!==6?(j=du($,Y.mode,pt),j.return=Y,j):(j=c(j,$),j.return=Y,j)}function H(Y,j,$,pt){var jt=$.type;return jt===T?dt(Y,j,$.props.children,pt,$.key):j!==null&&(j.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===et&&ss(jt)===j.type)?(j=c(j,$.props),ao(j,$),j.return=Y,j):(j=ol($.type,$.key,$.props,null,Y.mode,pt),ao(j,$),j.return=Y,j)}function tt(Y,j,$,pt){return j===null||j.tag!==4||j.stateNode.containerInfo!==$.containerInfo||j.stateNode.implementation!==$.implementation?(j=pu($,Y.mode,pt),j.return=Y,j):(j=c(j,$.children||[]),j.return=Y,j)}function dt(Y,j,$,pt,jt){return j===null||j.tag!==7?(j=ts($,Y.mode,pt,jt),j.return=Y,j):(j=c(j,$),j.return=Y,j)}function mt(Y,j,$){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=du(""+j,Y.mode,$),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return $=ol(j.type,j.key,j.props,null,Y.mode,$),ao($,j),$.return=Y,$;case b:return j=pu(j,Y.mode,$),j.return=Y,j;case et:return j=ss(j),mt(Y,j,$)}if(K(j)||ht(j))return j=ts(j,Y.mode,$,null),j.return=Y,j;if(typeof j.then=="function")return mt(Y,pl(j),$);if(j.$$typeof===E)return mt(Y,ul(Y,j),$);ml(Y,j)}return null}function nt(Y,j,$,pt){var jt=j!==null?j.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return jt!==null?null:A(Y,j,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===jt?H(Y,j,$,pt):null;case b:return $.key===jt?tt(Y,j,$,pt):null;case et:return $=ss($),nt(Y,j,$,pt)}if(K($)||ht($))return jt!==null?null:dt(Y,j,$,pt,null);if(typeof $.then=="function")return nt(Y,j,pl($),pt);if($.$$typeof===E)return nt(Y,j,ul(Y,$),pt);ml(Y,$)}return null}function ct(Y,j,$,pt,jt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get($)||null,A(j,Y,""+pt,jt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return Y=Y.get(pt.key===null?$:pt.key)||null,H(j,Y,pt,jt);case b:return Y=Y.get(pt.key===null?$:pt.key)||null,tt(j,Y,pt,jt);case et:return pt=ss(pt),ct(Y,j,$,pt,jt)}if(K(pt)||ht(pt))return Y=Y.get($)||null,dt(j,Y,pt,jt,null);if(typeof pt.then=="function")return ct(Y,j,$,pl(pt),jt);if(pt.$$typeof===E)return ct(Y,j,$,ul(j,pt),jt);ml(j,pt)}return null}function Ut(Y,j,$,pt){for(var jt=null,xe=null,Pt=j,re=j=0,_e=null;Pt!==null&&re<$.length;re++){Pt.index>re?(_e=Pt,Pt=null):_e=Pt.sibling;var ye=nt(Y,Pt,$[re],pt);if(ye===null){Pt===null&&(Pt=_e);break}t&&Pt&&ye.alternate===null&&n(Y,Pt),j=f(ye,j,re),xe===null?jt=ye:xe.sibling=ye,xe=ye,Pt=_e}if(re===$.length)return a(Y,Pt),ve&&zi(Y,re),jt;if(Pt===null){for(;re<$.length;re++)Pt=mt(Y,$[re],pt),Pt!==null&&(j=f(Pt,j,re),xe===null?jt=Pt:xe.sibling=Pt,xe=Pt);return ve&&zi(Y,re),jt}for(Pt=r(Pt);re<$.length;re++)_e=ct(Pt,Y,re,$[re],pt),_e!==null&&(t&&_e.alternate!==null&&Pt.delete(_e.key===null?re:_e.key),j=f(_e,j,re),xe===null?jt=_e:xe.sibling=_e,xe=_e);return t&&Pt.forEach(function(Ua){return n(Y,Ua)}),ve&&zi(Y,re),jt}function Kt(Y,j,$,pt){if($==null)throw Error(s(151));for(var jt=null,xe=null,Pt=j,re=j=0,_e=null,ye=$.next();Pt!==null&&!ye.done;re++,ye=$.next()){Pt.index>re?(_e=Pt,Pt=null):_e=Pt.sibling;var Ua=nt(Y,Pt,ye.value,pt);if(Ua===null){Pt===null&&(Pt=_e);break}t&&Pt&&Ua.alternate===null&&n(Y,Pt),j=f(Ua,j,re),xe===null?jt=Ua:xe.sibling=Ua,xe=Ua,Pt=_e}if(ye.done)return a(Y,Pt),ve&&zi(Y,re),jt;if(Pt===null){for(;!ye.done;re++,ye=$.next())ye=mt(Y,ye.value,pt),ye!==null&&(j=f(ye,j,re),xe===null?jt=ye:xe.sibling=ye,xe=ye);return ve&&zi(Y,re),jt}for(Pt=r(Pt);!ye.done;re++,ye=$.next())ye=ct(Pt,Y,re,ye.value,pt),ye!==null&&(t&&ye.alternate!==null&&Pt.delete(ye.key===null?re:ye.key),j=f(ye,j,re),xe===null?jt=ye:xe.sibling=ye,xe=ye);return t&&Pt.forEach(function(gy){return n(Y,gy)}),ve&&zi(Y,re),jt}function Ue(Y,j,$,pt){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var jt=$.key;j!==null;){if(j.key===jt){if(jt=$.type,jt===T){if(j.tag===7){a(Y,j.sibling),pt=c(j,$.props.children),pt.return=Y,Y=pt;break t}}else if(j.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===et&&ss(jt)===j.type){a(Y,j.sibling),pt=c(j,$.props),ao(pt,$),pt.return=Y,Y=pt;break t}a(Y,j);break}else n(Y,j);j=j.sibling}$.type===T?(pt=ts($.props.children,Y.mode,pt,$.key),pt.return=Y,Y=pt):(pt=ol($.type,$.key,$.props,null,Y.mode,pt),ao(pt,$),pt.return=Y,Y=pt)}return x(Y);case b:t:{for(jt=$.key;j!==null;){if(j.key===jt)if(j.tag===4&&j.stateNode.containerInfo===$.containerInfo&&j.stateNode.implementation===$.implementation){a(Y,j.sibling),pt=c(j,$.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,j);break}else n(Y,j);j=j.sibling}pt=pu($,Y.mode,pt),pt.return=Y,Y=pt}return x(Y);case et:return $=ss($),Ue(Y,j,$,pt)}if(K($))return Ut(Y,j,$,pt);if(ht($)){if(jt=ht($),typeof jt!="function")throw Error(s(150));return $=jt.call($),Kt(Y,j,$,pt)}if(typeof $.then=="function")return Ue(Y,j,pl($),pt);if($.$$typeof===E)return Ue(Y,j,ul(Y,$),pt);ml(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,j!==null&&j.tag===6?(a(Y,j.sibling),pt=c(j,$),pt.return=Y,Y=pt):(a(Y,j),pt=du($,Y.mode,pt),pt.return=Y,Y=pt),x(Y)):a(Y,j)}return function(Y,j,$,pt){try{io=0;var jt=Ue(Y,j,$,pt);return Gs=null,jt}catch(Pt){if(Pt===Hs||Pt===hl)throw Pt;var xe=Kn(29,Pt,null,Y.mode);return xe.lanes=pt,xe.return=Y,xe}finally{}}}var os=np(!0),ip=np(!1),ma=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Me&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=rl(t),Hd(t,null,a),n}return sl(t,r,n,a),rl(t)}function so(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Yn(t,a)}}function wu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cu=!1;function ro(){if(Cu){var t=Fs;if(t!==null)throw t}}function oo(t,n,a,r){Cu=!1;var c=t.updateQueue;ma=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var H=A,tt=H.next;H.next=null,x===null?f=tt:x.next=tt,x=H;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==x&&(A===null?dt.firstBaseUpdate=tt:A.next=tt,dt.lastBaseUpdate=H))}if(f!==null){var mt=c.baseState;x=0,dt=tt=H=null,A=f;do{var nt=A.lane&-536870913,ct=nt!==A.lane;if(ct?(ge&nt)===nt:(r&nt)===nt){nt!==0&&nt===Is&&(Cu=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ut=t,Kt=A;nt=n;var Ue=a;switch(Kt.tag){case 1:if(Ut=Kt.payload,typeof Ut=="function"){mt=Ut.call(Ue,mt,nt);break t}mt=Ut;break t;case 3:Ut.flags=Ut.flags&-65537|128;case 0:if(Ut=Kt.payload,nt=typeof Ut=="function"?Ut.call(Ue,mt,nt):Ut,nt==null)break t;mt=v({},mt,nt);break t;case 2:ma=!0}}nt=A.callback,nt!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[nt]:ct.push(nt))}else ct={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(tt=dt=ct,H=mt):dt=dt.next=ct,x|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);dt===null&&(H=mt),c.baseState=H,c.firstBaseUpdate=tt,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Ma|=x,t.lanes=x,t.memoizedState=mt}}function ap(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function sp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ap(a[t],n)}var Vs=N(null),gl=N(0);function rp(t,n){t=Wi,G(gl,t),G(Vs,n),Wi=t|n.baseLanes}function Lu(){G(gl,Wi),G(Vs,Vs.current)}function Du(){Wi=gl.current,X(Vs),X(gl)}var Qn=N(null),ui=null;function va(t){var n=t.alternate;G(Ke,Ke.current&1),G(Qn,t),ui===null&&(n===null||Vs.current!==null||n.memoizedState!==null)&&(ui=t)}function Uu(t){G(Ke,Ke.current),G(Qn,t),ui===null&&(ui=t)}function op(t){t.tag===22?(G(Ke,Ke.current),G(Qn,t),ui===null&&(ui=t)):xa()}function xa(){G(Ke,Ke.current),G(Qn,Qn.current)}function Jn(t){X(Qn),ui===t&&(ui=null),X(Ke)}var Ke=N(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=0,ie=null,Le=null,an=null,vl=!1,js=!1,ls=!1,xl=0,lo=0,Xs=null,rx=0;function We(){throw Error(s(321))}function Nu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function Ou(t,n,a,r,c,f){return Ii=f,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?Xp:Zu,ls=!1,f=a(r,c),ls=!1,js&&(f=cp(n,a,r,c)),lp(t),f}function lp(t){F.H=fo;var n=Le!==null&&Le.next!==null;if(Ii=0,an=Le=ie=null,vl=!1,lo=0,Xs=null,n)throw Error(s(300));t===null||sn||(t=t.dependencies,t!==null&&cl(t)&&(sn=!0))}function cp(t,n,a,r){ie=t;var c=0;do{if(js&&(Xs=null),lo=0,js=!1,25<=c)throw Error(s(301));if(c+=1,an=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=kp,f=n(a,r)}while(js);return f}function ox(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(ie.flags|=1024),n}function zu(){var t=xl!==0;return xl=0,t}function Pu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Bu(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}Ii=0,an=Le=ie=null,js=!1,lo=xl=0,Xs=null}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ie.memoizedState=an=t:an=an.next=t,an}function Qe(){if(Le===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=an===null?ie.memoizedState:an.next;if(n!==null)an=n,Le=t;else{if(t===null)throw ie.alternate===null?Error(s(467)):Error(s(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},an===null?ie.memoizedState=an=t:an=an.next=t}return an}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Xs===null&&(Xs=[]),t=$d(Xs,t,n),n=ie,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Xp:Zu),t}function Sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===E)return yn(t)}throw Error(s(438,String(t)))}function Iu(t){var n=null,a=ie.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ie.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),ie.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=P;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function Ml(t){var n=Qe();return Fu(n,Le,t)}function Fu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=x=null,H=null,tt=n,dt=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(ge&mt)===mt:(Ii&mt)===mt){var nt=tt.revertLane;if(nt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===Is&&(dt=!0);else if((Ii&nt)===nt){tt=tt.next,nt===Is&&(dt=!0);continue}else mt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(A=H=mt,x=f):H=H.next=mt,ie.lanes|=nt,Ma|=nt;mt=tt.action,ls&&a(f,mt),f=tt.hasEagerState?tt.eagerState:a(f,mt)}else nt={lane:mt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(A=H=nt,x=f):H=H.next=nt,ie.lanes|=mt,Ma|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(H===null?x=f:H.next=A,!Zn(f,t.memoizedState)&&(sn=!0,dt&&(a=Fs,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=H,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Hu(t){var n=Qe(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Zn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function up(t,n,a){var r=ie,c=Qe(),f=ve;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Zn((Le||c).memoizedState,a);if(x&&(c.memoizedState=a,sn=!0),c=c.queue,ju(dp.bind(null,r,c,t),[t]),c.getSnapshot!==n||x||an!==null&&an.memoizedState.tag&1){if(r.flags|=2048,ks(9,{destroy:void 0},hp.bind(null,r,c,a,n),null),ze===null)throw Error(s(349));f||(Ii&127)!==0||fp(r,n,a)}return a}function fp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ie.updateQueue,n===null?(n=yl(),ie.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function hp(t,n,a,r){n.value=a,n.getSnapshot=r,pp(n)&&mp(t)}function dp(t,n,a){return a(function(){pp(n)&&mp(t)})}function pp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function mp(t){var n=$a(t,2);n!==null&&Xn(n,t,2)}function Gu(t){var n=Dn();if(typeof t=="function"){var a=t;if(t=a(),ls){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function gp(t,n,a,r){return t.baseState=a,Fu(t,Le,typeof r=="function"?r:Fi)}function lx(t,n,a,r,c){if(bl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};F.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,_p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function _p(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=F.T,x={};F.T=x;try{var A=a(c,r),H=F.S;H!==null&&H(x,A),vp(t,n,A)}catch(tt){Vu(t,n,tt)}finally{f!==null&&x.types!==null&&(f.types=x.types),F.T=f}}else try{f=a(c,r),vp(t,n,f)}catch(tt){Vu(t,n,tt)}}function vp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){xp(t,n,r)},function(r){return Vu(t,n,r)}):xp(t,n,a)}function xp(t,n,a){n.status="fulfilled",n.value=a,yp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_p(t,a)))}function Vu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,yp(n),n=n.next;while(n!==r)}t.action=null}function yp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Sp(t,n){return n}function Mp(t,n){if(ve){var a=ze.formState;if(a!==null){t:{var r=ie;if(ve){if(Fe){e:{for(var c=Fe,f=ci;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Fe=fi(c.nextSibling),r=c.data==="F!";break t}}da(r)}r=!1}r&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sp,lastRenderedState:n},a.queue=r,a=Gp.bind(null,ie,r),r.dispatch=a,r=Gu(!1),f=Yu.bind(null,ie,!1,r.queue),r=Dn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=lx.bind(null,ie,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Ep(t){var n=Qe();return Tp(n,Le,t)}function Tp(t,n,a){if(n=Fu(t,n,Sp)[0],t=Ml(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=co(n)}catch(x){throw x===Hs?hl:x}else r=n;n=Qe();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ie.flags|=2048,ks(9,{destroy:void 0},cx.bind(null,c,a),null)),[r,f,t]}function cx(t,n){t.action=n}function bp(t){var n=Qe(),a=Le;if(a!==null)return Tp(n,a,t);Qe(),n=n.memoizedState,a=Qe();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ks(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ie.updateQueue,n===null&&(n=yl(),ie.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Ap(){return Qe().memoizedState}function El(t,n,a,r){var c=Dn();ie.flags|=t,c.memoizedState=ks(1|n,{destroy:void 0},a,r===void 0?null:r)}function Tl(t,n,a,r){var c=Qe();r=r===void 0?null:r;var f=c.memoizedState.inst;Le!==null&&r!==null&&Nu(r,Le.memoizedState.deps)?c.memoizedState=ks(n,f,a,r):(ie.flags|=t,c.memoizedState=ks(1|n,f,a,r))}function Rp(t,n){El(8390656,8,t,n)}function ju(t,n){Tl(2048,8,t,n)}function ux(t){ie.flags|=4;var n=ie.updateQueue;if(n===null)n=yl(),ie.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function wp(t){var n=Qe().memoizedState;return ux({ref:n,nextImpl:t}),function(){if((Me&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cp(t,n){return Tl(4,2,t,n)}function Lp(t,n){return Tl(4,4,t,n)}function Dp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Up(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,Dp.bind(null,n,t),a)}function Xu(){}function Np(t,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Nu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Op(t,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Nu(n,r[1]))return r[0];if(r=t(),ls){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r}function ku(t,n,a){return a===void 0||(Ii&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=zm(),ie.lanes|=t,Ma|=t,a)}function zp(t,n,a,r){return Zn(a,n)?a:Vs.current!==null?(t=ku(t,a,r),Zn(t,n)||(sn=!0),t):(Ii&42)===0||(Ii&1073741824)!==0&&(ge&261930)===0?(sn=!0,t.memoizedState=a):(t=zm(),ie.lanes|=t,Ma|=t,n)}function Pp(t,n,a,r,c){var f=q.p;q.p=f!==0&&8>f?f:8;var x=F.T,A={};F.T=A,Yu(t,!1,n,a);try{var H=c(),tt=F.S;if(tt!==null&&tt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=sx(H,r);uo(t,n,dt,ei(t))}else uo(t,n,r,ei(t))}catch(mt){uo(t,n,{then:function(){},status:"rejected",reason:mt},ei())}finally{q.p=f,x!==null&&A.types!==null&&(x.types=A.types),F.T=x}}function fx(){}function Wu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=Bp(t).queue;Pp(t,c,n,W,a===null?fx:function(){return Ip(t),a(r)})}function Bp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ip(t){var n=Bp(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},ei())}function qu(){return yn(wo)}function Fp(){return Qe().memoizedState}function Hp(){return Qe().memoizedState}function hx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=ga(a);var r=_a(n,t,a);r!==null&&(Xn(r,n,a),so(r,n,a)),n={cache:Mu()},t.payload=n;return}n=n.return}}function dx(t,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(t)?Vp(n,a):(a=fu(t,n,a,r),a!==null&&(Xn(a,t,r),jp(a,n,r)))}function Gp(t,n,a){var r=ei();uo(t,n,a,r)}function uo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(t))Vp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,a);if(c.hasEagerState=!0,c.eagerState=A,Zn(A,x))return sl(t,n,c,0),ze===null&&al(),!1}catch{}finally{}if(a=fu(t,n,c,r),a!==null)return Xn(a,t,r),jp(a,n,r),!0}return!1}function Yu(t,n,a,r){if(r={lane:2,revertLane:Rf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bl(t)){if(n)throw Error(s(479))}else n=fu(t,a,r,2),n!==null&&Xn(n,t,2)}function bl(t){var n=t.alternate;return t===ie||n!==null&&n===ie}function Vp(t,n){js=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jp(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Yn(t,a)}}var fo={readContext:yn,use:Sl,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};fo.useEffectEvent=We;var Xp={readContext:yn,use:Sl,useCallback:function(t,n){return Dn().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:Rp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,Dp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=Dn();n=n===void 0?null:n;var r=t();if(ls){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Dn();if(a!==void 0){var c=a(n);if(ls){Lt(!0);try{a(n)}finally{Lt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=dx.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var n=Dn();return t={current:t},n.memoizedState=t},useState:function(t){t=Gu(t);var n=t.queue,a=Gp.bind(null,ie,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(t,n){var a=Dn();return ku(a,t,n)},useTransition:function(){var t=Gu(!1);return t=Pp.bind(null,ie,t.queue,!0,!1),Dn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ie,c=Dn();if(ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ze===null)throw Error(s(349));(ge&127)!==0||fp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Rp(dp.bind(null,r,f,t),[t]),r.flags|=2048,ks(9,{destroy:void 0},hp.bind(null,r,f,a,n),null),a},useId:function(){var t=Dn(),n=ze.identifierPrefix;if(ve){var a=wi,r=Ri;a=(r&~(1<<32-Xt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qu,useFormState:Mp,useActionState:Mp,useOptimistic:function(t){var n=Dn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,ie,!0,a),a.dispatch=n,[t,n]},useMemoCache:Iu,useCacheRefresh:function(){return Dn().memoizedState=hx.bind(null,ie)},useEffectEvent:function(t){var n=Dn(),a={impl:t};return n.memoizedState=a,function(){if((Me&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:yn,use:Sl,useCallback:Np,useContext:yn,useEffect:ju,useImperativeHandle:Up,useInsertionEffect:Cp,useLayoutEffect:Lp,useMemo:Op,useReducer:Ml,useRef:Ap,useState:function(){return Ml(Fi)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=Qe();return zp(a,Le.memoizedState,t,n)},useTransition:function(){var t=Ml(Fi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:up,useId:Fp,useHostTransitionStatus:qu,useFormState:Ep,useActionState:Ep,useOptimistic:function(t,n){var a=Qe();return gp(a,Le,t,n)},useMemoCache:Iu,useCacheRefresh:Hp};Zu.useEffectEvent=wp;var kp={readContext:yn,use:Sl,useCallback:Np,useContext:yn,useEffect:ju,useImperativeHandle:Up,useInsertionEffect:Cp,useLayoutEffect:Lp,useMemo:Op,useReducer:Hu,useRef:Ap,useState:function(){return Hu(Fi)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=Qe();return Le===null?ku(a,t,n):zp(a,Le.memoizedState,t,n)},useTransition:function(){var t=Hu(Fi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:up,useId:Fp,useHostTransitionStatus:qu,useFormState:bp,useActionState:bp,useOptimistic:function(t,n){var a=Qe();return Le!==null?gp(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:Hp};kp.useEffectEvent=wp;function Ku(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Qu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ei(),c=ga(r);c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Xn(n,t,r),so(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ei(),c=ga(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Xn(n,t,r),so(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),r=ga(a);r.tag=2,n!=null&&(r.callback=n),n=_a(t,r,a),n!==null&&(Xn(n,t,a),so(n,t,a))}};function Wp(t,n,a,r,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,r)||!Qr(c,f):!0}function qp(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Qu.enqueueReplaceState(n,n.state,null)}function cs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Yp(t){il(t)}function Zp(t){console.error(t)}function Kp(t){il(t)}function Al(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Qp(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ju(t,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(t,n)},a}function Jp(t){return t=ga(t),t.tag=3,t}function $p(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Qp(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Qp(n,a,r),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function px(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Il():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Tf(t,r,c)),!1;case 22:return a.flags|=65536,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Tf(t,r,c)),!1}throw Error(s(435,a.tag))}return Tf(t,r,c),Il(),!1}if(ve)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==_u&&(t=Error(s(422),{cause:r}),to(ri(t,a)))):(r!==_u&&(n=Error(s(423),{cause:r}),to(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ri(r,a),c=Ju(t.stateNode,r,c),wu(t,c),qe!==4&&(qe=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),yo===null?yo=[f]:yo.push(f),qe!==4&&(qe=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ju(a.stateNode,r,t),wu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Jp(c),$p(c,t,a,r),wu(a,c),!1}a=a.return}while(a!==null);return!1}var $u=Error(s(461)),sn=!1;function Sn(t,n,a,r){n.child=t===null?ip(n,null,a,r):os(n,t.child,a,r)}function tm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var A in r)A!=="ref"&&(x[A]=r[A])}else x=r;return is(n),r=Ou(t,n,a,x,f,c),A=zu(),t!==null&&!sn?(Pu(t,n,c),Hi(t,n,c)):(ve&&A&&mu(n),n.flags|=1,Sn(t,n,r,c),n.child)}function em(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,nm(t,n,f,r,c)):(t=ol(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!lf(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(x,r)&&t.ref===n.ref)return Hi(t,n,c)}return n.flags|=1,t=Oi(f,r),t.ref=n.ref,t.return=n,n.child=t}function nm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Qr(f,r)&&t.ref===n.ref)if(sn=!1,n.pendingProps=r=f,lf(t,c))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,Hi(t,n,c)}return tf(t,n,a,r,c)}function im(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return am(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fl(n,f!==null?f.cachePool:null),f!==null?rp(n,f):Lu(),op(n);else return r=n.lanes=536870912,am(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(fl(n,f.cachePool),rp(n,f),xa(),n.memoizedState=null):(t!==null&&fl(n,null),Lu(),xa());return Sn(t,n,c,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function am(t,n,a,r,c){var f=Tu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&fl(n,null),Lu(),op(n),t!==null&&Bs(t,n,r,!0),n.childLanes=c,null}function Rl(t,n){return n=Cl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function sm(t,n,a){return os(n,t.child,null,a),t=Rl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function mx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(r.mode==="hidden")return t=Rl(n,r),n.lanes=536870912,ho(null,t);if(Uu(n),(t=Fe)?(t=_g(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ri,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Vd(t),a.return=n,n.child=a,xn=n,Fe=null)):t=null,t===null)throw da(n);return n.lanes=536870912,null}return Rl(n,r)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=sm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(sn||Bs(t,n,a,!1),c=(a&t.childLanes)!==0,sn||c){if(r=ze,r!==null&&(x=Br(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,$a(t,x),Xn(r,t,x),$u;Il(),n=sm(t,n,a)}else t=f.treeContext,Fe=fi(x.nextSibling),xn=n,ve=!0,ha=null,ci=!1,t!==null&&kd(n,t),n=Rl(n,r),n.flags|=4096;return n}return t=Oi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function tf(t,n,a,r,c){return is(n),a=Ou(t,n,a,r,void 0,c),r=zu(),t!==null&&!sn?(Pu(t,n,c),Hi(t,n,c)):(ve&&r&&mu(n),n.flags|=1,Sn(t,n,a,c),n.child)}function rm(t,n,a,r,c,f){return is(n),n.updateQueue=null,a=cp(n,r,a,c),lp(t),r=zu(),t!==null&&!sn?(Pu(t,n,f),Hi(t,n,f)):(ve&&r&&mu(n),n.flags|=1,Sn(t,n,a,f),n.child)}function om(t,n,a,r,c){if(is(n),n.stateNode===null){var f=Ns,x=a.contextType;typeof x=="object"&&x!==null&&(f=yn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Au(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?yn(x):Ns,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Ku(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Qu.enqueueReplaceState(f,f.state,null),oo(n,r,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,H=cs(a,A);f.props=H;var tt=f.context,dt=a.contextType;x=Ns,typeof dt=="object"&&dt!==null&&(x=yn(dt));var mt=a.getDerivedStateFromProps;dt=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||tt!==x)&&qp(n,f,r,x),ma=!1;var nt=n.memoizedState;f.state=nt,oo(n,r,f,c),ro(),tt=n.memoizedState,A||nt!==tt||ma?(typeof mt=="function"&&(Ku(n,a,mt,r),tt=n.memoizedState),(H=ma||Wp(n,a,H,r,nt,tt,x))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=x,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ru(t,n),x=n.memoizedProps,dt=cs(a,x),f.props=dt,mt=n.pendingProps,nt=f.context,tt=a.contextType,H=Ns,typeof tt=="object"&&tt!==null&&(H=yn(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==mt||nt!==H)&&qp(n,f,r,H),ma=!1,nt=n.memoizedState,f.state=nt,oo(n,r,f,c),ro();var ct=n.memoizedState;x!==mt||nt!==ct||ma||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof A=="function"&&(Ku(n,a,A,r),ct=n.memoizedState),(dt=ma||Wp(n,a,dt,r,nt,ct,H)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=H,r=dt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,wl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=os(n,t.child,null,c),n.child=os(n,null,a,c)):Sn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Hi(t,n,c),t}function lm(t,n,a,r){return es(),n.flags|=256,Sn(t,n,a,r),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(t){return{baseLanes:t,cachePool:Qd()}}function af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function cm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(Ke.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(c?va(n):xa(),(t=Fe)?(t=_g(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ri,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Vd(t),a.return=n,n.child=a,xn=n,Fe=null)):t=null,t===null)throw da(n);return Hf(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(xa(),c=n.mode,A=Cl({mode:"hidden",children:A},c),r=ts(r,c,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=nf(a),r.childLanes=af(t,x,a),n.memoizedState=ef,ho(null,r)):(va(n),sf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),A=r.fallback,c=n.mode,r=Cl({mode:"visible",children:r.children},c),A=ts(A,c,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,os(n,t.child,null,a),r=n.child,r.memoizedState=nf(a),r.childLanes=af(t,x,a),n.memoizedState=ef,n=ho(null,r));else if(va(n),Hf(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var tt=x.dgst;x=tt,r=Error(s(419)),r.stack="",r.digest=x,to({value:r,source:null,stack:null}),n=rf(t,n,a)}else if(sn||Bs(t,n,a,!1),x=(a&t.childLanes)!==0,sn||x){if(x=ze,x!==null&&(r=Br(x,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,$a(t,r),Xn(x,t,r),$u;Ff(A)||Il(),n=rf(t,n,a)}else Ff(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Fe=fi(A.nextSibling),xn=n,ve=!0,ha=null,ci=!1,t!==null&&kd(n,t),n=sf(n,r.children),n.flags|=4096);return n}return c?(xa(),A=r.fallback,c=n.mode,H=t.child,tt=H.sibling,r=Oi(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,tt!==null?A=Oi(tt,A):(A=ts(A,c,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,ho(null,r),r=n.child,A=t.child.memoizedState,A===null?A=nf(a):(c=A.cachePool,c!==null?(H=nn._currentValue,c=c.parent!==H?{parent:H,pool:H}:c):c=Qd(),A={baseLanes:A.baseLanes|a,cachePool:c}),r.memoizedState=A,r.childLanes=af(t,x,a),n.memoizedState=ef,ho(t.child,r)):(va(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function sf(t,n){return n=Cl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return os(n,t.child,null,a),t=sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function um(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),yu(t.return,n,a)}function of(t,n,a,r,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function fm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var x=Ke.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,G(Ke,x),Sn(t,n,r,a),r=ve?$r:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&um(t,a,n);else if(t.tag===19)um(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&_l(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}of(n,!0,a,null,f,r);break;case"together":of(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function gx(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),pa(n,nn,t.memoizedState.cache),es();break;case 27:case 5:Wt(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?cm(t,n,a):(va(n),t=Hi(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Bs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return fm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),G(Ke,Ke.current),r)break;return null;case 22:return n.lanes=0,im(t,n,a,n.pendingProps);case 24:pa(n,nn,t.memoizedState.cache)}return Hi(t,n,a)}function hm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!lf(t,a)&&(n.flags&128)===0)return sn=!1,gx(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,ve&&(n.flags&1048576)!==0&&Xd(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ss(n.elementType),n.type=t,typeof t=="function")hu(t)?(r=cs(t,r),n.tag=1,n=om(null,n,t,r,a)):(n.tag=0,n=tf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===R){n.tag=11,n=tm(null,n,t,r,a);break t}else if(c===O){n.tag=14,n=em(null,n,t,r,a);break t}}throw n=k(t)||t,Error(s(306,n,""))}}return n;case 0:return tf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=cs(r,n.pendingProps),om(t,n,r,c,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Ru(t,n),oo(n,r,null,a);var x=n.memoizedState;if(r=x.cache,pa(n,nn,r),r!==f.cache&&Su(n,[nn],a,!0),ro(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=lm(t,n,r,a);break t}else if(r!==c){c=ri(Error(s(424)),n),to(c),n=lm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Fe=fi(t.firstChild),xn=n,ve=!0,ha=null,ci=!0,a=ip(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(es(),r===c){n=Hi(t,n,a);break t}Sn(t,n,r,a)}n=n.child}return n;case 26:return wl(t,n),t===null?(a=Eg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(a=n.type,t=n.pendingProps,r=kl(St.current).createElement(a),r[Je]=n,r[Tn]=t,Mn(r,a,t),It(r),n.stateNode=r):n.memoizedState=Eg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Wt(n),t===null&&ve&&(r=n.stateNode=yg(n.type,n.pendingProps,St.current),xn=n,ci=!0,c=Fe,Ra(n.type)?(Gf=c,Fe=fi(r.firstChild)):Fe=c),Sn(t,n,n.pendingProps.children,a),wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((c=r=Fe)&&(r=Wx(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,xn=n,Fe=fi(r.firstChild),ci=!1,c=!0):c=!1),c||da(n)),Wt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,r=f.children,Pf(c,f)?r=null:x!==null&&Pf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Ou(t,n,ox,null,null,a),wo._currentValue=c),wl(t,n),Sn(t,n,r,a),n.child;case 6:return t===null&&ve&&((t=a=Fe)&&(a=qx(a,n.pendingProps,ci),a!==null?(n.stateNode=a,xn=n,Fe=null,t=!0):t=!1),t||da(n)),null;case 13:return cm(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=os(n,null,r,a):Sn(t,n,r,a),n.child;case 11:return tm(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),Sn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,is(n),c=yn(c),r=r(c),n.flags|=1,Sn(t,n,r,a),n.child;case 14:return em(t,n,n.type,n.pendingProps,a);case 15:return nm(t,n,n.type,n.pendingProps,a);case 19:return fm(t,n,a);case 31:return mx(t,n,a);case 22:return im(t,n,a,n.pendingProps);case 24:return is(n),r=yn(nn),t===null?(c=Tu(),c===null&&(c=ze,f=Mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Au(n),pa(n,nn,c)):((t.lanes&a)!==0&&(Ru(t,n),oo(n,null,null,a),ro()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,nn,r)):(r=f.cache,pa(n,nn,r),r!==c.cache&&Su(n,[nn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Gi(t){t.flags|=4}function cf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Fm())t.flags|=8192;else throw rs=dl,bu}else t.flags&=-16777217}function dm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wg(n))if(Fm())t.flags|=8192;else throw rs=dl,bu}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,Zs|=n)}function po(t,n){if(!ve)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function _x(t,n,a){var r=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(n),null;case 1:return He(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Bi(nn),Ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),He(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Gi(n),f!==null?(He(n),dm(n,f)):(He(n),cf(n,c,null,r,a))):f?f!==t.memoizedState?(Gi(n),He(n),dm(n,f)):(He(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Gi(n),He(n),cf(n,c,t,r,a)),null;case 27:if(he(n),a=St.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return He(n),null}t=Q.current,Ps(n)?Wd(n):(t=yg(c,r,a),n.stateNode=t,Gi(n))}return He(n),null;case 5:if(he(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return He(n),null}if(f=Q.current,Ps(n))Wd(n);else{var x=kl(St.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}f[Je]=n,f[Tn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Mn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Gi(n)}}return He(n),cf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=St.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Je]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||cg(t.nodeValue,a)),t||da(n,!0)}else t=kl(t).createTextNode(r),t[Je]=n,n.stateNode=t}return He(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ps(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Je]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;He(n),t=!1}else a=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return He(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ps(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Je]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;He(n),c=!1}else c=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),He(n),null);case 4:return Ot(),t===null&&Df(n.stateNode.containerInfo),He(n),null;case 10:return Bi(n.type),He(n),null;case 19:if(X(Ke),r=n.memoizedState,r===null)return He(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)po(r,!1);else{if(qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,po(r,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Gd(a,t),a=a.sibling;return G(Ke,Ke.current&1|2),ve&&zi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&_t()>zl&&(n.flags|=128,c=!0,po(r,!1),n.lanes=4194304)}else{if(!c)if(t=_l(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),po(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!ve)return He(n),null}else 2*_t()-r.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,c=!0,po(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=_t(),t.sibling=null,a=Ke.current,G(Ke,c?a&1|2:a&1),ve&&zi(n,r.treeForkCount),t):(He(n),null);case 22:case 23:return Jn(n),Du(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(He(n),n.subtreeFlags&6&&(n.flags|=8192)):He(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&X(as),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(nn),He(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function vx(t,n){switch(gu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(nn),Ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(Ke),null;case 4:return Ot(),null;case 10:return Bi(n.type),null;case 22:case 23:return Jn(n),Du(),t!==null&&X(as),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(nn),null;case 25:return null;default:return null}}function pm(t,n){switch(gu(n),n.tag){case 3:Bi(nn),Ot();break;case 26:case 27:case 5:he(n);break;case 4:Ot();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:X(Ke);break;case 10:Bi(n.type);break;case 22:case 23:Jn(n),Du(),t!==null&&X(as);break;case 24:Bi(nn)}}function mo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(A){Re(n,n.return,A)}}function ya(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var x=r.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,c=n;var H=a,tt=A;try{tt()}catch(dt){Re(c,H,dt)}}}r=r.next}while(r!==f)}}catch(dt){Re(n,n.return,dt)}}function mm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{sp(n,a)}catch(r){Re(t,t.return,r)}}}function gm(t,n,a){a.props=cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Re(t,n,r)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Re(t,n,c)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Re(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Re(t,n,c)}else a.current=null}function _m(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Re(t,t.return,c)}}function uf(t,n,a){try{var r=t.stateNode;Hx(r,t.type,a,n),r[Tn]=n}catch(c){Re(t,t.return,c)}}function vm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function ff(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ui));else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hf(t,n,a),t=t.sibling;t!==null;)hf(t,n,a),t=t.sibling}function Dl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Dl(t,n,a),t=t.sibling;t!==null;)Dl(t,n,a),t=t.sibling}function xm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,r,a),n[Je]=t,n[Tn]=a}catch(f){Re(t,t.return,f)}}var Vi=!1,rn=!1,df=!1,ym=typeof WeakSet=="function"?WeakSet:Set,pn=null;function xx(t,n){if(t=t.containerInfo,Of=Jl,t=Ud(t),su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,A=-1,H=-1,tt=0,dt=0,mt=t,nt=null;e:for(;;){for(var ct;mt!==a||c!==0&&mt.nodeType!==3||(A=x+c),mt!==f||r!==0&&mt.nodeType!==3||(H=x+r),mt.nodeType===3&&(x+=mt.nodeValue.length),(ct=mt.firstChild)!==null;)nt=mt,mt=ct;for(;;){if(mt===t)break e;if(nt===a&&++tt===c&&(A=x),nt===f&&++dt===r&&(H=x),(ct=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=ct}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:t,selectionRange:a},Jl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ut=cs(a.type,c);t=r.getSnapshotBeforeUpdate(Ut,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Re(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)If(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":If(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Sm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Xi(t,a),r&4&&mo(5,a);break;case 1:if(Xi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Re(a,a.return,x)}else{var c=cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Re(a,a.return,x)}}r&64&&mm(a),r&512&&go(a,a.return);break;case 3:if(Xi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sp(t,n)}catch(x){Re(a,a.return,x)}}break;case 27:n===null&&r&4&&xm(a);case 26:case 5:Xi(t,a),n===null&&r&4&&_m(a),r&512&&go(a,a.return);break;case 12:Xi(t,a);break;case 31:Xi(t,a),r&4&&Tm(t,a);break;case 13:Xi(t,a),r&4&&bm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=wx.bind(null,a),Yx(t,a))));break;case 22:if(r=a.memoizedState!==null||Vi,!r){n=n!==null&&n.memoizedState!==null||rn,c=Vi;var f=rn;Vi=r,(rn=n)&&!f?ki(t,a,(a.subtreeFlags&8772)!==0):Xi(t,a),Vi=c,rn=f}break;case 30:break;default:Xi(t,a)}}function Mm(t){var n=t.alternate;n!==null&&(t.alternate=null,Mm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&at(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Hn=!1;function ji(t,n,a){for(a=a.child;a!==null;)Em(t,n,a),a=a.sibling}function Em(t,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:rn||Ci(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ci(a,n);var r=je,c=Hn;Ra(a.type)&&(je=a.stateNode,Hn=!1),ji(t,n,a),bo(a.stateNode),je=r,Hn=c;break;case 5:rn||Ci(a,n);case 6:if(r=je,c=Hn,je=null,ji(t,n,a),je=r,Hn=c,je!==null)if(Hn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Re(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Re(a,n,f)}break;case 18:je!==null&&(Hn?(t=je,mg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ir(t)):mg(je,a.stateNode));break;case 4:r=je,c=Hn,je=a.stateNode.containerInfo,Hn=!0,ji(t,n,a),je=r,Hn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),rn||ya(4,a,n),ji(t,n,a);break;case 1:rn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&gm(a,n,r)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:rn=(r=rn)||a.memoizedState!==null,ji(t,n,a),rn=r;break;default:ji(t,n,a)}}function Tm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ir(t)}catch(a){Re(n,n.return,a)}}}function bm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ir(t)}catch(a){Re(n,n.return,a)}}function yx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ym),n;default:throw Error(s(435,t.tag))}}function Ul(t,n){var a=yx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Cx.bind(null,t,r);r.then(c,c)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(Ra(A.type)){je=A.stateNode,Hn=!1;break t}break;case 5:je=A.stateNode,Hn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Hn=!0;break t}A=A.return}if(je===null)throw Error(s(160));Em(f,x,c),je=null,Hn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Am(n,t),n=n.sibling}var xi=null;function Am(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),r&4&&(ya(3,t,t.return),mo(3,t),ya(5,t,t.return));break;case 1:Gn(n,t),Vn(t),r&512&&(rn||a===null||Ci(a,a.return)),r&64&&Vi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=xi;if(Gn(n,t),Vn(t),r&512&&(rn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[lt]||f[Je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,r,a),f[Je]=t,It(f),r=f;break t;case"link":var x=Ag("link","href",c).get(r+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(f=x[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;case"meta":if(x=Ag("meta","content",c).get(r+(a.content||""))){for(A=0;A<x.length;A++)if(f=x[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Je]=t,It(f),r=f}t.stateNode=r}else Rg(c,t.type,t.stateNode);else t.stateNode=bg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Rg(c,t.type,t.stateNode):bg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),r&512&&(rn||a===null||Ci(a,a.return)),a!==null&&r&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),r&512&&(rn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{As(c,"")}catch(Ut){Re(t,t.return,Ut)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,uf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(df=!0);break;case 6:if(Gn(n,t),Vn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ut){Re(t,t.return,Ut)}}break;case 3:if(Yl=null,c=xi,xi=Wl(n.containerInfo),Gn(n,t),xi=c,Vn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{ir(n.containerInfo)}catch(Ut){Re(t,t.return,Ut)}df&&(df=!1,Rm(t));break;case 4:r=xi,xi=Wl(t.stateNode.containerInfo),Gn(n,t),Vn(t),xi=r;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ul(t,r)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=_t()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ul(t,r)));break;case 22:c=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,tt=Vi,dt=rn;if(Vi=tt||c,rn=dt||H,Gn(n,t),rn=dt,Vi=tt,Vn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||H||Vi||rn||us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=H.stateNode;var mt=H.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Ut){Re(H,H.return,Ut)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=c?"":H.memoizedProps}catch(Ut){Re(H,H.return,Ut)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;c?gg(ct,!0):gg(H.stateNode,!1)}catch(Ut){Re(H,H.return,Ut)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ul(t,a))));break;case 19:Gn(n,t),Vn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ul(t,r)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(vm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ff(t);Dl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(As(x,""),a.flags&=-33);var A=ff(t);Dl(t,A,x);break;case 3:case 4:var H=a.stateNode.containerInfo,tt=ff(t);hf(t,tt,H);break;default:throw Error(s(161))}}catch(dt){Re(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Rm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Rm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sm(t,n.alternate,n),n=n.sibling}function us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),us(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&gm(n,n.return,a),us(n);break;case 27:bo(n.stateNode);case 26:case 5:Ci(n,n.return),us(n);break;case 22:n.memoizedState===null&&us(n);break;case 30:us(n);break;default:us(n)}t=t.sibling}}function ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ki(c,f,a),mo(4,f);break;case 1:if(ki(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Re(r,r.return,tt)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var H=c.shared.hiddenCallbacks;if(H!==null)for(c.shared.hiddenCallbacks=null,c=0;c<H.length;c++)ap(H[c],A)}catch(tt){Re(r,r.return,tt)}}a&&x&64&&mm(f),go(f,f.return);break;case 27:xm(f);case 26:case 5:ki(c,f,a),a&&r===null&&x&4&&_m(f),go(f,f.return);break;case 12:ki(c,f,a);break;case 31:ki(c,f,a),a&&x&4&&Tm(c,f);break;case 13:ki(c,f,a),a&&x&4&&bm(c,f);break;case 22:f.memoizedState===null&&ki(c,f,a),go(f,f.return);break;case 30:break;default:ki(c,f,a)}n=n.sibling}}function pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&eo(a))}function mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t))}function yi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wm(t,n,a,r),n=n.sibling}function wm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,r),c&2048&&mo(9,n);break;case 1:yi(t,n,a,r);break;case 3:yi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t)));break;case 12:if(c&2048){yi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,A=f.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Re(n,n.return,H)}}else yi(t,n,a,r);break;case 31:yi(t,n,a,r);break;case 13:yi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,r):_o(t,n):f._visibility&2?yi(t,n,a,r):(f._visibility|=2,Ws(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&pf(x,n);break;case 24:yi(t,n,a,r),c&2048&&mf(n.alternate,n);break;default:yi(t,n,a,r)}}function Ws(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,A=a,H=r,tt=x.flags;switch(x.tag){case 0:case 11:case 15:Ws(f,x,A,H,c),mo(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?Ws(f,x,A,H,c):_o(f,x):(dt._visibility|=2,Ws(f,x,A,H,c)),c&&tt&2048&&pf(x.alternate,x);break;case 24:Ws(f,x,A,H,c),c&&tt&2048&&mf(x.alternate,x);break;default:Ws(f,x,A,H,c)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:_o(a,r),c&2048&&pf(r.alternate,r);break;case 24:_o(a,r),c&2048&&mf(r.alternate,r);break;default:_o(a,r)}n=n.sibling}}var vo=8192;function qs(t,n,a){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)Cm(t,n,a),t=t.sibling}function Cm(t,n,a){switch(t.tag){case 26:qs(t,n,a),t.flags&vo&&t.memoizedState!==null&&ry(a,xi,t.memoizedState,t.memoizedProps);break;case 5:qs(t,n,a);break;case 3:case 4:var r=xi;xi=Wl(t.stateNode.containerInfo),qs(t,n,a),xi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=vo,vo=16777216,qs(t,n,a),vo=r):qs(t,n,a));break;default:qs(t,n,a)}}function Lm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Um(r,t)}Lm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dm(t),t=t.sibling}function Dm(t){switch(t.tag){case 0:case 11:case 15:xo(t),t.flags&2048&&ya(9,t,t.return);break;case 3:xo(t);break;case 12:xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Nl(t)):xo(t);break;default:xo(t)}}function Nl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Um(r,t)}Lm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}t=t.sibling}}function Um(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:eo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,pn=r;else t:for(a=t;pn!==null;){r=pn;var c=r.sibling,f=r.return;if(Mm(r),r===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}var Sx={getCacheForType:function(t){var n=yn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return yn(nn).controller.signal}},Mx=typeof WeakMap=="function"?WeakMap:Map,Me=0,ze=null,pe=null,ge=0,Ae=0,$n=null,Sa=!1,Ys=!1,gf=!1,Wi=0,qe=0,Ma=0,fs=0,_f=0,ti=0,Zs=0,yo=null,jn=null,vf=!1,Ol=0,Nm=0,zl=1/0,Pl=null,Ea=null,ln=0,Ta=null,Ks=null,qi=0,xf=0,yf=null,Om=null,So=0,Sf=null;function ei(){return(Me&2)!==0&&ge!==0?ge&-ge:F.T!==null?Rf():Fr()}function zm(){if(ti===0)if((ge&536870912)===0||ve){var t=V;V<<=1,(V&3932160)===0&&(V=262144),ti=t}else ti=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ti}function Xn(t,n,a){(t===ze&&(Ae===2||Ae===9)||t.cancelPendingCommit!==null)&&(Qs(t,0),ba(t,ge,ti,!1)),Ze(t,a),((Me&2)===0||t!==ze)&&(t===ze&&((Me&2)===0&&(fs|=a),qe===4&&ba(t,ge,ti,!1)),Li(t))}function Pm(t,n,a){if((Me&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Vt(t,n),c=r?bx(t,n):Ef(t,n,!0),f=r;do{if(c===0){Ys&&!r&&ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ex(a)){c=Ef(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=t;c=yo;var H=A.current.memoizedState.isDehydrated;if(H&&(Qs(A,x).flags|=256),x=Ef(A,x,!1),x!==2){if(gf&&!H){A.errorRecoveryDisabledLanes|=f,fs|=f,c=4;break t}f=jn,jn=c,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Qs(t,0),ba(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ba(r,n,ti,!Sa);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ol+300-_t(),10<c)){if(ba(r,n,ti,!Sa),Zt(r,0,!0)!==0)break t;qi=n,r.timeoutHandle=dg(Bm.bind(null,r,a,jn,Pl,vf,n,ti,fs,Zs,Sa,f,"Throttled",-0,0),c);break t}Bm(r,a,jn,Pl,vf,n,ti,fs,Zs,Sa,f,null,-0,0)}}break}while(!0);Li(t)}function Bm(t,n,a,r,c,f,x,A,H,tt,dt,mt,nt,ct){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ui},Cm(n,f,mt);var Ut=(f&62914560)===f?Ol-_t():(f&4194048)===f?Nm-_t():0;if(Ut=oy(mt,Ut),Ut!==null){qi=f,t.cancelPendingCommit=Ut(km.bind(null,t,n,f,a,r,c,x,A,H,dt,mt,null,nt,ct)),ba(t,f,x,!tt);return}}km(t,n,f,a,r,c,x,A,H)}function Ex(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(t,n,a,r){n&=~_f,n&=~fs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Xt(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&dn(t,a,n)}function Bl(){return(Me&6)===0?(Mo(0),!1):!0}function Mf(){if(pe!==null){if(Ae===0)var t=pe.return;else t=pe,Pi=ns=null,Bu(t),Gs=null,io=0,t=pe;for(;t!==null;)pm(t.alternate,t),t=t.return;pe=null}}function Qs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,jx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qi=0,Mf(),ze=t,pe=a=Oi(t.current,null),ge=n,Ae=0,$n=null,Sa=!1,Ys=Vt(t,n),gf=!1,Zs=ti=_f=fs=Ma=qe=0,jn=yo=null,vf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Xt(r),f=1<<c;n|=t[c],r&=~f}return Wi=n,al(),a}function Im(t,n){ie=null,F.H=fo,n===Hs||n===hl?(n=tp(),Ae=3):n===bu?(n=tp(),Ae=4):Ae=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,pe===null&&(qe=1,Al(t,ri(n,t.current)))}function Fm(){var t=Qn.current;return t===null?!0:(ge&4194048)===ge?ui===null:(ge&62914560)===ge||(ge&536870912)!==0?t===ui:!1}function Hm(){var t=F.H;return F.H=fo,t===null?fo:t}function Gm(){var t=F.A;return F.A=Sx,t}function Il(){qe=4,Sa||(ge&4194048)!==ge&&Qn.current!==null||(Ys=!0),(Ma&134217727)===0&&(fs&134217727)===0||ze===null||ba(ze,ge,ti,!1)}function Ef(t,n,a){var r=Me;Me|=2;var c=Hm(),f=Gm();(ze!==t||ge!==n)&&(Pl=null,Qs(t,n)),n=!1;var x=qe;t:do try{if(Ae!==0&&pe!==null){var A=pe,H=$n;switch(Ae){case 8:Mf(),x=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var tt=Ae;if(Ae=0,$n=null,Js(t,A,H,tt),a&&Ys){x=0;break t}break;default:tt=Ae,Ae=0,$n=null,Js(t,A,H,tt)}}Tx(),x=qe;break}catch(dt){Im(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Pi=ns=null,Me=r,F.H=c,F.A=f,pe===null&&(ze=null,ge=0,al()),x}function Tx(){for(;pe!==null;)Vm(pe)}function bx(t,n){var a=Me;Me|=2;var r=Hm(),c=Gm();ze!==t||ge!==n?(Pl=null,zl=_t()+500,Qs(t,n)):Ys=Vt(t,n);t:do try{if(Ae!==0&&pe!==null){n=pe;var f=$n;e:switch(Ae){case 1:Ae=0,$n=null,Js(t,n,f,1);break;case 2:case 9:if(Jd(f)){Ae=0,$n=null,jm(n);break}n=function(){Ae!==2&&Ae!==9||ze!==t||(Ae=7),Li(t)},f.then(n,n);break t;case 3:Ae=7;break t;case 4:Ae=5;break t;case 7:Jd(f)?(Ae=0,$n=null,jm(n)):(Ae=0,$n=null,Js(t,n,f,7));break;case 5:var x=null;switch(pe.tag){case 26:x=pe.memoizedState;case 5:case 27:var A=pe;if(x?wg(x):A.stateNode.complete){Ae=0,$n=null;var H=A.sibling;if(H!==null)pe=H;else{var tt=A.return;tt!==null?(pe=tt,Fl(tt)):pe=null}break e}}Ae=0,$n=null,Js(t,n,f,5);break;case 6:Ae=0,$n=null,Js(t,n,f,6);break;case 8:Mf(),qe=6;break t;default:throw Error(s(462))}}Ax();break}catch(dt){Im(t,dt)}while(!0);return Pi=ns=null,F.H=r,F.A=c,Me=a,pe!==null?0:(ze=null,ge=0,al(),qe)}function Ax(){for(;pe!==null&&!yt();)Vm(pe)}function Vm(t){var n=hm(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,n===null?Fl(t):pe=n}function jm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=rm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=rm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Bu(n);default:pm(a,n),n=pe=Gd(n,Wi),n=hm(a,n,Wi)}t.memoizedProps=t.pendingProps,n===null?Fl(t):pe=n}function Js(t,n,a,r){Pi=ns=null,Bu(n),Gs=null,io=0;var c=n.return;try{if(px(t,c,n,a,ge)){qe=1,Al(t,ri(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;qe=1,Al(t,ri(a,t.current)),pe=null;return}n.flags&32768?(ve||r===1?t=!0:Ys||(ge&536870912)!==0?t=!1:(Sa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Xm(n,t)):Fl(n)}function Fl(t){var n=t;do{if((n.flags&32768)!==0){Xm(n,Sa);return}t=n.return;var a=_x(n.alternate,n,Wi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);qe===0&&(qe=5)}function Xm(t,n){do{var a=vx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);qe=6,pe=null}function km(t,n,a,r,c,f,x,A,H){t.cancelPendingCommit=null;do Hl();while(ln!==0);if((Me&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,Ce(t,a,f,x,A,H),t===ze&&(pe=ze=null,ge=0),Ks=n,Ta=t,qi=a,xf=f,yf=c,Om=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Lx(qt,function(){return Km(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,c=q.p,q.p=2,x=Me,Me|=4;try{xx(t,n,a)}finally{Me=x,q.p=c,F.T=r}}ln=1,Wm(),qm(),Ym()}}function Wm(){if(ln===1){ln=0;var t=Ta,n=Ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var r=q.p;q.p=2;var c=Me;Me|=4;try{Am(n,t);var f=zf,x=Ud(t.containerInfo),A=f.focusedElem,H=f.selectionRange;if(x!==A&&A&&A.ownerDocument&&Dd(A.ownerDocument.documentElement,A)){if(H!==null&&su(A)){var tt=H.start,dt=H.end;if(dt===void 0&&(dt=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(dt,A.value.length);else{var mt=A.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var ct=nt.getSelection(),Ut=A.textContent.length,Kt=Math.min(H.start,Ut),Ue=H.end===void 0?Kt:Math.min(H.end,Ut);!ct.extend&&Kt>Ue&&(x=Ue,Ue=Kt,Kt=x);var Y=Ld(A,Kt),j=Ld(A,Ue);if(Y&&j&&(ct.rangeCount!==1||ct.anchorNode!==Y.node||ct.anchorOffset!==Y.offset||ct.focusNode!==j.node||ct.focusOffset!==j.offset)){var $=mt.createRange();$.setStart(Y.node,Y.offset),ct.removeAllRanges(),Kt>Ue?(ct.addRange($),ct.extend(j.node,j.offset)):($.setEnd(j.node,j.offset),ct.addRange($))}}}}for(mt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&mt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Jl=!!Of,zf=Of=null}finally{Me=c,q.p=r,F.T=a}}t.current=n,ln=2}}function qm(){if(ln===2){ln=0;var t=Ta,n=Ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var r=q.p;q.p=2;var c=Me;Me|=4;try{Sm(t,n.alternate,n)}finally{Me=c,q.p=r,F.T=a}}ln=3}}function Ym(){if(ln===4||ln===3){ln=0,xt();var t=Ta,n=Ks,a=qi,r=Om;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,Ks=Ta=null,Zm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),sa(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Qt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=F.T,c=q.p,q.p=2,F.T=null;try{for(var f=t.onRecoverableError,x=0;x<r.length;x++){var A=r[x];f(A.value,{componentStack:A.stack})}}finally{F.T=n,q.p=c}}(qi&3)!==0&&Hl(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Sf?So++:(So=0,Sf=t):So=0,Mo(0)}}function Zm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,eo(n)))}function Hl(){return Wm(),qm(),Ym(),Km()}function Km(){if(ln!==5)return!1;var t=Ta,n=xf;xf=0;var a=sa(qi),r=F.T,c=q.p;try{q.p=32>a?32:a,F.T=null,a=yf,yf=null;var f=Ta,x=qi;if(ln=0,Ks=Ta=null,qi=0,(Me&6)!==0)throw Error(s(331));var A=Me;if(Me|=4,Dm(f.current),wm(f,f.current,x,a),Me=A,Mo(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Qt,f)}catch{}return!0}finally{q.p=c,F.T=r,Zm(t,n)}}function Qm(t,n,a){n=ri(a,n),n=Ju(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(Ze(t,2),Li(t))}function Re(t,n,a){if(t.tag===3)Qm(t,t,a);else for(;n!==null;){if(n.tag===3){Qm(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))){t=ri(a,t),a=Jp(2),r=_a(n,a,2),r!==null&&($p(a,r,n,t),Ze(r,2),Li(r));break}}n=n.return}}function Tf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Mx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(gf=!0,c.add(a),t=Rx.bind(null,t,n,a),n.then(t,t))}function Rx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ze===t&&(ge&a)===a&&(qe===4||qe===3&&(ge&62914560)===ge&&300>_t()-Ol?(Me&2)===0&&Qs(t,0):_f|=a,Zs===ge&&(Zs=0)),Li(t)}function Jm(t,n){n===0&&(n=Te()),t=$a(t,n),t!==null&&(Ze(t,n),Li(t))}function wx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Jm(t,a)}function Cx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Jm(t,a)}function Lx(t,n){return w(t,n)}var Gl=null,$s=null,bf=!1,Vl=!1,Af=!1,Aa=0;function Li(t){t!==$s&&t.next===null&&($s===null?Gl=$s=t:$s=$s.next=t),Vl=!0,bf||(bf=!0,Ux())}function Mo(t,n){if(!Af&&Vl){Af=!0;do for(var a=!1,r=Gl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Xt(42|t)+1)-1,f&=c&~(x&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ng(r,f))}else f=ge,f=Zt(r,r===ze?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Vt(r,f)||(a=!0,ng(r,f));r=r.next}while(a);Af=!1}}function Dx(){$m()}function $m(){Vl=bf=!1;var t=0;Aa!==0&&Vx()&&(t=Aa);for(var n=_t(),a=null,r=Gl;r!==null;){var c=r.next,f=tg(r,n);f===0?(r.next=null,a===null?Gl=c:a.next=c,c===null&&($s=a)):(a=r,(t!==0||(f&3)!==0)&&(Vl=!0)),r=c}ln!==0&&ln!==5||Mo(t),Aa!==0&&(Aa=0)}function tg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Xt(f),A=1<<x,H=c[x];H===-1?((A&a)===0||(A&r)!==0)&&(c[x]=we(A,n)):H<=n&&(t.expiredLanes|=A),f&=~A}if(n=ze,a=ge,a=Zt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ae===2||Ae===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&st(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Vt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&st(r),sa(a)){case 2:case 8:a=Nt;break;case 32:a=qt;break;case 268435456:a=vt;break;default:a=qt}return r=eg.bind(null,t),a=w(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&st(r),t.callbackPriority=2,t.callbackNode=null,2}function eg(t,n){if(ln!==0&&ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var r=ge;return r=Zt(t,t===ze?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Pm(t,r,n),tg(t,_t()),t.callbackNode!=null&&t.callbackNode===a?eg.bind(null,t):null)}function ng(t,n){if(Hl())return null;Pm(t,n,!0)}function Ux(){Xx(function(){(Me&6)!==0?w(wt,Dx):$m()})}function Rf(){if(Aa===0){var t=Is;t===0&&(t=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Aa=t}return Aa}function ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function ag(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Nx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=ig((c[Tn]||null).action),x=r.submitter;x&&(n=(n=x[Tn]||null)?ig(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new tl("action","action",null,r,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Aa!==0){var H=x?ag(c,x):new FormData(c);Wu(a,{pending:!0,data:H,method:c.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=x?ag(c,x):new FormData(c),Wu(a,{pending:!0,data:H,method:c.method,action:f},f,H))},currentTarget:c}]})}}for(var wf=0;wf<cu.length;wf++){var Cf=cu[wf],Ox=Cf.toLowerCase(),zx=Cf[0].toUpperCase()+Cf.slice(1);vi(Ox,"on"+zx)}vi(zd,"onAnimationEnd"),vi(Pd,"onAnimationIteration"),vi(Bd,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(Qv,"onTransitionRun"),vi(Jv,"onTransitionStart"),vi($v,"onTransitionCancel"),vi(Id,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),be("onBeforeInput",["compositionend","keypress","textInput","paste"]),be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function sg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var A=r[x],H=A.instance,tt=A.currentTarget;if(A=A.listener,H!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=tt;try{f(c)}catch(dt){il(dt)}c.currentTarget=null,f=H}else for(x=0;x<r.length;x++){if(A=r[x],H=A.instance,tt=A.currentTarget,A=A.listener,H!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=tt;try{f(c)}catch(dt){il(dt)}c.currentTarget=null,f=H}}}}function me(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var r=t+"__bubble";a.has(r)||(rg(n,t,2,!1),a.add(r))}function Lf(t,n,a){var r=0;n&&(r|=4),rg(a,t,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[jl]){t[jl]=!0,$t.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Lf(a,!1,t),Lf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Lf("selectionchange",!1,n))}}function rg(t,n,a,r){switch(zg(n)){case 2:var c=uy;break;case 8:c=fy;break;default:c=Wf}a=c.bind(null,n,a,t),c=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Uf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var A=r.stateNode.containerInfo;if(A===c)break;if(x===4)for(x=r.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;A!==null;){if(x=Ct(A),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){r=f=x;continue t}A=A.parentNode}}r=r.return}fd(function(){var tt=f,dt=Yc(a),mt=[];t:{var nt=Fd.get(t);if(nt!==void 0){var ct=tl,Ut=t;switch(t){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":ct=Cv;break;case"focusin":Ut="focus",ct=tu;break;case"focusout":Ut="blur",ct=tu;break;case"beforeblur":case"afterblur":ct=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Uv;break;case zd:case Pd:case Bd:ct=yv;break;case Id:ct=Ov;break;case"scroll":case"scrollend":ct=mv;break;case"wheel":ct=Pv;break;case"copy":case"cut":case"paste":ct=Mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=gd;break;case"toggle":case"beforetoggle":ct=Iv}var Kt=(n&4)!==0,Ue=!Kt&&(t==="scroll"||t==="scrollend"),Y=Kt?nt!==null?nt+"Capture":null:nt;Kt=[];for(var j=tt,$;j!==null;){var pt=j;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Y===null||(pt=Xr(j,Y),pt!=null&&Kt.push(To(j,pt,$))),Ue)break;j=j.return}0<Kt.length&&(nt=new ct(nt,Ut,null,a,dt),mt.push({event:nt,listeners:Kt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",nt&&a!==qc&&(Ut=a.relatedTarget||a.fromElement)&&(Ct(Ut)||Ut[ra]))break t;if((ct||nt)&&(nt=dt.window===dt?dt:(nt=dt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ct?(Ut=a.relatedTarget||a.toElement,ct=tt,Ut=Ut?Ct(Ut):null,Ut!==null&&(Ue=u(Ut),Kt=Ut.tag,Ut!==Ue||Kt!==5&&Kt!==27&&Kt!==6)&&(Ut=null)):(ct=null,Ut=tt),ct!==Ut)){if(Kt=pd,pt="onMouseLeave",Y="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=gd,pt="onPointerLeave",Y="onPointerEnter",j="pointer"),Ue=ct==null?nt:kt(ct),$=Ut==null?nt:kt(Ut),nt=new Kt(pt,j+"leave",ct,a,dt),nt.target=Ue,nt.relatedTarget=$,pt=null,Ct(dt)===tt&&(Kt=new Kt(Y,j+"enter",Ut,a,dt),Kt.target=$,Kt.relatedTarget=Ue,pt=Kt),Ue=pt,ct&&Ut)e:{for(Kt=Bx,Y=ct,j=Ut,$=0,pt=Y;pt;pt=Kt(pt))$++;pt=0;for(var jt=j;jt;jt=Kt(jt))pt++;for(;0<$-pt;)Y=Kt(Y),$--;for(;0<pt-$;)j=Kt(j),pt--;for(;$--;){if(Y===j||j!==null&&Y===j.alternate){Kt=Y;break e}Y=Kt(Y),j=Kt(j)}Kt=null}else Kt=null;ct!==null&&og(mt,nt,ct,Kt,!1),Ut!==null&&Ue!==null&&og(mt,Ue,Ut,Kt,!0)}}t:{if(nt=tt?kt(tt):window,ct=nt.nodeName&&nt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&nt.type==="file")var xe=Td;else if(Md(nt))if(bd)xe=Yv;else{xe=Wv;var Pt=kv}else ct=nt.nodeName,!ct||ct.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&Wc(tt.elementType)&&(xe=Td):xe=qv;if(xe&&(xe=xe(t,tt))){Ed(mt,xe,a,dt);break t}Pt&&Pt(t,nt,tt),t==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&kc(nt,"number",nt.value)}switch(Pt=tt?kt(tt):window,t){case"focusin":(Md(Pt)||Pt.contentEditable==="true")&&(Ls=Pt,ru=tt,Jr=null);break;case"focusout":Jr=ru=Ls=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Nd(mt,a,dt);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":Nd(mt,a,dt)}var re;if(nu)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Cs?yd(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(_d&&a.locale!=="ko"&&(Cs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Cs&&(re=hd()):(ua=dt,Qc="value"in ua?ua.value:ua.textContent,Cs=!0)),Pt=Xl(tt,_e),0<Pt.length&&(_e=new md(_e,t,null,a,dt),mt.push({event:_e,listeners:Pt}),re?_e.data=re:(re=Sd(a),re!==null&&(_e.data=re)))),(re=Hv?Gv(t,a):Vv(t,a))&&(_e=Xl(tt,"onBeforeInput"),0<_e.length&&(Pt=new md("onBeforeInput","beforeinput",null,a,dt),mt.push({event:Pt,listeners:_e}),Pt.data=re)),Nx(mt,t,tt,a,dt)}sg(mt,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Xl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Xr(t,a),c!=null&&r.unshift(To(t,c,f)),c=Xr(t,n),c!=null&&r.push(To(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Bx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function og(t,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var A=a,H=A.alternate,tt=A.stateNode;if(A=A.tag,H!==null&&H===r)break;A!==5&&A!==26&&A!==27||tt===null||(H=tt,c?(tt=Xr(a,f),tt!=null&&x.unshift(To(a,tt,H))):c||(tt=Xr(a,f),tt!=null&&x.push(To(a,tt,H)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Ix=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Fx,"")}function cg(t,n){return n=lg(n),lg(t)===n}function De(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||As(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&As(t,""+r);break;case"className":Oe(t,"class",r);break;case"tabIndex":Oe(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(t,a,r);break;case"style":cd(t,r,f);break;case"data":if(n!=="object"){Oe(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ko(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(t,n,"name",c.name,c,null),De(t,n,"formEncType",c.formEncType,c,null),De(t,n,"formMethod",c.formMethod,c,null),De(t,n,"formTarget",c.formTarget,c,null)):(De(t,n,"encType",c.encType,c,null),De(t,n,"method",c.method,c,null),De(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ko(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ui);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ko(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":me("beforetoggle",t),me("toggle",t),oa(t,"popover",r);break;case"xlinkActuate":vn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":vn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":vn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":vn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":vn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":vn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":vn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":vn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":vn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":oa(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dv.get(a)||a,oa(t,a,r))}}function Nf(t,n,a,r,c,f){switch(a){case"style":cd(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?As(t,r):(typeof r=="number"||typeof r=="bigint")&&As(t,""+r);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):oa(t,a,r)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:De(t,n,f,x,a,null)}}c&&De(t,n,"srcSet",a.srcSet,a,null),r&&De(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var A=f=x=c=null,H=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":c=dt;break;case"type":x=dt;break;case"checked":H=dt;break;case"defaultChecked":tt=dt;break;case"value":f=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:De(t,n,r,dt,a,null)}}jr(t,f,A,H,tt,x,c,!1);return;case"select":me("invalid",t),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":r=A;default:De(t,n,c,A,a,null)}n=f,a=x,t.multiple=!!r,n!=null?bs(t,!!r,n,!1):a!=null&&bs(t,!!r,a,!0);return;case"textarea":me("invalid",t),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:De(t,n,x,A,a,null)}od(t,r,c,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:De(t,n,H,r,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(r=0;r<Eo.length;r++)me(Eo[r],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:De(t,n,tt,r,a,null)}return;default:if(Wc(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Nf(t,n,dt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&De(t,n,A,r,a,null))}function Hx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,A=null,H=null,tt=null,dt=null;for(ct in a){var mt=a[ct];if(a.hasOwnProperty(ct)&&mt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=mt;default:r.hasOwnProperty(ct)||De(t,n,ct,null,r,mt)}}for(var nt in r){var ct=r[nt];if(mt=a[nt],r.hasOwnProperty(nt)&&(ct!=null||mt!=null))switch(nt){case"type":f=ct;break;case"name":c=ct;break;case"checked":tt=ct;break;case"defaultChecked":dt=ct;break;case"value":x=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==mt&&De(t,n,nt,ct,r,mt)}}Vr(t,x,A,H,tt,dt,f,c);return;case"select":ct=x=A=nt=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ct=H;default:r.hasOwnProperty(f)||De(t,n,f,null,r,H)}for(c in r)if(f=r[c],H=a[c],r.hasOwnProperty(c)&&(f!=null||H!=null))switch(c){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":x=f;default:f!==H&&De(t,n,c,f,r,H)}n=A,a=x,r=ct,nt!=null?bs(t,!!a,nt,!1):!!r!=!!a&&(n!=null?bs(t,!!a,n,!0):bs(t,!!a,a?[]:"",!1));return;case"textarea":ct=nt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:De(t,n,A,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":nt=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&De(t,n,x,c,r,f)}rd(t,nt,ct);return;case"option":for(var Ut in a)if(nt=a[Ut],a.hasOwnProperty(Ut)&&nt!=null&&!r.hasOwnProperty(Ut))switch(Ut){case"selected":t.selected=!1;break;default:De(t,n,Ut,null,r,nt)}for(H in r)if(nt=r[H],ct=a[H],r.hasOwnProperty(H)&&nt!==ct&&(nt!=null||ct!=null))switch(H){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:De(t,n,H,nt,r,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)nt=a[Kt],a.hasOwnProperty(Kt)&&nt!=null&&!r.hasOwnProperty(Kt)&&De(t,n,Kt,null,r,nt);for(tt in r)if(nt=r[tt],ct=a[tt],r.hasOwnProperty(tt)&&nt!==ct&&(nt!=null||ct!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:De(t,n,tt,nt,r,ct)}return;default:if(Wc(n)){for(var Ue in a)nt=a[Ue],a.hasOwnProperty(Ue)&&nt!==void 0&&!r.hasOwnProperty(Ue)&&Nf(t,n,Ue,void 0,r,nt);for(dt in r)nt=r[dt],ct=a[dt],!r.hasOwnProperty(dt)||nt===ct||nt===void 0&&ct===void 0||Nf(t,n,dt,nt,r,ct);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!r.hasOwnProperty(Y)&&De(t,n,Y,null,r,nt);for(mt in r)nt=r[mt],ct=a[mt],!r.hasOwnProperty(mt)||nt===ct||nt==null&&ct==null||De(t,n,mt,nt,r,ct)}function ug(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,x=c.initiatorType,A=c.duration;if(f&&A&&ug(x)){for(x=0,A=c.responseEnd,r+=1;r<a.length;r++){var H=a[r],tt=H.startTime;if(tt>A)break;var dt=H.transferSize,mt=H.initiatorType;dt&&ug(mt)&&(H=H.responseEnd,x+=dt*(H<A?1:(A-tt)/(H-tt)))}if(--r,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Of=null,zf=null;function kl(t){return t.nodeType===9?t:t.ownerDocument}function fg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Pf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function Vx(){var t=window.event;return t&&t.type==="popstate"?t===Bf?!1:(Bf=t,!0):(Bf=null,!1)}var dg=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(t){return pg.resolve(null).then(t).catch(kx)}:dg;function kx(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function mg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),ir(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,A=f.nodeName;f[lt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&bo(t.ownerDocument.body);a=c}while(a);ir(n)}function gg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function If(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Wx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[lt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function qx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function _g(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function Ff(t){return t.data==="$?"||t.data==="$~"}function Hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Yx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Gf=null;function vg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function xg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function yg(t,n,a){switch(n=kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);at(t)}var hi=new Map,Sg=new Set;function Wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=q.d;q.d={f:Zx,r:Kx,D:Qx,C:Jx,L:$x,m:ty,X:ny,S:ey,M:iy};function Zx(){var t=Yi.f(),n=Bl();return t||n}function Kx(t){var n=zt(t);n!==null&&n.tag===5&&n.type==="form"?Ip(n):Yi.r(t)}var tr=typeof document>"u"?null:document;function Mg(t,n,a){var r=tr;if(r&&typeof n=="string"&&n){var c=bn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Sg.has(c)||(Sg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Mn(n,"link",t),It(n),r.head.appendChild(n)))}}function Qx(t){Yi.D(t),Mg("dns-prefetch",t,null)}function Jx(t,n){Yi.C(t,n),Mg("preconnect",t,n)}function $x(t,n,a){Yi.L(t,n,a);var r=tr;if(r&&t&&n){var c='link[rel="preload"][as="'+bn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+bn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+bn(a.imageSizes)+'"]')):c+='[href="'+bn(t)+'"]';var f=c;switch(n){case"style":f=er(t);break;case"script":f=nr(t)}hi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Ao(f))||n==="script"&&r.querySelector(Ro(f))||(n=r.createElement("link"),Mn(n,"link",t),It(n),r.head.appendChild(n)))}}function ty(t,n){Yi.m(t,n);var a=tr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+bn(r)+'"][href="'+bn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(t)}if(!hi.has(f)&&(t=v({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}r=a.createElement("link"),Mn(r,"link",t),It(r),a.head.appendChild(r)}}}function ey(t,n,a){Yi.S(t,n,a);var r=tr;if(r&&t){var c=Yt(r).hoistableStyles,f=er(t);n=n||"default";var x=c.get(f);if(!x){var A={loading:0,preload:null};if(x=r.querySelector(Ao(f)))A.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&Vf(t,a);var H=x=r.createElement("link");It(H),Mn(H,"link",t),H._p=new Promise(function(tt,dt){H.onload=tt,H.onerror=dt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ql(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:A},c.set(f,x)}}}function ny(t,n){Yi.X(t,n);var a=tr;if(a&&t){var r=Yt(a).hoistableScripts,c=nr(t),f=r.get(c);f||(f=a.querySelector(Ro(c)),f||(t=v({src:t,async:!0},n),(n=hi.get(c))&&jf(t,n),f=a.createElement("script"),It(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function iy(t,n){Yi.M(t,n);var a=tr;if(a&&t){var r=Yt(a).hoistableScripts,c=nr(t),f=r.get(c);f||(f=a.querySelector(Ro(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=hi.get(c))&&jf(t,n),f=a.createElement("script"),It(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Eg(t,n,a,r){var c=(c=St.current)?Wl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=Yt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=er(a.href);var f=Yt(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(Ao(t)))&&!f._p&&(x.instance=f,x.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||ay(c,t,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=Yt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function er(t){return'href="'+bn(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function Tg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function ay(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Mn(n,"link",a),It(n),t.head.appendChild(n))}function nr(t){return'[src="'+bn(t)+'"]'}function Ro(t){return"script[async]"+t}function bg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+bn(a.href)+'"]');if(r)return n.instance=r,It(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),It(r),Mn(r,"style",c),ql(r,a.precedence,t),n.instance=r;case"stylesheet":c=er(a.href);var f=t.querySelector(Ao(c));if(f)return n.state.loading|=4,n.instance=f,It(f),f;r=Tg(a),(c=hi.get(c))&&Vf(r,c),f=(t.ownerDocument||t).createElement("link"),It(f);var x=f;return x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),Mn(f,"link",r),n.state.loading|=4,ql(f,a.precedence,t),n.instance=f;case"script":return f=nr(a.src),(c=t.querySelector(Ro(f)))?(n.instance=c,It(c),c):(r=a,(c=hi.get(f))&&(r=v({},a),jf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),It(c),Mn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ql(r,a.precedence,t));return n.instance}function ql(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var A=r[x];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Yl=null;function Ag(t,n,a){if(Yl===null){var r=new Map,c=Yl=new Map;c.set(a,r)}else c=Yl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[lt]||f[Je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var A=r.get(x);A?A.push(f):r.set(x,[f])}}return r}function Rg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function sy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ry(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=er(r.href),f=n.querySelector(Ao(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Zl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,It(f);return}f=n.ownerDocument||n,r=Tg(r),(c=hi.get(c))&&Vf(r,c),f=f.createElement("link"),It(f);var x=f;x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),Mn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Zl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function oy(t,n){return t.stylesheets&&t.count===0&&Ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*Gx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kl=null;function Ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kl=new Map,n.forEach(ly,t),Kl=null,Zl.call(t))}function ly(t,n){if(!(n.state.loading&4)){var a=Kl.get(t);if(a)var r=a.get(null);else{a=new Map,Kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=Zl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var wo={$$typeof:E,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function cy(t,n,a,r,c,f,x,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.hiddenUpdates=ke(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Cg(t,n,a,r,c,f,x,A,H,tt,dt,mt){return t=new cy(t,n,a,x,H,tt,dt,mt,A),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Au(f),t}function Lg(t){return t?(t=Ns,t):Ns}function Dg(t,n,a,r,c,f){c=Lg(c),r.context===null?r.context=c:r.pendingContext=c,r=ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=_a(t,r,n),a!==null&&(Xn(a,t,n),so(a,t,n))}function Ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){Ug(t,n),(t=t.alternate)&&Ug(t,n)}function Ng(t){if(t.tag===13||t.tag===31){var n=$a(t,67108864);n!==null&&Xn(n,t,67108864),kf(t,67108864)}}function Og(t){if(t.tag===13||t.tag===31){var n=ei();n=Ir(n);var a=$a(t,n);a!==null&&Xn(a,t,n),kf(t,n)}}var Jl=!0;function uy(t,n,a,r){var c=F.T;F.T=null;var f=q.p;try{q.p=2,Wf(t,n,a,r)}finally{q.p=f,F.T=c}}function fy(t,n,a,r){var c=F.T;F.T=null;var f=q.p;try{q.p=8,Wf(t,n,a,r)}finally{q.p=f,F.T=c}}function Wf(t,n,a,r){if(Jl){var c=qf(r);if(c===null)Uf(t,n,r,$l,a),Pg(t,r);else if(dy(c,t,n,a,r))r.stopPropagation();else if(Pg(t,r),n&4&&-1<hy.indexOf(t)){for(;c!==null;){var f=zt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=bt(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var H=1<<31-Xt(x);A.entanglements[1]|=H,x&=~H}Li(f),(Me&6)===0&&(zl=_t()+500,Mo(0))}}break;case 31:case 13:A=$a(f,2),A!==null&&Xn(A,f,2),Bl(),kf(f,2)}if(f=qf(r),f===null&&Uf(t,n,r,$l,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Uf(t,n,r,null,a)}}function qf(t){return t=Yc(t),Yf(t)}var $l=null;function Yf(t){if($l=null,t=Ct(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case wt:return 2;case Nt:return 8;case qt:case se:return 32;case vt:return 268435456;default:return 32}default:return 32}}var Zf=!1,wa=null,Ca=null,La=null,Co=new Map,Lo=new Map,Da=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pg(t,n){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Do(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=zt(n),n!==null&&Ng(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function dy(t,n,a,r,c){switch(n){case"focusin":return wa=Do(wa,t,n,a,r,c),!0;case"dragenter":return Ca=Do(Ca,t,n,a,r,c),!0;case"mouseover":return La=Do(La,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Co.set(f,Do(Co.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Lo.set(f,Do(Lo.get(f)||null,t,n,a,r,c)),!0}return!1}function Bg(t){var n=Ct(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Za(t.priority,function(){Og(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Za(t.priority,function(){Og(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);qc=r,a.target.dispatchEvent(r),qc=null}else return n=zt(a),n!==null&&Ng(n),t.blockedOn=a,!1;n.shift()}return!0}function Ig(t,n,a){tc(t)&&a.delete(n)}function py(){Zf=!1,wa!==null&&tc(wa)&&(wa=null),Ca!==null&&tc(Ca)&&(Ca=null),La!==null&&tc(La)&&(La=null),Co.forEach(Ig),Lo.forEach(Ig)}function ec(t,n){t.blockedOn===n&&(t.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,py)))}var nc=null;function Fg(t){nc!==t&&(nc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===t&&(nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Yf(r||a)===null)continue;break}var f=zt(a);f!==null&&(t.splice(n,3),n-=3,Wu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function ir(t){function n(H){return ec(H,t)}wa!==null&&ec(wa,t),Ca!==null&&ec(Ca,t),La!==null&&ec(La,t),Co.forEach(n),Lo.forEach(n);for(var a=0;a<Da.length;a++){var r=Da[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Bg(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[Tn]||null;if(typeof f=="function")x||Fg(a);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[Tn]||null)A=x.formAction;else if(Yf(c)!==null)continue}else A=x.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Fg(a)}}}function Hg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Kf(t){this._internalRoot=t}ic.prototype.render=Kf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();Dg(a,r,t,n,null,null)},ic.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Dg(t.current,2,null,t,null,null),Bl(),n[ra]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&Bg(t)}};var Gg=e.version;if(Gg!=="19.2.5")throw Error(s(527,Gg,"19.2.5"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var my={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Qt=ac.inject(my),Dt=ac}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Yp,f=Zp,x=Kp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Cg(t,1,!1,null,null,a,r,null,c,f,x,Hg),t[ra]=n.current,Df(t),new Kf(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Yp,x=Zp,A=Kp,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Cg(t,1,!0,n,a??null,r,c,H,f,x,A,Hg),n.context=Lg(null),a=n.current,r=ei(),r=Ir(r),c=ga(r),c.callback=null,_a(a,c,r),a=r,n.current.lanes=a,Ze(n,a),Li(n),t[ra]=n.current,Df(t),new ic(n)},No.version="19.2.5",No}var Qg;function by(){if(Qg)return $f.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=Ty(),$f.exports}var Ay=by();function Ry(){const o=Xe.useRef(null),e=Xe.useRef(null);return Xe.useEffect(()=>{const i=o.current,s=e.current;if(!i||!s)return;let l=0,u=0,d=0,h=0,p;const m=M=>{l=M.clientX,u=M.clientY,i.style.transform=`translate3d(${l}px,${u}px,0)`};function _(){d+=(l-d)*.15,h+=(u-h)*.15,s.style.transform=`translate3d(${d}px,${h}px,0)`,p=requestAnimationFrame(_)}_();const v=M=>{M.target.closest('[data-cursor="hover"], a, button')&&s.classList.add("cursor-hover")},y=M=>{M.target.closest('[data-cursor="hover"], a, button')&&s.classList.remove("cursor-hover")};return window.addEventListener("mousemove",m),document.addEventListener("mouseover",v),document.addEventListener("mouseout",y),()=>{cancelAnimationFrame(p),window.removeEventListener("mousemove",m),document.removeEventListener("mouseover",v),document.removeEventListener("mouseout",y)}},[]),D.jsxs(D.Fragment,{children:[D.jsx("div",{ref:o,className:"cursor-dot",style:{transform:"translate3d(-100px,-100px,0)"}}),D.jsx("div",{ref:e,className:"cursor-ring",style:{transform:"translate3d(-100px,-100px,0)"}})]})}function wy(){return D.jsxs("nav",{className:"nav",children:[D.jsxs("a",{href:"#",className:"nav-logo","data-cursor":"hover","aria-label":"Naveen John Kennedy",children:[D.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[D.jsx("rect",{width:"32",height:"32",rx:"5",fill:"#0a0a0b"}),D.jsxs("g",{stroke:"#ff4d2e",strokeWidth:"3",strokeLinecap:"square",children:[D.jsx("line",{x1:"5",y1:"7",x2:"5",y2:"25"}),D.jsx("line",{x1:"5",y1:"7",x2:"14",y2:"25"}),D.jsx("line",{x1:"14",y1:"7",x2:"14",y2:"25"})]}),D.jsxs("g",{stroke:"#f5f5f0",strokeWidth:"3",strokeLinecap:"square",children:[D.jsx("line",{x1:"18",y1:"7",x2:"18",y2:"25"}),D.jsx("line",{x1:"18",y1:"16",x2:"27",y2:"7"}),D.jsx("line",{x1:"18",y1:"16",x2:"27",y2:"25"})]})]}),D.jsx("span",{children:"NAVEEN JOHN KENNEDY ◦ 2026"})]}),D.jsx("ul",{className:"nav-links",children:["work","services","experience","about","contact"].map(o=>D.jsx("li",{children:D.jsxs("a",{href:`#${o}`,"data-cursor":"hover",children:[D.jsx("span",{className:"paren",children:"( "}),o,D.jsx("span",{className:"paren",children:" )"})]})},o))}),D.jsxs("div",{className:"nav-status",children:[D.jsx("span",{className:"nav-status-dot"}),D.jsx("span",{children:"Available — Mon–Fri"})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="160",Cy=0,Jg=1,Ly=2,w_=1,Dy=2,ta=3,Xa=0,kn=1,ea=2,Ha=0,Ar=1,$g=2,t0=3,e0=4,Uy=5,vs=100,Ny=101,Oy=102,n0=103,i0=104,zy=200,Py=201,By=202,Iy=203,Bh=204,Ih=205,Fy=206,Hy=207,Gy=208,Vy=209,jy=210,Xy=211,ky=212,Wy=213,qy=214,Yy=0,Zy=1,Ky=2,Oc=3,Qy=4,Jy=5,$y=6,tS=7,C_=0,eS=1,nS=2,Ga=0,iS=1,aS=2,sS=3,rS=4,oS=5,lS=6,L_=300,wr=301,Cr=302,Fh=303,Hh=304,Gc=306,Gh=1e3,Ti=1001,Vh=1002,On=1003,a0=1004,ih=1005,pi=1006,cS=1007,Xo=1008,Va=1009,uS=1010,fS=1011,Qh=1012,D_=1013,Ia=1014,Fa=1015,ko=1016,U_=1017,N_=1018,ys=1020,hS=1021,bi=1023,dS=1024,pS=1025,Ss=1026,Lr=1027,mS=1028,O_=1029,gS=1030,z_=1031,P_=1033,ah=33776,sh=33777,rh=33778,oh=33779,s0=35840,r0=35841,o0=35842,l0=35843,B_=36196,c0=37492,u0=37496,f0=37808,h0=37809,d0=37810,p0=37811,m0=37812,g0=37813,_0=37814,v0=37815,x0=37816,y0=37817,S0=37818,M0=37819,E0=37820,T0=37821,lh=36492,b0=36494,A0=36495,_S=36283,R0=36284,w0=36285,C0=36286,I_=3e3,Ms=3001,vS=3200,xS=3201,F_=0,yS=1,gi="",En="srgb",aa="srgb-linear",Jh="display-p3",Vc="display-p3-linear",zc="linear",Ge="srgb",Pc="rec709",Bc="p3",ar=7680,L0=519,SS=512,MS=513,ES=514,H_=515,TS=516,bS=517,AS=518,RS=519,jh=35044,D0="300 es",Xh=1035,ia=2e3,Ic=2001;class Or{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=Math.PI/180,kh=180/Math.PI;function ja(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function zn(o,e,i){return Math.max(e,Math.min(i,o))}function wS(o,e){return(o%e+e)%e}function uh(o,e,i){return(1-i)*o+i*e}function U0(o){return(o&o-1)===0&&o!==0}function Wh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function na(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pe(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ae{constructor(e=0,i=0){ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(zn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(e,i,s,l,u,d,h,p,m){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,p,m)}set(e,i,s,l,u,d,h,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=p,_[6]=s,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],_=s[4],v=s[7],y=s[2],M=s[5],b=s[8],T=l[0],S=l[3],g=l[6],L=l[1],E=l[4],R=l[7],I=l[2],B=l[5],O=l[8];return u[0]=d*T+h*L+p*I,u[3]=d*S+h*E+p*B,u[6]=d*g+h*R+p*O,u[1]=m*T+_*L+v*I,u[4]=m*S+_*E+v*B,u[7]=m*g+_*R+v*O,u[2]=y*T+M*L+b*I,u[5]=y*S+M*E+b*B,u[8]=y*g+M*R+b*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return i*d*_-i*h*m-s*u*_+s*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=_*d-h*m,y=h*p-_*u,M=m*u-d*p,b=i*v+s*y+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(l*m-_*s)*T,e[2]=(h*s-l*d)*T,e[3]=y*T,e[4]=(_*i-l*p)*T,e[5]=(l*u-h*i)*T,e[6]=M*T,e[7]=(s*p-m*i)*T,e[8]=(d*i-s*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(fh.makeScale(e,i)),this}rotate(e){return this.premultiply(fh.makeRotation(-e)),this}translate(e,i){return this.premultiply(fh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fh=new de;function G_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function CS(){const o=Fc("canvas");return o.style.display="block",o}const N0={};function Vo(o){o in N0||(N0[o]=!0,console.warn(o))}const O0=new de().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),z0=new de().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sc={[aa]:{transfer:zc,primaries:Pc,toReference:o=>o,fromReference:o=>o},[En]:{transfer:Ge,primaries:Pc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Vc]:{transfer:zc,primaries:Bc,toReference:o=>o.applyMatrix3(z0),fromReference:o=>o.applyMatrix3(O0)},[Jh]:{transfer:Ge,primaries:Bc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(z0),fromReference:o=>o.applyMatrix3(O0).convertLinearToSRGB()}},LS=new Set([aa,Vc]),Ne={enabled:!0,_workingColorSpace:aa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!LS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const s=sc[e].toReference,l=sc[i].fromReference;return l(s(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return sc[o].primaries},getTransfer:function(o){return o===gi?zc:sc[o].transfer}};function Rr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function hh(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let sr;class V_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=Fc("canvas")),sr.width=e.width,sr.height=e.height;const s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=sr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Fc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Rr(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Rr(i[s]/255)*255):i[s]=Rr(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DS=0;class j_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=ja(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(dh(l[d].image)):u.push(dh(l[d]))}else u=dh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function dh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?V_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let US=0;class Wn extends Or{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Ti,l=Ti,u=pi,d=Xo,h=bi,p=Va,m=Wn.DEFAULT_ANISOTROPY,_=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=ja(),this.name="",this.source=new j_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===Ms?En:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gh:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gh:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===En?Ms:I_}set encoding(e){Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ms?En:gi}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=L_;Wn.DEFAULT_ANISOTROPY=1;class _n{constructor(e=0,i=0,s=0,l=1){_n.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const p=e.elements,m=p[0],_=p[4],v=p[8],y=p[1],M=p[5],b=p[9],T=p[2],S=p[6],g=p[10];if(Math.abs(_-y)<.01&&Math.abs(v-T)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(v+T)<.1&&Math.abs(b+S)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const E=(m+1)/2,R=(M+1)/2,I=(g+1)/2,B=(_+y)/4,O=(v+T)/4,et=(b+S)/4;return E>R&&E>I?E<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(E),l=B/s,u=O/s):R>I?R<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(R),s=B/l,u=et/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=O/u,l=et/u),this.set(s,l,u,i),this}let L=Math.sqrt((S-b)*(S-b)+(v-T)*(v-T)+(y-_)*(y-_));return Math.abs(L)<.001&&(L=1),this.x=(S-b)/L,this.y=(v-T)/L,this.z=(y-_)/L,this.w=Math.acos((m+M+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NS extends Or{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new _n(0,0,e,i),this.scissorTest=!1,this.viewport=new _n(0,0,e,i);const l={width:e,height:i,depth:1};s.encoding!==void 0&&(Vo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Ms?En:gi),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Wn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,i,s=1){(this.width!==e||this.height!==i||this.depth!==s)&&(this.width=e,this.height=i,this.depth=s,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new j_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends NS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class X_ extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class OS extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let p=s[l+0],m=s[l+1],_=s[l+2],v=s[l+3];const y=u[d+0],M=u[d+1],b=u[d+2],T=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v;return}if(h===1){e[i+0]=y,e[i+1]=M,e[i+2]=b,e[i+3]=T;return}if(v!==T||p!==y||m!==M||_!==b){let S=1-h;const g=p*y+m*M+_*b+v*T,L=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const I=Math.sqrt(E),B=Math.atan2(I,g*L);S=Math.sin(S*B)/I,h=Math.sin(h*B)/I}const R=h*L;if(p=p*S+y*R,m=m*S+M*R,_=_*S+b*R,v=v*S+T*R,S===1-h){const I=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=I,m*=I,_*=I,v*=I}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],p=s[l+1],m=s[l+2],_=s[l+3],v=u[d],y=u[d+1],M=u[d+2],b=u[d+3];return e[i]=h*b+_*v+p*M-m*y,e[i+1]=p*b+_*y+m*v-h*M,e[i+2]=m*b+_*M+h*y-p*v,e[i+3]=_*b-h*v-p*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),_=h(l/2),v=h(u/2),y=p(s/2),M=p(l/2),b=p(u/2);switch(d){case"XYZ":this._x=y*_*v+m*M*b,this._y=m*M*v-y*_*b,this._z=m*_*b+y*M*v,this._w=m*_*v-y*M*b;break;case"YXZ":this._x=y*_*v+m*M*b,this._y=m*M*v-y*_*b,this._z=m*_*b-y*M*v,this._w=m*_*v+y*M*b;break;case"ZXY":this._x=y*_*v-m*M*b,this._y=m*M*v+y*_*b,this._z=m*_*b+y*M*v,this._w=m*_*v-y*M*b;break;case"ZYX":this._x=y*_*v-m*M*b,this._y=m*M*v+y*_*b,this._z=m*_*b-y*M*v,this._w=m*_*v+y*M*b;break;case"YZX":this._x=y*_*v+m*M*b,this._y=m*M*v+y*_*b,this._z=m*_*b-y*M*v,this._w=m*_*v-y*M*b;break;case"XZY":this._x=y*_*v-m*M*b,this._y=m*M*v-y*_*b,this._z=m*_*b+y*M*v,this._w=m*_*v+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],_=i[6],v=i[10],y=s+h+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(s>h&&s>v){const M=2*Math.sqrt(1+s-h-v);this._w=(_-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>v){const M=2*Math.sqrt(1+h-s-v);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+v-s-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+d*h+l*m-u*p,this._y=l*_+d*p+u*h-s*m,this._z=u*_+d*m+s*p-l*h,this._w=d*_-s*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,h),v=Math.sin((1-i)*_)/m,y=Math.sin(i*_)/m;return this._w=d*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),s*Math.sin(u),s*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(P0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(P0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*s),_=2*(h*i-u*l),v=2*(u*s-d*i);return this.x=i+p*m+d*v-h*_,this.y=s+p*_+h*m-u*v,this.z=l+p*v+u*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-s*p,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(zn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ph=new Z,P0=new Wo;class qo{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Si):Si.fromBufferAttribute(u,d),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rc.copy(s.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),oc.subVectors(this.max,Oo),rr.subVectors(e.a,Oo),or.subVectors(e.b,Oo),lr.subVectors(e.c,Oo),Na.subVectors(or,rr),Oa.subVectors(lr,or),hs.subVectors(rr,lr);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-hs.z,hs.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,hs.z,0,-hs.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-hs.y,hs.x,0];return!mh(i,rr,or,lr,oc)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,rr,or,lr,oc))?!1:(lc.crossVectors(Na,Oa),i=[lc.x,lc.y,lc.z],mh(i,rr,or,lr,oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Si=new Z,rc=new qo,rr=new Z,or=new Z,lr=new Z,Na=new Z,Oa=new Z,hs=new Z,Oo=new Z,oc=new Z,lc=new Z,ds=new Z;function mh(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){ds.fromArray(o,u);const h=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),p=e.dot(ds),m=i.dot(ds),_=s.dot(ds);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const zS=new qo,zo=new Z,gh=new Z;class Yo{constructor(e=new Z,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):zS.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(gh)),this.expandByPoint(zo.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new Z,_h=new Z,cc=new Z,za=new Z,vh=new Z,uc=new Z,xh=new Z;class $h{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){_h.copy(e).add(i).multiplyScalar(.5),cc.copy(i).sub(e).normalize(),za.copy(this.origin).sub(_h);const u=e.distanceTo(i)*.5,d=-this.direction.dot(cc),h=za.dot(this.direction),p=-za.dot(cc),m=za.lengthSq(),_=Math.abs(1-d*d);let v,y,M,b;if(_>0)if(v=d*p-h,y=d*h-p,b=u*_,v>=0)if(y>=-b)if(y<=b){const T=1/_;v*=T,y*=T,M=v*(v+d*y+2*h)+y*(d*v+y+2*p)+m}else y=u,v=Math.max(0,-(d*y+h)),M=-v*v+y*(y+2*p)+m;else y=-u,v=Math.max(0,-(d*y+h)),M=-v*v+y*(y+2*p)+m;else y<=-b?(v=Math.max(0,-(-d*u+h)),y=v>0?-u:Math.min(Math.max(-u,-p),u),M=-v*v+y*(y+2*p)+m):y<=b?(v=0,y=Math.min(Math.max(-u,-p),u),M=y*(y+2*p)+m):(v=Math.max(0,-(d*u+h)),y=v>0?u:Math.min(Math.max(-u,-p),u),M=-v*v+y*(y+2*p)+m);else y=d>0?-u:u,v=Math.max(0,-(d*y+h)),M=-v*v+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(_h).addScaledVector(cc,y),M}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),_>=0?(u=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(u=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(h=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,s,l,u){vh.subVectors(i,e),uc.subVectors(s,e),xh.crossVectors(vh,uc);let d=this.direction.dot(xh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;za.subVectors(this.origin,e);const p=h*this.direction.dot(uc.crossVectors(za,uc));if(p<0)return null;const m=h*this.direction.dot(vh.cross(za));if(m<0||p+m>d)return null;const _=-h*za.dot(xh);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,i,s,l,u,d,h,p,m,_,v,y,M,b,T,S){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,p,m,_,v,y,M,b,T,S)}set(e,i,s,l,u,d,h,p,m,_,v,y,M,b,T,S){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=y,g[3]=M,g[7]=b,g[11]=T,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/cr.setFromMatrixColumn(e,0).length(),u=1/cr.setFromMatrixColumn(e,1).length(),d=1/cr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const y=d*_,M=d*v,b=h*_,T=h*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=M+b*m,i[5]=y-T*m,i[9]=-h*p,i[2]=T-y*m,i[6]=b+M*m,i[10]=d*p}else if(e.order==="YXZ"){const y=p*_,M=p*v,b=m*_,T=m*v;i[0]=y+T*h,i[4]=b*h-M,i[8]=d*m,i[1]=d*v,i[5]=d*_,i[9]=-h,i[2]=M*h-b,i[6]=T+y*h,i[10]=d*p}else if(e.order==="ZXY"){const y=p*_,M=p*v,b=m*_,T=m*v;i[0]=y-T*h,i[4]=-d*v,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*_,i[9]=T-y*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const y=d*_,M=d*v,b=h*_,T=h*v;i[0]=p*_,i[4]=b*m-M,i[8]=y*m+T,i[1]=p*v,i[5]=T*m+y,i[9]=M*m-b,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const y=d*p,M=d*m,b=h*p,T=h*m;i[0]=p*_,i[4]=T-y*v,i[8]=b*v+M,i[1]=v,i[5]=d*_,i[9]=-h*_,i[2]=-m*_,i[6]=M*v+b,i[10]=y-T*v}else if(e.order==="XZY"){const y=d*p,M=d*m,b=h*p,T=h*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=y*v+T,i[5]=d*_,i[9]=M*v-b,i[2]=b*v-M,i[6]=h*_,i[10]=T*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PS,e,BS)}lookAt(e,i,s){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Pa.crossVectors(s,ni),Pa.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Pa.crossVectors(s,ni)),Pa.normalize(),fc.crossVectors(ni,Pa),l[0]=Pa.x,l[4]=fc.x,l[8]=ni.x,l[1]=Pa.y,l[5]=fc.y,l[9]=ni.y,l[2]=Pa.z,l[6]=fc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],_=s[1],v=s[5],y=s[9],M=s[13],b=s[2],T=s[6],S=s[10],g=s[14],L=s[3],E=s[7],R=s[11],I=s[15],B=l[0],O=l[4],et=l[8],C=l[12],P=l[1],ut=l[5],ht=l[9],Mt=l[13],k=l[2],K=l[6],F=l[10],q=l[14],W=l[3],ft=l[7],ot=l[11],N=l[15];return u[0]=d*B+h*P+p*k+m*W,u[4]=d*O+h*ut+p*K+m*ft,u[8]=d*et+h*ht+p*F+m*ot,u[12]=d*C+h*Mt+p*q+m*N,u[1]=_*B+v*P+y*k+M*W,u[5]=_*O+v*ut+y*K+M*ft,u[9]=_*et+v*ht+y*F+M*ot,u[13]=_*C+v*Mt+y*q+M*N,u[2]=b*B+T*P+S*k+g*W,u[6]=b*O+T*ut+S*K+g*ft,u[10]=b*et+T*ht+S*F+g*ot,u[14]=b*C+T*Mt+S*q+g*N,u[3]=L*B+E*P+R*k+I*W,u[7]=L*O+E*ut+R*K+I*ft,u[11]=L*et+E*ht+R*F+I*ot,u[15]=L*C+E*Mt+R*q+I*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],_=e[2],v=e[6],y=e[10],M=e[14],b=e[3],T=e[7],S=e[11],g=e[15];return b*(+u*p*v-l*m*v-u*h*y+s*m*y+l*h*M-s*p*M)+T*(+i*p*M-i*m*y+u*d*y-l*d*M+l*m*_-u*p*_)+S*(+i*m*v-i*h*M-u*d*v+s*d*M+u*h*_-s*m*_)+g*(-l*h*_-i*p*v+i*h*y+l*d*v-s*d*y+s*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=e[9],y=e[10],M=e[11],b=e[12],T=e[13],S=e[14],g=e[15],L=v*S*m-T*y*m+T*p*M-h*S*M-v*p*g+h*y*g,E=b*y*m-_*S*m-b*p*M+d*S*M+_*p*g-d*y*g,R=_*T*m-b*v*m+b*h*M-d*T*M-_*h*g+d*v*g,I=b*v*p-_*T*p-b*h*y+d*T*y+_*h*S-d*v*S,B=i*L+s*E+l*R+u*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=L*O,e[1]=(T*y*u-v*S*u-T*l*M+s*S*M+v*l*g-s*y*g)*O,e[2]=(h*S*u-T*p*u+T*l*m-s*S*m-h*l*g+s*p*g)*O,e[3]=(v*p*u-h*y*u-v*l*m+s*y*m+h*l*M-s*p*M)*O,e[4]=E*O,e[5]=(_*S*u-b*y*u+b*l*M-i*S*M-_*l*g+i*y*g)*O,e[6]=(b*p*u-d*S*u-b*l*m+i*S*m+d*l*g-i*p*g)*O,e[7]=(d*y*u-_*p*u+_*l*m-i*y*m-d*l*M+i*p*M)*O,e[8]=R*O,e[9]=(b*v*u-_*T*u-b*s*M+i*T*M+_*s*g-i*v*g)*O,e[10]=(d*T*u-b*h*u+b*s*m-i*T*m-d*s*g+i*h*g)*O,e[11]=(_*h*u-d*v*u-_*s*m+i*v*m+d*s*M-i*h*M)*O,e[12]=I*O,e[13]=(_*T*l-b*v*l+b*s*y-i*T*y-_*s*S+i*v*S)*O,e[14]=(b*h*l-d*T*l-b*s*p+i*T*p+d*s*S-i*h*S)*O,e[15]=(d*v*l-_*h*l+_*s*p-i*v*p-d*s*y+i*h*y)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,p=e.z,m=u*d,_=u*h;return this.set(m*d+s,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+s,_*p-l*d,0,m*p-l*h,_*p+l*d,u*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,_=d+d,v=h+h,y=u*m,M=u*_,b=u*v,T=d*_,S=d*v,g=h*v,L=p*m,E=p*_,R=p*v,I=s.x,B=s.y,O=s.z;return l[0]=(1-(T+g))*I,l[1]=(M+R)*I,l[2]=(b-E)*I,l[3]=0,l[4]=(M-R)*B,l[5]=(1-(y+g))*B,l[6]=(S+L)*B,l[7]=0,l[8]=(b+E)*O,l[9]=(S-L)*O,l[10]=(1-(y+T))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=cr.set(l[0],l[1],l[2]).length();const d=cr.set(l[4],l[5],l[6]).length(),h=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Mi.copy(this);const m=1/u,_=1/d,v=1/h;return Mi.elements[0]*=m,Mi.elements[1]*=m,Mi.elements[2]*=m,Mi.elements[4]*=_,Mi.elements[5]*=_,Mi.elements[6]*=_,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,i.setFromRotationMatrix(Mi),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=ia){const p=this.elements,m=2*u/(i-e),_=2*u/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let M,b;if(h===ia)M=-(d+u)/(d-u),b=-2*d*u/(d-u);else if(h===Ic)M=-d/(d-u),b=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=ia){const p=this.elements,m=1/(i-e),_=1/(s-l),v=1/(d-u),y=(i+e)*m,M=(s+l)*_;let b,T;if(h===ia)b=(d+u)*v,T=-2*v;else if(h===Ic)b=u*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const cr=new Z,Mi=new Ye,PS=new Z(0,0,0),BS=new Z(1,1,1),Pa=new Z,fc=new Z,ni=new Z,B0=new Ye,I0=new Wo;class jc{constructor(e=0,i=0,s=0,l=jc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],_=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(zn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-zn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(zn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-zn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(zn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-zn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return B0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return I0.setFromEuler(this),this.setFromQuaternion(I0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jc.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IS=0;const F0=new Z,ur=new Wo,Qi=new Ye,hc=new Z,Po=new Z,FS=new Z,HS=new Wo,H0=new Z(1,0,0),G0=new Z(0,1,0),V0=new Z(0,0,1),GS={type:"added"},VS={type:"removed"};class cn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new Z,i=new jc,s=new Wo,l=new Z(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new de}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(H0,e)}rotateY(e){return this.rotateOnAxis(G0,e)}rotateZ(e){return this.rotateOnAxis(V0,e)}translateOnAxis(e,i){return F0.copy(e).applyQuaternion(this.quaternion),this.position.add(F0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(H0,e)}translateY(e){return this.translateOnAxis(G0,e)}translateZ(e){return this.translateOnAxis(V0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?hc.copy(e):hc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Po,hc,this.up):Qi.lookAt(hc,Po,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ur.setFromRotationMatrix(Qi),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(VS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,HS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const u=i[s];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),v=d(e.shapes),y=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}cn.DEFAULT_UP=new Z(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new Z,Ji=new Z,yh=new Z,$i=new Z,fr=new Z,hr=new Z,j0=new Z,Sh=new Z,Mh=new Z,Eh=new Z;let dc=!1;class mi{constructor(e=new Z,i=new Z,s=new Z){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ei.subVectors(e,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ei.subVectors(l,i),Ji.subVectors(s,i),yh.subVectors(e,i);const d=Ei.dot(Ei),h=Ei.dot(Ji),p=Ei.dot(yh),m=Ji.dot(Ji),_=Ji.dot(yh),v=d*m-h*h;if(v===0)return u.set(0,0,0),null;const y=1/v,M=(m*p-h*_)*y,b=(d*_-h*p)*y;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(e,i,s,l,u,d,h,p){return dc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dc=!0),this.getInterpolation(e,i,s,l,u,d,h,p)}static getInterpolation(e,i,s,l,u,d,h,p){return this.getBarycoord(e,i,s,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,$i.x),p.addScaledVector(d,$i.y),p.addScaledVector(h,$i.z),p)}static isFrontFacing(e,i,s,l){return Ei.subVectors(s,i),Ji.subVectors(e,i),Ei.cross(Ji).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Ei.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,s,l,u){return dc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dc=!0),mi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}getInterpolation(e,i,s,l,u){return mi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;fr.subVectors(l,s),hr.subVectors(u,s),Sh.subVectors(e,s);const p=fr.dot(Sh),m=hr.dot(Sh);if(p<=0&&m<=0)return i.copy(s);Mh.subVectors(e,l);const _=fr.dot(Mh),v=hr.dot(Mh);if(_>=0&&v<=_)return i.copy(l);const y=p*v-_*m;if(y<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(s).addScaledVector(fr,d);Eh.subVectors(e,u);const M=fr.dot(Eh),b=hr.dot(Eh);if(b>=0&&M<=b)return i.copy(u);const T=M*m-p*b;if(T<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(s).addScaledVector(hr,h);const S=_*b-M*v;if(S<=0&&v-_>=0&&M-b>=0)return j0.subVectors(u,l),h=(v-_)/(v-_+(M-b)),i.copy(l).addScaledVector(j0,h);const g=1/(S+T+y);return d=T*g,h=y*g,i.copy(s).addScaledVector(fr,d).addScaledVector(hr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Th(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class fe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ne.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ne.workingColorSpace){if(e=wS(e,1),i=zn(i,0,1),s=zn(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=Th(d,u,e+1/3),this.g=Th(d,u,e),this.b=Th(d,u,e-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(e,i=En){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=En){const s=W_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=hh(e.r),this.g=hh(e.g),this.b=hh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Ne.fromWorkingColorSpace(wn.copy(this),e),Math.round(zn(wn.r*255,0,255))*65536+Math.round(zn(wn.g*255,0,255))*256+Math.round(zn(wn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const v=d-h;switch(m=_<=.5?v/(d+h):v/(2-d-h),d){case s:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-s)/v+2;break;case u:p=(s-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=En){Ne.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==En?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+i,Ba.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ba),e.getHSL(pc);const s=uh(Ba.h,pc.h,i),l=uh(Ba.s,pc.s,i),u=uh(Ba.l,pc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new fe;fe.NAMES=W_;let jS=0;class qa extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Ar,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Ih,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Bh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ih&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Oc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ka extends qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=C_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new Z,mc=new ae;class qn{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=jh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(e),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=na(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Pe(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=na(i,this.array)),i}setX(e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=na(i,this.array)),i}setY(e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=na(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=na(i,this.array)),i}setW(e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array),l=Pe(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array),l=Pe(l,this.array),u=Pe(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jh&&(e.usage=this.usage),e}}class q_ extends qn{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Y_ extends qn{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Pn extends qn{constructor(e,i,s){super(new Float32Array(e),i,s)}}let XS=0;const di=new Ye,bh=new cn,dr=new Z,ii=new qo,Bo=new qo,mn=new Z;class Bn extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G_(e)?Y_:q_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,s){return di.makeTranslation(e,i,s),this.applyMatrix4(di),this}scale(e,i,s){return di.makeScale(e,i,s),this.applyMatrix4(di),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const i=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Pn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Bo.setFromBufferAttribute(h),this.morphTargetsRelative?(mn.addVectors(ii.min,Bo.min),ii.expandByPoint(mn),mn.addVectors(ii.max,Bo.max),ii.expandByPoint(mn)):(ii.expandByPoint(Bo.min),ii.expandByPoint(Bo.max))}ii.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)mn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(mn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)mn.fromBufferAttribute(h,m),p&&(dr.fromBufferAttribute(e,m),mn.add(dr)),l=Math.max(l,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,m=[],_=[];for(let P=0;P<h;P++)m[P]=new Z,_[P]=new Z;const v=new Z,y=new Z,M=new Z,b=new ae,T=new ae,S=new ae,g=new Z,L=new Z;function E(P,ut,ht){v.fromArray(l,P*3),y.fromArray(l,ut*3),M.fromArray(l,ht*3),b.fromArray(d,P*2),T.fromArray(d,ut*2),S.fromArray(d,ht*2),y.sub(v),M.sub(v),T.sub(b),S.sub(b);const Mt=1/(T.x*S.y-S.x*T.y);isFinite(Mt)&&(g.copy(y).multiplyScalar(S.y).addScaledVector(M,-T.y).multiplyScalar(Mt),L.copy(M).multiplyScalar(T.x).addScaledVector(y,-S.x).multiplyScalar(Mt),m[P].add(g),m[ut].add(g),m[ht].add(g),_[P].add(L),_[ut].add(L),_[ht].add(L))}let R=this.groups;R.length===0&&(R=[{start:0,count:s.length}]);for(let P=0,ut=R.length;P<ut;++P){const ht=R[P],Mt=ht.start,k=ht.count;for(let K=Mt,F=Mt+k;K<F;K+=3)E(s[K+0],s[K+1],s[K+2])}const I=new Z,B=new Z,O=new Z,et=new Z;function C(P){O.fromArray(u,P*3),et.copy(O);const ut=m[P];I.copy(ut),I.sub(O.multiplyScalar(O.dot(ut))).normalize(),B.crossVectors(et,ut);const Mt=B.dot(_[P])<0?-1:1;p[P*4]=I.x,p[P*4+1]=I.y,p[P*4+2]=I.z,p[P*4+3]=Mt}for(let P=0,ut=R.length;P<ut;++P){const ht=R[P],Mt=ht.start,k=ht.count;for(let K=Mt,F=Mt+k;K<F;K+=3)C(s[K+0]),C(s[K+1]),C(s[K+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new Z,u=new Z,d=new Z,h=new Z,p=new Z,m=new Z,_=new Z,v=new Z;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),T=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),_.subVectors(d,u),v.subVectors(l,u),_.cross(v),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),h.add(_),p.add(_),m.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),_.subVectors(d,u),v.subVectors(l,u),_.cross(v),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,v=h.normalized,y=new m.constructor(p.length*_);let M=0,b=0;for(let T=0,S=p.length;T<S;T++){h.isInterleavedBufferAttribute?M=p[T]*h.data.stride+h.offset:M=p[T]*_;for(let g=0;g<_;g++)y[b++]=m[M++]}return new qn(y,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bn,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let _=0,v=m.length;_<v;_++){const y=m[_],M=e(y,s);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,y=m.length;v<y;v++){const M=m[v];_.push(M.toJSON(e.data))}_.length>0&&(l[p]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let y=0,M=v.length;y<M;y++)_.push(v[y].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X0=new Ye,ps=new $h,gc=new Yo,k0=new Z,pr=new Z,mr=new Z,gr=new Z,Ah=new Z,_c=new Z,vc=new ae,xc=new ae,yc=new ae,W0=new Z,q0=new Z,Y0=new Z,Sc=new Z,Mc=new Z;class Cn extends cn{constructor(e=new Bn,i=new ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){_c.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=h[p],v=u[p];_!==0&&(Ah.fromBufferAttribute(v,e),d?_c.addScaledVector(Ah,_):_c.addScaledVector(Ah.sub(i),_))}i.add(_c)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(u),ps.copy(e.ray).recast(e.near),!(gc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(gc,k0)===null||ps.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(X0.copy(u).invert(),ps.copy(e.ray).applyMatrix4(X0),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ps)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,y=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,T=y.length;b<T;b++){const S=y[b],g=d[S.materialIndex],L=Math.max(S.start,M.start),E=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let R=L,I=E;R<I;R+=3){const B=h.getX(R),O=h.getX(R+1),et=h.getX(R+2);l=Ec(this,g,e,s,m,_,v,B,O,et),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=b,g=T;S<g;S+=3){const L=h.getX(S),E=h.getX(S+1),R=h.getX(S+2);l=Ec(this,d,e,s,m,_,v,L,E,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,T=y.length;b<T;b++){const S=y[b],g=d[S.materialIndex],L=Math.max(S.start,M.start),E=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let R=L,I=E;R<I;R+=3){const B=R,O=R+1,et=R+2;l=Ec(this,g,e,s,m,_,v,B,O,et),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let S=b,g=T;S<g;S+=3){const L=S,E=S+1,R=S+2;l=Ec(this,d,e,s,m,_,v,L,E,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function kS(o,e,i,s,l,u,d,h){let p;if(e.side===kn?p=s.intersectTriangle(d,u,l,!0,h):p=s.intersectTriangle(l,u,d,e.side===Xa,h),p===null)return null;Mc.copy(h),Mc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Mc);return m<i.near||m>i.far?null:{distance:m,point:Mc.clone(),object:o}}function Ec(o,e,i,s,l,u,d,h,p,m){o.getVertexPosition(h,pr),o.getVertexPosition(p,mr),o.getVertexPosition(m,gr);const _=kS(o,e,i,s,pr,mr,gr,Sc);if(_){l&&(vc.fromBufferAttribute(l,h),xc.fromBufferAttribute(l,p),yc.fromBufferAttribute(l,m),_.uv=mi.getInterpolation(Sc,pr,mr,gr,vc,xc,yc,new ae)),u&&(vc.fromBufferAttribute(u,h),xc.fromBufferAttribute(u,p),yc.fromBufferAttribute(u,m),_.uv1=mi.getInterpolation(Sc,pr,mr,gr,vc,xc,yc,new ae),_.uv2=_.uv1),d&&(W0.fromBufferAttribute(d,h),q0.fromBufferAttribute(d,p),Y0.fromBufferAttribute(d,m),_.normal=mi.getInterpolation(Sc,pr,mr,gr,W0,q0,Y0,new Z),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new Z,materialIndex:0};mi.getNormal(pr,mr,gr,v.normal),_.face=v}return _}class zr extends Bn{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],_=[],v=[];let y=0,M=0;b("z","y","x",-1,-1,s,i,e,d,u,0),b("z","y","x",1,-1,s,i,-e,d,u,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(_,3)),this.setAttribute("uv",new Pn(v,2));function b(T,S,g,L,E,R,I,B,O,et,C){const P=R/O,ut=I/et,ht=R/2,Mt=I/2,k=B/2,K=O+1,F=et+1;let q=0,W=0;const ft=new Z;for(let ot=0;ot<F;ot++){const N=ot*ut-Mt;for(let X=0;X<K;X++){const G=X*P-ht;ft[T]=G*L,ft[S]=N*E,ft[g]=k,m.push(ft.x,ft.y,ft.z),ft[T]=0,ft[S]=0,ft[g]=B>0?1:-1,_.push(ft.x,ft.y,ft.z),v.push(X/O),v.push(1-ot/et),q+=1}}for(let ot=0;ot<et;ot++)for(let N=0;N<O;N++){const X=y+N+K*ot,G=y+N+K*(ot+1),Q=y+(N+1)+K*(ot+1),gt=y+(N+1)+K*ot;p.push(X,G,gt),p.push(G,Q,gt),W+=6}h.addGroup(M,W,C),M+=W,y+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const s=Dr(o[i]);for(const l in s)e[l]=s[l]}return e}function WS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Z_(o){return o.getRenderTarget()===null?o.outputColorSpace:Ne.workingColorSpace}const qS={clone:Dr,merge:Nn};var YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=ZS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class K_ extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends K_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ch*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ch*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,vr=1;class KS extends cn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gn(_r,vr,e,i);l.layers=this.layers,this.add(l);const u=new gn(_r,vr,e,i);u.layers=this.layers,this.add(u);const d=new gn(_r,vr,e,i);d.layers=this.layers,this.add(d);const h=new gn(_r,vr,e,i);h.layers=this.layers,this.add(h);const p=new gn(_r,vr,e,i);p.layers=this.layers,this.add(p);const m=new gn(_r,vr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,_]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(v,y,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Q_ extends Wn{constructor(e,i,s,l,u,d,h,p,m,_){e=e!==void 0?e:[],i=i!==void 0?i:wr,super(e,i,s,l,u,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QS extends Es{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];i.encoding!==void 0&&(Vo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ms?En:gi),this.texture=new Q_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new zr(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Dr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new Cn(l,u),h=i.minFilter;return i.minFilter===Xo&&(i.minFilter=pi),new KS(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}const Rh=new Z,JS=new Z,$S=new de;class gs{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Rh.subVectors(s,i).cross(JS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Rh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||$S.getNormalMatrix(e),l=this.coplanarPoint(Rh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Yo,Tc=new Z;class td{constructor(e=new gs,i=new gs,s=new gs,l=new gs,u=new gs,d=new gs){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ia){const s=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],_=l[5],v=l[6],y=l[7],M=l[8],b=l[9],T=l[10],S=l[11],g=l[12],L=l[13],E=l[14],R=l[15];if(s[0].setComponents(p-u,y-m,S-M,R-g).normalize(),s[1].setComponents(p+u,y+m,S+M,R+g).normalize(),s[2].setComponents(p+d,y+_,S+b,R+L).normalize(),s[3].setComponents(p-d,y-_,S-b,R-L).normalize(),s[4].setComponents(p-h,y-v,S-T,R-E).normalize(),i===ia)s[5].setComponents(p+h,y+v,S+T,R+E).normalize();else if(i===Ic)s[5].setComponents(h,v,T,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Tc.x=l.normal.x>0?e.max.x:e.min.x,Tc.y=l.normal.y>0?e.max.y:e.min.y,Tc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J_(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function tM(o,e){const i=e.isWebGL2,s=new WeakMap;function l(m,_){const v=m.array,y=m.usage,M=v.byteLength,b=o.createBuffer();o.bindBuffer(_,b),o.bufferData(_,v,y),m.onUploadCallback();let T;if(v instanceof Float32Array)T=o.FLOAT;else if(v instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)T=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)T=o.SHORT;else if(v instanceof Uint32Array)T=o.UNSIGNED_INT;else if(v instanceof Int32Array)T=o.INT;else if(v instanceof Int8Array)T=o.BYTE;else if(v instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:b,type:T,bytesPerElement:v.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,_,v){const y=_.array,M=_._updateRange,b=_.updateRanges;if(o.bindBuffer(v,m),M.count===-1&&b.length===0&&o.bufferSubData(v,0,y),b.length!==0){for(let T=0,S=b.length;T<S;T++){const g=b[T];i?o.bufferSubData(v,g.start*y.BYTES_PER_ELEMENT,y,g.start,g.count):o.bufferSubData(v,g.start*y.BYTES_PER_ELEMENT,y.subarray(g.start,g.start+g.count))}_.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(v,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):o.bufferSubData(v,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),_.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function h(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=s.get(m);_&&(o.deleteBuffer(_.buffer),s.delete(m))}function p(m,_){if(m.isGLBufferAttribute){const y=s.get(m);(!y||y.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const v=s.get(m);if(v===void 0)s.set(m,l(m,_));else if(v.version<m.version){if(v.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(v.buffer,m,_),v.version=m.version}}return{get:d,remove:h,update:p}}class Ur extends Bn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,_=p+1,v=e/h,y=i/p,M=[],b=[],T=[],S=[];for(let g=0;g<_;g++){const L=g*y-d;for(let E=0;E<m;E++){const R=E*v-u;b.push(R,-L,0),T.push(0,0,1),S.push(E/h),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let L=0;L<h;L++){const E=L+m*g,R=L+m*(g+1),I=L+1+m*(g+1),B=L+1+m*g;M.push(E,R,B),M.push(R,I,B)}this.setIndex(M),this.setAttribute("position",new Pn(b,3)),this.setAttribute("normal",new Pn(T,3)),this.setAttribute("uv",new Pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
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
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oM=`#ifdef USE_AOMAP
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
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cM=`#ifdef USE_BATCHING
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
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pM=`#ifdef USE_IRIDESCENCE
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
#endif`,mM=`#ifdef USE_BUMPMAP
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,TM=`#define PI 3.141592653589793
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
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AM=`vec3 transformedNormal = objectNormal;
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
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`
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
}`,NM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
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
}`,jM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
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
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
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
#endif`,tE=`struct PhysicalMaterial {
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
}`,eE=`
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fE=`#if defined( USE_POINTS_UV )
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
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,_E=`#ifdef USE_MORPHTARGETS
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
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
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
#endif`,TE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FE=`float getShadowMask() {
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
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
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
}`,oT=`#if DEPTH_PACKING == 3200
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
}`,lT=`#define DISTANCE
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
}`,cT=`#define DISTANCE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`uniform float scale;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#define LAMBERT
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
}`,_T=`#define LAMBERT
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
}`,vT=`#define MATCAP
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
}`,xT=`#define MATCAP
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
}`,yT=`#define NORMAL
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
}`,ST=`#define NORMAL
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
}`,MT=`#define PHONG
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
}`,ET=`#define PHONG
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
}`,TT=`#define STANDARD
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
}`,bT=`#define STANDARD
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
}`,AT=`#define TOON
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
}`,RT=`#define TOON
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
}`,wT=`uniform float size;
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
}`,CT=`uniform vec3 diffuse;
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
}`,LT=`#include <common>
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
}`,DT=`uniform vec3 color;
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
}`,UT=`uniform float rotation;
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
}`,NT=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:eM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:aM,alphatest_fragment:sM,alphatest_pars_fragment:rM,aomap_fragment:oM,aomap_pars_fragment:lM,batching_pars_vertex:cM,batching_vertex:uM,begin_vertex:fM,beginnormal_vertex:hM,bsdfs:dM,iridescence_fragment:pM,bumpmap_pars_fragment:mM,clipping_planes_fragment:gM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:vM,clipping_planes_vertex:xM,color_fragment:yM,color_pars_fragment:SM,color_pars_vertex:MM,color_vertex:EM,common:TM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:AM,displacementmap_pars_vertex:RM,displacementmap_vertex:wM,emissivemap_fragment:CM,emissivemap_pars_fragment:LM,colorspace_fragment:DM,colorspace_pars_fragment:UM,envmap_fragment:NM,envmap_common_pars_fragment:OM,envmap_pars_fragment:zM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:YM,envmap_vertex:BM,fog_vertex:IM,fog_pars_vertex:FM,fog_fragment:HM,fog_pars_fragment:GM,gradientmap_pars_fragment:VM,lightmap_fragment:jM,lightmap_pars_fragment:XM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:WM,lights_pars_begin:qM,lights_toon_fragment:ZM,lights_toon_pars_fragment:KM,lights_phong_fragment:QM,lights_phong_pars_fragment:JM,lights_physical_fragment:$M,lights_physical_pars_fragment:tE,lights_fragment_begin:eE,lights_fragment_maps:nE,lights_fragment_end:iE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:sE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:oE,map_fragment:lE,map_pars_fragment:cE,map_particle_fragment:uE,map_particle_pars_fragment:fE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:dE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:_E,normal_fragment_begin:vE,normal_fragment_maps:xE,normal_pars_fragment:yE,normal_pars_vertex:SE,normal_vertex:ME,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:TE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:RE,opaque_fragment:wE,packing:CE,premultiplied_alpha_fragment:LE,project_vertex:DE,dithering_fragment:UE,dithering_pars_fragment:NE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:BE,shadowmap_vertex:IE,shadowmask_pars_fragment:FE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:VE,skinnormal_vertex:jE,specularmap_fragment:XE,specularmap_pars_fragment:kE,tonemapping_fragment:WE,tonemapping_pars_fragment:qE,transmission_fragment:YE,transmission_pars_fragment:ZE,uv_pars_fragment:KE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:$E,background_vert:tT,background_frag:eT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:sT,depth_vert:rT,depth_frag:oT,distanceRGBA_vert:lT,distanceRGBA_frag:cT,equirect_vert:uT,equirect_frag:fT,linedashed_vert:hT,linedashed_frag:dT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:vT,meshmatcap_frag:xT,meshnormal_vert:yT,meshnormal_frag:ST,meshphong_vert:MT,meshphong_frag:ET,meshphysical_vert:TT,meshphysical_frag:bT,meshtoon_vert:AT,meshtoon_frag:RT,points_vert:wT,points_frag:CT,shadow_vert:LT,shadow_frag:DT,sprite_vert:UT,sprite_frag:NT},At={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Di={basic:{uniforms:Nn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Nn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Nn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Nn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Nn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Nn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Nn([At.points,At.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Nn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Nn([At.common,At.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Nn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Nn([At.sprite,At.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Nn([At.common,At.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Nn([At.lights,At.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Di.physical={uniforms:Nn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const bc={r:0,b:0,g:0};function OT(o,e,i,s,l,u,d){const h=new fe(0);let p=u===!0?0:1,m,_,v=null,y=0,M=null;function b(S,g){let L=!1,E=g.isScene===!0?g.background:null;E&&E.isTexture&&(E=(g.backgroundBlurriness>0?i:e).get(E)),E===null?T(h,p):E&&E.isColor&&(T(E,1),L=!0);const R=o.xr.getEnvironmentBlendMode();R==="additive"?s.buffers.color.setClear(0,0,0,1,d):R==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Gc)?(_===void 0&&(_=new Cn(new zr(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Dr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_.material.uniforms.envMap.value=E,_.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,_.material.toneMapped=Ne.getTransfer(E.colorSpace)!==Ge,(v!==E||y!==E.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=E,y=E.version,M=o.toneMapping),_.layers.enableAll(),S.unshift(_,_.geometry,_.material,0,0,null)):E&&E.isTexture&&(m===void 0&&(m=new Cn(new Ur(2,2),new Wa({name:"BackgroundMaterial",uniforms:Dr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=E,m.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(E.colorSpace)!==Ge,E.matrixAutoUpdate===!0&&E.updateMatrix(),m.material.uniforms.uvTransform.value.copy(E.matrix),(v!==E||y!==E.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,v=E,y=E.version,M=o.toneMapping),m.layers.enableAll(),S.unshift(m,m.geometry,m.material,0,0,null))}function T(S,g){S.getRGB(bc,Z_(o)),s.buffers.color.setClear(bc.r,bc.g,bc.b,g,d)}return{getClearColor:function(){return h},setClearColor:function(S,g=1){h.set(S),p=g,T(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(S){p=S,T(h,p)},render:b}}function zT(o,e,i,s){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||u!==null,h={},p=S(null);let m=p,_=!1;function v(k,K,F,q,W){let ft=!1;if(d){const ot=T(q,F,K);m!==ot&&(m=ot,M(m.object)),ft=g(k,q,F,W),ft&&L(k,q,F,W)}else{const ot=K.wireframe===!0;(m.geometry!==q.id||m.program!==F.id||m.wireframe!==ot)&&(m.geometry=q.id,m.program=F.id,m.wireframe=ot,ft=!0)}W!==null&&i.update(W,o.ELEMENT_ARRAY_BUFFER),(ft||_)&&(_=!1,et(k,K,F,q),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(W).buffer))}function y(){return s.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(k){return s.isWebGL2?o.bindVertexArray(k):u.bindVertexArrayOES(k)}function b(k){return s.isWebGL2?o.deleteVertexArray(k):u.deleteVertexArrayOES(k)}function T(k,K,F){const q=F.wireframe===!0;let W=h[k.id];W===void 0&&(W={},h[k.id]=W);let ft=W[K.id];ft===void 0&&(ft={},W[K.id]=ft);let ot=ft[q];return ot===void 0&&(ot=S(y()),ft[q]=ot),ot}function S(k){const K=[],F=[],q=[];for(let W=0;W<l;W++)K[W]=0,F[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:F,attributeDivisors:q,object:k,attributes:{},index:null}}function g(k,K,F,q){const W=m.attributes,ft=K.attributes;let ot=0;const N=F.getAttributes();for(const X in N)if(N[X].location>=0){const Q=W[X];let gt=ft[X];if(gt===void 0&&(X==="instanceMatrix"&&k.instanceMatrix&&(gt=k.instanceMatrix),X==="instanceColor"&&k.instanceColor&&(gt=k.instanceColor)),Q===void 0||Q.attribute!==gt||gt&&Q.data!==gt.data)return!0;ot++}return m.attributesNum!==ot||m.index!==q}function L(k,K,F,q){const W={},ft=K.attributes;let ot=0;const N=F.getAttributes();for(const X in N)if(N[X].location>=0){let Q=ft[X];Q===void 0&&(X==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),X==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor));const gt={};gt.attribute=Q,Q&&Q.data&&(gt.data=Q.data),W[X]=gt,ot++}m.attributes=W,m.attributesNum=ot,m.index=q}function E(){const k=m.newAttributes;for(let K=0,F=k.length;K<F;K++)k[K]=0}function R(k){I(k,0)}function I(k,K){const F=m.newAttributes,q=m.enabledAttributes,W=m.attributeDivisors;F[k]=1,q[k]===0&&(o.enableVertexAttribArray(k),q[k]=1),W[k]!==K&&((s.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,K),W[k]=K)}function B(){const k=m.newAttributes,K=m.enabledAttributes;for(let F=0,q=K.length;F<q;F++)K[F]!==k[F]&&(o.disableVertexAttribArray(F),K[F]=0)}function O(k,K,F,q,W,ft,ot){ot===!0?o.vertexAttribIPointer(k,K,F,W,ft):o.vertexAttribPointer(k,K,F,q,W,ft)}function et(k,K,F,q){if(s.isWebGL2===!1&&(k.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const W=q.attributes,ft=F.getAttributes(),ot=K.defaultAttributeValues;for(const N in ft){const X=ft[N];if(X.location>=0){let G=W[N];if(G===void 0&&(N==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),N==="instanceColor"&&k.instanceColor&&(G=k.instanceColor)),G!==void 0){const Q=G.normalized,gt=G.itemSize,St=i.get(G);if(St===void 0)continue;const Et=St.buffer,Ft=St.type,Ot=St.bytesPerElement,Wt=s.isWebGL2===!0&&(Ft===o.INT||Ft===o.UNSIGNED_INT||G.gpuType===D_);if(G.isInterleavedBufferAttribute){const he=G.data,it=he.stride,hn=G.offset;if(he.isInstancedInterleavedBuffer){for(let Ht=0;Ht<X.locationSize;Ht++)I(X.location+Ht,he.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ht=0;Ht<X.locationSize;Ht++)R(X.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let Ht=0;Ht<X.locationSize;Ht++)O(X.location+Ht,gt/X.locationSize,Ft,Q,it*Ot,(hn+gt/X.locationSize*Ht)*Ot,Wt)}else{if(G.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)I(X.location+he,G.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let he=0;he<X.locationSize;he++)R(X.location+he);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let he=0;he<X.locationSize;he++)O(X.location+he,gt/X.locationSize,Ft,Q,gt*Ot,gt/X.locationSize*he*Ot,Wt)}}else if(ot!==void 0){const Q=ot[N];if(Q!==void 0)switch(Q.length){case 2:o.vertexAttrib2fv(X.location,Q);break;case 3:o.vertexAttrib3fv(X.location,Q);break;case 4:o.vertexAttrib4fv(X.location,Q);break;default:o.vertexAttrib1fv(X.location,Q)}}}}B()}function C(){ht();for(const k in h){const K=h[k];for(const F in K){const q=K[F];for(const W in q)b(q[W].object),delete q[W];delete K[F]}delete h[k]}}function P(k){if(h[k.id]===void 0)return;const K=h[k.id];for(const F in K){const q=K[F];for(const W in q)b(q[W].object),delete q[W];delete K[F]}delete h[k.id]}function ut(k){for(const K in h){const F=h[K];if(F[k.id]===void 0)continue;const q=F[k.id];for(const W in q)b(q[W].object),delete q[W];delete F[k.id]}}function ht(){Mt(),_=!0,m!==p&&(m=p,M(m.object))}function Mt(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:v,reset:ht,resetDefaultState:Mt,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:ut,initAttributes:E,enableAttribute:R,disableUnusedAttributes:B}}function PT(o,e,i,s){const l=s.isWebGL2;let u;function d(_){u=_}function h(_,v){o.drawArrays(u,_,v),i.update(v,u,1)}function p(_,v,y){if(y===0)return;let M,b;if(l)M=o,b="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](u,_,v,y),i.update(v,u,y)}function m(_,v,y){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<y;b++)this.render(_[b],v[b]);else{M.multiDrawArraysWEBGL(u,_,0,v,0,y);let b=0;for(let T=0;T<y;T++)b+=v[T];i.update(b,u,1)}}this.setMode=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function BT(o,e,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const p=u(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=d||e.has("WEBGL_draw_buffers"),_=i.logarithmicDepthBuffer===!0,v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),g=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),E=y>0,R=d||e.has("OES_texture_float"),I=E&&R,B=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:_,maxTextures:v,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:b,maxAttributes:T,maxVertexUniforms:S,maxVaryings:g,maxFragmentUniforms:L,vertexTextures:E,floatFragmentTextures:R,floatVertexTextures:I,maxSamples:B}}function IT(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new gs,h=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||s!==0||l;return l=y,s=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){i=_(v,y,0)},this.setState=function(v,y,M){const b=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,g=o.get(v);if(!l||b===null||b.length===0||u&&!S)u?_(null):m();else{const L=u?0:s,E=L*4;let R=g.clippingState||null;p.value=R,R=_(b,y,E,M);for(let I=0;I!==E;++I)R[I]=i[I];g.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,y,M,b){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=p.value,b!==!0||S===null){const g=M+T*4,L=y.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<g)&&(S=new Float32Array(g));for(let E=0,R=M;E!==T;++E,R+=4)d.copy(v[E]).applyMatrix4(L,h),d.normal.toArray(S,R),S[R+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function FT(o){let e=new WeakMap;function i(d,h){return h===Fh?d.mapping=wr:h===Hh&&(d.mapping=Cr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Fh||h===Hh)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new QS(p.height/2);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class $_ extends K_{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Tr=4,Z0=[.125,.215,.35,.446,.526,.582],xs=20,wh=new $_,K0=new fe;let Ch=null,Lh=0,Dh=0;const _s=(1+Math.sqrt(5))/2,xr=1/_s,Q0=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,_s,xr),new Z(0,_s,-xr),new Z(xr,0,_s),new Z(-xr,0,_s),new Z(_s,xr,0),new Z(-_s,xr,0)];class J0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Ch=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Lh,Dh),e.scissorTest=!1,Ac(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:ko,format:bi,colorSpace:aa,depthBuffer:!1},l=$0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$0(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HT(u)),this._blurMaterial=GT(u,e,i)}return l}_compileMaterial(e){const i=new Cn(this._lodPlanes[0],e);this._renderer.compile(i,wh)}_sceneToCubeUV(e,i,s,l){const h=new gn(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(K0),_.toneMapping=Ga,_.autoClear=!1;const M=new ka({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new Cn(new zr,M);let T=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,T=!0):(M.color.copy(K0),T=!0);for(let g=0;g<6;g++){const L=g%3;L===0?(h.up.set(0,p[g],0),h.lookAt(m[g],0,0)):L===1?(h.up.set(0,0,p[g]),h.lookAt(0,m[g],0)):(h.up.set(0,p[g],0),h.lookAt(0,0,m[g]));const E=this._cubeSize;Ac(l,L*E,g>2?E:0,E,E),_.setRenderTarget(l),T&&_.render(b,h),_.render(e,h)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===wr||e.mapping===Cr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Cn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;Ac(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,wh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Q0[(l-1)%Q0.length];this._blur(e,l-1,l,u,d)}i.autoClear=s}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Cn(this._lodPlanes[l],m),y=m.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*xs-1),T=u/b,S=isFinite(u)?1+Math.floor(_*T):xs;S>xs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const g=[];let L=0;for(let O=0;O<xs;++O){const et=O/T,C=Math.exp(-et*et/2);g.push(C),O===0?L+=C:O<S&&(L+=2*C)}for(let O=0;O<g.length;O++)g[O]=g[O]/L;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:E}=this;y.dTheta.value=b,y.mipInt.value=E-s;const R=this._sizeLods[l],I=3*R*(l>E-Tr?l-E+Tr:0),B=4*(this._cubeSize-R);Ac(i,I,B,3*R,2*R),p.setRenderTarget(i),p.render(v,wh)}}function HT(o){const e=[],i=[],s=[];let l=o;const u=o-Tr+1+Z0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-Tr?p=Z0[d-o+Tr-1]:d===0&&(p=0),s.push(p);const m=1/(h-2),_=-m,v=1+m,y=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,b=6,T=3,S=2,g=1,L=new Float32Array(T*b*M),E=new Float32Array(S*b*M),R=new Float32Array(g*b*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,et=B>2?0:-1,C=[O,et,0,O+2/3,et,0,O+2/3,et+1,0,O,et,0,O+2/3,et+1,0,O,et+1,0];L.set(C,T*b*B),E.set(y,S*b*B);const P=[B,B,B,B,B,B];R.set(P,g*b*B)}const I=new Bn;I.setAttribute("position",new qn(L,T)),I.setAttribute("uv",new qn(E,S)),I.setAttribute("faceIndex",new qn(R,g)),e.push(I),l>Tr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function $0(o,e,i){const s=new Es(o,e,i);return s.texture.mapping=Gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ac(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function GT(o,e,i){const s=new Float32Array(xs),l=new Z(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function t_(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function e_(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function ed(){return`

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
	`}function VT(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===Fh||p===Hh,_=p===wr||p===Cr;if(m||_)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let v=e.get(h);return i===null&&(i=new J0(o)),v=m?i.fromEquirectangular(h,v):i.fromCubemap(h,v),e.set(h,v),v.texture}else{if(e.has(h))return e.get(h).texture;{const v=h.image;if(m&&v&&v.height>0||_&&v&&l(v)){i===null&&(i=new J0(o));const y=m?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,y),h.addEventListener("dispose",u),y.texture}else return null}}}return h}function l(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function jT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function XT(o,e,i,s){const l={},u=new WeakMap;function d(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);for(const b in y.morphAttributes){const T=y.morphAttributes[b];for(let S=0,g=T.length;S<g;S++)e.remove(T[S])}y.removeEventListener("dispose",d),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(v,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function p(v){const y=v.attributes;for(const b in y)e.update(y[b],o.ARRAY_BUFFER);const M=v.morphAttributes;for(const b in M){const T=M[b];for(let S=0,g=T.length;S<g;S++)e.update(T[S],o.ARRAY_BUFFER)}}function m(v){const y=[],M=v.index,b=v.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let E=0,R=L.length;E<R;E+=3){const I=L[E+0],B=L[E+1],O=L[E+2];y.push(I,B,B,O,O,I)}}else if(b!==void 0){const L=b.array;T=b.version;for(let E=0,R=L.length/3-1;E<R;E+=3){const I=E+0,B=E+1,O=E+2;y.push(I,B,B,O,O,I)}}else return;const S=new(G_(y)?Y_:q_)(y,1);S.version=T;const g=u.get(v);g&&e.remove(g),u.set(v,S)}function _(v){const y=u.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&m(v)}else m(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:_}}function kT(o,e,i,s){const l=s.isWebGL2;let u;function d(M){u=M}let h,p;function m(M){h=M.type,p=M.bytesPerElement}function _(M,b){o.drawElements(u,b,h,M*p),i.update(b,u,1)}function v(M,b,T){if(T===0)return;let S,g;if(l)S=o,g="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[g](u,b,h,M*p,T),i.update(b,u,T)}function y(M,b,T){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<T;g++)this.render(M[g]/p,b[g]);else{S.multiDrawElementsWEBGL(u,b,0,h,M,0,T);let g=0;for(let L=0;L<T;L++)g+=b[L];i.update(g,u,1)}}this.setMode=d,this.setIndex=m,this.render=_,this.renderInstances=v,this.renderMultiDraw=y}function WT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function qT(o,e){return o[0]-e[0]}function YT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function ZT(o,e,i){const s={},l=new Float32Array(8),u=new WeakMap,d=new _n,h=[];for(let m=0;m<8;m++)h[m]=[m,0];function p(m,_,v){const y=m.morphTargetInfluences;if(e.isWebGL2===!0){const b=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,T=b!==void 0?b.length:0;let S=u.get(_);if(S===void 0||S.count!==T){let K=function(){Mt.dispose(),u.delete(_),_.removeEventListener("dispose",K)};var M=K;S!==void 0&&S.texture.dispose();const E=_.morphAttributes.position!==void 0,R=_.morphAttributes.normal!==void 0,I=_.morphAttributes.color!==void 0,B=_.morphAttributes.position||[],O=_.morphAttributes.normal||[],et=_.morphAttributes.color||[];let C=0;E===!0&&(C=1),R===!0&&(C=2),I===!0&&(C=3);let P=_.attributes.position.count*C,ut=1;P>e.maxTextureSize&&(ut=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const ht=new Float32Array(P*ut*4*T),Mt=new X_(ht,P,ut,T);Mt.type=Fa,Mt.needsUpdate=!0;const k=C*4;for(let F=0;F<T;F++){const q=B[F],W=O[F],ft=et[F],ot=P*ut*4*F;for(let N=0;N<q.count;N++){const X=N*k;E===!0&&(d.fromBufferAttribute(q,N),ht[ot+X+0]=d.x,ht[ot+X+1]=d.y,ht[ot+X+2]=d.z,ht[ot+X+3]=0),R===!0&&(d.fromBufferAttribute(W,N),ht[ot+X+4]=d.x,ht[ot+X+5]=d.y,ht[ot+X+6]=d.z,ht[ot+X+7]=0),I===!0&&(d.fromBufferAttribute(ft,N),ht[ot+X+8]=d.x,ht[ot+X+9]=d.y,ht[ot+X+10]=d.z,ht[ot+X+11]=ft.itemSize===4?d.w:1)}}S={count:T,texture:Mt,size:new ae(P,ut)},u.set(_,S),_.addEventListener("dispose",K)}let g=0;for(let E=0;E<y.length;E++)g+=y[E];const L=_.morphTargetsRelative?1:1-g;v.getUniforms().setValue(o,"morphTargetBaseInfluence",L),v.getUniforms().setValue(o,"morphTargetInfluences",y),v.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}else{const b=y===void 0?0:y.length;let T=s[_.id];if(T===void 0||T.length!==b){T=[];for(let R=0;R<b;R++)T[R]=[R,0];s[_.id]=T}for(let R=0;R<b;R++){const I=T[R];I[0]=R,I[1]=y[R]}T.sort(YT);for(let R=0;R<8;R++)R<b&&T[R][1]?(h[R][0]=T[R][0],h[R][1]=T[R][1]):(h[R][0]=Number.MAX_SAFE_INTEGER,h[R][1]=0);h.sort(qT);const S=_.morphAttributes.position,g=_.morphAttributes.normal;let L=0;for(let R=0;R<8;R++){const I=h[R],B=I[0],O=I[1];B!==Number.MAX_SAFE_INTEGER&&O?(S&&_.getAttribute("morphTarget"+R)!==S[B]&&_.setAttribute("morphTarget"+R,S[B]),g&&_.getAttribute("morphNormal"+R)!==g[B]&&_.setAttribute("morphNormal"+R,g[B]),l[R]=O,L+=O):(S&&_.hasAttribute("morphTarget"+R)===!0&&_.deleteAttribute("morphTarget"+R),g&&_.hasAttribute("morphNormal"+R)===!0&&_.deleteAttribute("morphNormal"+R),l[R]=0)}const E=_.morphTargetsRelative?1:1-L;v.getUniforms().setValue(o,"morphTargetBaseInfluence",E),v.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function KT(o,e,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,_=p.geometry,v=e.get(p,_);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return v}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}class tv extends Wn{constructor(e,i,s,l,u,d,h,p,m,_){if(_=_!==void 0?_:Ss,_!==Ss&&_!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Ss&&(s=Ia),s===void 0&&_===Lr&&(s=ys),super(null,l,u,d,h,p,_,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:On,this.minFilter=p!==void 0?p:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const ev=new Wn,nv=new tv(1,1);nv.compareFunction=H_;const iv=new X_,av=new OS,sv=new Q_,n_=[],i_=[],a_=new Float32Array(16),s_=new Float32Array(9),r_=new Float32Array(4);function Pr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=n_[l];if(u===void 0&&(u=new Float32Array(l),n_[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function fn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Xc(o,e){let i=i_[e];i===void 0&&(i=new Int32Array(e),i_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function QT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),fn(i,e)}}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),fn(i,e)}}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),fn(i,e)}}function eb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(un(i,s))return;r_.set(s),o.uniformMatrix2fv(this.addr,!1,r_),fn(i,s)}}function nb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(un(i,s))return;s_.set(s),o.uniformMatrix3fv(this.addr,!1,s_),fn(i,s)}}function ib(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(un(i,s))return;a_.set(s),o.uniformMatrix4fv(this.addr,!1,a_),fn(i,s)}}function ab(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),fn(i,e)}}function rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),fn(i,e)}}function ob(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),fn(i,e)}}function lb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),fn(i,e)}}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),fn(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),fn(i,e)}}function hb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?nv:ev;i.setTexture2D(e||u,l)}function db(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||av,l)}function pb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||sv,l)}function mb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||iv,l)}function gb(o){switch(o){case 5126:return QT;case 35664:return JT;case 35665:return $T;case 35666:return tb;case 35674:return eb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return ab;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function _b(o,e){o.uniform1fv(this.addr,e)}function vb(o,e){const i=Pr(e,this.size,2);o.uniform2fv(this.addr,i)}function xb(o,e){const i=Pr(e,this.size,3);o.uniform3fv(this.addr,i)}function yb(o,e){const i=Pr(e,this.size,4);o.uniform4fv(this.addr,i)}function Sb(o,e){const i=Pr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Mb(o,e){const i=Pr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Eb(o,e){const i=Pr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Tb(o,e){o.uniform1iv(this.addr,e)}function bb(o,e){o.uniform2iv(this.addr,e)}function Ab(o,e){o.uniform3iv(this.addr,e)}function Rb(o,e){o.uniform4iv(this.addr,e)}function wb(o,e){o.uniform1uiv(this.addr,e)}function Cb(o,e){o.uniform2uiv(this.addr,e)}function Lb(o,e){o.uniform3uiv(this.addr,e)}function Db(o,e){o.uniform4uiv(this.addr,e)}function Ub(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||ev,u[d])}function Nb(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||av,u[d])}function Ob(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||sv,u[d])}function zb(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||iv,u[d])}function Pb(o){switch(o){case 5126:return _b;case 35664:return vb;case 35665:return xb;case 35666:return yb;case 35674:return Sb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return Tb;case 35667:case 35671:return bb;case 35668:case 35672:return Ab;case 35669:case 35673:return Rb;case 5125:return wb;case 36294:return Cb;case 36295:return Lb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return zb}}class Bb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=gb(i.type)}}class Ib{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Pb(i.type)}}class Fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function o_(o,e){o.seq.push(e),o.map[e.id]=e}function Hb(o,e,i){const s=o.name,l=s.length;for(Uh.lastIndex=0;;){const u=Uh.exec(s),d=Uh.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){o_(i,m===void 0?new Bb(h,o,e):new Ib(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new Fb(h),o_(i,v)),i=v}}}class Nc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);Hb(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function l_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Gb=37297;let Vb=0;function jb(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function Xb(o){const e=Ne.getPrimaries(Ne.workingColorSpace),i=Ne.getPrimaries(o);let s;switch(e===i?s="":e===Bc&&i===Pc?s="LinearDisplayP3ToLinearSRGB":e===Pc&&i===Bc&&(s="LinearSRGBToLinearDisplayP3"),o){case aa:case Vc:return[s,"LinearTransferOETF"];case En:case Jh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function c_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+jb(o.getShaderSource(e),d)}else return l}function kb(o,e){const i=Xb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Wb(o,e){let i;switch(e){case iS:i="Linear";break;case aS:i="Reinhard";break;case sS:i="OptimizedCineon";break;case rS:i="ACESFilmic";break;case lS:i="AgX";break;case oS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function qb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function Yb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(br).join(`
`)}function Zb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Kb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function br(o){return o!==""}function u_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(o){return o.replace(Qb,$b)}const Jb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $b(o,e){let i=ce[e];if(i===void 0){const s=Jb.get(e);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return qh(i)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h_(o){return o.replace(t1,e1)}function e1(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function d_(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Dy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function i1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case wr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function s1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case C_:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case nS:e="ENVMAP_BLENDING_ADD";break}return e}function r1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function o1(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=n1(i),m=i1(i),_=a1(i),v=s1(i),y=r1(i),M=i.isWebGL2?"":qb(i),b=Yb(i),T=Zb(u),S=l.createProgram();let g,L,E=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(br).join(`
`),g.length>0&&(g+=`
`),L=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(br).join(`
`),L.length>0&&(L+=`
`)):(g=[d_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),L=[M,d_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ga?Wb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,kb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(br).join(`
`)),d=qh(d),d=u_(d,i),d=f_(d,i),h=qh(h),h=u_(h,i),h=f_(h,i),d=h_(d),h=h_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,L=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const R=E+g+d,I=E+L+h,B=l_(l,l.VERTEX_SHADER,R),O=l_(l,l.FRAGMENT_SHADER,I);l.attachShader(S,B),l.attachShader(S,O),i.index0AttributeName!==void 0?l.bindAttribLocation(S,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(S,0,"position"),l.linkProgram(S);function et(ht){if(o.debug.checkShaderErrors){const Mt=l.getProgramInfoLog(S).trim(),k=l.getShaderInfoLog(B).trim(),K=l.getShaderInfoLog(O).trim();let F=!0,q=!0;if(l.getProgramParameter(S,l.LINK_STATUS)===!1)if(F=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,S,B,O);else{const W=c_(l,B,"vertex"),ft=c_(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(S,l.VALIDATE_STATUS)+`

Program Info Log: `+Mt+`
`+W+`
`+ft)}else Mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Mt):(k===""||K==="")&&(q=!1);q&&(ht.diagnostics={runnable:F,programLog:Mt,vertexShader:{log:k,prefix:g},fragmentShader:{log:K,prefix:L}})}l.deleteShader(B),l.deleteShader(O),C=new Nc(l,S),P=Kb(l,S)}let C;this.getUniforms=function(){return C===void 0&&et(this),C};let P;this.getAttributes=function(){return P===void 0&&et(this),P};let ut=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ut===!1&&(ut=l.getProgramParameter(S,Gb)),ut},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Vb++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=B,this.fragmentShader=O,this}let l1=0;class c1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new u1(e),i.set(e,s)),s}}class u1{constructor(e){this.id=l1++,this.code=e,this.usedTimes=0}}function f1(o,e,i,s,l,u,d){const h=new k_,p=new c1,m=[],_=l.isWebGL2,v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return C===0?"uv":`uv${C}`}function S(C,P,ut,ht,Mt){const k=ht.fog,K=Mt.geometry,F=C.isMeshStandardMaterial?ht.environment:null,q=(C.isMeshStandardMaterial?i:e).get(C.envMap||F),W=q&&q.mapping===Gc?q.image.height:null,ft=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const ot=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,N=ot!==void 0?ot.length:0;let X=0;K.morphAttributes.position!==void 0&&(X=1),K.morphAttributes.normal!==void 0&&(X=2),K.morphAttributes.color!==void 0&&(X=3);let G,Q,gt,St;if(ft){const Ze=Di[ft];G=Ze.vertexShader,Q=Ze.fragmentShader}else G=C.vertexShader,Q=C.fragmentShader,p.update(C),gt=p.getVertexShaderID(C),St=p.getFragmentShaderID(C);const Et=o.getRenderTarget(),Ft=Mt.isInstancedMesh===!0,Ot=Mt.isBatchedMesh===!0,Wt=!!C.map,he=!!C.matcap,it=!!q,hn=!!C.aoMap,Ht=!!C.lightMap,Jt=!!C.bumpMap,Bt=!!C.normalMap,Ie=!!C.displacementMap,ne=!!C.emissiveMap,z=!!C.metalnessMap,w=!!C.roughnessMap,st=C.anisotropy>0,yt=C.clearcoat>0,xt=C.iridescence>0,_t=C.sheen>0,Gt=C.transmission>0,wt=st&&!!C.anisotropyMap,Nt=yt&&!!C.clearcoatMap,qt=yt&&!!C.clearcoatNormalMap,se=yt&&!!C.clearcoatRoughnessMap,vt=xt&&!!C.iridescenceMap,Ee=xt&&!!C.iridescenceThicknessMap,ue=_t&&!!C.sheenColorMap,Qt=_t&&!!C.sheenRoughnessMap,Dt=!!C.specularMap,Lt=!!C.specularColorMap,Xt=!!C.specularIntensityMap,Se=Gt&&!!C.transmissionMap,Ve=Gt&&!!C.thicknessMap,oe=!!C.gradientMap,Tt=!!C.alphaMap,V=C.alphaTest>0,Rt=!!C.alphaHash,bt=!!C.extensions,Zt=!!K.attributes.uv1,Vt=!!K.attributes.uv2,we=!!K.attributes.uv3;let Te=Ga;return C.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Te=o.toneMapping),{isWebGL2:_,shaderID:ft,shaderType:C.type,shaderName:C.name,vertexShader:G,fragmentShader:Q,defines:C.defines,customVertexShaderID:gt,customFragmentShaderID:St,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ot,instancing:Ft,instancingColor:Ft&&Mt.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:aa,map:Wt,matcap:he,envMap:it,envMapMode:it&&q.mapping,envMapCubeUVHeight:W,aoMap:hn,lightMap:Ht,bumpMap:Jt,normalMap:Bt,displacementMap:y&&Ie,emissiveMap:ne,normalMapObjectSpace:Bt&&C.normalMapType===yS,normalMapTangentSpace:Bt&&C.normalMapType===F_,metalnessMap:z,roughnessMap:w,anisotropy:st,anisotropyMap:wt,clearcoat:yt,clearcoatMap:Nt,clearcoatNormalMap:qt,clearcoatRoughnessMap:se,iridescence:xt,iridescenceMap:vt,iridescenceThicknessMap:Ee,sheen:_t,sheenColorMap:ue,sheenRoughnessMap:Qt,specularMap:Dt,specularColorMap:Lt,specularIntensityMap:Xt,transmission:Gt,transmissionMap:Se,thicknessMap:Ve,gradientMap:oe,opaque:C.transparent===!1&&C.blending===Ar,alphaMap:Tt,alphaTest:V,alphaHash:Rt,combine:C.combine,mapUv:Wt&&T(C.map.channel),aoMapUv:hn&&T(C.aoMap.channel),lightMapUv:Ht&&T(C.lightMap.channel),bumpMapUv:Jt&&T(C.bumpMap.channel),normalMapUv:Bt&&T(C.normalMap.channel),displacementMapUv:Ie&&T(C.displacementMap.channel),emissiveMapUv:ne&&T(C.emissiveMap.channel),metalnessMapUv:z&&T(C.metalnessMap.channel),roughnessMapUv:w&&T(C.roughnessMap.channel),anisotropyMapUv:wt&&T(C.anisotropyMap.channel),clearcoatMapUv:Nt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:qt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&T(C.sheenRoughnessMap.channel),specularMapUv:Dt&&T(C.specularMap.channel),specularColorMapUv:Lt&&T(C.specularColorMap.channel),specularIntensityMapUv:Xt&&T(C.specularIntensityMap.channel),transmissionMapUv:Se&&T(C.transmissionMap.channel),thicknessMapUv:Ve&&T(C.thicknessMap.channel),alphaMapUv:Tt&&T(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Bt||st),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:Zt,vertexUv2s:Vt,vertexUv3s:we,pointsUvs:Mt.isPoints===!0&&!!K.attributes.uv&&(Wt||Tt),fog:!!k,useFog:C.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:Mt.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:X,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&ut.length>0,shadowMapType:o.shadowMap.type,toneMapping:Te,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Wt&&C.map.isVideoTexture===!0&&Ne.getTransfer(C.map.colorSpace)===Ge,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ea,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:bt&&C.extensions.derivatives===!0,extensionFragDepth:bt&&C.extensions.fragDepth===!0,extensionDrawBuffers:bt&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&C.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:_||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function g(C){const P=[];if(C.shaderID?P.push(C.shaderID):(P.push(C.customVertexShaderID),P.push(C.customFragmentShaderID)),C.defines!==void 0)for(const ut in C.defines)P.push(ut),P.push(C.defines[ut]);return C.isRawShaderMaterial===!1&&(L(P,C),E(P,C),P.push(o.outputColorSpace)),P.push(C.customProgramCacheKey),P.join()}function L(C,P){C.push(P.precision),C.push(P.outputColorSpace),C.push(P.envMapMode),C.push(P.envMapCubeUVHeight),C.push(P.mapUv),C.push(P.alphaMapUv),C.push(P.lightMapUv),C.push(P.aoMapUv),C.push(P.bumpMapUv),C.push(P.normalMapUv),C.push(P.displacementMapUv),C.push(P.emissiveMapUv),C.push(P.metalnessMapUv),C.push(P.roughnessMapUv),C.push(P.anisotropyMapUv),C.push(P.clearcoatMapUv),C.push(P.clearcoatNormalMapUv),C.push(P.clearcoatRoughnessMapUv),C.push(P.iridescenceMapUv),C.push(P.iridescenceThicknessMapUv),C.push(P.sheenColorMapUv),C.push(P.sheenRoughnessMapUv),C.push(P.specularMapUv),C.push(P.specularColorMapUv),C.push(P.specularIntensityMapUv),C.push(P.transmissionMapUv),C.push(P.thicknessMapUv),C.push(P.combine),C.push(P.fogExp2),C.push(P.sizeAttenuation),C.push(P.morphTargetsCount),C.push(P.morphAttributeCount),C.push(P.numDirLights),C.push(P.numPointLights),C.push(P.numSpotLights),C.push(P.numSpotLightMaps),C.push(P.numHemiLights),C.push(P.numRectAreaLights),C.push(P.numDirLightShadows),C.push(P.numPointLightShadows),C.push(P.numSpotLightShadows),C.push(P.numSpotLightShadowsWithMaps),C.push(P.numLightProbes),C.push(P.shadowMapType),C.push(P.toneMapping),C.push(P.numClippingPlanes),C.push(P.numClipIntersection),C.push(P.depthPacking)}function E(C,P){h.disableAll(),P.isWebGL2&&h.enable(0),P.supportsVertexTextures&&h.enable(1),P.instancing&&h.enable(2),P.instancingColor&&h.enable(3),P.matcap&&h.enable(4),P.envMap&&h.enable(5),P.normalMapObjectSpace&&h.enable(6),P.normalMapTangentSpace&&h.enable(7),P.clearcoat&&h.enable(8),P.iridescence&&h.enable(9),P.alphaTest&&h.enable(10),P.vertexColors&&h.enable(11),P.vertexAlphas&&h.enable(12),P.vertexUv1s&&h.enable(13),P.vertexUv2s&&h.enable(14),P.vertexUv3s&&h.enable(15),P.vertexTangents&&h.enable(16),P.anisotropy&&h.enable(17),P.alphaHash&&h.enable(18),P.batching&&h.enable(19),C.push(h.mask),h.disableAll(),P.fog&&h.enable(0),P.useFog&&h.enable(1),P.flatShading&&h.enable(2),P.logarithmicDepthBuffer&&h.enable(3),P.skinning&&h.enable(4),P.morphTargets&&h.enable(5),P.morphNormals&&h.enable(6),P.morphColors&&h.enable(7),P.premultipliedAlpha&&h.enable(8),P.shadowMapEnabled&&h.enable(9),P.useLegacyLights&&h.enable(10),P.doubleSided&&h.enable(11),P.flipSided&&h.enable(12),P.useDepthPacking&&h.enable(13),P.dithering&&h.enable(14),P.transmission&&h.enable(15),P.sheen&&h.enable(16),P.opaque&&h.enable(17),P.pointsUvs&&h.enable(18),P.decodeVideoTexture&&h.enable(19),C.push(h.mask)}function R(C){const P=b[C.type];let ut;if(P){const ht=Di[P];ut=qS.clone(ht.uniforms)}else ut=C.uniforms;return ut}function I(C,P){let ut;for(let ht=0,Mt=m.length;ht<Mt;ht++){const k=m[ht];if(k.cacheKey===P){ut=k,++ut.usedTimes;break}}return ut===void 0&&(ut=new o1(o,P,C,u),m.push(ut)),ut}function B(C){if(--C.usedTimes===0){const P=m.indexOf(C);m[P]=m[m.length-1],m.pop(),C.destroy()}}function O(C){p.remove(C)}function et(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:R,acquireProgram:I,releaseProgram:B,releaseShaderCache:O,programs:m,dispose:et}}function h1(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function s(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:s,dispose:l}}function d1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function p_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function m_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(v,y,M,b,T,S){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:y,material:M,groupOrder:b,renderOrder:v.renderOrder,z:T,group:S},o[e]=g):(g.id=v.id,g.object=v,g.geometry=y,g.material=M,g.groupOrder=b,g.renderOrder=v.renderOrder,g.z=T,g.group=S),e++,g}function h(v,y,M,b,T,S){const g=d(v,y,M,b,T,S);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function p(v,y,M,b,T,S){const g=d(v,y,M,b,T,S);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function m(v,y){i.length>1&&i.sort(v||d1),s.length>1&&s.sort(y||p_),l.length>1&&l.sort(y||p_)}function _(){for(let v=e,y=o.length;v<y;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:p,finish:_,sort:m}}function p1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new m_,o.set(s,[d])):l>=u.length?(d=new m_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function m1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new fe};break;case"SpotLight":i={position:new Z,direction:new Z,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=i,i}}}function g1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let _1=0;function v1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function x1(o,e){const i=new m1,s=g1(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)l.probe.push(new Z);const u=new Z,d=new Ye,h=new Ye;function p(_,v){let y=0,M=0,b=0;for(let ht=0;ht<9;ht++)l.probe[ht].set(0,0,0);let T=0,S=0,g=0,L=0,E=0,R=0,I=0,B=0,O=0,et=0,C=0;_.sort(v1);const P=v===!0?Math.PI:1;for(let ht=0,Mt=_.length;ht<Mt;ht++){const k=_[ht],K=k.color,F=k.intensity,q=k.distance,W=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)y+=K.r*F*P,M+=K.g*F*P,b+=K.b*F*P;else if(k.isLightProbe){for(let ft=0;ft<9;ft++)l.probe[ft].addScaledVector(k.sh.coefficients[ft],F);C++}else if(k.isDirectionalLight){const ft=i.get(k);if(ft.color.copy(k.color).multiplyScalar(k.intensity*P),k.castShadow){const ot=k.shadow,N=s.get(k);N.shadowBias=ot.bias,N.shadowNormalBias=ot.normalBias,N.shadowRadius=ot.radius,N.shadowMapSize=ot.mapSize,l.directionalShadow[T]=N,l.directionalShadowMap[T]=W,l.directionalShadowMatrix[T]=k.shadow.matrix,R++}l.directional[T]=ft,T++}else if(k.isSpotLight){const ft=i.get(k);ft.position.setFromMatrixPosition(k.matrixWorld),ft.color.copy(K).multiplyScalar(F*P),ft.distance=q,ft.coneCos=Math.cos(k.angle),ft.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ft.decay=k.decay,l.spot[g]=ft;const ot=k.shadow;if(k.map&&(l.spotLightMap[O]=k.map,O++,ot.updateMatrices(k),k.castShadow&&et++),l.spotLightMatrix[g]=ot.matrix,k.castShadow){const N=s.get(k);N.shadowBias=ot.bias,N.shadowNormalBias=ot.normalBias,N.shadowRadius=ot.radius,N.shadowMapSize=ot.mapSize,l.spotShadow[g]=N,l.spotShadowMap[g]=W,B++}g++}else if(k.isRectAreaLight){const ft=i.get(k);ft.color.copy(K).multiplyScalar(F),ft.halfWidth.set(k.width*.5,0,0),ft.halfHeight.set(0,k.height*.5,0),l.rectArea[L]=ft,L++}else if(k.isPointLight){const ft=i.get(k);if(ft.color.copy(k.color).multiplyScalar(k.intensity*P),ft.distance=k.distance,ft.decay=k.decay,k.castShadow){const ot=k.shadow,N=s.get(k);N.shadowBias=ot.bias,N.shadowNormalBias=ot.normalBias,N.shadowRadius=ot.radius,N.shadowMapSize=ot.mapSize,N.shadowCameraNear=ot.camera.near,N.shadowCameraFar=ot.camera.far,l.pointShadow[S]=N,l.pointShadowMap[S]=W,l.pointShadowMatrix[S]=k.shadow.matrix,I++}l.point[S]=ft,S++}else if(k.isHemisphereLight){const ft=i.get(k);ft.skyColor.copy(k.color).multiplyScalar(F*P),ft.groundColor.copy(k.groundColor).multiplyScalar(F*P),l.hemi[E]=ft,E++}}L>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=At.LTC_FLOAT_1,l.rectAreaLTC2=At.LTC_FLOAT_2):(l.rectAreaLTC1=At.LTC_HALF_1,l.rectAreaLTC2=At.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=At.LTC_FLOAT_1,l.rectAreaLTC2=At.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=At.LTC_HALF_1,l.rectAreaLTC2=At.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=b;const ut=l.hash;(ut.directionalLength!==T||ut.pointLength!==S||ut.spotLength!==g||ut.rectAreaLength!==L||ut.hemiLength!==E||ut.numDirectionalShadows!==R||ut.numPointShadows!==I||ut.numSpotShadows!==B||ut.numSpotMaps!==O||ut.numLightProbes!==C)&&(l.directional.length=T,l.spot.length=g,l.rectArea.length=L,l.point.length=S,l.hemi.length=E,l.directionalShadow.length=R,l.directionalShadowMap.length=R,l.pointShadow.length=I,l.pointShadowMap.length=I,l.spotShadow.length=B,l.spotShadowMap.length=B,l.directionalShadowMatrix.length=R,l.pointShadowMatrix.length=I,l.spotLightMatrix.length=B+O-et,l.spotLightMap.length=O,l.numSpotLightShadowsWithMaps=et,l.numLightProbes=C,ut.directionalLength=T,ut.pointLength=S,ut.spotLength=g,ut.rectAreaLength=L,ut.hemiLength=E,ut.numDirectionalShadows=R,ut.numPointShadows=I,ut.numSpotShadows=B,ut.numSpotMaps=O,ut.numLightProbes=C,l.version=_1++)}function m(_,v){let y=0,M=0,b=0,T=0,S=0;const g=v.matrixWorldInverse;for(let L=0,E=_.length;L<E;L++){const R=_[L];if(R.isDirectionalLight){const I=l.directional[y];I.direction.setFromMatrixPosition(R.matrixWorld),u.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(u),I.direction.transformDirection(g),y++}else if(R.isSpotLight){const I=l.spot[b];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(R.matrixWorld),u.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(u),I.direction.transformDirection(g),b++}else if(R.isRectAreaLight){const I=l.rectArea[T];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(g),h.identity(),d.copy(R.matrixWorld),d.premultiply(g),h.extractRotation(d),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),I.halfWidth.applyMatrix4(h),I.halfHeight.applyMatrix4(h),T++}else if(R.isPointLight){const I=l.point[M];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(g),M++}else if(R.isHemisphereLight){const I=l.hemi[S];I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(g),S++}}}return{setup:p,setupView:m,state:l}}function g_(o,e){const i=new x1(o,e),s=[],l=[];function u(){s.length=0,l.length=0}function d(v){s.push(v)}function h(v){l.push(v)}function p(v){i.setup(s,v)}function m(v){i.setupView(s,v)}return{init:u,state:{lightsArray:s,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:h}}function y1(o,e){let i=new WeakMap;function s(u,d=0){const h=i.get(u);let p;return h===void 0?(p=new g_(o,e),i.set(u,[p])):d>=h.length?(p=new g_(o,e),h.push(p)):p=h[d],p}function l(){i=new WeakMap}return{get:s,dispose:l}}class S1 extends qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M1 extends qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T1=`uniform sampler2D shadow_pass;
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
}`;function b1(o,e,i){let s=new td;const l=new ae,u=new ae,d=new _n,h=new S1({depthPacking:xS}),p=new M1,m={},_=i.maxTextureSize,v={[Xa]:kn,[kn]:Xa,[ea]:ea},y=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:E1,fragmentShader:T1}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new Bn;b.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Cn(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w_;let g=this.type;this.render=function(B,O,et){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const C=o.getRenderTarget(),P=o.getActiveCubeFace(),ut=o.getActiveMipmapLevel(),ht=o.state;ht.setBlending(Ha),ht.buffers.color.setClear(1,1,1,1),ht.buffers.depth.setTest(!0),ht.setScissorTest(!1);const Mt=g!==ta&&this.type===ta,k=g===ta&&this.type!==ta;for(let K=0,F=B.length;K<F;K++){const q=B[K],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const ft=W.getFrameExtents();if(l.multiply(ft),u.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ft.x),l.x=u.x*ft.x,W.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ft.y),l.y=u.y*ft.y,W.mapSize.y=u.y)),W.map===null||Mt===!0||k===!0){const N=this.type!==ta?{minFilter:On,magFilter:On}:{};W.map!==null&&W.map.dispose(),W.map=new Es(l.x,l.y,N),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const ot=W.getViewportCount();for(let N=0;N<ot;N++){const X=W.getViewport(N);d.set(u.x*X.x,u.y*X.y,u.x*X.z,u.y*X.w),ht.viewport(d),W.updateMatrices(q,N),s=W.getFrustum(),R(O,et,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===ta&&L(W,et),W.needsUpdate=!1}g=this.type,S.needsUpdate=!1,o.setRenderTarget(C,P,ut)};function L(B,O){const et=e.update(T);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Es(l.x,l.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(O,null,et,y,T,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(O,null,et,M,T,null)}function E(B,O,et,C){let P=null;const ut=et.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(ut!==void 0)P=ut;else if(P=et.isPointLight===!0?p:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ht=P.uuid,Mt=O.uuid;let k=m[ht];k===void 0&&(k={},m[ht]=k);let K=k[Mt];K===void 0&&(K=P.clone(),k[Mt]=K,O.addEventListener("dispose",I)),P=K}if(P.visible=O.visible,P.wireframe=O.wireframe,C===ta?P.side=O.shadowSide!==null?O.shadowSide:O.side:P.side=O.shadowSide!==null?O.shadowSide:v[O.side],P.alphaMap=O.alphaMap,P.alphaTest=O.alphaTest,P.map=O.map,P.clipShadows=O.clipShadows,P.clippingPlanes=O.clippingPlanes,P.clipIntersection=O.clipIntersection,P.displacementMap=O.displacementMap,P.displacementScale=O.displacementScale,P.displacementBias=O.displacementBias,P.wireframeLinewidth=O.wireframeLinewidth,P.linewidth=O.linewidth,et.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const ht=o.properties.get(P);ht.light=et}return P}function R(B,O,et,C,P){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&P===ta)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,B.matrixWorld);const Mt=e.update(B),k=B.material;if(Array.isArray(k)){const K=Mt.groups;for(let F=0,q=K.length;F<q;F++){const W=K[F],ft=k[W.materialIndex];if(ft&&ft.visible){const ot=E(B,ft,C,P);B.onBeforeShadow(o,B,O,et,Mt,ot,W),o.renderBufferDirect(et,null,Mt,ot,B,W),B.onAfterShadow(o,B,O,et,Mt,ot,W)}}}else if(k.visible){const K=E(B,k,C,P);B.onBeforeShadow(o,B,O,et,Mt,K,null),o.renderBufferDirect(et,null,Mt,K,B,null),B.onAfterShadow(o,B,O,et,Mt,K,null)}}const ht=B.children;for(let Mt=0,k=ht.length;Mt<k;Mt++)R(ht[Mt],O,et,C,P)}function I(B){B.target.removeEventListener("dispose",I);for(const et in m){const C=m[et],P=B.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function A1(o,e,i){const s=i.isWebGL2;function l(){let V=!1;const Rt=new _n;let bt=null;const Zt=new _n(0,0,0,0);return{setMask:function(Vt){bt!==Vt&&!V&&(o.colorMask(Vt,Vt,Vt,Vt),bt=Vt)},setLocked:function(Vt){V=Vt},setClear:function(Vt,we,Te,ke,Ze){Ze===!0&&(Vt*=ke,we*=ke,Te*=ke),Rt.set(Vt,we,Te,ke),Zt.equals(Rt)===!1&&(o.clearColor(Vt,we,Te,ke),Zt.copy(Rt))},reset:function(){V=!1,bt=null,Zt.set(-1,0,0,0)}}}function u(){let V=!1,Rt=null,bt=null,Zt=null;return{setTest:function(Vt){Vt?Ot(o.DEPTH_TEST):Wt(o.DEPTH_TEST)},setMask:function(Vt){Rt!==Vt&&!V&&(o.depthMask(Vt),Rt=Vt)},setFunc:function(Vt){if(bt!==Vt){switch(Vt){case Yy:o.depthFunc(o.NEVER);break;case Zy:o.depthFunc(o.ALWAYS);break;case Ky:o.depthFunc(o.LESS);break;case Oc:o.depthFunc(o.LEQUAL);break;case Qy:o.depthFunc(o.EQUAL);break;case Jy:o.depthFunc(o.GEQUAL);break;case $y:o.depthFunc(o.GREATER);break;case tS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}bt=Vt}},setLocked:function(Vt){V=Vt},setClear:function(Vt){Zt!==Vt&&(o.clearDepth(Vt),Zt=Vt)},reset:function(){V=!1,Rt=null,bt=null,Zt=null}}}function d(){let V=!1,Rt=null,bt=null,Zt=null,Vt=null,we=null,Te=null,ke=null,Ze=null;return{setTest:function(Ce){V||(Ce?Ot(o.STENCIL_TEST):Wt(o.STENCIL_TEST))},setMask:function(Ce){Rt!==Ce&&!V&&(o.stencilMask(Ce),Rt=Ce)},setFunc:function(Ce,dn,Yn){(bt!==Ce||Zt!==dn||Vt!==Yn)&&(o.stencilFunc(Ce,dn,Yn),bt=Ce,Zt=dn,Vt=Yn)},setOp:function(Ce,dn,Yn){(we!==Ce||Te!==dn||ke!==Yn)&&(o.stencilOp(Ce,dn,Yn),we=Ce,Te=dn,ke=Yn)},setLocked:function(Ce){V=Ce},setClear:function(Ce){Ze!==Ce&&(o.clearStencil(Ce),Ze=Ce)},reset:function(){V=!1,Rt=null,bt=null,Zt=null,Vt=null,we=null,Te=null,ke=null,Ze=null}}}const h=new l,p=new u,m=new d,_=new WeakMap,v=new WeakMap;let y={},M={},b=new WeakMap,T=[],S=null,g=!1,L=null,E=null,R=null,I=null,B=null,O=null,et=null,C=new fe(0,0,0),P=0,ut=!1,ht=null,Mt=null,k=null,K=null,F=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ft=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(ot)[1]),W=ft>=1):ot.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),W=ft>=2);let N=null,X={};const G=o.getParameter(o.SCISSOR_BOX),Q=o.getParameter(o.VIEWPORT),gt=new _n().fromArray(G),St=new _n().fromArray(Q);function Et(V,Rt,bt,Zt){const Vt=new Uint8Array(4),we=o.createTexture();o.bindTexture(V,we),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Te=0;Te<bt;Te++)s&&(V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY)?o.texImage3D(Rt,0,o.RGBA,1,1,Zt,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(Rt+Te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return we}const Ft={};Ft[o.TEXTURE_2D]=Et(o.TEXTURE_2D,o.TEXTURE_2D,1),Ft[o.TEXTURE_CUBE_MAP]=Et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Ft[o.TEXTURE_2D_ARRAY]=Et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ft[o.TEXTURE_3D]=Et(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Ot(o.DEPTH_TEST),p.setFunc(Oc),ne(!1),z(Jg),Ot(o.CULL_FACE),Bt(Ha);function Ot(V){y[V]!==!0&&(o.enable(V),y[V]=!0)}function Wt(V){y[V]!==!1&&(o.disable(V),y[V]=!1)}function he(V,Rt){return M[V]!==Rt?(o.bindFramebuffer(V,Rt),M[V]=Rt,s&&(V===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Rt),V===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Rt)),!0):!1}function it(V,Rt){let bt=T,Zt=!1;if(V)if(bt=b.get(Rt),bt===void 0&&(bt=[],b.set(Rt,bt)),V.isWebGLMultipleRenderTargets){const Vt=V.texture;if(bt.length!==Vt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let we=0,Te=Vt.length;we<Te;we++)bt[we]=o.COLOR_ATTACHMENT0+we;bt.length=Vt.length,Zt=!0}}else bt[0]!==o.COLOR_ATTACHMENT0&&(bt[0]=o.COLOR_ATTACHMENT0,Zt=!0);else bt[0]!==o.BACK&&(bt[0]=o.BACK,Zt=!0);Zt&&(i.isWebGL2?o.drawBuffers(bt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function hn(V){return S!==V?(o.useProgram(V),S=V,!0):!1}const Ht={[vs]:o.FUNC_ADD,[Ny]:o.FUNC_SUBTRACT,[Oy]:o.FUNC_REVERSE_SUBTRACT};if(s)Ht[n0]=o.MIN,Ht[i0]=o.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Ht[n0]=V.MIN_EXT,Ht[i0]=V.MAX_EXT)}const Jt={[zy]:o.ZERO,[Py]:o.ONE,[By]:o.SRC_COLOR,[Bh]:o.SRC_ALPHA,[jy]:o.SRC_ALPHA_SATURATE,[Gy]:o.DST_COLOR,[Fy]:o.DST_ALPHA,[Iy]:o.ONE_MINUS_SRC_COLOR,[Ih]:o.ONE_MINUS_SRC_ALPHA,[Vy]:o.ONE_MINUS_DST_COLOR,[Hy]:o.ONE_MINUS_DST_ALPHA,[Xy]:o.CONSTANT_COLOR,[ky]:o.ONE_MINUS_CONSTANT_COLOR,[Wy]:o.CONSTANT_ALPHA,[qy]:o.ONE_MINUS_CONSTANT_ALPHA};function Bt(V,Rt,bt,Zt,Vt,we,Te,ke,Ze,Ce){if(V===Ha){g===!0&&(Wt(o.BLEND),g=!1);return}if(g===!1&&(Ot(o.BLEND),g=!0),V!==Uy){if(V!==L||Ce!==ut){if((E!==vs||B!==vs)&&(o.blendEquation(o.FUNC_ADD),E=vs,B=vs),Ce)switch(V){case Ar:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $g:o.blendFunc(o.ONE,o.ONE);break;case t0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case e0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ar:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $g:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case t0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case e0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,I=null,O=null,et=null,C.set(0,0,0),P=0,L=V,ut=Ce}return}Vt=Vt||Rt,we=we||bt,Te=Te||Zt,(Rt!==E||Vt!==B)&&(o.blendEquationSeparate(Ht[Rt],Ht[Vt]),E=Rt,B=Vt),(bt!==R||Zt!==I||we!==O||Te!==et)&&(o.blendFuncSeparate(Jt[bt],Jt[Zt],Jt[we],Jt[Te]),R=bt,I=Zt,O=we,et=Te),(ke.equals(C)===!1||Ze!==P)&&(o.blendColor(ke.r,ke.g,ke.b,Ze),C.copy(ke),P=Ze),L=V,ut=!1}function Ie(V,Rt){V.side===ea?Wt(o.CULL_FACE):Ot(o.CULL_FACE);let bt=V.side===kn;Rt&&(bt=!bt),ne(bt),V.blending===Ar&&V.transparent===!1?Bt(Ha):Bt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),p.setFunc(V.depthFunc),p.setTest(V.depthTest),p.setMask(V.depthWrite),h.setMask(V.colorWrite);const Zt=V.stencilWrite;m.setTest(Zt),Zt&&(m.setMask(V.stencilWriteMask),m.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),m.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),st(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ot(o.SAMPLE_ALPHA_TO_COVERAGE):Wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(V){ht!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),ht=V)}function z(V){V!==Cy?(Ot(o.CULL_FACE),V!==Mt&&(V===Jg?o.cullFace(o.BACK):V===Ly?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Wt(o.CULL_FACE),Mt=V}function w(V){V!==k&&(W&&o.lineWidth(V),k=V)}function st(V,Rt,bt){V?(Ot(o.POLYGON_OFFSET_FILL),(K!==Rt||F!==bt)&&(o.polygonOffset(Rt,bt),K=Rt,F=bt)):Wt(o.POLYGON_OFFSET_FILL)}function yt(V){V?Ot(o.SCISSOR_TEST):Wt(o.SCISSOR_TEST)}function xt(V){V===void 0&&(V=o.TEXTURE0+q-1),N!==V&&(o.activeTexture(V),N=V)}function _t(V,Rt,bt){bt===void 0&&(N===null?bt=o.TEXTURE0+q-1:bt=N);let Zt=X[bt];Zt===void 0&&(Zt={type:void 0,texture:void 0},X[bt]=Zt),(Zt.type!==V||Zt.texture!==Rt)&&(N!==bt&&(o.activeTexture(bt),N=bt),o.bindTexture(V,Rt||Ft[V]),Zt.type=V,Zt.texture=Rt)}function Gt(){const V=X[N];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function wt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qt(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(V){gt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),gt.copy(V))}function Se(V){St.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),St.copy(V))}function Ve(V,Rt){let bt=v.get(Rt);bt===void 0&&(bt=new WeakMap,v.set(Rt,bt));let Zt=bt.get(V);Zt===void 0&&(Zt=o.getUniformBlockIndex(Rt,V.name),bt.set(V,Zt))}function oe(V,Rt){const Zt=v.get(Rt).get(V);_.get(Rt)!==Zt&&(o.uniformBlockBinding(Rt,Zt,V.__bindingPointIndex),_.set(Rt,Zt))}function Tt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),s===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},N=null,X={},M={},b=new WeakMap,T=[],S=null,g=!1,L=null,E=null,R=null,I=null,B=null,O=null,et=null,C=new fe(0,0,0),P=0,ut=!1,ht=null,Mt=null,k=null,K=null,F=null,gt.set(0,0,o.canvas.width,o.canvas.height),St.set(0,0,o.canvas.width,o.canvas.height),h.reset(),p.reset(),m.reset()}return{buffers:{color:h,depth:p,stencil:m},enable:Ot,disable:Wt,bindFramebuffer:he,drawBuffers:it,useProgram:hn,setBlending:Bt,setMaterial:Ie,setFlipSided:ne,setCullFace:z,setLineWidth:w,setPolygonOffset:st,setScissorTest:yt,activeTexture:xt,bindTexture:_t,unbindTexture:Gt,compressedTexImage2D:wt,compressedTexImage3D:Nt,texImage2D:Dt,texImage3D:Lt,updateUBOMapping:Ve,uniformBlockBinding:oe,texStorage2D:ue,texStorage3D:Qt,texSubImage2D:qt,texSubImage3D:se,compressedTexSubImage2D:vt,compressedTexSubImage3D:Ee,scissor:Xt,viewport:Se,reset:Tt}}function R1(o,e,i,s,l,u,d){const h=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,w){return M?new OffscreenCanvas(z,w):Fc("canvas")}function T(z,w,st,yt){let xt=1;if((z.width>yt||z.height>yt)&&(xt=yt/Math.max(z.width,z.height)),xt<1||w===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const _t=w?Wh:Math.floor,Gt=_t(xt*z.width),wt=_t(xt*z.height);v===void 0&&(v=b(Gt,wt));const Nt=st?b(Gt,wt):v;return Nt.width=Gt,Nt.height=wt,Nt.getContext("2d").drawImage(z,0,0,Gt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+Gt+"x"+wt+")."),Nt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function S(z){return U0(z.width)&&U0(z.height)}function g(z){return h?!1:z.wrapS!==Ti||z.wrapT!==Ti||z.minFilter!==On&&z.minFilter!==pi}function L(z,w){return z.generateMipmaps&&w&&z.minFilter!==On&&z.minFilter!==pi}function E(z){o.generateMipmap(z)}function R(z,w,st,yt,xt=!1){if(h===!1)return w;if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let _t=w;if(w===o.RED&&(st===o.FLOAT&&(_t=o.R32F),st===o.HALF_FLOAT&&(_t=o.R16F),st===o.UNSIGNED_BYTE&&(_t=o.R8)),w===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(_t=o.R8UI),st===o.UNSIGNED_SHORT&&(_t=o.R16UI),st===o.UNSIGNED_INT&&(_t=o.R32UI),st===o.BYTE&&(_t=o.R8I),st===o.SHORT&&(_t=o.R16I),st===o.INT&&(_t=o.R32I)),w===o.RG&&(st===o.FLOAT&&(_t=o.RG32F),st===o.HALF_FLOAT&&(_t=o.RG16F),st===o.UNSIGNED_BYTE&&(_t=o.RG8)),w===o.RGBA){const Gt=xt?zc:Ne.getTransfer(yt);st===o.FLOAT&&(_t=o.RGBA32F),st===o.HALF_FLOAT&&(_t=o.RGBA16F),st===o.UNSIGNED_BYTE&&(_t=Gt===Ge?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function I(z,w,st){return L(z,st)===!0||z.isFramebufferTexture&&z.minFilter!==On&&z.minFilter!==pi?Math.log2(Math.max(w.width,w.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?w.mipmaps.length:1}function B(z){return z===On||z===a0||z===ih?o.NEAREST:o.LINEAR}function O(z){const w=z.target;w.removeEventListener("dispose",O),C(w),w.isVideoTexture&&_.delete(w)}function et(z){const w=z.target;w.removeEventListener("dispose",et),ut(w)}function C(z){const w=s.get(z);if(w.__webglInit===void 0)return;const st=z.source,yt=y.get(st);if(yt){const xt=yt[w.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&P(z),Object.keys(yt).length===0&&y.delete(st)}s.remove(z)}function P(z){const w=s.get(z);o.deleteTexture(w.__webglTexture);const st=z.source,yt=y.get(st);delete yt[w.__cacheKey],d.memory.textures--}function ut(z){const w=z.texture,st=s.get(z),yt=s.get(w);if(yt.__webglTexture!==void 0&&(o.deleteTexture(yt.__webglTexture),d.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(st.__webglFramebuffer[xt]))for(let _t=0;_t<st.__webglFramebuffer[xt].length;_t++)o.deleteFramebuffer(st.__webglFramebuffer[xt][_t]);else o.deleteFramebuffer(st.__webglFramebuffer[xt]);st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer[xt])}else{if(Array.isArray(st.__webglFramebuffer))for(let xt=0;xt<st.__webglFramebuffer.length;xt++)o.deleteFramebuffer(st.__webglFramebuffer[xt]);else o.deleteFramebuffer(st.__webglFramebuffer);if(st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer),st.__webglMultisampledFramebuffer&&o.deleteFramebuffer(st.__webglMultisampledFramebuffer),st.__webglColorRenderbuffer)for(let xt=0;xt<st.__webglColorRenderbuffer.length;xt++)st.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(st.__webglColorRenderbuffer[xt]);st.__webglDepthRenderbuffer&&o.deleteRenderbuffer(st.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let xt=0,_t=w.length;xt<_t;xt++){const Gt=s.get(w[xt]);Gt.__webglTexture&&(o.deleteTexture(Gt.__webglTexture),d.memory.textures--),s.remove(w[xt])}s.remove(w),s.remove(z)}let ht=0;function Mt(){ht=0}function k(){const z=ht;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),ht+=1,z}function K(z){const w=[];return w.push(z.wrapS),w.push(z.wrapT),w.push(z.wrapR||0),w.push(z.magFilter),w.push(z.minFilter),w.push(z.anisotropy),w.push(z.internalFormat),w.push(z.format),w.push(z.type),w.push(z.generateMipmaps),w.push(z.premultiplyAlpha),w.push(z.flipY),w.push(z.unpackAlignment),w.push(z.colorSpace),w.join()}function F(z,w){const st=s.get(z);if(z.isVideoTexture&&Ie(z),z.isRenderTargetTexture===!1&&z.version>0&&st.__version!==z.version){const yt=z.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(st,z,w);return}}i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+w)}function q(z,w){const st=s.get(z);if(z.version>0&&st.__version!==z.version){gt(st,z,w);return}i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+w)}function W(z,w){const st=s.get(z);if(z.version>0&&st.__version!==z.version){gt(st,z,w);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+w)}function ft(z,w){const st=s.get(z);if(z.version>0&&st.__version!==z.version){St(st,z,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+w)}const ot={[Gh]:o.REPEAT,[Ti]:o.CLAMP_TO_EDGE,[Vh]:o.MIRRORED_REPEAT},N={[On]:o.NEAREST,[a0]:o.NEAREST_MIPMAP_NEAREST,[ih]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[cS]:o.LINEAR_MIPMAP_NEAREST,[Xo]:o.LINEAR_MIPMAP_LINEAR},X={[SS]:o.NEVER,[RS]:o.ALWAYS,[MS]:o.LESS,[H_]:o.LEQUAL,[ES]:o.EQUAL,[AS]:o.GEQUAL,[TS]:o.GREATER,[bS]:o.NOTEQUAL};function G(z,w,st){if(st?(o.texParameteri(z,o.TEXTURE_WRAP_S,ot[w.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,ot[w.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,ot[w.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,N[w.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,N[w.minFilter])):(o.texParameteri(z,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(z,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(w.wrapS!==Ti||w.wrapT!==Ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(z,o.TEXTURE_MAG_FILTER,B(w.magFilter)),o.texParameteri(z,o.TEXTURE_MIN_FILTER,B(w.minFilter)),w.minFilter!==On&&w.minFilter!==pi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,X[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const yt=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===On||w.minFilter!==ih&&w.minFilter!==Xo||w.type===Fa&&e.has("OES_texture_float_linear")===!1||h===!1&&w.type===ko&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||s.get(w).__currentAnisotropy)&&(o.texParameterf(z,yt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy)}}function Q(z,w){let st=!1;z.__webglInit===void 0&&(z.__webglInit=!0,w.addEventListener("dispose",O));const yt=w.source;let xt=y.get(yt);xt===void 0&&(xt={},y.set(yt,xt));const _t=K(w);if(_t!==z.__cacheKey){xt[_t]===void 0&&(xt[_t]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,st=!0),xt[_t].usedTimes++;const Gt=xt[z.__cacheKey];Gt!==void 0&&(xt[z.__cacheKey].usedTimes--,Gt.usedTimes===0&&P(w)),z.__cacheKey=_t,z.__webglTexture=xt[_t].texture}return st}function gt(z,w,st){let yt=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(yt=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(yt=o.TEXTURE_3D);const xt=Q(z,w),_t=w.source;i.bindTexture(yt,z.__webglTexture,o.TEXTURE0+st);const Gt=s.get(_t);if(_t.version!==Gt.__version||xt===!0){i.activeTexture(o.TEXTURE0+st);const wt=Ne.getPrimaries(Ne.workingColorSpace),Nt=w.colorSpace===gi?null:Ne.getPrimaries(w.colorSpace),qt=w.colorSpace===gi||wt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const se=g(w)&&S(w.image)===!1;let vt=T(w.image,se,!1,l.maxTextureSize);vt=ne(w,vt);const Ee=S(vt)||h,ue=u.convert(w.format,w.colorSpace);let Qt=u.convert(w.type),Dt=R(w.internalFormat,ue,Qt,w.colorSpace,w.isVideoTexture);G(yt,w,Ee);let Lt;const Xt=w.mipmaps,Se=h&&w.isVideoTexture!==!0&&Dt!==B_,Ve=Gt.__version===void 0||xt===!0,oe=I(w,vt,Ee);if(w.isDepthTexture)Dt=o.DEPTH_COMPONENT,h?w.type===Fa?Dt=o.DEPTH_COMPONENT32F:w.type===Ia?Dt=o.DEPTH_COMPONENT24:w.type===ys?Dt=o.DEPTH24_STENCIL8:Dt=o.DEPTH_COMPONENT16:w.type===Fa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ss&&Dt===o.DEPTH_COMPONENT&&w.type!==Qh&&w.type!==Ia&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ia,Qt=u.convert(w.type)),w.format===Lr&&Dt===o.DEPTH_COMPONENT&&(Dt=o.DEPTH_STENCIL,w.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ys,Qt=u.convert(w.type))),Ve&&(Se?i.texStorage2D(o.TEXTURE_2D,1,Dt,vt.width,vt.height):i.texImage2D(o.TEXTURE_2D,0,Dt,vt.width,vt.height,0,ue,Qt,null));else if(w.isDataTexture)if(Xt.length>0&&Ee){Se&&Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,Xt[0].width,Xt[0].height);for(let Tt=0,V=Xt.length;Tt<V;Tt++)Lt=Xt[Tt],Se?i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,ue,Qt,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,Dt,Lt.width,Lt.height,0,ue,Qt,Lt.data);w.generateMipmaps=!1}else Se?(Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,vt.width,vt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,vt.width,vt.height,ue,Qt,vt.data)):i.texImage2D(o.TEXTURE_2D,0,Dt,vt.width,vt.height,0,ue,Qt,vt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Se&&Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,oe,Dt,Xt[0].width,Xt[0].height,vt.depth);for(let Tt=0,V=Xt.length;Tt<V;Tt++)Lt=Xt[Tt],w.format!==bi?ue!==null?Se?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,vt.depth,ue,Lt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Dt,Lt.width,Lt.height,vt.depth,0,Lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,vt.depth,ue,Qt,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Dt,Lt.width,Lt.height,vt.depth,0,ue,Qt,Lt.data)}else{Se&&Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,Xt[0].width,Xt[0].height);for(let Tt=0,V=Xt.length;Tt<V;Tt++)Lt=Xt[Tt],w.format!==bi?ue!==null?Se?i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,ue,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Dt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,ue,Qt,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,Dt,Lt.width,Lt.height,0,ue,Qt,Lt.data)}else if(w.isDataArrayTexture)Se?(Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,oe,Dt,vt.width,vt.height,vt.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,ue,Qt,vt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Dt,vt.width,vt.height,vt.depth,0,ue,Qt,vt.data);else if(w.isData3DTexture)Se?(Ve&&i.texStorage3D(o.TEXTURE_3D,oe,Dt,vt.width,vt.height,vt.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,ue,Qt,vt.data)):i.texImage3D(o.TEXTURE_3D,0,Dt,vt.width,vt.height,vt.depth,0,ue,Qt,vt.data);else if(w.isFramebufferTexture){if(Ve)if(Se)i.texStorage2D(o.TEXTURE_2D,oe,Dt,vt.width,vt.height);else{let Tt=vt.width,V=vt.height;for(let Rt=0;Rt<oe;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Dt,Tt,V,0,ue,Qt,null),Tt>>=1,V>>=1}}else if(Xt.length>0&&Ee){Se&&Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,Xt[0].width,Xt[0].height);for(let Tt=0,V=Xt.length;Tt<V;Tt++)Lt=Xt[Tt],Se?i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,ue,Qt,Lt):i.texImage2D(o.TEXTURE_2D,Tt,Dt,ue,Qt,Lt);w.generateMipmaps=!1}else Se?(Ve&&i.texStorage2D(o.TEXTURE_2D,oe,Dt,vt.width,vt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,ue,Qt,vt)):i.texImage2D(o.TEXTURE_2D,0,Dt,ue,Qt,vt);L(w,Ee)&&E(yt),Gt.__version=_t.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function St(z,w,st){if(w.image.length!==6)return;const yt=Q(z,w),xt=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+st);const _t=s.get(xt);if(xt.version!==_t.__version||yt===!0){i.activeTexture(o.TEXTURE0+st);const Gt=Ne.getPrimaries(Ne.workingColorSpace),wt=w.colorSpace===gi?null:Ne.getPrimaries(w.colorSpace),Nt=w.colorSpace===gi||Gt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const qt=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,vt=[];for(let Tt=0;Tt<6;Tt++)!qt&&!se?vt[Tt]=T(w.image[Tt],!1,!0,l.maxCubemapSize):vt[Tt]=se?w.image[Tt].image:w.image[Tt],vt[Tt]=ne(w,vt[Tt]);const Ee=vt[0],ue=S(Ee)||h,Qt=u.convert(w.format,w.colorSpace),Dt=u.convert(w.type),Lt=R(w.internalFormat,Qt,Dt,w.colorSpace),Xt=h&&w.isVideoTexture!==!0,Se=_t.__version===void 0||yt===!0;let Ve=I(w,Ee,ue);G(o.TEXTURE_CUBE_MAP,w,ue);let oe;if(qt){Xt&&Se&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,Lt,Ee.width,Ee.height);for(let Tt=0;Tt<6;Tt++){oe=vt[Tt].mipmaps;for(let V=0;V<oe.length;V++){const Rt=oe[V];w.format!==bi?Qt!==null?Xt?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V,0,0,Rt.width,Rt.height,Qt,Rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V,Lt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V,0,0,Rt.width,Rt.height,Qt,Dt,Rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V,Lt,Rt.width,Rt.height,0,Qt,Dt,Rt.data)}}}else{oe=w.mipmaps,Xt&&Se&&(oe.length>0&&Ve++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,Lt,vt[0].width,vt[0].height));for(let Tt=0;Tt<6;Tt++)if(se){Xt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,vt[Tt].width,vt[Tt].height,Qt,Dt,vt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Lt,vt[Tt].width,vt[Tt].height,0,Qt,Dt,vt[Tt].data);for(let V=0;V<oe.length;V++){const bt=oe[V].image[Tt].image;Xt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V+1,0,0,bt.width,bt.height,Qt,Dt,bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V+1,Lt,bt.width,bt.height,0,Qt,Dt,bt.data)}}else{Xt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Qt,Dt,vt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Lt,Qt,Dt,vt[Tt]);for(let V=0;V<oe.length;V++){const Rt=oe[V];Xt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V+1,0,0,Qt,Dt,Rt.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V+1,Lt,Qt,Dt,Rt.image[Tt])}}}L(w,ue)&&E(o.TEXTURE_CUBE_MAP),_t.__version=xt.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function Et(z,w,st,yt,xt,_t){const Gt=u.convert(st.format,st.colorSpace),wt=u.convert(st.type),Nt=R(st.internalFormat,Gt,wt,st.colorSpace);if(!s.get(w).__hasExternalTextures){const se=Math.max(1,w.width>>_t),vt=Math.max(1,w.height>>_t);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,_t,Nt,se,vt,w.depth,0,Gt,wt,null):i.texImage2D(xt,_t,Nt,se,vt,0,Gt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),Bt(w)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,xt,s.get(st).__webglTexture,0,Jt(w)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,yt,xt,s.get(st).__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(z,w,st){if(o.bindRenderbuffer(o.RENDERBUFFER,z),w.depthBuffer&&!w.stencilBuffer){let yt=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(st||Bt(w)){const xt=w.depthTexture;xt&&xt.isDepthTexture&&(xt.type===Fa?yt=o.DEPTH_COMPONENT32F:xt.type===Ia&&(yt=o.DEPTH_COMPONENT24));const _t=Jt(w);Bt(w)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_t,yt,w.width,w.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,_t,yt,w.width,w.height)}else o.renderbufferStorage(o.RENDERBUFFER,yt,w.width,w.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,z)}else if(w.depthBuffer&&w.stencilBuffer){const yt=Jt(w);st&&Bt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,o.DEPTH24_STENCIL8,w.width,w.height):Bt(w)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt,o.DEPTH24_STENCIL8,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,z)}else{const yt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let xt=0;xt<yt.length;xt++){const _t=yt[xt],Gt=u.convert(_t.format,_t.colorSpace),wt=u.convert(_t.type),Nt=R(_t.internalFormat,Gt,wt,_t.colorSpace),qt=Jt(w);st&&Bt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Nt,w.width,w.height):Bt(w)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Nt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(z,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const yt=s.get(w.depthTexture).__webglTexture,xt=Jt(w);if(w.depthTexture.format===Ss)Bt(w)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(w.depthTexture.format===Lr)Bt(w)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Wt(z){const w=s.get(z),st=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!w.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");Ot(w.__webglFramebuffer,z)}else if(st){w.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[yt]),w.__webglDepthbuffer[yt]=o.createRenderbuffer(),Ft(w.__webglDepthbuffer[yt],z,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),Ft(w.__webglDepthbuffer,z,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function he(z,w,st){const yt=s.get(z);w!==void 0&&Et(yt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&Wt(z)}function it(z){const w=z.texture,st=s.get(z),yt=s.get(w);z.addEventListener("dispose",et),z.isWebGLMultipleRenderTargets!==!0&&(yt.__webglTexture===void 0&&(yt.__webglTexture=o.createTexture()),yt.__version=w.version,d.memory.textures++);const xt=z.isWebGLCubeRenderTarget===!0,_t=z.isWebGLMultipleRenderTargets===!0,Gt=S(z)||h;if(xt){st.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(h&&w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer[wt]=[];for(let Nt=0;Nt<w.mipmaps.length;Nt++)st.__webglFramebuffer[wt][Nt]=o.createFramebuffer()}else st.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(h&&w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer=[];for(let wt=0;wt<w.mipmaps.length;wt++)st.__webglFramebuffer[wt]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(_t)if(l.drawBuffers){const wt=z.texture;for(let Nt=0,qt=wt.length;Nt<qt;Nt++){const se=s.get(wt[Nt]);se.__webglTexture===void 0&&(se.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&z.samples>0&&Bt(z)===!1){const wt=_t?w:[w];st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Nt=0;Nt<wt.length;Nt++){const qt=wt[Nt];st.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[Nt]);const se=u.convert(qt.format,qt.colorSpace),vt=u.convert(qt.type),Ee=R(qt.internalFormat,se,vt,qt.colorSpace,z.isXRRenderTarget===!0),ue=Jt(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,ue,Ee,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,st.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(st.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xt){i.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),G(o.TEXTURE_CUBE_MAP,w,Gt);for(let wt=0;wt<6;wt++)if(h&&w.mipmaps&&w.mipmaps.length>0)for(let Nt=0;Nt<w.mipmaps.length;Nt++)Et(st.__webglFramebuffer[wt][Nt],z,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Nt);else Et(st.__webglFramebuffer[wt],z,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);L(w,Gt)&&E(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(_t){const wt=z.texture;for(let Nt=0,qt=wt.length;Nt<qt;Nt++){const se=wt[Nt],vt=s.get(se);i.bindTexture(o.TEXTURE_2D,vt.__webglTexture),G(o.TEXTURE_2D,se,Gt),Et(st.__webglFramebuffer,z,se,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,0),L(se,Gt)&&E(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(h?wt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(wt,yt.__webglTexture),G(wt,w,Gt),h&&w.mipmaps&&w.mipmaps.length>0)for(let Nt=0;Nt<w.mipmaps.length;Nt++)Et(st.__webglFramebuffer[Nt],z,w,o.COLOR_ATTACHMENT0,wt,Nt);else Et(st.__webglFramebuffer,z,w,o.COLOR_ATTACHMENT0,wt,0);L(w,Gt)&&E(wt),i.unbindTexture()}z.depthBuffer&&Wt(z)}function hn(z){const w=S(z)||h,st=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let yt=0,xt=st.length;yt<xt;yt++){const _t=st[yt];if(L(_t,w)){const Gt=z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,wt=s.get(_t).__webglTexture;i.bindTexture(Gt,wt),E(Gt),i.unbindTexture()}}}function Ht(z){if(h&&z.samples>0&&Bt(z)===!1){const w=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],st=z.width,yt=z.height;let xt=o.COLOR_BUFFER_BIT;const _t=[],Gt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=s.get(z),Nt=z.isWebGLMultipleRenderTargets===!0;if(Nt)for(let qt=0;qt<w.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let qt=0;qt<w.length;qt++){_t.push(o.COLOR_ATTACHMENT0+qt),z.depthBuffer&&_t.push(Gt);const se=wt.__ignoreDepthValues!==void 0?wt.__ignoreDepthValues:!1;if(se===!1&&(z.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Nt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,wt.__webglColorRenderbuffer[qt]),se===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Gt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Gt])),Nt){const vt=s.get(w[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,vt,0)}o.blitFramebuffer(0,0,st,yt,0,0,st,yt,xt,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_t)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let qt=0;qt<w.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,wt.__webglColorRenderbuffer[qt]);const se=s.get(w[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,se,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}}function Jt(z){return Math.min(l.maxSamples,z.samples)}function Bt(z){const w=s.get(z);return h&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(z){const w=d.render.frame;_.get(z)!==w&&(_.set(z,w),z.update())}function ne(z,w){const st=z.colorSpace,yt=z.format,xt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===Xh||st!==aa&&st!==gi&&(Ne.getTransfer(st)===Ge?h===!1?e.has("EXT_sRGB")===!0&&yt===bi?(z.format=Xh,z.minFilter=pi,z.generateMipmaps=!1):w=V_.sRGBToLinear(w):(yt!==bi||xt!==Va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),w}this.allocateTextureUnit=k,this.resetTextureUnits=Mt,this.setTexture2D=F,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=ft,this.rebindTextures=he,this.setupRenderTarget=it,this.updateRenderTargetMipmap=hn,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Bt}function w1(o,e,i){const s=i.isWebGL2;function l(u,d=gi){let h;const p=Ne.getTransfer(d);if(u===Va)return o.UNSIGNED_BYTE;if(u===U_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===N_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===uS)return o.BYTE;if(u===fS)return o.SHORT;if(u===Qh)return o.UNSIGNED_SHORT;if(u===D_)return o.INT;if(u===Ia)return o.UNSIGNED_INT;if(u===Fa)return o.FLOAT;if(u===ko)return s?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===hS)return o.ALPHA;if(u===bi)return o.RGBA;if(u===dS)return o.LUMINANCE;if(u===pS)return o.LUMINANCE_ALPHA;if(u===Ss)return o.DEPTH_COMPONENT;if(u===Lr)return o.DEPTH_STENCIL;if(u===Xh)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===mS)return o.RED;if(u===O_)return o.RED_INTEGER;if(u===gS)return o.RG;if(u===z_)return o.RG_INTEGER;if(u===P_)return o.RGBA_INTEGER;if(u===ah||u===sh||u===rh||u===oh)if(p===Ge)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===ah)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===sh)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===rh)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===oh)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===ah)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===sh)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===rh)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===oh)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===s0||u===r0||u===o0||u===l0)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===s0)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===r0)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===o0)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===l0)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===B_)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===c0||u===u0)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===c0)return p===Ge?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===u0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===f0||u===h0||u===d0||u===p0||u===m0||u===g0||u===_0||u===v0||u===x0||u===y0||u===S0||u===M0||u===E0||u===T0)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===f0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===h0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===d0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===p0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===m0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===g0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===_0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===v0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===x0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===y0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===S0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===M0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===E0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===T0)return p===Ge?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===lh||u===b0||u===A0)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===lh)return p===Ge?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===b0)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===A0)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===_S||u===R0||u===w0||u===C0)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===lh)return h.COMPRESSED_RED_RGTC1_EXT;if(u===R0)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===w0)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===C0)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===ys?s?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class C1 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Go extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L1={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,s),g=this._getHandJoint(m,T);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=_.position.distanceTo(v.position),M=.02,b=.005;m.inputState.pinching&&y>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(L1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Go;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class D1 extends Or{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,_=null,v=null,y=null,M=null,b=null;const T=i.getContextAttributes();let S=null,g=null;const L=[],E=[],R=new ae;let I=null;const B=new gn;B.layers.enable(1),B.viewport=new _n;const O=new gn;O.layers.enable(2),O.viewport=new _n;const et=[B,O],C=new C1;C.layers.enable(1),C.layers.enable(2);let P=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=L[G];return Q===void 0&&(Q=new Nh,L[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=L[G];return Q===void 0&&(Q=new Nh,L[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=L[G];return Q===void 0&&(Q=new Nh,L[G]=Q),Q.getHandSpace()};function ht(G){const Q=E.indexOf(G.inputSource);if(Q===-1)return;const gt=L[Q];gt!==void 0&&(gt.update(G.inputSource,G.frame,m||d),gt.dispatchEvent({type:G.type,data:G.inputSource}))}function Mt(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",Mt),l.removeEventListener("inputsourceschange",k);for(let G=0;G<L.length;G++){const Q=E[G];Q!==null&&(E[G]=null,L[G].disconnect(Q))}P=null,ut=null,e.setRenderTarget(S),M=null,y=null,v=null,l=null,g=null,X.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){u=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",Mt),l.addEventListener("inputsourceschange",k),T.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:l.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Q),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),g=new Es(M.framebufferWidth,M.framebufferHeight,{format:bi,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let Q=null,gt=null,St=null;T.depth&&(St=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Q=T.stencil?Lr:Ss,gt=T.stencil?ys:Ia);const Et={colorFormat:i.RGBA8,depthFormat:St,scaleFactor:u};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Et),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),g=new Es(y.textureWidth,y.textureHeight,{format:bi,type:Va,depthTexture:new tv(y.textureWidth,y.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const Ft=e.properties.get(g);Ft.__ignoreDepthValues=y.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),X.setContext(l),X.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function k(G){for(let Q=0;Q<G.removed.length;Q++){const gt=G.removed[Q],St=E.indexOf(gt);St>=0&&(E[St]=null,L[St].disconnect(gt))}for(let Q=0;Q<G.added.length;Q++){const gt=G.added[Q];let St=E.indexOf(gt);if(St===-1){for(let Ft=0;Ft<L.length;Ft++)if(Ft>=E.length){E.push(gt),St=Ft;break}else if(E[Ft]===null){E[Ft]=gt,St=Ft;break}if(St===-1)break}const Et=L[St];Et&&Et.connect(gt)}}const K=new Z,F=new Z;function q(G,Q,gt){K.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(gt.matrixWorld);const St=K.distanceTo(F),Et=Q.projectionMatrix.elements,Ft=gt.projectionMatrix.elements,Ot=Et[14]/(Et[10]-1),Wt=Et[14]/(Et[10]+1),he=(Et[9]+1)/Et[5],it=(Et[9]-1)/Et[5],hn=(Et[8]-1)/Et[0],Ht=(Ft[8]+1)/Ft[0],Jt=Ot*hn,Bt=Ot*Ht,Ie=St/(-hn+Ht),ne=Ie*-hn;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(Ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const z=Ot+Ie,w=Wt+Ie,st=Jt-ne,yt=Bt+(St-ne),xt=he*Wt/w*z,_t=it*Wt/w*z;G.projectionMatrix.makePerspective(st,yt,xt,_t,z,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;C.near=O.near=B.near=G.near,C.far=O.far=B.far=G.far,(P!==C.near||ut!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,ut=C.far);const Q=G.parent,gt=C.cameras;W(C,Q);for(let St=0;St<gt.length;St++)W(gt[St],Q);gt.length===2?q(C,B,O):C.projectionMatrix.copy(B.projectionMatrix),ft(G,C,Q)};function ft(G,Q,gt){gt===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(gt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=kh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(G){p=G,y!==null&&(y.fixedFoveation=G),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=G)};let ot=null;function N(G,Q){if(_=Q.getViewerPose(m||d),b=Q,_!==null){const gt=_.views;M!==null&&(e.setRenderTargetFramebuffer(g,M.framebuffer),e.setRenderTarget(g));let St=!1;gt.length!==C.cameras.length&&(C.cameras.length=0,St=!0);for(let Et=0;Et<gt.length;Et++){const Ft=gt[Et];let Ot=null;if(M!==null)Ot=M.getViewport(Ft);else{const he=v.getViewSubImage(y,Ft);Ot=he.viewport,Et===0&&(e.setRenderTargetTextures(g,he.colorTexture,y.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(g))}let Wt=et[Et];Wt===void 0&&(Wt=new gn,Wt.layers.enable(Et),Wt.viewport=new _n,et[Et]=Wt),Wt.matrix.fromArray(Ft.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ft.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Et===0&&(C.matrix.copy(Wt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),St===!0&&C.cameras.push(Wt)}}for(let gt=0;gt<L.length;gt++){const St=E[gt],Et=L[gt];St!==null&&Et!==void 0&&Et.update(St,Q,m||d)}ot&&ot(G,Q),Q.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Q}),b=null}const X=new J_;X.setAnimationLoop(N),this.setAnimationLoop=function(G){ot=G},this.dispose=function(){}}}function U1(o,e){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function s(S,g){g.color.getRGB(S.fogColor.value,Z_(o)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,L,E,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),v(S,g)):g.isMeshPhongMaterial?(u(S,g),_(S,g)):g.isMeshStandardMaterial?(u(S,g),y(S,g),g.isMeshPhysicalMaterial&&M(S,g,R)):g.isMeshMatcapMaterial?(u(S,g),b(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),T(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(d(S,g),g.isLineDashedMaterial&&h(S,g)):g.isPointsMaterial?p(S,g,L,E):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===kn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===kn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const L=e.get(g).envMap;if(L&&(S.envMap.value=L,S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap){S.lightMap.value=g.lightMap;const E=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=g.lightMapIntensity*E,i(g.lightMap,S.lightMapTransform)}g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function d(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function h(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,L,E){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*L,S.scale.value=E*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function v(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),e.get(g).envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,L){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&S.clearcoatNormalScale.value.negate())),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,g){g.matcap&&(S.matcap.value=g.matcap)}function T(S,g){const L=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function N1(o,e,i,s){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(L,E){const R=E.program;s.uniformBlockBinding(L,R)}function m(L,E){let R=l[L.id];R===void 0&&(b(L),R=_(L),l[L.id]=R,L.addEventListener("dispose",S));const I=E.program;s.updateUBOMapping(L,I);const B=e.render.frame;u[L.id]!==B&&(y(L),u[L.id]=B)}function _(L){const E=v();L.__bindingPointIndex=E;const R=o.createBuffer(),I=L.__size,B=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,I,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,E,R),R}function v(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const E=l[L.id],R=L.uniforms,I=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,E);for(let B=0,O=R.length;B<O;B++){const et=Array.isArray(R[B])?R[B]:[R[B]];for(let C=0,P=et.length;C<P;C++){const ut=et[C];if(M(ut,B,C,I)===!0){const ht=ut.__offset,Mt=Array.isArray(ut.value)?ut.value:[ut.value];let k=0;for(let K=0;K<Mt.length;K++){const F=Mt[K],q=T(F);typeof F=="number"||typeof F=="boolean"?(ut.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,ht+k,ut.__data)):F.isMatrix3?(ut.__data[0]=F.elements[0],ut.__data[1]=F.elements[1],ut.__data[2]=F.elements[2],ut.__data[3]=0,ut.__data[4]=F.elements[3],ut.__data[5]=F.elements[4],ut.__data[6]=F.elements[5],ut.__data[7]=0,ut.__data[8]=F.elements[6],ut.__data[9]=F.elements[7],ut.__data[10]=F.elements[8],ut.__data[11]=0):(F.toArray(ut.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ht,ut.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,E,R,I){const B=L.value,O=E+"_"+R;if(I[O]===void 0)return typeof B=="number"||typeof B=="boolean"?I[O]=B:I[O]=B.clone(),!0;{const et=I[O];if(typeof B=="number"||typeof B=="boolean"){if(et!==B)return I[O]=B,!0}else if(et.equals(B)===!1)return et.copy(B),!0}return!1}function b(L){const E=L.uniforms;let R=0;const I=16;for(let O=0,et=E.length;O<et;O++){const C=Array.isArray(E[O])?E[O]:[E[O]];for(let P=0,ut=C.length;P<ut;P++){const ht=C[P],Mt=Array.isArray(ht.value)?ht.value:[ht.value];for(let k=0,K=Mt.length;k<K;k++){const F=Mt[k],q=T(F),W=R%I;W!==0&&I-W<q.boundary&&(R+=I-W),ht.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=R,R+=q.storage}}}const B=R%I;return B>0&&(R+=I-B),L.__size=R,L.__cache={},this}function T(L){const E={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(E.boundary=4,E.storage=4):L.isVector2?(E.boundary=8,E.storage=8):L.isVector3||L.isColor?(E.boundary=16,E.storage=12):L.isVector4?(E.boundary=16,E.storage=16):L.isMatrix3?(E.boundary=48,E.storage=48):L.isMatrix4?(E.boundary=64,E.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),E}function S(L){const E=L.target;E.removeEventListener("dispose",S);const R=d.indexOf(E.__bindingPointIndex);d.splice(R,1),o.deleteBuffer(l[E.id]),delete l[E.id],delete u[E.id]}function g(){for(const L in l)o.deleteBuffer(l[L]);d=[],l={},u={}}return{bind:p,update:m,dispose:g}}class Ya{constructor(e={}){const{canvas:i=CS(),context:s=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let y;s!==null?y=s.getContextAttributes().alpha:y=d;const M=new Uint32Array(4),b=new Int32Array(4);let T=null,S=null;const g=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this._useLegacyLights=!1,this.toneMapping=Ga,this.toneMappingExposure=1;const E=this;let R=!1,I=0,B=0,O=null,et=-1,C=null;const P=new _n,ut=new _n;let ht=null;const Mt=new fe(0);let k=0,K=i.width,F=i.height,q=1,W=null,ft=null;const ot=new _n(0,0,K,F),N=new _n(0,0,K,F);let X=!1;const G=new td;let Q=!1,gt=!1,St=null;const Et=new Ye,Ft=new ae,Ot=new Z,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return O===null?q:1}let it=s;function hn(U,J){for(let rt=0;rt<U.length;rt++){const lt=U[rt],at=i.getContext(lt,J);if(at!==null)return at}return null}try{const U={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kh}`),i.addEventListener("webglcontextlost",Tt,!1),i.addEventListener("webglcontextrestored",V,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),it===null){const J=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&J.shift(),it=hn(J,U),it===null)throw hn(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&it instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),it.getShaderPrecisionFormat===void 0&&(it.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Ht,Jt,Bt,Ie,ne,z,w,st,yt,xt,_t,Gt,wt,Nt,qt,se,vt,Ee,ue,Qt,Dt,Lt,Xt,Se;function Ve(){Ht=new jT(it),Jt=new BT(it,Ht,e),Ht.init(Jt),Lt=new w1(it,Ht,Jt),Bt=new A1(it,Ht,Jt),Ie=new WT(it),ne=new h1,z=new R1(it,Ht,Bt,ne,Jt,Lt,Ie),w=new FT(E),st=new VT(E),yt=new tM(it,Jt),Xt=new zT(it,Ht,yt,Jt),xt=new XT(it,yt,Ie,Xt),_t=new KT(it,xt,yt,Ie),ue=new ZT(it,Jt,z),se=new IT(ne),Gt=new f1(E,w,st,Ht,Jt,Xt,se),wt=new U1(E,ne),Nt=new p1,qt=new y1(Ht,Jt),Ee=new OT(E,w,st,Bt,_t,y,p),vt=new b1(E,_t,Jt),Se=new N1(it,Ie,Jt,Bt),Qt=new PT(it,Ht,Ie,Jt),Dt=new kT(it,Ht,Ie,Jt),Ie.programs=Gt.programs,E.capabilities=Jt,E.extensions=Ht,E.properties=ne,E.renderLists=Nt,E.shadowMap=vt,E.state=Bt,E.info=Ie}Ve();const oe=new D1(E,it);this.xr=oe,this.getContext=function(){return it},this.getContextAttributes=function(){return it.getContextAttributes()},this.forceContextLoss=function(){const U=Ht.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Ht.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(U){U!==void 0&&(q=U,this.setSize(K,F,!1))},this.getSize=function(U){return U.set(K,F)},this.setSize=function(U,J,rt=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=U,F=J,i.width=Math.floor(U*q),i.height=Math.floor(J*q),rt===!0&&(i.style.width=U+"px",i.style.height=J+"px"),this.setViewport(0,0,U,J)},this.getDrawingBufferSize=function(U){return U.set(K*q,F*q).floor()},this.setDrawingBufferSize=function(U,J,rt){K=U,F=J,q=rt,i.width=Math.floor(U*rt),i.height=Math.floor(J*rt),this.setViewport(0,0,U,J)},this.getCurrentViewport=function(U){return U.copy(P)},this.getViewport=function(U){return U.copy(ot)},this.setViewport=function(U,J,rt,lt){U.isVector4?ot.set(U.x,U.y,U.z,U.w):ot.set(U,J,rt,lt),Bt.viewport(P.copy(ot).multiplyScalar(q).floor())},this.getScissor=function(U){return U.copy(N)},this.setScissor=function(U,J,rt,lt){U.isVector4?N.set(U.x,U.y,U.z,U.w):N.set(U,J,rt,lt),Bt.scissor(ut.copy(N).multiplyScalar(q).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(U){Bt.setScissorTest(X=U)},this.setOpaqueSort=function(U){W=U},this.setTransparentSort=function(U){ft=U},this.getClearColor=function(U){return U.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(U=!0,J=!0,rt=!0){let lt=0;if(U){let at=!1;if(O!==null){const Ct=O.texture.format;at=Ct===P_||Ct===z_||Ct===O_}if(at){const Ct=O.texture.type,zt=Ct===Va||Ct===Ia||Ct===Qh||Ct===ys||Ct===U_||Ct===N_,kt=Ee.getClearColor(),Yt=Ee.getClearAlpha(),It=kt.r,$t=kt.g,te=kt.b;zt?(M[0]=It,M[1]=$t,M[2]=te,M[3]=Yt,it.clearBufferuiv(it.COLOR,0,M)):(b[0]=It,b[1]=$t,b[2]=te,b[3]=Yt,it.clearBufferiv(it.COLOR,0,b))}else lt|=it.COLOR_BUFFER_BIT}J&&(lt|=it.DEPTH_BUFFER_BIT),rt&&(lt|=it.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Tt,!1),i.removeEventListener("webglcontextrestored",V,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Nt.dispose(),qt.dispose(),ne.dispose(),w.dispose(),st.dispose(),_t.dispose(),Xt.dispose(),Se.dispose(),Gt.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ze),oe.removeEventListener("sessionend",Ce),St&&(St.dispose(),St=null),dn.stop()};function Tt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const U=Ie.autoReset,J=vt.enabled,rt=vt.autoUpdate,lt=vt.needsUpdate,at=vt.type;Ve(),Ie.autoReset=U,vt.enabled=J,vt.autoUpdate=rt,vt.needsUpdate=lt,vt.type=at}function Rt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function bt(U){const J=U.target;J.removeEventListener("dispose",bt),Zt(J)}function Zt(U){Vt(U),ne.remove(U)}function Vt(U){const J=ne.get(U).programs;J!==void 0&&(J.forEach(function(rt){Gt.releaseProgram(rt)}),U.isShaderMaterial&&Gt.releaseShaderCache(U))}this.renderBufferDirect=function(U,J,rt,lt,at,Ct){J===null&&(J=Wt);const zt=at.isMesh&&at.matrixWorld.determinant()<0,kt=Tn(U,J,rt,lt,at);Bt.setMaterial(lt,zt);let Yt=rt.index,It=1;if(lt.wireframe===!0){if(Yt=xt.getWireframeAttribute(rt),Yt===void 0)return;It=2}const $t=rt.drawRange,te=rt.attributes.position;let be=$t.start*It,$e=($t.start+$t.count)*It;Ct!==null&&(be=Math.max(be,Ct.start*It),$e=Math.min($e,(Ct.start+Ct.count)*It)),Yt!==null?(be=Math.max(be,0),$e=Math.min($e,Yt.count)):te!=null&&(be=Math.max(be,0),$e=Math.min($e,te.count));const tn=$e-be;if(tn<0||tn===1/0)return;Xt.setup(at,lt,kt,rt,Yt);let ai,Be=Qt;if(Yt!==null&&(ai=yt.get(Yt),Be=Dt,Be.setIndex(ai)),at.isMesh)lt.wireframe===!0?(Bt.setLineWidth(lt.wireframeLinewidth*he()),Be.setMode(it.LINES)):Be.setMode(it.TRIANGLES);else if(at.isLine){let le=lt.linewidth;le===void 0&&(le=1),Bt.setLineWidth(le*he()),at.isLineSegments?Be.setMode(it.LINES):at.isLineLoop?Be.setMode(it.LINE_LOOP):Be.setMode(it.LINE_STRIP)}else at.isPoints?Be.setMode(it.POINTS):at.isSprite&&Be.setMode(it.TRIANGLES);if(at.isBatchedMesh)Be.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)Be.renderInstances(be,tn,at.count);else if(rt.isInstancedBufferGeometry){const le=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,oa=Math.min(rt.instanceCount,le);Be.renderInstances(be,tn,oa)}else Be.render(be,tn)};function we(U,J,rt){U.transparent===!0&&U.side===ea&&U.forceSinglePass===!1?(U.side=kn,U.needsUpdate=!0,Za(U,J,rt),U.side=Xa,U.needsUpdate=!0,Za(U,J,rt),U.side=ea):Za(U,J,rt)}this.compile=function(U,J,rt=null){rt===null&&(rt=U),S=qt.get(rt),S.init(),L.push(S),rt.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),U!==rt&&U.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),S.setupLights(E._useLegacyLights);const lt=new Set;return U.traverse(function(at){const Ct=at.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){const kt=Ct[zt];we(kt,rt,at),lt.add(kt)}else we(Ct,rt,at),lt.add(Ct)}),L.pop(),S=null,lt},this.compileAsync=function(U,J,rt=null){const lt=this.compile(U,J,rt);return new Promise(at=>{function Ct(){if(lt.forEach(function(zt){ne.get(zt).currentProgram.isReady()&&lt.delete(zt)}),lt.size===0){at(U);return}setTimeout(Ct,10)}Ht.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Te=null;function ke(U){Te&&Te(U)}function Ze(){dn.stop()}function Ce(){dn.start()}const dn=new J_;dn.setAnimationLoop(ke),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(U){Te=U,oe.setAnimationLoop(U),U===null?dn.stop():dn.start()},oe.addEventListener("sessionstart",Ze),oe.addEventListener("sessionend",Ce),this.render=function(U,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(J),J=oe.getCamera()),U.isScene===!0&&U.onBeforeRender(E,U,J,O),S=qt.get(U,L.length),S.init(),L.push(S),Et.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,Q=se.init(this.clippingPlanes,gt),T=Nt.get(U,g.length),T.init(),g.push(T),Yn(U,J,0,E.sortObjects),T.finish(),E.sortObjects===!0&&T.sort(W,ft),this.info.render.frame++,Q===!0&&se.beginShadows();const rt=S.state.shadowsArray;if(vt.render(rt,U,J),Q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(T,U),S.setupLights(E._useLegacyLights),J.isArrayCamera){const lt=J.cameras;for(let at=0,Ct=lt.length;at<Ct;at++){const zt=lt[at];Br(T,U,zt,zt.viewport)}}else Br(T,U,J);O!==null&&(z.updateMultisampleRenderTarget(O),z.updateRenderTargetMipmap(O)),U.isScene===!0&&U.onAfterRender(E,U,J),Xt.resetDefaultState(),et=-1,C=null,L.pop(),L.length>0?S=L[L.length-1]:S=null,g.pop(),g.length>0?T=g[g.length-1]:T=null};function Yn(U,J,rt,lt){if(U.visible===!1)return;if(U.layers.test(J.layers)){if(U.isGroup)rt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(J);else if(U.isLight)S.pushLight(U),U.castShadow&&S.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||G.intersectsSprite(U)){lt&&Ot.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Et);const zt=_t.update(U),kt=U.material;kt.visible&&T.push(U,zt,kt,rt,Ot.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||G.intersectsObject(U))){const zt=_t.update(U),kt=U.material;if(lt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ot.copy(U.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ot.copy(zt.boundingSphere.center)),Ot.applyMatrix4(U.matrixWorld).applyMatrix4(Et)),Array.isArray(kt)){const Yt=zt.groups;for(let It=0,$t=Yt.length;It<$t;It++){const te=Yt[It],be=kt[te.materialIndex];be&&be.visible&&T.push(U,zt,be,rt,Ot.z,te)}}else kt.visible&&T.push(U,zt,kt,rt,Ot.z,null)}}const Ct=U.children;for(let zt=0,kt=Ct.length;zt<kt;zt++)Yn(Ct[zt],J,rt,lt)}function Br(U,J,rt,lt){const at=U.opaque,Ct=U.transmissive,zt=U.transparent;S.setupLightsView(rt),Q===!0&&se.setGlobalState(E.clippingPlanes,rt),Ct.length>0&&Ir(at,Ct,J,rt),lt&&Bt.viewport(P.copy(lt)),at.length>0&&sa(at,J,rt),Ct.length>0&&sa(Ct,J,rt),zt.length>0&&sa(zt,J,rt),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Ir(U,J,rt,lt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;const Ct=Jt.isWebGL2;St===null&&(St=new Es(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")?ko:Va,minFilter:Xo,samples:Ct?4:0})),E.getDrawingBufferSize(Ft),Ct?St.setSize(Ft.x,Ft.y):St.setSize(Wh(Ft.x),Wh(Ft.y));const zt=E.getRenderTarget();E.setRenderTarget(St),E.getClearColor(Mt),k=E.getClearAlpha(),k<1&&E.setClearColor(16777215,.5),E.clear();const kt=E.toneMapping;E.toneMapping=Ga,sa(U,rt,lt),z.updateMultisampleRenderTarget(St),z.updateRenderTargetMipmap(St);let Yt=!1;for(let It=0,$t=J.length;It<$t;It++){const te=J[It],be=te.object,$e=te.geometry,tn=te.material,ai=te.group;if(tn.side===ea&&be.layers.test(lt.layers)){const Be=tn.side;tn.side=kn,tn.needsUpdate=!0,Fr(be,rt,lt,$e,tn,ai),tn.side=Be,tn.needsUpdate=!0,Yt=!0}}Yt===!0&&(z.updateMultisampleRenderTarget(St),z.updateRenderTargetMipmap(St)),E.setRenderTarget(zt),E.setClearColor(Mt,k),E.toneMapping=kt}function sa(U,J,rt){const lt=J.isScene===!0?J.overrideMaterial:null;for(let at=0,Ct=U.length;at<Ct;at++){const zt=U[at],kt=zt.object,Yt=zt.geometry,It=lt===null?zt.material:lt,$t=zt.group;kt.layers.test(rt.layers)&&Fr(kt,J,rt,Yt,It,$t)}}function Fr(U,J,rt,lt,at,Ct){U.onBeforeRender(E,J,rt,lt,at,Ct),U.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),at.onBeforeRender(E,J,rt,lt,U,Ct),at.transparent===!0&&at.side===ea&&at.forceSinglePass===!1?(at.side=kn,at.needsUpdate=!0,E.renderBufferDirect(rt,J,lt,at,U,Ct),at.side=Xa,at.needsUpdate=!0,E.renderBufferDirect(rt,J,lt,at,U,Ct),at.side=ea):E.renderBufferDirect(rt,J,lt,at,U,Ct),U.onAfterRender(E,J,rt,lt,at,Ct)}function Za(U,J,rt){J.isScene!==!0&&(J=Wt);const lt=ne.get(U),at=S.state.lights,Ct=S.state.shadowsArray,zt=at.state.version,kt=Gt.getParameters(U,at.state,Ct,J,rt),Yt=Gt.getProgramCacheKey(kt);let It=lt.programs;lt.environment=U.isMeshStandardMaterial?J.environment:null,lt.fog=J.fog,lt.envMap=(U.isMeshStandardMaterial?st:w).get(U.envMap||lt.environment),It===void 0&&(U.addEventListener("dispose",bt),It=new Map,lt.programs=It);let $t=It.get(Yt);if($t!==void 0){if(lt.currentProgram===$t&&lt.lightsStateVersion===zt)return Je(U,kt),$t}else kt.uniforms=Gt.getUniforms(U),U.onBuild(rt,kt,E),U.onBeforeCompile(kt,E),$t=Gt.acquireProgram(kt,Yt),It.set(Yt,$t),lt.uniforms=kt.uniforms;const te=lt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(te.clippingPlanes=se.uniform),Je(U,kt),lt.needsLights=Hr(U),lt.lightsStateVersion=zt,lt.needsLights&&(te.ambientLightColor.value=at.state.ambient,te.lightProbe.value=at.state.probe,te.directionalLights.value=at.state.directional,te.directionalLightShadows.value=at.state.directionalShadow,te.spotLights.value=at.state.spot,te.spotLightShadows.value=at.state.spotShadow,te.rectAreaLights.value=at.state.rectArea,te.ltc_1.value=at.state.rectAreaLTC1,te.ltc_2.value=at.state.rectAreaLTC2,te.pointLights.value=at.state.point,te.pointLightShadows.value=at.state.pointShadow,te.hemisphereLights.value=at.state.hemi,te.directionalShadowMap.value=at.state.directionalShadowMap,te.directionalShadowMatrix.value=at.state.directionalShadowMatrix,te.spotShadowMap.value=at.state.spotShadowMap,te.spotLightMatrix.value=at.state.spotLightMatrix,te.spotLightMap.value=at.state.spotLightMap,te.pointShadowMap.value=at.state.pointShadowMap,te.pointShadowMatrix.value=at.state.pointShadowMatrix),lt.currentProgram=$t,lt.uniformsList=null,$t}function _i(U){if(U.uniformsList===null){const J=U.currentProgram.getUniforms();U.uniformsList=Nc.seqWithValue(J.seq,U.uniforms)}return U.uniformsList}function Je(U,J){const rt=ne.get(U);rt.outputColorSpace=J.outputColorSpace,rt.batching=J.batching,rt.instancing=J.instancing,rt.instancingColor=J.instancingColor,rt.skinning=J.skinning,rt.morphTargets=J.morphTargets,rt.morphNormals=J.morphNormals,rt.morphColors=J.morphColors,rt.morphTargetsCount=J.morphTargetsCount,rt.numClippingPlanes=J.numClippingPlanes,rt.numIntersection=J.numClipIntersection,rt.vertexAlphas=J.vertexAlphas,rt.vertexTangents=J.vertexTangents,rt.toneMapping=J.toneMapping}function Tn(U,J,rt,lt,at){J.isScene!==!0&&(J=Wt),z.resetTextureUnits();const Ct=J.fog,zt=lt.isMeshStandardMaterial?J.environment:null,kt=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:aa,Yt=(lt.isMeshStandardMaterial?st:w).get(lt.envMap||zt),It=lt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),te=!!rt.morphAttributes.position,be=!!rt.morphAttributes.normal,$e=!!rt.morphAttributes.color;let tn=Ga;lt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(tn=E.toneMapping);const ai=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Be=ai!==void 0?ai.length:0,le=ne.get(lt),oa=S.state.lights;if(Q===!0&&(gt===!0||U!==C)){const In=U===C&&lt.id===et;se.setState(lt,U,In)}let Oe=!1;lt.version===le.__version?(le.needsLights&&le.lightsStateVersion!==oa.state.version||le.outputColorSpace!==kt||at.isBatchedMesh&&le.batching===!1||!at.isBatchedMesh&&le.batching===!0||at.isInstancedMesh&&le.instancing===!1||!at.isInstancedMesh&&le.instancing===!0||at.isSkinnedMesh&&le.skinning===!1||!at.isSkinnedMesh&&le.skinning===!0||at.isInstancedMesh&&le.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&le.instancingColor===!1&&at.instanceColor!==null||le.envMap!==Yt||lt.fog===!0&&le.fog!==Ct||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==se.numPlanes||le.numIntersection!==se.numIntersection)||le.vertexAlphas!==It||le.vertexTangents!==$t||le.morphTargets!==te||le.morphNormals!==be||le.morphColors!==$e||le.toneMapping!==tn||Jt.isWebGL2===!0&&le.morphTargetsCount!==Be)&&(Oe=!0):(Oe=!0,le.__version=lt.version);let vn=le.currentProgram;Oe===!0&&(vn=Za(lt,J,at));let Ln=!1,la=!1,Gr=!1;const en=vn.getUniforms(),Ai=le.uniforms;if(Bt.useProgram(vn.program)&&(Ln=!0,la=!0,Gr=!0),lt.id!==et&&(et=lt.id,la=!0),Ln||C!==U){en.setValue(it,"projectionMatrix",U.projectionMatrix),en.setValue(it,"viewMatrix",U.matrixWorldInverse);const In=en.map.cameraPosition;In!==void 0&&In.setValue(it,Ot.setFromMatrixPosition(U.matrixWorld)),Jt.logarithmicDepthBuffer&&en.setValue(it,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&en.setValue(it,"isOrthographic",U.isOrthographicCamera===!0),C!==U&&(C=U,la=!0,Gr=!0)}if(at.isSkinnedMesh){en.setOptional(it,at,"bindMatrix"),en.setOptional(it,at,"bindMatrixInverse");const In=at.skeleton;In&&(Jt.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),en.setValue(it,"boneTexture",In.boneTexture,z)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}at.isBatchedMesh&&(en.setOptional(it,at,"batchingTexture"),en.setValue(it,"batchingTexture",at._matricesTexture,z));const ca=rt.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&Jt.isWebGL2===!0)&&ue.update(at,rt,vn),(la||le.receiveShadow!==at.receiveShadow)&&(le.receiveShadow=at.receiveShadow,en.setValue(it,"receiveShadow",at.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Ai.envMap.value=Yt,Ai.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),la&&(en.setValue(it,"toneMappingExposure",E.toneMappingExposure),le.needsLights&&ra(Ai,Gr),Ct&&lt.fog===!0&&wt.refreshFogUniforms(Ai,Ct),wt.refreshMaterialUniforms(Ai,lt,q,F,St),Nc.upload(it,_i(le),Ai,z)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Nc.upload(it,_i(le),Ai,z),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&en.setValue(it,"center",at.center),en.setValue(it,"modelViewMatrix",at.modelViewMatrix),en.setValue(it,"normalMatrix",at.normalMatrix),en.setValue(it,"modelMatrix",at.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const In=lt.uniformsGroups;for(let bn=0,Vr=In.length;bn<Vr;bn++)if(Jt.isWebGL2){const jr=In[bn];Se.update(jr,vn),Se.bind(jr,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function ra(U,J){U.ambientLightColor.needsUpdate=J,U.lightProbe.needsUpdate=J,U.directionalLights.needsUpdate=J,U.directionalLightShadows.needsUpdate=J,U.pointLights.needsUpdate=J,U.pointLightShadows.needsUpdate=J,U.spotLights.needsUpdate=J,U.spotLightShadows.needsUpdate=J,U.rectAreaLights.needsUpdate=J,U.hemisphereLights.needsUpdate=J}function Hr(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(U,J,rt){ne.get(U.texture).__webglTexture=J,ne.get(U.depthTexture).__webglTexture=rt;const lt=ne.get(U);lt.__hasExternalTextures=!0,lt.__hasExternalTextures&&(lt.__autoAllocateDepthBuffer=rt===void 0,lt.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,J){const rt=ne.get(U);rt.__webglFramebuffer=J,rt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(U,J=0,rt=0){O=U,I=J,B=rt;let lt=!0,at=null,Ct=!1,zt=!1;if(U){const Yt=ne.get(U);Yt.__useDefaultFramebuffer!==void 0?(Bt.bindFramebuffer(it.FRAMEBUFFER,null),lt=!1):Yt.__webglFramebuffer===void 0?z.setupRenderTarget(U):Yt.__hasExternalTextures&&z.rebindTextures(U,ne.get(U.texture).__webglTexture,ne.get(U.depthTexture).__webglTexture);const It=U.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(zt=!0);const $t=ne.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray($t[J])?at=$t[J][rt]:at=$t[J],Ct=!0):Jt.isWebGL2&&U.samples>0&&z.useMultisampledRTT(U)===!1?at=ne.get(U).__webglMultisampledFramebuffer:Array.isArray($t)?at=$t[rt]:at=$t,P.copy(U.viewport),ut.copy(U.scissor),ht=U.scissorTest}else P.copy(ot).multiplyScalar(q).floor(),ut.copy(N).multiplyScalar(q).floor(),ht=X;if(Bt.bindFramebuffer(it.FRAMEBUFFER,at)&&Jt.drawBuffers&&lt&&Bt.drawBuffers(U,at),Bt.viewport(P),Bt.scissor(ut),Bt.setScissorTest(ht),Ct){const Yt=ne.get(U.texture);it.framebufferTexture2D(it.FRAMEBUFFER,it.COLOR_ATTACHMENT0,it.TEXTURE_CUBE_MAP_POSITIVE_X+J,Yt.__webglTexture,rt)}else if(zt){const Yt=ne.get(U.texture),It=J||0;it.framebufferTextureLayer(it.FRAMEBUFFER,it.COLOR_ATTACHMENT0,Yt.__webglTexture,rt||0,It)}et=-1},this.readRenderTargetPixels=function(U,J,rt,lt,at,Ct,zt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=ne.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&zt!==void 0&&(kt=kt[zt]),kt){Bt.bindFramebuffer(it.FRAMEBUFFER,kt);try{const Yt=U.texture,It=Yt.format,$t=Yt.type;if(It!==bi&&Lt.convert(It)!==it.getParameter(it.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const te=$t===ko&&(Ht.has("EXT_color_buffer_half_float")||Jt.isWebGL2&&Ht.has("EXT_color_buffer_float"));if($t!==Va&&Lt.convert($t)!==it.getParameter(it.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===Fa&&(Jt.isWebGL2||Ht.has("OES_texture_float")||Ht.has("WEBGL_color_buffer_float")))&&!te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=U.width-lt&&rt>=0&&rt<=U.height-at&&it.readPixels(J,rt,lt,at,Lt.convert(It),Lt.convert($t),Ct)}finally{const Yt=O!==null?ne.get(O).__webglFramebuffer:null;Bt.bindFramebuffer(it.FRAMEBUFFER,Yt)}}},this.copyFramebufferToTexture=function(U,J,rt=0){const lt=Math.pow(2,-rt),at=Math.floor(J.image.width*lt),Ct=Math.floor(J.image.height*lt);z.setTexture2D(J,0),it.copyTexSubImage2D(it.TEXTURE_2D,rt,0,0,U.x,U.y,at,Ct),Bt.unbindTexture()},this.copyTextureToTexture=function(U,J,rt,lt=0){const at=J.image.width,Ct=J.image.height,zt=Lt.convert(rt.format),kt=Lt.convert(rt.type);z.setTexture2D(rt,0),it.pixelStorei(it.UNPACK_FLIP_Y_WEBGL,rt.flipY),it.pixelStorei(it.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),it.pixelStorei(it.UNPACK_ALIGNMENT,rt.unpackAlignment),J.isDataTexture?it.texSubImage2D(it.TEXTURE_2D,lt,U.x,U.y,at,Ct,zt,kt,J.image.data):J.isCompressedTexture?it.compressedTexSubImage2D(it.TEXTURE_2D,lt,U.x,U.y,J.mipmaps[0].width,J.mipmaps[0].height,zt,J.mipmaps[0].data):it.texSubImage2D(it.TEXTURE_2D,lt,U.x,U.y,zt,kt,J.image),lt===0&&rt.generateMipmaps&&it.generateMipmap(it.TEXTURE_2D),Bt.unbindTexture()},this.copyTextureToTexture3D=function(U,J,rt,lt,at=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=U.max.x-U.min.x+1,zt=U.max.y-U.min.y+1,kt=U.max.z-U.min.z+1,Yt=Lt.convert(lt.format),It=Lt.convert(lt.type);let $t;if(lt.isData3DTexture)z.setTexture3D(lt,0),$t=it.TEXTURE_3D;else if(lt.isDataArrayTexture||lt.isCompressedArrayTexture)z.setTexture2DArray(lt,0),$t=it.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}it.pixelStorei(it.UNPACK_FLIP_Y_WEBGL,lt.flipY),it.pixelStorei(it.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),it.pixelStorei(it.UNPACK_ALIGNMENT,lt.unpackAlignment);const te=it.getParameter(it.UNPACK_ROW_LENGTH),be=it.getParameter(it.UNPACK_IMAGE_HEIGHT),$e=it.getParameter(it.UNPACK_SKIP_PIXELS),tn=it.getParameter(it.UNPACK_SKIP_ROWS),ai=it.getParameter(it.UNPACK_SKIP_IMAGES),Be=rt.isCompressedTexture?rt.mipmaps[at]:rt.image;it.pixelStorei(it.UNPACK_ROW_LENGTH,Be.width),it.pixelStorei(it.UNPACK_IMAGE_HEIGHT,Be.height),it.pixelStorei(it.UNPACK_SKIP_PIXELS,U.min.x),it.pixelStorei(it.UNPACK_SKIP_ROWS,U.min.y),it.pixelStorei(it.UNPACK_SKIP_IMAGES,U.min.z),rt.isDataTexture||rt.isData3DTexture?it.texSubImage3D($t,at,J.x,J.y,J.z,Ct,zt,kt,Yt,It,Be.data):rt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),it.compressedTexSubImage3D($t,at,J.x,J.y,J.z,Ct,zt,kt,Yt,Be.data)):it.texSubImage3D($t,at,J.x,J.y,J.z,Ct,zt,kt,Yt,It,Be),it.pixelStorei(it.UNPACK_ROW_LENGTH,te),it.pixelStorei(it.UNPACK_IMAGE_HEIGHT,be),it.pixelStorei(it.UNPACK_SKIP_PIXELS,$e),it.pixelStorei(it.UNPACK_SKIP_ROWS,tn),it.pixelStorei(it.UNPACK_SKIP_IMAGES,ai),at===0&&lt.generateMipmaps&&it.generateMipmap($t),Bt.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?z.setTextureCube(U,0):U.isData3DTexture?z.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?z.setTexture2DArray(U,0):z.setTexture2D(U,0),Bt.unbindTexture()},this.resetState=function(){I=0,B=0,O=null,Bt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Jh?"display-p3":"srgb",i.unpackColorSpace=Ne.workingColorSpace===Vc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===En?Ms:I_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ms?En:aa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class O1 extends Ya{}O1.prototype.isWebGL1Renderer=!0;class Ts extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class z1{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=jh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ja()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new Z;class Hc{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix4(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyNormalMatrix(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.transformDirection(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}setX(e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=na(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=na(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=na(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=na(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array),l=Pe(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e=e*this.data.stride+this.offset,this.normalized&&(i=Pe(i,this.array),s=Pe(s,this.array),l=Pe(l,this.array),u=Pe(u,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=u,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new qn(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rv extends qa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let yr;const Io=new Z,Sr=new Z,Mr=new Z,Er=new ae,Fo=new ae,ov=new Ye,Rc=new Z,Ho=new Z,wc=new Z,__=new ae,Oh=new ae,v_=new ae;class P1 extends cn{constructor(e=new rv){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new Bn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new z1(i,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new Hc(s,3,0,!1)),yr.setAttribute("uv",new Hc(s,2,3,!1))}this.geometry=yr,this.material=e,this.center=new ae(.5,.5)}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),ov.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Mr.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const d=this.center;Cc(Rc.set(-.5,-.5,0),Mr,d,Sr,l,u),Cc(Ho.set(.5,-.5,0),Mr,d,Sr,l,u),Cc(wc.set(.5,.5,0),Mr,d,Sr,l,u),__.set(0,0),Oh.set(1,0),v_.set(1,1);let h=e.ray.intersectTriangle(Rc,Ho,wc,!1,Io);if(h===null&&(Cc(Ho.set(-.5,.5,0),Mr,d,Sr,l,u),Oh.set(0,1),h=e.ray.intersectTriangle(Rc,wc,Ho,!1,Io),h===null))return;const p=e.ray.origin.distanceTo(Io);p<e.near||p>e.far||i.push({distance:p,point:Io.clone(),uv:mi.getInterpolation(Io,Rc,Ho,wc,__,Oh,v_,new ae),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cc(o,e,i,s,l,u){Er.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Fo.x=u*Er.x-l*Er.y,Fo.y=l*Er.x+u*Er.y):Fo.copy(Er),o.copy(e),o.x+=Fo.x,o.y+=Fo.y,o.applyMatrix4(ov)}class lv extends qa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const x_=new Z,y_=new Z,S_=new Ye,zh=new $h,Lc=new Yo;class B1 extends cn{constructor(e=new Bn,i=new lv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)x_.fromBufferAttribute(i,l-1),y_.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=x_.distanceTo(y_);e.setAttribute("lineDistance",new Pn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=u,e.ray.intersectsSphere(Lc)===!1)return;S_.copy(l).invert(),zh.copy(e.ray).applyMatrix4(S_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=new Z,_=new Z,v=new Z,y=new Z,M=this.isLineSegments?2:1,b=s.index,S=s.attributes.position;if(b!==null){const g=Math.max(0,d.start),L=Math.min(b.count,d.start+d.count);for(let E=g,R=L-1;E<R;E+=M){const I=b.getX(E),B=b.getX(E+1);if(m.fromBufferAttribute(S,I),_.fromBufferAttribute(S,B),zh.distanceSqToSegment(m,_,y,v)>p)continue;y.applyMatrix4(this.matrixWorld);const et=e.ray.origin.distanceTo(y);et<e.near||et>e.far||i.push({distance:et,point:v.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,d.start),L=Math.min(S.count,d.start+d.count);for(let E=g,R=L-1;E<R;E+=M){if(m.fromBufferAttribute(S,E),_.fromBufferAttribute(S,E+1),zh.distanceSqToSegment(m,_,y,v)>p)continue;y.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(y);B<e.near||B>e.far||i.push({distance:B,point:v.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}const M_=new Z,E_=new Z;class I1 extends B1{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)M_.fromBufferAttribute(i,l),E_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+M_.distanceTo(E_);e.setAttribute("lineDistance",new Pn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nd extends qa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const T_=new Ye,Yh=new $h,Dc=new Yo,Uc=new Z;class cv extends cn{constructor(e=new Bn,i=new nd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=u,e.ray.intersectsSphere(Dc)===!1)return;T_.copy(l).invert(),Yh.copy(e.ray).applyMatrix4(T_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=s.index,v=s.attributes.position;if(m!==null){const y=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let b=y,T=M;b<T;b++){const S=m.getX(b);Uc.fromBufferAttribute(v,S),b_(Uc,S,p,l,e,i,this)}}else{const y=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let b=y,T=M;b<T;b++)Uc.fromBufferAttribute(v,b),b_(Uc,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function b_(o,e,i,s,l,u,d){const h=Yh.distanceSqToPoint(o);if(h<i){const p=new Z;Yh.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,object:d})}}class F1 extends Wn{constructor(e,i,s,l,u,d,h,p,m){super(e,i,s,l,u,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zo extends Bn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],d=[];h(l),m(s),_(),this.setAttribute("position",new Pn(u,3)),this.setAttribute("normal",new Pn(u.slice(),3)),this.setAttribute("uv",new Pn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const E=new Z,R=new Z,I=new Z;for(let B=0;B<i.length;B+=3)M(i[B+0],E),M(i[B+1],R),M(i[B+2],I),p(E,R,I,L)}function p(L,E,R,I){const B=I+1,O=[];for(let et=0;et<=B;et++){O[et]=[];const C=L.clone().lerp(R,et/B),P=E.clone().lerp(R,et/B),ut=B-et;for(let ht=0;ht<=ut;ht++)ht===0&&et===B?O[et][ht]=C:O[et][ht]=C.clone().lerp(P,ht/ut)}for(let et=0;et<B;et++)for(let C=0;C<2*(B-et)-1;C++){const P=Math.floor(C/2);C%2===0?(y(O[et][P+1]),y(O[et+1][P]),y(O[et][P])):(y(O[et][P+1]),y(O[et+1][P+1]),y(O[et+1][P]))}}function m(L){const E=new Z;for(let R=0;R<u.length;R+=3)E.x=u[R+0],E.y=u[R+1],E.z=u[R+2],E.normalize().multiplyScalar(L),u[R+0]=E.x,u[R+1]=E.y,u[R+2]=E.z}function _(){const L=new Z;for(let E=0;E<u.length;E+=3){L.x=u[E+0],L.y=u[E+1],L.z=u[E+2];const R=S(L)/2/Math.PI+.5,I=g(L)/Math.PI+.5;d.push(R,1-I)}b(),v()}function v(){for(let L=0;L<d.length;L+=6){const E=d[L+0],R=d[L+2],I=d[L+4],B=Math.max(E,R,I),O=Math.min(E,R,I);B>.9&&O<.1&&(E<.2&&(d[L+0]+=1),R<.2&&(d[L+2]+=1),I<.2&&(d[L+4]+=1))}}function y(L){u.push(L.x,L.y,L.z)}function M(L,E){const R=L*3;E.x=e[R+0],E.y=e[R+1],E.z=e[R+2]}function b(){const L=new Z,E=new Z,R=new Z,I=new Z,B=new ae,O=new ae,et=new ae;for(let C=0,P=0;C<u.length;C+=9,P+=6){L.set(u[C+0],u[C+1],u[C+2]),E.set(u[C+3],u[C+4],u[C+5]),R.set(u[C+6],u[C+7],u[C+8]),B.set(d[P+0],d[P+1]),O.set(d[P+2],d[P+3]),et.set(d[P+4],d[P+5]),I.copy(L).add(E).add(R).divideScalar(3);const ut=S(I);T(B,P+0,L,ut),T(O,P+2,E,ut),T(et,P+4,R,ut)}}function T(L,E,R,I){I<0&&L.x===1&&(d[E]=L.x-1),R.x===0&&R.z===0&&(d[E]=I/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function g(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.vertices,e.indices,e.radius,e.details)}}class Nr extends Zo{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Nr(e.radius,e.detail)}}class id extends Zo{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new id(e.radius,e.detail)}}class ad extends Zo{constructor(e=1,i=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,l,e,i),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new ad(e.radius,e.detail)}}class sd extends Bn{constructor(e=1,i=.4,s=64,l=8,u=2,d=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:s,radialSegments:l,p:u,q:d},s=Math.floor(s),l=Math.floor(l);const h=[],p=[],m=[],_=[],v=new Z,y=new Z,M=new Z,b=new Z,T=new Z,S=new Z,g=new Z;for(let E=0;E<=s;++E){const R=E/s*u*Math.PI*2;L(R,u,d,e,M),L(R+.01,u,d,e,b),S.subVectors(b,M),g.addVectors(b,M),T.crossVectors(S,g),g.crossVectors(T,S),T.normalize(),g.normalize();for(let I=0;I<=l;++I){const B=I/l*Math.PI*2,O=-i*Math.cos(B),et=i*Math.sin(B);v.x=M.x+(O*g.x+et*T.x),v.y=M.y+(O*g.y+et*T.y),v.z=M.z+(O*g.z+et*T.z),p.push(v.x,v.y,v.z),y.subVectors(v,M).normalize(),m.push(y.x,y.y,y.z),_.push(E/s),_.push(I/l)}}for(let E=1;E<=s;E++)for(let R=1;R<=l;R++){const I=(l+1)*(E-1)+(R-1),B=(l+1)*E+(R-1),O=(l+1)*E+R,et=(l+1)*(E-1)+R;h.push(I,B,et),h.push(B,O,et)}this.setIndex(h),this.setAttribute("position",new Pn(p,3)),this.setAttribute("normal",new Pn(m,3)),this.setAttribute("uv",new Pn(_,2));function L(E,R,I,B,O){const et=Math.cos(E),C=Math.sin(E),P=I/R*E,ut=Math.cos(P);O.x=B*(2+ut)*.5*et,O.y=B*(2+ut)*C*.5,O.z=B*Math.sin(P)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class H1 extends qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F_,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G1 extends H1{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class uv extends cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const Ph=new Ye,A_=new Z,R_=new Z;class V1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new td,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;A_.setFromMatrixPosition(e.matrixWorld),i.position.copy(A_),R_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(R_),i.updateMatrixWorld(),Ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class j1 extends V1{constructor(){super(new $_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jo extends uv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new j1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fv extends uv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);function X1(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=o.current;if(!e)return;const i=new Ts,s=new gn(45,1,.1,100);s.position.z=5;const l=new Ya({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);function u(){const C=e.clientWidth,P=e.clientHeight;l.setSize(C,P),s.aspect=C/P,s.updateProjectionMatrix()}u();const d=new ResizeObserver(u);d.observe(e),i.add(new fv(16777215,.3));const h=new jo(16777215,1.2);h.position.set(3,4,5),i.add(h);const p=new jo(16731438,2);p.position.set(-4,2,-3),i.add(p);const m=new jo(8150271,1.5);m.position.set(4,-2,-3),i.add(m);const _={uTime:{value:0},uIntensity:{value:.8},uAccent:{value:new fe(16731438)},uAccent2:{value:new fe(8150271)}},v=`
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
    `,M=new Wa({uniforms:_,vertexShader:v,fragmentShader:y}),b=new Cn(new sd(.95,.32,220,32),M);i.add(b),b.position.x=window.innerWidth>=768?2:0;const T=()=>{b.position.x=window.innerWidth>=768?2:0};window.addEventListener("resize",T);let S=0,g=0,L=0,E=0;const R=C=>{g=(C.clientX/window.innerWidth-.5)*.6,S=(C.clientY/window.innerHeight-.5)*.6};window.addEventListener("mousemove",R);let I,B=!1;function O(){B&&(I=requestAnimationFrame(O),_.uTime.value+=.01,b.rotation.y+=.003,b.rotation.x+=.0015,L+=(S-L)*.05,E+=(g-E)*.05,s.position.x=E*.4,s.position.y=-L*.3,s.lookAt(0,0,0),l.render(i,s))}const et=new IntersectionObserver(([C])=>{B=C.isIntersecting,B&&O()},{threshold:0});return et.observe(e),()=>{B=!1,cancelAnimationFrame(I),d.disconnect(),et.disconnect(),window.removeEventListener("mousemove",R),window.removeEventListener("resize",T),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),D.jsx("div",{ref:o,style:{position:"absolute",inset:0,zIndex:0,overflow:"hidden"}})}function k1(){return D.jsxs("section",{className:"hero",children:[D.jsx(X1,{}),D.jsxs("div",{className:"hero-text",children:[D.jsxs("div",{className:"hero-meta",children:[D.jsxs("span",{children:[D.jsx("span",{className:"dash",children:"— "}),"Full-stack Developer"]}),D.jsxs("span",{children:[D.jsx("span",{className:"dash",children:"— "}),"Remote · India"]}),D.jsxs("span",{children:[D.jsx("span",{className:"dash",children:"— "}),"V1.26 · 001"]})]}),D.jsxs("h1",{className:"hero-title",children:[D.jsx("div",{className:"line",children:D.jsx("span",{children:"Building the"})}),D.jsx("div",{className:"line",children:D.jsxs("span",{children:[D.jsx("span",{className:"gradient-text",children:"quiet"})," web",D.jsx("span",{className:"arrow",children:"↗"})]})}),D.jsx("div",{className:"line",children:D.jsx("span",{children:"one craft at a time."})})]}),D.jsxs("div",{className:"hero-bottom",children:[D.jsx("p",{children:"Full-stack developer building fast, modern websites for founders. Currently building a construction-estimator platform and open for more work."}),D.jsxs("div",{children:[D.jsx("div",{className:"hero-bottom-label",children:"Current Focus"}),D.jsx("div",{className:"hero-bottom-value",children:"React · TypeScript · Node"})]}),D.jsxs("div",{children:[D.jsx("div",{className:"hero-bottom-label",children:"Availability"}),D.jsx("div",{className:"hero-bottom-value accent",children:"Mon–Fri · Remote"})]})]})]}),D.jsx("div",{className:"scroll-cue",children:"scroll"})]})}const W1=["Design","Develop","Ship","Iterate","Design","Develop","Ship","Iterate"];function q1(){return D.jsx("div",{className:"marquee",children:D.jsx("div",{className:"marquee-track",children:W1.map((o,e)=>D.jsxs("span",{children:[D.jsx("span",{className:`item${e%2===1?" alt":""}`,children:o}),D.jsx("span",{className:"item star",children:"✦"})]},e))})})}function Y1(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=o.current;if(!e)return;const i=new Ts,s=new gn(55,1,.1,100);s.position.set(0,2,7),s.lookAt(0,0,0);const l=new Ya({antialias:!1,alpha:!0});l.setPixelRatio(1),e.appendChild(l.domElement);function u(){const R=e.clientWidth,I=e.clientHeight;l.setSize(R,I),s.aspect=R/I,s.updateProjectionMatrix()}u();const d=new ResizeObserver(u);d.observe(e);const h=new Ur(28,18,32,20);h.rotateX(-Math.PI/2);const p=h.attributes.position.array.slice(),m=new Cn(h,new ka({color:16731438,wireframe:!0,transparent:!0,opacity:.07}));m.position.y=-1,i.add(m);const _=new Ur(28,18,20,14);_.rotateX(-Math.PI/2);const v=_.attributes.position.array.slice(),y=new Cn(_,new ka({color:8150271,wireframe:!0,transparent:!0,opacity:.05}));y.position.y=-.5,y.rotation.y=.3,i.add(y);let M=0,b,T=!1,S=0;const g=1e3/30;function L(R){if(!T||(b=requestAnimationFrame(L),R-S<g))return;S=R,M+=.014;const I=h.attributes.position.array;for(let O=0;O<I.length;O+=3){const et=p[O],C=p[O+2];I[O+1]=Math.sin(et*.4+M)*.9+Math.cos(C*.5+M*.7)*.5+Math.sin((et+C)*.25+M*1.2)*.35}h.attributes.position.needsUpdate=!0;const B=_.attributes.position.array;for(let O=0;O<B.length;O+=3){const et=v[O],C=v[O+2];B[O+1]=Math.sin(et*.3-M*.8)*.7+Math.cos(C*.4+M*.6)*.45}_.attributes.position.needsUpdate=!0,l.render(i,s)}const E=new IntersectionObserver(([R])=>{T=R.isIntersecting,T&&L(performance.now())},{threshold:0});return E.observe(e),()=>{T=!1,cancelAnimationFrame(b),d.disconnect(),E.disconnect(),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),D.jsx("div",{ref:o,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}})}const Z1=[{num:"3+",lbl:`Years building
web products`},{num:"5",lbl:`Projects shipped
in production`},{num:"∞",lbl:`Pixels moved
by 1px`}];function K1(){return D.jsxs("section",{id:"about",className:"section about-section",children:[D.jsx(Y1,{}),D.jsxs("div",{className:"section-label",style:{position:"relative",zIndex:1},children:[D.jsx("span",{className:"dot"}),D.jsx("span",{className:"num",children:"01 /"})," About"]}),D.jsxs("div",{className:"about-grid",style:{position:"relative",zIndex:1},children:[D.jsxs("div",{className:"about-left",children:[D.jsxs("div",{className:"about-heading",children:["A developer",D.jsx("br",{}),"with ",D.jsx("em",{children:"taste."})]}),D.jsxs("div",{className:"about-body",children:[D.jsx("p",{children:"I'm Naveen John Kennedy — a full-stack developer who designs and ships modern web apps end-to-end. From first wireframe to production deploy, I own the stack: interfaces people love to use, APIs that stay out of the way, and codebases your next hire will thank you for."}),D.jsx("p",{children:"I deliver marketing sites, dashboards, internal tools, and MVPs — with clean architecture, accessible interactions, and the kind of attention to detail that makes a product feel considered. If you want something that looks and performs a cut above — let's talk."})]})]}),D.jsx("div",{className:"about-photo-wrap",children:D.jsx("img",{src:"/my-pic.png",alt:"Naveen John Kennedy"})}),D.jsx("div",{className:"about-stats",children:Z1.map(o=>D.jsxs("div",{children:[D.jsx("div",{className:"stat-num",children:o.num}),D.jsx("div",{className:"stat-lbl",children:o.lbl})]},o.num))})]})]})}function Q1(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=o.current;if(!e)return;const i=new Ts,s=new gn(55,1,.1,100);s.position.set(0,4,8),s.lookAt(0,0,0);const l=new Ya({antialias:!1,alpha:!0});l.setPixelRatio(1),e.appendChild(l.domElement);function u(){const E=e.clientWidth,R=e.clientHeight;l.setSize(E,R),s.aspect=E/R,s.updateProjectionMatrix()}u();const d=new ResizeObserver(u);d.observe(e);const h=new Ur(20,20,16,16);h.rotateX(-Math.PI/2);const p=h.attributes.position.array,m=new Float32Array(p.length);for(let E=0;E<p.length;E++)m[E]=p[E];const _=new Cn(h,new ka({color:8150271,wireframe:!0,transparent:!0,opacity:.08}));_.position.y=-2,i.add(_);const v=Array.from({length:5},(E,R)=>{const I=new Cn(new Nr(.18+R*.06,1),new ka({color:R%2===0?16731438:8150271,wireframe:!0,transparent:!0,opacity:.18}));return I.position.set((R-2)*3.5,.5,(Math.random()-.5)*4),i.add(I),{m:I,phase:R*1.2}});let y=0,M,b=!1,T=0;const S=1e3/30;function g(E){if(!b||(M=requestAnimationFrame(g),E-T<S))return;T=E,y+=.016;const R=h.attributes.position.array;for(let I=0;I<R.length;I+=3){const B=m[I],O=m[I+2];R[I+1]=Math.sin(B*.5+y)*.4+Math.cos(O*.5+y*.7)*.3}h.attributes.position.needsUpdate=!0,v.forEach(({m:I,phase:B})=>{I.rotation.x+=.012,I.rotation.y+=.016,I.position.y=.5+Math.sin(y+B)*.4}),l.render(i,s)}const L=new IntersectionObserver(([E])=>{b=E.isIntersecting,b&&g(performance.now())},{threshold:0});return L.observe(e),()=>{b=!1,cancelAnimationFrame(M),d.disconnect(),L.disconnect(),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),D.jsx("div",{ref:o,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}})}const J1=[{idx:"(s-01)",title:`Marketing sites
that convert.`,desc:"High-intent landing pages and full marketing sites for early-stage startups. Designed to load in under a second and actually move the needle.",tags:["React","TypeScript","Tailwind","SEO-ready"]},{idx:"(s-02)",title:`Web apps
& dashboards.`,desc:"Full-stack SaaS products, admin panels, internal tools. Auth, roles, realtime — the whole thing. From design to a shipped product on your domain.",tags:["React","Node","Postgres","MongoDB"]},{idx:"(s-03)",title:`Interactive
experiences.`,desc:"Where most devs stop, I start. 3D elements, scroll-driven stories, custom cursors, micro-interactions — the details that make your site feel alive.",tags:["React","WebGL","Motion","Shaders"]},{idx:"(s-04)",title:`MVPs, APIs
& backends.`,desc:"Need to ship an MVP fast, or build a solid backend under an existing product? I design the data model, build the API, and wire it all the way through.",tags:["Express","REST","PostgreSQL","MongoDB"]}];function $1(){return D.jsxs("section",{id:"services",className:"section",style:{overflow:"hidden"},children:[D.jsx(Q1,{}),D.jsxs("div",{className:"section-label",style:{position:"relative",zIndex:1},children:[D.jsx("span",{className:"dot"}),D.jsx("span",{className:"num",children:"02 /"})," What I do"]}),D.jsx("div",{className:"services-grid",style:{position:"relative",zIndex:1},children:J1.map(o=>D.jsxs("div",{className:"service","data-cursor":"hover",children:[D.jsx("div",{className:"service-idx",children:o.idx}),D.jsx("h3",{children:o.title}),D.jsx("p",{children:o.desc}),D.jsx("div",{className:"service-tags",children:o.tags.map(e=>D.jsx("span",{children:e},e))}),D.jsx("svg",{className:"arrow-corner",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:D.jsx("path",{d:"M7 17L17 7M17 7H9M17 7V15"})})]},o.idx))})]})}function tA(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=o.current;if(!e)return;const i=new Ts,s=new gn(40,1,.1,100);s.position.z=9;const l=new Ya({antialias:!1,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(l.domElement);function u(){const K=e.clientWidth,F=e.clientHeight;l.setSize(K,F),s.aspect=K/F,s.updateProjectionMatrix()}u();const d=new ResizeObserver(u);d.observe(e),i.add(new fv(16777215,.5));const h=new jo(16777215,1);h.position.set(2,3,4),i.add(h);const p=new jo(8150271,1);p.position.set(-3,-2,3),i.add(p);const m=new Cn(new Nr(1.2,2),new G1({color:657931,metalness:.4,roughness:.25,clearcoat:1,clearcoatRoughness:.1,reflectivity:.8})),_=new Cn(new Nr(1.22,1),new ka({color:8150271,wireframe:!0,transparent:!0,opacity:.35})),v=["React","TypeScript","Node.js","Express","PostgreSQL","MongoDB","Tailwind","Claude","Claude Design"];function y(K,F){const q=document.createElement("canvas");q.width=256,q.height=96;const W=q.getContext("2d"),ft=18,ot=6,N=6,X=244,G=84;W.fillStyle="#111113",W.beginPath(),W.moveTo(ot+ft,N),W.arcTo(ot+X,N,ot+X,N+G,ft),W.arcTo(ot+X,N+G,ot,N+G,ft),W.arcTo(ot,N+G,ot,N,ft),W.arcTo(ot,N,ot+X,N,ft),W.closePath(),W.fill(),W.strokeStyle=F,W.lineWidth=2,W.stroke(),W.fillStyle="#f5f5f0",W.textAlign="center",W.textBaseline="middle";let Q=36;for(W.font=`600 ${Q}px Geist, sans-serif`;W.measureText(K).width>200&&Q>20;)Q-=2,W.font=`600 ${Q}px Geist, sans-serif`;W.fillText(K,128,48),W.fillStyle=F,W.beginPath(),W.arc(24,24,5,0,Math.PI*2),W.fill();const gt=new F1(q);return gt.anisotropy=4,gt}const M=2.4,b=1.1,T=.42,S=[];v.forEach((K,F)=>{const q=new rv({map:y(K,F%2===0?"#ff4d2e":"#7c5cff"),transparent:!0}),W=new P1(q);W.scale.set(b,T,1);const ft=2/v.length,ot=F*ft-1+ft/2,N=Math.sqrt(1-ot*ot),X=F*Math.PI*(3-Math.sqrt(5));W.position.set(Math.cos(X)*N*M,ot*M,Math.sin(X)*N*M),W.userData.phase=Math.random()*Math.PI*2,S.push(W)});const g=new Go;i.add(g),S.forEach(K=>g.add(K)),g.add(m),g.add(_);let L=!1,E=0,R=0,I=0,B=0;const O=K=>{L=!0,E=K.clientX,R=K.clientY},et=()=>{L=!1},C=K=>{L&&(I+=(K.clientX-E)*.005,B+=(K.clientY-R)*.005,E=K.clientX,R=K.clientY)};e.addEventListener("pointerdown",O),window.addEventListener("pointerup",et),window.addEventListener("pointermove",C);let P=0,ut,ht=!1;function Mt(){ht&&(ut=requestAnimationFrame(Mt),P+=.01,L||(I+=.003),g.rotation.y=I,g.rotation.x=Math.max(-.6,Math.min(.6,B)),S.forEach(K=>{const F=1+Math.sin(P+K.userData.phase)*.06;K.scale.set(b*F,T*F,1)}),l.render(i,s))}const k=new IntersectionObserver(([K])=>{ht=K.isIntersecting,ht&&Mt()},{threshold:0});return k.observe(e),()=>{ht=!1,cancelAnimationFrame(ut),d.disconnect(),k.disconnect(),window.removeEventListener("pointerup",et),window.removeEventListener("pointermove",C),e.removeEventListener("pointerdown",O),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),D.jsx("div",{ref:o,style:{width:"100%",height:"100%",position:"absolute",inset:0}})}const eA=[{name:"React",cat:"UI"},{name:"TypeScript",cat:"language"},{name:"Tailwind",cat:"styles"},{name:"Node.js",cat:"runtime"},{name:"Express",cat:"backend"},{name:"PostgreSQL",cat:"database"},{name:"MongoDB",cat:"database"},{name:"REST APIs",cat:"integration"},{name:"Claude",cat:"AI pair"},{name:"Claude Design",cat:"AI design"},{name:"Git",cat:"version"},{name:"WebSockets",cat:"realtime"}];function nA(){return D.jsxs("section",{id:"stack",className:"section",children:[D.jsxs("div",{className:"section-label",children:[D.jsx("span",{className:"dot"}),D.jsx("span",{className:"num",children:"03 /"})," Tech stack"]}),D.jsxs("div",{className:"stack-grid",children:[D.jsx("div",{className:"stack-canvas-wrap",children:D.jsx(tA,{})}),D.jsxs("div",{className:"stack-copy",children:[D.jsxs("h2",{children:["Modern tools,",D.jsx("br",{}),"handpicked.",D.jsx("em",{children:"*"})]}),D.jsx("p",{children:"I stay picky about what I use so you don't have to. Every tool here has earned its place through a dozen shipped projects. Drag the sphere."}),D.jsx("div",{className:"stack-list",children:eA.map((o,e)=>D.jsxs("div",{className:`stack-list-row ${e%2===0?"odd":"even"}`,children:[D.jsx("span",{children:o.name}),D.jsx("span",{className:"cat",children:o.cat})]},o.name))})]})]})]})}function iA(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=o.current;if(!e)return;const i=new Ts,s=new gn(55,1,.1,100);s.position.z=9;const l=new Ya({antialias:!1,alpha:!0});l.setPixelRatio(1),e.appendChild(l.domElement);function u(){const S=e.clientWidth,g=e.clientHeight;l.setSize(S,g),s.aspect=S/g,s.updateProjectionMatrix()}u();const d=new ResizeObserver(u);d.observe(e);const h=[new id(1,0),new Nr(1,0),new ad(1,0),new zr(1.4,1.4,1.4)],p=Array.from({length:10},(S,g)=>{const L=.15+Math.random()*.3,E=h[g%h.length].clone();E.scale(L,L,L);const R=new ka({color:g%3!==0?8150271:16731438,wireframe:!0,transparent:!0,opacity:.12+Math.random()*.1}),I=new Cn(E,R);return I.position.set((Math.random()-.5)*22,(Math.random()-.5)*14,(Math.random()-.5)*4),I.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),i.add(I),{mesh:I,rx:(Math.random()-.5)*.008,ry:(Math.random()-.5)*.01,phase:Math.random()*Math.PI*2,baseY:I.position.y}});let m=0,_,v=!1,y=0;const M=1e3/30;function b(S){v&&(_=requestAnimationFrame(b),!(S-y<M)&&(y=S,m+=.012,p.forEach(g=>{g.mesh.rotation.x+=g.rx*2,g.mesh.rotation.y+=g.ry*2,g.mesh.position.y=g.baseY+Math.sin(m+g.phase)*.25}),l.render(i,s)))}const T=new IntersectionObserver(([S])=>{v=S.isIntersecting,v&&b(performance.now())},{threshold:0});return T.observe(e),()=>{v=!1,cancelAnimationFrame(_),d.disconnect(),T.disconnect(),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),D.jsx("div",{ref:o,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}})}const aA=[{size:"feat",thumb:"aurora",metaLeft:"01 · Current client",status:"● In Progress · 2026",statusColor:"#ffb800",statusBorder:"rgba(255,184,0,0.4)",title:"EmpireConstruction",sub:"Website + construction estimator tool · React · Node · Postgres",svg:D.jsxs("svg",{viewBox:"0 0 220 140",fill:"none",children:[D.jsx("rect",{x:"10",y:"10",width:"200",height:"120",rx:"6",stroke:"white",strokeOpacity:"0.5",strokeWidth:"1"}),D.jsx("rect",{x:"20",y:"22",width:"70",height:"10",rx:"2",fill:"white",fillOpacity:"0.85"}),D.jsx("rect",{x:"20",y:"38",width:"110",height:"4",rx:"2",fill:"white",fillOpacity:"0.35"}),D.jsx("rect",{x:"20",y:"48",width:"80",height:"4",rx:"2",fill:"white",fillOpacity:"0.35"}),D.jsx("rect",{x:"20",y:"68",width:"180",height:"1",fill:"white",fillOpacity:"0.3"}),D.jsx("rect",{x:"20",y:"78",width:"44",height:"14",rx:"2",fill:"white",fillOpacity:"0.15"}),D.jsx("rect",{x:"66",y:"78",width:"44",height:"14",rx:"2",fill:"white",fillOpacity:"0.15"}),D.jsx("rect",{x:"112",y:"78",width:"44",height:"14",rx:"2",fill:"#ff4d2e"}),D.jsx("text",{x:"134",y:"89",fill:"white",fontFamily:"monospace",fontSize:"7",textAnchor:"middle",fontWeight:"600",children:"ESTIMATE"}),D.jsx("rect",{x:"20",y:"100",width:"180",height:"22",rx:"3",fill:"white",fillOpacity:"0.08"}),D.jsx("text",{x:"28",y:"114",fill:"white",fontFamily:"monospace",fontSize:"7",fillOpacity:"0.7",children:"PROJECT TOTAL"}),D.jsx("text",{x:"192",y:"114",fill:"white",fontFamily:"monospace",fontSize:"9",textAnchor:"end",fontWeight:"700",children:"$248,500"})]})},{size:"small",thumb:"warm",metaLeft:"02 · Zeb",status:"2025–26",title:"Lynxis",sub:"Shipping & Rail Terminal · 10K users",svg:D.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[D.jsx("rect",{x:"18",y:"24",width:"64",height:"52",rx:"3",stroke:"white",strokeOpacity:"0.7",strokeWidth:"1"}),D.jsx("rect",{x:"24",y:"30",width:"52",height:"12",rx:"1",fill:"white",fillOpacity:"0.15"}),D.jsx("rect",{x:"28",y:"34",width:"20",height:"3",rx:"1.5",fill:"white",fillOpacity:"0.7"}),D.jsx("rect",{x:"24",y:"46",width:"24",height:"26",rx:"1",fill:"white",fillOpacity:"0.1"}),D.jsx("rect",{x:"52",y:"46",width:"24",height:"12",rx:"1",fill:"white",fillOpacity:"0.1"}),D.jsx("rect",{x:"52",y:"60",width:"24",height:"12",rx:"1",fill:"white"})]})},{size:"wide",thumb:"cool",metaLeft:"03 · AVASOFT",status:"2024",title:"Pulse",sub:"Application assessment tool · React · PDF export",svg:D.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[D.jsx("rect",{x:"20",y:"20",width:"60",height:"60",rx:"4",stroke:"white",strokeOpacity:"0.6",strokeWidth:"1"}),D.jsx("rect",{x:"26",y:"26",width:"30",height:"4",rx:"2",fill:"white",fillOpacity:"0.8"}),D.jsx("rect",{x:"26",y:"34",width:"48",height:"22",rx:"2",fill:"#7c5cff",fillOpacity:"0.25",stroke:"#7c5cff",strokeWidth:"0.8"}),D.jsx("path",{d:"M30 48 L38 42 L46 50 L54 40 L62 46 L70 38",stroke:"#7c5cff",strokeWidth:"1.2",fill:"none"}),D.jsx("rect",{x:"26",y:"62",width:"14",height:"12",rx:"1",fill:"white",fillOpacity:"0.15"}),D.jsx("rect",{x:"43",y:"62",width:"14",height:"12",rx:"1",fill:"white",fillOpacity:"0.15"}),D.jsx("rect",{x:"60",y:"62",width:"14",height:"12",rx:"1",fill:"white",fillOpacity:"0.15"})]})},{size:"wide",thumb:"iso",metaLeft:"04 · AVASOFT",status:"2024",title:"RACPAD",sub:"Rent-A-Center · React refactor · 200K→50K LOC",svg:D.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[D.jsx("text",{x:"50",y:"42",fill:"white",fillOpacity:"0.9",fontFamily:"monospace",fontSize:"11",textAnchor:"middle",fontWeight:"700",children:"1M USERS"}),D.jsx("text",{x:"50",y:"56",fill:"#ff4d2e",fontFamily:"monospace",fontSize:"7",textAnchor:"middle",children:"2,000 STORES"}),D.jsx("rect",{x:"20",y:"64",width:"60",height:"2",rx:"1",fill:"white",fillOpacity:"0.2"}),D.jsx("rect",{x:"20",y:"64",width:"45",height:"2",rx:"1",fill:"#ff4d2e"}),D.jsx("text",{x:"50",y:"76",fill:"white",fillOpacity:"0.5",fontFamily:"monospace",fontSize:"6",textAnchor:"middle",children:"200K → 50K LOC"})]})},{size:"small",thumb:"mono",metaLeft:"05 · AVASOFT",status:"2023",title:"Hive",sub:"Employee assessment · React + Node + Lambda",svg:D.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[D.jsx("circle",{cx:"50",cy:"40",r:"12",stroke:"white",strokeOpacity:"0.7",strokeWidth:"1.2"}),D.jsx("circle",{cx:"50",cy:"40",r:"4",fill:"white",fillOpacity:"0.9"}),D.jsx("rect",{x:"30",y:"62",width:"40",height:"2",rx:"1",fill:"white",fillOpacity:"0.4"}),D.jsx("rect",{x:"30",y:"68",width:"28",height:"2",rx:"1",fill:"white",fillOpacity:"0.4"}),D.jsx("rect",{x:"30",y:"74",width:"34",height:"2",rx:"1",fill:"white",fillOpacity:"0.4"})]})}];function sA(){return D.jsxs("section",{id:"work",className:"section",style:{overflow:"hidden"},children:[D.jsx(iA,{}),D.jsxs("div",{className:"section-label",style:{position:"relative",zIndex:1},children:[D.jsx("span",{className:"dot"}),D.jsx("span",{className:"num",children:"04 /"})," Selected work"]}),D.jsxs("div",{className:"projects-head",children:[D.jsxs("h2",{children:["Things",D.jsx("br",{}),"I've ",D.jsx("em",{children:"shipped."})]}),D.jsx("div",{className:"projects-count",children:"5 projects · 2023 — 2026"})]}),D.jsx("p",{style:{fontFamily:"var(--mono)",fontSize:12,color:"var(--fg-dim)",maxWidth:640,marginBottom:48,lineHeight:1.6},children:"A mix of current freelance work and select projects from my time at Zeb and AVASOFT."}),D.jsx("div",{className:"projects-grid",style:{position:"relative",zIndex:1},children:aA.map((o,e)=>D.jsxs("div",{className:`project ${o.size}`,"data-cursor":"hover",onMouseLeave:i=>{i.currentTarget.style.transform=""},onMouseMove:i=>{const s=i.currentTarget,l=s.getBoundingClientRect(),u=(i.clientX-l.left)/l.width-.5,d=(i.clientY-l.top)/l.height-.5;s.style.transform=`perspective(800px) rotateX(${-d*4}deg) rotateY(${u*4}deg)`},children:[D.jsx("div",{className:`project-thumb thumb-${o.thumb}`,children:D.jsx("div",{className:"project-thumb-icon",children:o.svg})}),D.jsxs("div",{className:"project-overlay",children:[D.jsxs("div",{className:"project-meta-top",children:[D.jsx("span",{children:o.metaLeft}),D.jsx("span",{className:"status-pill",style:o.statusColor?{color:o.statusColor,borderColor:o.statusBorder}:void 0,children:o.status})]}),D.jsxs("div",{className:"project-title-block",children:[D.jsx("h3",{children:o.title}),D.jsx("div",{className:"project-sub",children:o.sub})]})]})]},e))})]})}function rA(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=o.current;if(!e)return;const i=new Ts,s=new gn(60,1,.1,100);s.position.z=8;const l=new Ya({antialias:!1,alpha:!0});l.setPixelRatio(1),e.appendChild(l.domElement);function u(){const R=e.clientWidth,I=e.clientHeight;l.setSize(R,I),s.aspect=R/I,s.updateProjectionMatrix()}u();const d=new ResizeObserver(u);d.observe(e);const h=80,p=new Float32Array(h*3),m=[];for(let R=0;R<h;R++)p[R*3]=(Math.random()-.5)*20,p[R*3+1]=(Math.random()-.5)*12,p[R*3+2]=(Math.random()-.5)*6,m.push({x:(Math.random()-.5)*.004,y:(Math.random()-.5)*.003});const _=new Bn;_.setAttribute("position",new qn(p,3));const v=new nd({color:16731438,size:.05,transparent:!0,opacity:.35});i.add(new cv(_,v));const y=[];for(let R=0;R<h;R++)for(let I=R+1;I<h;I++){const B=p[R*3]-p[I*3],O=p[R*3+1]-p[I*3+1];Math.sqrt(B*B+O*O)<4&&y.push(p[R*3],p[R*3+1],p[R*3+2],p[I*3],p[I*3+1],p[I*3+2])}const M=new Bn;M.setAttribute("position",new qn(new Float32Array(y),3)),i.add(new I1(M,new lv({color:8150271,transparent:!0,opacity:.06})));let b,T=!1,S=0;const g=1e3/30;function L(R){if(!T||(b=requestAnimationFrame(L),R-S<g))return;S=R;const I=_.attributes.position.array;for(let B=0;B<h;B++)I[B*3]+=m[B].x,I[B*3+1]+=m[B].y,I[B*3]>10&&(I[B*3]=-10),I[B*3]<-10&&(I[B*3]=10),I[B*3+1]>6&&(I[B*3+1]=-6),I[B*3+1]<-6&&(I[B*3+1]=6);_.attributes.position.needsUpdate=!0,l.render(i,s)}const E=new IntersectionObserver(([R])=>{T=R.isIntersecting,T&&L(performance.now())},{threshold:0});return E.observe(e),()=>{T=!1,cancelAnimationFrame(b),d.disconnect(),E.disconnect(),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),D.jsx("div",{ref:o,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}})}const oA=[{period:`Sep 2025 —
Feb 2026`,years:"6 mos",role:"Senior Software Engineer",company:"Zeb",type:"Full-time",location:"Chennai, India · On-site",desc:"Led a frontend team of 5, focused on a client-facing logistics platform. Owned the frontend architecture and coding standards across React, JavaScript, and TypeScript applications — significantly improving maintainability and scalability.",achievements:["Ran regular code reviews and mentored developers on best practices, lifting overall engineering standards.","Led advanced UI features including dashboards and live-update modules, improving UX and operational efficiency.","Coordinated full-stack development efforts, ensuring seamless integration with backend services and REST APIs."]},{period:`Feb 2023 —
Aug 2025`,years:"2 yrs 7 mos",role:"Software Engineer",company:"AVASOFT",type:"Full-time",location:"Chennai, India",desc:"Built and maintained complex web applications with React, TypeScript, HTML, and CSS. Developed REST APIs using Node.js and Express.js for business workflows and reporting, wrote Jest unit tests for reliability, and drove Agile/Scrum delivery with CI/CD.",achievements:["Shipped multiple enterprise applications, improving functionality and user experience across product lines.","Drove performance work via code refactoring and lazy loading — measurably faster, more maintainable apps.","Resolved stubborn UI/API issues, collaborating with DevOps for smooth production releases."]}];function lA(){return D.jsxs("section",{id:"experience",className:"section",style:{overflow:"hidden"},children:[D.jsx(rA,{}),D.jsxs("div",{className:"section-label",style:{position:"relative",zIndex:1},children:[D.jsx("span",{className:"dot"}),D.jsx("span",{className:"num",children:"05 /"})," Experience"]}),D.jsxs("div",{className:"experience-grid",style:{position:"relative",zIndex:1},children:[D.jsxs("div",{className:"experience-heading",children:["Where I've",D.jsx("br",{}),D.jsx("em",{children:"built."})]}),D.jsx("div",{className:"exp-list",children:oA.map((o,e)=>D.jsxs("div",{className:"exp-item",children:[D.jsxs("div",{className:"exp-period",children:[o.period,D.jsx("span",{className:"exp-period-years",children:o.years})]}),D.jsxs("div",{children:[D.jsx("div",{className:"exp-role",children:o.role}),D.jsxs("div",{className:"exp-company",children:[D.jsx("span",{children:o.company}),D.jsx("span",{className:"sep",children:"·"}),D.jsx("span",{children:o.type}),D.jsx("span",{className:"sep",children:"·"}),D.jsx("span",{className:"loc",children:o.location})]}),D.jsx("p",{className:"exp-desc",children:o.desc}),D.jsx("ul",{className:"exp-achievements",children:o.achievements.map((i,s)=>D.jsx("li",{children:i},s))})]})]},e))})]})]})}const cA=[{k:"Typical engagement",v:"2–10 weeks"},{k:"Working hours",v:"Mon–Fri · IST"},{k:"Response time",v:"< 24 hours",green:!0},{k:"Working globally",v:"Yes"}];function uA(){return D.jsx("section",{className:"section",children:D.jsxs("div",{className:"callout-grid",children:[D.jsxs("div",{children:[D.jsxs("blockquote",{className:"callout-quote",children:[D.jsx("span",{className:"callout-quote-mark",children:'"'}),"I build things I'd want to ",D.jsx("em",{children:"use"})," — fast, clear, and quietly considered. No bloat, no trend-chasing, no surprises in the codebase."]}),D.jsxs("div",{className:"callout-attr",children:[D.jsx("div",{className:"callout-avatar"}),D.jsxs("div",{children:[D.jsx("div",{children:"Naveen John Kennedy · Full-stack Developer"}),D.jsx("div",{style:{color:"var(--fg-faint)",marginTop:2},children:"Freelance, 2026"})]})]})]}),D.jsx("div",{className:"callout-side",children:cA.map(o=>D.jsxs("div",{className:"callout-kv",children:[D.jsx("span",{className:"k",children:o.k}),D.jsx("span",{style:o.green?{color:"#00ff88"}:void 0,children:o.v})]},o.k))})]})})}function fA(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=o.current;if(!e)return;const i=new Ts,s=new gn(50,1,.1,100);s.position.z=5;const l=new Ya({antialias:!1,alpha:!0});l.setPixelRatio(1),e.appendChild(l.domElement);function u(){const I=e.clientWidth,B=e.clientHeight;l.setSize(I,B),s.aspect=I/B,s.updateProjectionMatrix()}u();const d=new ResizeObserver(u);d.observe(e);const h=300,p=new Bn,m=new Float32Array(h*3);for(let I=0;I<h;I++)m[I*3]=(Math.random()-.5)*14,m[I*3+1]=(Math.random()-.5)*8,m[I*3+2]=(Math.random()-.5)*10;p.setAttribute("position",new qn(m,3));const _=new nd({color:16731438,size:.02,transparent:!0,opacity:.7}),v=new cv(p,_);i.add(v);let y=0,M=0;const b=I=>{y=(I.clientX/window.innerWidth-.5)*.5,M=(I.clientY/window.innerHeight-.5)*.5};window.addEventListener("mousemove",b);let T,S=!1,g=0;const L=1e3/30;function E(I){S&&(T=requestAnimationFrame(E),!(I-g<L)&&(g=I,v.rotation.y+=.0016,v.rotation.x=M*.2,s.position.x+=(y-s.position.x)*.03,s.lookAt(0,0,0),l.render(i,s)))}const R=new IntersectionObserver(([I])=>{S=I.isIntersecting,S&&E(performance.now())},{threshold:0});return R.observe(e),()=>{S=!1,cancelAnimationFrame(T),d.disconnect(),R.disconnect(),window.removeEventListener("mousemove",b),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),D.jsx("div",{ref:o,style:{position:"absolute",inset:0,zIndex:0,opacity:.5}})}const hA=["< $2K","$2K — $5K","$5K — $10K","$10K+","Not sure yet"],dA=["Marketing site / landing page","Web app / dashboard","E-commerce","Interactive / 3D experience","MVP for a startup","Backend / API","Maintenance & support","Something else"];function pA(){const[o,e]=Xe.useState(""),[i,s]=Xe.useState(""),[l,u]=Xe.useState(""),d=h=>{h.preventDefault();const p=new FormData(h.currentTarget),m=(p.get("name")||"").trim(),_=(p.get("email")||"").trim(),v=(p.get("message")||"").trim();if(!m||!_||!v){u("error"),s("Please fill in name, email and a message.");return}const y=encodeURIComponent(`New project inquiry — ${m}`),M=encodeURIComponent(`Name: ${m}
Email: ${_}
Company: ${p.get("company")||"—"}
Project type: ${p.get("project_type")||"—"}
Budget: ${o||"—"}

${v}`);window.location.href=`mailto:naveenjohnken@gmail.com?subject=${y}&body=${M}`,u("success"),s("Opening your mail client… if nothing happens, email naveenjohnken@gmail.com directly.")};return D.jsxs("section",{id:"contact",className:"contact-section",children:[D.jsx(fA,{}),D.jsxs("div",{className:"contact-inner",children:[D.jsxs("div",{className:"section-label",children:[D.jsx("span",{className:"dot"}),D.jsx("span",{className:"num",children:"06 /"})," Let's build"]}),D.jsxs("h2",{className:"contact-heading",children:["Got an ",D.jsx("em",{children:"idea?"}),D.jsx("br",{}),"Let's ship it."]}),D.jsxs("div",{className:"contact-layout",children:[D.jsxs("form",{className:"contact-form",onSubmit:d,noValidate:!0,children:[D.jsxs("div",{className:"field",children:[D.jsxs("label",{children:["Your name ",D.jsx("span",{className:"req",children:"*"})]}),D.jsx("input",{type:"text",name:"name",placeholder:"Jane Doe",required:!0,"data-cursor":"hover"})]}),D.jsxs("div",{className:"field",children:[D.jsxs("label",{children:["Email ",D.jsx("span",{className:"req",children:"*"})]}),D.jsx("input",{type:"email",name:"email",placeholder:"you@company.com",required:!0,"data-cursor":"hover"})]}),D.jsxs("div",{className:"field",children:[D.jsx("label",{children:"Company / Project"}),D.jsx("input",{type:"text",name:"company",placeholder:"Optional","data-cursor":"hover"})]}),D.jsxs("div",{className:"field",children:[D.jsx("label",{children:"Project type"}),D.jsx("select",{name:"project_type","data-cursor":"hover",children:dA.map(h=>D.jsx("option",{children:h},h))})]}),D.jsxs("div",{className:"field",children:[D.jsx("label",{children:"Estimated budget (USD)"}),D.jsx("div",{className:"budget-pills",children:hA.map(h=>D.jsx("button",{type:"button","data-cursor":"hover",className:`budget-pill${o===h?" active":""}`,onClick:()=>e(h),children:h},h))})]}),D.jsxs("div",{className:"field",children:[D.jsxs("label",{children:["Tell me about your project ",D.jsx("span",{className:"req",children:"*"})]}),D.jsx("textarea",{name:"message",placeholder:"What are you building, what's the timeline, what does success look like?",required:!0,"data-cursor":"hover"})]}),D.jsxs("button",{type:"submit",className:"submit-btn","data-cursor":"hover",children:[D.jsx("span",{style:{width:8,height:8,background:"var(--bg)",borderRadius:"50%",display:"inline-block",flexShrink:0}}),"Send message",D.jsx("span",{children:"→"})]}),i&&D.jsx("div",{className:`form-status ${l}`,children:i})]}),D.jsxs("div",{children:[D.jsxs("div",{className:"contact-info-grid",children:[D.jsxs("div",{className:"contact-info-col",children:[D.jsx("div",{className:"label",children:"Email"}),D.jsx("a",{href:"mailto:naveenjohnken@gmail.com","data-cursor":"hover",children:"naveenjohnken@gmail.com"})]}),D.jsxs("div",{className:"contact-info-col",children:[D.jsx("div",{className:"label",children:"Socials"}),D.jsx("a",{href:"https://www.linkedin.com/in/naveen-j-322b86210/",target:"_blank",rel:"noopener","data-cursor":"hover",children:"LinkedIn ↗"})]}),D.jsxs("div",{className:"contact-info-col",children:[D.jsx("div",{className:"label",children:"Based in"}),D.jsx("p",{children:"India · Remote-first"}),D.jsx("p",{style:{color:"var(--fg-dim)"},children:"Working globally"})]}),D.jsxs("div",{className:"contact-info-col",children:[D.jsx("div",{className:"label",children:"Availability"}),D.jsx("p",{style:{color:"var(--accent)"},children:"Mon–Fri · IST"}),D.jsx("p",{style:{color:"var(--fg-dim)"},children:"Taking new work"})]})]}),D.jsxs("div",{className:"contact-next",children:[D.jsx("div",{className:"next-label",children:"What happens next"}),D.jsx("p",{children:"— I reply within 24 hours (weekdays)."}),D.jsx("p",{children:"— We jump on a 20-minute intro call to scope the project."}),D.jsx("p",{children:"— I send a quote + timeline within 3 business days."})]})]})]})]})]})}function mA(){const[o,e]=Xe.useState("—");return Xe.useEffect(()=>{function i(){const l=new Date,u=String(l.getHours()).padStart(2,"0"),d=String(l.getMinutes()).padStart(2,"0");e(`${u}:${d} IST · Available`)}i();const s=setInterval(i,3e4);return()=>clearInterval(s)},[]),D.jsxs("footer",{className:"footer",children:[D.jsx("div",{children:"© 2026 Naveen John Kennedy · Built with care"}),D.jsxs("div",{className:"footer-time",children:[D.jsx("span",{style:{width:6,height:6,background:"#00ff88",borderRadius:"50%",boxShadow:"0 0 6px #00ff88",display:"inline-block"}}),o]}),D.jsx("a",{href:"#",children:"↑ Back to top"})]})}function gA(){return D.jsxs(D.Fragment,{children:[D.jsx(Ry,{}),D.jsx(wy,{}),D.jsx(k1,{}),D.jsx(q1,{}),D.jsx(K1,{}),D.jsx($1,{}),D.jsx(nA,{}),D.jsx(sA,{}),D.jsx(lA,{}),D.jsx(uA,{}),D.jsx(pA,{}),D.jsx(mA,{})]})}Ay.createRoot(document.getElementById("root")).render(D.jsx(Xe.StrictMode,{children:D.jsx(gA,{})}));

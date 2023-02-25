(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function _h(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function yh(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ze(s)?mT(s):yh(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ze(t))return t;if(Ae(t))return t}}const fT=/;(?![^(]*\))/g,pT=/:([^]+)/,gT=/\/\*.*?\*\//gs;function mT(t){const e={};return t.replace(gT,"").split(fT).forEach(n=>{if(n){const s=n.split(pT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function vh(t){let e="";if(Ze(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=vh(t[n]);s&&(e+=s+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _T="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yT=_h(_T);function Im(t){return!!t||t===""}function vT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=uc(t[s],e[s]);return n}function uc(t,e){if(t===e)return!0;let n=Cf(t),s=Cf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Mr(t),s=Mr(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?vT(t,e):!1;if(n=Ae(t),s=Ae(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!uc(t[o],e[o]))return!1}}return String(t)===String(e)}function wT(t,e){return t.findIndex(n=>uc(n,e))}const Ye=t=>Ze(t)?t:t==null?"":z(t)||Ae(t)&&(t.toString===Sm||!te(t.toString))?JSON.stringify(t,bm,2):String(t),bm=(t,e)=>e&&e.__v_isRef?bm(t,e.value):gi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:dc(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!z(e)&&!Rm(e)?String(e):e,Ne={},pi=[],nn=()=>{},ET=()=>!1,TT=/^on[^a-z]/,hc=t=>TT.test(t),wh=t=>t.startsWith("onUpdate:"),Et=Object.assign,Eh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},IT=Object.prototype.hasOwnProperty,de=(t,e)=>IT.call(t,e),z=Array.isArray,gi=t=>co(t)==="[object Map]",dc=t=>co(t)==="[object Set]",Cf=t=>co(t)==="[object Date]",te=t=>typeof t=="function",Ze=t=>typeof t=="string",Mr=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Cm=t=>Ae(t)&&te(t.then)&&te(t.catch),Sm=Object.prototype.toString,co=t=>Sm.call(t),bT=t=>co(t).slice(8,-1),Rm=t=>co(t)==="[object Object]",Th=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ra=_h(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},CT=/-(\w)/g,En=fc(t=>t.replace(CT,(e,n)=>n?n.toUpperCase():"")),ST=/\B([A-Z])/g,ji=fc(t=>t.replace(ST,"-$1").toLowerCase()),pc=fc(t=>t.charAt(0).toUpperCase()+t.slice(1)),_l=fc(t=>t?`on${pc(t)}`:""),Lr=(t,e)=>!Object.is(t,e),oa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},va=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sf;const RT=()=>Sf||(Sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class AT{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function kT(t,e=Pt){e&&e.active&&e.effects.push(t)}function Am(){return Pt}function NT(t){Pt&&Pt.cleanups.push(t)}const Ih=t=>{const e=new Set(t);return e.w=0,e.n=0,e},km=t=>(t.w&cs)>0,Nm=t=>(t.n&cs)>0,OT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=cs},DT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];km(i)&&!Nm(i)?i.delete(t):e[n++]=i,i.w&=~cs,i.n&=~cs}e.length=n}},eu=new WeakMap;let fr=0,cs=1;const tu=30;let Yt;const Ms=Symbol(""),nu=Symbol("");class bh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kT(this,s)}run(){if(!this.active)return this.fn();let e=Yt,n=ns;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Yt,Yt=this,ns=!0,cs=1<<++fr,fr<=tu?OT(this):Rf(this),this.fn()}finally{fr<=tu&&DT(this),cs=1<<--fr,Yt=this.parent,ns=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Yt===this?this.deferStop=!0:this.active&&(Rf(this),this.onStop&&this.onStop(),this.active=!1)}}function Rf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ns=!0;const Om=[];function Hi(){Om.push(ns),ns=!1}function qi(){const t=Om.pop();ns=t===void 0?!0:t}function Ot(t,e,n){if(ns&&Yt){let s=eu.get(t);s||eu.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ih()),Dm(i)}}function Dm(t,e){let n=!1;fr<=tu?Nm(t)||(t.n|=cs,n=!km(t)):n=!t.has(Yt),n&&(t.add(Yt),Yt.deps.push(t))}function Vn(t,e,n,s,i,r){const o=eu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Th(n)&&a.push(o.get("length")):(a.push(o.get(Ms)),gi(t)&&a.push(o.get(nu)));break;case"delete":z(t)||(a.push(o.get(Ms)),gi(t)&&a.push(o.get(nu)));break;case"set":gi(t)&&a.push(o.get(Ms));break}if(a.length===1)a[0]&&su(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);su(Ih(c))}}function su(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Af(s);for(const s of n)s.computed||Af(s)}function Af(t,e){(t!==Yt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const PT=_h("__proto__,__v_isRef,__isVue"),Pm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mr)),xT=Ch(),MT=Ch(!1,!0),LT=Ch(!0),kf=FT();function FT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let r=0,o=this.length;r<o;r++)Ot(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Hi();const s=pe(this)[e].apply(this,n);return qi(),s}}),t}function UT(t){const e=pe(this);return Ot(e,"has",t),e.hasOwnProperty(t)}function Ch(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?eI:Um:e?Fm:Lm).get(s))return s;const o=z(s);if(!t){if(o&&de(kf,i))return Reflect.get(kf,i,r);if(i==="hasOwnProperty")return UT}const a=Reflect.get(s,i,r);return(Mr(i)?Pm.has(i):PT(i))||(t||Ot(s,"get",i),e)?a:je(a)?o&&Th(i)?a:a.value:Ae(a)?t?Vm(a):lo(a):a}}const VT=xm(),$T=xm(!0);function xm(t=!1){return function(n,s,i,r){let o=n[s];if(Si(o)&&je(o)&&!je(i))return!1;if(!t&&(!Ea(i)&&!Si(i)&&(o=pe(o),i=pe(i)),!z(n)&&je(o)&&!je(i)))return o.value=i,!0;const a=z(n)&&Th(s)?Number(s)<n.length:de(n,s),c=Reflect.set(n,s,i,r);return n===pe(r)&&(a?Lr(i,o)&&Vn(n,"set",s,i):Vn(n,"add",s,i)),c}}function BT(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vn(t,"delete",e,void 0),s}function jT(t,e){const n=Reflect.has(t,e);return(!Mr(e)||!Pm.has(e))&&Ot(t,"has",e),n}function HT(t){return Ot(t,"iterate",z(t)?"length":Ms),Reflect.ownKeys(t)}const Mm={get:xT,set:VT,deleteProperty:BT,has:jT,ownKeys:HT},qT={get:LT,set(t,e){return!0},deleteProperty(t,e){return!0}},WT=Et({},Mm,{get:MT,set:$T}),Sh=t=>t,gc=t=>Reflect.getPrototypeOf(t);function $o(t,e,n=!1,s=!1){t=t.__v_raw;const i=pe(t),r=pe(e);n||(e!==r&&Ot(i,"get",e),Ot(i,"get",r));const{has:o}=gc(i),a=s?Sh:n?kh:Fr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Bo(t,e=!1){const n=this.__v_raw,s=pe(n),i=pe(t);return e||(t!==i&&Ot(s,"has",t),Ot(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function jo(t,e=!1){return t=t.__v_raw,!e&&Ot(pe(t),"iterate",Ms),Reflect.get(t,"size",t)}function Nf(t){t=pe(t);const e=pe(this);return gc(e).has.call(e,t)||(e.add(t),Vn(e,"add",t,t)),this}function Of(t,e){e=pe(e);const n=pe(this),{has:s,get:i}=gc(n);let r=s.call(n,t);r||(t=pe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Lr(e,o)&&Vn(n,"set",t,e):Vn(n,"add",t,e),this}function Df(t){const e=pe(this),{has:n,get:s}=gc(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Vn(e,"delete",t,void 0),r}function Pf(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&Vn(t,"clear",void 0,void 0),n}function Ho(t,e){return function(s,i){const r=this,o=r.__v_raw,a=pe(o),c=e?Sh:t?kh:Fr;return!t&&Ot(a,"iterate",Ms),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function qo(t,e,n){return function(...s){const i=this.__v_raw,r=pe(i),o=gi(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?Sh:e?kh:Fr;return!e&&Ot(r,"iterate",c?nu:Ms),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function zn(t){return function(...e){return t==="delete"?!1:this}}function KT(){const t={get(r){return $o(this,r)},get size(){return jo(this)},has:Bo,add:Nf,set:Of,delete:Df,clear:Pf,forEach:Ho(!1,!1)},e={get(r){return $o(this,r,!1,!0)},get size(){return jo(this)},has:Bo,add:Nf,set:Of,delete:Df,clear:Pf,forEach:Ho(!1,!0)},n={get(r){return $o(this,r,!0)},get size(){return jo(this,!0)},has(r){return Bo.call(this,r,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:Ho(!0,!1)},s={get(r){return $o(this,r,!0,!0)},get size(){return jo(this,!0)},has(r){return Bo.call(this,r,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:Ho(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qo(r,!1,!1),n[r]=qo(r,!0,!1),e[r]=qo(r,!1,!0),s[r]=qo(r,!0,!0)}),[t,n,e,s]}const[zT,GT,QT,YT]=KT();function Rh(t,e){const n=e?t?YT:QT:t?GT:zT;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(de(n,i)&&i in s?n:s,i,r)}const XT={get:Rh(!1,!1)},JT={get:Rh(!1,!0)},ZT={get:Rh(!0,!1)},Lm=new WeakMap,Fm=new WeakMap,Um=new WeakMap,eI=new WeakMap;function tI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nI(t){return t.__v_skip||!Object.isExtensible(t)?0:tI(bT(t))}function lo(t){return Si(t)?t:Ah(t,!1,Mm,XT,Lm)}function sI(t){return Ah(t,!1,WT,JT,Fm)}function Vm(t){return Ah(t,!0,qT,ZT,Um)}function Ah(t,e,n,s,i){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=nI(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function mi(t){return Si(t)?mi(t.__v_raw):!!(t&&t.__v_isReactive)}function Si(t){return!!(t&&t.__v_isReadonly)}function Ea(t){return!!(t&&t.__v_isShallow)}function $m(t){return mi(t)||Si(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Bm(t){return va(t,"__v_skip",!0),t}const Fr=t=>Ae(t)?lo(t):t,kh=t=>Ae(t)?Vm(t):t;function jm(t){ns&&Yt&&(t=pe(t),Dm(t.dep||(t.dep=Ih())))}function Hm(t,e){t=pe(t);const n=t.dep;n&&su(n)}function je(t){return!!(t&&t.__v_isRef===!0)}function sn(t){return Wm(t,!1)}function qm(t){return Wm(t,!0)}function Wm(t,e){return je(t)?t:new iI(t,e)}class iI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Fr(e)}get value(){return jm(this),this._value}set value(e){const n=this.__v_isShallow||Ea(e)||Si(e);e=n?e:pe(e),Lr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Fr(e),Hm(this))}}function _e(t){return je(t)?t.value:t}const rI={get:(t,e,n)=>_e(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Km(t){return mi(t)?t:new Proxy(t,rI)}var zm;class oI{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[zm]=!1,this._dirty=!0,this.effect=new bh(e,()=>{this._dirty||(this._dirty=!0,Hm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=pe(this);return jm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}zm="__v_isReadonly";function aI(t,e,n=!1){let s,i;const r=te(t);return r?(s=t,i=nn):(s=t.get,i=t.set),new oI(s,i,r||!i,n)}function ss(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){mc(r,e,n)}return i}function jt(t,e,n,s){if(te(t)){const r=ss(t,e,n,s);return r&&Cm(r)&&r.catch(o=>{mc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(jt(t[r],e,n,s));return i}function mc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){ss(c,null,10,[t,o,a]);return}}cI(t,n,i,s)}function cI(t,e,n,s=!0){console.error(t)}let Ur=!1,iu=!1;const mt=[];let gn=0;const _i=[];let On=null,bs=0;const Gm=Promise.resolve();let Nh=null;function Qm(t){const e=Nh||Gm;return t?e.then(this?t.bind(this):t):e}function lI(t){let e=gn+1,n=mt.length;for(;e<n;){const s=e+n>>>1;Vr(mt[s])<t?e=s+1:n=s}return e}function Oh(t){(!mt.length||!mt.includes(t,Ur&&t.allowRecurse?gn+1:gn))&&(t.id==null?mt.push(t):mt.splice(lI(t.id),0,t),Ym())}function Ym(){!Ur&&!iu&&(iu=!0,Nh=Gm.then(Jm))}function uI(t){const e=mt.indexOf(t);e>gn&&mt.splice(e,1)}function hI(t){z(t)?_i.push(...t):(!On||!On.includes(t,t.allowRecurse?bs+1:bs))&&_i.push(t),Ym()}function xf(t,e=Ur?gn+1:0){for(;e<mt.length;e++){const n=mt[e];n&&n.pre&&(mt.splice(e,1),e--,n())}}function Xm(t){if(_i.length){const e=[...new Set(_i)];if(_i.length=0,On){On.push(...e);return}for(On=e,On.sort((n,s)=>Vr(n)-Vr(s)),bs=0;bs<On.length;bs++)On[bs]();On=null,bs=0}}const Vr=t=>t.id==null?1/0:t.id,dI=(t,e)=>{const n=Vr(t)-Vr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Jm(t){iu=!1,Ur=!0,mt.sort(dI);const e=nn;try{for(gn=0;gn<mt.length;gn++){const n=mt[gn];n&&n.active!==!1&&ss(n,null,14)}}finally{gn=0,mt.length=0,Xm(),Ur=!1,Nh=null,(mt.length||_i.length)&&Jm()}}function fI(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ne;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ne;d&&(i=n.map(p=>Ze(p)?p.trim():p)),h&&(i=n.map(wa))}let a,c=s[a=_l(e)]||s[a=_l(En(e))];!c&&r&&(c=s[a=_l(ji(e))]),c&&jt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(l,t,6,i)}}function Zm(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=Zm(l,e,!0);u&&(a=!0,Et(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Ae(t)&&s.set(t,null),null):(z(r)?r.forEach(c=>o[c]=null):Et(o,r),Ae(t)&&s.set(t,o),o)}function _c(t,e){return!t||!hc(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,ji(e))||de(t,e))}let xt=null,yc=null;function Ta(t){const e=xt;return xt=t,yc=t&&t.type.__scopeId||null,e}function Dh(t){yc=t}function Ph(){yc=null}function fn(t,e=xt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&qf(-1);const r=Ta(e);let o;try{o=t(...i)}finally{Ta(r),s._d&&qf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function yl(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:_}=t;let v,b;const N=Ta(t);try{if(n.shapeFlag&4){const P=i||s;v=pn(u.call(P,P,h,r,p,d,m)),b=c}else{const P=e;v=pn(P.length>1?P(r,{attrs:c,slots:a,emit:l}):P(r,null)),b=e.props?c:pI(c)}}catch(P){Ir.length=0,mc(P,t,1),v=ze(on)}let R=v;if(b&&_!==!1){const P=Object.keys(b),{shapeFlag:G}=R;P.length&&G&7&&(o&&P.some(wh)&&(b=gI(b,o)),R=ls(R,b))}return n.dirs&&(R=ls(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),v=R,Ta(N),v}const pI=t=>{let e;for(const n in t)(n==="class"||n==="style"||hc(n))&&((e||(e={}))[n]=t[n]);return e},gI=(t,e)=>{const n={};for(const s in t)(!wh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function mI(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Mf(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!_c(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Mf(s,o,l):!0:!!o;return!1}function Mf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!_c(n,r))return!0}return!1}function _I({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yI=t=>t.__isSuspense;function vI(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):hI(t)}function aa(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function rn(t,e,n=!1){const s=Be||xt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}const Wo={};function Er(t,e,n){return e_(t,e,n)}function e_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ne){const a=Am()===(Be==null?void 0:Be.scope)?Be:null;let c,l=!1,u=!1;if(je(t)?(c=()=>t.value,l=Ea(t)):mi(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(R=>mi(R)||Ea(R)),c=()=>t.map(R=>{if(je(R))return R.value;if(mi(R))return As(R);if(te(R))return ss(R,a,2)})):te(t)?e?c=()=>ss(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),jt(t,a,3,[d])}:c=nn,e&&s){const R=c;c=()=>As(R())}let h,d=R=>{h=b.onStop=()=>{ss(R,a,4)}},p;if(Br)if(d=nn,e?n&&jt(e,a,3,[c(),u?[]:void 0,d]):c(),i==="sync"){const R=hb();p=R.__watcherHandles||(R.__watcherHandles=[])}else return nn;let m=u?new Array(t.length).fill(Wo):Wo;const _=()=>{if(b.active)if(e){const R=b.run();(s||l||(u?R.some((P,G)=>Lr(P,m[G])):Lr(R,m)))&&(h&&h(),jt(e,a,3,[R,m===Wo?void 0:u&&m[0]===Wo?[]:m,d]),m=R)}else b.run()};_.allowRecurse=!!e;let v;i==="sync"?v=_:i==="post"?v=()=>Rt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),v=()=>Oh(_));const b=new bh(c,v);e?n?_():m=b.run():i==="post"?Rt(b.run.bind(b),a&&a.suspense):b.run();const N=()=>{b.stop(),a&&a.scope&&Eh(a.scope.effects,b)};return p&&p.push(N),N}function wI(t,e,n){const s=this.proxy,i=Ze(t)?t.includes(".")?t_(s,t):()=>s[t]:t.bind(s,s);let r;te(e)?r=e:(r=e.handler,n=e);const o=Be;Ri(this);const a=e_(i,r.bind(s),n);return o?Ri(o):Ls(),a}function t_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function As(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))As(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)As(t[n],e);else if(dc(t)||gi(t))t.forEach(n=>{As(n,e)});else if(Rm(t))for(const n in t)As(t[n],e);return t}function EI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return o_(()=>{t.isMounted=!0}),a_(()=>{t.isUnmounting=!0}),t}const Vt=[Function,Array],TI={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vt,onEnter:Vt,onAfterEnter:Vt,onEnterCancelled:Vt,onBeforeLeave:Vt,onLeave:Vt,onAfterLeave:Vt,onLeaveCancelled:Vt,onBeforeAppear:Vt,onAppear:Vt,onAfterAppear:Vt,onAppearCancelled:Vt},setup(t,{slots:e}){const n=Ic(),s=EI();let i;return()=>{const r=e.default&&s_(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==on){o=_;break}}const a=pe(t),{mode:c}=a;if(s.isLeaving)return vl(o);const l=Lf(o);if(!l)return vl(o);const u=ru(l,a,s,n);ou(l,u);const h=n.subTree,d=h&&Lf(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const _=m();i===void 0?i=_:_!==i&&(i=_,p=!0)}if(d&&d.type!==on&&(!Cs(l,d)||p)){const _=ru(d,a,s,n);if(ou(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},vl(o);c==="in-out"&&l.type!==on&&(_.delayLeave=(v,b,N)=>{const R=n_(s,d);R[String(d.key)]=d,v._leaveCb=()=>{b(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},II=TI;function n_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ru(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:b,onAppearCancelled:N}=e,R=String(t.key),P=n_(n,t),G=(j,be)=>{j&&jt(j,s,9,be)},oe=(j,be)=>{const ve=be[1];G(j,be),z(j)?j.every(ut=>ut.length<=1)&&ve():j.length<=1&&ve()},ge={mode:r,persisted:o,beforeEnter(j){let be=a;if(!n.isMounted)if(i)be=_||a;else return;j._leaveCb&&j._leaveCb(!0);const ve=P[R];ve&&Cs(t,ve)&&ve.el._leaveCb&&ve.el._leaveCb(),G(be,[j])},enter(j){let be=c,ve=l,ut=u;if(!n.isMounted)if(i)be=v||c,ve=b||l,ut=N||u;else return;let ht=!1;const Kt=j._enterCb=kn=>{ht||(ht=!0,kn?G(ut,[j]):G(ve,[j]),ge.delayedLeave&&ge.delayedLeave(),j._enterCb=void 0)};be?oe(be,[j,Kt]):Kt()},leave(j,be){const ve=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return be();G(h,[j]);let ut=!1;const ht=j._leaveCb=Kt=>{ut||(ut=!0,be(),Kt?G(m,[j]):G(p,[j]),j._leaveCb=void 0,P[ve]===t&&delete P[ve])};P[ve]=t,d?oe(d,[j,ht]):ht()},clone(j){return ru(j,e,n,s)}};return ge}function vl(t){if(vc(t))return t=ls(t),t.children=null,t}function Lf(t){return vc(t)?t.children?t.children[0]:void 0:t}function ou(t,e){t.shapeFlag&6&&t.component?ou(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function s_(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Me?(o.patchFlag&128&&i++,s=s.concat(s_(o.children,e,a))):(e||o.type!==on)&&s.push(a!=null?ls(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function i_(t){return te(t)?{setup:t,name:t.name}:t}const ca=t=>!!t.type.__asyncLoader,vc=t=>t.type.__isKeepAlive;function bI(t,e){r_(t,"a",e)}function CI(t,e){r_(t,"da",e)}function r_(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(wc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)vc(i.parent.vnode)&&SI(s,e,n,i),i=i.parent}}function SI(t,e,n,s){const i=wc(e,t,s,!0);c_(()=>{Eh(s[e],i)},n)}function wc(t,e,n=Be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Hi(),Ri(n);const a=jt(e,n,t,o);return Ls(),qi(),a});return s?i.unshift(r):i.push(r),r}}const Wn=t=>(e,n=Be)=>(!Br||t==="sp")&&wc(t,(...s)=>e(...s),n),RI=Wn("bm"),o_=Wn("m"),AI=Wn("bu"),kI=Wn("u"),a_=Wn("bum"),c_=Wn("um"),l_=Wn("sp"),NI=Wn("rtg"),OI=Wn("rtc");function DI(t,e=Be){wc("ec",t,e)}function ts(t,e){const n=xt;if(n===null)return t;const s=bc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Ne]=e[r];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&As(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function vs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Hi(),jt(c,n,8,[t.el,a,t,e]),qi())}}const u_="components";function Ko(t,e){return xI(u_,t,!0,e)||t}const PI=Symbol();function xI(t,e,n=!0,s=!1){const i=xt||Be;if(i){const r=i.type;if(t===u_){const a=lb(r,!1);if(a&&(a===e||a===En(e)||a===pc(En(e))))return r}const o=Ff(i[t]||r[t],e)||Ff(i.appContext[t],e);return!o&&s?r:o}}function Ff(t,e){return t&&(t[e]||t[En(e)]||t[pc(En(e))])}function yi(t,e,n,s){let i;const r=n&&n[s];if(z(t)||Ze(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ae(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const au=t=>t?E_(t)?bc(t)||t.proxy:au(t.parent):null,Tr=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>au(t.parent),$root:t=>au(t.root),$emit:t=>t.emit,$options:t=>xh(t),$forceUpdate:t=>t.f||(t.f=()=>Oh(t.update)),$nextTick:t=>t.n||(t.n=Qm.bind(t.proxy)),$watch:t=>wI.bind(t)}),wl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&de(t,e),MI={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(wl(s,e))return o[e]=1,s[e];if(i!==Ne&&de(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,r[e];if(n!==Ne&&de(n,e))return o[e]=4,n[e];cu&&(o[e]=0)}}const u=Tr[e];let h,d;if(u)return e==="$attrs"&&Ot(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&de(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return wl(i,e)?(i[e]=n,!0):s!==Ne&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ne&&de(t,o)||wl(e,o)||(a=r[0])&&de(a,o)||de(s,o)||de(Tr,o)||de(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let cu=!0;function LI(t){const e=xh(t),n=t.proxy,s=t.ctx;cu=!1,e.beforeCreate&&Uf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:_,deactivated:v,beforeDestroy:b,beforeUnmount:N,destroyed:R,unmounted:P,render:G,renderTracked:oe,renderTriggered:ge,errorCaptured:j,serverPrefetch:be,expose:ve,inheritAttrs:ut,components:ht,directives:Kt,filters:kn}=e;if(l&&FI(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ce in o){const Ee=o[Ce];te(Ee)&&(s[Ce]=Ee.bind(n))}if(i){const Ce=i.call(n,n);Ae(Ce)&&(t.data=lo(Ce))}if(cu=!0,r)for(const Ce in r){const Ee=r[Ce],zt=te(Ee)?Ee.bind(n,n):te(Ee.get)?Ee.get.bind(n,n):nn,ys=!te(Ee)&&te(Ee.set)?Ee.set.bind(n):nn,Gt=$t({get:zt,set:ys});Object.defineProperty(s,Ce,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:St=>Gt.value=St})}if(a)for(const Ce in a)h_(a[Ce],s,n,Ce);if(c){const Ce=te(c)?c.call(n):c;Reflect.ownKeys(Ce).forEach(Ee=>{aa(Ee,Ce[Ee])})}u&&Uf(u,t,"c");function He(Ce,Ee){z(Ee)?Ee.forEach(zt=>Ce(zt.bind(n))):Ee&&Ce(Ee.bind(n))}if(He(RI,h),He(o_,d),He(AI,p),He(kI,m),He(bI,_),He(CI,v),He(DI,j),He(OI,oe),He(NI,ge),He(a_,N),He(c_,P),He(l_,be),z(ve))if(ve.length){const Ce=t.exposed||(t.exposed={});ve.forEach(Ee=>{Object.defineProperty(Ce,Ee,{get:()=>n[Ee],set:zt=>n[Ee]=zt})})}else t.exposed||(t.exposed={});G&&t.render===nn&&(t.render=G),ut!=null&&(t.inheritAttrs=ut),ht&&(t.components=ht),Kt&&(t.directives=Kt)}function FI(t,e,n=nn,s=!1){z(t)&&(t=lu(t));for(const i in t){const r=t[i];let o;Ae(r)?"default"in r?o=rn(r.from||i,r.default,!0):o=rn(r.from||i):o=rn(r),je(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Uf(t,e,n){jt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function h_(t,e,n,s){const i=s.includes(".")?t_(n,s):()=>n[s];if(Ze(t)){const r=e[t];te(r)&&Er(i,r)}else if(te(t))Er(i,t.bind(n));else if(Ae(t))if(z(t))t.forEach(r=>h_(r,e,n,s));else{const r=te(t.handler)?t.handler.bind(n):e[t.handler];te(r)&&Er(i,r,t)}}function xh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>Ia(c,l,o,!0)),Ia(c,e,o)),Ae(e)&&r.set(e,c),c}function Ia(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ia(t,r,n,!0),i&&i.forEach(o=>Ia(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=UI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const UI={data:Vf,props:Es,emits:Es,methods:Es,computed:Es,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Es,directives:Es,watch:$I,provide:Vf,inject:VI};function Vf(t,e){return e?t?function(){return Et(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function VI(t,e){return Es(lu(t),lu(e))}function lu(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Es(t,e){return t?Et(Et(Object.create(null),t),e):e}function $I(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const s in e)n[s]=bt(t[s],e[s]);return n}function BI(t,e,n,s=!1){const i={},r={};va(r,Tc,1),t.propsDefaults=Object.create(null),d_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:sI(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function jI(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=pe(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(_c(t.emitsOptions,d))continue;const p=e[d];if(c)if(de(r,d))p!==r[d]&&(r[d]=p,l=!0);else{const m=En(d);i[m]=uu(c,a,m,p,t,!1)}else p!==r[d]&&(r[d]=p,l=!0)}}}else{d_(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=ji(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=uu(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!de(e,h))&&(delete r[h],l=!0)}l&&Vn(t,"set","$attrs")}function d_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ra(c))continue;const l=e[c];let u;i&&de(i,u=En(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:_c(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=pe(n),l=a||Ne;for(let u=0;u<r.length;u++){const h=r[u];n[h]=uu(i,c,h,l[h],t,!de(l,h))}}return o}function uu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(Ri(i),s=l[n]=c.call(null,e),Ls())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ji(n))&&(s=!0))}return s}function f_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[d,p]=f_(h,e,!0);Et(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Ae(t)&&s.set(t,pi),pi;if(z(r))for(let u=0;u<r.length;u++){const h=En(r[u]);$f(h)&&(o[h]=Ne)}else if(r)for(const u in r){const h=En(u);if($f(h)){const d=r[u],p=o[h]=z(d)||te(d)?{type:d}:Object.assign({},d);if(p){const m=Hf(Boolean,p.type),_=Hf(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||de(p,"default"))&&a.push(h)}}}const l=[o,a];return Ae(t)&&s.set(t,l),l}function $f(t){return t[0]!=="$"}function Bf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function jf(t,e){return Bf(t)===Bf(e)}function Hf(t,e){return z(e)?e.findIndex(n=>jf(n,t)):te(e)&&jf(e,t)?0:-1}const p_=t=>t[0]==="_"||t==="$stable",Mh=t=>z(t)?t.map(pn):[pn(t)],HI=(t,e,n)=>{if(e._n)return e;const s=fn((...i)=>Mh(e(...i)),n);return s._c=!1,s},g_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(p_(i))continue;const r=t[i];if(te(r))e[i]=HI(i,r,s);else if(r!=null){const o=Mh(r);e[i]=()=>o}}},m_=(t,e)=>{const n=Mh(e);t.slots.default=()=>n},qI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),va(e,"_",n)):g_(e,t.slots={})}else t.slots={},e&&m_(t,e);va(t.slots,Tc,1)},WI=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ne;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Et(i,e),!n&&a===1&&delete i._):(r=!e.$stable,g_(e,i)),o=e}else e&&(m_(t,e),o={default:1});if(r)for(const a in i)!p_(a)&&!(a in o)&&delete i[a]};function __(){return{app:null,config:{isNativeTag:ET,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KI=0;function zI(t,e){return function(s,i=null){te(s)||(s=Object.assign({},s)),i!=null&&!Ae(i)&&(i=null);const r=__(),o=new Set;let a=!1;const c=r.app={_uid:KI++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:db,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=ze(s,i);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,bc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function hu(t,e,n,s,i=!1){if(z(t)){t.forEach((d,p)=>hu(d,e&&(z(e)?e[p]:e),n,s,i));return}if(ca(s)&&!i)return;const r=s.shapeFlag&4?bc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ze(l)?(u[l]=null,de(h,l)&&(h[l]=null)):je(l)&&(l.value=null)),te(c))ss(c,a,12,[o,u]);else{const d=Ze(c),p=je(c);if(d||p){const m=()=>{if(t.f){const _=d?de(h,c)?h[c]:u[c]:c.value;i?z(_)&&Eh(_,r):z(_)?_.includes(r)||_.push(r):d?(u[c]=[r],de(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,de(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Rt(m,n)):m()}}}const Rt=vI;function GI(t){return QI(t)}function QI(t,e){const n=RT();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=nn,insertStaticContent:m}=t,_=(f,g,y,w=null,I=null,O=null,L=!1,k=null,D=!!g.dynamicChildren)=>{if(f===g)return;f&&!Cs(f,g)&&(w=M(f),St(f,I,O,!0),f=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:C,ref:H,shapeFlag:U}=g;switch(C){case Ec:v(f,g,y,w);break;case on:b(f,g,y,w);break;case El:f==null&&N(g,y,w,L);break;case Me:ht(f,g,y,w,I,O,L,k,D);break;default:U&1?G(f,g,y,w,I,O,L,k,D):U&6?Kt(f,g,y,w,I,O,L,k,D):(U&64||U&128)&&C.process(f,g,y,w,I,O,L,k,D,he)}H!=null&&I&&hu(H,f&&f.ref,O,g||f,!g)},v=(f,g,y,w)=>{if(f==null)s(g.el=a(g.children),y,w);else{const I=g.el=f.el;g.children!==f.children&&l(I,g.children)}},b=(f,g,y,w)=>{f==null?s(g.el=c(g.children||""),y,w):g.el=f.el},N=(f,g,y,w)=>{[f.el,f.anchor]=m(f.children,g,y,w,f.el,f.anchor)},R=({el:f,anchor:g},y,w)=>{let I;for(;f&&f!==g;)I=d(f),s(f,y,w),f=I;s(g,y,w)},P=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),i(f),f=y;i(g)},G=(f,g,y,w,I,O,L,k,D)=>{L=L||g.type==="svg",f==null?oe(g,y,w,I,O,L,k,D):be(f,g,I,O,L,k,D)},oe=(f,g,y,w,I,O,L,k)=>{let D,C;const{type:H,props:U,shapeFlag:q,transition:J,dirs:se}=f;if(D=f.el=o(f.type,O,U&&U.is,U),q&8?u(D,f.children):q&16&&j(f.children,D,null,w,I,O&&H!=="foreignObject",L,k),se&&vs(f,null,w,"created"),ge(D,f,f.scopeId,L,w),U){for(const Te in U)Te!=="value"&&!ra(Te)&&r(D,Te,null,U[Te],O,f.children,w,I,F);"value"in U&&r(D,"value",null,U.value),(C=U.onVnodeBeforeMount)&&dn(C,w,f)}se&&vs(f,null,w,"beforeMount");const Se=(!I||I&&!I.pendingBranch)&&J&&!J.persisted;Se&&J.beforeEnter(D),s(D,g,y),((C=U&&U.onVnodeMounted)||Se||se)&&Rt(()=>{C&&dn(C,w,f),Se&&J.enter(D),se&&vs(f,null,w,"mounted")},I)},ge=(f,g,y,w,I)=>{if(y&&p(f,y),w)for(let O=0;O<w.length;O++)p(f,w[O]);if(I){let O=I.subTree;if(g===O){const L=I.vnode;ge(f,L,L.scopeId,L.slotScopeIds,I.parent)}}},j=(f,g,y,w,I,O,L,k,D=0)=>{for(let C=D;C<f.length;C++){const H=f[C]=k?Yn(f[C]):pn(f[C]);_(null,H,g,y,w,I,O,L,k)}},be=(f,g,y,w,I,O,L)=>{const k=g.el=f.el;let{patchFlag:D,dynamicChildren:C,dirs:H}=g;D|=f.patchFlag&16;const U=f.props||Ne,q=g.props||Ne;let J;y&&ws(y,!1),(J=q.onVnodeBeforeUpdate)&&dn(J,y,g,f),H&&vs(g,f,y,"beforeUpdate"),y&&ws(y,!0);const se=I&&g.type!=="foreignObject";if(C?ve(f.dynamicChildren,C,k,y,w,se,O):L||Ee(f,g,k,null,y,w,se,O,!1),D>0){if(D&16)ut(k,g,U,q,y,w,I);else if(D&2&&U.class!==q.class&&r(k,"class",null,q.class,I),D&4&&r(k,"style",U.style,q.style,I),D&8){const Se=g.dynamicProps;for(let Te=0;Te<Se.length;Te++){const qe=Se[Te],Qt=U[qe],ri=q[qe];(ri!==Qt||qe==="value")&&r(k,qe,Qt,ri,I,f.children,y,w,F)}}D&1&&f.children!==g.children&&u(k,g.children)}else!L&&C==null&&ut(k,g,U,q,y,w,I);((J=q.onVnodeUpdated)||H)&&Rt(()=>{J&&dn(J,y,g,f),H&&vs(g,f,y,"updated")},w)},ve=(f,g,y,w,I,O,L)=>{for(let k=0;k<g.length;k++){const D=f[k],C=g[k],H=D.el&&(D.type===Me||!Cs(D,C)||D.shapeFlag&70)?h(D.el):y;_(D,C,H,null,w,I,O,L,!0)}},ut=(f,g,y,w,I,O,L)=>{if(y!==w){if(y!==Ne)for(const k in y)!ra(k)&&!(k in w)&&r(f,k,y[k],null,L,g.children,I,O,F);for(const k in w){if(ra(k))continue;const D=w[k],C=y[k];D!==C&&k!=="value"&&r(f,k,C,D,L,g.children,I,O,F)}"value"in w&&r(f,"value",y.value,w.value)}},ht=(f,g,y,w,I,O,L,k,D)=>{const C=g.el=f?f.el:a(""),H=g.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:J}=g;J&&(k=k?k.concat(J):J),f==null?(s(C,y,w),s(H,y,w),j(g.children,y,H,I,O,L,k,D)):U>0&&U&64&&q&&f.dynamicChildren?(ve(f.dynamicChildren,q,y,I,O,L,k),(g.key!=null||I&&g===I.subTree)&&y_(f,g,!0)):Ee(f,g,y,H,I,O,L,k,D)},Kt=(f,g,y,w,I,O,L,k,D)=>{g.slotScopeIds=k,f==null?g.shapeFlag&512?I.ctx.activate(g,y,w,L,D):kn(g,y,w,I,O,L,D):rr(f,g,D)},kn=(f,g,y,w,I,O,L)=>{const k=f.component=ib(f,w,I);if(vc(f)&&(k.ctx.renderer=he),rb(k),k.asyncDep){if(I&&I.registerDep(k,He),!f.el){const D=k.subTree=ze(on);b(null,D,g,y)}return}He(k,f,g,y,I,O,L)},rr=(f,g,y)=>{const w=g.component=f.component;if(mI(f,g,y))if(w.asyncDep&&!w.asyncResolved){Ce(w,g,y);return}else w.next=g,uI(w.update),w.update();else g.el=f.el,w.vnode=g},He=(f,g,y,w,I,O,L)=>{const k=()=>{if(f.isMounted){let{next:H,bu:U,u:q,parent:J,vnode:se}=f,Se=H,Te;ws(f,!1),H?(H.el=se.el,Ce(f,H,L)):H=se,U&&oa(U),(Te=H.props&&H.props.onVnodeBeforeUpdate)&&dn(Te,J,H,se),ws(f,!0);const qe=yl(f),Qt=f.subTree;f.subTree=qe,_(Qt,qe,h(Qt.el),M(Qt),f,I,O),H.el=qe.el,Se===null&&_I(f,qe.el),q&&Rt(q,I),(Te=H.props&&H.props.onVnodeUpdated)&&Rt(()=>dn(Te,J,H,se),I)}else{let H;const{el:U,props:q}=g,{bm:J,m:se,parent:Se}=f,Te=ca(g);if(ws(f,!1),J&&oa(J),!Te&&(H=q&&q.onVnodeBeforeMount)&&dn(H,Se,g),ws(f,!0),U&&ne){const qe=()=>{f.subTree=yl(f),ne(U,f.subTree,f,I,null)};Te?g.type.__asyncLoader().then(()=>!f.isUnmounted&&qe()):qe()}else{const qe=f.subTree=yl(f);_(null,qe,y,w,f,I,O),g.el=qe.el}if(se&&Rt(se,I),!Te&&(H=q&&q.onVnodeMounted)){const qe=g;Rt(()=>dn(H,Se,qe),I)}(g.shapeFlag&256||Se&&ca(Se.vnode)&&Se.vnode.shapeFlag&256)&&f.a&&Rt(f.a,I),f.isMounted=!0,g=y=w=null}},D=f.effect=new bh(k,()=>Oh(C),f.scope),C=f.update=()=>D.run();C.id=f.uid,ws(f,!0),C()},Ce=(f,g,y)=>{g.component=f;const w=f.vnode.props;f.vnode=g,f.next=null,jI(f,g.props,w,y),WI(f,g.children,y),Hi(),xf(),qi()},Ee=(f,g,y,w,I,O,L,k,D=!1)=>{const C=f&&f.children,H=f?f.shapeFlag:0,U=g.children,{patchFlag:q,shapeFlag:J}=g;if(q>0){if(q&128){ys(C,U,y,w,I,O,L,k,D);return}else if(q&256){zt(C,U,y,w,I,O,L,k,D);return}}J&8?(H&16&&F(C,I,O),U!==C&&u(y,U)):H&16?J&16?ys(C,U,y,w,I,O,L,k,D):F(C,I,O,!0):(H&8&&u(y,""),J&16&&j(U,y,w,I,O,L,k,D))},zt=(f,g,y,w,I,O,L,k,D)=>{f=f||pi,g=g||pi;const C=f.length,H=g.length,U=Math.min(C,H);let q;for(q=0;q<U;q++){const J=g[q]=D?Yn(g[q]):pn(g[q]);_(f[q],J,y,null,I,O,L,k,D)}C>H?F(f,I,O,!0,!1,U):j(g,y,w,I,O,L,k,D,U)},ys=(f,g,y,w,I,O,L,k,D)=>{let C=0;const H=g.length;let U=f.length-1,q=H-1;for(;C<=U&&C<=q;){const J=f[C],se=g[C]=D?Yn(g[C]):pn(g[C]);if(Cs(J,se))_(J,se,y,null,I,O,L,k,D);else break;C++}for(;C<=U&&C<=q;){const J=f[U],se=g[q]=D?Yn(g[q]):pn(g[q]);if(Cs(J,se))_(J,se,y,null,I,O,L,k,D);else break;U--,q--}if(C>U){if(C<=q){const J=q+1,se=J<H?g[J].el:w;for(;C<=q;)_(null,g[C]=D?Yn(g[C]):pn(g[C]),y,se,I,O,L,k,D),C++}}else if(C>q)for(;C<=U;)St(f[C],I,O,!0),C++;else{const J=C,se=C,Se=new Map;for(C=se;C<=q;C++){const Dt=g[C]=D?Yn(g[C]):pn(g[C]);Dt.key!=null&&Se.set(Dt.key,C)}let Te,qe=0;const Qt=q-se+1;let ri=!1,Tf=0;const or=new Array(Qt);for(C=0;C<Qt;C++)or[C]=0;for(C=J;C<=U;C++){const Dt=f[C];if(qe>=Qt){St(Dt,I,O,!0);continue}let hn;if(Dt.key!=null)hn=Se.get(Dt.key);else for(Te=se;Te<=q;Te++)if(or[Te-se]===0&&Cs(Dt,g[Te])){hn=Te;break}hn===void 0?St(Dt,I,O,!0):(or[hn-se]=C+1,hn>=Tf?Tf=hn:ri=!0,_(Dt,g[hn],y,null,I,O,L,k,D),qe++)}const If=ri?YI(or):pi;for(Te=If.length-1,C=Qt-1;C>=0;C--){const Dt=se+C,hn=g[Dt],bf=Dt+1<H?g[Dt+1].el:w;or[C]===0?_(null,hn,y,bf,I,O,L,k,D):ri&&(Te<0||C!==If[Te]?Gt(hn,y,bf,2):Te--)}}},Gt=(f,g,y,w,I=null)=>{const{el:O,type:L,transition:k,children:D,shapeFlag:C}=f;if(C&6){Gt(f.component.subTree,g,y,w);return}if(C&128){f.suspense.move(g,y,w);return}if(C&64){L.move(f,g,y,he);return}if(L===Me){s(O,g,y);for(let U=0;U<D.length;U++)Gt(D[U],g,y,w);s(f.anchor,g,y);return}if(L===El){R(f,g,y);return}if(w!==2&&C&1&&k)if(w===0)k.beforeEnter(O),s(O,g,y),Rt(()=>k.enter(O),I);else{const{leave:U,delayLeave:q,afterLeave:J}=k,se=()=>s(O,g,y),Se=()=>{U(O,()=>{se(),J&&J()})};q?q(O,se,Se):Se()}else s(O,g,y)},St=(f,g,y,w=!1,I=!1)=>{const{type:O,props:L,ref:k,children:D,dynamicChildren:C,shapeFlag:H,patchFlag:U,dirs:q}=f;if(k!=null&&hu(k,null,y,f,!0),H&256){g.ctx.deactivate(f);return}const J=H&1&&q,se=!ca(f);let Se;if(se&&(Se=L&&L.onVnodeBeforeUnmount)&&dn(Se,g,f),H&6)T(f.component,y,w);else{if(H&128){f.suspense.unmount(y,w);return}J&&vs(f,null,g,"beforeUnmount"),H&64?f.type.remove(f,g,y,I,he,w):C&&(O!==Me||U>0&&U&64)?F(C,g,y,!1,!0):(O===Me&&U&384||!I&&H&16)&&F(D,g,y),w&&ii(f)}(se&&(Se=L&&L.onVnodeUnmounted)||J)&&Rt(()=>{Se&&dn(Se,g,f),J&&vs(f,null,g,"unmounted")},y)},ii=f=>{const{type:g,el:y,anchor:w,transition:I}=f;if(g===Me){Vo(y,w);return}if(g===El){P(f);return}const O=()=>{i(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:k}=I,D=()=>L(y,O);k?k(f.el,O,D):D()}else O()},Vo=(f,g)=>{let y;for(;f!==g;)y=d(f),i(f),f=y;i(g)},T=(f,g,y)=>{const{bum:w,scope:I,update:O,subTree:L,um:k}=f;w&&oa(w),I.stop(),O&&(O.active=!1,St(L,f,g,y)),k&&Rt(k,g),Rt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},F=(f,g,y,w=!1,I=!1,O=0)=>{for(let L=O;L<f.length;L++)St(f[L],g,y,w,I)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),B=(f,g,y)=>{f==null?g._vnode&&St(g._vnode,null,null,!0):_(g._vnode||null,f,g,null,null,null,y),xf(),Xm(),g._vnode=f},he={p:_,um:St,m:Gt,r:ii,mt:kn,mc:j,pc:Ee,pbc:ve,n:M,o:t};let Ue,ne;return e&&([Ue,ne]=e(he)),{render:B,hydrate:Ue,createApp:zI(B,Ue)}}function ws({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function y_(t,e,n=!1){const s=t.children,i=e.children;if(z(s)&&z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Yn(i[r]),a.el=o.el),n||y_(o,a)),a.type===Ec&&(a.el=o.el)}}function YI(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const XI=t=>t.__isTeleport,Me=Symbol(void 0),Ec=Symbol(void 0),on=Symbol(void 0),El=Symbol(void 0),Ir=[];let Zt=null;function De(t=!1){Ir.push(Zt=t?null:[])}function JI(){Ir.pop(),Zt=Ir[Ir.length-1]||null}let $r=1;function qf(t){$r+=t}function v_(t){return t.dynamicChildren=$r>0?Zt||pi:null,JI(),$r>0&&Zt&&Zt.push(t),t}function $e(t,e,n,s,i,r){return v_(E(t,e,n,s,i,r,!0))}function la(t,e,n,s,i){return v_(ze(t,e,n,s,i,!0))}function du(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Tc="__vInternal",w_=({key:t})=>t??null,ua=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ze(t)||je(t)||te(t)?{i:xt,r:t,k:e,f:!!n}:t:null;function E(t,e=null,n=null,s=0,i=null,r=t===Me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&w_(e),ref:e&&ua(e),scopeId:yc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xt};return a?(Lh(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),$r>0&&!o&&Zt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Zt.push(c),c}const ze=ZI;function ZI(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===PI)&&(t=on),du(t)){const a=ls(t,e,!0);return n&&Lh(a,n),$r>0&&!r&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(t)]=a:Zt.push(a)),a.patchFlag|=-2,a}if(ub(t)&&(t=t.__vccOpts),e){e=eb(e);let{class:a,style:c}=e;a&&!Ze(a)&&(e.class=vh(a)),Ae(c)&&($m(c)&&!z(c)&&(c=Et({},c)),e.style=yh(c))}const o=Ze(t)?1:yI(t)?128:XI(t)?64:Ae(t)?4:te(t)?2:0;return E(t,e,n,s,i,o,r,!0)}function eb(t){return t?$m(t)||Tc in t?Et({},t):t:null}function ls(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?tb(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&w_(a),ref:e&&e.ref?n&&i?z(i)?i.concat(ua(e)):[i,ua(e)]:ua(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ls(t.ssContent),ssFallback:t.ssFallback&&ls(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function xe(t=" ",e=0){return ze(Ec,null,t,e)}function zo(t="",e=!1){return e?(De(),la(on,null,t)):ze(on,null,t)}function pn(t){return t==null||typeof t=="boolean"?ze(on):z(t)?ze(Me,null,t.slice()):typeof t=="object"?Yn(t):ze(Ec,null,String(t))}function Yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ls(t)}function Lh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Lh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Tc in e)?e._ctx=xt:i===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),s&64?(n=16,e=[xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function tb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=vh([e.class,s.class]));else if(i==="style")e.style=yh([e.style,s.style]);else if(hc(i)){const r=e[i],o=s[i];o&&r!==o&&!(z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function dn(t,e,n,s=null){jt(t,e,7,[n,s])}const nb=__();let sb=0;function ib(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||nb,r={uid:sb++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new AT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:f_(s,i),emitsOptions:Zm(s,i),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:s.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fI.bind(null,r),t.ce&&t.ce(r),r}let Be=null;const Ic=()=>Be||xt,Ri=t=>{Be=t,t.scope.on()},Ls=()=>{Be&&Be.scope.off(),Be=null};function E_(t){return t.vnode.shapeFlag&4}let Br=!1;function rb(t,e=!1){Br=e;const{props:n,children:s}=t.vnode,i=E_(t);BI(t,n,i,e),qI(t,s);const r=i?ob(t,e):void 0;return Br=!1,r}function ob(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bm(new Proxy(t.ctx,MI));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?cb(t):null;Ri(t),Hi();const r=ss(s,t,0,[t.props,i]);if(qi(),Ls(),Cm(r)){if(r.then(Ls,Ls),e)return r.then(o=>{Wf(t,o,e)}).catch(o=>{mc(o,t,0)});t.asyncDep=r}else Wf(t,r,e)}else T_(t,e)}function Wf(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=Km(e)),T_(t,n)}let Kf;function T_(t,e,n){const s=t.type;if(!t.render){if(!e&&Kf&&!s.render){const i=s.template||xh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Et(Et({isCustomElement:r,delimiters:a},o),c);s.render=Kf(i,l)}}t.render=s.render||nn}Ri(t),Hi(),LI(t),qi(),Ls()}function ab(t){return new Proxy(t.attrs,{get(e,n){return Ot(t,"get","$attrs"),e[n]}})}function cb(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ab(t))},slots:t.slots,emit:t.emit,expose:e}}function bc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Km(Bm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tr)return Tr[n](t)},has(e,n){return n in e||n in Tr}}))}function lb(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function ub(t){return te(t)&&"__vccOpts"in t}const $t=(t,e)=>aI(t,e,Br);function I_(t,e,n){const s=arguments.length;return s===2?Ae(e)&&!z(e)?du(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&du(n)&&(n=[n]),ze(t,e,n))}const b_=Symbol(""),hb=()=>rn(b_),db="3.2.47",fb="http://www.w3.org/2000/svg",Ss=typeof document<"u"?document:null,zf=Ss&&Ss.createElement("template"),pb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ss.createElementNS(fb,t):Ss.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ss.createTextNode(t),createComment:t=>Ss.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ss.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{zf.innerHTML=s?`<svg>${t}</svg>`:t;const a=zf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function gb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mb(t,e,n){const s=t.style,i=Ze(n);if(n&&!i){if(e&&!Ze(e))for(const r in e)n[r]==null&&fu(s,r,"");for(const r in n)fu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Gf=/\s*!important$/;function fu(t,e,n){if(z(n))n.forEach(s=>fu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_b(t,e);Gf.test(n)?t.setProperty(ji(s),n.replace(Gf,""),"important"):t[s]=n}}const Qf=["Webkit","Moz","ms"],Tl={};function _b(t,e){const n=Tl[e];if(n)return n;let s=En(e);if(s!=="filter"&&s in t)return Tl[e]=s;s=pc(s);for(let i=0;i<Qf.length;i++){const r=Qf[i]+s;if(r in t)return Tl[e]=r}return e}const Yf="http://www.w3.org/1999/xlink";function yb(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yf,e.slice(6,e.length)):t.setAttributeNS(Yf,e,n);else{const r=yT(e);n==null||r&&!Im(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function vb(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Im(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Rs(t,e,n,s){t.addEventListener(e,n,s)}function wb(t,e,n,s){t.removeEventListener(e,n,s)}function Eb(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=Tb(e);if(s){const l=r[e]=Cb(s,i);Rs(t,a,l,c)}else o&&(wb(t,a,o,c),r[e]=void 0)}}const Xf=/(?:Once|Passive|Capture)$/;function Tb(t){let e;if(Xf.test(t)){e={};let s;for(;s=t.match(Xf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ji(t.slice(2)),e]}let Il=0;const Ib=Promise.resolve(),bb=()=>Il||(Ib.then(()=>Il=0),Il=Date.now());function Cb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;jt(Sb(s,n.value),e,5,[s])};return n.value=t,n.attached=bb(),n}function Sb(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Jf=/^on[a-z]/,Rb=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?gb(t,s,i):e==="style"?mb(t,n,s):hc(e)?wh(e)||Eb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ab(t,e,s,i))?vb(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yb(t,e,s,i))};function Ab(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Jf.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Jf.test(e)&&Ze(n)?!1:e in t}const kb={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};II.props;const ba=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>oa(e,n):e};function Nb(t){t.target.composing=!0}function Zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fs={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=ba(i);const r=s||i.props&&i.props.type==="number";Rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=wa(a)),t._assign(a)}),n&&Rs(t,"change",()=>{t.value=t.value.trim()}),e||(Rs(t,"compositionstart",Nb),Rs(t,"compositionend",Zf),Rs(t,"change",Zf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=ba(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&wa(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ob={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=dc(e);Rs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wa(Ca(o)):Ca(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=ba(s)},mounted(t,{value:e}){ep(t,e)},beforeUpdate(t,e,n){t._assign=ba(n)},updated(t,{value:e}){ep(t,e)}};function ep(t,e){const n=t.multiple;if(!(n&&!z(e)&&!dc(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Ca(r);if(n)z(e)?r.selected=wT(e,o)>-1:r.selected=e.has(o);else if(uc(Ca(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ca(t){return"_value"in t?t._value:t.value}const Db=Et({patchProp:Rb},pb);let tp;function Pb(){return tp||(tp=GI(Db))}const xb=(...t)=>{const e=Pb().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Mb(s);if(!i)return;const r=e._component;!te(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Mb(t){return Ze(t)?document.querySelector(t):t}const Lb="/assets/vue-foto-672f0f1a.jpg";const Fh=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Fb={},C_=t=>(Dh("data-v-a93c79af"),t=t(),Ph(),t),Ub=C_(()=>E("div",{class:"desc"},[E("h1",null,"Rauescu Company"),E("h3",null,"Cursos Online"),E("p",null,[xe("Cursos online, en todo el mundo!! "),E("br"),xe(" Informatica -- Programacion -- SOs "),E("br"),xe(" Encuentranos hasta en Pakistan, Estados Unidos o Turquia!! Alli donde estes llegaran nuestros cursos, que mejor que confiar en Rauescu Company para tus cursos. Que me dices, ¿Te vienes con nosotros? ")])],-1)),Vb=C_(()=>E("img",{src:Lb,alt:""},null,-1));function $b(t,e){return De(),$e(Me,null,[Ub,Vb],64)}const Bb=Fh(Fb,[["render",$b],["__scopeId","data-v-a93c79af"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw Wi(e)},Wi=function(t){return new Error("Firebase Database ("+S_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(R_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},A_=function(t){const e=R_(t);return Cc.encodeByteArray(e,!0)},Sa=function(t){return A_(t).replace(/\./g,"")},Ra=function(t){try{return Cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){return k_(void 0,t)}function k_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qb(n)||(t[n]=k_(t[n],e[n]));return t}function qb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=()=>Wb().__FIREBASE_DEFAULTS__,zb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ra(t[1]);return e&&JSON.parse(e)},Uh=()=>{try{return Kb()||zb()||Gb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},N_=t=>{var e,n;return(n=(e=Uh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},O_=t=>{const e=N_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qb=()=>{var t;return(t=Uh())===null||t===void 0?void 0:t.config},D_=t=>{var e;return(e=Uh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sa(JSON.stringify(n)),Sa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function Yb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function x_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xb(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function M_(){return S_.NODE_ADMIN===!0}function L_(){try{return typeof indexedDB=="object"}catch{return!1}}function Jb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="FirebaseError";class Rn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zb,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?e0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,a,s)}}function e0(t,e){return t.replace(t0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const t0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){return JSON.parse(t)}function at(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Hr(Ra(r[0])||""),n=Hr(Ra(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},n0=function(t){const e=F_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},s0=function(t){const e=F_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ai(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Aa(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ka(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(np(r)&&np(o)){if(!ka(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function gr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function r0(t,e){const n=new o0(t,e);return n.subscribe.bind(n)}class o0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");a0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=bl),i.error===void 0&&(i.error=bl),i.complete===void 0&&(i.complete=bl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function a0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bl(){}function c0(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(d0(e))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ts){return this.instances.has(e)}getOptions(e=Ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:h0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ts){return this.component?this.component.multipleInstances?e:Ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h0(t){return t===Ts?void 0:t}function d0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new u0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const p0={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},g0=fe.INFO,m0={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},_0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=m0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uo{constructor(e){this.name=e,this._logLevel=g0,this._logHandler=_0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?p0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const y0=(t,e)=>e.some(n=>t instanceof n);let sp,ip;function v0(){return sp||(sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w0(){return ip||(ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U_=new WeakMap,gu=new WeakMap,V_=new WeakMap,Cl=new WeakMap,$h=new WeakMap;function E0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(is(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&U_.set(n,t)}).catch(()=>{}),$h.set(e,t),e}function T0(t){if(gu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});gu.set(t,e)}let mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||V_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I0(t){mu=t(mu)}function b0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Sl(this),e,...n);return V_.set(s,e.sort?e.sort():[e]),is(s)}:w0().includes(t)?function(...e){return t.apply(Sl(this),e),is(U_.get(this))}:function(...e){return is(t.apply(Sl(this),e))}}function C0(t){return typeof t=="function"?b0(t):(t instanceof IDBTransaction&&T0(t),y0(t,v0())?new Proxy(t,mu):t)}function is(t){if(t instanceof IDBRequest)return E0(t);if(Cl.has(t))return Cl.get(t);const e=C0(t);return e!==t&&(Cl.set(t,e),$h.set(e,t)),e}const Sl=t=>$h.get(t);function S0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=is(o);return s&&o.addEventListener("upgradeneeded",c=>{s(is(o.result),c.oldVersion,c.newVersion,is(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const R0=["get","getKey","getAll","getAllKeys","count"],A0=["put","add","delete","clear"],Rl=new Map;function rp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rl.get(e))return Rl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=A0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||R0.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Rl.set(e,r),r}I0(t=>({...t,get:(e,n,s)=>rp(e,n)||t.get(e,n,s),has:(e,n)=>!!rp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function N0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _u="@firebase/app",op="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new uo("@firebase/app"),O0="@firebase/app-compat",D0="@firebase/analytics-compat",P0="@firebase/analytics",x0="@firebase/app-check-compat",M0="@firebase/app-check",L0="@firebase/auth",F0="@firebase/auth-compat",U0="@firebase/database",V0="@firebase/database-compat",$0="@firebase/functions",B0="@firebase/functions-compat",j0="@firebase/installations",H0="@firebase/installations-compat",q0="@firebase/messaging",W0="@firebase/messaging-compat",K0="@firebase/performance",z0="@firebase/performance-compat",G0="@firebase/remote-config",Q0="@firebase/remote-config-compat",Y0="@firebase/storage",X0="@firebase/storage-compat",J0="@firebase/firestore",Z0="@firebase/firestore-compat",eC="firebase",tC="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="[DEFAULT]",nC={[_u]:"fire-core",[O0]:"fire-core-compat",[P0]:"fire-analytics",[D0]:"fire-analytics-compat",[M0]:"fire-app-check",[x0]:"fire-app-check-compat",[L0]:"fire-auth",[F0]:"fire-auth-compat",[U0]:"fire-rtdb",[V0]:"fire-rtdb-compat",[$0]:"fire-fn",[B0]:"fire-fn-compat",[j0]:"fire-iid",[H0]:"fire-iid-compat",[q0]:"fire-fcm",[W0]:"fire-fcm-compat",[K0]:"fire-perf",[z0]:"fire-perf-compat",[G0]:"fire-rc",[Q0]:"fire-rc-compat",[Y0]:"fire-gcs",[X0]:"fire-gcs-compat",[J0]:"fire-fst",[Z0]:"fire-fst-compat","fire-js":"fire-js",[eC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map,vu=new Map;function sC(t,e){try{t.container.addComponent(e)}catch(n){js.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(vu.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of Na.values())sC(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rs=new Ki("app","Firebase",iC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=tC;function $_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw rs.create("bad-app-name",{appName:String(i)});if(n||(n=Qb()),!n)throw rs.create("no-options");const r=Na.get(i);if(r){if(ka(n,r.options)&&ka(s,r.config))return r;throw rs.create("duplicate-app",{appName:i})}const o=new f0(i);for(const c of vu.values())o.addComponent(c);const a=new rC(n,s,o);return Na.set(i,a),a}function Ac(t=yu){const e=Na.get(t);if(!e&&t===yu)return $_();if(!e)throw rs.create("no-app",{appName:t});return e}function Lt(t,e,n){var s;let i=(s=nC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(a.join(" "));return}Tn(new ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="firebase-heartbeat-database",aC=1,qr="firebase-heartbeat-store";let Al=null;function B_(){return Al||(Al=S0(oC,aC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qr)}}}).catch(t=>{throw rs.create("idb-open",{originalErrorMessage:t.message})})),Al}async function cC(t){try{return(await B_()).transaction(qr).objectStore(qr).get(j_(t))}catch(e){if(e instanceof Rn)js.warn(e.message);else{const n=rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});js.warn(n.message)}}}async function ap(t,e){try{const s=(await B_()).transaction(qr,"readwrite");return await s.objectStore(qr).put(e,j_(t)),s.done}catch(n){if(n instanceof Rn)js.warn(n.message);else{const s=rs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});js.warn(s.message)}}}function j_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=1024,uC=30*24*60*60*1e3;class hC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=uC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cp(),{heartbeatsToSend:n,unsentEntries:s}=dC(this._heartbeatsCache.heartbeats),i=Sa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cp(){return new Date().toISOString().substring(0,10)}function dC(t,e=lC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),lp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L_()?Jb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lp(t){return Sa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){Tn(new ln("platform-logger",e=>new k0(e),"PRIVATE")),Tn(new ln("heartbeat",e=>new hC(e),"PRIVATE")),Lt(_u,op,t),Lt(_u,op,"esm2017"),Lt("fire-js","")}pC("");function Bh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function H_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gC=H_,q_=new Ki("auth","Firebase",H_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new uo("@firebase/auth");function ha(t,...e){up.logLevel<=fe.ERROR&&up.error(`Auth (${Xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw jh(t,...e)}function yn(t,...e){return jh(t,...e)}function W_(t,e,n){const s=Object.assign(Object.assign({},gC()),{[e]:n});return new Ki("auth","Firebase",s).create(e,{appName:t.name})}function mC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&qt(t,"argument-error"),W_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return q_.create(t,...e)}function Q(t,e,...n){if(!t)throw jh(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ha(e),new Error(e)}function $n(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Map;function Pn(t){$n(t instanceof Function,"Expected a class definition");let e=hp.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ka(r,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function yC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vC(){return dp()==="http:"||dp()==="https:"}function dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vC()||Yb()||"connection"in navigator)?navigator.onLine:!0}function EC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=Vh()||x_()}get(){return wC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new ho(3e4,6e4);function fo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function po(t,e,n,s,i={}){return z_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=zi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),K_.fetch()(G_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function z_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},TC),e);try{const i=new bC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Go(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Go(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Go(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Go(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw W_(t,u,l);qt(t,u)}}catch(i){if(i instanceof Rn)throw i;qt(t,"network-request-failed")}}async function go(t,e,n,s,i={}){const r=await po(t,e,n,s,i);return"mfaPendingCredential"in r&&qt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function G_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Hh(t.config,i):`${t.config.apiScheme}://${i}`}class bC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(yn(this.auth,"network-request-failed")),IC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Go(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=yn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){return po(t,"POST","/v1/accounts:delete",e)}async function SC(t,e){return po(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RC(t,e=!1){const n=Qe(t),s=await n.getIdToken(e),i=qh(s);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:br(kl(i.auth_time)),issuedAtTime:br(kl(i.iat)),expirationTime:br(kl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function kl(t){return Number(t)*1e3}function qh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ra(n);return i?JSON.parse(i):(ha("Failed to decode base64 JWT payload"),null)}catch(i){return ha("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function AC(t){const e=qh(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rn&&kC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function kC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Wr(t,SC(n,{idToken:s}));Q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?PC(r.providerUserInfo):[],a=DC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Q_(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function OC(t){const e=Qe(t);await Oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function PC(t){return t.map(e=>{var{providerId:n}=e,s=Bh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e){const n=await z_(t,{},async()=>{const s=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=G_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",K_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await xC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Kr;return s&&(Q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Us{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Bh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Q_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RC(this,e)}reload(){return OC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Oa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wr(this,CC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:P,isAnonymous:G,providerData:oe,stsTokenManager:ge}=n;Q(R&&ge,e,"internal-error");const j=Kr.fromJSON(this.name,ge);Q(typeof R=="string",e,"internal-error"),Gn(h,e.name),Gn(d,e.name),Q(typeof P=="boolean",e,"internal-error"),Q(typeof G=="boolean",e,"internal-error"),Gn(p,e.name),Gn(m,e.name),Gn(_,e.name),Gn(v,e.name),Gn(b,e.name),Gn(N,e.name);const be=new Us({uid:R,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:G,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:j,createdAt:b,lastLoginAt:N});return oe&&Array.isArray(oe)&&(be.providerData=oe.map(ve=>Object.assign({},ve))),v&&(be._redirectEventId=v),be}static async _fromIdTokenResponse(e,n,s=!1){const i=new Kr;i.updateFromServerResponse(n);const r=new Us({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Oa(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Y_.type="NONE";const fp=Y_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t,e,n){return`firebase:${t}:${e}:${n}`}class vi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=da(this.userKey,i.apiKey,r),this.fullPersistenceKey=da("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new vi(Pn(fp),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Pn(fp);const o=da(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Us._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new vi(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new vi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ty(e))return"Blackberry";if(ny(e))return"Webos";if(Wh(e))return"Safari";if((e.includes("chrome/")||J_(e))&&!e.includes("edge/"))return"Chrome";if(ey(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function X_(t=Tt()){return/firefox\//i.test(t)}function Wh(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function J_(t=Tt()){return/crios\//i.test(t)}function Z_(t=Tt()){return/iemobile/i.test(t)}function ey(t=Tt()){return/android/i.test(t)}function ty(t=Tt()){return/blackberry/i.test(t)}function ny(t=Tt()){return/webos/i.test(t)}function kc(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MC(t=Tt()){var e;return kc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LC(){return Xb()&&document.documentMode===10}function sy(t=Tt()){return kc(t)||ey(t)||ny(t)||ty(t)||/windows phone/i.test(t)||Z_(t)}function FC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e=[]){let n;switch(t){case"Browser":n=pp(Tt());break;case"Worker":n=`${pp(Tt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gp(this),this.idTokenSubscription=new gp(this),this.beforeStateQueue=new UC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qe(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Gi(t){return Qe(t)}class gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=r0(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $C(t,e,n){const s=Gi(t);Q(s._canInitEmulator,s,"emulator-config-failed"),Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=ry(e),{host:o,port:a}=BC(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jC()}function ry(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BC(t){const e=ry(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:mp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:mp(o)}}}function mp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function HC(t,e){return po(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return go(t,"POST","/v1/accounts:signInWithPassword",fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e){return go(t,"POST","/v1/accounts:signInWithEmailLink",fo(t,e))}async function KC(t,e){return go(t,"POST","/v1/accounts:signInWithEmailLink",fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends Kh{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new zr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return WC(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return HC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KC(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t,e){return go(t,"POST","/v1/accounts:signInWithIdp",fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="http://localhost";class Hs extends Kh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Bh(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Hs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,wi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:zC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QC(t){const e=pr(gr(t)).link,n=e?pr(gr(e)).deep_link_id:null,s=pr(gr(t)).deep_link_id;return(s?pr(gr(s)).link:null)||s||n||e||t}class zh{constructor(e){var n,s,i,r,o,a;const c=pr(gr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=GC((i=c.mode)!==null&&i!==void 0?i:null);Q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=QC(e);try{return new zh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.providerId=Qi.PROVIDER_ID}static credential(e,n){return zr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zh.parseLink(n);return Q(s,"argument-error"),zr._fromEmailAndCode(e,s.code,s.tenantId)}}Qi.PROVIDER_ID="password";Qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Gh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends mo{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hs._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Xt.credential(n,s)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends mo{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends mo{constructor(){super("twitter.com")}static credential(e,n){return Hs._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return es.credential(n,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e){return go(t,"POST","/v1/accounts:signUp",fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Us._fromIdTokenResponse(e,s,i),o=_p(s);return new qs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=_p(s);return new qs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function _p(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends Rn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Da(e,n,s,i)}}function oy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(t,r,e,s):r})}async function XC(t,e,n=!1){const s=await Wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Wr(t,oy(s,i,e,t),n);Q(r.idToken,s,"internal-error");const o=qh(r.idToken);Q(o,s,"internal-error");const{sub:a}=o;return Q(t.uid===a,s,"user-mismatch"),qs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&qt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(t,e,n=!1){const s="signIn",i=await oy(t,s,e),r=await qs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function ZC(t,e){return ay(Gi(t),e)}async function eS(t,e,n){const s=Gi(t),i=await YC(s,{returnSecureToken:!0,email:e,password:n}),r=await qs._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function tS(t,e,n){return ZC(Qe(t),Qi.credential(e,n))}function nS(t,e,n,s){return Qe(t).onIdTokenChanged(e,n,s)}function sS(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function cy(t,e,n,s){return Qe(t).onAuthStateChanged(e,n,s)}function iS(t){return Qe(t).signOut()}const Pa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pa,"1"),this.storage.removeItem(Pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(){const t=Tt();return Wh(t)||kc(t)}const oS=1e3,aS=10;class uy extends ly{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rS()&&FC(),this.fallbackToPolling=sy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);LC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},oS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uy.type="LOCAL";const cS=uy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends ly{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hy.type="SESSION";const dy=hy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Nc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await lS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Qh("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function hS(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function dS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pS(){return fy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="firebaseLocalStorageDb",gS=1,xa="firebaseLocalStorage",gy="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oc(t,e){return t.transaction([xa],e?"readwrite":"readonly").objectStore(xa)}function mS(){const t=indexedDB.deleteDatabase(py);return new _o(t).toPromise()}function Eu(){const t=indexedDB.open(py,gS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(xa,{keyPath:gy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(xa)?e(s):(s.close(),await mS(),e(await Eu()))})})}async function yp(t,e,n){const s=Oc(t,!0).put({[gy]:e,value:n});return new _o(s).toPromise()}async function _S(t,e){const n=Oc(t,!1).get(e),s=await new _o(n).toPromise();return s===void 0?null:s.value}function vp(t,e){const n=Oc(t,!0).delete(e);return new _o(n).toPromise()}const yS=800,vS=3;class my{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nc._getInstance(pS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dS(),!this.activeServiceWorker)return;this.sender=new uS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eu();return await yp(e,Pa,"1"),await vp(e,Pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>yp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_S(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Oc(i,!1).getAll();return new _o(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}my.type="LOCAL";const wS=my;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function TS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=yn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",ES().appendChild(s)})}function IS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e){return e?Pn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends Kh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bS(t){return ay(t.auth,new Yh(t),t.bypassAuthState)}function CS(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),JC(n,new Yh(t),t.bypassAuthState)}async function SS(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),XC(n,new Yh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bS;case"linkViaPopup":case"linkViaRedirect":return SS;case"reauthViaPopup":case"reauthViaRedirect":return CS;default:qt(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new ho(2e3,1e4);async function AS(t,e,n){const s=Gi(t);mC(t,e,Gh);const i=_y(s,n);return new ks(s,"signInViaPopup",e,i).executeNotNull()}class ks extends yy{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,RS.get())};e()}}ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="pendingRedirect",fa=new Map;class NS extends yy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=fa.get(this.auth._key());if(!e){try{const s=await OS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}fa.set(this.auth._key(),e)}return this.bypassAuthState||fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OS(t,e){const n=xS(e),s=PS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function DS(t,e){fa.set(t._key(),e)}function PS(t){return Pn(t._redirectPersistence)}function xS(t){return da(kS,t.config.apiKey,t.name)}async function MS(t,e,n=!1){const s=Gi(t),i=_y(s,e),o=await new NS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=10*60*1e3;class FS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!US(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!vy(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LS&&this.cachedEventUids.clear(),this.cachedEventUids.has(wp(e))}saveEventToCache(e){this.cachedEventUids.add(wp(e)),this.lastProcessedEventTime=Date.now()}}function wp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function US(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e={}){return po(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BS=/^https?/;async function jS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VS(t);for(const n of e)try{if(HS(n))return}catch{}qt(t,"unauthorized-domain")}function HS(t){const e=wu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!BS.test(n))return!1;if($S.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=new ho(3e4,6e4);function Ep(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WS(t){return new Promise((e,n)=>{var s,i,r;function o(){Ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ep(),n(yn(t,"network-request-failed"))},timeout:qS.get()})}if(!((i=(s=vn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=vn().gapi)===null||r===void 0)&&r.load)o();else{const a=IS("iframefcb");return vn()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},TS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pa=null,e})}let pa=null;function KS(t){return pa=pa||WS(t),pa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new ho(5e3,15e3),GS="__/auth/iframe",QS="emulator/auth/iframe",YS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JS(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hh(e,QS):`https://${t.config.authDomain}/${GS}`,s={apiKey:e.apiKey,appName:t.name,v:Xs},i=XS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${zi(s).slice(1)}`}async function ZS(t){const e=await KS(t),n=vn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:JS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=vn().setTimeout(()=>{r(o)},zS.get());function c(){vn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tR=500,nR=600,sR="_blank",iR="http://localhost";class Tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rR(t,e,n,s=tR,i=nR){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},eR),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Tt().toLowerCase();n&&(a=J_(l)?sR:n),X_(l)&&(e=e||iR,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(MC(l)&&a!=="_self")return oR(e||"",a),new Tp(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new Tp(h)}function oR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="__/auth/handler",cR="emulator/auth/handler";function Ip(t,e,n,s,i,r){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Xs,eventId:i};if(e instanceof Gh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof mo){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${lR(t)}?${zi(a).slice(1)}`}function lR({config:t}){return t.emulator?Hh(t,cR):`https://${t.authDomain}/${aR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="webStorageSupport";class uR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dy,this._completeRedirectFn=MS,this._overrideRedirectResult=DS}async _openPopup(e,n,s,i){var r;$n((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ip(e,n,s,wu(),i);return rR(e,o,Qh())}async _openRedirect(e,n,s,i){return await this._originValidation(e),hS(Ip(e,n,s,wu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):($n(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ZS(e),s=new FS(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nl,{type:Nl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Nl];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sy()||Wh()||kc()}}const hR=uR;var bp="@firebase/auth",Cp="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pR(t){Tn(new ln("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{Q(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iy(t)},u=new VC(a,c,l);return yC(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Tn(new ln("auth-internal",e=>{const n=Gi(e.getProvider("auth").getImmediate());return(s=>new dR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(bp,Cp,fR(t)),Lt(bp,Cp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=5*60,mR=D_("authIdTokenMaxAge")||gR;let Sp=null;const _R=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>mR)return;const i=n==null?void 0:n.token;Sp!==i&&(Sp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yR(t=Ac()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_C(t,{popupRedirectResolver:hR,persistence:[wS,cS,dy]}),s=D_("authTokenSyncURL");if(s){const r=_R(s);sS(n,r,()=>r(n.currentUser)),nS(n,o=>r(o))}const i=N_("auth");return i&&$C(n,`http://${i}`),n}pR("Browser");var vR="firebase",wR="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(vR,wR,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="firebasestorage.googleapis.com",ER="storageBucket",TR=2*60*1e3,IR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Rn{constructor(e,n,s=0){super(Ol(e),`Firebase Storage: ${n} (${Ol(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,An.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ol(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var In;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(In||(In={}));function Ol(t){return"storage/"+t}function bR(){const t="An unknown error occurred, please check the error payload for server response.";return new An(In.UNKNOWN,t)}function CR(){return new An(In.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SR(){return new An(In.CANCELED,"User canceled the upload/download.")}function RR(t){return new An(In.INVALID_URL,"Invalid URL '"+t+"'.")}function AR(t){return new An(In.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Rp(t){return new An(In.INVALID_ARGUMENT,t)}function Ey(){return new An(In.APP_DELETED,"The Firebase app was deleted.")}function kR(t){return new An(In.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(s.path==="")return s;throw AR(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},_=n===wy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",b=new RegExp(`^https?://${_}/${i}/${v}`,"i"),R=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<R.length;P++){const G=R[P],oe=G.regex.exec(e);if(oe){const ge=oe[G.indices.bucket];let j=oe[G.indices.path];j||(j=""),s=new en(ge,j),G.postModify(s);break}}if(s==null)throw RR(e);return s}}class NR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function d(){r&&clearTimeout(r)}function p(v,...b){if(l){d();return}if(v){d(),u.call(null,v,...b);return}if(c()||o){d(),u.call(null,v,...b);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let m=!1;function _(v){m||(m=!0,d(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function DR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){return t!==void 0}function Ap(t,e,n,s){if(s<e)throw Rp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Rp(`Invalid value for '${t}'. Expected ${n} or less.`)}function xR(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ma;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ma||(Ma={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Qo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ma.NO_ERROR,c=r.getStatus();if(!a||MR(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ma.ABORT;s(!1,new Qo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Qo(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());PR(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=bR();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Ey():SR();o(c)}else{const c=CR();o(c)}};this.canceled_?n(!1,new Qo(!1,null,!0)):this.backoffId_=OR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function FR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $R(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BR(t,e,n,s,i,r,o=!0){const a=xR(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return VR(l,e),FR(l,n),UR(l,r),$R(l,s),new LR(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new La(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HR(this._location.path)}get storage(){return this._service}get parent(){const e=jR(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new La(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kR(e)}}function kp(t,e){const n=e==null?void 0:e[ER];return n==null?null:en.makeFromBucketSpec(n,t)}function qR(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:P_(i,t.app.options.projectId))}class WR{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=wy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TR,this._maxUploadRetryTime=IR,this._requests=new Set,i!=null?this._bucket=en.makeFromBucketSpec(i,this._host):this._bucket=kp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=kp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ap("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ap("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new La(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new NR(Ey());{const o=BR(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Np="@firebase/storage",Op="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="storage";function KR(t=Ac(),e){t=Qe(t);const s=Rc(t,Ty).getImmediate({identifier:e}),i=O_("storage");return i&&zR(s,...i),s}function zR(t,e,n,s={}){qR(t,e,n,s)}function GR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new WR(n,s,i,e,Xs)}function QR(){Tn(new ln(Ty,GR,"PUBLIC").setMultipleInstances(!0)),Lt(Np,Op,""),Lt(Np,Op,"esm2017")}QR();const Iy=$_({apiKey:"AIzaSyCoPqZnu451zJ_cU4f2EYLZvFnMcuZNBu0",authDomain:"proyectovue-90870.firebaseapp.com",projectId:"proyectovue-90870",storageBucket:"proyectovue-90870.appspot.com",messagingSenderId:"9930652447",appId:"1:9930652447:web:1f404d404399b743ff4e2a",measurementId:"G-LQFT8RQT7F"}),ki=yR(Iy);KR(Iy);const Yi=t=>(Dh("data-v-3adc7728"),t=t(),Ph(),t),YR=Yi(()=>E("div",{class:"loading show"},[E("div",{class:"spin"})],-1)),XR=Yi(()=>E("br",null,null,-1)),JR=Yi(()=>E("br",null,null,-1)),ZR=Yi(()=>E("p",null,"Raúl Escudero López",-1)),eA=Yi(()=>E("a",{href:"#"},"Politica de Privacidad",-1)),tA=Yi(()=>E("a",{href:"#"},"rauescucompany@gmail.com",-1)),nA={__name:"App",setup(t){let e=sn("");function n(){iS(ki).then(()=>{e.value="",router.push("/inicio.vue")}).catch(i=>{})}cy(ki,i=>{i&&(i.uid,e.value=i.email)});var s=(i=0)=>{let r=null;const o=i;let a=[],c=0,l=0;function u(){l+=1,l===c&&h()}function h(){r!==null&&(r.classList.remove("show"),setTimeout(function(){r.remove()},o))}function d(){document.addEventListener("DOMContentLoaded",function(){r=document.querySelector(".loading"),a=Array.from(document.images),c=a.length,a.length===0?h():a.forEach(function(p){p.addEventListener("load",u,!1)})})}return{init:d}};return s(1e3).init(),(i,r)=>{const o=Ko("router-link"),a=Ko("router-view"),c=Ko("v-footer"),l=Ko("v-app");return De(),$e(Me,null,[YR,ze(l,null,{default:fn(()=>[E("nav",null,[xe(Ye(_e(e))+" | ",1),ze(o,{to:"/"},{default:fn(()=>[xe("Inicio")]),_:1}),xe(" | "),ze(o,{to:"/ofimatica"},{default:fn(()=>[xe("Ofimatica")]),_:1}),xe(" | "),ze(o,{to:"/programacion"},{default:fn(()=>[xe("Programacion")]),_:1}),xe(" | "),ze(o,{to:"/sos"},{default:fn(()=>[xe("SOs")]),_:1}),xe(" | "),_e(e)!=""?(De(),la(o,{key:0,to:"/administracion"},{default:fn(()=>[xe(" Administracion")]),_:1})):zo("",!0),xe(" | "),_e(e)==""?(De(),la(o,{key:1,to:"/login"},{default:fn(()=>[xe(" Login")]),_:1})):zo("",!0),xe(" | "),_e(e)!=""?(De(),$e("button",{key:2,id:"salir",onClick:n}," Salir")):zo("",!0),xe(" | "),_e(e)==""?(De(),la(o,{key:3,to:"/registro"},{default:fn(()=>[xe("Registro")]),_:1})):zo("",!0)]),E("main",null,[XR,JR,ze(a)]),ze(c,null,{default:fn(()=>[ZR,eA,xe("   ||   "),tA]),_:1})]),_:1})],64)}}},sA=Fh(nA,[["__scopeId","data-v-3adc7728"]]);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=new Map,rA={activated:!1,tokenObservers:[]};function bn(t){return iA.get(t)||Object.assign({},rA)}const Dp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new jr,await aA(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new jr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function aA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Fa=new Ki("appCheck","AppCheck",cA);function lA(t){if(!bn(t).activated)throw Fa.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="firebase-app-check-database",hA=1,Tu="firebase-app-check-store";let Yo=null;function dA(){return Yo||(Yo=new Promise((t,e)=>{try{const n=indexedDB.open(uA,hA);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Fa.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Tu,{keyPath:"compositeKey"})}}}catch(n){e(Fa.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Yo)}function fA(t,e){return pA(gA(t),e)}async function pA(t,e){const s=(await dA()).transaction(Tu,"readwrite"),r=s.objectStore(Tu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Fa.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function gA(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new uo("@firebase/app-check");function Pp(t,e){return L_()?fA(t,e).catch(n=>{Iu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={error:"UNKNOWN_ERROR"};function _A(t){return Cc.encodeString(JSON.stringify(t),!1)}async function bu(t,e=!1){const n=t.app;lA(n);const s=bn(n);let i=s.token,r;if(i&&!mr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(mr(c)?i=c:await Pp(n,void 0))}if(!e&&i&&mr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await bn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Iu.warn(c.message):Iu.error(c),r=c}let a;return i?r?mr(i)?a={token:i.token,internalError:r}:a=Mp(r):(a={token:i.token},s.token=i,await Pp(n,i)):a=Mp(r),o&&wA(n,a),a}function yA(t,e,n,s){const{app:i}=t,r=bn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&mr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),xp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>xp(t))}function by(t,e){const n=bn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function xp(t){const{app:e}=t,n=bn(e);let s=n.tokenRefresher;s||(s=vA(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function vA(t){const{app:e}=t;return new oA(async()=>{const n=bn(e);let s;if(n.token?s=await bu(t,!0):s=await bu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=bn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Dp.RETRIAL_MIN_WAIT,Dp.RETRIAL_MAX_WAIT)}function wA(t,e){const n=bn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function mr(t){return t.expireTimeMillis-Date.now()>0}function Mp(t){return{token:_A(mA),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=bn(this.app);for(const n of e)by(this.app,n.next);return Promise.resolve()}}function TA(t,e){return new EA(t,e)}function IA(t){return{getToken:e=>bu(t,e),addTokenListener:e=>yA(t,"INTERNAL",e),removeTokenListener:e=>by(t.app,e)}}const bA="@firebase/app-check",CA="0.6.3",SA="app-check",Lp="app-check-internal";function RA(){Tn(new ln(SA,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return TA(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Lp).initialize()})),Tn(new ln(Lp,t=>{const e=t.getProvider("app-check").getImmediate();return IA(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Lt(bA,CA)}RA();const AA=Symbol("firebaseApp");function Xh(t){return Ic()&&rn(AA,null)||Ac(t)}const xn=()=>{};function Jh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function kA(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Js(t){return!!t&&typeof t=="object"}const NA=Object.prototype;function OA(t){return Js(t)&&Object.getPrototypeOf(t)===NA}function Zh(t){return Js(t)&&t.type==="document"}function DA(t){return Js(t)&&t.type==="collection"}function PA(t){return Zh(t)||DA(t)}function xA(t){return Js(t)&&t.type==="query"}function MA(t){return Js(t)&&"ref"in t}function LA(t){return Js(t)&&typeof t.bucket=="string"}function FA(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function UA(){return!!(Ic()&&rn(b_,null))}const Fp="@firebase/database",Up="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cy="";function VA(t){Cy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $A(e)}}catch{}return new BA},Ns=Sy("localStorage"),Cu=Sy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new uo("@firebase/database"),jA=function(){let t=1;return function(){return t++}}(),Ry=function(t){const e=l0(t),n=new i0;n.update(e);const s=n.digest();return Cc.encodeByteArray(s)},yo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=yo.apply(null,s):typeof s=="object"?e+=at(s):e+=s,e+=" "}return e};let Vs=null,Vp=!0;const HA=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ei.logLevel=fe.VERBOSE,Vs=Ei.log.bind(Ei),e&&Cu.set("logging_enabled",!0)):typeof t=="function"?Vs=t:(Vs=null,Cu.remove("logging_enabled"))},ft=function(...t){if(Vp===!0&&(Vp=!1,Vs===null&&Cu.get("logging_enabled")===!0&&HA(!0)),Vs){const e=yo.apply(null,t);Vs(e)}},vo=function(t){return function(...e){ft(t,...e)}},Su=function(...t){const e="FIREBASE INTERNAL ERROR: "+yo(...t);Ei.error(e)},Ws=function(...t){const e=`FIREBASE FATAL ERROR: ${yo(...t)}`;throw Ei.error(e),new Error(e)},Ft=function(...t){const e="FIREBASE WARNING: "+yo(...t);Ei.warn(e)},qA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ft("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ay=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},WA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ni="[MIN_NAME]",Ks="[MAX_NAME]",Xi=function(t,e){if(t===e)return 0;if(t===Ni||e===Ks)return-1;if(e===Ni||t===Ks)return 1;{const n=$p(t),s=$p(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},KA=function(t,e){return t===e?0:t<e?-1:1},ar=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+at(e))},ed=function(t){if(typeof t!="object"||t===null)return at(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=at(e[s]),n+=":",n+=ed(t[e[s]]);return n+="}",n},ky=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ny=function(t){x(!Ay(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},zA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},QA=new RegExp("^-?(0*)\\d{1,10}$"),YA=-2147483648,XA=2147483647,$p=function(t){if(QA.test(t)){const e=Number(t);if(e>=YA&&e<=XA)return e}return null},wo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ft("Exception was thrown by user callback.",n),e},Math.floor(0))}},JA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ft(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ft(e)}}class Ru{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ru.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="5",Oy="v",Dy="s",Py="r",xy="f",My=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ly="ls",Fy="p",Au="ac",Uy="websocket",Vy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ns.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ns.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $y(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===Uy)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vy)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nk(t)&&(n.ns=t.namespace);const i=[];return Wt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.counters_={}}incrementCounter(e,n=1){Kn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl={},Pl={};function nd(t){const e=t.toString();return Dl[e]||(Dl[e]=new sk),Dl[e]}function ik(t,e){const n=t.toString();return Pl[n]||(Pl[n]=e()),Pl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&wo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="start",ok="close",ak="pLPCommand",ck="pRTLPCB",By="id",jy="pw",Hy="ser",lk="cb",uk="seg",hk="ts",dk="d",fk="dframe",qy=1870,Wy=30,pk=qy-Wy,gk=25e3,mk=3e4;class hi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vo(e),this.stats_=nd(n),this.urlFn=c=>(this.appCheckToken&&(c[Au]=this.appCheckToken),$y(n,Vy,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mk)),WA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sd((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bp)this.id=a,this.password=c;else if(o===ok)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Bp]="t",s[Hy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[lk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Oy]=td,this.transportSessionId&&(s[Dy]=this.transportSessionId),this.lastSessionId&&(s[Ly]=this.lastSessionId),this.applicationId&&(s[Fy]=this.applicationId),this.appCheckToken&&(s[Au]=this.appCheckToken),typeof location<"u"&&location.hostname&&My.test(location.hostname)&&(s[Py]=xy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hi.forceAllow_=!0}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){return hi.forceAllow_?!0:!hi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zA()&&!GA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=A_(n),i=ky(s,pk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[fk]="t",s[By]=e,s[jy]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=at(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sd{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jA(),window[ak+this.uniqueCallbackIdentifier]=e,window[ck+this.uniqueCallbackIdentifier]=n,this.myIFrame=sd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[By]=this.myID,e[jy]=this.myPW,e[Hy]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wy+s.length<=qy;){const o=this.pendingSegs.shift();s=s+"&"+uk+i+"="+o.seg+"&"+hk+i+"="+o.ts+"&"+dk+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(gk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=16384,yk=45e3;let Ua=null;typeof MozWebSocket<"u"?Ua=MozWebSocket:typeof WebSocket<"u"&&(Ua=WebSocket);class Jt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vo(this.connId),this.stats_=nd(n),this.connURL=Jt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Oy]=td,typeof location<"u"&&location.hostname&&My.test(location.hostname)&&(o[Py]=xy),n&&(o[Dy]=n),s&&(o[Ly]=s),i&&(o[Au]=i),r&&(o[Fy]=r),$y(e,Uy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ns.set("previous_websocket_failure",!0);try{let s;M_(),this.mySock=new Ua(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ua!==null&&!Jt.forceDisallow_}static previouslyFailed(){return Ns.isInMemoryStorage||Ns.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ns.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Hr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ky(n,_k);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2;Jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hi,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Jt&&Jt.isAvailable();let s=n&&!Jt.previouslyFailed();if(e.webSocketOnly&&(n||Ft("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Jt];else{const i=this.transports_=[];for(const r of Gr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Gr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=6e4,wk=5e3,Ek=10*1024,Tk=100*1024,xl="t",jp="d",Ik="s",Hp="r",bk="e",qp="o",Wp="a",Kp="n",zp="p",Ck="h";class Sk{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vo("c:"+this.id+":"),this.transportManager_=new Gr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Cr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Tk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ek?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xl in e){const n=e[xl];n===Wp?this.upgradeIfSecondaryHealthy_():n===Hp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ar("t",e),s=ar("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ar("t",e),s=ar("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ar(xl,e);if(jp in e){const s=e[jp];if(n===Ck){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Kp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ik?this.onConnectionShutdown_(s):n===Hp?this.onReset_(s):n===bk?Su("Server Error: "+s):n===qp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Su("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),td!==s&&Ft("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Cr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ns.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends zy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Va}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=32,Qp=768;class Pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new Pe("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function us(t){return t.pieces_.length-t.pieceNum_}function Oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Pe(t.pieces_,e)}function Gy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Rk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Yy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Pe(e,0)}function it(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Pe(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function Bt(t,e){const n=le(t),s=le(e);if(n===null)return e;if(n===s)return Bt(Oe(t),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xy(t,e){if(us(t)!==us(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function tn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(us(t)>us(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ak{constructor(e,n){this.errorPrefix_=n,this.parts_=Qy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Sc(this.parts_[s]);Jy(this)}}function kk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sc(e),Jy(t)}function Nk(t){const e=t.parts_.pop();t.byteLength_-=Sc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jy(t){if(t.byteLength_>Qp)throw new Error(t.errorPrefix_+"has a key path longer than "+Qp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gp+") or object contains a cycle "+Is(t))}function Is(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends zy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new id}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=1e3,Ok=60*5*1e3,Yp=30*1e3,Dk=1.3,Pk=3e4,xk="server_kill",Xp=3;class Fn extends Ky{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Fn.nextPersistentConnectionId_++,this.log_=vo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=cr,this.maxReconnectDelay_=Ok,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!M_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");id.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Va.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(at(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new jr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Fn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kn(e,"w")){const s=Ai(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ft(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||s0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=n0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Su("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Pk&&(this.reconnectDelay_=cr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Sk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ft(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(xk)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ft(h),c())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pu(this.interruptReasons_)&&(this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ed(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xp&&(this.reconnectDelay_=Yp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cy.replace(/\./g,"-")]=1,Vh()?e["framework.cordova"]=1:x_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Va.getInstance().currentlyOnline();return pu(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ue(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ue(Ni,e),i=new ue(Ni,n);return this.compare(s,i)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;class Zy extends Dc{static get __EMPTY_NODE(){return Xo}static set __EMPTY_NODE(e){Xo=e}compare(e,n){return Xi(e.name,n.name)}isDefinedOn(e){throw Wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Ks,Xo)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Xo)}toString(){return".key"}}const Ti=new Zy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class st{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??st.RED,this.left=i??kt.EMPTY_NODE,this.right=r??kt.EMPTY_NODE}copy(e,n,s,i,r){return new st(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return kt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}st.RED=!0;st.BLACK=!1;class Mk{copy(e,n,s,i,r){return this}insert(e,n,s){return new st(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kt{constructor(e,n=kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,st.BLACK,null,null))}remove(e){return new kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,st.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Jo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Jo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Jo(this.root_,null,this.comparator_,!0,e)}}kt.EMPTY_NODE=new Mk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t,e){return Xi(t.name,e.name)}function rd(t,e){return Xi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku;function Fk(t){ku=t}const ev=function(t){return typeof t=="number"?"number:"+Ny(t):"string:"+t},tv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kn(e,".sv"),"Priority must be a string or number.")}else x(t===ku||t.isEmpty(),"priority of unexpected type.");x(t===ku||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jp;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tv(this.priorityNode_)}static set __childrenNodeConstructor(e){Jp=e}static get __childrenNodeConstructor(){return Jp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:le(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=le(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||us(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ev(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ny(this.value_):e+=this.value_,this.lazyHash_=Ry(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),r=tt.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nv,sv;function Uk(t){nv=t}function Vk(t){sv=t}class $k extends Dc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Xi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Ks,new tt("[PRIORITY-POST]",sv))}makePost(e,n){const s=nv(e);return new ue(n,new tt("[PRIORITY-POST]",s))}toString(){return".priority"}}const yt=new $k;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=Math.log(2);class jk{constructor(e){const n=r=>parseInt(Math.log(r)/Bk,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $a=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new st(d,h.node,st.BLACK,null,null);{const p=parseInt(u/2,10)+c,m=i(c,p),_=i(p+1,l);return h=t[p],d=n?n(h):h,new st(d,h.node,st.BLACK,m,_)}},r=function(c){let l=null,u=null,h=t.length;const d=function(m,_){const v=h-m,b=h;h-=m;const N=i(v+1,b),R=t[v],P=n?n(R):R;p(new st(P,R.node,_,null,N))},p=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),v=Math.pow(2,c.count-(m+1));_?d(v,st.BLACK):(d(v,st.BLACK),d(v,st.RED))}return u},o=new jk(t.length),a=r(o);return new kt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml;const oi={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(oi&&yt,"ChildrenNode.ts has not been loaded"),Ml=Ml||new Mn({".priority":oi},{".priority":yt}),Ml}get(e){const n=Ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kt?n:null}hasIndex(e){return Kn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ue.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=$a(s,e.getCompare()):a=oi;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Mn(u,l)}addToIndexes(e,n){const s=Aa(this.indexes_,(i,r)=>{const o=Ai(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===oi)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ue.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),$a(a,o.getCompare())}else return oi;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new ue(e.name,a))),c.insert(e,e.node)}});return new Mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Aa(this.indexes_,i=>{if(i===oi)return i;{const r=n.get(e.name);return r?i.remove(new ue(e.name,r)):i}});return new Mn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr;class ye{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&tv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return lr||(lr=new ye(new kt(rd),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lr}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?lr:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ue(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?lr:this.priorityNode_;return new ye(i,o,r)}}updateChild(e,n){const s=le(e);if(s===null)return n;{x(le(e)!==".priority"||us(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Oe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(yt,(o,a)=>{n[o]=a.val(e),s++,r&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ev(this.getPriority().val())+":"),this.forEachChild(yt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ry(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ue(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Eo?-1:0}withIndex(e){if(e===Ti||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(yt),i=n.getIterator(yt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ti?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Hk extends ye{constructor(){super(new kt(rd),ye.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const Eo=new Hk;Object.defineProperties(ue,{MIN:{value:new ue(Ni,ye.EMPTY_NODE)},MAX:{value:new ue(Ks,Eo)}});Zy.__EMPTY_NODE=ye.EMPTY_NODE;tt.__childrenNodeConstructor=ye;Fk(Eo);Vk(Eo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=!0;function pt(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,pt(e))}if(!(t instanceof Array)&&qk){const n=[];let s=!1;if(Wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=pt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new ue(o,c)))}}),n.length===0)return ye.EMPTY_NODE;const r=$a(n,Lk,o=>o.name,rd);if(s){const o=$a(n,yt.getCompare());return new ye(r,pt(e),new Mn({".priority":o},{".priority":yt}))}else return new ye(r,pt(e),Mn.Default)}else{let n=ye.EMPTY_NODE;return Wt(t,(s,i)=>{if(Kn(t,s)&&s.substring(0,1)!=="."){const r=pt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(pt(e))}}Uk(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk extends Dc{constructor(e){super(),this.indexPath_=e,x(!ae(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Xi(e.name,n.name):r}makePost(e,n){const s=pt(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,Eo);return new ue(Ks,e)}toString(){return Qy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk extends Dc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Xi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const s=pt(e);return new ue(n,s)}toString(){return".value"}}const zk=new Kk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){return{type:"value",snapshotNode:t}}function Qk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Yk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Xk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=yt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ni}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ks}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===yt}copy(){const e=new od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===yt?n="$priority":t.index_===zk?n="$value":t.index_===Ti?n="$key":(x(t.index_ instanceof Wk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=at(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=at(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+at(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=at(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+at(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function tg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==yt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Ky{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=vo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ba.getListenId_(e,s),a={};this.listens_[o]=a;const c=eg(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),Ai(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=Ba.getListenId_(e,n);delete this.listens_[s]}get(e){const n=eg(e._queryParams),s=e._path.toString(),i=new jr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Hr(a.responseText)}catch{Ft("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Ft("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(){return{value:null,children:new Map}}function iv(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=le(e);t.children.has(s)||t.children.set(s,ja());const i=t.children.get(s);e=Oe(e),iv(i,e,n)}}function Nu(t,e,n){t.value!==null?n(e,t.value):Zk(t,(s,i)=>{const r=new Pe(e.toString()+"/"+s);Nu(i,r,n)})}function Zk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Wt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=10*1e3,tN=30*1e3,nN=5*60*1e3;class sN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new eN(e);const s=ng+(tN-ng)*Math.random();Cr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Wt(e,(i,r)=>{r>0&&Kn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Cr(this.reportStats_.bind(this),Math.floor(Math.random()*2*nN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _n;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_n||(_n={}));function rv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ov(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function av(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=_n.ACK_USER_WRITE,this.source=rv()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Pe(e));return new Ha(Ie(),n,this.revert)}}else return x(le(this.path)===e,"operationForChild called for unrelated child."),new Ha(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=_n.OVERWRITE}operationForChild(e){return ae(this.path)?new zs(this.source,Ie(),this.snap.getImmediateChild(e)):new zs(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=_n.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new Pe(e));return n.isEmpty()?null:n.value?new zs(this.source,Ie(),n.value):new Qr(this.source,Ie(),n)}else return x(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qr(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function iN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Xk(o.childName,o.snapshotNode))}),ur(t,i,"child_removed",e,s,n),ur(t,i,"child_added",e,s,n),ur(t,i,"child_moved",r,s,n),ur(t,i,"child_changed",e,s,n),ur(t,i,"value",e,s,n),i}function ur(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>oN(t,a,c)),o.forEach(a=>{const c=rN(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function rN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oN(t,e,n){if(e.childName==null||n.childName==null)throw Wi("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),i=new ue(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t,e){return{eventCache:t,serverCache:e}}function Sr(t,e,n,s){return cv(new ad(e,n,s),t.serverCache)}function lv(t,e,n,s){return cv(t.eventCache,new ad(e,n,s))}function Ou(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ll;const aN=()=>(Ll||(Ll=new kt(KA)),Ll);class ke{constructor(e,n=aN()){this.value=e,this.children=n}static fromObject(e){let n=new ke(null);return Wt(e,(s,i)=>{n=n.set(new Pe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(ae(e))return null;{const s=le(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Oe(e),n);return r!=null?{path:it(new Pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=le(e),s=this.children.get(n);return s!==null?s.subtree(Oe(e)):new ke(null)}}set(e,n){if(ae(e))return new ke(n,this.children);{const s=le(e),r=(this.children.get(s)||new ke(null)).set(Oe(e),n),o=this.children.insert(s,r);return new ke(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=le(e),s=this.children.get(n);if(s){const i=s.remove(Oe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ke(null):new ke(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=le(e),s=this.children.get(n);return s?s.get(Oe(e)):null}}setTree(e,n){if(ae(e))return n;{const s=le(e),r=(this.children.get(s)||new ke(null)).setTree(Oe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ke(this.value,o)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(it(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ae(e))return null;{const r=le(e),o=this.children.get(r);return o?o.findOnPath_(Oe(e),it(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const i=le(e),r=this.children.get(i);return r?r.foreachOnPath_(Oe(e),it(n,i),s):new ke(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(it(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new ke(null))}}function Rr(t,e,n){if(ae(e))return new an(new ke(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Bt(i,e);return r=r.updateChild(o,n),new an(t.writeTree_.set(i,r))}else{const i=new ke(n),r=t.writeTree_.setTree(e,i);return new an(r)}}}function sg(t,e,n){let s=t;return Wt(n,(i,r)=>{s=Rr(s,it(e,i),r)}),s}function ig(t,e){if(ae(e))return an.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new an(n)}}function Du(t,e){return Zs(t,e)!=null}function Zs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bt(n.path,e)):null}function rg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(yt,(s,i)=>{e.push(new ue(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ue(s,i.value))}),e}function os(t,e){if(ae(e))return t;{const n=Zs(t,e);return n!=null?new an(new ke(n)):new an(t.writeTree_.subtree(e))}}function Pu(t){return t.writeTree_.isEmpty()}function Oi(t,e){return uv(Ie(),t.writeTree_,e)}function uv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=uv(it(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(it(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e){return mv(e,t)}function cN(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Rr(t.visibleWrites,e,n)),t.lastWriteId=s}function lN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function uN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&hN(a,s.path)?i=!1:tn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return dN(t),!0;if(s.snap)t.visibleWrites=ig(t.visibleWrites,s.path);else{const a=s.children;Wt(a,c=>{t.visibleWrites=ig(t.visibleWrites,it(s.path,c))})}return!0}else return!1}function hN(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(it(t.path,n),e))return!0;return!1}function dN(t){t.visibleWrites=dv(t.allWrites,fN,Ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fN(t){return t.visible}function dv(t,e,n){let s=an.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)tn(n,o)?(a=Bt(n,o),s=Rr(s,a,r.snap)):tn(o,n)&&(a=Bt(o,n),s=Rr(s,Ie(),r.snap.getChild(a)));else if(r.children){if(tn(n,o))a=Bt(n,o),s=sg(s,a,r.children);else if(tn(o,n))if(a=Bt(o,n),ae(a))s=sg(s,Ie(),r.children);else{const c=Ai(r.children,le(a));if(c){const l=c.getChild(Oe(a));s=Rr(s,Ie(),l)}}}else throw Wi("WriteRecord should have .snap or .children")}}return s}function fv(t,e,n,s,i){if(!s&&!i){const r=Zs(t.visibleWrites,e);if(r!=null)return r;{const o=os(t.visibleWrites,e);if(Pu(o))return n;if(n==null&&!Du(o,Ie()))return null;{const a=n||ye.EMPTY_NODE;return Oi(o,a)}}}else{const r=os(t.visibleWrites,e);if(!i&&Pu(r))return n;if(!i&&n==null&&!Du(r,Ie()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(tn(l.path,e)||tn(e,l.path))},a=dv(t.allWrites,o,e),c=n||ye.EMPTY_NODE;return Oi(a,c)}}}function pN(t,e,n){let s=ye.EMPTY_NODE;const i=Zs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(yt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=os(t.visibleWrites,e);return n.forEachChild(yt,(o,a)=>{const c=Oi(os(r,new Pe(o)),a);s=s.updateImmediateChild(o,c)}),rg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=os(t.visibleWrites,e);return rg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function gN(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=it(e,n);if(Du(t.visibleWrites,r))return null;{const o=os(t.visibleWrites,r);return Pu(o)?i.getChild(n):Oi(o,i.getChild(n))}}function mN(t,e,n,s){const i=it(e,n),r=Zs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=os(t.visibleWrites,i);return Oi(o,s.getNode().getImmediateChild(n))}else return null}function _N(t,e){return Zs(t.visibleWrites,e)}function yN(t,e,n,s,i,r,o){let a;const c=os(t.visibleWrites,e),l=Zs(c,Ie());if(l!=null)a=l;else if(n!=null)a=Oi(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function vN(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function xu(t,e,n,s){return fv(t.writeTree,t.treePath,e,n,s)}function pv(t,e){return pN(t.writeTree,t.treePath,e)}function og(t,e,n,s){return gN(t.writeTree,t.treePath,e,n,s)}function qa(t,e){return _N(t.writeTree,it(t.treePath,e))}function wN(t,e,n,s,i,r){return yN(t.writeTree,t.treePath,e,n,s,i,r)}function cd(t,e,n){return mN(t.writeTree,t.treePath,e,n)}function gv(t,e){return mv(it(t.treePath,e),t.writeTree)}function mv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Zp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Yk(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Qk(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Zp(s,e.snapshotNode,i.oldSnap));else throw Wi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const _v=new TN;class ld{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ad(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gs(this.viewCache_),r=wN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function IN(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function bN(t,e,n,s,i){const r=new EN;let o,a;if(n.type===_n.OVERWRITE){const l=n;l.source.fromUser?o=Mu(t,e,l.path,l.snap,s,i,r):(x(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ae(l.path),o=Wa(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===_n.MERGE){const l=n;l.source.fromUser?o=SN(t,e,l.path,l.children,s,i,r):(x(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Lu(t,e,l.path,l.children,s,i,a,r))}else if(n.type===_n.ACK_USER_WRITE){const l=n;l.revert?o=kN(t,e,l.path,s,i,r):o=RN(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===_n.LISTEN_COMPLETE)o=AN(t,e,n.path,s,r);else throw Wi("Unknown operation type: "+n.type);const c=r.getChanges();return CN(e,o,c),{viewCache:o,changes:c}}function CN(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ou(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Gk(Ou(e)))}}function yv(t,e,n,s,i,r){const o=e.eventCache;if(qa(s,n)!=null)return e;{let a,c;if(ae(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Gs(e),u=l instanceof ye?l:ye.EMPTY_NODE,h=pv(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=xu(s,Gs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=le(n);if(l===".priority"){x(us(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=og(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Oe(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=og(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=cd(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Sr(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function Wa(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),p,null)}else{const p=le(n);if(!c.isCompleteForPath(n)&&us(n)>1)return e;const m=Oe(n),v=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=u.updatePriority(c.getNode(),v):l=u.updateChild(c.getNode(),p,v,m,_v,null)}const h=lv(e,l,c.isFullyInitialized()||ae(n),u.filtersNodes()),d=new ld(i,h,r);return yv(t,h,n,i,d,a)}function Mu(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new ld(i,e,r);if(ae(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Sr(e,l,!0,t.filter.filtersNodes());else{const h=le(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=Sr(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Oe(n),p=a.getNode().getImmediateChild(h);let m;if(ae(d))m=s;else{const _=u.getCompleteChild(h);_!=null?Gy(d)===".priority"&&_.getChild(Yy(d)).isEmpty()?m=_:m=_.updateChild(d,s):m=ye.EMPTY_NODE}if(p.equals(m))c=e;else{const _=t.filter.updateChild(a.getNode(),h,m,d,u,o);c=Sr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ag(t,e){return t.eventCache.isCompleteForChild(e)}function SN(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=it(n,c);ag(e,le(u))&&(a=Mu(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=it(n,c);ag(e,le(u))||(a=Mu(t,a,u,l,i,r,o))}),a}function cg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Lu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ae(n)?l=s:l=new ke(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=cg(t,p,d);c=Wa(t,c,new Pe(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),_=cg(t,m,d);c=Wa(t,c,new Pe(h),_,i,r,o,a)}}),c}function RN(t,e,n,s,i,r,o){if(qa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ae(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Wa(t,e,n,c.getNode().getChild(n),i,r,a,o);if(ae(n)){let l=new ke(null);return c.getNode().forEachChild(Ti,(u,h)=>{l=l.set(new Pe(u),h)}),Lu(t,e,n,l,i,r,a,o)}else return e}else{let l=new ke(null);return s.foreach((u,h)=>{const d=it(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Lu(t,e,n,l,i,r,a,o)}}function AN(t,e,n,s,i){const r=e.serverCache,o=lv(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return yv(t,o,n,s,_v,i)}function kN(t,e,n,s,i,r){let o;if(qa(s,n)!=null)return e;{const a=new ld(s,e,i),c=e.eventCache.getNode();let l;if(ae(n)||le(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=xu(s,Gs(e));else{const h=e.serverCache.getNode();x(h instanceof ye,"serverChildren would be complete if leaf node"),u=pv(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=le(n);let h=cd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Oe(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ye.EMPTY_NODE,Oe(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xu(s,Gs(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||qa(s,Ie())!=null,Sr(e,l,o,t.filter.filtersNodes())}}function NN(t,e){const n=Gs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function lg(t,e,n,s){e.type===_n.MERGE&&e.source.queryId!==null&&(x(Gs(t.viewCache_),"We should always have a full cache before handling merges"),x(Ou(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=bN(t.processor_,i,e,n,s);return IN(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ON(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ON(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return iN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ug;function DN(t){x(!ug,"__referenceConstructor has already been defined"),ug=t}function ud(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),lg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(lg(o,e,n,s));return r}}function hd(t,e){let n=null;for(const s of t.views.values())n=n||NN(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hg;function PN(t){x(!hg,"__referenceConstructor has already been defined"),hg=t}class dg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=vN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xN(t,e,n,s,i){return cN(t.pendingWriteTree_,e,n,s,i),i?xc(t,new zs(rv(),e,n)):[]}function di(t,e,n=!1){const s=lN(t.pendingWriteTree_,e);if(uN(t.pendingWriteTree_,e)){let r=new ke(null);return s.snap!=null?r=r.set(Ie(),!0):Wt(s.children,o=>{r=r.set(new Pe(o),!0)}),xc(t,new Ha(s.path,r,n))}else return[]}function Pc(t,e,n){return xc(t,new zs(ov(),e,n))}function MN(t,e,n){const s=ke.fromObject(n);return xc(t,new Qr(ov(),e,s))}function LN(t,e,n,s){const i=Tv(t,s);if(i!=null){const r=Iv(i),o=r.path,a=r.queryId,c=Bt(o,e),l=new zs(av(a),c,n);return bv(t,o,l)}else return[]}function FN(t,e,n,s){const i=Tv(t,s);if(i){const r=Iv(i),o=r.path,a=r.queryId,c=Bt(o,e),l=ke.fromObject(n),u=new Qr(av(a),c,l);return bv(t,o,u)}else return[]}function vv(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Bt(o,e),l=hd(a,c);if(l)return l});return fv(i,e,r,n,!0)}function xc(t,e){return wv(e,t.syncPointTree_,null,hv(t.pendingWriteTree_,Ie()))}function wv(t,e,n,s){if(ae(t.path))return Ev(t,e,n,s);{const i=e.get(Ie());n==null&&i!=null&&(n=hd(i,Ie()));let r=[];const o=le(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=gv(s,o);r=r.concat(wv(a,c,l,u))}return i&&(r=r.concat(ud(i,t,s,n))),r}}function Ev(t,e,n,s){const i=e.get(Ie());n==null&&i!=null&&(n=hd(i,Ie()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=gv(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ev(u,a,c,l)))}),i&&(r=r.concat(ud(i,t,s,n))),r}function Tv(t,e){return t.tagToQueryMap.get(e)}function Iv(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Pe(t.substr(0,e))}}function bv(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=hv(t.pendingWriteTree_,e);return ud(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dd(n)}node(){return this.node_}}class fd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=it(this.path_,e);return new fd(this.syncTree_,n)}node(){return vv(this.syncTree_,this.path_)}}const UN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},fg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return VN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $N(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},VN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},$N=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},BN=function(t,e,n,s){return pd(e,new fd(n,t),s)},jN=function(t,e,n){return pd(t,new dd(e),n)};function pd(t,e,n){const s=t.getPriority().val(),i=fg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=fg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,pt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new tt(i))),o.forEachChild(yt,(a,c)=>{const l=pd(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function md(t,e){let n=e instanceof Pe?e:new Pe(e),s=t,i=le(n);for(;i!==null;){const r=Ai(s.node.children,i)||{children:{},childCount:0};s=new gd(i,s,r),n=Oe(n),i=le(n)}return s}function Ji(t){return t.node.value}function Cv(t,e){t.node.value=e,Fu(t)}function Sv(t){return t.node.childCount>0}function HN(t){return Ji(t)===void 0&&!Sv(t)}function Mc(t,e){Wt(t.node.children,(n,s)=>{e(new gd(n,t,s))})}function Rv(t,e,n,s){n&&!s&&e(t),Mc(t,i=>{Rv(i,e,!0,s)}),n&&s&&e(t)}function qN(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function To(t){return new Pe(t.parent===null?t.name:To(t.parent)+"/"+t.name)}function Fu(t){t.parent!==null&&WN(t.parent,t.name,t)}function WN(t,e,n){const s=HN(n),i=Kn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Fu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=/[\[\].#$\/\u0000-\u001F\u007F]/,zN=/[\[\].#$\u0000-\u001F\u007F]/,Fl=10*1024*1024,Av=function(t){return typeof t=="string"&&t.length!==0&&!KN.test(t)},GN=function(t){return typeof t=="string"&&t.length!==0&&!zN.test(t)},QN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),GN(t)},kv=function(t,e,n){const s=n instanceof Pe?new Ak(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Is(s));if(typeof e=="function")throw new Error(t+"contains a function "+Is(s)+" with contents = "+e.toString());if(Ay(e))throw new Error(t+"contains "+e.toString()+" "+Is(s));if(typeof e=="string"&&e.length>Fl/3&&Sc(e)>Fl)throw new Error(t+"contains a string greater than "+Fl+" utf8 bytes "+Is(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Wt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Av(o)))throw new Error(t+" contains an invalid key ("+o+") "+Is(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kk(s,o),kv(t,a,s),Nk(s)}),i&&r)throw new Error(t+' contains ".value" child '+Is(s)+" in addition to actual children.")}},YN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Av(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!QN(n))throw new Error(c0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function JN(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Xy(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ei(t,e,n){JN(t,n),ZN(t,s=>tn(s,e)||tn(e,s))}function ZN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(eO(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function eO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Vs&&ft("event: "+n.toString()),wo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO="repo_interrupt",nO=25;class sO{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new XN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ja(),this.transactionQueueTree_=new gd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iO(t,e,n){if(t.stats_=nd(t.repoInfo_),t.forceRestClient_||JA())t.server_=new Ba(t.repoInfo_,(s,i,r,o)=>{pg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>gg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(s,i,r,o)=>{pg(t,s,i,r,o)},s=>{gg(t,s)},s=>{oO(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ik(t.repoInfo_,()=>new sN(t.stats_,t.server_)),t.infoData_=new Jk,t.infoSyncTree_=new dg({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Pc(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_d(t,"connected",!1),t.serverSyncTree_=new dg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);ei(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function rO(t){const n=t.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Nv(t){return UN({timestamp:rO(t)})}function pg(t,e,n,s,i){t.dataUpdateCount++;const r=new Pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Aa(n,l=>pt(l));o=FN(t.serverSyncTree_,r,c,i)}else{const c=pt(n);o=LN(t.serverSyncTree_,r,c,i)}else if(s){const c=Aa(n,l=>pt(l));o=MN(t.serverSyncTree_,r,c)}else{const c=pt(n);o=Pc(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=vd(t,r)),ei(t.eventQueue_,a,o)}function gg(t,e){_d(t,"connected",e),e===!1&&cO(t)}function oO(t,e){Wt(e,(n,s)=>{_d(t,n,s)})}function _d(t,e,n){const s=new Pe("/.info/"+e),i=pt(n);t.infoData_.updateSnapshot(s,i);const r=Pc(t.infoSyncTree_,s,i);ei(t.eventQueue_,s,r)}function aO(t){return t.nextWriteId_++}function cO(t){Ov(t,"onDisconnectEvents");const e=Nv(t),n=ja();Nu(t.onDisconnect_,Ie(),(i,r)=>{const o=BN(i,r,t.serverSyncTree_,e);iv(n,i,o)});let s=[];Nu(n,Ie(),(i,r)=>{s=s.concat(Pc(t.serverSyncTree_,i,r));const o=dO(t,i);vd(t,o)}),t.onDisconnect_=ja(),ei(t.eventQueue_,Ie(),s)}function lO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(tO)}function Ov(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function Dv(t,e,n){return vv(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function yd(t,e=t.transactionQueueTree_){if(e||Lc(t,e),Ji(e)){const n=xv(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&uO(t,To(e),n)}else Sv(e)&&Mc(e,n=>{yd(t,n)})}function uO(t,e,n){const s=n.map(l=>l.currentWriteId),i=Dv(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Bt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Ov(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(di(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Lc(t,md(t.transactionQueueTree_,e)),yd(t,t.transactionQueueTree_),ei(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)wo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ft("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}vd(t,e)}},o)}function vd(t,e){const n=Pv(t,e),s=To(n),i=xv(t,n);return hO(t,i,s),s}function hO(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Bt(n,c.path);let u=!1,h;if(x(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(di(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=nO)u=!0,h="maxretry",i=i.concat(di(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Dv(t,c.path,o);c.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){kv("transaction failed: Data returned ",p,c.path);let m=pt(p);typeof p=="object"&&p!=null&&Kn(p,".priority")||(m=m.updatePriority(d.getPriority()));const v=c.currentWriteId,b=Nv(t),N=jN(m,d,b);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=N,c.currentWriteId=aO(t),o.splice(o.indexOf(v),1),i=i.concat(xN(t.serverSyncTree_,c.path,N,c.currentWriteId,c.applyLocally)),i=i.concat(di(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(di(t.serverSyncTree_,c.currentWriteId,!0))}ei(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Lc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)wo(s[a]);yd(t,t.transactionQueueTree_)}function Pv(t,e){let n,s=t.transactionQueueTree_;for(n=le(e);n!==null&&Ji(s)===void 0;)s=md(s,n),e=Oe(e),n=le(e);return s}function xv(t,e){const n=[];return Mv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Mv(t,e,n){const s=Ji(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Mc(e,i=>{Mv(t,i,n)})}function Lc(t,e){const n=Ji(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Cv(e,n.length>0?n:void 0)}Mc(e,s=>{Lc(t,s)})}function dO(t,e){const n=To(Pv(t,e)),s=md(t.transactionQueueTree_,e);return qN(s,i=>{Ul(t,i)}),Ul(t,s),Rv(s,i=>{Ul(t,i)}),n}function Ul(t,e){const n=Ji(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(di(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cv(e,void 0):n.length=r+1,ei(t.eventQueue_,To(e),i);for(let o=0;o<s.length;o++)wo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function pO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ft(`Invalid query segment '${n}' in query '${t}'`)}return e}const mg=function(t,e){const n=gO(t),s=n.namespace;n.domain==="firebase.com"&&Ws(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ws("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||qA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new tk(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Pe(n.pathString)}},gO=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=fO(t.substring(u,h)));const d=pO(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ae(this._path)?null:Gy(this._path)}get ref(){return new Zi(this._repo,this._path)}get _queryIdentifier(){const e=tg(this._queryParams),n=ed(e);return n==="{}"?"default":n}get _queryObject(){return tg(this._queryParams)}isEqual(e){if(e=Qe(e),!(e instanceof wd))return!1;const n=this._repo===e._repo,s=Xy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Rk(this._path)}}class Zi extends wd{constructor(e,n){super(e,n,new od,!1)}get parent(){const e=Yy(this._path);return e===null?null:new Zi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}DN(Zi);PN(Zi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO="FIREBASE_DATABASE_EMULATOR_HOST",Uu={};let _O=!1;function yO(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ws("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mg(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[mO]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=mg(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Ru(Ru.OWNER):new ek(t.name,t.options,e);YN("Invalid Firebase Database URL",o),ae(o.path)||Ws("Database URL must point to the root of a Firebase Database (not including a child path).");const h=wO(a,t,u,new ZA(t.name,n));return new EO(h,t)}function vO(t,e){const n=Uu[e];(!n||n[t.key]!==t)&&Ws(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lO(t),delete n[t.key]}function wO(t,e,n,s){let i=Uu[e.name];i||(i={},Uu[e.name]=i);let r=i[t.toURLString()];return r&&Ws("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sO(t,_O,n,s),i[t.toURLString()]=r,r}class EO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zi(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ws("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){VA(Xs),Tn(new ln("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return yO(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Lt(Fp,Up,t),Lt(Fp,Up,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TO();var IO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Ed=Ed||{},X=IO||self;function Ka(){}function Fc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Io(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bO(t){return Object.prototype.hasOwnProperty.call(t,Vl)&&t[Vl]||(t[Vl]=++CO)}var Vl="closure_uid_"+(1e9*Math.random()>>>0),CO=0;function SO(t,e,n){return t.call.apply(t.bind,arguments)}function RO(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=SO:vt=RO,vt.apply(null,arguments)}function Zo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function gs(){this.s=this.s,this.o=this.o}var AO=0;gs.prototype.s=!1;gs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),AO!=0)&&bO(this)};gs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Lv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Td(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function _g(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Fc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var kO=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",Ka,e),X.removeEventListener("test",Ka,e)}catch{}return t}();function za(t){return/^[\s\xa0]*$/.test(t)}var yg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function $l(t,e){return t<e?-1:t>e?1:0}function Uc(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function mn(t){return Uc().indexOf(t)!=-1}function Id(t){return Id[" "](t),t}Id[" "]=Ka;function NO(t){var e=PO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var OO=mn("Opera"),Di=mn("Trident")||mn("MSIE"),Fv=mn("Edge"),Vu=Fv||Di,Uv=mn("Gecko")&&!(Uc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),DO=Uc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function Vv(){var t=X.document;return t?t.documentMode:void 0}var Ga;e:{var Bl="",jl=function(){var t=Uc();if(Uv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fv)return/Edge\/([\d\.]+)/.exec(t);if(Di)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(DO)return/WebKit\/(\S+)/.exec(t);if(OO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(jl&&(Bl=jl?jl[1]:""),Di){var Hl=Vv();if(Hl!=null&&Hl>parseFloat(Bl)){Ga=String(Hl);break e}}Ga=Bl}var PO={};function xO(){return NO(function(){let t=0;const e=yg(String(Ga)).split("."),n=yg("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=$l(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||$l(i[2].length==0,r[2].length==0)||$l(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var $u;if(X.document&&Di){var vg=Vv();$u=vg||parseInt(Ga,10)||void 0}else $u=void 0;var MO=$u;function Yr(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Uv){e:{try{Id(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:LO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yr.X.h.call(this)}}lt(Yr,wt);var LO={2:"touch",3:"pen",4:"mouse"};Yr.prototype.h=function(){Yr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bo="closure_listenable_"+(1e6*Math.random()|0),FO=0;function UO(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++FO,this.ba=this.ea=!1}function Vc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function bd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function $v(t){const e={};for(const n in t)e[n]=t[n];return e}const wg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bv(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<wg.length;r++)n=wg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function $c(t){this.src=t,this.g={},this.h=0}$c.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ju(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new UO(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Bu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Lv(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Vc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ju(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Cd="closure_lm_"+(1e6*Math.random()|0),ql={};function jv(t,e,n,s,i){if(s&&s.once)return qv(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)jv(t,e[r],n,s,i);return null}return n=Ad(n),t&&t[bo]?t.N(e,n,Io(s)?!!s.capture:!!s,i):Hv(t,e,n,!1,s,i)}function Hv(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Io(i)?!!i.capture:!!i,a=Rd(t);if(a||(t[Cd]=a=new $c(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=VO(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)kO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Kv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VO(){function t(n){return e.call(t.src,t.listener,n)}const e=$O;return t}function qv(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)qv(t,e[r],n,s,i);return null}return n=Ad(n),t&&t[bo]?t.O(e,n,Io(s)?!!s.capture:!!s,i):Hv(t,e,n,!0,s,i)}function Wv(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Wv(t,e[r],n,s,i);else s=Io(s)?!!s.capture:!!s,n=Ad(n),t&&t[bo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ju(r,n,s,i),-1<n&&(Vc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ju(e,n,s,i)),(n=-1<t?e[t]:null)&&Sd(n))}function Sd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[bo])Bu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Kv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Rd(e))?(Bu(n,t),n.h==0&&(n.src=null,e[Cd]=null)):Vc(t)}}}function Kv(t){return t in ql?ql[t]:ql[t]="on"+t}function $O(t,e){if(t.ba)t=!0;else{e=new Yr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Sd(t),t=n.call(s,e)}return t}function Rd(t){return t=t[Cd],t instanceof $c?t:null}var Wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ad(t){return typeof t=="function"?t:(t[Wl]||(t[Wl]=function(e){return t.handleEvent(e)}),t[Wl])}function rt(){gs.call(this),this.i=new $c(this),this.P=this,this.I=null}lt(rt,gs);rt.prototype[bo]=!0;rt.prototype.removeEventListener=function(t,e,n,s){Wv(this,t,e,n,s)};function ct(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var i=e;e=new wt(s,t),Bv(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ea(o,s,!0,e)&&i}if(o=e.g=t,i=ea(o,s,!0,e)&&i,i=ea(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ea(o,s,!1,e)&&i}rt.prototype.M=function(){if(rt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Vc(n[s]);delete t.g[e],t.h--}}this.I=null};rt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};rt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ea(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Bu(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var kd=X.JSON.stringify;function BO(){var t=Qv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jO{constructor(){this.h=this.g=null}add(e,n){const s=zv.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var zv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new HO,t=>t.reset());class HO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qO(t){X.setTimeout(()=>{throw t},0)}function Gv(t,e){Hu||WO(),qu||(Hu(),qu=!0),Qv.add(t,e)}var Hu;function WO(){var t=X.Promise.resolve(void 0);Hu=function(){t.then(KO)}}var qu=!1,Qv=new jO;function KO(){for(var t;t=BO();){try{t.h.call(t.g)}catch(n){qO(n)}var e=zv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qu=!1}function Bc(t,e){rt.call(this),this.h=t||1,this.g=e||X,this.j=vt(this.lb,this),this.l=Date.now()}lt(Bc,rt);V=Bc.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ct(this,"tick"),this.ca&&(Nd(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Nd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){Bc.X.M.call(this),Nd(this),delete this.g};function Od(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Yv(t){t.g=Od(()=>{t.g=null,t.i&&(t.i=!1,Yv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zO extends gs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yv(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(t){gs.call(this),this.h=t,this.g={}}lt(Xr,gs);var Eg=[];function Xv(t,e,n,s){Array.isArray(n)||(n&&(Eg[0]=n.toString()),n=Eg);for(var i=0;i<n.length;i++){var r=jv(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Jv(t){bd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sd(e)},t),t.g={}}Xr.prototype.M=function(){Xr.X.M.call(this),Jv(this)};Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jc(){this.g=!0}jc.prototype.Aa=function(){this.g=!1};function GO(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function QO(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function fi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XO(t,n)+(s?" "+s:"")})}function YO(t,e){t.info(function(){return"TIMEOUT: "+e})}jc.prototype.info=function(){};function XO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return kd(n)}catch{return e}}var ti={},Tg=null;function Hc(){return Tg=Tg||new rt}ti.Pa="serverreachability";function Zv(t){wt.call(this,ti.Pa,t)}lt(Zv,wt);function Jr(t){const e=Hc();ct(e,new Zv(e))}ti.STAT_EVENT="statevent";function ew(t,e){wt.call(this,ti.STAT_EVENT,t),this.stat=e}lt(ew,wt);function Ct(t){const e=Hc();ct(e,new ew(e,t))}ti.Qa="timingevent";function tw(t,e){wt.call(this,ti.Qa,t),this.size=e}lt(tw,wt);function Co(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var qc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},nw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Dd(){}Dd.prototype.h=null;function Ig(t){return t.h||(t.h=t.i())}function sw(){}var So={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Pd(){wt.call(this,"d")}lt(Pd,wt);function xd(){wt.call(this,"c")}lt(xd,wt);var Wu;function Wc(){}lt(Wc,Dd);Wc.prototype.g=function(){return new XMLHttpRequest};Wc.prototype.i=function(){return{}};Wu=new Wc;function Ro(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Xr(this),this.O=JO,t=Vu?125:void 0,this.T=new Bc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new iw}function iw(){this.i=null,this.g="",this.h=!1}var JO=45e3,Ku={},Qa={};V=Ro.prototype;V.setTimeout=function(t){this.O=t};function zu(t,e,n){t.K=1,t.v=zc(Bn(e)),t.s=n,t.P=!0,rw(t,null)}function rw(t,e){t.F=Date.now(),Ao(t),t.A=Bn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),fw(n.i,"t",s),t.C=0,n=t.l.H,t.h=new iw,t.g=xw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new zO(vt(t.La,t,t.g),t.N)),Xv(t.S,t.g,"readystatechange",t.ib),e=t.H?$v(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Jr(),GO(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&Ln(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=Ln(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Vu||this.g&&(this.h.h||this.g.fa()||Rg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Jr(3):Jr(2)),Kc(this);var n=this.g.aa();this.Y=n;t:if(ow(this)){var s=Rg(this.g);t="";var i=s.length,r=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Os(this),Ar(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,QO(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!za(a)){var l=a;break t}}l=null}if(n=l)fi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gu(this,n);else{this.i=!1,this.o=3,Ct(12),Os(this),Ar(this);break e}}this.P?(aw(this,u,o),Vu&&this.i&&u==3&&(Xv(this.S,this.T,"tick",this.hb),this.T.start())):(fi(this.j,this.m,o,null),Gu(this,o)),u==4&&Os(this),this.i&&!this.I&&(u==4?Nw(this.l,this):(this.i=!1,Ao(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),Os(this),Ar(this)}}}catch{}finally{}};function ow(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function aw(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=ZO(t,n),i==Qa){e==4&&(t.o=4,Ct(14),s=!1),fi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ku){t.o=4,Ct(15),fi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else fi(t.j,t.m,i,null),Gu(t,i);ow(t)&&i!=Qa&&i!=Ku&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bd(e),e.K=!0,Ct(11))):(fi(t.j,t.m,n,"[Invalid Chunked Response]"),Os(t),Ar(t))}V.hb=function(){if(this.g){var t=Ln(this.g),e=this.g.fa();this.C<e.length&&(Kc(this),aw(this,t,e),this.i&&t!=4&&Ao(this))}};function ZO(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Qa:(n=Number(e.substring(n,s)),isNaN(n)?Ku:(s+=1,s+n>e.length?Qa:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,Os(this)};function Ao(t){t.V=Date.now()+t.O,cw(t,t.O)}function cw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Co(vt(t.gb,t),e)}function Kc(t){t.B&&(X.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(YO(this.j,this.A),this.K!=2&&(Jr(),Ct(17)),Os(this),this.o=2,Ar(this)):cw(this,this.V-t)};function Ar(t){t.l.G==0||t.I||Nw(t.l,t)}function Os(t){Kc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Nd(t.T),Jv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qu(n.h,t))){if(!t.J&&Qu(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ja(n),Yc(n);else break e;$d(n),Ct(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Co(vt(n.cb,n),6e3));if(1>=mw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ds(n,11)}else if((t.J||n.g==t)&&Ja(n),!za(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Md(r,r.h),r.h=null))}if(s.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Le(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Pw(s,s.H?s.ka:null,s.V),o.J){_w(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Kc(a),Ao(a)),s.g=o}else Aw(s);0<n.i.length&&Xc(n)}else l[0]!="stop"&&l[0]!="close"||Ds(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ds(n,7):Vd(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Jr(4)}catch{}}function eD(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function tD(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function lw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tD(t),s=eD(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var uw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $s(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $s){this.h=e!==void 0?e:t.h,Ya(this,t.j),this.s=t.s,this.g=t.g,Xa(this,t.m),this.l=t.l,e=t.i;var n=new Zr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bg(this,n),this.o=t.o}else t&&(n=String(t).match(uw))?(this.h=!!e,Ya(this,n[1]||"",!0),this.s=_r(n[2]||""),this.g=_r(n[3]||"",!0),Xa(this,n[4]),this.l=_r(n[5]||"",!0),bg(this,n[6]||"",!0),this.o=_r(n[7]||"")):(this.h=!!e,this.i=new Zr(null,this.h))}$s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yr(e,Cg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(yr(e,Cg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(yr(n,n.charAt(0)=="/"?rD:iD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yr(n,aD)),t.join("")};function Bn(t){return new $s(t)}function Ya(t,e,n){t.j=n?_r(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bg(t,e,n){e instanceof Zr?(t.i=e,cD(t.i,t.h)):(n||(e=yr(e,oD)),t.i=new Zr(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function zc(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _r(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cg=/[#\/\?@]/g,iD=/[#\?:]/g,rD=/[#\?]/g,oD=/[#\?@]/g,aD=/#/g;function Zr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ms(t){t.g||(t.g=new Map,t.h=0,t.i&&nD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Zr.prototype;V.add=function(t,e){ms(this),this.i=null,t=er(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hw(t,e){ms(t),e=er(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dw(t,e){return ms(t),e=er(t,e),t.g.has(e)}V.forEach=function(t,e){ms(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};V.oa=function(){ms(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};V.W=function(t){ms(this);let e=[];if(typeof t=="string")dw(this,t)&&(e=e.concat(this.g.get(er(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ms(this),this.i=null,t=er(this,t),dw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function fw(t,e,n){hw(t,e),0<n.length&&(t.i=null,t.g.set(er(t,e),Td(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function er(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cD(t,e){e&&!t.j&&(ms(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(hw(this,s),fw(this,i,n))},t)),t.j=e}var lD=class{constructor(e,n){this.h=e,this.g=n}};function pw(t){this.l=t||uD,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uD=10;function gw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mw(t){return t.h?1:t.g?t.g.size:0}function Qu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Md(t,e){t.g?t.g.add(e):t.h=e}function _w(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pw.prototype.cancel=function(){if(this.i=yw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Td(t.i)}function Ld(){}Ld.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Ld.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function hD(){this.g=new Ld}function dD(t,e,n){const s=n||"";try{lw(t,function(i,r){let o=i;Io(i)&&(o=kd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function fD(t,e){const n=new jc;if(X.Image){const s=new Image;s.onload=Zo(ta,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Zo(ta,n,s,"TestLoadImage: error",!1,e),s.onabort=Zo(ta,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Zo(ta,n,s,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ta(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function ko(t){this.l=t.ac||null,this.j=t.jb||!1}lt(ko,Dd);ko.prototype.g=function(){return new Gc(this.l,this.j)};ko.prototype.i=function(t){return function(){return t}}({});function Gc(t,e){rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Fd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Gc,rt);var Fd=0;V=Gc.prototype;V.open=function(t,e){if(this.readyState!=Fd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,eo(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,No(this)),this.readyState=Fd};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function vw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?No(this):eo(this),this.readyState==3&&vw(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,No(this))};V.Ua=function(t){this.g&&(this.response=t,No(this))};V.ga=function(){this.g&&No(this)};function No(t){t.readyState=4,t.l=null,t.j=null,t.A=null,eo(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function eo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pD=X.JSON.parse;function Ve(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ww,this.K=this.L=!1}lt(Ve,rt);var ww="",gD=/^https?$/i,mD=["POST","PUT"];V=Ve.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wu.g(),this.C=this.u?Ig(this.u):Ig(Wu),this.g.onreadystatechange=vt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Sg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=Lv(mD,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Iw(this),0<this.B&&((this.K=_D(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.qa,this)):this.A=Od(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Sg(this,r)}};function _D(t){return Di&&xO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof Ed<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function Sg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ew(t),Qc(t)}function Ew(t){t.D||(t.D=!0,ct(t,"complete"),ct(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Qc(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qc(this,!0)),Ve.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?Tw(this):this.fb())};V.fb=function(){Tw(this)};function Tw(t){if(t.h&&typeof Ed<"u"&&(!t.C[1]||Ln(t)!=4||t.aa()!=2)){if(t.v&&Ln(t)==4)Od(t.Ha,0,t);else if(ct(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(uw)[1]||null;if(!i&&X.self&&X.self.location){var r=X.self.location.protocol;i=r.substr(0,r.length-1)}s=!gD.test(i?i.toLowerCase():"")}n=s}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var o=2<Ln(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ew(t)}}finally{Qc(t)}}}}function Qc(t,e){if(t.g){Iw(t);const n=t.g,s=t.C[0]?Ka:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=s}catch{}}}function Iw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function Ln(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pD(e)}};function Rg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ww:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bw(t){let e="";return bd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ud(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=bw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function hr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cw(t){this.Ca=0,this.i=[],this.j=new jc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hr("baseRetryDelayMs",5e3,t),this.bb=hr("retryDelaySeedMs",1e4,t),this.$a=hr("forwardChannelMaxRetries",2,t),this.ta=hr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new pw(t&&t.concurrentRequestLimit),this.Fa=new hD,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=Cw.prototype;V.ma=8;V.G=1;function Vd(t){if(Sw(t),t.G==3){var e=t.U++,n=Bn(t.F);Le(n,"SID",t.I),Le(n,"RID",e),Le(n,"TYPE","terminate"),Oo(t,n),e=new Ro(t,t.j,e,void 0),e.K=2,e.v=zc(Bn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=xw(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ao(e)}Dw(t)}function Yc(t){t.g&&(Bd(t),t.g.cancel(),t.g=null)}function Sw(t){Yc(t),t.u&&(X.clearTimeout(t.u),t.u=null),Ja(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Xc(t){gw(t.h)||t.m||(t.m=!0,Gv(t.Ja,t),t.C=0)}function yD(t,e){return mw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Co(vt(t.Ja,t,e),Ow(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ro(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=$v(r),Bv(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rw(this,i,e),n=Bn(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Oo(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(bw(r)))+"&"+e:this.o&&Ud(n,this.o,r)),Md(this.h,i),this.Ya&&Le(n,"TYPE","init"),this.O?(Le(n,"$req",e),Le(n,"SID","null"),i.Z=!0,zu(i,n,null)):zu(i,n,e),this.G=2}}else this.G==3&&(t?Ag(this,t):this.i.length==0||gw(this.h)||Ag(this))};function Ag(t,e){var n;e?n=e.m:n=t.U++;const s=Bn(t.F);Le(s,"SID",t.I),Le(s,"RID",n),Le(s,"AID",t.T),Oo(t,s),t.o&&t.s&&Ud(s,t.o,t.s),n=new Ro(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Rw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Md(t.h,n),zu(n,s,e)}function Oo(t,e){t.ia&&bd(t.ia,function(n,s){Le(e,s,n)}),t.l&&lw({},function(n,s){Le(e,s,n)})}function Rw(t,e,n){n=Math.min(t.i.length,n);var s=t.l?vt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{dD(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Aw(t){t.g||t.u||(t.Z=1,Gv(t.Ia,t),t.A=0)}function $d(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Co(vt(t.Ia,t),Ow(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,kw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Co(vt(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ct(10),Yc(this),kw(this))};function Bd(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function kw(t){t.g=new Ro(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Bn(t.sa);Le(e,"RID","rpc"),Le(e,"SID",t.I),Le(e,"CI",t.L?"0":"1"),Le(e,"AID",t.T),Le(e,"TYPE","xmlhttp"),Oo(t,e),t.o&&t.s&&Ud(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=zc(Bn(e)),n.s=null,n.P=!0,rw(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Yc(this),$d(this),Ct(19))};function Ja(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function Nw(t,e){var n=null;if(t.g==e){Ja(t),Bd(t),t.g=null;var s=2}else if(Qu(t.h,e))n=e.D,_w(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Hc(),ct(s,new tw(s,n)),Xc(t)}else Aw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&yD(t,e)||s==2&&$d(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ds(t,5);break;case 4:Ds(t,10);break;case 3:Ds(t,6);break;default:Ds(t,2)}}}function Ow(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ds(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=vt(t.kb,t);n||(n=new $s("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Ya(n,"https"),zc(n)),fD(n.toString(),s)}else Ct(2);t.G=0,t.l&&t.l.va(e),Dw(t),Sw(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Dw(t){if(t.G=0,t.la=[],t.l){const e=yw(t.h);(e.length!=0||t.i.length!=0)&&(_g(t.la,e),_g(t.la,t.i),t.h.i.length=0,Td(t.i),t.i.length=0),t.l.ua()}}function Pw(t,e,n){var s=n instanceof $s?Bn(n):new $s(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Xa(s,s.m);else{var i=X.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new $s(null,void 0);s&&Ya(r,s),e&&(r.g=e),i&&Xa(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Le(s,n,e),Le(s,"VER",t.ma),Oo(t,s),s}function xw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ve(new ko({jb:!0})):new Ve(t.ra),e.Ka(t.H),e}function Mw(){}V=Mw.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function Za(){if(Di&&!(10<=Number(MO)))throw Error("Environmental error: no available transport.")}Za.prototype.g=function(t,e){return new Ut(t,e)};function Ut(t,e){rt.call(this),this.g=new Cw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!za(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!za(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new tr(this)}lt(Ut,rt);Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Pw(t,null,t.V),Xc(t)};Ut.prototype.close=function(){Vd(this.g)};Ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kd(t),t=n);e.i.push(new lD(e.ab++,t)),e.G==3&&Xc(e)};Ut.prototype.M=function(){this.g.l=null,delete this.j,Vd(this.g),delete this.g,Ut.X.M.call(this)};function Lw(t){Pd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(Lw,Pd);function Fw(){xd.call(this),this.status=1}lt(Fw,xd);function tr(t){this.g=t}lt(tr,Mw);tr.prototype.xa=function(){ct(this.g,"a")};tr.prototype.wa=function(t){ct(this.g,new Lw(t))};tr.prototype.va=function(t){ct(this.g,new Fw)};tr.prototype.ua=function(){ct(this.g,"b")};Za.prototype.createWebChannel=Za.prototype.g;Ut.prototype.send=Ut.prototype.u;Ut.prototype.open=Ut.prototype.m;Ut.prototype.close=Ut.prototype.close;qc.NO_ERROR=0;qc.TIMEOUT=8;qc.HTTP_ERROR=6;nw.COMPLETE="complete";sw.EventType=So;So.OPEN="a";So.CLOSE="b";So.ERROR="c";So.MESSAGE="d";rt.prototype.listen=rt.prototype.N;Ve.prototype.listenOnce=Ve.prototype.O;Ve.prototype.getLastError=Ve.prototype.Oa;Ve.prototype.getLastErrorCode=Ve.prototype.Ea;Ve.prototype.getStatus=Ve.prototype.aa;Ve.prototype.getResponseJson=Ve.prototype.Sa;Ve.prototype.getResponseText=Ve.prototype.fa;Ve.prototype.send=Ve.prototype.da;Ve.prototype.setWithCredentials=Ve.prototype.Ka;var vD=function(){return new Za},wD=function(){return Hc()},Kl=qc,ED=nw,TD=ti,kg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ID=ko,na=sw,bD=Ve;const Ng="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new uo("@firebase/firestore");function Og(){return Qs.logLevel}function $(t,...e){if(Qs.logLevel<=fe.DEBUG){const n=e.map(jd);Qs.debug(`Firestore (${nr}): ${t}`,...n)}}function jn(t,...e){if(Qs.logLevel<=fe.ERROR){const n=e.map(jd);Qs.error(`Firestore (${nr}): ${t}`,...n)}}function Yu(t,...e){if(Qs.logLevel<=fe.WARN){const n=e.map(jd);Qs.warn(`Firestore (${nr}): ${t}`,...n)}}function jd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Re(t,e){t||Y()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class SD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RD{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Un,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Re(typeof s.accessToken=="string"),new Uw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new dt(e)}}class AD{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class kD{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new AD(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ND{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OD{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.A=n.token,new ND(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=DD(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function Pi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ge(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ge(0,0))}static max(){return new Z(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return to.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof to?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends to{construct(e,n,s){return new Fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const PD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends to{construct(e,n,s){return new _t(e,n,s)}static isValidIdentifier(e){return PD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new W(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new W(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Fe.fromString(e))}static fromName(e){return new K(Fe.fromString(e).popFirst(5))}static empty(){return new K(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Fe(e.slice()))}}function xD(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(s===1e9?new Ge(n+1,0):new Ge(n,s));return new hs(i,K.empty(),e)}function MD(t){return new hs(t.readTime,t.key,-1)}class hs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new hs(Z.min(),K.empty(),-1)}static max(){return new hs(Z.max(),K.empty(),-1)}}function LD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==FD)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(i=>i?A.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new A((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new A((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Po(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Hd.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class no{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new no("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){return t==null}function ec(t){return t===0&&1/t==-1/0}function $D(t){return typeof t=="number"&&Number.isInteger(t)&&!ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new It(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const BD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(t){if(Re(!!t),typeof t=="string"){let e=0;const n=BD.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jw(t){const e=t.mapValue.fields.__previous_value__;return Bw(e)?jw(e):e}function so(t){const e=ds(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bw(t)?4:jD(t)?9007199254740991:10:Y()}function Cn(t,e){if(t===e)return!0;const n=Ys(t);if(n!==Ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return so(t).isEqual(so(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ds(s.timestampValue),o=ds(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return xi(s.bytesValue).isEqual(xi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Ke(s.doubleValue),o=Ke(i.doubleValue);return r===o?ec(r)===ec(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Dg(r)!==Dg(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Cn(r[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function io(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Mi(t,e){if(t===e)return 0;const n=Ys(t),s=Ys(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Ke(i.integerValue||i.doubleValue),a=Ke(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pg(t.timestampValue,e.timestampValue);case 4:return Pg(so(t),so(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,r){const o=xi(i),a=xi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=me(o[c],a[c]);if(l!==0)return l}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=me(Ke(i.latitude),Ke(r.latitude));return o!==0?o:me(Ke(i.longitude),Ke(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Mi(o[c],a[c]);if(l)return l}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===sa.mapValue&&r===sa.mapValue)return 0;if(i===sa.mapValue)return 1;if(r===sa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=me(a[u],l[u]);if(h!==0)return h;const d=Mi(o[a[u]],c[l[u]]);if(d!==0)return d}return me(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Pg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=ds(t),s=ds(e),i=me(n.seconds,s.seconds);return i!==0?i:me(n.nanos,s.nanos)}function Li(t){return Xu(t)}function Xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ds(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Xu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Xu(s.fields[a])}`;return r+"}"}(t.mapValue):Y();var e,n}function Ju(t){return!!t&&"integerValue"in t}function qd(t){return!!t&&"arrayValue"in t}function xg(t){return!!t&&"nullValue"in t}function Mg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ga(t){return!!t&&"mapValue"in t}function kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=kr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.position=e,this.inclusive=n}}function Lg(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=Mi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{}class Xe extends Hw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qD(e,n,s):n==="array-contains"?new zD(e,s):n==="in"?new GD(e,s):n==="not-in"?new QD(e,s):n==="array-contains-any"?new YD(e,s):new Xe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new WD(e,s):new KD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mi(n,this.value)):n!==null&&Ys(this.value)===Ys(n)&&this.matchesComparison(Mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Sn extends Hw{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Sn(e,n)}matches(e){return qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qw(t){return t.op==="and"}function Ww(t){return HD(t)&&qw(t)}function HD(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function Zu(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Li(t.value);if(Ww(t))return t.filters.map(e=>Zu(e)).join(",");{const e=t.filters.map(n=>Zu(n)).join(",");return`${t.op}(${e})`}}function Kw(t,e){return t instanceof Xe?function(n,s){return s instanceof Xe&&n.op===s.op&&n.field.isEqual(s.field)&&Cn(n.value,s.value)}(t,e):t instanceof Sn?function(n,s){return s instanceof Sn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Kw(r,s.filters[o]),!0):!1}(t,e):void Y()}function zw(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${Li(e.value)}`}(t):t instanceof Sn?function(e){return e.op.toString()+" {"+e.getFilters().map(zw).join(" ,")+"}"}(t):"Filter"}class qD extends Xe{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class WD extends Xe{constructor(e,n){super(e,"in",n),this.keys=Gw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KD extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Gw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class zD extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qd(n)&&io(n.arrayValue,this.value)}}class GD extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&io(this.value.arrayValue,n)}}class QD extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!io(this.value.arrayValue,n)}}class YD extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>io(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n="asc"){this.field=e,this.dir=n}}function XD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ia(this.root,e,this.comparator,!0)}}class ia{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ot.RED,this.left=i??ot.EMPTY,this.right=r??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ot(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ug(this.data.getIterator())}getIteratorFrom(e){return new Ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Je(_t.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(n)}setAll(e){let n=_t.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=kr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ni(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new At(kr(this.value))}}function Qw(t){const e=[];return ni(t.fields,(n,s)=>{const i=new _t([n]);if(ga(s)){const r=Qw(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,Z.min(),Z.min(),Z.min(),At.empty(),0)}static newFoundDocument(e,n,s,i){return new gt(e,1,n,Z.min(),s,i,0)}static newNoDocument(e,n){return new gt(e,2,n,Z.min(),Z.min(),At.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,Z.min(),Z.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Vg(t,e=null,n=[],s=[],i=null,r=null,o=null){return new JD(t,e,n,s,i,r,o)}function Wd(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Zu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Li(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Li(s)).join(",")),e.ft=n}return e.ft}function Kd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fg(t.startAt,e.startAt)&&Fg(t.endAt,e.endAt)}function eh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function ZD(t,e,n,s,i,r,o,a){return new Zc(t,e,n,s,i,r,o,a)}function el(t){return new Zc(t)}function $g(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function e1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function t1(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function n1(t){return t.collectionGroup!==null}function Ii(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=t1(e),s=e1(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Nr(n)),e.dt.push(new Nr(_t.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Nr(_t.keyField(),r))}}}return e.dt}function Hn(t){const e=ee(t);if(!e._t)if(e.limitType==="F")e._t=Vg(e.path,e.collectionGroup,Ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ii(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Nr(r.field,o))}const s=e.endAt?new tc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new tc(e.startAt.position,e.startAt.inclusive):null;e._t=Vg(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function th(t,e,n){return new Zc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tl(t,e){return Kd(Hn(t),Hn(e))&&t.limitType===e.limitType}function Yw(t){return`${Wd(Hn(t))}|lt:${t.limitType}`}function nh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>zw(s)).join(", ")}]`),Jc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Li(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Li(s)).join(",")),`Target(${n})`}(Hn(t))}; limitType=${t.limitType})`}function nl(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Ii(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Lg(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ii(n),s)||n.endAt&&!function(i,r,o){const a=Lg(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ii(n),s))}(t,e)}function s1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xw(t){return(e,n)=>{let s=!1;for(const i of Ii(t)){const r=i1(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function i1(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Mi(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ec(e)?"-0":e}}function Zw(t){return{integerValue:""+t}}function r1(t,e){return $D(e)?Zw(e):Jw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this._=void 0}}function o1(t,e,n){return t instanceof nc?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ro?tE(t,e):t instanceof oo?nE(t,e):function(s,i){const r=eE(s,i),o=Bg(r)+Bg(s.gt);return Ju(r)&&Ju(s.gt)?Zw(o):Jw(s.yt,o)}(t,e)}function a1(t,e,n){return t instanceof ro?tE(t,e):t instanceof oo?nE(t,e):n}function eE(t,e){return t instanceof sc?Ju(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class nc extends sl{}class ro extends sl{constructor(e){super(),this.elements=e}}function tE(t,e){const n=sE(e);for(const s of t.elements)n.some(i=>Cn(i,s))||n.push(s);return{arrayValue:{values:n}}}class oo extends sl{constructor(e){super(),this.elements=e}}function nE(t,e){let n=sE(e);for(const s of t.elements)n=n.filter(i=>!Cn(i,s));return{arrayValue:{values:n}}}class sc extends sl{constructor(e,n){super(),this.yt=e,this.gt=n}}function Bg(t){return Ke(t.integerValue||t.doubleValue)}function sE(t){return qd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function c1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ro&&s instanceof ro||n instanceof oo&&s instanceof oo?Pi(n.elements,s.elements,Cn):n instanceof sc&&s instanceof sc?Cn(n.gt,s.gt):n instanceof nc&&s instanceof nc}(t.transform,e.transform)}class l1{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class il{}function iE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zd(t.key,cn.none()):new xo(t.key,t.data,cn.none());{const n=t.data,s=At.empty();let i=new Je(_t.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new _s(t.key,s,new Mt(i.toArray()),cn.none())}}function u1(t,e,n){t instanceof xo?function(s,i,r){const o=s.value.clone(),a=Hg(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _s?function(s,i,r){if(!ma(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Hg(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(rE(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Or(t,e,n,s){return t instanceof xo?function(i,r,o,a){if(!ma(i.precondition,r))return o;const c=i.value.clone(),l=qg(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof _s?function(i,r,o,a){if(!ma(i.precondition,r))return o;const c=qg(i.fieldTransforms,a,r),l=r.data;return l.setAll(rE(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ma(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function h1(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=eE(s.transform,i||null);r!=null&&(n===null&&(n=At.empty()),n.set(s.field,r))}return n||null}function jg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pi(n,s,(i,r)=>c1(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xo extends il{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _s extends il{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function rE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Hg(t,e,n){const s=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,a1(o,a,n[i]))}return s}function qg(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,o1(r,o,e))}return s}class zd extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d1 extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ce;function p1(t){switch(t){default:return Y();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function oE(t){if(t===void 0)return jn("GRPC error has no .code"),S.UNKNOWN;switch(t){case We.OK:return S.OK;case We.CANCELLED:return S.CANCELLED;case We.UNKNOWN:return S.UNKNOWN;case We.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case We.INTERNAL:return S.INTERNAL;case We.UNAVAILABLE:return S.UNAVAILABLE;case We.UNAUTHENTICATED:return S.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case We.NOT_FOUND:return S.NOT_FOUND;case We.ALREADY_EXISTS:return S.ALREADY_EXISTS;case We.PERMISSION_DENIED:return S.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case We.ABORTED:return S.ABORTED;case We.OUT_OF_RANGE:return S.OUT_OF_RANGE;case We.UNIMPLEMENTED:return S.UNIMPLEMENTED;case We.DATA_LOSS:return S.DATA_LOSS;default:return Y()}}(ce=We||(We={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return $w(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new et(K.comparator);function qn(){return g1}const aE=new et(K.comparator);function vr(...t){let e=aE;for(const n of t)e=e.insert(n.key,n);return e}function cE(t){let e=aE;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ps(){return Dr()}function lE(){return Dr()}function Dr(){return new sr(t=>t.toString(),(t,e)=>t.isEqual(e))}const m1=new et(K.comparator),_1=new Je(K.comparator);function ie(...t){let e=_1;for(const n of t)e=e.add(n);return e}const y1=new Je(me);function uE(){return y1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Mo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new rl(Z.min(),i,uE(),qn(),ie())}}class Mo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Mo(s,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class hE{constructor(e,n){this.targetId=e,this.Et=n}}class dE{constructor(e,n,s=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Wg{constructor(){this.At=0,this.Rt=zg(),this.bt=It.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ie(),n=ie(),s=ie();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Y()}}),new Mo(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=zg()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class v1{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=qn(),this.qt=Kg(),this.Ut=new Je(me)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(eh(r))if(s===0){const o=new K(r.path);this.Qt(n,o,gt.newNoDocument(o,Z.min()))}else Re(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&eh(a.target)){const c=new K(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,gt.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=ie();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new rl(e,n,this.Ut,this.Lt,s);return this.Lt=qn(),this.qt=Kg(),this.Ut=new Je(me),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Wg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Je(me),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Wg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Kg(){return new et(K.comparator)}function zg(){return new et(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),E1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),T1=(()=>({and:"AND",or:"OR"}))();class I1{constructor(e,n){this.databaseId=e,this.wt=n}}function ic(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fE(t,e){return t.wt?e.toBase64():e.toUint8Array()}function b1(t,e){return ic(t,e.toTimestamp())}function wn(t){return Re(!!t),Z.fromTimestamp(function(e){const n=ds(e);return new Ge(n.seconds,n.nanos)}(t))}function Gd(t,e){return function(n){return new Fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function pE(t){const e=Fe.fromString(t);return Re(yE(e)),e}function sh(t,e){return Gd(t.databaseId,e.path)}function zl(t,e){const n=pE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(gE(n))}function ih(t,e){return Gd(t.databaseId,e)}function C1(t){const e=pE(t);return e.length===4?Fe.emptyPath():gE(e)}function rh(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gE(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gg(t,e,n){return{name:sh(t,e),fields:n.value.mapValue.fields}}function S1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.wt?(Re(l===void 0||typeof l=="string"),It.fromBase64String(l||"")):(Re(l===void 0||l instanceof Uint8Array),It.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:oE(c.code);return new W(l,c.message||"")}(o);n=new dE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=zl(t,s.document.name),r=wn(s.document.updateTime),o=s.document.createTime?wn(s.document.createTime):Z.min(),a=new At({mapValue:{fields:s.document.fields}}),c=gt.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new _a(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=zl(t,s.document),r=s.readTime?wn(s.readTime):Z.min(),o=gt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new _a([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=zl(t,s.document),r=s.removedTargetIds||[];n=new _a([],r,i,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new f1(i),o=s.targetId;n=new hE(o,r)}}return n}function R1(t,e){let n;if(e instanceof xo)n={update:Gg(t,e.key,e.value)};else if(e instanceof zd)n={delete:sh(t,e.key)};else if(e instanceof _s)n={update:Gg(t,e.key,e.data),updateMask:L1(e.fieldMask)};else{if(!(e instanceof d1))return Y();n={verify:sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof nc)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ro)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof oo)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof sc)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:b1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function A1(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?wn(s.updateTime):wn(i);return r.isEqual(Z.min())&&(r=wn(i)),new l1(r,s.transformResults||[])}(n,e))):[]}function k1(t,e){return{documents:[ih(t,e.path)]}}function N1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ih(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ih(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return _E(Sn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ci(u.field),direction:P1(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.wt||Jc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function O1(t){let e=C1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Re(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=mE(u);return h instanceof Sn&&Ww(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Nr(li(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Jc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new tc(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new tc(d,h)}(n.endAt)),ZD(e,i,o,r,a,"F",c,l)}function D1(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function mE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=li(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=li(e.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=li(e.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=li(e.unaryFilter.field);return Xe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(li(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Sn.create(e.compositeFilter.filters.map(n=>mE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function P1(t){return w1[t]}function x1(t){return E1[t]}function M1(t){return T1[t]}function ci(t){return{fieldPath:t.canonicalString()}}function li(t){return _t.fromServerFormat(t.fieldPath)}function _E(t){return t instanceof Xe?function(e){if(e.op==="=="){if(Mg(e.value))return{unaryFilter:{field:ci(e.field),op:"IS_NAN"}};if(xg(e.value))return{unaryFilter:{field:ci(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Mg(e.value))return{unaryFilter:{field:ci(e.field),op:"IS_NOT_NAN"}};if(xg(e.value))return{unaryFilter:{field:ci(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(e.field),op:x1(e.op),value:e.value}}}(t):t instanceof Sn?function(e){const n=e.getFilters().map(s=>_E(s));return n.length===1?n[0]:{compositeFilter:{op:M1(e.op),filters:n}}}(t):Y()}function L1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&u1(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Or(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Or(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=lE();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=iE(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,(n,s)=>jg(n,s))&&Pi(this.baseMutations,e.baseMutations,(n,s)=>jg(n,s))}}class Qd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Re(e.mutations.length===s.length);let i=m1;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Qd(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,s,i,r=Z.min(),o=Z.min(),a=It.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Bs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Bs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Bs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.ie=e}}function $1(t){const e=O1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?th(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(){this.Je=new j1}addToCollectionParentIndex(e,n){return this.Je.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(hs.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(hs.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class j1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Je(Fe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Je(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Fi(0)}static vn(){return new Fi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(){this.changes=new sr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Or(s.mutation,i,Mt.empty(),Ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const i=Ps();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=vr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=qn();const o=Dr(),a=Dr();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof _s)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Or(u.mutation,l,u.mutation.getFieldMask(),Ge.now())):o.set(l.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new q1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Dr();let i=new et((o,a)=>o-a),r=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Mt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||ie()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=lE();u.forEach(d=>{if(!r.has(d)){const p=iE(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):n1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):A.resolve(Ps());let a=-1,c=r;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:cE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let i=vr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=vr();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const c=function(l,u){return new Zc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,gt.newInvalidDocument(l)))});let o=vr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Or(l.mutation,c,Mt.empty(),Ge.now()),nl(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:wn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:$1(s.bundledQuery),readTime:wn(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(){this.overlays=new et(K.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ps();return A.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const i=Ps(),r=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new et((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Ps(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ps(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return A.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new U1(n,s));let r=this.es.get(n);r===void 0&&(r=ie(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.ns=new Je(nt.ss),this.rs=new Je(nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new nt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new nt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new K(new Fe([])),s=new nt(n,e),i=new nt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new K(new Fe([])),s=new nt(n,e),i=new nt(n,e+1);let r=ie();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new nt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return K.comparator(e.key,n.key)||me(e._s,n._s)}static os(e,n){return me(e._s,n._s)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Je(nt.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new F1(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new nt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return A.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),A.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Je(me);return n.forEach(i=>{const r=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),A.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;K.isDocumentKey(r)||(r=r.child(""));const o=new nt(new K(r),0);let a=new Je(me);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return A.forEach(n.mutations,i=>{const r=new nt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new nt(n,0),i=this.gs.firstAfterOrEqual(s);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.Es=e,this.docs=new et(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let s=qn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():gt.newInvalidDocument(i))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=qn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||LD(MD(u),s)<=0||(i.has(u.key)||nl(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Y()}As(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Y1(this)}getSize(e){return A.resolve(this.size)}}class Y1 extends H1{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e){this.persistence=e,this.Rs=new sr(n=>Wd(n),Kd),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Yd,this.targetCount=0,this.vs=Fi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Fi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(r).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Hd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new X1(this),this.indexManager=new B1,this.remoteDocumentCache=function(s){return new Q1(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new V1(n),this.Ns=new K1(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new z1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new G1(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const i=new Z1(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return A.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Z1 extends UD{constructor(e){super(),this.currentSequenceNumber=e}}class Xd{constructor(e){this.persistence=e,this.Fs=new Yd,this.$s=null}static Bs(e){return new Xd(e)}get Ls(){if(this.$s)return this.$s;throw Y()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,s=>{const i=K.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=ie(),i=ie();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Jd(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if($g(n))return A.resolve(null);let s=Hn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=th(n,null,"F"),s=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ie(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,th(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,i){return $g(n)||i.isEqual(Z.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Og()<=fe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nh(n)),this.Bi(e,o,n,xD(i,-1)))})}Fi(e,n){let s=new Je(Xw(e));return n.forEach((i,r)=>{nl(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Og()<=fe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",nh(n)),this.Ni.getDocumentsMatchingQuery(e,n,hs.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new et(me),this.Ui=new sr(r=>Wd(r),Kd),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W1(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function nP(t,e,n,s){return new tP(t,e,n,s)}async function vE(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=ie();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function sP(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const _=c.docVersions.get(p);Re(_!==null),m.version.compareTo(_)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ie();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function wE(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function iP(t,e){const n=ee(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(It.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(r,p))});let c=qn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(rP(r,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(Z.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.qi=i,r))}function rP(t,e,n){let s=ie(),i=ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=qn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function oP(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function aP(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,A.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Bs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function oh(t,e,n){const s=ee(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Po(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Qg(t,e,n){const s=ee(t);let i=Z.min(),r=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.Ui.get(l);return h!==void 0?A.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,Hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?r:ie())).next(a=>(cP(s,s1(e),a),{documents:a,Hi:r})))}function cP(t,e,n){let s=t.Ki.get(e)||Z.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Yg{constructor(){this.activeTargetIds=uE()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lP{constructor(){this.Lr=new Yg,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Yg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);$("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(c=>($("RestConnection","Received: ",c),c),c=>{throw Yu("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+nr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=hP[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new bD;a.setWithCredentials(!0),a.listenOnce(ED.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Kl.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Kl.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new W(S.DEADLINE_EXCEEDED,"Request time out"));break;case Kl.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(_)>=0?_:S.UNKNOWN}(d.status);o(new W(p,d.message))}else o(new W(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(S.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=vD(),o=wD(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ID({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");$("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new dP({Hr:m=>{h?$("Connection","Not sending because WebChannel is closed:",m):(u||($("Connection","Opening WebChannel transport."),l.open(),u=!0),$("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),p=(m,_,v)=>{m.listen(_,b=>{try{v(b)}catch(N){setTimeout(()=>{throw N},0)}})};return p(l,na.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),p(l,na.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),d.io())}),p(l,na.EventType.ERROR,m=>{h||(h=!0,Yu("Connection","WebChannel transport errored:",m),d.io(new W(S.UNAVAILABLE,"The operation could not be completed")))}),p(l,na.EventType.MESSAGE,m=>{var _;if(!h){const v=m.data[0];Re(!!v);const b=v,N=b.error||((_=b[0])===null||_===void 0?void 0:_.error);if(N){$("Connection","WebChannel received error:",N);const R=N.status;let P=function(oe){const ge=We[oe];if(ge!==void 0)return oE(ge)}(R),G=N.message;P===void 0&&(P=S.INTERNAL,G="Unknown error status: "+R+" with message "+N.message),h=!0,d.io(new W(P,G)),l.close()}else $("Connection","WebChannel received:",v),d.ro(v)}}),p(o,TD.STAT_EVENT,m=>{m.stat===kg.PROXY?$("Connection","Detected buffering proxy"):m.stat===kg.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){return new I1(t,!0)}class EE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n,s,i,r,o,a,c){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new EE(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new W(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pP extends TE{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=S1(this.yt,e),s=function(i){if(!("targetChange"in i))return Z.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Z.min():r.readTime?wn(r.readTime):Z.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=rh(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=eh(a)?{documents:k1(i,a)}:{query:N1(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=fE(i,r.resumeToken):r.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=ic(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=D1(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=rh(this.yt),n.removeTarget=e,this.Bo(n)}}class gP extends TE{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=A1(e.writeResults,e.commitTime),s=wn(e.commitTime);return this.listener.Zo(s,n)}return Re(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=rh(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>R1(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new W(S.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(S.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(S.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class _P{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(jn(n),this.ou=!1):$("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{si(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c._u.add(4),await Lo(c),c.gu.set("Unknown"),c._u.delete(4),await al(c)}(this))})}),this.gu=new _P(s,i)}}async function al(t){if(si(t))for(const e of t.wu)await e(!0)}async function Lo(t){for(const e of t.wu)await e(!1)}function IE(t,e){const n=ee(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),tf(n)?ef(n):ir(n).ko()&&Zd(n,e))}function bE(t,e){const n=ee(t),s=ir(n);n.du.delete(e),s.ko()&&CE(n,e),n.du.size===0&&(s.ko()?s.Fo():si(n)&&n.gu.set("Unknown"))}function Zd(t,e){t.yu.Ot(e.targetId),ir(t).zo(e)}function CE(t,e){t.yu.Ot(e),ir(t).Ho(e)}function ef(t){t.yu=new v1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ir(t).start(),t.gu.uu()}function tf(t){return si(t)&&!ir(t).No()&&t.du.size>0}function si(t){return ee(t)._u.size===0}function SE(t){t.yu=void 0}async function vP(t){t.du.forEach((e,n)=>{Zd(t,e)})}async function wP(t,e){SE(t),tf(t)?(t.gu.hu(e),ef(t)):t.gu.set("Unknown")}async function EP(t,e,n){if(t.gu.set("Online"),e instanceof dE&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await rc(t,s)}else if(e instanceof _a?t.yu.Kt(e):e instanceof hE?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Z.min()))try{const s=await wE(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(c);l&&i.du.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(It.EMPTY_BYTE_STRING,c.snapshotVersion)),CE(i,a);const l=new Bs(c.target,a,1,c.sequenceNumber);Zd(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await rc(t,s)}}async function rc(t,e,n){if(!Po(e))throw e;t._u.add(1),await Lo(t),t.gu.set("Offline"),n||(n=()=>wE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await al(t)})}function RE(t,e){return e().catch(n=>rc(t,n,e))}async function cl(t){const e=ee(t),n=fs(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;TP(e);)try{const i=await oP(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,IP(e,i)}catch(i){await rc(e,i)}AE(e)&&kE(e)}function TP(t){return si(t)&&t.fu.length<10}function IP(t,e){t.fu.push(e);const n=fs(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function AE(t){return si(t)&&!fs(t).No()&&t.fu.length>0}function kE(t){fs(t).start()}async function bP(t){fs(t).eu()}async function CP(t){const e=fs(t);for(const n of t.fu)e.Xo(n.mutations)}async function SP(t,e,n){const s=t.fu.shift(),i=Qd.from(s,e,n);await RE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cl(t)}async function RP(t,e){e&&fs(t).Yo&&await async function(n,s){if(i=s.code,p1(i)&&i!==S.ABORTED){const r=n.fu.shift();fs(n).Mo(),await RE(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await cl(n)}var i}(t,e),AE(t)&&kE(t)}async function Jg(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=si(n);n._u.add(3),await Lo(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await al(n)}async function AP(t,e){const n=ee(t);e?(n._u.delete(2),await al(n)):e||(n._u.add(2),await Lo(n),n.gu.set("Unknown"))}function ir(t){return t.pu||(t.pu=function(e,n,s){const i=ee(e);return i.su(),new pP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:vP.bind(null,t),Zr:wP.bind(null,t),Wo:EP.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),tf(t)?ef(t):t.gu.set("Unknown")):(await t.pu.stop(),SE(t))})),t.pu}function fs(t){return t.Iu||(t.Iu=function(e,n,s){const i=ee(e);return i.su(),new gP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:bP.bind(null,t),Zr:RP.bind(null,t),tu:CP.bind(null,t),Zo:SP.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await cl(t)):(await t.Iu.stop(),t.fu.length>0&&($("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new nf(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sf(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Po(t))return new W(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=vr(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new bi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.Tu=new et(K.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Y():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ui{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ui(e,n,bi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.Au=void 0,this.listeners=[]}}class NP{constructor(){this.queries=new sr(e=>Yw(e),tl),this.onlineState="Unknown",this.Ru=new Set}}async function rf(t,e){const n=ee(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new kP),i)try{r.Au=await n.onListen(s)}catch(o){const a=sf(o,`Initialization of query '${nh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&af(n)}async function of(t,e){const n=ee(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function OP(t,e){const n=ee(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&af(n)}function DP(t,e,n){const s=ee(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function af(t){t.Ru.forEach(e=>{e.next()})}class cf{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ui(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.key=e}}class OE{constructor(e){this.key=e}}class PP{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ie(),this.mutatedKeys=ie(),this.Gu=Xw(e),this.Qu=new bi(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Zg,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=nl(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),v=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return p(h)-p(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new Ui(this.query,e.Qu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Zg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ie(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new OE(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new NE(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ie();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ui.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class xP{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class MP{constructor(e){this.key=e,this.nc=!1}}class LP{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new sr(a=>Yw(a),tl),this.rc=new Map,this.oc=new Set,this.uc=new et(K.comparator),this.cc=new Map,this.ac=new Yd,this.hc={},this.lc=new Map,this.fc=Fi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function FP(t,e){const n=zP(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await aP(n.localStore,Hn(e));n.isPrimaryClient&&IE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await UP(n,e,s,a==="current",o.resumeToken)}return i}async function UP(t,e,n,s,i){t._c=(h,d,p)=>async function(m,_,v,b){let N=_.view.Wu(v);N.$i&&(N=await Qg(m.localStore,_.query,!1).then(({documents:G})=>_.view.Wu(G,N)));const R=b&&b.targetChanges.get(_.targetId),P=_.view.applyChanges(N,m.isPrimaryClient,R);return tm(m,_.targetId,P.Xu),P.snapshot}(t,h,d,p);const r=await Qg(t.localStore,e,!0),o=new PP(e,r.Hi),a=o.Wu(r.documents),c=Mo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);tm(t,n,l.Xu);const u=new xP(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function VP(t,e){const n=ee(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!tl(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await oh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),bE(n.remoteStore,s.targetId),ah(n,s.targetId)}).catch(Do)):(ah(n,s.targetId),await oh(n.localStore,s.targetId,!0))}async function $P(t,e,n){const s=GP(t);try{const i=await function(r,o){const a=ee(r),c=Ge.now(),l=o.reduce((d,p)=>d.add(p.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=qn(),m=ie();return a.Gi.getEntries(d,l).next(_=>{p=_,p.forEach((v,b)=>{b.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{u=_;const v=[];for(const b of o){const N=h1(b,u.get(b.key).overlayedDocument);N!=null&&v.push(new _s(b.key,N,Qw(N.value.mapValue),cn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(_=>{h=_;const v=_.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,_.batchId,v)})}).then(()=>({batchId:h.batchId,changes:cE(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new et(me)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Fo(s,i.changes),await cl(s.remoteStore)}catch(i){const r=sf(i,"Failed to persist write");n.reject(r)}}async function DE(t,e){const n=ee(t);try{const s=await iP(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Re(o.nc):i.removedDocuments.size>0&&(Re(o.nc),o.nc=!1))}),await Fo(n,s,e)}catch(s){await Do(s)}}function em(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ee(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&af(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function BP(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new et(K.comparator);o=o.insert(r,gt.newNoDocument(r,Z.min()));const a=ie().add(r),c=new rl(Z.min(),new Map,new Je(me),o,a);await DE(s,c),s.uc=s.uc.remove(r),s.cc.delete(e),lf(s)}else await oh(s.localStore,e,!1).then(()=>ah(s,e,n)).catch(Do)}async function jP(t,e){const n=ee(t),s=e.batch.batchId;try{const i=await sP(n.localStore,e);xE(n,s,null),PE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fo(n,i)}catch(i){await Do(i)}}async function HP(t,e,n){const s=ee(t);try{const i=await function(r,o){const a=ee(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Re(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);xE(s,e,n),PE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Fo(s,i)}catch(i){await Do(i)}}function PE(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function xE(t,e,n){const s=ee(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function ah(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||ME(t,s)})}function ME(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(bE(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),lf(t))}function tm(t,e,n){for(const s of n)s instanceof NE?(t.ac.addReference(s.key,e),qP(t,s)):s instanceof OE?($("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||ME(t,s.key)):Y()}function qP(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||($("SyncEngine","New document in limbo: "+n),t.oc.add(s),lf(t))}function lf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new K(Fe.fromString(e)),s=t.fc.next();t.cc.set(s,new MP(n)),t.uc=t.uc.insert(n,s),IE(t.remoteStore,new Bs(Hn(el(n.path)),s,2,Hd.at))}}async function Fo(t,e,n){const s=ee(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Jd.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>A.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Po(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.qi=l.qi.insert(h,m)}}}(s.localStore,r))}async function WP(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await vE(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new W(S.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fo(n,s.ji)}}function KP(t,e){const n=ee(t),s=n.cc.get(e);if(s&&s.nc)return ie().add(s.key);{let i=ie();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function zP(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BP.bind(null,e),e.sc.Wo=OP.bind(null,e.eventManager),e.sc.wc=DP.bind(null,e.eventManager),e}function GP(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HP.bind(null,e),e}class QP{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ol(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return nP(this.persistence,new eP,e.initialUser,this.yt)}yc(e){return new J1(Xd.Bs,this.yt)}gc(e){return new lP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>em(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=WP.bind(null,this.syncEngine),await AP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NP}createDatastore(e){const n=ol(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new fP(i));var i;return function(r,o,a,c){return new mP(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>em(this.syncEngine,a,0),o=Xg.C()?new Xg:new uP,new yP(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new LP(s,i,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);$("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Lo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e,n){if(!n)throw new W(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XP(t,e,n,s){if(e===!0&&s===!0)throw new W(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nm(t){if(!K.isDocumentKey(t))throw new W(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sm(t){if(K.isDocumentKey(t))throw new W(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uf(t);throw new W(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Map;class rm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,XP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CD;switch(n.type){case"gapi":const s=n.client;return new kD(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=im.get(e);n&&($("ComponentProvider","Removing Datastore"),im.delete(e),n.terminate())}(this),Promise.resolve()}}function JP(t,e,n,s={}){var i;const r=(t=Ht(t,ll))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Yu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=dt.MOCK_USER;else{o=P_(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new W(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new dt(c)}t._authCredentials=new SD(new Uw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new as(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class Uo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Uo(this.firestore,e,this._query)}}class as extends Uo{constructor(e,n,s){super(e,n,el(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new K(e))}withConverter(e){return new as(this.firestore,e,this._path)}}function xs(t,e,...n){if(t=Qe(t),LE("collection","path",e),t instanceof ll){const s=Fe.fromString(e,...n);return sm(s),new as(t,null,s)}{if(!(t instanceof Nt||t instanceof as))throw new W(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return sm(s),new as(t.firestore,null,s)}}function ch(t,e,...n){if(t=Qe(t),arguments.length===1&&(e=Vw.R()),LE("doc","path",e),t instanceof ll){const s=Fe.fromString(e,...n);return nm(s),new Nt(t,null,new K(s))}{if(!(t instanceof Nt||t instanceof as))throw new W(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return nm(s),new Nt(t.firestore,t instanceof as?t.converter:null,new K(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Vw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{$("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>($("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=sf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ex(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await vE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function tx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nx(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Jg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Jg(e.remoteStore,r)),t.onlineComponents=e}async function nx(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await ex(t,new QP)),t.offlineComponents}async function FE(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await tx(t,new YP)),t.onlineComponents}function sx(t){return FE(t).then(e=>e.syncEngine)}async function oc(t){const e=await FE(t),n=e.eventManager;return n.onListen=FP.bind(null,e.syncEngine),n.onUnlisten=VP.bind(null,e.syncEngine),n}function ix(t,e,n={}){const s=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new hf({next:h=>{r.enqueueAndForget(()=>of(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new W(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new W(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new cf(el(o.path),l,{includeMetadataChanges:!0,Nu:!0});return rf(i,u)}(await oc(t),t.asyncQueue,e,n,s)),s.promise}function rx(t,e,n={}){const s=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new hf({next:h=>{r.enqueueAndForget(()=>of(i,u)),h.fromCache&&a.source==="server"?c.reject(new W(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new cf(o,l,{includeMetadataChanges:!0,Nu:!0});return rf(i,u)}(await oc(t),t.asyncQueue,e,n,s)),s.promise}class ox{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new EE(this,"async_queue_retry"),this.Wc=()=>{const n=Gl();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Gl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Un;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Po(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw jn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=nf.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&Y()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function om(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ps extends ll{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new ox,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||UE(this),this._firestoreClient.terminate()}}function ax(t,e){const n=typeof t=="object"?t:Ac(),s=typeof t=="string"?t:e||"(default)",i=Rc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=O_("firestore");r&&JP(i,...r)}return i}function ul(t){return t._firestoreClient||UE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function UE(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new VD(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ZP(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vi(It.fromBase64String(e))}catch(n){throw new W(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vi(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=/^__.*__$/;class lx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,n,this.fieldTransforms):new xo(e,this.data,n,this.fieldTransforms)}}class VE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new _s(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ff{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ff(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ac(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if($E(this.sa)&&cx.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ux{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ol(e)}da(e,n,s,i=!1){return new ff({sa:e,methodName:n,fa:s,path:_t.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function BE(t){const e=t._freezeSettings(),n=ol(t._databaseId);return new ux(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hx(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);pf("Data must be an object, but it was:",o,s);const a=jE(s,o);let c,l;if(r.merge)c=new Mt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=lh(e,h,n);if(!o.contains(d))throw new W(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);qE(u,d)||u.push(d)}c=new Mt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new lx(new At(a),c,l)}class fl extends df{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fl}}function dx(t,e,n,s){const i=t.da(1,e,n);pf("Data must be an object, but it was:",i,s);const r=[],o=At.empty();ni(s,(c,l)=>{const u=gf(e,c,n);l=Qe(l);const h=i.ca(u);if(l instanceof fl)r.push(u);else{const d=pl(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Mt(r);return new VE(o,a,i.fieldTransforms)}function fx(t,e,n,s,i,r){const o=t.da(1,e,n),a=[lh(e,s,n)],c=[i];if(r.length%2!=0)throw new W(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(lh(e,r[d])),c.push(r[d+1]);const l=[],u=At.empty();for(let d=a.length-1;d>=0;--d)if(!qE(l,a[d])){const p=a[d];let m=c[d];m=Qe(m);const _=o.ca(p);if(m instanceof fl)l.push(p);else{const v=pl(m,_);v!=null&&(l.push(p),u.set(p,v))}}const h=new Mt(l);return new VE(u,h,o.fieldTransforms)}function pl(t,e){if(HE(t=Qe(t)))return pf("Unsupported field value:",e,t),jE(t,e);if(t instanceof df)return function(n,s){if(!$E(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=pl(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Qe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return r1(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ge.fromDate(n);return{timestampValue:ic(s.yt,i)}}if(n instanceof Ge){const i=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ic(s.yt,i)}}if(n instanceof dl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vi)return{bytesValue:fE(s.yt,n._byteString)};if(n instanceof Nt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gd(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${uf(n)}`)}(t,e)}function jE(t,e){const n={};return $w(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(s,i)=>{const r=pl(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function HE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof dl||t instanceof Vi||t instanceof Nt||t instanceof df)}function pf(t,e,n){if(!HE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=uf(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function lh(t,e,n){if((e=Qe(e))instanceof hl)return e._internalPath;if(typeof e=="string")return gf(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const px=new RegExp("[~\\*/\\[\\]]");function gf(t,e,n){if(e.search(px)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hl(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new W(S.INVALID_ARGUMENT,a+t+c)}function qE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(KE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gx extends WE{data(){return super.data()}}function KE(t,e){return typeof e=="string"?gf(t,e):e instanceof hl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mx{convertValue(e,n="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return ni(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new dl(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=jw(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(so(e));default:return null}}convertTimestamp(e){const n=ds(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Fe.fromString(e);Re(yE(s));const i=new no(s.get(1),s.get(3)),r=new K(s.popFirst(5));return i.isEqual(n)||jn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GE extends WE{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(KE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ya extends GE{data(e={}){return super.data(e)}}class QE{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new wr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ya(this._firestore,this._userDataWriter,s.key,s,new wr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ya(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ya(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:yx(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){t=Ht(t,Nt);const e=Ht(t.firestore,ps);return ix(ul(e),t._key).then(n=>XE(e,t,n))}class mf extends mx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function vx(t){t=Ht(t,Uo);const e=Ht(t.firestore,ps),n=ul(e),s=new mf(e);return zE(t._query),rx(n,t._query).then(i=>new QE(e,s,t,i))}function wx(t,e,n,...s){t=Ht(t,Nt);const i=Ht(t.firestore,ps),r=BE(i);let o;return o=typeof(e=Qe(e))=="string"||e instanceof hl?fx(r,"updateDoc",t._key,e,n,s):dx(r,"updateDoc",t._key,e),yf(i,[o.toMutation(t._key,cn.exists(!0))])}function Ex(t){return yf(Ht(t.firestore,ps),[new zd(t._key,cn.none())])}function Tx(t,e){const n=Ht(t.firestore,ps),s=ch(t),i=_x(t.converter,e);return yf(n,[hx(BE(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,cn.exists(!1))]).then(()=>s)}function _f(t,...e){var n,s,i;t=Qe(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||om(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(om(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof Nt)l=Ht(t.firestore,ps),u=el(t._key.path),c={next:h=>{e[o]&&e[o](XE(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ht(t,Uo);l=Ht(h.firestore,ps),u=h._query;const d=new mf(l);c={next:p=>{e[o]&&e[o](new QE(l,d,h,p))},error:e[o+1],complete:e[o+2]},zE(t._query)}return function(h,d,p,m){const _=new hf(m),v=new cf(d,_,p);return h.asyncQueue.enqueueAndForget(async()=>rf(await oc(h),v)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>of(await oc(h),v))}}(ul(l),u,a,c)}function yf(t,e){return function(n,s){const i=new Un;return n.asyncQueue.enqueueAndForget(async()=>$P(await sx(n),s,i)),i.promise}(ul(t),e)}function XE(t,e,n){const s=n.docs.get(e._key),i=new mf(t);return new GE(t,i,e._key,s,new wr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){nr=n})(Xs),Tn(new ln("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ps(new RD(n.getProvider("auth-internal")),new OD(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Lt(Ng,"3.8.3",t),Lt(Ng,"3.8.3","esm2017")})();const Ql=new WeakMap;function JE(t,e){return Ql.has(e)||Ql.set(e,t||{f:{},r:{},s:{},u:{}}),Ql.get(e)}function Ix(t,e,n,s){if(!t)return n;const[i,r]=ZE(t);if(!i)return n;const o=JE(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function bx(t,e,n,s){if(!t)return;const[i,r]=ZE(t);if(!i)return;const o=JE(void 0,s)[i],a=e||r;if(a)return n.then(c=>{o[a]=c}),a}function ZE(t){return PA(t)||xA(t)?["f",t.path]:MA(t)?["r",t.toString()]:LA(t)?["s",t.toString()]:[]}const Yl=new WeakMap;function Cx(t,e,n){const s=Xh();Yl.has(s)||Yl.set(s,new Map);const i=Yl.get(s),r=bx(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):xn}const Sx={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function uh(t,e,n,s){if(!OA(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(p=>{const m=Object.getOwnPropertyDescriptor(a,p);m&&!m.enumerable&&Object.defineProperty(h,p,m)});for(const p in a){const m=a[p];if(m==null||m instanceof Date||m instanceof Ge||m instanceof dl)h[p]=m;else if(Zh(m)){const _=l+p;h[p]=_ in n?c[p]:m.path,d[_]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[p]=Array(m.length);for(let _=0;_<m.length;_++){const v=m[_];v&&v.path in r&&(h[p][_]=r[v.path])}o(m,c[p]||h[p],l+p+".",[h[p],d])}else Js(m)?(h[p]={},o(m,c[p],l+p+".",[h[p],d])):h[p]=m}}return o(t,e,"",i),i}const vf={reset:!1,wait:!0,maxRefDepth:2,converter:Sx,snapshotOptions:{serverTimestamps:"estimate"}};function cc(t){for(const e in t)t[e].unsub()}function hh(t,e,n,s,i,r,o,a,c){const[l,u]=uh(s.data(t.snapshotOptions),Jh(e,n),i,t);r.set(e,n,l),dh(t,e,n,i,u,r,o,a,c)}function Rx({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const c=Object.create(null);let l=xn;return a.once?YE(t).then(u=>{u.exists()?hh(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):l=_f(t,u=>{u.exists()?hh(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{l(),cc(c)}}function dh(t,e,n,s,i,r,o,a,c){const l=Object.keys(i);if(Object.keys(s).filter(_=>l.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const d=l.length,p=Object.create(null);function m(_){_ in p&&++h>=d&&a(n)}l.forEach(_=>{const v=s[_],b=i[_],N=`${n}.${_}`;if(p[N]=!0,v)if(v.path!==b.path)v.unsub();else return;s[_]={data:()=>Jh(e,N),unsub:Rx({ref:b,target:e,path:N,depth:o,ops:r,resolve:m.bind(null,N),reject:c},t),path:b.path}})}function Ax(t,e,n,s,i,r){const o=Object.assign({},vf,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let d=sn(l?[]:t.value);l||n.set(t,h,[]);const p=s;let m,_=xn;const v=[],b={added:({newIndex:R,doc:P})=>{v.splice(R,0,Object.create(null));const G=v[R],[oe,ge]=uh(P.data(c),void 0,G,o);n.add(_e(d),R,oe),dh(o,d,`${h}.${R}`,G,ge,n,0,s.bind(null,P),i)},modified:({oldIndex:R,newIndex:P,doc:G})=>{const oe=_e(d),ge=v[R],j=oe[R],[be,ve]=uh(G.data(c),j,ge,o);v.splice(P,0,ge),n.remove(oe,R),n.add(oe,P,be),dh(o,d,`${h}.${P}`,ge,ve,n,0,s,i)},removed:({oldIndex:R})=>{const P=_e(d);n.remove(P,R),cc(v.splice(R,1)[0])}};function N(R){const P=R.docChanges(a);if(!m&&P.length){m=!0;let G=0;const oe=P.length,ge=Object.create(null);for(let j=0;j<oe;j++)ge[P[j].doc.id]=!0;s=j=>{j&&j.id in ge&&++G>=oe&&(l&&(n.set(t,h,_e(d)),d=t),p(_e(d)),s=xn)}}P.forEach(G=>{b[G.type](G)}),P.length||(l&&(n.set(t,h,_e(d)),d=t),s(_e(d)))}return u?vx(e).then(N).catch(i):_=_f(e,N,i),R=>{if(_(),R){const P=typeof R=="function"?R():[];n.set(t,h,P)}v.forEach(cc)}}function kx(t,e,n,s,i,r){const o=Object.assign({},vf,r),a="value",c=Object.create(null);s=FA(s,()=>Jh(t,a));let l=xn;function u(h){h.exists()?hh(o,t,a,h,c,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?YE(e).then(u).catch(i):l=_f(e,u,i),h=>{if(l(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}cc(c)}}function Nx(t,e){let n=xn;const s=Object.assign({},vf,e),i=_e(t),r=s.target||sn();UA()&&(s.once=!0),r.value=Ix(i,s.ssrKey,r.value,Xh());let o=r.value===void 0;const a=sn(!1),c=sn(),l=qm(),u=Am();let h=xn;function d(){let _=_e(t);const v=new Promise((b,N)=>{if(n(s.reset),!_)return n=xn,b(null);a.value=o,o=!0,_.converter||(_=_.withConverter(s.converter)),n=(Zh(_)?kx:Ax)(r,_,Ox,b,N,s)}).catch(b=>(l.value===v&&(c.value=b),Promise.reject(b))).finally(()=>{l.value===v&&(a.value=!1)});l.value=v}let p=xn;je(t)&&(p=Er(t,d)),d(),i&&(h=Cx(l.value,i,s.ssrKey)),Ic()&&l_(()=>l.value),u&&NT(m);function m(_=s.reset){p(),h(),n(_)}return Object.defineProperties(r,{error:{get:()=>c},data:{get:()=>r},pending:{get:()=>a},promise:{get:()=>l},stop:{get:()=>m}})}const Ox={set:(t,e,n)=>kA(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Ci(t,e){return Nx(t,{target:sn([]),...e})}function gl(t){return ax(Xh(t))}const Dx=E("h1",null,"Ofimatica",-1),Px=E("br",null,null,-1),xx=["src"],Mx=E("a",{href:"https://proyectovue-90870.web.app/pdfs/main.pdf",target:"_blank"},"Obtener Información",-1),Lx=E("button",null,"Inscribirse",-1),Fx={__name:"ofimatica",setup(t){const e=gl(),n=Ci(xs(e,"ofimatica"));return(s,i)=>(De(),$e(Me,null,[Dx,Px,(De(!0),$e(Me,null,yi(_e(n),r=>(De(),$e("div",{key:r.id,class:"curso"},[E("h2",null,Ye(r.nombre),1),E("p",null,Ye(r.duracion)+"Horas",1),E("p",null,Ye(r.categoria),1),E("img",{src:`https://proyectovue-90870.web.app/assets/${r.imagen}`,alt:"Imagen Curso",class:"fotos"},null,8,xx),Mx,Lx]))),128))],64))}};const Ux=E("h1",null,"Programacion",-1),Vx=E("br",null,null,-1),$x=["src"],Bx=E("a",{href:"https://proyectovue-90870.web.app/pdfs/main.pdf",target:"_blank"},"Obtener Información",-1),jx=E("button",null,"Inscribirse",-1),Hx={__name:"programacion",setup(t){const e=gl(),n=Ci(xs(e,"programacion"));return(s,i)=>(De(),$e(Me,null,[Ux,Vx,(De(!0),$e(Me,null,yi(_e(n),r=>(De(),$e("div",{key:r.id,class:"curso"},[E("h2",null,Ye(r.nombre),1),E("p",null,Ye(r.duracion)+" Horas",1),E("p",null,Ye(r.categoria),1),E("img",{src:`https://proyectovue-90870.web.app/assets/${r.imagen}`,alt:"Imagen Curso",class:"fotos"},null,8,$x),Bx,jx]))),128))],64))}};const qx=E("h1",null,"SOs",-1),Wx=E("br",null,null,-1),Kx=["src"],zx=E("a",{href:"https://proyectovue-90870.web.app/pdfs/main.pdf",target:"_blank"},"Obtener Información",-1),Gx=E("button",null,"Inscribirse",-1),Qx={__name:"sos",setup(t){const e=gl(),n=Ci(xs(e,"sos"));return(s,i)=>(De(),$e(Me,null,[qx,Wx,(De(!0),$e(Me,null,yi(_e(n),r=>(De(),$e("div",{key:r.id,class:"curso"},[E("h2",null,Ye(r.nombre),1),E("p",null,Ye(r.duracion)+"Horas",1),E("p",null,Ye(r.categoria),1),E("img",{src:`https://proyectovue-90870.web.app/assets/${r.imagen}`,alt:"Imagen Curso",class:"fotos"},null,8,Kx),zx,Gx]))),128))],64))}},Yx={__name:"login",setup(t){let e=sn(""),n=sn("");function s(){tS(ki,e.value,n.value).then(r=>{r.user}).catch(r=>{r.code,r.message})}function i(){AS(ki,new Xt).then(r=>{Xt.credentialFromResult(r).accessToken,r.user}).catch(r=>{r.code,r.message,r.customData.email,Xt.credentialFromError(r)})}return(r,o)=>(De(),$e(Me,null,[xe(" Usuario: "),ts(E("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>je(e)?e.value=a:e=a)},null,512),[[Fs,_e(e)]]),xe(" Password: "),ts(E("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=a=>je(n)?n.value=a:n=a)},null,512),[[Fs,_e(n)]]),E("p",null,[E("button",{onClick:s},"LOGIN :)")]),E("button",{onClick:i},"GOOGLE")],64))}},Xx={__name:"registro",setup(t){let e=sn(""),n=sn("");function s(){eS(ki,e.value,n.value).then(i=>{i.user}).catch(i=>{i.code,i.message})}return(i,r)=>(De(),$e(Me,null,[xe(" Usuario: "),ts(E("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>je(e)?e.value=o:e=o)},null,512),[[Fs,_e(e)]]),xe(" Password: "),ts(E("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=o=>je(n)?n.value=o:n=o)},null,512),[[Fs,_e(n)]]),E("p",null,[E("button",{onClick:s},"Registrese :)")])],64))}};const re=t=>(Dh("data-v-94eb8c37"),t=t(),Ph(),t),Jx=re(()=>E("h1",null,"Area de Administracion",-1)),Zx={class:"greetings"},eM=re(()=>E("h2",null,"Crear Curso",-1)),tM=re(()=>E("br",null,null,-1)),nM=re(()=>E("label",{for:"categoria"},"Categoria",-1)),sM=re(()=>E("br",null,null,-1)),iM=re(()=>E("option",{value:"programacion"},"Programacion",-1)),rM=re(()=>E("option",{value:"ofimatica"},"Ofimatica",-1)),oM=re(()=>E("option",{value:"sos"},"SOs",-1)),aM=[iM,rM,oM],cM=re(()=>E("br",null,null,-1)),lM=re(()=>E("label",{for:"nombre"},"Nombre",-1)),uM=re(()=>E("br",null,null,-1)),hM=re(()=>E("br",null,null,-1)),dM=re(()=>E("label",{for:"duracion"},"Duración",-1)),fM=re(()=>E("br",null,null,-1)),pM=re(()=>E("br",null,null,-1)),gM=re(()=>E("label",{for:"imagen"},"Imagen",-1)),mM=re(()=>E("br",null,null,-1)),_M=re(()=>E("br",null,null,-1)),yM=re(()=>E("h2",null,"Programacion",-1)),vM=re(()=>E("br",null,null,-1)),wM=["src"],EM=["onClick"],TM=re(()=>E("br",null,null,-1)),IM=re(()=>E("p",null,"Rellene el formulario de creacion y pulse editar",-1)),bM=re(()=>E("br",null,null,-1)),CM=["onClick"],SM=re(()=>E("br",null,null,-1)),RM=re(()=>E("h2",null,"Ofimatica",-1)),AM=re(()=>E("br",null,null,-1)),kM=["src"],NM=["onClick"],OM=re(()=>E("br",null,null,-1)),DM=re(()=>E("p",null,"Rellene el formulario de creacion y pulse editar",-1)),PM=re(()=>E("br",null,null,-1)),xM=["onClick"],MM=re(()=>E("br",null,null,-1)),LM=re(()=>E("h2",null,"SOs",-1)),FM=re(()=>E("br",null,null,-1)),UM=["src"],VM=["onClick"],$M=re(()=>E("br",null,null,-1)),BM=re(()=>E("p",null,"Rellene el formulario de creacion y pulse editar",-1)),jM=re(()=>E("br",null,null,-1)),HM=["onClick"],qM=re(()=>E("br",null,null,-1)),WM={__name:"administracion",setup(t){const e=gl();function n(){document.getElementById("categoria").value!=""&&Tx(xs(e,document.getElementById("categoria").value),{nombre:document.getElementById("nombre").value,duracion:document.getElementById("duracion").value,imagen:document.getElementById("imagen").value})}const s=Ci(xs(e,"programacion")),i=Ci(xs(e,"ofimatica")),r=Ci(xs(e,"sos"));function o(c,l){Ex(ch(e,l,c))}function a(c,l){const u=ch(e,l,c);wx(u,{nombre:document.getElementById("nombre").value,duracion:document.getElementById("duracion").value,imagen:document.getElementById("imagen").value}).then(()=>{console.log("El curso se ha actualizado correctamente")}).catch(h=>{console.error("Error al actualizar intentelo mas tarde.",h)})}return(c,l)=>(De(),$e(Me,null,[Jx,E("div",Zx,[eM,tM,nM,sM,ts(E("select",{name:"categoria","onUpdate:modelValue":l[0]||(l[0]=u=>c.categoria=u),id:"categoria"},aM,512),[[Ob,c.categoria]]),cM,lM,uM,ts(E("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=u=>c.nombre=u),id:"nombre"},null,512),[[Fs,c.nombre]]),hM,dM,fM,ts(E("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=u=>c.duracion=u),id:"duracion"},null,512),[[Fs,c.duracion]]),pM,gM,mM,ts(E("input",{type:"text","onUpdate:modelValue":l[3]||(l[3]=u=>c.imagen=u),id:"imagen"},null,512),[[Fs,c.imagen]]),_M,E("button",{onClick:l[4]||(l[4]=u=>n())},"Crear Curso"),yM,vM,(De(!0),$e(Me,null,yi(_e(s),u=>(De(),$e("div",{key:u.id,class:"curso"},[E("h2",null,Ye(u.nombre),1),E("p",null,Ye(u.duracion)+" Horas",1),E("p",null,Ye(u.categoria),1),E("img",{src:`http://localhost:5173/src/assets/cursos/${u.imagen}`,alt:"Imagen Curso",class:"fotos"},null,8,wM),E("button",{onClick:h=>o(u.id,"programacion")},"Borrar",8,EM),TM,IM,bM,E("button",{onClick:h=>a(u.id,"programacion")},"Editar",8,CM)]))),128)),SM,RM,AM,(De(!0),$e(Me,null,yi(_e(i),u=>(De(),$e("div",{key:u.id,class:"curso"},[E("h2",null,Ye(u.nombre),1),E("p",null,Ye(u.duracion)+"Horas",1),E("p",null,Ye(u.categoria),1),E("img",{src:`http://localhost:5173/src/assets/cursos/${u.imagen}`,alt:"Imagen Curso",class:"fotos"},null,8,kM),E("button",{onClick:h=>o(u.id,"ofimatica")},"Borrar",8,NM),OM,DM,PM,E("button",{onClick:h=>a(u.id,"ofimatica")},"Editar",8,xM)]))),128)),MM,LM,FM,(De(!0),$e(Me,null,yi(_e(r),u=>(De(),$e("div",{key:u.id,class:"curso"},[E("h2",null,Ye(u.nombre),1),E("p",null,Ye(u.duracion)+"Horas",1),E("p",null,Ye(u.categoria),1),E("img",{src:`https://proyectovue-90870.web.app/assets/${u.imagen}`,alt:"Imagen Curso",class:"fotos"},null,8,UM),E("button",{onClick:h=>o(u.id,"sos")},"Borrar",8,VM),$M,BM,jM,E("button",{onClick:h=>a(u.id,"sos")},"Editar",8,HM)]))),128)),qM])],64))}},KM=Fh(WM,[["__scopeId","data-v-94eb8c37"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ui=typeof window<"u";function zM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Xl(t,e){const n={};for(const s in e){const i=e[s];n[s]=un(i)?i.map(t):t(i)}return n}const Pr=()=>{},un=Array.isArray,GM=/\/$/,QM=t=>t.replace(GM,"");function Jl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=ZM(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function YM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function am(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function XM(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&$i(e.matched[s],n.matched[i])&&eT(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $i(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eT(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!JM(t[n],e[n]))return!1;return!0}function JM(t,e){return un(t)?cm(t,e):un(e)?cm(e,t):t===e}function cm(t,e){return un(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function ZM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ao;(function(t){t.pop="pop",t.push="push"})(ao||(ao={}));var xr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xr||(xr={}));function eL(t){if(!t)if(ui){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QM(t)}const tL=/^[^#]+#/;function nL(t,e){return t.replace(tL,"#")+e}function sL(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ml=()=>({left:window.pageXOffset,top:window.pageYOffset});function iL(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=sL(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function lm(t,e){return(history.state?history.state.position-e:-1)+t}const fh=new Map;function rL(t,e){fh.set(t,e)}function oL(t){const e=fh.get(t);return fh.delete(t),e}let aL=()=>location.protocol+"//"+location.host;function tT(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),am(c,"")}return am(n,t)+s+i}function cL(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=tT(t,location),m=n.value,_=e.value;let v=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}v=_?d.position-_.position:0}else s(p);i.forEach(b=>{b(n.value,m,{delta:v,type:ao.pop,direction:v?v>0?xr.forward:xr.back:xr.unknown})})};function c(){o=n.value}function l(d){i.push(d);const p=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:ml()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function um(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ml():null}}function lL(t){const{history:e,location:n}=window,s={value:tT(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:aL()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=we({},e.state,um(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=we({},i.value,e.state,{forward:c,scroll:ml()});r(u.current,u,!0);const h=we({},um(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function uL(t){t=eL(t);const e=lL(t),n=cL(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=we({location:"",base:t,go:s,createHref:nL.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function hL(t){return typeof t=="string"||t&&typeof t=="object"}function nT(t){return typeof t=="string"||typeof t=="symbol"}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sT=Symbol("");var hm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hm||(hm={}));function Bi(t,e){return we(new Error,{type:t,[sT]:!0},e)}function Nn(t,e){return t instanceof Error&&sT in t&&(e==null||!!(t.type&e))}const dm="[^/]+?",dL={sensitive:!1,strict:!1,start:!0,end:!0},fL=/[.+*?^${}()[\]/\\]/g;function pL(t,e){const n=we({},dL,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(fL,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:_,optional:v,regexp:b}=d;r.push({name:m,repeatable:_,optional:v});const N=b||dm;if(N!==dm){p+=10;try{new RegExp(`(${N})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+P.message)}}let R=_?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(R=v&&l.length<2?`(?:/${R})`:"/"+R),v&&(R+="?"),i+=R,p+=20,v&&(p+=-8),_&&(p+=-20),N===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=r[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:v}=p,b=m in l?l[m]:"";if(un(b)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=un(b)?b.join("/"):b;if(!N)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function gL(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function mL(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=gL(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(fm(s))return 1;if(fm(i))return-1}return i.length-s.length}function fm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _L={type:0,value:""},yL=/[a-zA-Z0-9_]/;function vL(t){if(!t)return[[]];if(t==="/")return[[_L]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:yL.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function wL(t,e,n){const s=pL(vL(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function EL(t,e){const n=[],s=new Map;e=mm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,m=TL(u);m.aliasOf=d&&d.record;const _=mm(e,u),v=[m];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of R)v.push(we({},m,{components:d?d.record.components:m.components,path:P,aliasOf:d?d.record:m}))}let b,N;for(const R of v){const{path:P}=R;if(h&&P[0]!=="/"){const G=h.record.path,oe=G[G.length-1]==="/"?"":"/";R.path=h.record.path+(P&&oe+P)}if(b=wL(R,h,_),d?d.alias.push(b):(N=N||b,N!==b&&N.alias.push(b),p&&u.name&&!gm(b)&&o(u.name)),m.children){const G=m.children;for(let oe=0;oe<G.length;oe++)r(G[oe],b,d&&d.children[oe])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return N?()=>{o(N)}:Pr}function o(u){if(nT(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&mL(u,n[h])>=0&&(u.record.path!==n[h].record.path||!iT(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gm(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},m,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Bi(1,{location:u});_=d.record.name,p=we(pm(h.params,d.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&pm(u.params,d.keys.map(N=>N.name))),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(N=>N.re.test(m)),d&&(p=d.parse(m),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!d)throw Bi(1,{location:u,currentLocation:h});_=d.record.name,p=we({},h.params,u.params),m=d.stringify(p)}const v=[];let b=d;for(;b;)v.unshift(b.record),b=b.parent;return{name:_,path:m,params:p,matched:v,meta:bL(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function pm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function TL(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:IL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function IL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function gm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bL(t){return t.reduce((e,n)=>we(e,n.meta),{})}function mm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function iT(t,e){return e.children.some(n=>n===t||iT(t,n))}const rT=/#/g,CL=/&/g,SL=/\//g,RL=/=/g,AL=/\?/g,oT=/\+/g,kL=/%5B/g,NL=/%5D/g,aT=/%5E/g,OL=/%60/g,cT=/%7B/g,DL=/%7C/g,lT=/%7D/g,PL=/%20/g;function wf(t){return encodeURI(""+t).replace(DL,"|").replace(kL,"[").replace(NL,"]")}function xL(t){return wf(t).replace(cT,"{").replace(lT,"}").replace(aT,"^")}function ph(t){return wf(t).replace(oT,"%2B").replace(PL,"+").replace(rT,"%23").replace(CL,"%26").replace(OL,"`").replace(cT,"{").replace(lT,"}").replace(aT,"^")}function ML(t){return ph(t).replace(RL,"%3D")}function LL(t){return wf(t).replace(rT,"%23").replace(AL,"%3F")}function FL(t){return t==null?"":LL(t).replace(SL,"%2F")}function lc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function UL(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(oT," "),o=r.indexOf("="),a=lc(o<0?r:r.slice(0,o)),c=o<0?null:lc(r.slice(o+1));if(a in e){let l=e[a];un(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function _m(t){let e="";for(let n in t){const s=t[n];if(n=ML(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(s)?s.map(r=>r&&ph(r)):[s&&ph(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function VL(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=un(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const $L=Symbol(""),ym=Symbol(""),Ef=Symbol(""),uT=Symbol(""),gh=Symbol("");function dr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Xn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Bi(4,{from:n,to:e})):h instanceof Error?a(h):hL(h)?a(Bi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Zl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(BL(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Xn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=zM(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Xn(d,n,s,r,o)()}))}}return i}function BL(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vm(t){const e=rn(Ef),n=rn(uT),s=$t(()=>e.resolve(_e(t.to))),i=$t(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex($i.bind(null,u));if(d>-1)return d;const p=wm(c[l-2]);return l>1&&wm(u)===p&&h[h.length-1].path!==p?h.findIndex($i.bind(null,c[l-2])):d}),r=$t(()=>i.value>-1&&WL(n.params,s.value.params)),o=$t(()=>i.value>-1&&i.value===n.matched.length-1&&eT(n.params,s.value.params));function a(c={}){return qL(c)?e[_e(t.replace)?"replace":"push"](_e(t.to)).catch(Pr):Promise.resolve()}return{route:s,href:$t(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const jL=i_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vm,setup(t,{slots:e}){const n=lo(vm(t)),{options:s}=rn(Ef),i=$t(()=>({[Em(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Em(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:I_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),HL=jL;function qL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WL(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!un(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function wm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Em=(t,e,n)=>t??e??n,KL=i_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=rn(gh),i=$t(()=>t.route||s.value),r=rn(ym,0),o=$t(()=>{let l=_e(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=$t(()=>i.value.matched[o.value]);aa(ym,$t(()=>o.value+1)),aa($L,a),aa(gh,i);const c=sn();return Er(()=>[c.value,a.value,t.name],([l,u,h],[d,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!$i(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Tm(n.default,{Component:d,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,v=I_(d,we({},m,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Tm(n.default,{Component:v,route:l})||v}}});function Tm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zL=KL;function GL(t){const e=EL(t.routes,t),n=t.parseQuery||UL,s=t.stringifyQuery||_m,i=t.history,r=dr(),o=dr(),a=dr(),c=qm(Qn);let l=Qn;ui&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xl.bind(null,T=>""+T),h=Xl.bind(null,FL),d=Xl.bind(null,lc);function p(T,F){let M,B;return nT(T)?(M=e.getRecordMatcher(T),B=F):B=T,e.addRoute(B,M)}function m(T){const F=e.getRecordMatcher(T);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function b(T,F){if(F=we({},F||c.value),typeof T=="string"){const f=Jl(n,T,F.path),g=e.resolve({path:f.path},F),y=i.createHref(f.fullPath);return we(f,g,{params:d(g.params),hash:lc(f.hash),redirectedFrom:void 0,href:y})}let M;if("path"in T)M=we({},T,{path:Jl(n,T.path,F.path).path});else{const f=we({},T.params);for(const g in f)f[g]==null&&delete f[g];M=we({},T,{params:h(T.params)}),F.params=h(F.params)}const B=e.resolve(M,F),he=T.hash||"";B.params=u(d(B.params));const Ue=YM(s,we({},T,{hash:xL(he),path:B.path})),ne=i.createHref(Ue);return we({fullPath:Ue,hash:he,query:s===_m?VL(T.query):T.query||{}},B,{redirectedFrom:void 0,href:ne})}function N(T){return typeof T=="string"?Jl(n,T,c.value.path):we({},T)}function R(T,F){if(l!==T)return Bi(8,{from:F,to:T})}function P(T){return ge(T)}function G(T){return P(we(N(T),{replace:!0}))}function oe(T){const F=T.matched[T.matched.length-1];if(F&&F.redirect){const{redirect:M}=F;let B=typeof M=="function"?M(T):M;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=N(B):{path:B},B.params={}),we({query:T.query,hash:T.hash,params:"path"in B?{}:T.params},B)}}function ge(T,F){const M=l=b(T),B=c.value,he=T.state,Ue=T.force,ne=T.replace===!0,f=oe(M);if(f)return ge(we(N(f),{state:typeof f=="object"?we({},he,f.state):he,force:Ue,replace:ne}),F||M);const g=M;g.redirectedFrom=F;let y;return!Ue&&XM(s,B,M)&&(y=Bi(16,{to:g,from:B}),ys(B,B,!0,!1)),(y?Promise.resolve(y):be(g,B)).catch(w=>Nn(w)?Nn(w,2)?w:zt(w):Ce(w,g,B)).then(w=>{if(w){if(Nn(w,2))return ge(we({replace:ne},N(w.to),{state:typeof w.to=="object"?we({},he,w.to.state):he,force:Ue}),F||g)}else w=ut(g,B,!0,ne,he);return ve(g,B,w),w})}function j(T,F){const M=R(T,F);return M?Promise.reject(M):Promise.resolve()}function be(T,F){let M;const[B,he,Ue]=QL(T,F);M=Zl(B.reverse(),"beforeRouteLeave",T,F);for(const f of B)f.leaveGuards.forEach(g=>{M.push(Xn(g,T,F))});const ne=j.bind(null,T,F);return M.push(ne),ai(M).then(()=>{M=[];for(const f of r.list())M.push(Xn(f,T,F));return M.push(ne),ai(M)}).then(()=>{M=Zl(he,"beforeRouteUpdate",T,F);for(const f of he)f.updateGuards.forEach(g=>{M.push(Xn(g,T,F))});return M.push(ne),ai(M)}).then(()=>{M=[];for(const f of T.matched)if(f.beforeEnter&&!F.matched.includes(f))if(un(f.beforeEnter))for(const g of f.beforeEnter)M.push(Xn(g,T,F));else M.push(Xn(f.beforeEnter,T,F));return M.push(ne),ai(M)}).then(()=>(T.matched.forEach(f=>f.enterCallbacks={}),M=Zl(Ue,"beforeRouteEnter",T,F),M.push(ne),ai(M))).then(()=>{M=[];for(const f of o.list())M.push(Xn(f,T,F));return M.push(ne),ai(M)}).catch(f=>Nn(f,8)?f:Promise.reject(f))}function ve(T,F,M){for(const B of a.list())B(T,F,M)}function ut(T,F,M,B,he){const Ue=R(T,F);if(Ue)return Ue;const ne=F===Qn,f=ui?history.state:{};M&&(B||ne?i.replace(T.fullPath,we({scroll:ne&&f&&f.scroll},he)):i.push(T.fullPath,he)),c.value=T,ys(T,F,M,ne),zt()}let ht;function Kt(){ht||(ht=i.listen((T,F,M)=>{if(!Vo.listening)return;const B=b(T),he=oe(B);if(he){ge(we(he,{replace:!0}),B).catch(Pr);return}l=B;const Ue=c.value;ui&&rL(lm(Ue.fullPath,M.delta),ml()),be(B,Ue).catch(ne=>Nn(ne,12)?ne:Nn(ne,2)?(ge(ne.to,B).then(f=>{Nn(f,20)&&!M.delta&&M.type===ao.pop&&i.go(-1,!1)}).catch(Pr),Promise.reject()):(M.delta&&i.go(-M.delta,!1),Ce(ne,B,Ue))).then(ne=>{ne=ne||ut(B,Ue,!1),ne&&(M.delta&&!Nn(ne,8)?i.go(-M.delta,!1):M.type===ao.pop&&Nn(ne,20)&&i.go(-1,!1)),ve(B,Ue,ne)}).catch(Pr)}))}let kn=dr(),rr=dr(),He;function Ce(T,F,M){zt(T);const B=rr.list();return B.length?B.forEach(he=>he(T,F,M)):console.error(T),Promise.reject(T)}function Ee(){return He&&c.value!==Qn?Promise.resolve():new Promise((T,F)=>{kn.add([T,F])})}function zt(T){return He||(He=!T,Kt(),kn.list().forEach(([F,M])=>T?M(T):F()),kn.reset()),T}function ys(T,F,M,B){const{scrollBehavior:he}=t;if(!ui||!he)return Promise.resolve();const Ue=!M&&oL(lm(T.fullPath,0))||(B||!M)&&history.state&&history.state.scroll||null;return Qm().then(()=>he(T,F,Ue)).then(ne=>ne&&iL(ne)).catch(ne=>Ce(ne,T,F))}const Gt=T=>i.go(T);let St;const ii=new Set,Vo={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:_,resolve:b,options:t,push:P,replace:G,go:Gt,back:()=>Gt(-1),forward:()=>Gt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:rr.add,isReady:Ee,install(T){const F=this;T.component("RouterLink",HL),T.component("RouterView",zL),T.config.globalProperties.$router=F,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(c)}),ui&&!St&&c.value===Qn&&(St=!0,P(i.location).catch(he=>{}));const M={};for(const he in Qn)M[he]=$t(()=>c.value[he]);T.provide(Ef,F),T.provide(uT,lo(M)),T.provide(gh,c);const B=T.unmount;ii.add(T),T.unmount=function(){ii.delete(T),ii.size<1&&(l=Qn,ht&&ht(),ht=null,c.value=Qn,St=!1,He=!1),B()}}};return Vo}function ai(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function QL(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>$i(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>$i(l,c))||i.push(c))}return[n,s,i]}let mh=!1;const YL=[{path:"/",component:Bb},{path:"/ofimatica",component:Fx},{path:"/programacion",component:Hx},{path:"/sos",component:Qx},{path:"/login",component:Yx},{path:"/registro",component:Xx},{path:"/administracion",component:KM,beforeEnter:(t,e)=>!!mh}],hT=GL({history:uL(),routes:YL});cy(ki,t=>{t?(t.uid,mh=!0):(mh=!1,hT.push("/"))});const dT=xb(sA);dT.use(hT);dT.mount("#app");

import{A as b,B as E,C as I,D as O,F as P,G as W,H as q,q as B,I as S,J as C,K as Y,L as $,M as m,N as w,O as D,P as j,z as p,Q as z,R as F,S as G,T as J,U as K,V as Q,W as U,w as X,p as Z,y as L,a as x,e as rr}from"./runtime.izc235HM.js";import{b as tr}from"./disclose-version.By_aIoLE.js";const er=["touchstart","touchmove"];function ar(r){return er.includes(r)}function nr(r){var t=I,a=O;b(null),E(null);try{return r()}finally{b(t),E(a)}}const V=new Set,N=new Set;function ir(r,t,a,o){function i(e){if(o.capture||y.call(t,e),!e.cancelBubble)return nr(()=>a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?W(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function fr(r,t,a,o,i){var e={capture:o,passive:i},u=ir(r,t,a,e);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(r,u,e)})}function lr(r){for(var t=0;t<r.length;t++)V.add(r[t]);for(var a of N)a(r)}function y(r){var A;var t=this,a=t.ownerDocument,o=r.type,i=((A=r.composedPath)==null?void 0:A.call(r))||[],e=i[0]||r.target,u=0,_=r.__root;if(_){var c=i.indexOf(_);if(c!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;c<=h&&(u=c)}if(e=i[u]||r.target,e!==t){q(r,"currentTarget",{configurable:!0,get(){return e||a}});var T=I,f=O;b(null),E(null);try{for(var n,s=[];e!==null;){var l=e.assignedSlot||e.parentNode||e.host||null;try{var d=e["__"+o];if(d!==void 0&&!e.disabled)if(B(d)){var[H,...M]=d;H.apply(e,[r,...M])}else d.call(e,r)}catch(g){n?s.push(g):n=g}if(r.cancelBubble||l===t||l===null)break;e=l}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=t,delete r.currentTarget,b(T),E(f)}}}function cr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function sr(r,t){return k(r,t)}function dr(r,t){S(),t.intro=t.intro??!1;const a=t.target,o=L,i=p;try{for(var e=C(a);e&&(e.nodeType!==8||e.data!==Y);)e=$(e);if(!e)throw m;w(!0),D(e),j();const u=k(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==z)throw F(),m;return w(!1),u}catch(u){if(u===m)return t.recover===!1&&G(),S(),J(a),w(!1),sr(r,t);throw u}finally{w(o),D(i)}}const v=new Map;function k(r,{target:t,anchor:a,props:o={},events:i,context:e,intro:u=!0}){S();var _=new Set,c=f=>{for(var n=0;n<f.length;n++){var s=f[n];if(!_.has(s)){_.add(s);var l=ar(s);t.addEventListener(s,y,{passive:l});var d=v.get(s);d===void 0?(document.addEventListener(s,y,{passive:l}),v.set(s,1)):v.set(s,d+1)}}};c(K(V)),N.add(c);var h=void 0,T=Q(()=>{var f=a??t.appendChild(U());return X(()=>{if(e){Z({});var n=rr;n.c=e}i&&(o.$$events=i),L&&tr(f,null),h=r(f,o)||{},L&&(O.nodes_end=p),e&&x()}),()=>{var l;for(var n of _){t.removeEventListener(n,y);var s=v.get(n);--s===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,s)}N.delete(c),f!==a&&((l=f.parentNode)==null||l.removeChild(f))}});return R.set(h,T),h}let R=new WeakMap;function _r(r,t){const a=R.get(r);return a?(R.delete(r),a(t)):Promise.resolve()}export{lr as d,fr as e,dr as h,sr as m,cr as s,_r as u};

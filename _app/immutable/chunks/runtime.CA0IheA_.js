var Rt=Array.isArray,Dt=Array.from,Ot=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,Zn=Object.getOwnPropertyDescriptors,xt=Object.prototype,kt=Array.prototype,zn=Object.getPrototypeOf;const Ct=()=>{};function Nt(n){return n()}function Jn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,dn=4,Y=8,tn=16,A=32,Z=64,D=128,V=256,p=512,S=1024,b=2048,N=4096,j=8192,Wn=16384,En=32768,bt=65536,Xn=1<<18,yn=1<<19,cn=Symbol("$state"),Pt=Symbol("legacy props"),Ft=Symbol("");function wn(n){return n===this.v}function Qn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Tn(n){return!Qn(n,this.v)}function nt(n){throw new Error("effect_in_teardown")}function tt(){throw new Error("effect_in_unowned_derived")}function rt(n){throw new Error("effect_orphan")}function et(){throw new Error("effect_update_depth_exceeded")}function qt(){throw new Error("hydration_failed")}function Lt(n){throw new Error("props_invalid_value")}function Mt(){throw new Error("state_descriptors_fixed")}function Ht(){throw new Error("state_prototype_fixed")}function at(){throw new Error("state_unsafe_local_read")}function st(){throw new Error("state_unsafe_mutation")}let z=!1;function Yt(){z=!0}function rn(n){return{f:0,v:n,reactions:null,equals:wn,version:0}}function jt(n){return mn(rn(n))}function lt(n,t=!1){var e;const r=rn(n);return t||(r.equals=Tn),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Bt(n,t=!1){return mn(lt(n,t))}function mn(n){return o!==null&&o.f&y&&(m===null?wt([n]):m.push(n)),n}function Ut(n,t){return en(n,$n(()=>on(n))),t}function en(n,t){return o!==null&&un()&&o.f&(y|tn)&&(m===null||!m.includes(n))&&st(),ut(n,t)}function ut(n,t){return n.equals(t)||(n.v=t,n.version=jn(),An(n,S),un()&&u!==null&&u.f&p&&!(u.f&A)&&(c!==null&&c.includes(n)?(T(u,S),J(u)):g===null?Tt([n]):g.push(n))),t}function An(n,t){var r=n.reactions;if(r!==null)for(var e=un(),a=r.length,s=0;s<a;s++){var l=r[s],i=l.f;i&S||!e&&l===u||(T(l,t),i&(p|D)&&(i&y?An(l,b):J(l)))}}const Vt=1,Gt=2,Kt=4,$t=8,Zt=16,zt=1,Jt=2,Wt=4,Xt=8,Qt=16,nr=1,tr=2,ot="[",it="[!",ft="]",gn={},rr=Symbol();function Sn(n){console.warn("hydration_mismatch")}let R=!1;function er(n){R=n}let w;function L(n){if(n===null)throw Sn(),gn;return w=n}function ar(){return L(O(w))}function sr(n){if(R){if(O(w)!==null)throw Sn(),gn;w=n}}function lr(n=1){if(R){for(var t=n,r=w;t--;)r=O(r);w=r}}function ur(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===ft){if(n===0)return t;n-=1}else(r===ot||r===it)&&(n+=1)}var e=O(t);t.remove(),t=e}}var vn,In,Rn;function or(){if(vn===void 0){vn=window;var n=Element.prototype,t=Node.prototype;In=_n(t,"firstChild").get,Rn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function W(n=""){return document.createTextNode(n)}function X(n){return In.call(n)}function O(n){return Rn.call(n)}function ir(n,t){if(!R)return X(n);var r=X(w);if(r===null)r=w.appendChild(W());else if(t&&r.nodeType!==3){var e=W();return r==null||r.before(e),L(e),e}return L(r),r}function fr(n,t){if(!R){var r=X(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function _r(n,t=1,r=!1){let e=R?w:n;for(var a;t--;)a=e,e=O(e);if(!R)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var l=W();return e===null?a==null||a.after(l):e.before(l),L(l),l}return L(e),e}function cr(n){n.textContent=""}function _t(n){var t=y|S;u===null?t|=D:u.f|=yn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function vr(n){const t=_t(n);return t.equals=Tn,t}function Dn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?an(e):F(e)}}}function ct(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function On(n){var t,r=u;$(ct(n));try{Dn(n),t=Bn(n)}finally{$(r)}return t}function xn(n){var t=On(n),r=(x||n.f&D)&&n.deps!==null?b:p;T(n,r),n.equals(t)||(n.v=t,n.version=jn())}function an(n){Dn(n),H(n,0),T(n,j),n.v=n.children=n.deps=n.ctx=n.reactions=null}function kn(n){u===null&&o===null&&rt(),o!==null&&o.f&D&&tt(),ln&&nt()}function vt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var a=(n&Z)!==0,s=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|S,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{pn(!0),B(l),l.f|=Wn}catch(_){throw F(l),_}finally{pn(i)}}else t!==null&&J(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&yn)===0;if(!E&&!a&&e&&(s!==null&&vt(l,s),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(l)}return l}function pr(n){const t=P(Y,null,!1);return T(t,p),t.teardown=n,t}function hr(n){kn();var t=u!==null&&(u.f&A)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Cn(n);return e}}function dr(n){return kn(),sn(n)}function Er(n){const t=P(Z,n,!0);return()=>{F(t)}}function Cn(n){return P(dn,n,!1)}function yr(n,t){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=sn(()=>{n(),!e.ran&&(e.ran=!0,en(r.l.r2,!0),$n(t))})}function wr(){var n=f;sn(()=>{if(on(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&T(r,b),q(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function sn(n){return P(Y,n,!0)}function Tr(n){return pt(n)}function pt(n,t=0){return P(Y|tn|t,n,!0)}function mr(n,t=!0){return P(Y|A,n,!0,t)}function Nn(n){var t=n.teardown;if(t!==null){const r=ln,e=o;hn(!0),K(null);try{t.call(null)}finally{hn(r),K(e)}}}function bn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)an(t[r])}}function Pn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function ht(n){for(var t=n.first;t!==null;){var r=t.next;t.f&A||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&Xn)&&n.nodes_start!==null){for(var e=n.nodes_start,a=n.nodes_end;e!==null;){var s=e===a?null:O(e);e.remove(),e=s}r=!0}Pn(n,t&&!r),bn(n),H(n,0),T(n,j);var l=n.transitions;if(l!==null)for(const E of l)E.stop();Nn(n);var i=n.parent;i!==null&&i.first!==null&&Fn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Fn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Ar(n,t){var r=[];qn(n,r,!0),dt(r,()=>{F(n),t&&t()})}function dt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var a of n)a.out(e)}else t()}function qn(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var a=e.next,s=(e.f&En)!==0||(e.f&A)!==0;qn(e,t,s?r:!1),e=a}}}function gr(n){Ln(n,!0)}function Ln(n,t){if(n.f&N){q(n)&&B(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,a=(r.f&En)!==0||(r.f&A)!==0;Ln(r,a?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let G=!1,Q=[];function Mn(){G=!1;const n=Q.slice();Q=[],Jn(n)}function Sr(n){G||(G=!0,queueMicrotask(Mn)),Q.push(n)}function Et(){G&&Mn()}const Hn=0,yt=1;let U=Hn,M=!1,k=!1,ln=!1;function pn(n){k=n}function hn(n){ln=n}let I=[],C=0;let o=null;function K(n){o=n}let u=null;function $(n){u=n}let m=null;function wt(n){m=n}let c=null,d=0,g=null;function Tt(n){g=n}let Yn=0,x=!1,f=null;function jn(){return++Yn}function un(){return!z||f!==null&&f.l===null}function q(n){var l,i;var t=n.f;if(t&S)return!0;if(t&b){var r=n.deps,e=(t&D)!==0;if(r!==null){var a;if(t&V){for(a=0;a<r.length;a++)((l=r[a]).reactions??(l.reactions=[])).push(n);n.f^=V}for(a=0;a<r.length;a++){var s=r[a];if(q(s)&&xn(s),e&&u!==null&&!x&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||T(n,p)}return!1}function mt(n,t,r){throw n}function Bn(n){var fn;var t=c,r=d,e=g,a=o,s=x,l=m,i=f,E=n.f;c=null,d=0,g=null,o=E&(A|Z)?null:n,x=!k&&(E&D)!==0,m=null,f=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(H(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!x)for(v=d;v<_.length;v++)((fn=_[v]).reactions??(fn.reactions=[])).push(n)}else _!==null&&d<_.length&&(H(n,d),_.length=d);return h}finally{c=t,d=r,g=e,o=a,x=s,m=l,f=i}}function At(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[e]=r[a],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(T(t,b),t.f&(D|V)||(t.f^=V),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)At(n,r[e])}function B(n){var t=n.f;if(!(t&j)){T(n,p);var r=u;u=n;try{t&tn?ht(n):Pn(n),bn(n),Nn(n);var e=Bn(n);n.teardown=typeof e=="function"?e:null,n.version=Yn}catch(a){mt(a)}finally{u=r}}}function Un(){C>1e3&&(C=0,et()),C++}function Vn(n){var t=n.length;if(t!==0){Un();var r=k;k=!0;try{for(var e=0;e<t;e++){var a=n[e];a.f&p||(a.f^=p);var s=[];Gn(a,s),gt(s)}}finally{k=r}}}function gt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(j|N))&&q(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Fn(e):e.fn=null))}}function St(){if(M=!1,C>1001)return;const n=I;I=[],Vn(n),M||(C=0)}function J(n){U===Hn&&(M||(M=!0,queueMicrotask(St)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|A)){if(!(r&p))return;t.f^=p}}I.push(t)}function Gn(n,t){var r=n.first,e=[];n:for(;r!==null;){var a=r.f,s=(a&A)!==0,l=s&&(a&p)!==0;if(!l&&!(a&N))if(a&Y){s?r.f^=p:q(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else a&dn&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],t.push(i),Gn(i,t)}function Kn(n){var t=U,r=I;try{Un();const a=[];U=yt,I=a,M=!1,Vn(r);var e=n==null?void 0:n();return Et(),(I.length>0||a.length>0)&&Kn(),C=0,e}finally{U=t,I=r}}async function Ir(){await Promise.resolve(),Kn()}function on(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&j){var e=On(n);return an(n),e}if(o!==null){m!==null&&m.includes(n)&&at();var a=o.deps;c===null&&a!==null&&a[d]===n?d++:c===null?c=[n]:c.push(n),g!==null&&u!==null&&u.f&p&&!(u.f&A)&&g.includes(n)&&(T(u,S),J(u))}else if(r&&n.deps===null)for(var s=n,l=s.parent,i=s;l!==null;)if(l.f&y){var E=l;i=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(s=n,q(s)&&xn(s)),n.v}function $n(n){const t=o;try{return o=null,n()}finally{o=t}}const It=~(S|b|p);function T(n,t){n.f=n.f&It|t}function Rr(n,t=1){var r=+on(n);return en(n,r+t),r}function Dr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(f.l={s:null,u:null,r1:[],r2:rn(!1)})}function Or(n){const t=f;if(t!==null){const l=t.e;if(l!==null){var r=u,e=o;t.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];$(s.effect),K(s.reaction),Cn(s.fn)}}finally{$(r),K(e)}}f=t.p,t.m=!0}return{}}function xr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)nn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&nn(r)}}}function nn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{nn(n[e],t)}catch{}const r=zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zn(r);for(let a in e){const s=e[a].get;if(s)try{s.call(n)}catch{}}}}}export{cr as $,u as A,tr as B,L as C,ar as D,En as E,en as F,Kn as G,Ot as H,lt as I,Ir as J,jt as K,Pt as L,K as M,$ as N,o as O,pr as P,Sr as Q,Rt as R,or as S,nr as T,ot as U,O as V,gn as W,er as X,ft as Y,Sn as Z,qt as _,Or as a,Dt as a0,Er as a1,cn as a2,xt as a3,kt as a4,rn as a5,Mt as a6,_n as a7,rr as a8,Ht as a9,Kt as aA,$t as aB,Zt as aC,Ft as aD,Zn as aE,yr as aF,wr as aG,Bt as aH,lr as aI,Ut as aJ,vn as aK,zn as aa,gr as ab,Ar as ac,it as ad,ur as ae,Cn as af,sn as ag,Lt as ah,bt as ai,A as aj,Z as ak,z as al,Jt as am,Xt as an,vr as ao,Wt as ap,Tn as aq,Rr as ar,zt as as,Qt as at,N as au,ut as av,qn as aw,dt as ax,Vt as ay,Gt as az,_r as b,ir as c,hr as d,f as e,fr as f,$n as g,Nt as h,Jn as i,on as j,xr as k,_t as l,Yt as m,Ct as n,pt as o,Dr as p,mr as q,sr as r,Qn as s,Tr as t,dr as u,F as v,R as w,w as x,W as y,X as z};

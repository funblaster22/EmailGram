var Ge=Object.defineProperty,Ye=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var me=(t,e,n)=>e in t?Ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,pe=(t,e)=>{for(var n in e||(e={}))Xe.call(e,n)&&me(t,n,e[n]);if(_e)for(var n of _e(e))He.call(e,n)&&me(t,n,e[n]);return t},be=(t,e)=>Ye(t,Ue(e));const We=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};We();const Ke="modulepreload",ge={},Je="/EmailGram/",Y=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Je}${r}`,r in ge)return;ge[r]=!0;const s=r.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":Ke,s||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),s)return new Promise((c,o)=>{i.addEventListener("load",c),i.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function y(){}function Le(t,e){for(const n in e)t[n]=e[n];return t}function Qe(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Oe(t){return t()}function ye(){return Object.create(null)}function M(t){t.forEach(Oe)}function ue(t){return typeof t=="function"}function ne(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let K;function se(t,e){return K||(K=document.createElement("a")),K.href=e,t===K.href}function Ze(t){return Object.keys(t).length===0}function je(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Se(t,e,n){t.$$.on_destroy.push(je(e,n))}function et(t){return t==null?"":t}function B(t){return t&&ue(t.destroy)?t.destroy:y}function $(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function L(t){return document.createElement(t)}function Ne(t){return document.createTextNode(t)}function V(){return Ne(" ")}function U(){return Ne("")}function Dt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Rt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function It(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Tt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Mt(t,e,n){t.classList[n?"add":"remove"](e)}function nt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}let G;function S(t){G=t}function X(){if(!G)throw new Error("Function called outside component initialization");return G}function Bt(t){X().$$.on_mount.push(t)}function rt(t){X().$$.after_update.push(t)}function st(t){X().$$.on_destroy.push(t)}function ot(){const t=X();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=nt(e,n);r.slice().forEach(l=>{l.call(t,s)})}}}function we(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const z=[],ve=[],Z=[],ke=[],Pe=Promise.resolve();let le=!1;function qe(){le||(le=!0,Pe.then(fe))}function it(){return qe(),Pe}function ae(t){Z.push(t)}const oe=new Set;let J=0;function fe(){const t=G;do{for(;J<z.length;){const e=z[J];J++,S(e),ct(e.$$)}for(S(null),z.length=0,J=0;ve.length;)ve.pop()();for(let e=0;e<Z.length;e+=1){const n=Z[e];oe.has(n)||(oe.add(n),n())}Z.length=0}while(z.length);for(;ke.length;)ke.pop()();le=!1,oe.clear(),S(t)}function ct(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ae)}}const ee=new Set;let I;function H(){I={r:0,c:[],p:I}}function W(){I.r||M(I.c),I=I.p}function x(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function C(t,e,n,r){if(t&&t.o){if(ee.has(t))return;ee.add(t),I.c.push(()=>{ee.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function lt(t,e){const n=e.token={};function r(s,l,i,c){if(e.token!==n)return;e.resolved=c;let o=e.ctx;i!==void 0&&(o=o.slice(),o[i]=c);const a=s&&(e.current=s)(o);let d=!1;e.block&&(e.blocks?e.blocks.forEach((w,m)=>{m!==l&&w&&(H(),C(w,1,1,()=>{e.blocks[m]===w&&(e.blocks[m]=null)}),W())}):e.block.d(1),a.c(),x(a,1),a.m(e.mount(),e.anchor),d=!0),e.block=a,e.blocks&&(e.blocks[l]=a),d&&fe()}if(Qe(t)){const s=X();if(t.then(l=>{S(s),r(e.then,1,e.value,l),S(null)},l=>{if(S(s),r(e.catch,2,e.error,l),S(null),!e.hasCatch)throw l}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Ft(t,e){C(t,1,1,()=>{e.delete(t.key)})}function Vt(t,e,n,r,s,l,i,c,o,a,d,w){let m=t.length,_=l.length,g=m;const k={};for(;g--;)k[t[g].key]=g;const E=[],P=new Map,q=new Map;for(g=_;g--;){const u=w(s,l,g),b=n(u);let p=i.get(b);p?r&&p.p(u,e):(p=a(b,u),p.c()),P.set(b,E[g]=p),b in k&&q.set(b,Math.abs(g-k[b]))}const j=new Set,h=new Set;function f(u){x(u,1),u.m(c,d),i.set(u.key,u),d=u.first,_--}for(;m&&_;){const u=E[_-1],b=t[m-1],p=u.key,A=b.key;u===b?(d=u.first,m--,_--):P.has(A)?!i.has(p)||j.has(p)?f(u):h.has(A)?m--:q.get(p)>q.get(A)?(h.add(p),f(u)):(j.add(A),m--):(o(b,i),m--)}for(;m--;){const u=t[m];P.has(u.key)||o(u,i)}for(;_;)f(E[_-1]);return E}function De(t,e){const n={},r={},s={$$scope:1};let l=t.length;for(;l--;){const i=t[l],c=e[l];if(c){for(const o in i)o in c||(r[o]=1);for(const o in c)s[o]||(n[o]=c[o],s[o]=1);t[l]=c}else for(const o in i)s[o]=1}for(const i in r)i in n||(n[i]=void 0);return n}function Re(t){return typeof t=="object"&&t!==null?t:{}}function T(t){t&&t.c()}function D(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,n),r||ae(()=>{const o=l.map(Oe).filter(ue);i?i.push(...o):M(o),t.$$.on_mount=[]}),c.forEach(ae)}function R(t,e){const n=t.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(z.push(t),qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,r,s,l,i,c=[-1]){const o=G;S(t);const a=t.$$={fragment:null,ctx:null,props:l,update:y,not_equal:s,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ye(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};i&&i(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(w,m,..._)=>{const g=_.length?_[0]:m;return a.ctx&&s(a.ctx[w],a.ctx[w]=g)&&(!a.skip_bound&&a.bound[w]&&a.bound[w](g),d&&at(t,w)),m}):[],a.update(),d=!0,M(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const w=tt(e.target);a.fragment&&a.fragment.l(w),w.forEach(O)}else a.fragment&&a.fragment.c();e.intro&&x(t.$$.fragment),D(t,e.target,e.anchor,e.customElement),fe()}S(o)}class he{$destroy(){R(this,1),this.$destroy=y}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Ze(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Q(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),typeof t.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let n=0;n<t.conditions.length;n++)if(!t.conditions[n]||typeof t.conditions[n]!="function")throw Error("Invalid parameter conditions["+n+"]")}return t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0),{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}const F=[];function Ie(t,e){return{subscribe:Te(t,e).subscribe}}function Te(t,e=y){let n;const r=new Set;function s(c){if(ne(t,c)&&(t=c,n)){const o=!F.length;for(const a of r)a[1](),F.push(a,t);if(o){for(let a=0;a<F.length;a+=2)F[a][0](F[a+1]);F.length=0}}}function l(c){s(c(t))}function i(c,o=y){const a=[c,o];return r.add(a),r.size===1&&(n=e(s)||y),c(t),()=>{r.delete(a),r.size===0&&(n(),n=null)}}return{set:s,update:l,subscribe:i}}function Me(t,e,n){const r=!Array.isArray(t),s=r?[t]:t,l=e.length<2;return Ie(n,i=>{let c=!1;const o=[];let a=0,d=y;const w=()=>{if(a)return;d();const _=e(r?o[0]:o,i);l?i(_):d=ue(_)?_:y},m=s.map((_,g)=>je(_,k=>{o[g]=k,a&=~(1<<g),c&&w()},()=>{a|=1<<g}));return c=!0,w(),function(){M(m),d()}})}function Be(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,s,l,i=[],c="",o=t.split("/");for(o[0]||o.shift();s=o.shift();)n=s[0],n==="*"?(i.push("wild"),c+="/(.*)"):n===":"?(r=s.indexOf("?",1),l=s.indexOf(".",1),i.push(s.substring(1,~r?r:~l?l:s.length)),c+=!!~r&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(c+=(~r?"?":"")+"\\"+s.substring(l))):c+="/"+s;return{keys:i,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}function ut(t){let e,n,r;const s=[t[2]];var l=t[0];function i(c){let o={};for(let a=0;a<s.length;a+=1)o=Le(o,s[a]);return{props:o}}return l&&(e=new l(i()),e.$on("routeEvent",t[7])),{c(){e&&T(e.$$.fragment),n=U()},m(c,o){e&&D(e,c,o),N(c,n,o),r=!0},p(c,o){const a=o&4?De(s,[Re(c[2])]):{};if(l!==(l=c[0])){if(e){H();const d=e;C(d.$$.fragment,1,0,()=>{R(d,1)}),W()}l?(e=new l(i()),e.$on("routeEvent",c[7]),T(e.$$.fragment),x(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else l&&e.$set(a)},i(c){r||(e&&x(e.$$.fragment,c),r=!0)},o(c){e&&C(e.$$.fragment,c),r=!1},d(c){c&&O(n),e&&R(e,c)}}}function ft(t){let e,n,r;const s=[{params:t[1]},t[2]];var l=t[0];function i(c){let o={};for(let a=0;a<s.length;a+=1)o=Le(o,s[a]);return{props:o}}return l&&(e=new l(i()),e.$on("routeEvent",t[6])),{c(){e&&T(e.$$.fragment),n=U()},m(c,o){e&&D(e,c,o),N(c,n,o),r=!0},p(c,o){const a=o&6?De(s,[o&2&&{params:c[1]},o&4&&Re(c[2])]):{};if(l!==(l=c[0])){if(e){H();const d=e;C(d.$$.fragment,1,0,()=>{R(d,1)}),W()}l?(e=new l(i()),e.$on("routeEvent",c[6]),T(e.$$.fragment),x(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else l&&e.$set(a)},i(c){r||(e&&x(e.$$.fragment,c),r=!0)},o(c){e&&C(e.$$.fragment,c),r=!1},d(c){c&&O(n),e&&R(e,c)}}}function dt(t){let e,n,r,s;const l=[ft,ut],i=[];function c(o,a){return o[1]?0:1}return e=c(t),n=i[e]=l[e](t),{c(){n.c(),r=U()},m(o,a){i[e].m(o,a),N(o,r,a),s=!0},p(o,[a]){let d=e;e=c(o),e===d?i[e].p(o,a):(H(),C(i[d],1,1,()=>{i[d]=null}),W(),n=i[e],n?n.p(o,a):(n=i[e]=l[e](o),n.c()),x(n,1),n.m(r.parentNode,r))},i(o){s||(x(n),s=!0)},o(o){C(n),s=!1},d(o){i[e].d(o),o&&O(r)}}}function Ee(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const re=Ie(null,function(e){e(Ee());const n=()=>{e(Ee())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}),Fe=Me(re,t=>t.location);Me(re,t=>t.querystring);const $e=Te(void 0);function ie(t,e){if(e=Ce(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return xe(t,e),{update(n){n=Ce(n),xe(t,n)}}}function xe(t,e){let n=e.href||t.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",r=>{r.preventDefault(),e.disabled||ht(r.currentTarget.getAttribute("href"))})}function Ce(t){return t&&typeof t=="string"?{href:t}:t||{}}function ht(t){history.replaceState(be(pe({},history.state),{__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY}),void 0,void 0),window.location.hash=t}function _t(t,e,n){let{routes:r={}}=e,{prefix:s=""}=e,{restoreScrollState:l=!1}=e;class i{constructor(f,u){if(!u||typeof u!="function"&&(typeof u!="object"||u._sveltesparouter!==!0))throw Error("Invalid component object");if(!f||typeof f=="string"&&(f.length<1||f.charAt(0)!="/"&&f.charAt(0)!="*")||typeof f=="object"&&!(f instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:b,keys:p}=Be(f);this.path=f,typeof u=="object"&&u._sveltesparouter===!0?(this.component=u.component,this.conditions=u.conditions||[],this.userData=u.userData,this.props=u.props||{}):(this.component=()=>Promise.resolve(u),this.conditions=[],this.props={}),this._pattern=b,this._keys=p}match(f){if(s){if(typeof s=="string")if(f.startsWith(s))f=f.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const A=f.match(s);if(A&&A[0])f=f.substr(A[0].length)||"/";else return null}}const u=this._pattern.exec(f);if(u===null)return null;if(this._keys===!1)return u;const b={};let p=0;for(;p<this._keys.length;){try{b[this._keys[p]]=decodeURIComponent(u[p+1]||"")||null}catch{b[this._keys[p]]=null}p++}return b}async checkConditions(f){for(let u=0;u<this.conditions.length;u++)if(!await this.conditions[u](f))return!1;return!0}}const c=[];r instanceof Map?r.forEach((h,f)=>{c.push(new i(f,h))}):Object.keys(r).forEach(h=>{c.push(new i(h,r[h]))});let o=null,a=null,d={};const w=ot();async function m(h,f){await it(),w(h,f)}let _=null,g=null;l&&(g=h=>{h.state&&h.state.__svelte_spa_router_scrollY?_=h.state:_=null},window.addEventListener("popstate",g),rt(()=>{_?window.scrollTo(_.__svelte_spa_router_scrollX,_.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let k=null,E=null;const P=re.subscribe(async h=>{k=h;let f=0;for(;f<c.length;){const u=c[f].match(h.location);if(!u){f++;continue}const b={route:c[f].path,location:h.location,querystring:h.querystring,userData:c[f].userData,params:u&&typeof u=="object"&&Object.keys(u).length?u:null};if(!await c[f].checkConditions(b)){n(0,o=null),E=null,m("conditionsFailed",b);return}m("routeLoading",Object.assign({},b));const p=c[f].component;if(E!=p){p.loading?(n(0,o=p.loading),E=p,n(1,a=p.loadingParams),n(2,d={}),m("routeLoaded",Object.assign({},b,{component:o,name:o.name,params:a}))):(n(0,o=null),E=null);const A=await p();if(h!=k)return;n(0,o=A&&A.default||A),E=p}u&&typeof u=="object"&&Object.keys(u).length?n(1,a=u):n(1,a=null),n(2,d=c[f].props),m("routeLoaded",Object.assign({},b,{component:o,name:o.name,params:a})).then(()=>{$e.set(a)});return}n(0,o=null),E=null,$e.set(void 0)});st(()=>{P(),g&&window.removeEventListener("popstate",g)});function q(h){we.call(this,t,h)}function j(h){we.call(this,t,h)}return t.$$set=h=>{"routes"in h&&n(3,r=h.routes),"prefix"in h&&n(4,s=h.prefix),"restoreScrollState"in h&&n(5,l=h.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[o,a,d,r,s,l,q,j]}class mt extends he{constructor(e){super(),de(this,e,_t,dt,ne,{routes:3,prefix:4,restoreScrollState:5})}}var pt="/EmailGram/assets/home.378a979e.svg",bt="/EmailGram/assets/chat.044c3ddb.svg",gt="/EmailGram/assets/account.f442b139.svg";const te=[];let Ve;function ze(t){const e=t.pattern.test(Ve);Ae(t,t.className,e),Ae(t,t.inactiveClassName,!e)}function Ae(t,e,n){(e||"").split(" ").forEach(r=>{!r||(t.node.classList.remove(r),n&&t.node.classList.add(r))})}re.subscribe(t=>{Ve=t.location+(t.querystring?"?"+t.querystring:""),te.map(ze)});function ce(t,e){if(e&&(typeof e=="string"||typeof e=="object"&&e instanceof RegExp)?e={path:e}:e=e||{},!e.path&&t.hasAttribute("href")&&(e.path=t.getAttribute("href"),e.path&&e.path.length>1&&e.path.charAt(0)=="#"&&(e.path=e.path.substring(1))),e.className||(e.className="active"),!e.path||typeof e.path=="string"&&(e.path.length<1||e.path.charAt(0)!="/"&&e.path.charAt(0)!="*"))throw Error('Invalid value for "path" argument');const{pattern:n}=typeof e.path=="string"?Be(e.path):{pattern:e.path},r={node:t,className:e.className,inactiveClassName:e.inactiveClassName,pattern:n};return te.push(r),ze(r),{destroy(){te.splice(te.indexOf(r),1)}}}function yt(t){let e,n,r,s,l,i,c,o,a,d,w,m,_,g,k,E,P,q,j,h,f;return{c(){e=L("div"),n=L("div"),r=L("a"),s=L("img"),i=V(),c=L("span"),c.textContent="Feed",o=V(),a=L("a"),d=L("img"),m=V(),_=L("span"),_.textContent="Messages",g=V(),k=L("a"),E=L("img"),q=V(),j=L("span"),j.textContent="Account",se(s.src,l=pt)||v(s,"src",l),v(s,"alt","home icon"),v(s,"class","svelte-cw9msi"),v(c,"class","svelte-cw9msi"),v(r,"class","item svelte-cw9msi"),v(r,"href","/feed"),se(d.src,w=bt)||v(d,"src",w),v(d,"alt","chat bubble icon"),v(d,"class","svelte-cw9msi"),v(_,"class","svelte-cw9msi"),v(a,"class","item svelte-cw9msi"),v(a,"href","/messages"),se(E.src,P=gt)||v(E,"src",P),v(E,"alt","account icon"),v(E,"class","svelte-cw9msi"),v(j,"class","svelte-cw9msi"),v(k,"class","item svelte-cw9msi"),v(k,"href","/account"),v(n,"class","flex svelte-cw9msi"),v(e,"class",et("navigation hor compact")+" svelte-cw9msi")},m(u,b){N(u,e,b),$(e,n),$(n,r),$(r,s),$(r,i),$(r,c),$(n,o),$(n,a),$(a,d),$(a,m),$(a,_),$(n,g),$(n,k),$(k,E),$(k,q),$(k,j),h||(f=[B(ce.call(null,r)),B(ie.call(null,r)),B(ce.call(null,a,new RegExp("/messages/?w*"))),B(ie.call(null,a)),B(ce.call(null,k)),B(ie.call(null,k))],h=!0)},p:y,i:y,o:y,d(u){u&&O(e),h=!1,M(f)}}}function wt(t,e,n){let r;return Se(t,Fe,s=>n(0,r=s)),console.log(r),[]}class vt extends he{constructor(e){super(),de(this,e,wt,yt,ne,{})}}function kt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Ct,then:xt,catch:$t,value:1,blocks:[,,,]};return lt(Y(()=>import("./Home.d10f3092.js"),[]),r),{c(){e=U(),r.block.c()},m(s,l){N(s,e,l),r.block.m(s,r.anchor=l),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(s,l){t=s},i(s){n||(x(r.block),n=!0)},o(s){for(let l=0;l<3;l+=1){const i=r.blocks[l];C(i)}n=!1},d(s){s&&O(e),r.block.d(s),r.token=null,r=null}}}function Et(t){let e,n,r,s,l;return n=new mt({props:{routes:{"/feed":Q({asyncComponent:Lt}),"/messages":Q({asyncComponent:Ot}),"/messages/:conversationId":Q({asyncComponent:jt}),"/account":Q({asyncComponent:St})}}}),s=new vt({}),{c(){e=L("div"),T(n.$$.fragment),r=V(),T(s.$$.fragment),v(e,"class","flex-grow-[999] overflow-auto")},m(i,c){N(i,e,c),D(n,e,null),N(i,r,c),D(s,i,c),l=!0},p:y,i(i){l||(x(n.$$.fragment,i),x(s.$$.fragment,i),l=!0)},o(i){C(n.$$.fragment,i),C(s.$$.fragment,i),l=!1},d(i){i&&O(e),R(n),i&&O(r),R(s,i)}}}function $t(t){return{c:y,m:y,i:y,o:y,d:y}}function xt(t){let e,n,r;var s=t[1].default;function l(i){return{}}return s&&(e=new s(l())),{c(){e&&T(e.$$.fragment),n=U()},m(i,c){e&&D(e,i,c),N(i,n,c),r=!0},i(i){r||(e&&x(e.$$.fragment,i),r=!0)},o(i){e&&C(e.$$.fragment,i),r=!1},d(i){i&&O(n),e&&R(e,i)}}}function Ct(t){return{c:y,m:y,i:y,o:y,d:y}}function At(t){let e,n,r,s;const l=[Et,kt],i=[];function c(o,a){return o[0]!=="/"?0:1}return n=c(t),r=i[n]=l[n](t),{c(){e=L("main"),r.c(),v(e,"class","max-w-lg h-screen mx-auto w-screen border border-black flex flex-col")},m(o,a){N(o,e,a),i[n].m(e,null),s=!0},p(o,[a]){let d=n;n=c(o),n===d?i[n].p(o,a):(H(),C(i[d],1,1,()=>{i[d]=null}),W(),r=i[n],r?r.p(o,a):(r=i[n]=l[n](o),r.c()),x(r,1),r.m(e,null))},i(o){s||(x(r),s=!0)},o(o){C(r),s=!1},d(o){o&&O(e),i[n].d()}}}const Lt=()=>Y(()=>import("./Feed.e2ce5303.js"),["assets/Feed.e2ce5303.js","assets/Feed.ca336953.css","assets/svelte.12aa2442.js","assets/Spacer.be7c3e9b.js","assets/gapi.e7450da9.js"]),Ot=()=>Y(()=>import("./Messages.79e7eb72.js"),["assets/Messages.79e7eb72.js","assets/Messages.e7bd1f32.css","assets/svelte.12aa2442.js"]),jt=()=>Y(()=>import("./Thread.3847b87a.js"),["assets/Thread.3847b87a.js","assets/Thread.80567c8f.css","assets/Spacer.be7c3e9b.js"]),St=()=>Y(()=>import("./Account.5c732c99.js"),["assets/Account.5c732c99.js","assets/Account.218f50ce.css","assets/gapi.e7450da9.js"]);function Nt(t,e,n){let r;return Se(t,Fe,s=>n(0,r=s)),[r]}class Pt extends he{constructor(e){super(),de(this,e,Nt,At,ne,{})}}new Pt({target:document.getElementById("app")});export{Ft as A,Te as B,Mt as C,Dt as D,Rt as E,Se as F,he as S,N as a,Tt as b,ot as c,O as d,L as e,ve as f,V as g,T as h,de as i,v as j,se as k,$ as l,D as m,y as n,st as o,It as p,x as q,C as r,ne as s,Ne as t,R as u,Bt as v,U as w,H as x,Vt as y,W as z};

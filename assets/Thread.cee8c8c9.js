import{S as P,i as S,s as B,e as c,t as H,b as m,C as p,a as x,l as f,p as L,n as $,d as k,w as A,j as F,m as N,q as D,r as E,u as G,h as y,D as I,E as J,x as K,y as O,z as Q,A as R}from"./index.ac2bfc85.js";function U(i){let e,n;return{c(){e=c("p"),n=H(i[1]),m(e,"class","from-me from-them emoji svelte-zsm8so"),p(e,"from-them",!i[0]),p(e,"from-me",i[0]),p(e,"emoji",i[2])},m(t,s){x(t,e,s),f(e,n)},p(t,[s]){s&2&&L(n,t[1]),s&1&&p(e,"from-them",!t[0]),s&1&&p(e,"from-me",t[0])},i:$,o:$,d(t){t&&k(e)}}}function V(i,e,n){let{isMe:t}=e,{slot:s=""}=e,o=(s.match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)||[]).length,u=o>0&&o<=3;return i.$$set=l=>{"isMe"in l&&n(0,t=l.isMe),"slot"in l&&n(1,s=l.slot)},[t,s,u]}class W extends P{constructor(e){super(),S(this,e,V,U,B,{isMe:0,slot:1})}}function q(i,e,n){const t=i.slice();return t[2]=e[n],t}function z(i,e){let n,t,s;return t=new W({props:{isMe:e[2].isMe,slot:e[2].body}}),{key:i,first:null,c(){n=A(),F(t.$$.fragment),this.first=n},m(o,u){x(o,n,u),N(t,o,u),s=!0},p(o,u){e=o;const l={};u&1&&(l.isMe=e[2].isMe),u&1&&(l.slot=e[2].body),t.$set(l)},i(o){s||(D(t.$$.fragment,o),s=!0)},o(o){E(t.$$.fragment,o),s=!1},d(o){o&&k(n),G(t,o)}}}function X(i){let e,n,t,s,o,u,l=[],T=new Map,v,b,j,_,h,M,w,g=i[0];const C=a=>a[2].id;for(let a=0;a<g.length;a+=1){let r=q(i,g,a),d=C(r);T.set(d,l[a]=z(d,r))}return{c(){e=c("div"),n=c("div"),n.innerHTML=`<img class="w-10 aspect-square mx-auto" src="#" alt="Profile picture"/> 
        <small class="">Name</small>`,t=y(),s=c("div"),o=c("small"),o.textContent="Person joined the group!",u=y();for(let a=0;a<l.length;a+=1)l[a].c();v=y(),b=c("small"),b.textContent="Person left the group :(",j=y(),_=c("form"),_.innerHTML=`<button type="button">\u2795</button> 
        <button type="button">\u{1F5BC}\uFE0F</button> 
        <input class="w-full border border-gray-300 rounded-full p-1" placeholder="Message" name="message" autocomplete="off"/> 
        <button type="submit">\u{1F4E8}</button>`,m(n,"class","text-center border-b border-gray-300"),m(o,"class","text-center text-gray-400"),m(b,"class","text-center text-gray-400"),m(s,"class","imessage svelte-19znep7"),m(_,"class","flex"),m(e,"class","flex flex-col h-full")},m(a,r){x(a,e,r),f(e,n),f(e,t),f(e,s),f(s,o),f(s,u);for(let d=0;d<l.length;d+=1)l[d].m(s,null);f(s,v),f(s,b),f(e,j),f(e,_),h=!0,M||(w=I(_,"submit",J(i[1])),M=!0)},p(a,[r]){r&1&&(g=a[0],K(),l=O(l,r,C,1,a,g,T,s,R,z,v,q),Q())},i(a){if(!h){for(let r=0;r<g.length;r+=1)D(l[r]);h=!0}},o(a){for(let r=0;r<l.length;r+=1)E(l[r]);h=!1},d(a){a&&k(e);for(let r=0;r<l.length;r+=1)l[r].d();M=!1,w()}}}function Y(i,e,n){let t=[{id:"0",isMe:!0,body:"\u{1F600}"},{id:"1",isMe:!1,body:"hello"}];function s(o){const u=o.currentTarget,l=new FormData(u).get("message");n(0,t=[...t,{id:t.length.toString(),isMe:!0,body:l}]),u.reset()}return[t,s]}class ee extends P{constructor(e){super(),S(this,e,Y,X,B,{})}}export{ee as default};

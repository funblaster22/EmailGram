import{S as C,i as z,s as B,e as g,t as L,j as h,C as d,a as _,l as y,p as A,n as S,d as p,w as F,h as D,m as E,q as $,r as k,u as H,g as v,D as N,E as P,x as G,y as I,z as J,A as K}from"./index.7c0ff3be.js";import{S as O}from"./Spacer.be7c3e9b.js";function Q(r){let t,n;return{c(){t=g("p"),n=L(r[1]),h(t,"class","from-me from-them emoji svelte-zsm8so"),d(t,"from-them",!r[0]),d(t,"from-me",r[0]),d(t,"emoji",r[2])},m(e,s){_(e,t,s),y(t,n)},p(e,[s]){s&2&&A(n,e[1]),s&1&&d(t,"from-them",!e[0]),s&1&&d(t,"from-me",e[0])},i:S,o:S,d(e){e&&p(t)}}}function R(r,t,n){let{isMe:e}=t,{slot:s=""}=t,a=(s.match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)||[]).length,u=a>0&&a<=3;return r.$$set=i=>{"isMe"in i&&n(0,e=i.isMe),"slot"in i&&n(1,s=i.slot)},[e,s,u]}class U extends C{constructor(t){super(),z(this,t,R,Q,B,{isMe:0,slot:1})}}function q(r,t,n){const e=r.slice();return e[2]=t[n],e}function x(r,t){let n,e,s;return e=new U({props:{isMe:t[2].isMe,slot:t[2].body}}),{key:r,first:null,c(){n=F(),D(e.$$.fragment),this.first=n},m(a,u){_(a,n,u),E(e,a,u),s=!0},p(a,u){t=a;const i={};u&1&&(i.isMe=t[2].isMe),u&1&&(i.slot=t[2].body),e.$set(i)},i(a){s||($(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){a&&p(n),H(e,a)}}}function V(r){let t,n,e,s=[],a=new Map,u,i,w,m,b,M,T,c=r[0];const j=l=>l[2].id;for(let l=0;l<c.length;l+=1){let o=q(r,c,l),f=j(o);a.set(f,s[l]=x(f,o))}return i=new O({}),{c(){t=g("div"),t.innerHTML=`<img class="w-10 aspect-square mx-auto" src="#" alt="Profile picture"/> 
    <small class="">Name</small>`,n=v(),e=g("div");for(let l=0;l<s.length;l+=1)s[l].c();u=v(),D(i.$$.fragment),w=v(),m=g("form"),m.innerHTML=`<button type="button">\u2795</button> 
        <button type="button">\u{1F5BC}\uFE0F</button> 
        <input class="w-full border border-gray-300 rounded-full p-1" placeholder="Message" name="message" autocomplete="off"/> 
        <button type="submit">\u{1F4E8}</button>`,h(t,"class","text-center border-b border-gray-300"),h(m,"class","flex"),h(e,"class","imessage svelte-boiqst")},m(l,o){_(l,t,o),_(l,n,o),_(l,e,o);for(let f=0;f<s.length;f+=1)s[f].m(e,null);y(e,u),E(i,e,null),y(e,w),y(e,m),b=!0,M||(T=N(m,"submit",P(r[1])),M=!0)},p(l,[o]){o&1&&(c=l[0],G(),s=I(s,o,j,1,l,c,a,e,K,x,u,q),J())},i(l){if(!b){for(let o=0;o<c.length;o+=1)$(s[o]);$(i.$$.fragment,l),b=!0}},o(l){for(let o=0;o<s.length;o+=1)k(s[o]);k(i.$$.fragment,l),b=!1},d(l){l&&p(t),l&&p(n),l&&p(e);for(let o=0;o<s.length;o+=1)s[o].d();H(i),M=!1,T()}}}function W(r,t,n){let e=[{id:"0",isMe:!0,body:"\u{1F600}"},{id:"1",isMe:!1,body:"hello"}];function s(a){const u=a.currentTarget,i=new FormData(u).get("message");n(0,e=[...e,{id:e.length.toString(),isMe:!0,body:i}]),u.reset()}return[e,s]}class Z extends C{constructor(t){super(),z(this,t,W,V,B,{})}}export{Z as default};

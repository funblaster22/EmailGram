import{B as c}from"./index.ac2bfc85.js";function i(e,t){let n=[];if(e[t]===void 0)return[e];for(const s of e[t])n=n.concat(i(s,t));return n}function I(e){const t=(e.getTime()-new Date().setUTCHours(0,0,0,0))/864e5,n=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}).format(t,"days");return n.split(" ").length===1?n:Math.abs(t)<7?e.toLocaleString(void 0,{timeZone:"UTC",weekday:"long"}):e.toLocaleDateString()}const r="975670416072-iabafb9dtffjf2ipq4tqmfj4min62k17.apps.googleusercontent.com",g="AIzaSyDDWq6ZoZkDIVbhmkIYdRlg3Lapuhm1WrY",l=["https://www.googleapis.com/auth/gmail.modify"],u=["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],{set:a,subscribe:f}=c(void 0),v={subscribe:f};function d(){gapi.load("client:auth2",m)}d();function m(){gapi.client.init({apiKey:g,clientId:r,discoveryDocs:u,scope:l.join(" ")}).then(function(){gapi.auth2.getAuthInstance().isSignedIn.listen(o),o(gapi.auth2.getAuthInstance().isSignedIn.get())},console.log)}function o(e){if(console.log("SIGNED",e?"IN!":"OUT!"),e){const t=gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();a({id:t.getId(),fullName:t.getName(),imageUrl:t.getImageUrl(),email:t.getEmail()})}else a(void 0)}function b(e){gapi.auth2.getAuthInstance().signIn()}function w(e){gapi.auth2.getAuthInstance().signOut()}function y(e,t){for(const n of e)if(n.name===t)return n.value}function p(e){return e.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"")}function D(e){const t=i(e,"parts").filter(n=>n.mimeType==="text/html")[0].body.data;return decodeURIComponent(escape(window.atob(p(t))))}function S(e){return i(e,"parts").filter(t=>t.mimeType.includes("image/"))}export{S as a,y as b,w as c,p as f,D as g,b as h,I as r,v as u};

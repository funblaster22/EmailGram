import{S as p,i as f,s as b,h as y,e as o,b as h,a as u,n as m,d,F as v,D as c}from"./index.ac2bfc85.js";import{u as g,h as _,c as k}from"./gapi.2a596be9.js";function S(n){let e,l,i;return{c(){e=o("button"),e.textContent="Sign in"},m(a,s){u(a,e,s),l||(i=c(e,"click",_),l=!0)},p:m,d(a){a&&d(e),l=!1,i()}}}function w(n){let e,l,i;return{c(){e=o("button"),e.textContent="Sign out"},m(a,s){u(a,e,s),l||(i=c(e,"click",k),l=!0)},p:m,d(a){a&&d(e),l=!1,i()}}}function z(n){let e,l;function i(t,r){return t[0]?w:S}let a=i(n),s=a(n);return{c(){s.c(),e=y(),l=o("div"),l.innerHTML=`<div class="settingGroup svelte-henz6m">Messages
        <details><summary class="svelte-henz6m">\u{1F512} Security</summary>
            hidden</details> 
        <details><summary class="svelte-henz6m">\u{1F4AC} Message requests</summary> 
            <small>When enabled, messages from new senders will be sent here</small> 
            <ul><li><label><input type="checkbox" name="requests"/> Enable</label></li></ul></details></div> 
    <div class="settingGroup svelte-henz6m">UI
        <details><summary class="svelte-henz6m">\u2600\uFE0F\u{1F319} Dark mode</summary> 
            <ul><li><label><input type="radio" name="dark" value="system"/> System</label></li> 
                <li><label><input type="radio" name="dark" value="on"/> On</label></li> 
                <li><label><input type="radio" name="dark" value="off"/> Off</label></li></ul></details> 
        <details><summary class="svelte-henz6m">\u{1F441}\uFE0F Read receipts</summary> 
            <small>Send a tracker so you can see when the recipient opens your message</small> 
            <ul><li><label><input type="radio" name="receipt" value="on"/> All messages</label></li> 
                <li><label><input type="radio" name="receipt" value="off"/> Specific messages</label></li></ul></details> 
        <details><summary class="svelte-henz6m">\u270F\uFE0F Editable messages</summary> 
            <small>Send emails as images so that they can be edited after sent</small> 
            <ul><li><label><input type="radio" name="editable" value="on"/> All messages</label></li> 
                <li><label><input type="radio" name="editable" value="off"/> Specific messages</label></li></ul></details> 
        <details><summary class="svelte-henz6m">\u{1F4E5} Filters</summary> 
            
            <small>Change what emails show up in feed or messages (supports Gmail search syntax)</small> 
            <fieldset><legend>Feed</legend> 
                <ul><li><input name="new-feed-rule" placeholder="New rule"/></li> 
                    <li><label><input type="radio" name="filter-default" value="feed"/> Everything else</label></li></ul></fieldset> 
            <fieldset><legend>Messages</legend> 
                <ul><li><input name="new-feed-rule" placeholder="New rule"/></li> 
                    <li><label><input type="radio" name="filter-default" value="messages"/> Everything else</label></li></ul></fieldset> 
            <fieldset><legend>Security</legend> 
                <ul><li><input name="new-feed-rule" placeholder="New rule"/></li> 
                    <li><label><input type="radio" name="filter-default" value="security"/> Everything else</label></li></ul></fieldset></details> 
        <details><summary class="svelte-henz6m">\u{1F464}\u{1F463} Header/footer</summary> 
            <small>Modify the automaticly-generated content before and after your email</small> 
            <ul><li><label><input type="checkbox" name="formal" checked=""/> Address by last name</label></li> 
                <li><label>Salutation <small>(%s where the recipient&#39;s name should appear):</small>  <input type="text" name="salutation" value="Dear %s:"/></label></li> 
                <li><label>Footer<div contenteditable="true">Sincerely,<br/>Name</div></label></li></ul></details></div> 
    <div class="settingGroup svelte-henz6m">Help
        <details><summary class="svelte-henz6m">\u26A0\uFE0F Report a problem</summary>
            hidden</details> 
        <details><summary class="svelte-henz6m">\u{1F4D6} Legal</summary>
            hidden</details></div>`,h(l,"class","px-6 py-2")},m(t,r){s.m(t,r),u(t,e,r),u(t,l,r)},p(t,[r]){a===(a=i(t))&&s?s.p(t,r):(s.d(1),s=a(t),s&&(s.c(),s.m(e.parentNode,e)))},i:m,o:m,d(t){s.d(t),t&&d(e),t&&d(l)}}}function x(n,e,l){let i;return v(n,g,a=>l(0,i=a)),[i]}class E extends p{constructor(e){super(),f(this,e,x,z,b,{})}}export{E as default};

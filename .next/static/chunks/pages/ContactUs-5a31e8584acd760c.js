(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{9101:function(e,t,n){"use strict";n.d(t,{ZP:function(){return o}});const s={_origin:"https://api.emailjs.com"},i=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class r{constructor(e){this.status=e.status,this.text=e.responseText}}const a=(e,t,n={})=>new Promise(((i,a)=>{const o=new XMLHttpRequest;o.addEventListener("load",(({target:e})=>{const t=new r(e);200===t.status||"OK"===t.text?i(t):a(t)})),o.addEventListener("error",(({target:e})=>{a(new r(e))})),o.open("POST",s._origin+e,!0),Object.keys(n).forEach((e=>{o.setRequestHeader(e,n[e])})),o.send(t)}));var o={init:(e,t="https://api.emailjs.com")=>{s._userID=e,s._origin=t},send:(e,t,n,r)=>{const o=r||s._userID;i(o,e,t);const c={lib_version:"3.2.0",user_id:o,service_id:e,template_id:t,template_params:n};return a("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},sendForm:(e,t,n,r)=>{const o=r||s._userID,c=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(n);i(o,e,t);const d=new FormData(c);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",o),a("/api/v1.0/email/send-form",d)}}},137:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});n(7294);var s=n(9101),i=n(2399),r=n.n(i),a=n(5893);function o(){return console.log(),s.ZP.init("XTxFCKzsCuNFAGr-c"),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:(0,a.jsxs)("form",{className:" ".concat(r().header),onSubmit:function(e){e.preventDefault(),s.ZP.send("service_912yeux","template_n5xtppd",{from_name:"from_name",to_name:"Raj Singh",message:"Hey I got your mail "}).then((function(e){window.location.reload(),console.log(e.text),alert("done")}),(function(e){console.log(e.text)}))},children:[(0,a.jsx)("input",{type:"hidden",name:"contact_number"}),(0,a.jsx)("label",{children:"Name"}),(0,a.jsx)("input",{type:"text",name:"from_name"}),(0,a.jsx)("label",{children:"Email"}),(0,a.jsx)("input",{type:"email",name:"from_email"}),(0,a.jsx)("label",{children:"Subject"}),(0,a.jsx)("input",{type:"text",name:"subject"}),(0,a.jsx)("label",{children:"Message"}),(0,a.jsx)("textarea",{name:"html_message"}),(0,a.jsx)("button",{className:"btn-success my-3",children:"Submit"})]})})})}},4461:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ContactUs",function(){return n(137)}])},2399:function(e){e.exports={header:"contact_header__xangj"}}},function(e){e.O(0,[774,888,179],(function(){return t=4461,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
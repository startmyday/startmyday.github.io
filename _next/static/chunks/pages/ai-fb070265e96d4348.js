(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{3765:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ai",function(){return a(9770)}])},9770:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(5893),i=a(7294);let r=()=>{let[e,t]=(0,i.useState)(!1),[a,n]=(0,i.useState)(void 0),[r,s]=(0,i.useState)(void 0),c=e=>{let{prompt:a}=e;t(!0),s(void 0);try{fetch("https://aliveapi.cyclic.app/generateimage",{headers:{"content-type":"application/json"},body:JSON.stringify({prompt:a,size:"512x512",quantity:8}),method:"POST"}).then(async e=>{let t=await e.json();t.success&&n(t.data)}).finally(()=>{t(!1)})}catch(i){s(i)}};return{loading:e,data:a,error:r,fetchImage:c}};var s=a(5535),c=a.n(s);let o=()=>{let[e,t]=(0,i.useState)(""),{loading:a,data:s,error:o,fetchImage:l}=r(),u=e=>{t(e.currentTarget.value)},_=t=>{t.preventDefault(),l({prompt:e})};return(0,n.jsxs)("div",{className:c().ai,children:[(0,n.jsx)("div",{className:c().center,children:(0,n.jsx)("form",{onSubmit:_,style:{marginTop:a||s?0:"300px"},className:c().form,children:(0,n.jsx)("input",{autoFocus:!0,type:"text",onChange:u,className:c().prompt,placeholder:"What's on your mind?"})})}),!!s&&!a&&(0,n.jsx)("div",{children:s.map(e=>{let{url:t}=e;return(0,n.jsx)("img",{className:c().image,src:t},t)})}),a&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:c().loading,children:"Loading..."})})]})};o.getInitialProps=e=>{let{query:t}=e;return{myParams:t}};var l=o},5535:function(e){e.exports={ai:"AI_ai__25Vd9",center:"AI_center__lmUu6",prompt:"AI_prompt__YfHha",form:"AI_form__zUGX3",image:"AI_image__FL9_f",loading:"AI_loading__xHmu1"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3765)}),_N_E=e.O()}]);
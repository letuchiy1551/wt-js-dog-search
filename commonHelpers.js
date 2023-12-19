import{a as g,S as f,i as A}from"./assets/vendor-fDOLW-t_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();g.defaults.headers.common["x-api-key"]="live_G6P0R2DybO5zXVtspjnmxETZZu7NObEx1iCEPIkVMPCskhyKnEXZX3GSbABPkXPu";async function m(){return await g.get("https://api.thedogapi.com/v1/breeds").then(e=>e.data)}async function b(e){return await g.get(`https://api.thedogapi.com/v1/images/search?breed_ids=${e}`).then(t=>t.data)}const y="data:image/png;base64,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",u=document.getElementById("breed-select"),d=document.querySelector(".dog-info"),a=document.querySelector(".spinner"),B=new f({select:u,settings:{placeholderText:"Search breeds"}}),l={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topRight",color:"red"};function p(e){e.style.display="flex"}function c(e){e.style.display="none"}function h(e){const t=e[0].breeds[0];d.innerHTML=`
    <div class="wrapper">
      <img class="dog-img" src="${e[0].url}" alt="Dog Image"/>
      <div>
        <h2>${t.name}</h2>
        <article><b>Description:</b> ${t.description}</article><br>
        <article><b>Temperament:</b> ${t.temperament}</article><br>
        <article><b>Country:</b> ${t.origin}</article>
        <img src="https://flagsapi.com/${t.country_code}/shiny/64.png" onerror="src='${y}'" width="64px" alt="country flag"> 
      </div>
    </div>
  `,p(d)}async function H(){try{const e=u.value;c(d),p(a);const t=await b(e);h(t)}catch{A.show(l)}finally{c(a)}}async function E(){try{const t=(await m()).map(({id:s,name:n})=>({text:n,value:s}));B.setData([{placeholder:!0,text:""},...t]),u.addEventListener("change",H)}catch{A.show(l)}finally{c(a)}}E();
//# sourceMappingURL=commonHelpers.js.map

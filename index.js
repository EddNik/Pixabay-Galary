import{a as $,i as h,S as q}from"./assets/vendor-DDdXnYQq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};async function L(s,o){try{return(await $.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o}})).data}catch(t){console.log(t),c.message=`${t.message} : ${t.code}`,h.error(c),setTimeout(()=>{hideLoader()},500)}}const y=document.querySelector(".gallery"),f=document.querySelector(".load-more");function w(s){const o=s.map(({largeImageURL:t,webformatURL:n,tags:e,likes:r,views:d,comments:E,downloads:S})=>`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img
              class="gallery-image"
              src="${n}"
              alt="${e}"
            />
          </a>
          <div class="gallery-options-container">
          <div class="gallery-options">
            <h3 class="count-option">Likes</h3>
            <p>${r}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Views</h3>
            <p>${d}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Comments</h3>
            <p>${E}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${S}</p>
          </div>
         </div>
        </li>`).join("");y.insertAdjacentHTML("beforeend",o),new q(".gallery a",{captionDelay:250,overlayOpacity:.95}).refresh()}function b(s){s.classList.add("loader")}function p(s){s.classList.remove("loader")}function O(){y.innerHTML=""}function F(){f.classList.remove("btn-loader")}function u(){f.classList.add("btn-loader")}const m=document.querySelector(".form");let a=1,l="",g=0;const M=15;let v="";const i=document.createElement("span");i.textContent="Loading";m.addEventListener("submit",async s=>{s.preventDefault(),O(),y.insertAdjacentElement("beforebegin",i);const o=document.querySelector("span");try{l=m.elements["search-text"].value.trim(),b(o),l!==v&&(a=1),v=l;let{totalHits:t,hits:n}=await L(l,a);if(g=Math.ceil(t/M),Array.isArray(n)&&n.length===0)throw u(),a=1,new Error("Sorry, there are no images matching your search query. Please try again!");if(a>g)throw u(),a=1,m.reset(),new Error("We are sorry, there are no more posts to load");if(!l)throw u(),new Error("Sorry, this name images is empty. Please try again!");w(n),p(o),i.remove(),F()}catch(t){c.message=t.message,h.show(c),setTimeout(()=>{p(o),i.remove()},500)}});f.addEventListener("click",async s=>{s.preventDefault(),y.insertAdjacentElement("afterend",i);const o=document.querySelector("span");b(o),a+=1;try{const{hits:t}=await L(l,a);if(a>g)throw u(),a=0,m.reset(),new Error("We are sorry, there are no more posts to load");w(t),p(o),i.remove()}catch(t){c.message=t.message,h.show(c),setTimeout(()=>{p(o),i.remove()},500)}});
//# sourceMappingURL=index.js.map

import{a as O,i as h,S as C}from"./assets/vendor-DDdXnYQq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};async function L(o,t){try{return(await O.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})).data}catch(s){console.log(s),n.message=`${s.message} : ${s.code}`,h.error(n),setTimeout(()=>{hideLoader()},500)}}const w=document.querySelector(".gallery"),f=document.querySelector(".load-more");async function b(o){const t=o.map(({largeImageURL:s,webformatURL:c,tags:e,likes:r,views:l,comments:$,downloads:q})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${c}"
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
            <p>${l}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Comments</h3>
            <p>${$}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${q}</p>
          </div>
         </div>
        </li>`).join("");w.insertAdjacentHTML("beforeend",t),new C(".gallery a",{captionDelay:250,overlayOpacity:.95}).refresh()}function S(o){o.classList.add("loader"),o.textContent="Loading"}function p(o){o.classList.remove("loader"),o.textContent=""}function E(){w.innerHTML=""}function F(){f.classList.remove("btn-loader")}function d(){f.classList.add("btn-loader")}const u=document.querySelector(".form");let a=1,i="",g=0;const M=15;let v="";const m=document.querySelector(".js-loader"),y=document.querySelector(".js-loader-more");u.addEventListener("submit",async o=>{o.preventDefault(),E();try{i=u.elements["search-text"].value.trim(),S(m),i!==v&&(a=1),v=i;let{totalHits:t,hits:s}=await L(i,a);if(g=Math.ceil(t/M),Array.isArray(s)&&s.length===0)throw d(),a=1,new Error("Sorry, there are no images matching your search query. Please try again!");if(a>g)throw d(),a=1,u.reset(),new Error("We are sorry, there are no more posts to load");if(!i)throw d(),new Error("Sorry, this name images is empty. Please try again!");b(s),p(m),F()}catch(t){n.message=t.message,h.show(n),setTimeout(()=>{p(m)},500)}});f.addEventListener("click",async o=>{o.preventDefault(),S(y),a+=1;try{const{hits:t}=await L(i,a);if(a>g)throw d(),a=0,u.reset(),new Error("We are sorry, there are no more posts to load");b(t),p(y)}catch(t){n.message=t.message,h.show(n),setTimeout(()=>{p(y)},500)}});
//# sourceMappingURL=index.js.map

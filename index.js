import{a as q,i as g,S}from"./assets/vendor-DDdXnYQq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const c={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};async function h(r,e){try{return(await q.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}})).data}catch(a){console.log(a),c.message=`${a.message} : ${a.code}`,g.error(c),setTimeout(()=>{hideLoader()},500)}}const m=document.querySelector(".gallery"),y=document.querySelector(".load-more");async function f(r){const e=r.map(({largeImageURL:a,webformatURL:l,tags:o,likes:s,views:n,comments:w,downloads:b})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${l}"
              alt="${o}"
            />
          </a>
          <div class="gallery-options-container">
          <div class="gallery-options">
            <h3 class="count-option">Likes</h3>
            <p>${s}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Views</h3>
            <p>${n}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Comments</h3>
            <p>${w}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${b}</p>
          </div>
         </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",e),new S(".gallery a",{captionDelay:250,overlayOpacity:.95}).refresh()}function v(r){r.classList.add("loader"),r.textContent="Loading"}function p(r){r.classList.remove("loader"),r.textContent=""}function $(){m.innerHTML=""}function C(){y.classList.remove("btn-loader")}function O(){y.classList.add("btn-loader")}const i=document.querySelector(".form"),t={},u=document.querySelector(".js-loader"),d=document.querySelector(".js-loader-more");i.addEventListener("submit",async r=>{r.preventDefault(),$(),t.query=i.elements["search-text"].value.trim(),v(u);try{if(!t.query)throw i.reset(),new Error("Sorry, this name images is empty. Please try again!");(t.query!==t.previousQuery||!t.state)&&(t.number=1,t.previousQuery=t.query,t.state=!0);const{totalHits:e,hits:a}=await h(t.query,t.number);if(t.total_pages=Math.ceil(e/a.length),t.number>t.total_pages)throw new Error("We are sorry, there are no more posts to load");if(e===0)throw i.reset(),new Error("Sorry, there are no images matching your search query. Please try again!");f(a),p(u),C()}catch(e){L(e,u)}});y.addEventListener("click",async r=>{r.preventDefault(),v(d),t.number+=1;try{const{hits:e}=await h(t.query,t.number);if(f(e),p(d),E(),t.number===t.total_pages)throw new Error("We are sorry, there are no more posts to load")}catch(e){L(e,d)}});function L(r,e){O(),c.message=r.message,g.show(c),setTimeout(()=>{p(e)},500),t.state=!1}function E(){const e=m.lastChild.getBoundingClientRect();window.scrollBy(0,e.height*3)}i.reset();
//# sourceMappingURL=index.js.map

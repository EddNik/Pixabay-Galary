import{a as S,i as h,S as $}from"./assets/vendor-DDdXnYQq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const c={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};async function f(t,e){try{return(await S.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}})).data}catch(a){console.log(a),c.message=`${a.message} : ${a.code}`,h.error(c),setTimeout(()=>{hideLoader()},500)}}const p=document.querySelector(".gallery"),y=document.querySelector(".load-more"),C=new $(".gallery a",{captionDelay:250,overlayOpacity:.95});async function v(t){const e=t.map(({largeImageURL:a,webformatURL:l,tags:r,likes:s,views:n,comments:b,downloads:q})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${l}"
              alt="${r}"
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
            <p>${b}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${q}</p>
          </div>
         </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",e),C.refresh()}function L(t){t.classList.add("loader"),t.textContent="Loading"}function g(t){t.classList.remove("loader"),t.textContent=""}function O(){p.innerHTML=""}function E(){y.classList.remove("btn-loader")}function M(){y.classList.add("btn-loader")}const i=document.querySelector(".form"),o={},u=document.querySelector(".js-loader"),d=document.querySelector(".js-loader-more");let m=!0;i.addEventListener("submit",async t=>{t.preventDefault(),o.query=i.elements["search-text"].value.trim(),L(u);try{if(!o.query)throw i.reset(),new Error("Sorry, this name images is empty. Please try again!");(o.query!==o.previousQuery||!m)&&(o.number=1,o.previousQuery=o.query,m=!0);const{totalHits:e,hits:a}=await f(o.query,o.number);if(o.total_pages=Math.ceil(e/15),o.number>o.total_pages)throw new Error("We are sorry, there are no more posts to load");if(e===0)throw i.reset(),new Error("Sorry, there are no images matching your search query. Please try again!");O(),v(a),E()}catch(e){w(e,u)}g(u)});y.addEventListener("click",async t=>{t.preventDefault(),L(d),o.number+=1;try{const{hits:e}=await f(o.query,o.number);if(v(e),x(),o.number>=o.total_pages||e.length<15)throw new Error("We are sorry, there are no more posts to load")}catch(e){w(e,d)}g(d)});function w(t,e){M(),c.message=t.message,h.show(c),g(e),m=!1}function x(){const e=p.lastChild.getBoundingClientRect();window.scrollBy(0,e.height*2)}i.reset();
//# sourceMappingURL=index.js.map

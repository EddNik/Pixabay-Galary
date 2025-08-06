import{a as S,i as g,S as $}from"./assets/vendor-DDdXnYQq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const c={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};async function h(r,e){try{return(await S.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}})).data}catch(a){console.log(a),c.message=`${a.message} : ${a.code}`,g.error(c),setTimeout(()=>{hideLoader()},500)}}const d=document.querySelector(".gallery"),m=document.querySelector(".load-more"),C=new $(".gallery a",{captionDelay:250,overlayOpacity:.95});async function f(r){const e=r.map(({largeImageURL:a,webformatURL:l,tags:o,likes:s,views:n,comments:b,downloads:q})=>`<li class="gallery-item">
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
            <p>${b}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${q}</p>
          </div>
         </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",e),C.refresh()}function v(r){r.classList.add("loader"),r.textContent="Loading"}function L(r){r.classList.remove("loader"),r.textContent=""}function O(){d.innerHTML=""}function E(){m.classList.remove("btn-loader")}function M(){m.classList.add("btn-loader")}function x(){const e=d.lastChild.getBoundingClientRect();window.scrollBy(0,e.height*2)}const i=document.querySelector(".form"),t={},p=document.querySelector(".js-loader"),y=document.querySelector(".js-loader-more");let u=!0;i.addEventListener("submit",async r=>{r.preventDefault(),t.query=i.elements["search-text"].value.trim();try{if(!t.query)throw i.reset(),new Error("Sorry, this name images is empty. Please try again!");(t.query!==t.previousQuery||!u)&&(t.number=1,t.previousQuery=t.query,u=!0),O(),v(p);const{totalHits:e,hits:a}=await h(t.query,t.number);if(t.total_pages=Math.ceil(e/15),t.number>t.total_pages)throw new Error("We are sorry, there are no more posts to load");if(e===0)throw i.reset(),new Error("Sorry, there are no images matching your search query. Please try again!");f(a)}catch(e){w(e)}L(p),t.number<t.total_pages&&E()});m.addEventListener("click",async r=>{r.preventDefault(),t.number+=1;try{v(y);const{hits:e}=await h(t.query,t.number);if(f(e),x(),t.number>=t.total_pages||e.length<15)throw new Error("We are sorry, there are no more posts to load")}catch(e){w(e)}L(y)});function w(r){M(),c.message=r.message,g.show(c),u=!1}i.reset();
//# sourceMappingURL=index.js.map

import{a as $,i as h,S as C}from"./assets/vendor-DDdXnYQq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const c={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};async function f(o,e){try{return(await $.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}})).data}catch(a){console.log(a),c.message=`${a.message} : ${a.code}`,h.error(c),setTimeout(()=>{hideLoader()},500)}}const m=document.querySelector(".gallery"),p=document.querySelector(".load-more"),O=new C(".gallery a",{captionDelay:250,overlayOpacity:.95});async function v(o){const e=o.map(({largeImageURL:a,webformatURL:l,tags:r,likes:s,views:n,comments:q,downloads:S})=>`<li class="gallery-item">
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
            <p>${q}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${S}</p>
          </div>
         </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",e),O.refresh()}function L(o){o.classList.add("loader"),o.textContent="Loading"}function w(o){o.classList.remove("loader"),o.textContent=""}function E(){m.innerHTML=""}function M(){p.classList.remove("btn-loader")}function u(){p.classList.add("btn-loader")}function x(){const e=m.lastChild.getBoundingClientRect();window.scrollBy({top:e.height*2,left:0,behavior:"smooth"})}const i=document.querySelector(".form"),t={};let d=!0;const y=document.querySelector(".js-loader"),g=document.querySelector(".js-loader-more");i.addEventListener("submit",async o=>{o.preventDefault(),t.query=i.elements["search-text"].value.trim();try{if(!t.query)throw i.reset(),new Error("Sorry, this name images is empty. Please try again!");(t.query!==t.previousQuery||!d)&&(t.number=1,t.previousQuery=t.query,d=!0),E(),L(y);const{totalHits:e,hits:a}=await f(t.query,t.number);if(t.total_pages=Math.ceil(e/15),t.number>t.total_pages)throw u(),new Error("We are sorry, there are no more posts to load");if(e===0)throw i.reset(),u(),new Error("Sorry, there are no images matching your search query. Please try again!");v(a),t.number<t.total_pages&&M()}catch(e){b(e)}w(y)});p.addEventListener("click",async o=>{o.preventDefault(),t.number+=1;try{L(g);const{hits:e}=await f(t.query,t.number);if(v(e),x(),t.number>=t.total_pages||e.length<=0)throw u(),new Error("We are sorry, there are no more posts to load")}catch(e){b(e)}w(g)});function b(o){c.message=o.message,h.show(c),d=!1}i.reset();
//# sourceMappingURL=index.js.map

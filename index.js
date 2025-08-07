import{a as $,i as g,S as C}from"./assets/vendor-DDdXnYQq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const c={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};async function h(t,e){try{return(await $.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}})).data}catch(a){console.log(a),c.message=`${a.message} : ${a.code}`,g.error(c),setTimeout(()=>{hideLoader()},500)}}const d=document.querySelector(".gallery"),m=document.querySelector(".load-more"),O=new C(".gallery a",{captionDelay:250,overlayOpacity:.95});async function f(t){const e=t.map(({largeImageURL:a,webformatURL:l,tags:o,likes:s,views:n,comments:q,downloads:S})=>`<li class="gallery-item">
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
            <p>${q}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${S}</p>
          </div>
         </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",e),O.refresh()}function v(t){t.classList.add("loader"),t.textContent="Loading"}function L(t){t.classList.remove("loader"),t.textContent=""}function M(){d.innerHTML=""}function x(){m.classList.remove("btn-loader")}function b(){m.classList.add("btn-loader")}function B(){const e=d.lastChild.getBoundingClientRect();window.scrollBy({top:e.height*2,left:0,behavior:"smooth"})}const i=document.querySelector(".form"),r={};let u=!0;const y=document.querySelector(".js-loader"),p=document.querySelector(".js-loader-more");i.addEventListener("submit",async t=>{t.preventDefault(),r.query=i.elements["search-text"].value.trim();try{if(!r.query)throw i.reset(),new Error("Sorry, this name images is empty. Please try again!");(r.query!==r.previousQuery||!u)&&(r.number=1,r.previousQuery=r.query,u=!0),M(),v(y);const{totalHits:e,hits:a}=await h(r.query,r.number);if(r.total_pages=Math.ceil(e/15),r.number<r.total_pages?x():b(),e===0)throw i.reset(),new Error("Sorry, there are no images matching your search query. Please try again!");f(a)}catch(e){w(e)}L(y)});m.addEventListener("click",async t=>{t.preventDefault(),r.number+=1;try{v(p);const{hits:e}=await h(r.query,r.number);if(f(e),B(),r.number>=r.total_pages||e.length<=0)throw b(),new Error("We are sorry, but you have reached the end of search results")}catch(e){w(e)}L(p)});function w(t){c.message=t.message,g.show(c),u=!1}i.reset();
//# sourceMappingURL=index.js.map

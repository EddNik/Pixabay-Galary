import{a as q,i as g,S}from"./assets/vendor-DDdXnYQq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const c={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};async function h(o,e){try{return(await q.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}})).data}catch(a){console.log(a),c.message=`${a.message} : ${a.code}`,g.error(c),setTimeout(()=>{hideLoader()},500)}}const m=document.querySelector(".gallery"),p=document.querySelector(".load-more"),$=new S(".gallery a",{captionDelay:250,overlayOpacity:.95});async function f(o){const e=o.map(({largeImageURL:a,webformatURL:l,tags:r,likes:s,views:n,comments:w,downloads:b})=>`<li class="gallery-item">
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
            <p>${w}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${b}</p>
          </div>
         </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",e),$.refresh()}function v(o){o.classList.add("loader"),o.textContent="Loading"}function y(o){o.classList.remove("loader"),o.textContent=""}function C(){m.innerHTML=""}function O(){p.classList.remove("btn-loader")}function E(){p.classList.add("btn-loader")}const i=document.querySelector(".form"),t={},u=document.querySelector(".js-loader"),d=document.querySelector(".js-loader-more");i.addEventListener("submit",async o=>{o.preventDefault(),C(),t.query=i.elements["search-text"].value.trim(),v(u);try{if(!t.query)throw i.reset(),new Error("Sorry, this name images is empty. Please try again!");(t.query!==t.previousQuery||!t.state)&&(t.number=1,t.previousQuery=t.query,t.state=!0);const{totalHits:e,hits:a}=await h(t.query,t.number);if(t.total_pages=Math.ceil(e/a.length),t.number>t.total_pages)throw new Error("We are sorry, there are no more posts to load");if(e===0)throw i.reset(),new Error("Sorry, there are no images matching your search query. Please try again!");f(a),y(u),O()}catch(e){L(e,u)}});p.addEventListener("click",async o=>{o.preventDefault(),v(d),t.number+=1;try{const{hits:e}=await h(t.query,t.number);if(f(e),y(d),M(),t.number===t.total_pages)throw new Error("We are sorry, there are no more posts to load")}catch(e){L(e,d)}});function L(o,e){E(),c.message=o.message,g.show(c),setTimeout(()=>{y(e)},500),t.state=!1}function M(){const e=m.lastChild.getBoundingClientRect();window.scrollBy(0,e.height*3)}i.reset();
//# sourceMappingURL=index.js.map

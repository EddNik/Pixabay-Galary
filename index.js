import{a as q,i as y,S}from"./assets/vendor-DDdXnYQq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const l={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};async function g(o,t){try{return(await q.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})).data}catch(a){console.log(a),l.message=`${a.message} : ${a.code}`,y.error(l),setTimeout(()=>{hideLoader()},500)}}const f=document.querySelector(".gallery"),m=document.querySelector(".load-more");async function h(o){const t=o.map(({largeImageURL:a,webformatURL:c,tags:r,likes:s,views:n,comments:w,downloads:b})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${c}"
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
        </li>`).join("");f.insertAdjacentHTML("beforeend",t),new S(".gallery a",{captionDelay:250,overlayOpacity:.95}).refresh()}function v(o){o.classList.add("loader"),o.textContent="Loading"}function p(o){o.classList.remove("loader"),o.textContent=""}function $(){f.innerHTML=""}function O(){m.classList.remove("btn-loader")}function E(){m.classList.add("btn-loader")}const i=document.querySelector(".form"),e={},u=document.querySelector(".js-loader"),d=document.querySelector(".js-loader-more");i.addEventListener("submit",async o=>{o.preventDefault(),$(),e.query=i.elements["search-text"].value.trim(),v(u);try{if(!e.query)throw i.reset(),new Error("Sorry, this name images is empty. Please try again!");(e.query!==e.previousQuery||!e.state)&&(e.number=1,e.previousQuery=e.query,e.state=!0);const{totalHits:t,hits:a}=await g(e.query,e.number);if(total_pages=Math.ceil(t/a.length),e.number>e.total_pages)throw new Error("We are sorry, there are no more posts to load");if(t===0)throw i.reset(),new Error("Sorry, there are no images matching your search query. Please try again!");h(a),p(u),O()}catch(t){L(t,u)}});m.addEventListener("click",async o=>{o.preventDefault(),v(d),e.number+=1;try{const{hits:t}=await g(e.query,e.number);if(h(t),p(d),e.number===e.total_pages)throw new Error("We are sorry, there are no more posts to load")}catch(t){L(t,d)}});function L(o,t){E(),l.message=o.message,y.show(l),setTimeout(()=>{p(t)},500),e.state=!1}i.reset();
//# sourceMappingURL=index.js.map

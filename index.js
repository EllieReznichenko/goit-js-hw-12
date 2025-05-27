import{a as v,S as w,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const S="50517906-38b2af55f551ffd9965b635dd",E="https://pixabay.com/api/",P=15;async function u(o,r){try{const e={key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:P};return(await v.get(E,{params:e})).data}catch(e){throw console.error("Error fetching images:",e),e}}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more"),R=new w(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){const r=o.map(e=>`
        <li class="gallery__item">
          <a href="${e.largeImageURL}">
            <div class="photo-card">
              <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
              <div class="info">
                <div class="info-labels">
                  <p><b>Comments</b></p>
                  <p><b>Likes</b></p>
                  <p><b>Views</b></p>
                  <p><b>Downloads</b></p>
                </div>
                <div class="info-values">
                  <p>${e.comments}</p>
                  <p>${e.likes}</p>
                  <p>${e.views}</p>
                  <p>${e.downloads}</p>
                </div>
              </div>
            </div>
          </a>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",r),R.refresh()}function q(){f.innerHTML=""}function y(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function b(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}let d="",i=1,L=0;const B=document.querySelector(".form"),M=document.querySelector(".load-more");B.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r){d=r,i=1,q(),l(),y();try{const e=await u(d,i);if(L=e.totalHits,e.hits.length===0){n.warning({message:"No images found. Try another search.",position:"topRight"});return}m(e.hits),e.totalHits>e.hits.length&&b()}catch{n.error({message:"Failed to fetch images. Try again later.",position:"topRight"})}finally{g()}}});M.addEventListener("click",async()=>{i+=1,y(),l();try{const o=await u(d,i);m(o.hits),$();const r=Math.ceil(L/15);i>=r?(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l()):b()}catch{n.error({message:"Failed to fetch more images.",position:"topRight"})}finally{g()}});function $(){const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

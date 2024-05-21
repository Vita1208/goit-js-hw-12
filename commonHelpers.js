import{a as h,S as y,i as L}from"./assets/vendor-a595d5bb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const b="43838744-76530a55bebff011fa4d493be",w="https://pixabay.com/api/",f=async(t,r=1,a=15)=>{try{return(await h.get(w,{params:{key:b,q:t,image_type:"photo",per_page:a,page:r}})).data}catch(o){throw console.error("Error fetching images:",o),o}};function m(t,r){const a=t.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <div class="full-image">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
          <ul class="image-button">
            <li><p>Likes</p><p>${e.likes}</p></li>
            <li><p>Views</p><p>${e.views}</p></li>
            <li><p>Comments</p><p>${e.comments}</p></li>
            <li><p>Downloads</p><p>${e.downloads}</p></li>
          </ul>
        </div>
      </a>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",a),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function c(t,r){L[r]({message:t,messageColor:"white",position:"topRight",backgroundColor:"red"})}const v=document.querySelector("form"),p=document.querySelector(".gallery"),d=document.querySelector(".spinner"),u=document.querySelector(".load-button");let n=1,g=15,i="";u.classList.add("is-hidden");v.addEventListener("submit",t=>{if(t.preventDefault(),p.innerHTML="",n=1,d.classList.remove("is-hidden"),u.classList.remove("is-hidden"),i=t.target.elements.search_input.value.trim(),i===""){c("Please enter a search term.","warning"),d.classList.add("is-hidden");return}f(i,n,g).then(r=>{if(r.total===0){c("Sorry, there are no images matching your search query. Please try again!","error");return}m(r.hits,p)}).catch(r=>{console.error("Error fetching images:",r),c("An error occurred while fetching images. Please try again later.","error")}).finally(()=>{t.target.reset(),d.classList.add("is-hidden")})});u.addEventListener("click",async()=>{try{n+=1;const t=await f(i,n,g);m(t.hits,p)}catch(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map

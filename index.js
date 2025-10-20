import{a as d,S as y,i as c}from"./assets/vendor-xwsNXkQR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const p="https://pixabay.com/api/",m="52809699-ccc5c93f5d687b44e4326bc01";async function g(n){const e=`${p}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return d.get(e).then(t=>t.data).catch(t=>[])}const a=document.querySelector(".gallery"),s=document.querySelector(".loader"),u=new y(".gallery a",{captionsData:"alt",captionDelay:250});function h(n){return n.map(e=>`
        <li class="gallery-item">
          <a class="gallery-image" href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="info">
            <p ><b>Likes:</b> ${e.likes}</p>
            <p ><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>
      `).join("")}function b(n){if(!Array.isArray(n)||n.length===0||!a)return;const e=h(n);a.insertAdjacentHTML("beforeend",e),u.refresh()}function L(){a&&(a.innerHTML="",u.refresh())}function w(){s&&s.classList.add("is-visible")}function v(){s&&s.classList.remove("is-visible")}const f=document.querySelector(".form"),A=f.elements["search-text"];f.addEventListener("submit",async n=>{n.preventDefault();const e=A.value.trim();if(!e){c.warning({title:"Warning",message:"Please enter a search term!"});return}L(),w();try{const t=await g(e);if(!t||!Array.isArray(t.hits))throw new Error("Bad response shape from API");if(t.hits.length===0){c.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(t.hits)}catch(t){console.error(t),c.error({title:"Error",message:"Network error or API failed. Try again later."})}finally{v()}});
//# sourceMappingURL=index.js.map

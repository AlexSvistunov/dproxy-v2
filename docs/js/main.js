(()=>{var e={607:()=>{function e(e){const t=e.querySelector(".guide-api__content");t&&(e.classList.toggle("box--active"),e.classList.contains("box--active")?(e.style.maxHeight=e.scrollHeight+"px",t.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true")):(e.style.maxHeight=null,t.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false")))}document.querySelectorAll(".guide-api__box").forEach((t=>{t.addEventListener("click",(()=>{e(t)})),t.addEventListener("keydown",(o=>{"Enter"===o.key&&e(t)}))}))},807:()=>{const e=document.querySelectorAll(".guide-box__btn");console.log(e),e.forEach((e=>{e.addEventListener("click",(t=>{t.stopPropagation();const o=e.closest(".guide-box__inner").querySelector(".guide-box__field").querySelector(".guide-box__text").textContent;let n=document.createElement("textarea");n.value="http://api.dproxy.co"+o,document.body.appendChild(n),n.select(),document.execCommand("copy"),function(e,t){let o=document.createElement("div");o.innerText="Text copied to clipboard",o.style.zIndex=100,o.style.position="fixed",o.style.top="10px",o.style.right="10px",o.style.padding="10px",o.style.background="var(--brand-color, linear-gradient(47deg, #0A6FCC -44.41%, rgba(59, 237, 77, 0.75) 124.33%))",o.style.color="#fff",o.style.borderRadius="5px",document.body.appendChild(o),setTimeout((function(){document.body.removeChild(o)}),2e3)}(),document.body.removeChild(n)}))})),document.querySelectorAll(".guide-api__content").forEach((e=>{e.addEventListener("click",(e=>{e.stopPropagation()}))}))},339:()=>{document.querySelectorAll(".dropdown").forEach((e=>{const t=e.querySelector(".dropdown__btn"),o=e.querySelector(".dropdown__content");t.addEventListener("click",(n=>{e.classList.toggle("dropdown--active"),e.classList.contains("dropdown--active")?(o.style.maxHeight=o.scrollHeight+"px",o.setAttribute("aria-hidden",!1),t.setAttribute("aria-expanded",!0)):(o.style.maxHeight=null,o.setAttribute("aria-hidden",!0),t.setAttribute("aria-expanded",!1))}))}))},854:()=>{const e=document.querySelectorAll(".location__btn"),t=document.querySelectorAll(".location-state");e.forEach((o=>{o.addEventListener("click",(o=>{const n=o.currentTarget,a=n.dataset.tab;e.forEach((e=>{e.classList.remove("active"),n.classList.add("active")})),t.forEach((e=>{e.classList.remove("active"),e.dataset.target===a&&e.classList.add("active")}))}))}))},617:()=>{const e=document.querySelector(".burger-menu"),t=document.querySelector(".header__nav"),o=document.querySelector(".nav-header__btn");e.addEventListener("click",(()=>{t.classList.add("nav--active")})),o.addEventListener("click",(()=>{t.classList.remove("nav--active")}))},988:()=>{const e=document.querySelectorAll("[data-operator-russia]"),t=document.querySelectorAll(".operators-content--ru");e.forEach((o=>{o.addEventListener("click",(o=>{const n=o.currentTarget,a=n.dataset.target;e.forEach((e=>{e.classList.remove("operators__button--active")})),n.classList.add("operators__button--active"),t.forEach((e=>{e.classList.remove("operators-content--active"),a===e.id&&e.classList.add("operators-content--active")}))}))}));const o=document.querySelectorAll("[data-operator-thai]"),n=document.querySelectorAll(".operators-content--thai");o.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget,a=t.dataset.target;o.forEach((e=>{e.classList.remove("operators__button--active")})),t.classList.add("operators__button--active"),n.forEach((e=>{e.classList.remove("operators-content--active"),a===e.id&&e.classList.add("operators-content--active")}))}))}))},809:()=>{document.querySelectorAll(".switch-toggle").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("switch-toggle--eng"),e.classList.contains("switch-toggle--eng")?e.setAttribute("aria-checked","true"):e.setAttribute("aria-checked","false")}))}))},598:()=>{function e(e){var t=!0,o=!1,n=null,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){t=!1}function r(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",(function(o){o.metaKey||o.altKey||o.ctrlKey||(i(e.activeElement)&&d(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(o&&(t=!0),r())}),!0),r(),e.addEventListener("focus",(function(e){var o,n,c;i(e.target)&&(t||(n=(o=e.target).type,"INPUT"===(c=o.tagName)&&a[n]&&!o.readOnly||"TEXTAREA"===c&&!o.readOnly||o.isContentEditable))&&d(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(n),n=window.setTimeout((function(){o=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}(()=>{"use strict";o(598),window,document,document.documentElement,document.body,o(809),o(854),o(339),o(617),o(988),o(607),o(807)})()})();
(()=>{"use strict";(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".button-services"),n=document.querySelector(".modal-overlay"),o=document.querySelector(".modal-callback"),i=document.querySelector("#services"),s=(i.querySelectorAll(".element"),()=>{n.style.display="block",o.style.display="block",o.classList.remove("animate__fadeOut"),o.classList.add("animate__animated","animate__fadeIn")}),r=()=>{o.classList.add("animate__animated","animate__fadeOut"),o.classList.remove("animate__fadeIn"),setTimeout((()=>{o.style.display="none",n.style.display="none"}),500)};e.forEach((e=>{e.addEventListener("click",(e=>s()))})),t.addEventListener("click",(e=>s())),i.querySelectorAll(".element").forEach((e=>{e.addEventListener("click",(e=>{s()}))})),n.addEventListener("click",(e=>{r()})),o.querySelector(".modal-close").addEventListener("click",(e=>{r()}))})(),(()=>{const e=document.querySelector(".top-slider"),t=e.querySelectorAll(".item");t.length,console.log("slider: ",e),console.log("slides: ",t);let n,o=0;const i=()=>{t.forEach(((e,t)=>{t==o?e.classList.add("item-active"):e.classList.remove("item-active")})),o<2?o++:o=0};i(),n=setInterval((()=>{i()}),3e3)})(),(()=>{const e=document.querySelector(".accordeon-section").querySelector(".accordeon").querySelectorAll(".element");e.forEach((t=>{const n=t.querySelector(".title");t.querySelector(".element-content").classList.add("animate__animated","animate__fadeInDown","animate__faster"),n.addEventListener("click",(t=>{const n=t.target.closest(".element");e.forEach((e=>{e===n?e.classList.toggle("active"):e.classList.remove("active")}))}))}))})(),(()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".header-wrapper").getBoundingClientRect().height;e.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const n=e.target.getAttribute("href"),o=document.querySelector(n).getBoundingClientRect().top;window.scrollBy({top:o-t,behavior:"smooth"})}))}))})(),(()=>{const e=document.querySelector("#services"),t=document.querySelector(".main-wrapper"),n=document.querySelector(".header-wrapper").getBoundingClientRect().height,o=document.querySelector(".up");o.classList.add("animate__animated"),o.classList.add("animate__bounceOutDown"),o.addEventListener("click",(e=>{e.preventDefault(),t.scrollIntoView({behavior:"smooth",block:"start"})})),document.addEventListener("scroll",(t=>{e.getBoundingClientRect().top<n+1?(o.classList.remove("animate__bounceOutDown"),o.classList.add("animate__bounceInUp")):(o.classList.add("animate__bounceOutDown"),o.classList.remove("animate__bounceInUp"))}))})(),(()=>{const e="Идет отправка ...",t=document.querySelector("#callback").querySelector("form"),n=t.querySelector('input[name="fio"]'),o=t.querySelector('input[name="tel"]'),i=document.createElement("div");i.textContent=e,i.style.cssText="font-size:1.5rem; font-weight:bold; color:#4e4e4e; text-align:center; padding: 5px 0;",n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/((?<=^)\s+)|((?<=\s)\s+)|([^а-яА-ЯёЁ\s])/gi,"")})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/([^\d\+])|((?<=[\d\D])\++)|((?<=[\d\D]{12,})[\d\D])/g,"")})),t.addEventListener("submit",(n=>{n.preventDefault(),t.appendChild(i),i.textContent=e;const o=new FormData(t);let s={};o.forEach(((e,t)=>{s[t]=e})),(e=>fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(s).then((e=>{if(200!==e.status)throw new Error("Server response not 200 !!!");i.textContent="Спасибо! Ваша заявка отправлена!",console.log("Server success")})).catch((e=>{i.textContent="Ошибка! Что-то пошло не так :(",console.error("Server error",e)})),(e=>{setTimeout((()=>{e.querySelectorAll('input[type="text"]').forEach((e=>{e.value=""}))}),1e3),setTimeout((()=>{i.remove()}),7e3)})(t)}))})(),new class{constructor({main:e,wrap:t,next:n,prev:o,position:i=0,slidesToShow:s=3,infinity:r=!0,animate:l=!1}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.next=document.querySelector(n),this.prev=document.querySelector(o),this.slides=document.querySelector(t).children,this.slidesToShow=s,this.options={position:i,infinity:r,widthSlide:Math.floor(100/this.slidesToShow)}}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){const e=document.createElement("style");e.id="sliderCarousel-style",e.textContent=`\n.glo-slider {\n    overflow: hidden !important;\n}\n.glo-slider__wrap {\n    display: flex !important;\n    justify-content: space-between !important;\n    align-items: center !important;\n    transition: transform 0.5s !important;\n    will-change: transition !important;\n}\n.glo-slider__item {\n    flex: 0 0 ${this.options.widthSlide}% !important;\n    margin: auto 0 !important;\n}\n.glo-slider__prev,\n.glo-slider__next {\n    margin: 0 12px;\n    border: 12px solid transparent;\n    background: transparent;\n}\n.glo-slider__next {\n    border-left-color: #19b5fe;\n}\n.glo-slider__prev {\n    border-right-color: #19b5fe;\n}\n\n.glo-slider__next:hover,\n.glo-slider__prev:hover,\n.glo-slider__next:focus,\n.glo-slider__prev:focus {\n    background: transparent;\n    outline: transparent;\n}\n`,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}}({main:".services-elements",wrap:".services-carousel",next:".arrow-right",prev:".arrow-left",slidesToShow:3}).init()})();
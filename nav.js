document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".nav-item");document.querySelectorAll(".nav-link");let s=document.querySelectorAll(".dropdown-menu"),t=document.querySelector(".navbar-nav"),l=document.getElementById("menu-checkbox"),i=document.querySelector(".menu-toggle"),n=!1;function c(){s.forEach(e=>{e.style.display="none",e.classList.remove("slide-in")}),e.forEach(e=>{e.classList.remove("active")})}e.forEach(e=>{e.addEventListener("click",function(){let e=this.classList.contains("active");if(e)c(),window.innerWidth<1200&&(t.classList.remove("slide-in"),t.classList.add("slide-out"),setTimeout(()=>{t.style.display="none",t.classList.remove("slide-out"),c()},300),l.checked=!1,n=!1);else{c(),this.classList.add("active");let s=this.querySelector(".dropdown-menu");s.style.display="flex",s.classList.add("slide-in")}})});let d=document.querySelector(".nav-menu-small");d.addEventListener("click",function(){n?(t.classList.remove("slide-in"),t.classList.add("slide-out"),setTimeout(()=>{t.style.display="none",t.classList.remove("slide-out"),c()},300),n=!1):(t.classList.remove("slide-out"),t.classList.add("slide-in"),t.style.display="block",c(),n=!0),l.checked=n}),l.addEventListener("change",function(){i.classList.toggle("checked",this.checked),(n=this.checked)||c()}),i.style.pointerEvents="none",window.addEventListener("resize",function(){window.innerWidth>1200?(t.style.display="flex",n=!0):(t.style.display="none",n=!1,c())})});
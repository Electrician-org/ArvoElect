(function(){
"use strict";

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section");

// MOBILE MENU
if(menuToggle){ menuToggle.addEventListener("click",()=>{ navMenu.classList.toggle("active");}); }
navLinks.forEach(link=>{ link.addEventListener("click",()=>{ navMenu.classList.remove("active"); });});

// SMOOTH SCROLL
navLinks.forEach(link=>{
  link.addEventListener("click", function(e){
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if(targetSection){
      e.preventDefault();
      const offsetPosition = targetSection.offsetTop - 80;
      window.scrollTo({top: offsetPosition, behavior:"smooth"});
    }
  });
});

// ACTIVE NAV SWITCH
function updateActiveNav(){
  let currentSection="";
  sections.forEach(section=>{
    const sectionTop = section.offsetTop-120;
    const sectionHeight = section.offsetHeight;
    if(window.scrollY>=sectionTop && window.scrollY<sectionTop+sectionHeight){
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach(link=>{ link.classList.remove("active"); if(link.getAttribute("href")==="#"+currentSection){ link.classList.add("active"); }});
}
window.addEventListener("scroll", updateActiveNav);

// HEADER SCROLL EFFECT
function handleHeaderScroll(){
  if(window.scrollY>50){ header.style.background="#0b1220"; header.style.boxShadow="0 5px 20px rgba(0,102,255,0.15)"; }
  else{ header.style.background="var(--bg-secondary)"; header.style.boxShadow="none"; }
}
window.addEventListener("scroll", handleHeaderScroll);

// SCROLL REVEAL
const revealElements = document.querySelectorAll(".card,.section-title,.section-description,.feature-list li");
revealElements.forEach(el=>{ el.style.opacity="0"; el.style.transform="translateY(40px)"; el.style.transition="all 0.6s ease"; });
function revealOnScroll(){
  const triggerBottom = window.innerHeight*0.85;
  revealElements.forEach(el=>{ if(el.getBoundingClientRect().top<triggerBottom){ el.style.opacity="1"; el.style.transform="translateY(0)"; } });
}
window.addEventListener("scroll",revealOnScroll);
revealOnScroll();

})();

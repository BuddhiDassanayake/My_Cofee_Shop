let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
}
/*toggle we can use some hide ->display or display->hide */

let navbar=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()=>{
    navbar.classList.toggle('active');
}

// script.js

document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 750) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
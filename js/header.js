// Barra de nevegacion pegajoso
window.addEventListener("scroll", ()=>{
    let header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);
});


//javascript for responsive navigation sidebar menu
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('.btn-toggle__menu');
let closeBtn = document.querySelector('.btn-toggle__close');

menuBtn.addEventListener("click", () => {
  navbar.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove('active');
});
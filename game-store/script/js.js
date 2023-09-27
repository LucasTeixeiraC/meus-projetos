let menu = document.querySelector(".menu-icon")
let navbar = document.querySelector('.menu')

menu.onclick = () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('move')
    bell.classList.remove('active')
}
// notification 

let bell = document.querySelector('.notification')

document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');
}

// Swipper
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
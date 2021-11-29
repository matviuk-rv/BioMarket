let search = document.querySelector("#search-btn");
let phone = document.querySelector("#phone-btn");
let shopping = document.querySelector("#shopping-btn");
let login = document.querySelector("#login-btn");
let navbar = document.querySelector("#menu-btn");

let search_popup = document.querySelector(".search-form");
let phone_popup = document.querySelector(".phone");
let shopping_popup = document.querySelector(".shopping");
let login_popup = document.querySelector(".login");
let navbar_popup = document.querySelector(".header__navbar");

////////////////////////////
search.addEventListener("click", function () {
   search_popup.classList.toggle("active");
   phone_popup.classList.remove("active");
   shopping_popup.classList.remove("active");
   login_popup.classList.remove("active");
   navbar_popup.classList.remove("active");
})
////////////////////////////
phone.addEventListener("click", function () {
   phone_popup.classList.toggle("active");
   search_popup.classList.remove("active");
   shopping_popup.classList.remove("active");
   login_popup.classList.remove("active");
   navbar_popup.classList.remove("active");
})
////////////////////////////
shopping.addEventListener("click", function () {
   shopping_popup.classList.toggle("active");
   search_popup.classList.remove("active");
   phone_popup.classList.remove("active");
   login_popup.classList.remove("active");
   navbar_popup.classList.remove("active");
})
////////////////////////////
login.addEventListener("click", function () {
   login_popup.classList.toggle("active");
   search_popup.classList.remove("active");
   phone_popup.classList.remove("active");
   shopping_popup.classList.remove("active");
   navbar_popup.classList.remove("active");
})
////////////////////////////
navbar.addEventListener("click", function () {
   navbar_popup.classList.toggle("active");
   search_popup.classList.remove("active");
   phone_popup.classList.remove("active");
   shopping_popup.classList.remove("active");
   login_popup.classList.remove("active");
})
////////////////////////////
window.onscroll=() =>{
   search_popup.classList.remove("active");
   phone_popup.classList.remove("active");
   shopping_popup.classList.remove("active");
   login_popup.classList.remove("active");
   navbar_popup.classList.remove("active");
}
////////////////////////////

var swiper = new Swiper(".products", {
   slidesPerView: 1,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   loop:true,
   autoplay:{
      delay:3500,
      disableOnInteraction:false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});


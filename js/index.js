// swiper
let nav  = document.querySelector("header nav") ; 
let swiperHeader = document.querySelector(".swiper.mySwiper") ; 
let headerMenue = document.querySelector(".header .menue") ; 
let logo = document.querySelector("nav .logo img")
let showMenue = document.querySelector("nav .show-menue")
console.log(logo.clientHeight)
console.log(showMenue)
window.onload = () => {
  showMenue.style.height = `${logo.clientHeight}px`
  swiperHeader.style.top = `-${nav.clientHeight}px`
  headerMenue.style.top = `${logo.clientHeight}px`
  headerMenue.style.height = `calc(100vh - ${logo.clientHeight}px)`
}


window.onresize = () => {
  swiperHeader.style.top = `-${nav.clientHeight}px`
  headerMenue.style.top = `${logo.clientHeight}px`
  headerMenue.style.height = `calc(100vh - ${logo.clientHeight}px)`
  showMenue.style.height = `${logo.clientHeight}px`
  // console.log(nav.clientHeight)
}
// console.log(nav.clientHeight)
// console.log(swiperHeader)
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop : true ,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// swiper

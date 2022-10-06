// swiper
let nav  = document.querySelector("header nav") ; 
let swiperHeader = document.querySelector(".swiper.mySwiper") ; 
let headerMenue = document.querySelector(".header .menue") ; 
let logo = document.querySelector("nav .logo img")
let showMenue = Array.from(document.querySelectorAll("nav .show-menue"))
let allCanves = Array.from(document.querySelectorAll(".offcanvas")) ; 



window.onload = () => {
  showMenue[0].style.height = `${logo.clientHeight}px` ;
  showMenue[1].style.height = `${logo.clientHeight}px` ;

  swiperHeader.style.top = `-${nav.clientHeight}px`
  headerMenue.style.top = `${logo.clientHeight}px`
  headerMenue.style.height = `calc(100vh - ${logo.clientHeight}px)`
}


window.onresize = () => {
  swiperHeader.style.top = `-${nav.clientHeight}px`
  headerMenue.style.top = `${logo.clientHeight}px`
  headerMenue.style.height = `calc(100vh - ${logo.clientHeight}px)`
  showMenue[0].style.height = `${logo.clientHeight}px` ;
  showMenue[1].style.height = `${logo.clientHeight}px` ;

}

let swiper1 = new Swiper(".mySwiper", {
    direction: "vertical",
    loop : true ,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

 
  let swiper2 = new Swiper(".mySwiper2", {
    loop : true ,

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

    },
  });


  let swiper3 = new Swiper(".mySwiper3", {
    loop : true ,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

    },
  });


  let swiper6 = new Swiper(".mySwiper4", {
   loop : true ,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      300: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
     
    },
  });
// swiper

// handle openCanves
showMenue.forEach(e=> {
  e.addEventListener("click" , () => {
    if(e.classList.contains("no-show")) {
      // console.log(true)
      e.classList.toggle("no-show")
      e.children[1].innerHTML = "إغلاق"
     e.children[0].innerHTML = `
     <svg xmlns="http://www.w3.org/2000/svg" width="22.628" height="22.627" viewBox="0 0 22.628 22.627">
      <g id="Group_2497" data-name="Group 2497" transform="translate(-867.62 -983.586) rotate(45)">
        <rect id="Rectangle_80" data-name="Rectangle 80" width="6" height="6" transform="translate(1322 69)" fill="#fff"/>
        <rect id="Rectangle_81" data-name="Rectangle 81" width="6" height="6" transform="translate(1322 79)" fill="#BF202F"/>
        <rect id="Rectangle_82" data-name="Rectangle 82" width="6" height="6" transform="translate(1322 89)" fill="#fff"/>
        <rect id="Rectangle_84" data-name="Rectangle 84" width="6" height="6" transform="translate(1318 85) rotate(180)" fill="#fff"/>
        <rect id="Rectangle_87" data-name="Rectangle 87" width="6" height="6" transform="translate(1332 79)" fill="#fff"/>
      </g>
    </svg>
     `
    } else {
      // e.classList.add("no-show")
      e.classList.toggle("no-show")
      e.children[1].innerHTML = "القائمة"
      e.children[0].innerHTML = `
      <svg id="Menu" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <rect id="Rectangle_687" data-name="Rectangle 687" width="30" height="30" fill="none"></rect>
      <g id="Group_2724" data-name="Group 2724" transform="translate(-1310 -67)">
        <rect id="Rectangle_80" data-name="Rectangle 80" width="6" height="6" transform="translate(1322 69)" fill="#696969"></rect>
        <rect id="Rectangle_81" data-name="Rectangle 81" width="6" height="6" transform="translate(1322 79)" fill="#696969"></rect>
        <rect id="Rectangle_82" data-name="Rectangle 82" width="6" height="6" transform="translate(1322 89)" fill="#696969"></rect>
        <rect id="Rectangle_83" data-name="Rectangle 83" width="6" height="6" transform="translate(1318 75) rotate(180)" fill="#696969"></rect>
        <rect id="Rectangle_84" data-name="Rectangle 84" width="6" height="6" transform="translate(1318 85) rotate(180)" fill="#696969"></rect>
        <rect id="Rectangle_85" data-name="Rectangle 85" width="6" height="6" transform="translate(1318 95) rotate(180)" fill="#696969"></rect>
        <rect id="Rectangle_86" data-name="Rectangle 86" width="6" height="6" transform="translate(1332 69)" fill="#696969"></rect>
        <rect id="Rectangle_87" data-name="Rectangle 87" width="6" height="6" transform="translate(1332 79)" fill="#696969"></rect>
        <rect id="Rectangle_88" data-name="Rectangle 88" width="6" height="6" transform="translate(1332 89)" fill="#0D9642"></rect>
      </g>
    </svg>      `
    }

  })
})



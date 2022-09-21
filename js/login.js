// let forgetPassForm = document.querySelector(".forget-pass-form") ; 
// edit logo 

let links = document.querySelector("nav .links") ; 
let container = document.querySelector(".container") ; 
window.onload = () => {
  let mar = (window.innerWidth - container.clientWidth ) / 2 ; 
  links.style.marginLeft = `${mar}px`
}
window.addEventListener("resize" , () => {
  let mar = (window.innerWidth - container.clientWidth ) / 2 ; 
  links.style.marginLeft = `${mar}px`
  if(window.innerWidth < 767) {
  }

})

// edit logo 

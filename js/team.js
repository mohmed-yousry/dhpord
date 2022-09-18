let acceptBtnModal = document.querySelector(".acceptBtn");
let allSvgOnTr = Array.from(document.querySelectorAll("tr .icon-action")) ; 
allSvgOnTr.forEach(e=> {
    e.addEventListener("click" , () => {
        allSvgOnTr.forEach(x=> {
            x.classList.remove("active")
        })
        e.classList.add("active") ; 

    })
})
acceptBtnModal.addEventListener("click" , () => {
    let activeSvg = document.querySelector("tr .icon-action.active") ; 
    activeSvg.parentElement.parentElement.parentElement.children[2].children[0].children[1].innerHTML = "تم قبول الدعوة"
    let newModil = activeSvg.parentElement.children[1] ; 
    newModil.classList.remove("d-none")
    // console.log()
    activeSvg.remove()

})
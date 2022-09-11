let allNavLinks = Array.from(document.querySelectorAll(".form-par .right ul li")) ; 
let allContent = Array.from(document.querySelector(".form-par .content .right .content").children) ; 
allNavLinks.forEach(e=> {
    e.addEventListener("click"  , (tr) => {
        allNavLinks.forEach(x=> {
            x.classList.remove("active")
        })
        allContent.forEach(con => {
            con.style.display = "none" ; 
            if(con.getAttribute("data-lab") == e.getAttribute("data-targ")) {
                con.style.cssText = "display: inherit !important; "

            }
            e.classList.add("active")
        })
    })

})


let allFileBtn = Array.from(document.querySelectorAll(`.par-input .input input[type ="file"]`)) ; 
allFileBtn.forEach(e=> {
    e.addEventListener("change" , () => {
        e.parentElement.parentElement.children[1].children[0].classList.remove("d-none");
        e.parentElement.parentElement.children[1].children[1].classList.remove("d-none")
        if(e.value.includes("fakepath")) {
          
          e.parentElement.parentElement.children[1].children[1].children[0].innerHTML = e.value.slice(12 , 27) ;
        } else {
            e.parentElement.parentElement.children[1].children[1].children[0].innerHTML = e.value.slice(12 , 27) ;

        }
        })
    })


// let editPic = document.querySelector(".edit-pic .edit") ; 
// editPic.addEventListener("click" , () => {
//     let modil = document.createElement("div") ; 
   
// })

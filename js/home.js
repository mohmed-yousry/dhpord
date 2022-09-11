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
                con.style.cssText = "                    display: inherit !important;                "

            }
            e.classList.add("active")
        })
        // console.log(e.getAttribute("data-targ")) = 
        // if()
    })

})
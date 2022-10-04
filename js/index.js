// dagre 1 //selecting all required elements
const dropArea = document.querySelector(".drag-area1"),
dragText = dropArea.querySelector(".heder1"),
// button = dropArea.querySelector(".openfile"),
input = dropArea.querySelector(".input-imges-file1");
let file; //this is a global variable and we'll use it inside multiple functions

dropArea.onclick = ()=>{
   
    input.click(); //if user click on the button then the input also clicked

   
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
        let imgTag = `<img src="${fileURL}" alt="image">  
        <div style = "background-color:#00000047 ; font-size : x-large" class="overlay align-items-center justify-content-center text-white position-absolute start-0 top-0 w-100 h-100 d-none">
        change click
        </div>
        `; //creating an img tag and passing user selected file source inside src attribute
        dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
        document.querySelector(".overlay").addEventListener("click" , () => {
          dropArea.classList.remove("active")
          // imgTag = ""
          // console.log()
          document.querySelector(".overlay").parentElement.innerHTML = `
              <header class="heder2 heder">Drag &amp; Drop to Upload File</header>
              <span class="text-uppercase">or click</span>
              <input class="input-imges-file2 input-imges-file" type="file" hidden="">
          `
        })
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
// dagre 1 //selecting all required elements


let allArea = Array.from(document.querySelectorAll(".row-3 .drag-area")) ; 
allArea.forEach(e=> {
    const dropArea = e ;
    const dragText = e.children[1] ;
    const input = e.children[3] ;
    let file; //this is a global variable and we'll use it inside multiple functions
    // console.log(e.children[3])

dropArea.onclick = ()=>{
    input.click(); //if user click on the button then the input also clicked
    
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      let imgTag = `<img src="${fileURL}" alt="image">  
      <div style = "background-color:#00000047 ; font-size : x-large" class="overlay align-items-center justify-content-center text-white position-absolute start-0 top-0 w-100 h-100 d-none">
      change click
      </div>
      `; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
      document.querySelector(".overlay").addEventListener("click" , () => {
        dropArea.classList.remove("active")
        // imgTag = ""
        // console.log()
        document.querySelector(".overlay").parentElement.innerHTML = `
            <header class="heder2 heder">Drag &amp; Drop to Upload File</header>
            <span class="text-uppercase">or click</span>
            <input class="input-imges-file2 input-imges-file" type="file" hidden="">
        `
      })
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
})


// handle select gender
let selectGender = document.querySelector(".select-gender") ; 
let allOptionGender = Array.from(document.querySelectorAll(".select-gender option"))
selectGender.addEventListener("change" ,(tr) => {

  if(tr.target.value == "انثى") {
    selectGender.parentElement.children[0].innerHTML = `
    <path id="Path_14301" data-name="Path 14301" d="M-197.259,300.456a4.36,4.36,0,0,1-4.36,4.36,4.36,4.36,0,0,1-4.36-4.36,4.36,4.36,0,0,1,4.36-4.36A4.36,4.36,0,0,1-197.259,300.456Zm-4.36,4.36v4.274m2.137-2.136h-4.275" transform="translate(206.479 -295.596)" fill="none" stroke="#BF202F" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"/>
    `
    console.log("fam")
  } else {
    selectGender.parentElement.children[0].innerHTML = `
    <g id="Group_2553" data-name="Group 2553" transform="translate(197.206 -296.601)">
    <path id="Path_14300" data-name="Path 14300" d="M-188.344,304.683a4.359,4.359,0,0,1-4.36,4.36,4.359,4.359,0,0,1-4.359-4.36,4.358,4.358,0,0,1,4.359-4.359A4.359,4.359,0,0,1-188.344,304.683Zm3.75-3.148v-4.274h-4.274m4.274,0-4.723,4.723" transform="translate(0.357 0.047)" fill="none" stroke="#bf202f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"></path>
    </g>
    `
  }
})


// handle select gender

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

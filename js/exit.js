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

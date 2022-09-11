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


let editPic = document.querySelector(".edit-pic .edit") ; 
editPic.addEventListener("click" , () => {
    // let modil = document.createElement("div") ; 
    // modil.className = "modal fade show" ; 
    // modil.id = "exampleModalToggle" ; 
    // modil.setAttribute("aria-modal" , true)
    // modil.setAttribute("aria-labelledby" , "exampleModalToggleLabel")
    // modil.setAttribute("tabindex" , "-1") 
    // modil.setAttribute("role" , "dialog") 
    // modil.style.cssText = "display : block "
    
    // modil.className = `position-fixed top-0 left-0 modil-edti-pic d-flex justify-content-center align-items-center`
//    modil.innerHTML =`
//         <div class="content position-relative">
//         <div class="title d-flex align-items-center justify-content-between ">
//         <h5 style="color : var(--grean-color) ;">تغيير صورة الحساب</h5><span class="icon-clear colse-modil"></span> 
//         </div>
//         <h5 class="text-center " style="color : var( --red-color) ; font-size : 9px ; margin-top: 2.5rem;">تغيير صورة الحساب يتطلب موافقة موظف الإتحاد*</h5>
//         <form class="form position-relative">
//         <label class="form__container" id="upload-container">Choose or Drag &amp; Drop Files</label>
//         <input class="form__file" id="upload-files" type="file" accept="image/*" multiple="">
//         <div class="form__files-container" id="files-list-container"></div>
//         </form>
//         <button>ارسال</button>
//         </div>
//   `


// modil.innerHTML = `
//   <div class="modal-dialog modal-dialog-centered">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         Show a second modal and hide this one with the button below.
//       </div>
//       <div class="modal-footer">
//         <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
//   <div class="modal-dialog modal-dialog-centered">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         Hide this modal and show the first with the button below.
//       </div>
//       <div class="modal-footer">
//         <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
//       </div>
//     </div>
//   </div>
// `


//   document.querySelector("body").appendChild(modil)
//   document.querySelector(".colse-modil").addEventListener("click" , () => {
//     modil.remove()
//   })

 
  // dreag and drop
//   const INPUT_FILE = document.querySelector('#upload-files');
//   const INPUT_CONTAINER = document.querySelector('#upload-container');
//   const FILES_LIST_CONTAINER = document.querySelector('#files-list-container');
//   const FILE_LIST = [];
//   let UPLOADED_FILES = [];
  
//   const multipleEvents = (element, eventNames, listener) => {
//     const events = eventNames.split(' ');
   
//     events.forEach(event => {
//       element.addEventListener(event, listener, false);
//     });
//   };
  
//   const previewImages = () => {
//     FILES_LIST_CONTAINER.innerHTML = '';
//     if (FILE_LIST.length > 0) {
//       FILE_LIST.forEach((addedFile, index) => {
//         const content = `
//           <div class="form__image-container js-remove-image" data-index="${index}">
//             <img class="form__image" src="${addedFile.url}" alt="${addedFile.name}">
//           </div>
//         `;
  
//         FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
//       });
//     } else {
//       INPUT_FILE.value= "";
//     }
//   }
  
//   const fileUpload = () => {
//     if (FILES_LIST_CONTAINER) {
//       multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
//         INPUT_CONTAINER.classList.add('active');
//       });
    
//       multipleEvents(INPUT_FILE, 'dragleave dragend drop change blur', () => {
//         INPUT_CONTAINER.classList.remove('active');
//       });
    
//       INPUT_FILE.addEventListener('change', () => {
//         const files = [...INPUT_FILE.files];
//         files.forEach(file => {
//           const fileURL = URL.createObjectURL(file);
//           const fileName = file.name;
//           if (!file.type.match("image/")){
//             alert(file.name + " is not an image");
//           } else {
//             const uploadedFiles = {
//               name: fileName,
//               url: fileURL,
//             };
  
//             FILE_LIST.push(uploadedFiles);
//           }
//         });
        
//         previewImages();
//         UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
//         removeFile();
//       }); 
//     }
//   };
  
//   const removeFile = () => {
//     UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
    
//     if (UPLOADED_FILES) {
//       UPLOADED_FILES.forEach(image => {
//         image.addEventListener('click', function() {
//           const fileIndex = this.getAttribute('data-index');
  
//           FILE_LIST.splice(fileIndex, 1);
//           previewImages();
//           removeFile();
//         });
//       });
//     } else {
//       [...INPUT_FILE.files] = [];
//     }
//   };
  
//   fileUpload();
//   removeFile();
  // dreag and drop
})





let allFormFile = Array.from(document.querySelectorAll(".form-file")) ; 
allFormFile.forEach(e=> {
    // console.log()
    const INPUT_FILE =e.children[1] ;
    const INPUT_CONTAINER = e.children[0] ;
    const FILES_LIST_CONTAINER =e.children[2] ;
    const FILE_LIST = [];
    let UPLOADED_FILES = [];
    
    const multipleEvents = (element, eventNames, listener) => {
      const events = eventNames.split(' ');
     
      events.forEach(event => {
        element.addEventListener(event, listener, false);
      });
    };
    
    const previewImages = () => {
      FILES_LIST_CONTAINER.innerHTML = '';
      if (FILE_LIST.length > 0) {
        FILE_LIST.forEach((addedFile, index) => {
          const content = `
            <div class="form__image-container js-remove-image " data-index="${index}">
              <img class="form__image" src="${addedFile.url}" alt="${addedFile.name}">
            </div>
          `;
    
          FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
        });
      } else {
        console.log('empty')
        INPUT_FILE.value= "";
      }
    }
    
    const fileUpload = () => {
      if (FILES_LIST_CONTAINER) {
        multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
          INPUT_CONTAINER.classList.add('active');
        });
      
        multipleEvents(INPUT_FILE, 'dragleave dragend drop change blur', () => {
          INPUT_CONTAINER.classList.remove('active');
        });
      
        INPUT_FILE.addEventListener('change', () => {
          const files = [...INPUT_FILE.files];
        //   console.log("changed")
          files.forEach(file => {
            const fileURL = URL.createObjectURL(file);
            const fileName = file.name;
            if (!file.type.match("image/")){
              alert(file.name + " is not an image");
              console.log(file.type)
            } else {
              const uploadedFiles = {
                name: fileName,
                url: fileURL,
              };
    
              FILE_LIST.push(uploadedFiles);
            }
          });
          
          console.log(FILE_LIST)//final list of uploaded files
          previewImages();
          UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
          removeFile();
        }); 
      }
    };
    
    const removeFile = () => {
      UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
      
      if (UPLOADED_FILES) {
        UPLOADED_FILES.forEach(image => {
          image.addEventListener('click', function() {
            const fileIndex = this.getAttribute('data-index');
    
            FILE_LIST.splice(fileIndex, 1);
            previewImages();
            removeFile();
          });
        });
      } else {
        [...INPUT_FILE.files] = [];
      }
    };
    
    fileUpload();
    removeFile();

})

// drag
const INPUT_FILE =document.querySelector("#upload-files") ;
const INPUT_CONTAINER = document.querySelector("#upload-container") ;
const FILES_LIST_CONTAINER =document.querySelector("#files-list-container") ;
const FILE_LIST = [];
let UPLOADED_FILES = [];

const multipleEvents = (element, eventNames, listener) => {
  const events = eventNames.split(' ');
 
  events.forEach(event => {
    element.addEventListener(event, listener, false);
  });
};

const previewImages = () => {
  FILES_LIST_CONTAINER.innerHTML = '';
  if (FILE_LIST.length > 0) {
    FILE_LIST.forEach((addedFile, index) => {
      const content = `
        <div class="form__image-container js-remove-image pic" data-index="${index}">
          <img class="form__image" src="${addedFile.url}" alt="${addedFile.name}">
        </div>
      `;

      FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
    });
  } else {
    // console.log('empty')
    INPUT_FILE.value= "";
  }
}

const fileUpload = () => {
  if (FILES_LIST_CONTAINER) {
    multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
      INPUT_CONTAINER.classList.add('active');
    });
    
    multipleEvents(INPUT_FILE, 'dragleave dragend drop change blur', () => {
      INPUT_CONTAINER.classList.remove('active');
    });
    
    INPUT_FILE.addEventListener('change', () => {
      const files = [...INPUT_FILE.files];
      
      INPUT_CONTAINER.remove() ;
      FILES_LIST_CONTAINER.children[0].classList.add("pic") 
    //   FILES_LIST_CONTAINER.children[0].style.width = "100%"
    // document.querySelector(".form__image-container").style.width = "100%"
      console.log()
    //   console.log("changed")
      files.forEach(file => {
        const fileURL = URL.createObjectURL(file);
        const fileName = file.name;
        if (!file.type.match("image/")){
          alert(file.name + " is not an image");
        //   console.log(file.type)
        } else {
          const uploadedFiles = {
            name: fileName,
            url: fileURL,
          };

          FILE_LIST.push(uploadedFiles);
        }
      });
      
    //   console.log(FILE_LIST)//final list of uploaded files
      previewImages();
      UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
      removeFile();
    }); 
  }
};

const removeFile = () => {
  UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
  
  if (UPLOADED_FILES) {
    UPLOADED_FILES.forEach(image => {
      image.addEventListener('click', function() {
        const fileIndex = this.getAttribute('data-index');

        FILE_LIST.splice(fileIndex, 1);
        previewImages();
        removeFile();
      });
    });
  } else {
    [...INPUT_FILE.files] = [];
  }
};

fileUpload();
removeFile();

// drag
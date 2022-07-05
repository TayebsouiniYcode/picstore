// // let dropArea = document.getElementById('drop-area')

// // dropArea.addEventListener('dragenter', handlerFunction, false)
// // dropArea.addEventListener('dragleave', handlerFunction, false)
// // dropArea.addEventListener('dragover', handlerFunction, false)
// // dropArea.addEventListener('drop', handlerFunction, false)

// // // dropArea.addEventListener('dragenter', function() {
// // //     console.log("1");
// // // })
// // // dropArea.addEventListener('dragleave', function(){
// // //     console.log("2");
// // // })
// // // dropArea.addEventListener('dragover', function() {
// // //     console.log("3");
// // // })
// // // dropArea.addEventListener('drop', function() {
// // //     console.log("4");
// // // })

// // ************************ Drag and drop ***************** //
// let dropArea = document.getElementById("drop-area")

// // Prevent default drag behaviors
// ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, preventDefaults, false)   
//   document.body.addEventListener(eventName, preventDefaults, false)
// })

// // Highlight drop area when item is dragged over it
// ;['dragenter', 'dragover'].forEach(eventName => {
//   dropArea.addEventListener(eventName, highlight, false)
// })

// ;['dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, unhighlight, false)
// })

// // Handle dropped files
// dropArea.addEventListener('drop', handleDrop, false)

// function preventDefaults (e) {
//   e.preventDefault()
//   e.stopPropagation()
// }

// function highlight(e) {
//   dropArea.classList.add('highlight')
// }

// function unhighlight(e) {
//   dropArea.classList.remove('active')
// }

// function handleDrop(e) {
//   var dt = e.dataTransfer
//   var files = dt.files

//   handleFiles(files)
// }

// let uploadProgress = []
// let progressBar = document.getElementById('progress-bar')

// function initializeProgress(numFiles) {
//   progressBar.value = 0
//   uploadProgress = []

//   for(let i = numFiles; i > 0; i--) {
//     uploadProgress.push(0)
//   }
// }

// function updateProgress(fileNumber, percent) {
//   uploadProgress[fileNumber] = percent
//   let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
//   progressBar.value = total
// }

// function handleFiles(files) {
//   files = [...files]
//   initializeProgress(files.length)
//   files.forEach(uploadFile)
//   files.forEach(previewFile)
// }

// function previewFile(file) {
//   let reader = new FileReader()
//   reader.readAsDataURL(file)
//   reader.onloadend = function() {
//     let img = document.createElement('img')
//     img.src = reader.result
//     document.getElementById('gallery').appendChild(img)
//   }
// }

// function uploadFile(file, i) {
//   var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload'
//   var xhr = new XMLHttpRequest()
//   var formData = new FormData()
//   xhr.open('POST', url, true)
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

//   // Update progress (can be used to show progress indicator)
//   xhr.upload.addEventListener("progress", function(e) {
//     updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
//   })

//   xhr.addEventListener('readystatechange', function(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       updateProgress(i, 100) // <- Add this
//     }
//     else if (xhr.readyState == 4 && xhr.status != 200) {
//       // Error. Inform the user
//     }
//   })

//   formData.append('upload_preset', 'ujpu6gyk')
//   formData.append('file', file)
//   xhr.send(formData)
// }


const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('input');

let file;

button.onclick = () => {
    input.click();
};

// when browse
input.addEventListener('change',function(){
    file = this.files[0];
    dragArea.classList.add('active');
    displayFile();
})

// when file is inside the drag area
dragArea.addEventListener('dragover',(event)=>{
    event.preventDefault();
    dragText.textContent = 'Releave to Upload';
    dragArea.classList.add('active');
    // console.log('file is inside the drag area');
});

// when file leaves the drag area
dragArea.addEventListener('dragleave',()=>{
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.remove('active');
    // console.log('file left the drag area');
});

// when the file is the drag area
dragArea.addEventListener('drop',(event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0];
    // console.log(file);

    // let fileType = file.type;
    // // console.log(fileType);
    // let validExtensions = ['image/jpeg', 'image/jpg', 'image/png' ];

    // if(validExtensions.includes(fileType)){
    //     let fileReader = new FileReader();

    //     fileReader.onload = () => {
    //         let fileURL = fileReader.result;
    //         // console.log(fileURL);
    //         let imgtag = `<img src="${fileURL}" alt="">`;
    //         dragArea.innerHTML = imgtag;
    //     };
    //     fileReader.readAsDataURL(file);
    // }else{
    //     alert('this file is not an image')
    //     dragArea.classList.remove('active');

    // }
    // // console.log('the file is dropped in drag area');
    displayFile();
});

function displayFile(){
    let fileType = file.type;
    // console.log(fileType);
    let validExtensions = ['image/jpeg', 'image/jpg', 'image/png' ];

    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let fileURL = fileReader.result;
            // console.log(fileURL);
            let imgtag = `<img src="${fileURL}" alt="">`;
            dragArea.innerHTML = imgtag;
        };
        fileReader.readAsDataURL(file);
    }else{
        alert('this file is not an image')
        dragArea.classList.remove('active');

    }
    // console.log('the file is dropped in drag area');
}

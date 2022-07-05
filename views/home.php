<!-- <div id="drop-area">
  <form class="my-form" method="post" action="" enctype="multipart/form-data">
     <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>
    <input type="file" name="files[]" id="fileElem" multiple onchange="handleFiles(this.files)">
    <label class="button" for="fileElem">Select some files</label>
    <input type="submit" value="Suivant" class="btn btn-primary" id="btn-upload">
  </form>
  <progress id="progress-bar" max=100 value=0></progress>
  <div id="gallery"></div>
</div> -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">

    <title>Document</title>
</head>
<body>
    <div class="container">
        <h3>Upload your file </h3>
        <div class="drag-area">
            <div class="icon">
              <i class="fas fa-images"></i>
            </div>
            <span class="header">Drag & Drop</span>
            <span class="header">or <span class="button">browse</span></span>
            <input type="file" hidden>
            <span class="support">supports: JPEG,JPG,PNG</span>

        </div>

    </div>

    <script src="main.js"></script>
</body>
</html>
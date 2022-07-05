<div id="drop-area">
  <form class="my-form" method="post" action="" enctype="multipart/form-data">
    <!-- <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p> -->
    <input type="file" name="files[]" id="fileElem" multiple onchange="handleFiles(this.files)">
    <label class="button" for="fileElem">Select some files</label>
    <input type="submit" value="Suivant" class="btn btn-primary" id="btn-upload">
  </form>
  <progress id="progress-bar" max=100 value=0></progress>
  <div id="gallery"></div>
</div>

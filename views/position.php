<?php
?>
<?php foreach($photos as $photo) : ?>
<img src="/assets/img/<?php echo $photo['name']; ?>" alt="" width="300" height="300">
<?php endforeach; ?>
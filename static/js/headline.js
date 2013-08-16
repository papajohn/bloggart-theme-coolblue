// Animates the Home headline

jQuery(document).ready(function() {
  var canvas = document.getElementById('headline_canvas');
  var context =  canvas.getContext('2d');
  var t = "Welcome!";
  context.fillText(t, 
                   (canvas.width - context.measureText(t).width) / 2, 
                   (canvas.height) / 2);
});

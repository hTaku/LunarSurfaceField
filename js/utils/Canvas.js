function Canvas(id, width, height){
  var canvas = document.getElementById(id);
  canvas.width = width;
  canvas.height = height;
  this.context = canvas.getContext('2d');
};

Canvas.prototype.draw = function(imgSrcs){
  var images = new Array();
  for(var i in imgSrcs){
    images[i] = new Image();
    images[i].src = imgSrcs[i].getFilename();
  }

  var ctx = this.context;
  var loadedCount = 1;
  for (var i in images) {
    images[i].addEventListener('load', function() {
      if (loadedCount == images.length) {
        for (var j in images) {
          console.log("draw [" + images[j].src + " : (" + imgSrcs[j].getX() + "," + imgSrcs[j].getY() + ")]");
//          ctx.drawImage(images[j], imgSrcs[j].getX(), imgSrcs[j].getY(), imgSrcs[j].getWidth(), imgSrcs[j].getHeight());
          ctx.drawImage(images[j], imgSrcs[j].getX(), imgSrcs[j].getY());
        }
      }
      loadedCount++;
    }, false);
  }
}
function Canvas(id, image, x, y){
  this.id = id;
  this.image = image;
  this.x = x;
  this.y = y;
};

Canvas.prototype.draw = function(){
  var canvas = document.getElementById(this.id);
  var ctx = canvas.getContext('2d');
  var img = new Image();
  img.src = this.image;
  ctx.drawImage(img, this.x, this.y);
}
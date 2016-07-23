function GameObject(point){
  var image;
  this.point = point;
}

GameObject.prototype.getPoint = function(){return this.point;}

GameObject.prototype.getImageFilename = function(){return '';}

GameObject.prototype.getImage = function(){
  return new ImageInfo(this.getImageFilename(), this.getPoint().getX(), this.getPoint().getY(), 40, 40);
}

GameObject.prototype.getZindex = function(){return 0;}
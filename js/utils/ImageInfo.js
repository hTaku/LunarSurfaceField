function ImageInfo(filename, x, y, width, height){
  this.filename = filename;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

ImageInfo.prototype.getFilename = function(){return this.filename;};
ImageInfo.prototype.getX = function(){return this.x;};
ImageInfo.prototype.getY = function(){return this.y;};
ImageInfo.prototype.getWidth = function(){return this.width;};
ImageInfo.prototype.getHeight = function(){return this.height;};
ImageInfo.prototype.getImage = function(){
  var image = new Image();
  image.src = this.getFilename();
  return image;
};
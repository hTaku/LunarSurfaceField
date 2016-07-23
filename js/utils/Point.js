function Point(x, y){
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function(){
  return this.x;
}

Point.prototype.getY = function(){
  return this.y;
}

function GameObject(){
  var image;
  var point;
}

GameObject.prototype.getImage = function(){
  return this.image;
}

GameObject.prototype.setPoint = function(point){
  this.point = point;
}

GameObject.prototype.draw = function(){
  var gameConfig = new GameConfig();
  console.log("[" + gameConfig.getWindow() + "] draw object : point(" + this.point.getX() + "," + this.point.getY() + ")" + this.getImage());
  var canvas = new Canvas(gameConfig.getWindow(), this.getImage(), this.point.getX(), this.point.getY());
  canvas.draw();
}


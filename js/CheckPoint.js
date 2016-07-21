/**
 * チェックポイント
 */
function CheckPoint(point){
  this.point = point;
};

CheckPoint.prototype.draw = function(){
  console.log("checkpoint draw [" + this.point.getX() + ", " + this.point.getY() + "]");
  //var canvas = new Canvas(new GameConfig().getWindow(), "./img/checkpoint.gif", this.point.getX(), this.point.getY());
  var canvas = new Canvas(new GameConfig().getWindow(), "./img/checkpoint.gif", this.point.getX(), this.point.getY());
  canvas.draw();
};

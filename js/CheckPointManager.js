/**
 * チェックポイント管理
 */
function CheckPointManager(){
  // チェックポイント数
  this.count = 3;
  // チェックポイントマップ
  this.checkPointMap = new Object();
  for(var i = 0; i < this.count; i++){
    this.checkPointMap[i] = new CheckPoint(this.getRandomPoint());
  }
};

CheckPointManager.prototype.getRandomPoint = function(){
  var gameConfig = new GameConfig();
  var x = Math.random() * gameConfig.getWidth();
  var y = Math.random() * gameConfig.getHeight();
  return new Point(x, y);
};

CheckPointManager.prototype.draw = function(){
  for(var i = 0; i < this.count; i++){
    this.checkPointMap[i].draw();
  }
};
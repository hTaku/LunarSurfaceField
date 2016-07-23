/**
 * チェックポイント
 */
function CheckPoint(point){
  this.point = point;
};
CheckPoint.prototype = new GameObject();

CheckPoint.prototype.getPoint = function(){return this.point;}

CheckPoint.prototype.getImageFilename = function(){return "./img/checkpoint.gif";}

CheckPoint.prototype.getZindex = function(){return 1;}
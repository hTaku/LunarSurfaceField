/**
 * ゴール
 */
function Goal(point){
  this.point = point;
  this.isClear = false;
};
Goal.prototype = new GameObject();

Goal.prototype.getPoint = function(){return this.point;}

Goal.prototype.getImageFilename = function(){
    if(!this.isClear){
        return "./img/checkpoint.gif";
    } else {
        return "./img/clear.gif";
    }
}

Goal.prototype.getZindex = function(){return 1;}

Goal.prototype.isClear = function(){return this.isClear;}

Goal.prototype.isInRange = function(point){
    return this.getPoint().getX() <= point.getX() && point.getX() <= this.getPoint().getX() + 40
        && this.getPoint().getY() <= point.getY() && point.getY() <= this.getPoint().getY() + 40;
}

Goal.prototype.clear = function(){
    this.clear = true;
}
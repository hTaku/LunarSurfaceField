function Player(point){
  this.point = point;
}
Player.prototype = new GameObject();

Player.prototype.getPoint = function(){return this.point;}

Player.prototype.getImageFilename = function(){return "./img/player.gif";}

Player.prototype.getZindex = function(){return 0;}

Player.prototype.setPoint = function(point){this.point = point;}

Player.getWidth = function(){return 10;}
Player.getHeight = function(){return 10;}
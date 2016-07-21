function GameConfig(){
  this.width = 800;
  this.height = 640;
  this.window = "game";
}
GameConfig.prototype.getWidth = function(){return this.width;};
GameConfig.prototype.getHeight = function(){return this.height;};
GameConfig.prototype.getWindow = function(){return this.window;};

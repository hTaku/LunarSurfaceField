function GameConfig(){
  this.width = 400;
  this.height = 400;
  this.window = "game";
  this.buffer = "buffer";
}
GameConfig.prototype.getWidth = function(){return this.width;};
GameConfig.prototype.getHeight = function(){return this.height;};
GameConfig.prototype.getWindow = function(){return this.window;};
GameConfig.prototype.getBuffer = function(){return this.buffer;};

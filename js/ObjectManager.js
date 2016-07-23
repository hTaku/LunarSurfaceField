function ObjectManager(){
  this.objectImageInfoMap = new Map();
};

ObjectManager.prototype.regist = function(object){
  var zindex = object.getZindex();
  var objects = this.objectImageInfoMap.get(zindex);
  if(objects == undefined){
    objects = new Array();
  }
  objects.push(object.getImage());
  this.objectImageInfoMap.set(zindex, objects);
}

ObjectManager.prototype.draw = function(){
  var config = new GameConfig();
  var canvas = new Canvas(config.getWindow(), config.getWidth(), config.getHeight());
  for(var [key, value] of this.objectImageInfoMap){
    canvas.draw(value);
  }
}

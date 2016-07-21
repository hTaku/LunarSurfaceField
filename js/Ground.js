function Ground(){
}
Ground.prototype = new GameObject();

Ground.prototype.getImage = function(){
  return "./img/ground.gif";
}

Ground.getWidth = function(){return 40;}
Ground.getHeight = function(){return 40;}

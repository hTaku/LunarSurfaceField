// onload時に実行
window.addEventListener("load", function() {
  console.log("load game window");
  
  var gameConfig = new GameConfig();
  var checkPointManager = new CheckPointManager();
  var grounds = new Array();
  for(var i = 0; i < gameConfig.getHeight(); i += Ground.getHeight()){
    for(var j = 0; j < gameConfig.getWidth(); j += Ground.getWidth()){
      var ground = new Ground();
      ground.setPoint(new Point(j, i));
      ground.draw();
    }
  }

  var checkPointManager = new CheckPointManager();
  checkPointManager.draw();
});

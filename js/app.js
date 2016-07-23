// onload時に実行
window.addEventListener("load", function() {
  console.log("load game window");
  
  var gameConfig = new GameConfig();

  var objectManager = new ObjectManager();
  
  // フィールドを登録
  for(var fieldXIndex = 0; fieldXIndex < gameConfig.getWidth(); fieldXIndex += Field.getWidth()){
    for(var fieldYIndex = 0; fieldYIndex < gameConfig.getHeight(); fieldYIndex += Field.getHeight()){
      objectManager.regist(new Field(new Point(fieldXIndex, fieldYIndex)));
    }
  }
  
  for(var checkPointIndex = 0; checkPointIndex < 3; checkPointIndex++){
     objectManager.regist(new CheckPoint(new Point(parseInt(Math.random() * gameConfig.getWidth()), parseInt(Math.random() * gameConfig.getHeight()))));
//    objectManager.regist(new CheckPoint(new Point(40*checkPointIndex, 40*checkPointIndex)));

  }
  
  objectManager.draw();
});

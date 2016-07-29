// onload時に実行
window.addEventListener("load", function() {
  console.log("load game window");
  
  var gameConfig = new GameConfig();
  
  var fields = new Array();
  // フィールドを登録
  for(var fieldXIndex = 0; fieldXIndex < gameConfig.getWidth(); fieldXIndex += Field.getWidth()){
    for(var fieldYIndex = 0; fieldYIndex < gameConfig.getHeight(); fieldYIndex += Field.getHeight()){
      var field = new Field(new Point(fieldXIndex, fieldYIndex)).getImage();
      fields.push(field);
    }
  }

  var checkPoints = new Array();
  for(var checkPointIndex = 0; checkPointIndex < 3; checkPointIndex++){
    checkPoints.push(new CheckPoint(new Point(parseInt(Math.random() * gameConfig.getWidth()), parseInt(Math.random() * gameConfig.getHeight()))).getImage());  

  }
  
  var canvas = document.getElementById(gameConfig.getBuffer());
  var context = canvas.getContext('2d');
  setInterval(drawEvent, 1000, context, gameConfig, fields, checkPoints, new Player(new Point(10, 10)).getImage());

//  var canvas = new Canvas(gameConfig.getBuffer(), gameConfig.getWidth(), gameConfig.getHeight());
//  canvas.draw(objects);
});

function drawEvent(context, config, fields, checkPoints, player){
  for(var fi in fields){
    console.log("field["+fi+"]" + fields[fi] + " (" + fields[fi].getX() + "," + fields[fi].getY() + ")");
    fields[fi].getImage().addEventListener('load', function(){
      for(var fj in fields){
        context.drawImage(fields[fj].getImage(), fields[fj].getX(), fields[fj].getY());
      }
    }, false);
  }
  
  for(var cpi in checkPoints){
    console.log("checkPoint["+cpi+"]" + checkPoints[cpi] + " (" + checkPoints[cpi].getX() + "," + checkPoints[cpi].getY() + ")");
    checkPoints[cpi].getImage().addEventListener('load', function() {
      for(var cpj in checkPoints){
        context.drawImage(checkPoints[cpj].getImage(), checkPoints[cpj].getX(), checkPoints[cpj].getY());
      }
    }, false);
  }
  
  console.log("player (" + player.getX() + "," + player.getY() + ")");
  player.getImage().addEventListener('load', function(){
    context.drawImage(player.getImage(), player.getX(), player.getY());
  }, false);
  
  player.setX(player.getX() + 10);
  player.setY(player.getY() + 10);
}

'use strict';


// onload時に実行
window.addEventListener("load", function() {
  console.log("load game window");
  
  var gameConfig = new GameConfig();
  
  var fields = new Array();
  // フィールドを登録
  var fields = new Array();
  fields.push(new Field(new Point(0 ,0)).getImage());
  var canvas = document.getElementById(gameConfig.getWindow());
  var context = canvas.getContext('2d');
  drawEvent(context, gameConfig, fields);
    
  //チェックポイント
  var checkPoints = new Array();
  for(var checkPointIndex = 0; checkPointIndex < 3; checkPointIndex++){
    checkPoints.push(new CheckPoint(new Point(parseInt(Math.random() * gameConfig.getWidth()), parseInt(Math.random() * gameConfig.getHeight()))).getImage());  
  }
  var checkPointCanvas = document.getElementById(gameConfig.getCheckPoint());
  var ctxCheckPoint = checkPointCanvas.getContext('2d');
  drawEvent(ctxCheckPoint, gameConfig, checkPoints);

//  var playerX = 0, playerY = 0;
//  var player = new Player(new Point(playerX, playerY))  
  // ゴール
  var goals = new Array();
  goals.push(new Goal(new Point(parseInt(Math.random() * gameConfig.getWidth()), parseInt(Math.random() * gameConfig.getHeight()))).getImage()); 
  var goalCanvas = document.getElementById(gameConfig.getGoal());
  var ctxGoal = goalCanvas.getContext('2d');
  drawEvent(ctxGoal, gameConfig, goals);
    
  // websocketから玉の現在位置を取得する
  var socket = { on: function(){} };
  if(!socket.connected){
    socket = io.connect('http://10.11.12.191:3001');
  } else {
    socket.connect();
  }
  socket.on('point', function(data){
    // チェックポイントの範囲に入ったら画像を変える
    for(var checkPoint in checkPoints){
      if(!checkPoint.isClear() && checkPoint.isInRange(new Point(data.x, data.y))){
        checkPoint.clear();
      }
    }
    drawEvent(ctxCheckPoint, gameConfig, checkPoints);

      
    // ゴールの範囲に入ったら画像を変える
    if(!goals[0].isClear() && goals[0].isInRange(new Point(data.x, data.y))){
      goals[0].clear();
    }
    drawEvent(ctxCheckPoint, gameConfig, goals);
//       player.setX(data.x);
//       player.setY(data.y);
//       console.log(data);
//      
//       player.getImage().addEventListener('load', function(){
//         context.drawImage(player.getImage(), player.getX(), player.getY());
//       }, false);
  });

  console.log("player (" + player.getX() + "," + player.getY() + ")");
  
  // キー入力
  new SlantFloor().mouseMove(gameConfig.getWidth(), gameConfig.getHeight());
});

/**
 * 描画イベント
 */
function drawEvent(context, config, objects){
  for(var cpi in objects){
    objects[cpi].getImage().addEventListener('load', function() {
      for(var cpj in objects){
        context.drawImage(objects[cpj].getImage(), objects[cpj].getX(), objects[cpj].getY());
      }
    }, false);
  }
}

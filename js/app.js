'use strict';


// onload時に実行
window.addEventListener("load", function() {
  console.log("load game window");
  
  var gameConfig = new GameConfig();
  
  var fields = new Array();
  // フィールドを登録
  var fields = new Array();
  fields.push(new Field(new Point(0 ,0)).getImage());

  var checkPoints = new Array();
  for(var checkPointIndex = 0; checkPointIndex < 3; checkPointIndex++){
    checkPoints.push(new CheckPoint(new Point(parseInt(Math.random() * gameConfig.getWidth()), parseInt(Math.random() * gameConfig.getHeight()))).getImage());  
  }

  var playerX = 0, playerY = 0;
  var player = new Player(new Point(playerX, playerY))  
  
  var canvas = document.getElementById(gameConfig.getWindow());
  var context = canvas.getContext('2d');
  drawEvent(context, gameConfig, fields, player.getImage());

  var checkPointCanvas = document.getElementById(gameConfig.getCheckPoint());
  var ctxCheckPoint = checkPointCanvas.getContext('2d');
  drawEvent(ctxCheckPoint, gameConfig, checkPoints, player.getImage());
  
  new SlantFloor().mouseMove(gameConfig.getWidth(), gameConfig.getHeight());
});

/**
 * 描画イベント
 */
function drawEvent(context, config, objects, player){
  for(var cpi in objects){
    objects[cpi].getImage().addEventListener('load', function() {
      for(var cpj in objects){
        context.drawImage(objects[cpj].getImage(), objects[cpj].getX(), objects[cpj].getY());
      }
    }, false);
  }

//   var socket = { on: function(){} };
//   var connect = function(){
//     if(!socket.connected){
//       socket = io.connect('http://10.11.12.191:3001');
//     } else {
//       socket.connect();
//     }
//     socket.on('point', function(data){
//       player.setX(data.x);
//       player.setY(data.y);
//       console.log(data);
      
//       player.getImage().addEventListener('load', function(){
//         context.drawImage(player.getImage(), player.getX(), player.getY());
//       }, false);
//     });
//   };
  
//  connect();

  console.log("player (" + player.getX() + "," + player.getY() + ")");
}

function mouseMove(event){
  console.log("(x, y) : ("+ event.clientX + ","+ event.clientY +")");
}


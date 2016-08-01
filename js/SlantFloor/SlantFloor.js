'use strict';

var port;  
var useTouch = false;

function SlantFloor(){};

SlantFloor.prototype.mouseMove = function(width, height){
  console.log("ONLOAD")
 	var i2cPortNumber = 0;
 	var i2cAddress = 0x40;
 	var touchDeviceAddress = 0x5a;
 	navigator.requestI2CAccess().then(function(i2cAccess) {
 		port = i2cAccess.open(0);
 		console.log( "is i2cPort.write8? : ", port.write8)
 		// init PCA9685 PWM cntlr
 		PCA9685.init(port,i2cAddress).then(function(){
 				Sleep(3);
 				setServoXY( 0, 0 );
			
 				setInterval(function(){
 					// currently do nothing...
 				},100);
 		});
		
		window.addEventListener('keypress', function(event){
			console.log(event);
			var x = Number((document.getElementById("xRange")).value);
			var y = Number((document.getElementById("yRange")).value);
			if(event.key == 'z'){
 	      x -= 1;
			}
			if(event.key == 'x'){
 	      y += 1;
			}
			if(event.key == 'c'){
 	      x += 1;
			}
			if(event.key == 's'){
 	      y -= 1;
			}
			if(x < 0){
				x = 0;
			}
			if(x > width){
				x = width;
			}
			if(y < 0){
				y = 0;
			}
			if(y > height){
				y = height;
      }
			console.log("(x, y)=(" + Number((document.getElementById("xRange")).value) + ", " + Number((document.getElementById("yRange")).value) + ")");
      setServoXY(x, y);
		}, true);
		
  },
  function(error) {
     console.log(error.message);
  }
  );
};



var xVal=0;
var yVal=0;
function setServoXY(sx,sy){
	xVal = sx;
	yVal = sy;
	setAngle( SX_CH, sx);
	Sleep( 3 );
	setAngle( SY_CH, sy);
//	setTimeout(setServo,30,0,theta);
	setXYindicator( sx , sy );
}

var sxOffsetAngle = -12;
var syOffsetAngle = -12;
var SX_CH = 1;
var SY_CH = 2;
// ゼロ点補正した角度設定を行う

function setAngle( cha , angle ){
	var offsetAngle = 0;
	if( cha == SX_CH ){
		offsetAngle = sxOffsetAngle;
	} else if ( cha == SY_CH) {
		offsetAngle = syOffsetAngle;
	}
	//setServo(port, cha , angle + offsetAngle );
	PCA9685.setServo(port,0x40,cha,angle + offsetAngle);
}

// スライダーフォームからXY値を得て直接制御
function getXYval(){
	var xV = Number((document.getElementById("xRange")).value);
	var yV = Number((document.getElementById("yRange")).value);
	console.log("slider: x:",xV,"y:",yV);
	setServoXY(xV,yV);
}

function setXYindicator( sx , sy ){
	document.getElementById("xRange").value = sx.toString(10);
	document.getElementById("yRange").value = sy.toString(10);
}


function Sleep(millisec) {
  var start = new Date();
  while(new Date() - start < millisec);
}


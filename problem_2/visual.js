// var bonsai = require('./bonsai.js');
var screenWidth = 1260;
var screenHeight = 680;
var sideLength = 50;

var background = new Rect(0, 0, screenWidth, screenHeight).fill('#000').addTo(stage);


setInterval(function(){

  // random size and y position for drop
  var rand = Math.floor((Math.random() * screenWidth) + 1);
  var randomDepth = Math.floor((Math.random() * 2.5) + 3);
  var e = new Ellipse(rand, 0, randomDepth, randomDepth * 4).fill(`rgb(${230 - 10*randomDepth}, ${200 - 20*randomDepth}, 255)`);
  drops.push(e);

  // Random speed in seconds to cross screen
  var speed = (5 - randomDepth) * 0.5 + 1;
  e.addTo(stage).animate(speed.toString() + 's', {
    y: screenHeight + 20
  });

  // If 1001 drop are on screen, delete the first and remove from the drops array
  if(drops.length > 1000){
    drops[0].remove();
    drops.shift();
  }
}, 100);

var fs = require('fs');
var textInput = fs.readFileSync('input/test1.txt','utf8');

var heuristic = require('./app.js');

var OPEN_TILE_ASCII_VALUE = 30;
var ASCII_OFFSET = 65;
var OPEN_TILE = 15;

var tempMatrix = textInput.split('\n');
var initialMatrix = [];
for (var i = 0; i < 4; i++){
  initialMatrix[i] = tempMatrix[i].split('').map(function(e){
    if(e.charCodeAt(0) - ASCII_OFFSET === OPEN_TILE_ASCII_VALUE) {
      return OPEN_TILE;
    } else {
      return e.charCodeAt(0) - ASCII_OFFSET;
    }
  });
}
console.log(heuristic(initialMatrix));

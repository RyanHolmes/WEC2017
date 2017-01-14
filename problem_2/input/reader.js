var fs = require('fs');
var textInput = fs.readFileSync('test1.txt','utf8');

var OPEN_TILE_ASCII_VALUE = 30;
var ASCII_OFFSET = 65;
var OPEN_TILE = 15;

var tempMatrix = textInput.split('\n');
var initialMatrix = [];
for (var i = 0; i < 4; i++){
  initialMatrix[i] = tempMatrix[i].split('').map(function(e){
    if(e.charCodeAt(0) - OPEN_TILE_ASCII_VALUE === OPEN_TILE) {
      return OPEN_TILE;
    } else {
      return e.charCodeAt(0) - OPEN_TILE_ASCII_VALUE;
    }
  });
}
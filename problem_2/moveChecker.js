var MATRIX_SIZE = 4;

var MapState = require("./mapState.js");

//Gets a state object and returns the possible moves
module.exports = function getMoves(currentState){
  var openTileIndex = {
    x: -1,
    y: -1
  };
  //find open index in matrix
  for(var i = 0; i < MATRIX_SIZE; i++){
    if(currentState.state[i].indexOf(15) !== -1){
      openTileIndex.x = currentState.state[i].indexOf(15); //TODO: change to constant
      openTileIndex.y = i;
    }
  }
  //Check if 4 possible moves exceed matrix bounds
  var possibleMoves = [];
  if(openTileIndex.x - 1 >= 0){
    possibleMoves.push(new MapState(currentState,[openTileIndex.x, openTileIndex.y],[openTileIndex.x - 1, openTileIndex.y]));
  }
  if(openTileIndex.y - 1 >= 0){
    possibleMoves.push(new MapState(currentState,[openTileIndex.x, openTileIndex.y],[openTileIndex.x, openTileIndex.y - 1]));
  }
  if(openTileIndex.x + 1 < MATRIX_SIZE){
    possibleMoves.push(new MapState(currentState,[openTileIndex.x, openTileIndex.y],[openTileIndex.x + 1, openTileIndex.y]));
  }
  if(openTileIndex.y + 1 < MATRIX_SIZE){
    possibleMoves.push(new MapState(currentState,[openTileIndex.x, openTileIndex.y],[openTileIndex.x, openTileIndex.y + 1]));
  }
  return possibleMoves;
}

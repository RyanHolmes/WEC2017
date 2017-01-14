var MATRIX_SIZE = 4;
var testState = {
  score: 0,
  state: [
    [ 5, 9, 7, 1 ],
    [ 0, 8, 4, 14 ],
    [ 12, 3, 11, 15 ],
    [ 13, 10, 6, 2 ]
  ]
}

//Gets a state object and returns the possible moves
modules.export = function getMoves(currentState){
  var openTileIndex = {
    x: -1,
    y: -1
  };
  //find open index in matrix
  for(var i = 0; i < MATRIX_SIZE; i++){
    if(testState.state[i].includes(15)){
      openTileIndex.x = testState.state[i].indexOf(15); //TODO: change to constant
      openTileIndex.y = i;
    }
  }
  //Check if 4 possible moves exceed matrix bounds
  var possibleMoves = [];
  if(openTileIndex.x - 1 >= 0){
    possibleMoves.push([openTileIndex.x - 1, openTileIndex.y]);
  }
  if(openTileIndex.y - 1 >= 0){
    possibleMoves.push([openTileIndex.x, openTileIndex.y - 1]);
  }
  if(openTileIndex.x + 1 < MATRIX_SIZE){
    possibleMoves.push([openTileIndex.x + 1, openTileIndex.y]);
  }
  if(openTileIndex.y + 1 > MATRIX_SIZE){
    possibleMoves.push([openTileIndex.x, openTileIndex.y + 1]);
  }
  return possibleMoves;
}

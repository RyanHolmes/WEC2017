require("./constants");
var MapState = require("./mapState.js");

/**
 * Check that a given puzzle is actually solvable!
 * this is an important consideration, as there are legitimately configurations
 * of this that **are not possible**. The algorithm is based on the work here
 * https://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html
 * and uses the proof, which states that the odd parity permutations are unsolvable
 * (Johnson 1879)
 * @param {2-d Array} puzzle
 * @return {boolean} 
 */
function checkPossible(puzzle){
	var parity = 0;
	var gridWidth = COLUMNS; // we assume that COLUMNS == ROWS
	var rowCount = 0;
	var blankRow = 0;

	var puzzle = [].concat.apply([],puzzle);

	for (var i = 0; i < puzzle.length; i++){
		if (i % gridWidth == 0)rowCount++;
		if (puzzle[i] == 0) { // the initial tile
			blankRow = rowCount;
			continue;
		}
		for (var j = i + 1; j < puzzle.length; j++){
			// increment for every later value lower than this one.
			if (puzzle[i] > puzzle[j] && puzzle[j] != 0) parity++;
		}
	}
	// NOTE: this works because the gridwidth is even
	if (blankRow % 2 == 0) { // blank on odd row; counting from bottom
		return parity % 2 == 0;
	} else { // blank on even row; counting from bottom
		return parity % 2 != 0;
	}
}

/**
 *Gets a state object and returns the possible moves
 * @param {MapState} currentState
 * @return {[MapState]} resulting possible states
 */
function getMoves(currentState){
	var openTileIndex = {
		x: -1,
		y: -1
	};
	//find open index in matrix
	for(var i = 0; i < COLUMNS; i++){
		if(currentState.state[i].indexOf(OPEN_TILE) !== -1){
			openTileIndex.x = currentState.state[i].indexOf(OPEN_TILE); //TODO: change to constant
			openTileIndex.y = i;
		}
	}
	//Check if 4 possible moves exceed matrix bounds
	var possibleMoves = [];
	if(openTileIndex.x - 1 >= 0){
		possibleMoves.push(new MapState(currentState,[openTileIndex.x, openTileIndex.y],[openTileIndex.x - 1, openTileIndex.y],"L"));
	}
	if(openTileIndex.y - 1 >= 0){
		possibleMoves.push(new MapState(currentState,[openTileIndex.x, openTileIndex.y],[openTileIndex.x, openTileIndex.y - 1],"D"));
	}
	if(openTileIndex.x + 1 < COLUMNS){
		possibleMoves.push(new MapState(currentState,[openTileIndex.x, openTileIndex.y],[openTileIndex.x + 1, openTileIndex.y],"R"));
	}
	if(openTileIndex.y + 1 < ROWS){
		possibleMoves.push(new MapState(currentState,[openTileIndex.x, openTileIndex.y],[openTileIndex.x, openTileIndex.y + 1],"U"));
	}
	return possibleMoves;
}

/**
 * display
 * display the current puzzle state
 */

module.exports = {
	getMoves: getMoves,
	possible: checkPossible
}
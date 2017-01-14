require("./constants.js");

/**
 * Heuristic
 * generate a heuristic to prefer and pre-select paths.
 * This heuristic uses ManHatten distance from the optional solution
 * This means that for each tile that is out of place, sum the distance
 * it would need to travel to be in place.
 * @param {2D Array}
 */
module.exports = function heuristic(mapState){
	// for each row...
	var score = mapState.reduce((score,row,rowIndex)=>{
		// for each column...
		return row.reduce((score,value,columnIndex)=>{
			/**
			 * calculate the distance from where the block
			 * **should** be to where the block is.
			 * a block **should be** at spot [rowIndex, coluymnIndex]
			 * and is at value
			 */
			// this is where the block should be
			var value = [Math.floor(value/COLUMNS),value%ROWS];
			// calculate manhatten distance from point to destination
			return score + Math.abs(value[0] - rowIndex) + Math.abs(value[1] - columnIndex);
		},score)
	},0);
	// because each move is a swap, and an A* cannot overestimate the distance, 
	// it **should** be the half score, which is the theoretical number of steps to be admisable
	// HOWEVER, during our testing, we found that the greedy algorithm was performing a LOT better
	// so we changed the algorithm to value the heuristic 10x more highly than the number of moves
	// performed.
	return score * 10;
}
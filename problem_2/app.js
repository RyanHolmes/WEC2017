var COLMUNS = ROWS = 4;

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
			var value = [Math.floor(value/COLMUNS),value%ROWS];
			// calculate manhatten distance from point to destination
			return score + Math.abs(value[0] - rowIndex) + Math.abs(value[1] - columnIndex);
		},score)
	},0);
	// because each move is a swap, and an A* cannot overestimate the distance, 
	// it should be the half score, which is the theoretical number of steps.
	return score/2;
}
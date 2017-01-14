var heuristic = require('./heuristic.js');

function MapState(previous,positionBlank, positionMove,move){
	if(!positionBlank){
		this.score = 0;
		this.state = previous;
		this.moves = [];
	} else {
		this.moves = previous.moves.slice();
		this.moves.push(previous.hash);
		this.score = previous.score + 1;
		// copy the state by value.
		this.state = previous.state.map((row)=>{
			return row.slice();
		});
		this.state[positionBlank[1]][positionBlank[0]] = this.state[positionMove[1]][positionMove[0]];
		this.state[positionMove[1]][positionMove[0]] = 15;
	}
	this.heuristic = heuristic(this.state);
	this.priority = this.heuristic + this.score;
	this.hash = this.state.reduce((hash,row)=>{
		return row.reduce((hash,input)=>{
			return hash + String.fromCharCode(65+input);
		},hash)
	},"");
}

MapState.prototype = {
	/**
	 * check if the solution is correct up to X digit
	 * NOTE: this is no longer used, was used in a previous heuristic
	 * left here for posterity.
	 * @return {int} - the index (of a flattened array) that this is correct up to
	 */
	correctUpTo: function correctUpTo(){
		var correctCount = 0;
		for (var i = 0; i < this.state.length; i++) {
			for(var j = 0; j < this.state[i].length; j++){
				if(this.state[i][j] == (i*this.state.length)+j){
					correctCount++;
				} else {
					return correctCount;
				}
			}
		}
	}
}

/**
 * Private members
 */


module.exports = MapState;
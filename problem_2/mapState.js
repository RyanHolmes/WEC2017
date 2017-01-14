var heuristic = require('./app.js');

function MapState(previousState,positionBlank, positionMove){
	if(!positionBlank){
		this.score = 0;
		this.state = previousState;
		this.moves = [];
	} else {
		this.moves = previousState.moves.slice();
		this.score = previousState.score + 1;
		// copy the state by value.
		this.state = previousState.state.map((row)=>{
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

module.exports = MapState;
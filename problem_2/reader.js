require("./constants.js");

var fs = require('fs');

var MapState = require('./mapState.js');
var puzzle = require('./puzzle.js');

var TEST_CASE = "test7";

// read the input from a file
var textInput = fs.readFileSync('input/'+TEST_CASE+'.txt','utf8');
var tempMatrix = textInput.split('\n');
var initialMatrix = [];
// read all values and parse them from the human readable format
for (var i = 0; i < COLUMNS; i++){
	initialMatrix[i] = tempMatrix[i].split('').map(function(e){
		if(e.charCodeAt(0) - ASCII_OFFSET === OPEN_TILE_ASCII_VALUE) {
			return OPEN_TILE;
		} else {
			return e.charCodeAt(0) - ASCII_OFFSET;
		}
	});
}

if(puzzle.possible(initialMatrix)){
	console.log("not possible");
	process.exit()
}

// perform an A* search to find the best path to the solution
var FastPriorityQueue = require("fastpriorityqueue");

function foundSolution(solution,counter){
	console.log("Hurray! Solution found")
	console.log(solution);
	console.log("checked "+counter+" states");
	console.log("the valid moves are:"+solution.moves.join());
}

// start a new piority Queue (in this case, it's just a unique and sorted array)
priorityQueue = [new MapState(initialMatrix)];
// get all previous states
var history = [priorityQueue[0].hash];
// how many instances we've generated
var counter = 0;
// find the solution.
// NOTE: if not solution exists, this will continue to search forever.
while(priorityQueue.length) {
	// increment the number of states checked
	counter++;
	var current = priorityQueue.shift();
	console.log(current.state);
	if(current.heuristic === 0){
		return foundSolution(current,counter);
	}
	var moves = puzzle.getMoves(current);
	for (var i = 0; i < moves.length; i++) {
		var exists = false;
		for (var j = 0; j < history.length; j++) {
			if(history[j] === moves[i].hash){
				exists = true;
				break;
			}
		}
		if(!exists){
			priorityQueue.push(moves[i]);
			history.push(moves[i].hash);
			priorityQueue.sort((a,b)=>{
				return a.priority - b.priority
			});
		}
	};
}

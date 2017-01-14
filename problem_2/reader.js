var fs = require('fs');
var textInput = fs.readFileSync('input/test1.txt','utf8');

var MapState = require('./mapState.js');
var moveChecker = require('./moveChecker.js');

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

// perform an A* search to find the best path to the solution
var FastPriorityQueue = require("fastpriorityqueue");

function foundSolution(solution){
	console.log("Hurray! Solution found")
	console.log(solution);
}

priorityQueue = [new MapState(initialMatrix)];
var history = [priorityQueue[0].hash];
var counter = 0;
while(priorityQueue.length && counter < 1000) {
	counter++;
	var current = priorityQueue.shift();
	if(current.heuristic === 0){
		return foundSolution(current);
	}
	var moves = moveChecker(current);
	for (var i = 0; i < moves.length; i++) {
		var exists = false;
		for (var j = 0; j < history.length; j++) {
			if(history[j].hash === moves[i].hash){
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

history.sort((a,b)=>{
	return a - b;
});
console.log(history);

var previous = history.shift();
for (var i = 0; i < history.length; i++) {
	if(history[i] == previous){
		console.log("found duplicate");
	}
	previous = history[i];
}

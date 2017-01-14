var fs = require('fs');
var textInput = fs.readFileSync('input/test1.txt','utf8');

var heuristic = require('./app.js');

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

function getPositionPriority(position){
	return heuristic(position.state) + position.score;
}

function foundSolution(solution){
	console.log("Hurray! Solution found")
	console.log(solution);
}

var priorityQueue = new FastPriorityQueue((a,b)=>{
	return getPositionPriority(a) - getPositionPriority(b);
});

priorityQueue.add(MapState(initialMatrix));
while(!priorityQueue.isEmpty()) {
	var current = priorityQueue.poll();
	var heuristic = heuristic(current.state);
	if(heuristic == 0){
		return foundSolution(current);
	}
	getStates().forEach(function(childState){
		priorityQueue.add(childState);
	});
}

console.log(heuristic(initialMatrix));

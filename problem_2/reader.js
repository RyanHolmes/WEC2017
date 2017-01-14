var fs = require('fs');
var textInput = fs.readFileSync('input/test2.txt','utf8');

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

if(checkPossible(initialMatrix)){
	console.log("not possible");
	process.exit()
} else {
	console.log("possible");
}

function checkPossible(puzzle){
    var parity = 0;
    var gridWidth = 4;
    var row = 0; // the current row we are on
    var blankRow = 0; // the row with the blank tile

    var puzzle = [].concat.apply([],puzzle);

    for (var i = 0; i < puzzle.length; i++){
        if (i % gridWidth == 0) { // advance to next row
            row++;
        }
        if (puzzle[i] == 0) { // the blank tile
            blankRow = row; // save the row on which encountered
            continue;
        }
        for (var j = i + 1; j < puzzle.length; j++)
        {
            if (puzzle[i] > puzzle[j] && puzzle[j] != 0)
            {
                parity++;
            }
        }
    }

    if (blankRow % 2 == 0) { // blank on odd row; counting from bottom
        return parity % 2 == 0;
    } else { // blank on even row; counting from bottom
        return parity % 2 != 0;
    }
}


// perform an A* search to find the best path to the solution
var FastPriorityQueue = require("fastpriorityqueue");

function foundSolution(solution,counter){
	//console.log("Hurray! Solution found")
	//console.log(solution);
	//console.log("checked "+counter);
}

priorityQueue = [new MapState(initialMatrix)];
var history = [priorityQueue[0].hash];
var counter = 0;
while(priorityQueue.length) {
	counter++;
	var current = priorityQueue.shift();
	console.log(current.hash+',');
	if(current.heuristic === 0){
		return foundSolution(current,counter);
	}
	var moves = moveChecker(current);
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
				return a.heuristic - b.heuristic
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

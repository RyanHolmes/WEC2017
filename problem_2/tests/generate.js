var fs = require('fs');

function generate(number){
	var sorted = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	var random = [];
	// use iterative Durstenfeld to generate the test sets
	while(number--){
		// use the Durstenfeld shuffle algorithm
		for (var i = 0; i < sorted.length; i++) {
			var j = Math.floor(Math.random() * (i + 1));
			// do a swap
			var tmp = sorted[i];
			sorted[i] = sorted[j];
			sorted[j] = tmp;
		}
		random.push(sorted.slice());
	}
	// write all sets to a file
	for (var i = 0; i < random.length; i++) {
		fs.writeFile("input/test"+i+".txt", convertToReadable(random[i]), function(err) {
			if(err) {
				return console.log(err);
			}
		});
	}
}

/**
 * convert the randomly generated array into
 * @param {2D Array} input
 * @return {String} - human-readable
 */
function convertToReadable(input){
	return input.map((number,index)=>{
		var outputChar = '';
		// new line at every now
		if(index && index%4 == 0){
			outputChar='\n';
		}
		// convert from 0-15 to A-O, and convery 16 -> _
		outputChar += (number !== 16)?String.fromCharCode(64+number):"_";
		return outputChar;
	}).join("");
}

// generate test cases (10 for now)
generate(10);
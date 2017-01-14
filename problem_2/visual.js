var screenWidth = 1260;
var screenHeight = 680;
var side = 100;
var background = new Rect(0, 0, screenWidth, screenHeight).fill('#000').addTo(stage);

var test =
['FAJBGKDNEPIOHLMC',
'FAJBGKDNEIPOHLMC',
'FAJBGKDNEIOPHLMC',
'FAJBGKDNEIOCHLMP',
'FAJBGKDPEIONHLMC',
'FAJBGKDNEIOCHLPM',
'FAJBGKPDEIONHLMC']

var counter = 0

var initialMatrix = buildMatrix(test[0]);
var initialBlocks = drawGrid(initialMatrix + 500);

for(var p = 0; p < initialBlocks.length; p++){
  initialBlocks[p].addTo(stage);
}

setInterval(function(){
  if(counter < test.length){
    var blocks = [];
    var matrix = buildMatrix(test[counter]);
    var blocks = drawGrid(matrix);
    var c = new Text(counter.toString()).addTo(stage).attr({textFillColor: 'red', fontSize: '20',textStrokeWidth: 3, x: 500, y: 200});
    //add to screen
    for(var p = 0; p < blocks.length; p++){
      blocks[p].addTo(stage);
    }
    // delete after 100 for efficiency
    if(blocks.length > 100){
      blocks[0].remove();
      blocks.shift();
    }
    counter++;
  }
}, 100);

function buildMatrix(str){
  let m = []
  let tempMatrix = str.match(/(.{1,4})/g);

  for (var i = 0; i < 4; i++){
    m[i] = tempMatrix[i].split('').map(function(e){
      if(e.charCodeAt(0) - 65 === 16) {
        return 15;
      } else {
        return e.charCodeAt(0) - 65;
      }
    });
  }
  return m;
}

function drawGrid(matrix, options=0){
  var b = []
  for(var j = 0; j < 4; j++){
    for(var k = 0; k < 4; k++){
      if(matrix[j][k] === 15) {
        var r = new Rect(j * side + options, k * side, side, side)
        .fill(`red`);
        b.push(r);
      } else {
        var r = new Rect(j * side + options, k * side, side, side)
        .fill(`rgb(${ matrix[j][k] * 8 }, ${ matrix[j][k] * 8} , ${ matrix[j][k] * 8 })`);
        b.push(r);
      }
    }
  }
  return b;
}

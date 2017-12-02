var fs = require('fs'),
    readline = require('readline');
var santasMessage = '';
var mapMessage = [];
var debugLine = false;
var debugText = false;

var file = '';

if(debugText){
	file = 'test.txt';
}else{
	file = 'inputText.txt';
}

console.log('This is the file used : ' + file);

function cutString(line){
	var lineArray = line.split('');
	var tempLength = lineArray.length;
	var halfLength = tempLength / 2;
	var total = 0;
	console.log(total +':'+tempLength);
	for (var i = 0; i < tempLength - 1; i++) {
		var numbersPosition = -1;
		if ((i + halfLength) <= tempLength) {
			numbersPosition = i + halfLength;
		}else {
			numbersPosition = i - halfLength;
		}	
		if (lineArray[i] == lineArray[numbersPosition]) {
			total += parseInt(lineArray[numbersPosition]);
		}
	}
	console.log('This is the Value : ' + total );
};

function sortAndDisplayMessage() {
	console.log('Done :D');
}

var rd = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});


rd.on('line', function(line) {
  	cutString(line);
});

//after the lines are read.........
rd.on('close', function(){
	sortAndDisplayMessage();
});

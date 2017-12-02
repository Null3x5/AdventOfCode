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
	var tempLength = lineArray.length - 2;
	var total = lineArray[0] == lineArray[tempLength + 1] ? parseInt(lineArray[0]) : 0;
	console.log(total +':'+tempLength);
	for (var i = 0; i < tempLength ; i++) {
		if (lineArray[i] == lineArray[i+1]) {
			total += parseInt(lineArray[i]);
			//console.log(lineArray[i]);
			//console.log(total);
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

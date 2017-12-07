var fs = require('fs'),
    readline = require('readline');
var santasCount = 0;
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
	var trigger = true;
	var numberList = line.split(' ');

	numberList.forEach( function(element1, index1) {
		numberList.forEach( function(element, index) {
			if(index1 != index
				&& element1.split("").sort().join("")
					== element.split("").sort().join("")){
				//console.log(element1.split("").sort().join(""));
				//console.log(element1.split("").sort().join(""));
				trigger = false;
				return;
			}
		});
	});

	trigger && santasCount++;
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
	console.log('here is your count : ' + santasCount);
	sortAndDisplayMessage();
});

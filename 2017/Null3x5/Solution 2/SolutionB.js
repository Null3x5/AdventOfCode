var fs = require('fs'),
    readline = require('readline');
var santasMessage = 0;
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
	var numberList = line.split('\t');
	var numList = [];
	numberList.forEach( function(element, index) {
		numList.push(parseInt(element));
	});
	santasMessage += findBigAndSmallDifference(numList.sort());
};

function findBigAndSmallDifference(numList) {
	var foundNumber = 0;
	console.log(numList);
	numList.forEach( function(elementA, indexA) {
		numList.forEach( function(elementB, indexB) {
			if (((elementB % elementA) == 0) 
				&& indexA != indexB) { // < symbol gives me a different value.....
				console.log('this is what divides : ' + elementB + '/' + elementA);
				foundNumber = elementB / elementA;
			}
		});
	});
	return foundNumber;
}

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
	console.log('here is your count : ' + santasMessage);
	sortAndDisplayMessage();
});

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
	santasMessage += findBigAndSmallDifference(numberList);
};

function findBigAndSmallDifference(numList) {
	var largeNum = parseInt(numList[0]);
	var smallNum = parseInt(numList[0]);
	true && console.log(numList);
	numList.forEach( function(element, index) {
		if (largeNum < parseInt(element)) { largeNum = parseInt(element)}
		if (smallNum > parseInt(element)) { smallNum = parseInt(element)}
	});

	true && console.log('these are the ones I found : ' + largeNum + ' - ' + smallNum + ' = ' + (parseInt(largeNum) - parseInt(smallNum)));
	return parseInt(largeNum) - parseInt(smallNum);
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

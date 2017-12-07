var fs = require('fs'),
    readline = require('readline');
var santasCount = 0;
var mapList = [];
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
	mapList.push(parseInt(line));
};

function sortAndDisplayMessage() {
	console.log('here is your count : ' + (santasCount - 1));
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
	goToPart();//startThis wow for some reason I need to remove one lol
	sortAndDisplayMessage();
});

function goToPart () {
	var mapsLength = mapList.length;
	var nextNode = 0;
	var currentNode = 0;
	while(nextNode <= mapsLength) {
		santasCount++;
		nextNode = currentNode + mapList[currentNode];
		mapList[currentNode]++;

		currentNode = nextNode;
	}

};

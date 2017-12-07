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
	if(line.length > 0){ //  I think the newLine Sublime throws out at end of file is messing this up :P
		mapList.push(parseInt(line));
	}
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
	console.log('here is your count : ' + (santasCount));
	sortAndDisplayMessage();
});

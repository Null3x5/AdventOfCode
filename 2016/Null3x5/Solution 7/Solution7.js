var fs = require('fs'),
    readline = require('readline');
var santasCount = 0;
var debugLines = false;
var debugText = false;
var regexForInBrackets = new RegExp(/\[\w*\]/g);
var regexForOutsideBrackets = new RegExp(/^\w*\[|\]\w*\[*/g);
var file = '';

if(debugText){
	file = 'test.txt';
}else{
	file = 'inputText.txt';
}

console.log('This is the file used : ' + file);

function cutString(line){
	debugLines && console.log(line);
	var theBadOnes = line.match(regexForInBrackets);
	var theGoodOnes = line.match(regexForOutsideBrackets);

	if (debugLines) {
		console.log('the badOnes');
		console.log(theBadOnes);
		console.log('the goodOnes');
		console.log(theGoodOnes);	
	}
	santasCount += countingPart(theBadOnes, theGoodOnes);
};

function countingPart (badList, goodList, number) {
	var theBad = doesABBAExist(badList);
	if (theBad == 0) {
		var theGood = doesABBAExist(goodList);
		if (theGood == 1) {
			return 1;
		}
	} 
	return 0;
};

function doesABBAExist (list) {
	var tempNumberFound = 0;
	list.forEach( function(element, index1) {
		var cleanText = element.replace('[', '').replace(']','');
		var textArray = cleanText.split('');
		var textArrayLength = textArray.length;
		debugLines && console.log(cleanText);
		textArray.forEach( function(one, index) {
			if ( (index + 3 )<= textArrayLength
					&& one != textArray[index + 1]
					&& one == textArray[index + 3]
					&& textArray[index + 1] == textArray[index + 2]) {
				debugLines && console.log('Found it :                   ' + cleanText.slice(index, index + 4));
				tempNumberFound = 1;;
			}
		});
	});
	return tempNumberFound;
};

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
	console.log('This is the value of santasCount : ' + santasCount);
	console.log('Done.');
});

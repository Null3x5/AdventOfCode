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

function countingPart (badList, goodList) {
	var theBad = doesABAExist(badList);
	if (theBad.length > 0) {
		var theGood = doesABAExist(goodList);
		if (theGood.length > 0) {
			debugLines && console.log('looks like we might have matches: ' + theBad + ':' + theGood);
			return lookForAbACounter(theBad,theGood);
		}
	} 
	return 0;
};
function lookForAbACounter(badList,goodList){
	var tempHoldThis = 0;
	badList.forEach( function(elementB, indexB) {
		var tempBadCharList = elementB.split('');
		goodList.forEach( function(elementG, indexG) {
			var tempGoodCharList = elementG.split('');
			if (tempBadCharList[0] == tempGoodCharList[1]
				&& tempBadCharList[1] == tempGoodCharList[0]) {
				true && console.log('found ABA Match BAD: ' + elementB + ', GOOD: ' + elementG);
				tempHoldThis = 1;
			}
		});
	});
	return tempHoldThis;
};

function doesABAExist (list) {
	var tempListFound = [];
	list.forEach( function(element, index1) {
		var cleanText = element.replace('[', '').replace(']','');
		var textArray = cleanText.split('');
		var textArrayLength = textArray.length;
		debugLines && console.log(cleanText);
		textArray.forEach( function(one, index) {
			if ( (index + 2 )<= textArrayLength
					&& one != textArray[index + 1]
					&& one == textArray[index + 2]) {
				tempListFound.push(cleanText.slice(index,index+3));;
			}
		});
	});
	debugLines && console.log(tempListFound);
	return tempListFound;
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

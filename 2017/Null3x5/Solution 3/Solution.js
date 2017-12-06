var numberIWant = 289326;//				number to search for		
var map = {};					

// 0 > 1 > 2  > 3  > 4  > 5   > 6		onionLevels
// 1 > 2 > 4  > 6  > 8  > 10  > 12		onionSingleSide
// 										* used to calculate the perimeter
// 1 > 8 > 16 > 24 > 32 > 40  > 48		onionPerimeterValue
// 										* add it to the last endValue
// 1 > 9 > 25 > 49 > 81 > 121 > 169 	onionEndValue
// 1 > 2 > 10 > 26 > 50 > 82  > 122		onionLevelStart
// 

function recursiveIterator(onionLevel, sideLevel, lastValue, myNumber){
	var tempOnionLevel = onionLevel + 1;
	var tempSideLevel = sideLevel + 2; // the level increases by two
	var onionPerimeterVal = tempSideLevel * 4;
	var newEndValue = lastValue + onionPerimeterVal;
	if (myNumber < lastValue) {
		console.log('this is your number = ' + myNumber);
		console.log('looks like we are done.');
	}else{
		var tempNumber = myNumber - lastValue - onionLevel;
		var tempModed = tempNumber % tempSideLevel;
		console.log('onion level : ' + tempOnionLevel);
		console.log('sideLevel : ' + tempSideLevel);
		console.log('endValue : ' + newEndValue);
		console.log('this is the perimeter = ' + onionPerimeterVal);
		console.log('look at this number its what gets modded = ' + tempNumber);
		console.log('this is moded = ' + tempModed);
		console.log('this is the distance = ' + (onionLevel + tempModed));
 		console.log('------------------------------------------------');
		recursiveIterator(tempOnionLevel, tempSideLevel, newEndValue, myNumber);
	}
}
 
var startLevel = 0;
var sideCount = 0;
var perimeterValue = 1;
recursiveIterator(startLevel, sideCount , perimeterValue, numberIWant);

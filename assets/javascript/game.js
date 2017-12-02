
// variables
var words = ["hello", "you"];
var blanks = ["-----", "---"];
var gameStatus = 0;
var currentWord = words[0];
var currentBlank = blanks[0];
var wordArray = currentWord.split("");
var blankArray = currentBlank.split("");
var displayArray = blankArray;
var currentScore = 0;
var lives = 5;
var letters = [];

// functions

function GetIndexes (array, value) {
	indexes = [];
	var arr = array;
	for (i = 0; i < array.length; i ++) {
		var index = array.indexOf(value);
		arr[index] = "x1z";
			if(index !== -1) {indexes.push(index);};
	};
	return(indexes);
} 


// when key is pressed, game start.
// computer chose a word and display blanks (dashes) same length as the word 
document.onkeyup = function(event) {
 		
	console.log(gameStatus)
	if (gameStatus === 0) {
		document.getElementById("display").innerHTML = `<p>${currentBlank}</p>`;
		document.getElementById("score").innerHTML = `<p>${currentScore}</p>`;
		document.getElementById("guessRemain").innerHTML = `<p>${lives}</p>`;
		gameStatus = 1;
		lives = 5;
		letters = [];
		console.log(gameStatus);
	} else {
		var playerChoice = event.key;
		var indexOfPlayerChoice = wordArray.indexOf(playerChoice);
			if (indexOfPlayerChoice > -1) {	
				displayArray[indexOfPlayerChoice] = playerChoice;
				var currentDisplay = displayArray.join("");
				letters.push(playerChoice)
				document.getElementById("display").innerHTML = `<p>${currentDisplay}</p>`;
				document.getElementById("progress").innerHTML = `<p>${letters}</p>`;
				var indexOfDash = currentDisplay.split("").indexOf("-")
					if (indexOfDash == -1) {
						currentScore = currentScore + 1;
						document.getElementById("score").innerHTML = `<p>${currentScore}</p>`
						gameStatus = 0;
					}
 			} else {
 				if (lives > 0) {
 				lives = lives - 1;
 				console.log(lives);
 				document.getElementById("guessRemain").innerHTML = `<p>${lives}</p>`;
 				} else { 
 					gameStatus = 0;}
 			}
 		}
	}




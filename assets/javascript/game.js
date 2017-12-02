


var words = ["hello", "you"];
var blanks = ["-----", "---"];
var gameStatus = 0;
var currentWord = words[1];
var currentBlank = blanks[1];
var wordString = currentWord.split("");
var blankString = currentBlank.split("");
var displayString = blankString;
var currentScore = 0;
var lives = 20;
var letters = [];



// when key is pressed, game start.
// computer chose a word and display blanks (dashes) same length as the word 
document.onkeyup = function(event) {
	if (gameStatus === 0) {
		document.getElementById("display").innerHTML = `<h2>${currentBlank}</h2>`;
		gameStatus = gameStatus + 1;
		console.log(gameStatus);
	} else {
		var playerChoice = event.key;
		var indexOfPlayerChoice = wordString.indexOf(playerChoice);
	
			if (indexOfPlayerChoice > -1) {	
				displayString[indexOfPlayerChoice] = playerChoice;
				var currentDisplay = displayString.join("");
				document.getElementById("display").innerHTML = `<h2>${currentDisplay}</h2>`;			
 			}
 			if (indexOfPlayerChoice === -1) {
 				console.log("wrong choice");
 			}
	}
}
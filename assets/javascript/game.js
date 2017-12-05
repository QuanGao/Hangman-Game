
// define variables
var words = ["bruce wayne", "joker", "barry allen", "clark kent", "diana prince", "tony stark", "thor", "frank castle",
"deadpool", "matthew murdock", "logan","peter parker"];
var icons = ["batman.svg","joker.svg","flash.svg","superman.svg","wonderwoman.svg","ironman.svg","thor.svg",
"punisher.svg","deadpool.svg","daredevil.svg","wolverine.svg","spidy.svg"];
var gameStatus = 0;
var currentScore = 0;
var letters = [];
var lives = 10;
var currentWord = "";

// This function replace letters in a string (or an array) into an array of dashes while keeping the space between 2 or more words
var dashed = function(phrase) {
		var dash = [];
		for(i = 0; i < phrase.length; i++){
			if(phrase[i] === " ") {
				dash.push(" ");
			} else {
				dash.push("-");
			};
		};
		return(dash);
	};	

// Create object prototype that can turn any selected word into object.
function word(name, icon) {
	this.name = name;
	this.nameArr = name.split("");
	this.length = name.length;
	this.dashArr = dashed(name);
	this.dashes = (this.dashArr).join("");
	this.icon = `assets/images/${icon}`
};

document.onkeyup = function(event) {
	var playerChoice = event.key;
	// set all paramters at the begining of the game (gameStatus === 0)	and push the values to the html file.
	if (gameStatus === 0) {
		select = Math.floor(Math.random()*words.length);
		currentWord = new word(words[select],icons[select]);
		console.log(currentWord);
		document.getElementById("display").innerHTML = `<p>${currentWord.dashes}</p>`;
		document.getElementById("score").innerHTML = `<p>${currentScore}</p>`;
		lives = 10;
		document.getElementById("guessRemain").innerHTML = `<p>${lives}</p>`;
		letters = [];	
		document.getElementById("progress").innerHTML = `<p>${letters}</p>`;
		gameStatus = 1;	
	// After game start (gameStatus === 1), only react when the letter of input (event.key) hasn't been pressed before  	
	} else if(gameStatus === 1 && letters.indexOf(playerChoice) === -1) {
		letters.push(playerChoice);
		document.getElementById("progress").innerHTML = `<p>${letters}</p>`;
	// if there are guesses remain and guess corrently, replace dash with letter. if guess incorrectly, reduce guesses remain by 1
		if(lives > 0) {
			var count = 0;
			for (i = 0; i < currentWord.length; i ++) {
				if((currentWord.nameArr)[i] === playerChoice) {
					currentWord.dashArr[i] = playerChoice;
					count++;
				};
			document.getElementById("display").innerHTML = `<p>${currentWord.dashArr.join("")}</p>`
			};
			if(count === 0){
				lives = lives - 1;
				document.getElementById("guessRemain").innerHTML = `<p>${lives}</p>`;
		// if all dashes have been replaced, you win and add one to "win"
			}  else if((currentWord.dashArr).indexOf("-") === -1){						
					alert("YOU WIN YOU GENIUS!");
					currentScore = currentScore + 1;
					document.getElementById("score").innerHTML = `<p>${currentScore}</p>`;
					document.getElementById("icons").innerHTML = `<img src = ${currentWord.icon}>`;
					gameStatus = 0;	
			};
	// if you use all guesses and didn't finish the word, you lose.
		} else {
			alert("Better luck next time!");
			document.getElementById("display").innerHTML = `<p>${currentWord.name}</p>`;
			document.getElementById("icons").innerHTML = `<img src = ${currentWord.icon}>`;
			gameStatus = 0;
		};

	};
};










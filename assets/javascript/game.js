// variables
var words = ["batman","joker","flash","superman","catwoman","ironman","loki","punisher","deadpool","daredevil",
	"wolverine","spiderman"];
var gameStatus = 0;
var currentScore = 0;
var lives = 5;
var letters = [];
var currentWord = "";
var blank = [];
var currentBlank = ""; 

document.onkeyup = function(event) {
	var playerChoice = event.key;		
	if (gameStatus === 0) {
		select = Math.floor(Math.random()*words.length);
		currentWord = words[select];
		console.log(currentWord);
		blank = [];
		currentBlank = ""; 
		for(i = 0; i < currentWord.length; i++){
			blank.push("-");
		};	
		currentBlank = blank.join("");
		console.log(currentBlank);
		document.getElementById("display").innerHTML = `<p>${currentBlank}</p>`;
		document.getElementById("score").innerHTML = `<p>${currentScore}</p>`;
		lives = 5;
		document.getElementById("guessRemain").innerHTML = `<p>${lives}</p>`;
		letters = [];	
		document.getElementById("progress").innerHTML = `<p>${letters}</p>`;
		gameStatus = 1;	
	} else if(gameStatus === 1 && letters.indexOf(playerChoice) === -1) {
		letters.push(playerChoice);
		document.getElementById("progress").innerHTML = `<p>${letters}</p>`;
		if(lives > 0){
			var wordArr = currentWord.split("");
			var blankArr = currentBlank.split("");
			var count = 0;
			for (i = 0; i < blankArr.length; i ++) {
				if(wordArr[i] === playerChoice) {
					blankArr[i] = playerChoice;
					count++;
					currentBlank = blankArr.join("");
					document.getElementById("display").innerHTML = `<p>${currentBlank}</p>`
				};
			};
			if(count === 0){
				lives = lives - 1;
				document.getElementById("guessRemain").innerHTML = `<p>${lives}</p>`;
			}  else if(currentBlank.indexOf("-") === -1){					
					alert("YOU WIN YOU GENIUS!");
					currentScore = currentScore + 1;
					document.getElementById("score").innerHTML = `<p>${currentScore}</p>`;
					gameStatus = 0;	
			};
		} else {
			alert("you lose!");
			gameStatus = 0;
		};
	};
}	
	










var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    
    if (userGuess === computerChoice){
        win = wins++;
        resetGame();
        } 
    // else {
    //     guessesLeft = guessesLeft--; //starts at 10 but will not change
    //     }
    else {
        guessesLeft--; //starts at 9 but changes
    }

    if (guessesLeft < 1) {
        losses++;
        resetGame();
    }


        guessesSoFarText.textContent = userGuess;
        winsText.textContent = wins;
        lossesText.textContent = losses;
        guessesLeftText.textContent = guessesLeft;
    
}

//where do I put this??

function resetGame() {
    guessesLeft = 10;
    guessesSoFar = [];
}

var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

function resetRound() {
    guessesLeft = 10;
    guessesSoFar = [];
}

function resetGame() {
    wins = 0;
    losses = 0;
    guessesLeft = 10;
    guessesSoFar = [];
}

document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    
    if (userGuess === computerChoice){
        wins++;
        resetRound();
        } 

    else {
        guessesLeft--; 
        guessesSoFar.push(userGuess);
        }

    if (guessesLeft < 0) {
        losses++;
        resetRound();
    }

    if (losses > 5) {
        resetGame();
    }

    guessesSoFarText.textContent = guessesSoFar.toString();
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    
}
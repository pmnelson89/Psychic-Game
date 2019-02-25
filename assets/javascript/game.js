var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerChoices[i]){
       
        if (userGuess === computerChoice) {
            wins++;
        } else {
            losses++;
            guessesLeft--;
        }

        userChoiceText.textContent = "Your guesses so far: " + userGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    }
};

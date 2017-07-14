////Sets preset arrays
mashArray = ["New York", "Boston", "Tokyo", "Final Destination", "Germany"]
firstQuestion = ["Ness", "Snake", "Kirby", "Pit", "Bowser", "Toon Link"]
secondQuestion = ["9", "5","10", "4","3"]

//Activates prompt-sync
var prompt = require('prompt-sync')(); 

//Defines MASH as the whole game
function MASH(){

function supersmash(){
    var challenger = prompt("Who will you choose to fight?")
    var strikes = prompt("How many times will you strike?")
    firstQuestion.push(challenger)
    secondQuestion.push(strikes)
} 
// Begins the game
supersmash();

//Gets a random number 
function rand(num) {
    var randomDec= Math.random() * num;
    var randInt = Math.floor(randomDec);
    return randInt
}

//Generates a random index to be used
var randomLocation = mashArray[rand(5)]
var randomFighter = firstQuestion[rand(6)]
var randomStrikes = secondQuestion[rand(5)]


var end = prompt("You fought " + randomFighter + " in " + randomLocation + " and hit them " + randomStrikes + " times. Too bad. Mewtwo wins! Would you like to play again?")
if (end == "yes"){
    MASH();
}
if (end == "no"){
    console.log("Thanks for playing!")
}
}

MASH();

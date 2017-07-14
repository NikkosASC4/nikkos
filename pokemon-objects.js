function pokemonObject(name, type, hp, def, atk, legend){
    this.name = name
    this.type = type
    this.hp = hp
    this.def = def
    this.atk = atk
    this.legend = legend
    
}

var charizard = new pokemonObject("Charizard", "Flying, Fire", 78, 78,84, false)
var pikachu = new pokemonObject("Pikachu", "Electric",35, 40, 55, false)
var machamp = new pokemonObject("Machamp", "Fighting", 90, 80, 130, false)
var mewtwo = new pokemonObject("Mewtwo", "Psychic", 106, 90, 110, true)
var bulbasaur = new pokemonObject("Bulbasaur", "Grass, Poison", 45, 49, 49, false)
var raikou = new pokemonObject("Raikou", "Electric", 90, 75, 85, true)

var pRoster= [
    charizard,
    pikachu,
    machamp,
    mewtwo,
    bulbasaur,
    raikou
];

function printRoster(){
    console.log(pRoster[0])
    console.log(pRoster[1])
    console.log(pRoster[2])
    console.log(pRoster[3])
    console.log(pRoster[4])
    console.log(pRoster[5])
}

printRoster();

function pokemonAttacked(){
    for(var i=0; i<6; i++){
        pRoster[i].hp -= 10;
}
}

console.log("Your Pokemon have been attacked! -10HP!")
pokemonAttacked();

printRoster();

//Activates prompt sync
var prompt = require('prompt-sync')(); 

var userAttack = prompt("You attack your own pokemon. How much damage do you deal to a random Pokemon in your team?")

//Creates a random number function
function rand(num) {
    var randomDec= Math.random() * num;
    var randInt = Math.floor(randomDec);
    return randInt
}


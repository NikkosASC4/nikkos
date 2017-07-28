var HP = 100;
var gold = 0;
var slain = 0;

function updateStats(){
    $('#stats').text("HP: " + HP + " Gold: " + gold + " Ogres Slain: " + slain)
}
function attack(){
    if (Math.random()*100 > gold){
        gold += 10; 
        slain++;
        $('#ogres').prepend('<p style="color:green">You won! +10 gold</p>')
    }
    else{
        gold--;
        HP--;
        $('#ogres').prepend('<p style="color:red">You lost! -1gold </p>')
    }
    updateStats();
}

    
    
    
    
    

function setup(){
// title
$('body').append('<h1>Welcome to Ogre Fighter v.1.0</h1>')
// stats
$('body').append('<div><h3>STATS</h3><p id="stats"></p></div>')  
// the button
$('body').append('<button onclick="attack()">Attack the Ogre!</button>')
// ogres
$('body').append('<div id="ogres"></div>')

       
}

$(document).ready(setup);

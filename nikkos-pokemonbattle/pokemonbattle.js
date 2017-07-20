function setup(){
    createCanvas(1360, 720);
    background(51);
}
var playerhealth = 74
var enemyhealth = 90
var playername = prompt("Please enter your name")

function draw(){
    textSize(22)
    textStyle(BOLD)
    strokeWeight(3);
    //Stats
    rect(100, 510 , 800,200);
    //Name
    rect(100, 465, 200, 40);
    //Player Pokemon
    ellipse(250, 300, 300);
    //Player stats
    rect(920, 510, 260, 200);
    //Enemy Pokemon
    ellipse(950, 200, 250);
    //Enemy name
    rect(1100, 70, 180, 40);
    //Enemy stats
    rect(1100, 120, 230, 200);
    //Prints player name
    text(playername,110,495)
    text("Cyrus", 1110, 100);
    //Player Stats
    text("LVL: 16", 930, 540);
    text("HP: " + playerhealth + "/74", 930, 590);
    text("TYPE: ELECTRIC", 930, 640)
    //Enemy Stats
    text("LVL: 9", 1110, 150);
    text("HP: " + enemyhealth + "/90", 1110, 200);
    text("TYPE: FIRE", 1110, 250)
    //Player attack buttons
    rect(150, 550, 200, 100);
    rect(400, 550, 200, 100);
    rect(650, 550, 200, 100);
}

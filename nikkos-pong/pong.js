function setup(){
    createCanvas(500,500);
    background(151);
}

var xPos = 1;
var yPos = 1;
var x = 20
var y = 20

function draw(){
    background(151)
    rect(mouseX, 450, 150, 30);

    ellipse(xPos,yPos,50);
    xPos += x;
    yPos += y;
}
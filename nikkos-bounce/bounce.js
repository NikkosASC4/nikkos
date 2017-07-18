function setup(){
    createCanvas(500,500);
    background(51);
}

var xPos = 400;
var yPos = 400;
var x = 4
var y = 8

function draw(){
    background(51);

    ellipse(xPos, yPos, 50)
    //Once the circle reaches the limits of the canvas, its values are inverted to "bounce"
    xPos += x;
    yPos += y;
   
    if (xPos<0 || xPos>500) x = -x;
    
    if (yPos<0 || yPos>500) y = -y;
    

}


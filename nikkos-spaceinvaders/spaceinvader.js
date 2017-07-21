function setup(){
    createCanvas(800,700);
    background(51);
}
//Alien Positions
var xPos1 = 100;
var xPos2 = 200;
var xPos3 = 300;
var xPos4 = 400;
var xPos5 = 500;

//Alien Speed
var x = 400;
var y= 620;
var w = 4;
var w1 = 4;
var w2 = 4;
var w3 = 4;
var w4 = 4;

function draw() {
   background(51);
   if (keyIsDown(LEFT_ARROW))
       x -=5;
   if (keyIsDown(RIGHT_ARROW))
       x +=5;
   fill("white");
   if (keyIsDown(UP_ARROW)){
       fill("blue")
   }
   rect(x,y,15,50);
    if (x<0){
        x=0
    }
    else if(x>800){
        x=800
    }
   fill("green")

    if (xPos1<15 || xPos1>785) w = -w;
    xPos1 += w;
    if (xPos2<15 || xPos2>785) w1 = -w1;
    xPos2 += w1;
    if (xPos3<15 || xPos3>785) w2 = -w2
    xPos3 += w2;
    if (xPos4<15 || xPos4>785) w3 = -w3
    xPos4 += w3;
    if (xPos5<15 || xPos5>785) w4 = -w4
    xPos5 += w4;

    var enemy1 = ellipse(xPos1,100,30);//Alien
    var enemy2 = ellipse(xPos2,100,30);//Alien
    var enemy3 = ellipse(xPos3,100,30);//Alien
    var enemy4 = ellipse(xPos4,100,30);//Alien
    var enemy5 = ellipse(xPos5,100,30);//Alien


   
}
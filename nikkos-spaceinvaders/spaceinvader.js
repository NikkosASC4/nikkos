function setup(){
    createCanvas(800,700);
    background(51);
}
var x = 400;
var y = 649;
var drops = [];

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

function setup() {
   createCanvas(800,700);
   background(133, 6, 168);
}

function Drop(x, y) {
   this.x = x;
   this.y = y;

   this.show = function() {
       noStroke();
       fill(131, 196, 209);
       ellipse(this.x, this.y, 15, 15);
   }
   this.move = function () {
       this.y = this.y - 3;
   }
}

function draw() {
   background(133, 6, 168);
   for (var i = 0; i < drops.length; i++) {
       drops[i].show();
       drops[i].move();
   }
   fill("white");//Ship
   rect(x,y,15,50);//Ship

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

function keyPressed() {
   if (keyIsDown(LEFT_ARROW))//Ship
       x -=5;//Ship
   if (keyIsDown(RIGHT_ARROW))//Ship
       x +=5;//Ship
   if (key === ' ') {
       var drop = new Drop(x,y);
       drops.push(drop);
   }
}
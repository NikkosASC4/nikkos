function setup(){
    createCanvas(500,500);
    background(51);
}
//This function creates a circle whenever a user drags his mouse.
function mouseDragged(){
    fill(random(0,255),random(0,255),random(0,255))
    //Random color
     ellipse(mouseX, mouseY, random(10,30), random(10,30));
  // Random dimensions
  return false;
}
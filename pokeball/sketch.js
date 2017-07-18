function setup(){
    createCanvas(300,300);
    background(225);
//Creates the circle
    strokeWeight(5);
    ellipse(150, 150, 200, 200);
//Creates a smaller cirlce in the middle

    ellipse(150, 150, 25, 25);
//Fill
    fill("red");
        arc(width/2, height/2, 200,200, PI, 0, CHORD);
    fill("white");
        ellipse(width/2, height/2, 50);
    
    fill("black")
        ellipse(width/2, height/2, 30);

}
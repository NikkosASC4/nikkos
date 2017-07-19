function setup(){ 
    createCanvas(800,800);
}

var x = 0;
var y = 0;

function draw(){

var squ= rect(0,0,100,100);
for (var i=0; i<8; i++){
    for (i=0; i<8; i++){
        rect(x, y, 100, 100);
        x+=100;
    }
    x=0;
    y+=100;
}

}


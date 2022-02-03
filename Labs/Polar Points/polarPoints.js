//Edvin Cortez
//2/3/2022
//n220

//creatinf canavs size
function setup(){
    createCanvas(800, 800);

}//end setup

//drawing a circle with parameters from polar point function
function draw(){
    translate(100, 100);
    let res = polarPoint(100);
    fill(0, 0, 0);
    circle(res.x, res.y, 10);

}//end draw

//polar point function to get polar coordinates
function polarPoint(r){
    let x = r * Math.sin(mouseX);
    let y = Math.cos(mouseX);
    return createVector(x, y);

}//end polarPoint
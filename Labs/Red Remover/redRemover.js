//Edvin Cortez
//2/3/2022
//n220

//global variable
let noRed;

//creating canavs
function setup(){
    createCanvas(400, 300);

}//end setup

function draw(){
    //calling function and storing result
    noRed = removeRed(170, 200, 150);
    //drawing circle with color result
    fill(noRed);
    circle(200, 150, 100);
}//end draw

//function to keep green and blue but change red to 0
function removeRed(r, g, b){
    r = 0;
    g = g;
    b = b;
    return color(r, g, b);

}//end removeRed
//Getting the screen dimensions
let width = document.documentElement.scrollWidth;
let height = document.documentElement.scrollHeight;

//global variable
let diameter = 1;

function setup(){
    //setting canvas size
    createCanvas(width, height);

}//end setup

function draw(){
    //Setting white circle in the middle of the screen
    background(0, 0 , 0);
    fill(255, 255, 255);
    circle((width/2), (height/2), diameter);

    //change diameter of circle to 1 when it reaches 200
    //otherwise, keep incrementing the diameter
    if (diameter == 200){
        diameter = 1;
    } else {
        diameter++;
    }

}//end draw
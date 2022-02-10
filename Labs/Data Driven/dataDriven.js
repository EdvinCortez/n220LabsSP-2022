//Edvin Cortez
//2/10/2022
//n220

//function setup
function setup(){
    createCanvas(300, 400);

}//end setup

//function draw
function draw(){
    background(0, 0, 0);
    //using color from object
    fill(graphic.color);
    //creating rectangle using object properties
    rect(graphic.xPos, graphic.yPos, graphic.width, graphic.height);

    shape(graphic);

}//end draw

//function shape with four arguments
function shape({xPos = 250, yPos = 350, color, diameter}){
    //color for shape
    fill(color);
    //circle arguments from function arguments
    circle(xPos, yPos, diameter);

}//end shape

//object graphic with six properties
let graphic = {
    width: 75,
    height: 50,
    diameter: 25,
    color: "#032b5e",
    xPos: 150,
    yPos: 200

};//end graphic
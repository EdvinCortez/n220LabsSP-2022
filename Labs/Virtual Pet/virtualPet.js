//Edvin Cortez
//2/10/2022
//n220

//function setup
function setup(){
    createCanvas(300, 400);

}//end setup

//function draw
function draw(){
    //background(0, 0, 0);
    fill(235, 64, 52);
    //using pet properties for circle arguments
    circle(mouseX + pet.offsetX, mouseY, pet.diameter);

    //if mouse is down then subtract one from offset else, add one
    if (mouseIsPressed){
        if (pet.offsetX != 0){
            pet.offsetX -= 1;
        }

    } else {
        pet.offsetX += 1;

    }

}//end draw

//object pet with 4 properties
let pet = {
    diameter: 25,
    xPos: 150,
    yPos: 200,
    offsetX: 20,

};//end pet
//Edvin Cortez
//1/20/2022
//n220
//Comment the algorithm in the code

let black = 0;
let weightNum = 2;

function setup(){
    //Creating an all black canvas
    createCanvas(800, 600);
    background(black);

}//end setup

function draw(){
    //background(40); //darkens backround so you only have one circle, different under setup function
    //circle(mouseX, mouseY, frameCount/10); //(x,y,r)

    //Drawing a brown circle to show skin color
    fill(181, 122, 51)
    circle(400, 300, 400);

    //Drawing the left eye and white sclera
    fill(255, 255, 255);
    stroke(black);
    strokeWeight(weightNum);
    circle(320, 250, 80);
    //Drawing a brown circle for the left iris
    fill(133, 83, 9);
    circle(320, 250, 40);
    //Drawing the left black pupil
    fill(black);
    circle(320, 250, 20);

    //Creating the right eye and white sclera
    fill(255, 255, 255);
    stroke(black);
    strokeWeight(weightNum);
    circle(470, 250, 80);
    //Drawing a brown circle for the right iris
    fill(133, 83, 9);
    circle(470, 250, 40);
    //Drawing the right black pupil
    fill(black);
    circle(470, 250, 20);

    //Creating the mouth
    arc(400, 370, 100, 80, 50, 104);

}//end draw
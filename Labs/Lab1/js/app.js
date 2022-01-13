function setup(){
    createCanvas(800, 600);
    background(40);

}//end setup

function draw(){
    //background(40); //darkens backround so you only have one circle, different under setup func
    circle(mouseX, mouseY, frameCount/10); //(x,y,r)

}//end draw
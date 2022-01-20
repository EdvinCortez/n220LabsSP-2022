let diameter = 1;

function setup(){
    createCanvas(800, 600);
    
    console.log(diameter);

}//end setup

function draw(){
    background(0, 0 , 0);

    if (mouseIsPressed){
        if (diameter == 50){
            diameter = 1;

        }else {
            diameter++;
        }      

    }//end if 
fill(255, 255, 255);
    circle(mouseX, mouseY, diameter);
    console.log(diameter);
}//end draw

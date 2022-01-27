
function setup(){
    //canvas size
    createCanvas(400, 300);

}//end setup

function draw(){
    //set background to black
    background(0, 0 , 0);
    //draw circle wherever the mouse is
    circle(mouseX, mouseY, 50);

    /*Change the color of the circle to red
    if mouse is on the right side of canvas and
    change to blue if mouse is on the left side
    */
    if (mouseX > 200){
        fill(204, 27, 20);

    }//end if

    if (mouseX < 200){
        fill(20, 29, 217);

    }//end if 

}//end draw
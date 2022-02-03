//Edvin Cortez
//2/3/2022
//n220


//Creating canvas size
function setup(){
    createCanvas(400, 300);

}//end setup

//draw function with blue background
function draw(){
    background(79, 183, 247);
    //calling car function
    drawCar(mouseX, mouseY);


}//end draw

function drawCar(x = mouseX, y = mouseY){
    //x = 200;
    //y = 150;
    //creating the body of car
    fill(25, 181, 72);
    rect(x, y, 100, 35);

    //creating the tires
    fill(0, 0, 0);
    circle(x + 10, y + 40, 30);

    fill(0, 0, 0);
    circle(x + 90, y + 40, 30);

    //creating drivers head
    fill(173, 123, 47);
    circle(x + 65, y - 13, 25);

}//end drawCar
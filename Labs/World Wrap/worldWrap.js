//Edvin Cortez
//2/10/2022
//n220

//function setup
function setup(){
    createCanvas(800, 600);

}//end setup

//function draw
function draw(){
    //black background
    background(0, 0, 0);
    //color from ball object
    fill(ball.color);
    //circle with ball properties for arguments
    circle(ball.xPos, ball.yPos, ball.diameter);
    //circle moving speed
    ball.xPos = ball.xPos + ball.xSpeed;

    //if ball position equals 800 then set it back to starting position
    if (ball.xPos == 800){
        ball.xPos = 50;
    }//end if


}//end draw

//object ball with 5 properties
let ball = {
    diameter: 50,
    color: "#eb4034",
    xPos: 50,
    yPos: 50,
    xSpeed: 5

};//end ball
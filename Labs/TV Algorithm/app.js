
function setup(){
    createCanvas(500, 600);

}//end setup

function draw(){
    drawTV(telly);
    drawTV(tvObj);

}//end draw

function drawTV(telivision){
    fill(telivision.tvColor);
    fill(telivision.screenColor);
    line(telivision.x1, telivision.x2, telivision.x2, telivision.y2);
    rect(telivision.tvX, telivision.tvY, telivision.screenX, telivision.screenY);

}//end darwTV

let telly = {
    tvX: 150,
    tvY: 100,
    screenX: 250,
    screenY: 150,
    tvColor: "#000000",
    screenColor: "#918f8e",
    //controls pivot from bottom
    x1: 250,
    y1: 50,
    //controls pivot from top
    x2: 250,
    //controls length going down
    y2: 50

};

let tvObj = {
    tvX: 150,
    tvY: 300,
    screenX: 250,
    screenY: 150,
    tvColor: "#000000",
    screenColor: "#918f8e",
    //controls pivot from bottom
    x1: 250,
    y1: 150,
    //controls pivot from top
    x2: 250,
    //controls length going down
    y2: 350

};
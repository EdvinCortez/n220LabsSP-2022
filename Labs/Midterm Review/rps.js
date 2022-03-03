//Edvin Cortez
//3/3/2022
//n220

//global variables
let score = 0;
let compChoi = "";
let playChoi = "";
let randNum = 0;

//create 4 divs as the buttons for r, p, s, and guard
//create another div for score on screen, starting at 0
let rock = document.createElement("div");
let paper = document.createElement("div");
let scissors = document.createElement("div");
let guard = document.createElement("div");
let tally = document.createElement("div");
let choices = document.createElement("div");

//CUSTOMIZING THE DIVS
rock.innerHTML = "Rock";
rock.style.margin = "10px";
rock.style.backgroundColor = "#2f6df5";
rock.style.width = "40px";
//adding event listener for the button click
rock.addEventListener("click", function(){
    playChoi = "rock"

    //genarate a random move for the computer (r p s)
    randNum = Math.floor(Math.random() * 3);
    if (randNum == 2){
        compChoi = "rock";

    } else if (randNum == 1){
        compChoi = "paper";

    } else if (randNum == 0){
        compChoi = "scissors";

    }//end if else

    //show results of each round (player and comp choices) & update score
    //check player won(+1)/lost(-1)/tied(NA) with the computer
    if (compChoi === "rock"){

        score = score;

    } else if (compChoi === "paper"){

        score = score - 1;

    } else if (compChoi === "scissors"){
        
        score = score + 1;

    }//end if else

    tally.innerHTML = "Score: " + score;
    choices.innerHTML = "You chose " + playChoi + ", " + "computer chose " + compChoi;

});//end rock EL

paper.innerHTML = "Paper";
paper.style.margin = "10px";
paper.style.backgroundColor = "#2f6df5";
paper.style.width = "40px";
//adding event listener for the button click
paper.addEventListener("click", function(){
    playChoi = "paper";

    //genarate a random move for the computer (r p s)
    randNum = Math.floor(Math.random() * 3);
    if (randNum == 2){
        compChoi = "rock";

    } else if (randNum == 1){
        compChoi = "paper";

    } else if (randNum == 0){
        compChoi = "scissors";

    }//end if else

    //check player won(+1)/lost(-1)/tied(NA) with the computer
    //show results of each round (player and comp choices) & update score
    if (compChoi === "rock"){

        score = score + 1;

    } else if (compChoi === "paper"){

        score = score;

    } else if (compChoi === "scissors"){
        
        score = score - 1;

    }//end if else

    tally.innerHTML = "Score: " + score;
    choices.innerHTML = "You chose " + playChoi + ", " + "computer chose " + compChoi;

});//end paper EL

scissors.innerHTML = "Scissors";
scissors.style.margin = "10px";
scissors.style.backgroundColor = "#2f6df5";
scissors.style.width = "55px";
//adding event listener for the button click
scissors.addEventListener("click", function(){
    playChoi = "scissors";

    //genarate a random move for the computer (r p s)
    randNum = Math.floor(Math.random() * 3);
    if (randNum == 2){
        compChoi = "rock";

    } else if (randNum == 1){
        compChoi = "paper";

    } else if (randNum == 0){
        compChoi = "scissors";

    }//end if else

    //check player won(+1)/lost(-1)/tied(NA) with the computer
    //show results of each round (player and comp choices) & update score
    if (compChoi === "rock"){

        score = score - 1;

    } else if (compChoi === "paper"){

        score = score + 1;

    } else if (compChoi === "scissors"){
        
        score = score;

    }//end if else

    tally.innerHTML = "Score: " + score;
    choices.innerHTML = "You chose " + playChoi + ", " + "computer chose " + compChoi;

});//end scissors EL

guard.innerHTML = "Guard";
guard.style.margin = "10px";
guard.style.backgroundColor = "#2f6df5";
guard.style.width = "45px";
/* if guard is chosen, skip rps logic and sub. .5 points
//otherwise run the logic */
//adding event listener for the button click
guard.addEventListener("click", function(){
    playChoi = "guard";

    //genarate a random move for the computer (r p s)
    randNum = Math.floor(Math.random() * 3);
    if (randNum == 2){
        compChoi = "rock";

    } else if (randNum == 1){
        compChoi = "paper";

    } else if (randNum == 0){
        compChoi = "scissors";

    }//end if else

    //check player won(+1)/lost(-1)/tied(NA) with the computer
    //show results of each round (player and comp choices) & update score
    score = score - .5;
    tally.innerHTML = "Score: " + score;
    choices.innerHTML = "You chose " + playChoi + ", " + "computer chose " + compChoi;

});//end guard EL

tally.style.margin = "25px";
tally.style.backgroundColor = "#eb0c0c";
tally.style.width = "65px";

choices.style.margin = "25px";
choices.style.width = "400px";

//append to to page
document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);
document.body.appendChild(guard);
document.body.appendChild(tally);
document.body.appendChild(choices);

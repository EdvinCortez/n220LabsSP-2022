//Edvin Cortez
//2/24/2022
//n220

//array of strings
let fave = ["Food", "Video games", "Dogs", "Corona", "Whisky"];
//array for divs
let div = [];

//looping through fave array and setting the div text as the strings
for (let i = 0; i < fave.length; i++){

    //making div elements
    div[i] = document.createElement("div");

    //customizing elements
    div[i].innerHTML = fave[i] + ", is one of my favorite things";

    //placing objects on the page
    document.body.appendChild(div[i]);

}//end for 

//Edvin Cortez
//3/2/2022
//n220

let div = [];
let words = ["one", "two", "three", "four", "five", "six"];

//creating the main div where the clicked div's inner html will go
let mainDiv = document.createElement("div");

//customizing main div
mainDiv.innerHTML = " ";

//adding main div to page
document.body.appendChild(mainDiv);

//creating six divs with different words
for (let i = 0; i < words.length; i++){

    //making div elements
    div[i] = document.createElement("div");

    //customizing elements
    div[i].innerHTML = words[i];

    //adding click event listener
    div[i].addEventListener("click", function(){

        //for loop to keep noraml font when not the target
        for (let j = 0; j < words.length; j++){

            div[j].style.backgroundColor = "#ffffff";
            div[j].style.fontWeight = "normal";
            div[j].style.width = "35px";

        }//end for

        //customzing the div that is clicked
        event.target.style.backgroundColor = "#eb0c0c";
        event.target.style.fontWeight = "bold";
        event.target.style.width = "35px";

        //adding the clicked div's inner text to main
        mainDiv.innerHTML += div[i].innerHTML + " ";

    });//end EL

    //placing objects on the page
    document.body.appendChild(div[i]);

}//end for


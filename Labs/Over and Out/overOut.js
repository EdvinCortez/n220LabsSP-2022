//Edvin Cortez
//2/17/2022
//n220

//making div element
let newEl = document.createElement("div");

//customizing element
newEl.style.backgroundColor = "#1b50c2";
newEl.style.width = "100px";
newEl.style.height = "100px";

//placing object on the page
document.body.appendChild(newEl);


//change color to black when mouse over
newEl.addEventListener("mouseover", function() {
    //change the color to black
    newEl.style.backgroundColor= "#000000";

});

//change color to blue when mouse out
newEl.addEventListener("mouseout", function() {
    //change the color to black
    newEl.style.backgroundColor= "#1b50c2";

});
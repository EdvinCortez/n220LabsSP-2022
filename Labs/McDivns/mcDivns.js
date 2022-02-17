//Edvin Cortez
//2/17/2022
//n220

//making div element
let newEl = document.createElement("div");

//customizing element
newEl.innerHTML = "div";

//placing object on the page
document.body.appendChild(newEl);

//when clicking the div and append "mc" to the end of the inner html
newEl.addEventListener("click", function() {
    newEl.innerHTML += "mc";
});
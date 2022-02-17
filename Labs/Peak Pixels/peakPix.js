//Edvin Cortez
//2/17/2022
//n220

//making div element
let newEl = document.createElement("div");

//customizing element
newEl.style.backgroundColor = "#20ba49";
newEl.style.width = "100px";
newEl.style.height = "100px";

//placing object on the page
document.body.appendChild(newEl);


//when clicking the div, increase size
newEl.addEventListener("click", function() {
    //variables to hold the width and height
    let width = newEl.offsetWidth;
    let height = newEl.offsetHeight;
    
    //increase sizes by 10% each click
    newEl.style.width = (width+(width*.1)) + "px";
    newEl.style.height = (height+(height*.1)) + "px";
});
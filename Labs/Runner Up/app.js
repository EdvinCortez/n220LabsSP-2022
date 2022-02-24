//Edvin Cortez
//2/24/2022
//n220

//array with numbers
let times = [2, 4, 6];

//making div element
let one = document.createElement("div");
let two = document.createElement("div");

//customizing element
//setting the inner html using second and third indexes
one.innerHTML = times[1];
two.innerHTML = times[2];

//placing object on the page
document.body.appendChild(one);
document.body.appendChild(two);
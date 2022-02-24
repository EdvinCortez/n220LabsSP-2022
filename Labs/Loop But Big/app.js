//Edvin Cortez
//2/24/2022
//n220

let numbers = [1000, 2000, 3000, 4000, 5000];

//making div element
let newEl = document.createElement("div");

//customizing element
for (let i = 0; i < numbers.length; i++){
    newEl.innerHTML += (numbers[i] + " ");

}

//placing object on the page
document.body.appendChild(newEl);
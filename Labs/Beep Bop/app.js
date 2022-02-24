//Edvin Cortez
//2/24/2022
//n220

//making div element
let newEl = document.createElement("div");

//customizing element
//for loop to iterate 25 times
for (let i = 0; i < 26; i++){

    //if i is divisible by 3 then write "beep" instead of the #
    if (i % 3 == 0){
        newEl.innerHTML += ("beep" + " ");

    }//end if

    //if i is divisible by 3 then write "beep" instead of the #
    if (i % 5 == 0){
        newEl.innerHTML += ("bop" + " ");
        
    }//end if

    //if i is divisible by 3 AND 5 then write "beepbop" instead of the #
    if (i % 3 == 0 && i  % 5 == 0){
        newEl.innerHTML += ("beepbop" + " ");
        
    }//end if

}

//placing object on the page
document.body.appendChild(newEl);
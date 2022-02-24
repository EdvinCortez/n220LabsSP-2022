//array of numbers
let numbers = [55, 66, 77, 88, 99];
//count for numbers > 20
let count = 0;

//calling the function
calc(numbers);

//calc function def
function calc(x){
    //for loop to go through the array
    for (let i = 0; i < numbers.length; i++){
        //if the elemnt is > than 20 add 1 to the count
        if (numbers[i] > 20){
            count += 1;

        }//end if

    }//end for

    //if count < 3 then return that count
    if (count < 3){
        count = count;

    }//end if

    //if the count is > 3 then set it to -1
    if (count > 3){
        count = -1;

    }//end if

    //printing int the count
    console.log(count);

}//end calc
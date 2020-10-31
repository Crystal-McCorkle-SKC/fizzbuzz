"use strict";

//goes to document object, gets the element w/ the id "number"
//sets this equal to the variable btnTag
let btnTag = document.getElementById("number");

//creates function for clickMe
//this function controls the Click Me button 
function clickMe () {
  //goes to the document obj, gets the id "number" and modifies the value = "" 
  document.getElementById("number").value = "";
  //goes to the document obj, gets id "number" and modifies the color to "blue"
  document.getElementById("number").style.color = "blue"
  
    //loop for fizzBuzz
    //i stars at 1, and if it's less than 100, it goes through the loop and then is iterated 
    for (let i = 1; i <= 100; i++) {
        //if i % 3 && i % 5 are both equal to 0, btnTag's value equals the value + FizzBuzz
        if (i % 3 === 0 && i % 5 === 0 ) {
            btnTag.value += "FizzBuzz ";
        //if the above is not true, we check to see if i % 3 is equal to 0
        //if this is true, btnTag equals the value + Fizz 
    }   else if  (i % 3 === 0) {
            btnTag.value += "Fizz ";
        //next, if the above is not true, we look to see if i % 5 is equal to 0
        //if this is true, btnTag equals the value + Buzz 
    }   else if (i % 5 === 0) {                                                          
            btnTag.value += "Buzz "; 
        //Last if none of the above are true, then btnTag equals the value + i
        //a space ("  ") is added between each number/word 
        //the loop begins again, continuing up to 100              
    }   else {                    
            btnTag.value += i;
      
        btnTag.value += " " 
        }   
    } 
} 


/*NOTE TO SELF: Work on figuring out how to make a grid in JS w/ 100 squares.
User clicks on each square and reveals the number (or fizz, buzz, fizzbuzz) 
beneath the square and then square flips back over. Maybe do some sort of 
animation when hit on fizzbuzz???*/
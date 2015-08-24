//PROJECT EULER: PROBLEM 24 LEXICOGRAPHIC PERMUTATIONS
//COMPLETED 8/23/15
//ANSWER: 2783915460


// A permutation is an ordered arrangement of objects. 
//For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. 
//If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. 
//The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?


/*
the total number of possibilities are 3,628,800
which means that the number of possibilities for the last 9 numbers (i.e. 123456789 not 0123456789) is 362,880
so if we start with 0 as our first, we are going to go through 362,880 possibilities before we get to 1 as our first number
and then we will go through 725,760 numbers total before we get to 2 as our first number
which means that 2 will be our first number (because 3 as our first number is 88640 over our limit of 1,000,000)

we can repeat this pattern to find the answer
*/

//standard factorial function
var factorial = function(place) {
  if (place === 1) {
    return 1;
  } else {
    return place * factorial(place-1);
  }
}


var findPerm = function(digitsLeft, target, currNum) {
  //if there is only one digit that we have not yet used, then that is our missing digit
  //add that digit to the end of the number and return the full number, the answer
  if (digitsLeft.length === 1) {
    currNum += digitsLeft[0];
    return currNum;
  }

  //this is the number of places in the number that we have not figured out
  var places = digitsLeft.length;

  //this is the number of possibilities (the factorial) in the numbers left to be figured out
  var currentPlacesToBeFound = factorial(places-1);

  //we want to figure out what is the index in the digitsLeft array for the current place
  //that we are trying to figure out in the final answer
  var indexForCurrentPlace;
  //if the target is evenly divisible by the currentPlacesToBeFound, then we are still in that number
  if (target/currentPlacesToBeFound % 1 === 0) {
    indexForCurrentPlace = target/currentPlacesToBeFound - 1;

  //else we are not in that number and have moved on to the next number
  } else  {
    indexForCurrentPlace = Math.floor(target/currentPlacesToBeFound);
  }

  //now add the digit that we found to the final answer
  currNum += digitsLeft[indexForCurrentPlace];

  //take out the digit that we just used so it is not used again
  digitsLeft.splice(indexForCurrentPlace, 1);

  //create a new target based on the number of possibilities that we have gotten rid of
  target -= (indexForCurrentPlace * currentPlacesToBeFound);

  //recurse again with the new values
  return findPerm(digitsLeft, target, currNum); 
}


console.log(findPerm([0,1,2,3,4,5,6,7,8,9], 1000000, ""));



// Congratulations, the answer you gave to problem 24 is correct.

// You are the 69942nd person to have solved this problem.




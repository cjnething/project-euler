//PROJECT EULER: PROBLEM 493 UNDER THE RAINBOW
//NOT COMPLETED

// 70 colored balls are placed in an urn, 10 for each of the seven rainbow colors.

// What is the expected number of distinct colors in 20 randomly picked balls?

// Give your answer with nine digits after the decimal point (a.bcdefghij).


/*
Combination without replacement: n! / (k! * (n-k)!)
n is the number of types (in this case, 7 types of balls)
k is the number of chosen (in this case, 20 chosen)
*/

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
}

function combination() {
  var combo = factorial(7) / (factorial(20) * factorial(7-20));
}
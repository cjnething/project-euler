//PROJECT EULER: PROBLEM 20 FACTORIAL DIGIT SUM
//COMPLETED 6/12/15 WITH DAVID ERNST @dsernst
//ANSWER: 648

// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!


var Big = require('big.js');

var factorial = function(num) {
  if (num <= 1) {
    return Big(1);
  } else {
    return Big(num).times(factorial(num-1)).toFixed();
  }
}

var digitSums = function(num) {
  var digits = num.split("");
  return digits.reduce(function(total, val) { return total + Number(val);}, 0);
}

console.log(digitSums(factorial(100)));




// Congratulations, the answer you gave to problem 20 is correct.

// You are the 119306th person to have solved this problem.




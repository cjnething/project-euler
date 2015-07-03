//PROJECT EULER: PROBLEM 48 SELF POWERS
//COMPLETED 7/2/15
//ANSWER: 9110846700


// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.



var Big = require('big.js');


var findSum = function(limit) {
  var sum = new Big(0);
  var curr;

  for (var i = 1; i<=limit; i++) {
    curr = new Big(i).pow(i);
    sum = Big(sum).plus(curr).toFixed();
  }

  return sum;
}


console.log(findSum(1000))



// Congratulations, the answer you gave to problem 48 is correct.

// You are the 71834th person to have solved this problem.

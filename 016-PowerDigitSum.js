//PROJECT EULER: PROBLEM 16 POWER DIGIT SUM
//COMPLETED 6/12/15 WITH DAVID ERNST @dsernst
//ANSWER: 1366


// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

var Big = require('big.js');

var twoToTheThousandthNum = new Big(2).pow(1000).toFixed();


var findSum = function(num) {
  var digits = num.split("");
  var result = digits.reduce(function(total, val) { return total + Number(val); }, 0);
  console.log(result);
  return result;
}



console.log(findSum(twoToTheThousandthNum));



// Congratulations, the answer you gave to problem 16 is correct.

// You are the 132600th person to have solved this problem.
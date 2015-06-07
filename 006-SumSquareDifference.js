//PROJECT EULER: PROBLEM 6 SUM SQUARE DIFFERENCE
//COMPLETED 8/29/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 6/6/15 OPTIMIZED (BELOW)
//ANSWER: 25164150



// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


var findSumSquare = function(limit) {
  var sumSquare = 0;
  var squareSum = 0;
  var sumNatural = 0;
  
  for (var i = 1; i<=limit; i++) {
    sumSquare += Math.pow(i, 2);
    sumNatural += i;
  }

  squareSum = Math.pow(sumNatural, 2);


  var result = squareSum - sumSquare;

  return result;
}
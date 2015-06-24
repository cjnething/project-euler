//PROJECT EULER: PROBLEM 401 SUM OF SQUARES OF DIVISORS
//NOT COMPLETED


// The divisors of 6 are 1,2,3 and 6.
// The sum of the squares of these numbers is 1+4+9+36=50.

// Let sigma2(n) represent the sum of the squares of the divisors of n. Thus sigma2(6)=50.

// Let SIGMA2 represent the summatory function of sigma2, that is SIGMA2(n)=∑sigma2(i) for i=1 to n.
// The first 6 values of SIGMA2 are: 1,6,16,37,63 and 113.
// Find SIGMA2(10^15) modulo 10^9.

var Big = require('big.js');

function findDivisors(limit) {
  var sum = new Big(0);
  var numTimesInLimit = 0;
  var square;

  for (var i = 1; i<=limit; i++) {
    numTimesInLimit = Math.floor(limit/i);
    square = new Big(i).times(i).times(numTimesInLimit).toFixed();
    sum = Big(sum).plus(square).toFixed();
  }

  return sum;
}

//var result = new Big(findDivisors(Math.pow(10, 15)));

console.log(findDivisors(10000000))

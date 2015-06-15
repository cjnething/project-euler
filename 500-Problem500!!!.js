//PROJECT EULER: PROBLEM 500 PROBLEM 500!!!
//NOT COMPLETED


// The number of divisors of 120 is 16.
// In fact 120 is the smallest number having 16 divisors.

// Find the smallest number with 2^500500 divisors.
// Give your answer modulo 500500507.


var Big = require('big.js');


var findDivisors = function(num) {
  var divisors = [];
  for (var i = 1; i<=num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}


var findPrimeFactors = function(num) {   
   var factors = [];
   var index = 2;

   while (num > 1) {
     if (num % index === 0) {
      factors.push(index);
      num = num/index;
     } else {
      index++;
     }
   }
  return factors;
}




// console.log(findPrimeFactors(120));
// console.log(findDivisors(120));

/*
divisors: 2, 2, 2, 4
numDivs: 3
2 times 2 is also divisible by 4
2 times 2 times 2 is also divisible by 4 and 8


*/
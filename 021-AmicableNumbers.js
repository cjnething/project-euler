//PROJECT EULER: PROBLEM 21 AMICABLE NUMBERS
//COMPLETED 9/4/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 6/18/15 OPTIMIZED (BELOW)
//ANSWER: 31626


// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.


var findDivisors = function(num) {
  var divisors = [];

  for (var i = 1; i<num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

var divisorSum = function(num) {
  var divisors = findDivisors(num);
  var sum = 0;
  
  return divisors.reduce(function(sum, val) {return sum + val;}, 0);
}


var amicable = function(limit) {
  var sum = 0;
  var amicable;

  for (var i = 1; i<limit; i++) {
    amicable = divisorSum(i);
    if (i === divisorSum(amicable) && amicable !== i) {
      sum += i;
    }
  }
  return sum;
}

console.log(amicable(10000))




















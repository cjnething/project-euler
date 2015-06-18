//PROJECT EULER: PROBLEM 10 SUMMATION OF PRIMES
//COMPLETED 8/30/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 6/17/15 OPTIMIZED (BELOW)
//ANSWER: 142913828922


// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


var sumPrimes = function(limit) {
  var sum = 0;
  var isPrime = true;

  for (var i = 2; i<limit; i++) {
    for (var j = 2; j<=Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
    isPrime = true;
  }
  
  return sum;
}

console.log(sumPrimes(2000000));
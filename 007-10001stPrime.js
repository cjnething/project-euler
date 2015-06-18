//PROJECT EULER: PROBLEM 7 10001ST PRIME
//COMPLETED 8/30/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 6/17/15 OPTIMIZED (BELOW)
//ANSWER: 104743


// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?


var isPrime = function(num) {
  for (var i = 2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var findPrimes = function(limit) {
  var count = 0;
  var index = 1;
  var primes = [];

  while(count < limit) {
    index++;
    if (isPrime(index)) {
      count++;
      primes.push(index);
    }
  }

  return index;
}


console.log(findPrimes(10001));
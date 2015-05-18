//PROJECT EULER: PROBLEM 50 CONSECUTIVE PRIME SUM
//COMPLETED 5/18/15

// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.

var checkPrime = function(num) {
    var isPrime = true;
    
    for (var i = 1; i<=Math.sqrt(num); i++) {
      if (i !== 1 && i !== num && num % i === 0) {
         isPrime = false;
         return isPrime;
      }
    }
    return isPrime;
}

var consecSum = function() {
  var consecPrimes = [];
  var numPrimes = 0;
  var result = 0;
  var curr = 0;

  for (var i = 2; i<=10000; i++) {
    if (checkPrime(i)) {
      consecPrimes.push(i);
    }
  }

  for (var j = 0; j<consecPrimes.length; j++) {
    for (var k = j; k<consecPrimes.length; k++) {
      for (var m = j; m<k; m++) {
        curr += consecPrimes[m];
      }
      if (checkPrime(curr) && (k-j) > numPrimes && curr < 1000000) {
        numPrimes = k-j;
        result = curr;
      }
      curr = 0;
    }
  }
  return result;
}


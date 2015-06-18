//PROJECT EULER: PROBLEM 187 SEMIPRIMES
//COMPLETED 6/18/15
//ANSWER: 17427258


// A composite is a number containing at least two prime factors. For example, 15 = 3 × 5; 9 = 3 × 3; 12 = 2 × 2 × 3.

// There are ten composites below thirty containing precisely two, not necessarily distinct, prime factors: 4, 6, 9, 10, 14, 15, 21, 22, 25, 26.

// How many composite integers, n < 10^8, have precisely two, not necessarily distinct, prime factors?


var isPrime = function(num) {
  if (num % 2 === 0 && num !== 2) {
    return false;
  }
  for (var i = 3; i<=Math.sqrt(num); i = i+2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var findPrimes = function(limit) {
  var primes = [];
  for (var i = 2; i<=limit/2; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

var findComposites = function(limit) {
  var count = 0;
  var primes = findPrimes(limit);
  var mult, j;
  var i = 0;

  while(primes[i] <= Math.sqrt(limit)) {
    j = i;
    mult = primes[i] * primes[j];
    while (mult < limit) {
      count++;
      j++;
      mult = primes[i] * primes[j];
    }
    i++;
  }
  return count;
}

console.log(findComposites(100000000));



// Congratulations, the answer you gave to problem 187 is correct.

// You are the 7219th person to have solved this problem.



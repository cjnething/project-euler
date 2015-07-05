//PROJECT EULER: PROBLEM 41 PANDIGITAL PRIME
//NOT COMPLETED


// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?


var isPrime = function(num) {
  for (var i = 2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


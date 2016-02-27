//PROJECT EULER: PROBLEM 543 PRIME-SUM NUMBERS
//NOT COMPLETED


// Define function P(n,k) = 1 if n can be written as the sum of k prime numbers (with repetitions allowed), and P(n,k) = 0 otherwise.

// For example, P(10,2) = 1 because 10 can be written as either 3 + 7 or 5 + 5, but P(11,2) = 0 because no two primes can sum to 11.

// Let S(n) be the sum of all P(i,k) over 1 ≤ i,k ≤ n.

// For example, S(10) = 20, S(100) = 2402, and S(1000) = 248838.

// Let F(k) be the kth Fibonacci number (with F(0) = 0 and F(1) = 1).

// Find the sum of all S(F(k)) over 3 ≤ k ≤ 44



var fib = function(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    return fib(num-1) + fib(num-2);
  }   
}
//find all primes
//keep an object of all possibilities i.e. { 10: {2: true}} and then increase the total count if necessary
//iterate over all of the primes over and over again to get all of the possible additions

var isPrime = function(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i<=Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var findPrimes = function(limit) {
  var allPrimes = [];
  for (var i = 2; i<=limit; i++) {
    if (isPrime(i)) {
      allPrimes.push(isPrime);
    }
  }
  return allPrimes;
}


var getS = function(n) {
  var primes = findPrimes(n);
  var allCombos = {};
  
}



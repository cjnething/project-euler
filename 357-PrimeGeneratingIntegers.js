//PROJECT EULER: PROBLEM 357 PRIME GENERATING INTEGERS
//NOT COMPLETED

// Consider the divisors of 30: 1,2,3,5,6,10,15,30.
// It can be seen that for every divisor d of 30, d+30/d is prime.

// Find the sum of all positive integers n not exceeding 100 000 000
// such that for every divisor d of n, d+n/d is prime.

var findPrimes = function() {
  var primes = {'2': true};
  for(var i = 3; i<5000; i+=2) {
    console.log('i', i);
    if(isPrime(i)) {
      primes[i] = true;
    }
  }
  return primes;
}

var isPrime = function(num) {
  var isPrime = true;
  for (var i = 2; i<=Math.sqrt(num); i++) {
    if(num%i === 0) {
      isPrime = false;
      return isPrime;
    }
  }
  return isPrime;
}

var findDivisors = function(n) {
  var divisors = {};
  for (var i = 1; i<= Math.sqrt(n); i++) {
    if (n%i === 0) {
      divisors[i] = true;
      divisors[n/i] = true;
    }
  }
  return divisors;
}

var findAllInts = function() {
  var total = 0;
  var divisors;
  var arePrime = true;
  
  for (var i = 2; i<=1000000; i+=2) {
     divisors = findDivisors(i);
     for (var key in divisors) {
         key = Number(key);
         if (!isPrime(key + (key/i))) {
             arePrime = false;
         }
     }
     if(arePrime) {
         total += i;
     }
     arePrime = true;
  }
  return total;
}
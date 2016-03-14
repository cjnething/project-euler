//PROJECT EULER: PROBLEM 41 PANDIGITAL PRIME
//NOT COMPLETED


// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?


var sieve = function(limit) {
  var allNums = [];
  var primes = [];

  for (var i = 0; i <= limit; i++) {
    allNums.push(0);
  }

  for (var j = 2; j < allNums.length; j++) {
    for (var k = j; k < allNums.length; k=k+j) {
      allNums[k]++;
    }
  }

  for (var m = 0; m < allNums.length; m++) {
    if (allNums[m] === 1) {
      primes.push(m);
    }
  }

  return primes;
}


var isPandigital = function(num) {
  var length = num.toString().length;
  var necessaryDigits = [];
  for (var i = 1; i <= length; i++) {
    necessaryDigits.push(i);
  }

  for (var j = 0; j < necessaryDigits.length; j++) {
    if (num.toString().indexOf(necessaryDigits[j].toString()) === -1) {
      return false;
    }
  }

  return true;
}


var findPandigitalPrime = function(limit) {
  var primes = sieve(limit);
  var largestPandigitalPrime = 0;

  for (var i = 0; i < primes.length; i++) {
    if (isPandigital(primes[i])) {
      if (primes[i] > largestPandigitalPrime) {
        largestPandigitalPrime = primes[i];
      }
    }
  }

  return largestPandigitalPrime;
}


console.log(findPandigitalPrime(10000000))




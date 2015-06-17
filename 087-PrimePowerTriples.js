//PROJECT EULER: PROBLEM 87 PRIME POWER TRIPLES
//NOT COMPLETED


// The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

// 28 = 2^2 + 2^3 + 2^4
// 33 = 3^2 + 2^3 + 2^4
// 49 = 5^2 + 2^3 + 2^4
// 47 = 2^2 + 3^3 + 2^4

// How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?


var isPrime = function(num) {
  for (var i = 2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


var findPrimes = function(num) {
  var primes = [];

  for (var i = 2; i<num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}



var findSquareCubePower = function(limit) {
  var target, square, cube, fourthPower;
  var primes = findPrimes(limit);
  var results = {};
  var count = 0;
  var secCount = 0;
  
  for (var i = 0; i<primes.length; i++) {
    for (var j = 0; j<primes.length; j++) {
      for (var k = 0; k<primes.length; k++) {
        square = Math.pow(primes[i], 2);
        cube = Math.pow(primes[j], 3);
        fourthPower = Math.pow(primes[k], 4);
        target = square + cube + fourthPower;
        if (results[target]) {
          secCount++;
        }
        if (!results[target] && target < 50000000) {
          count++;
          results[target] = true;
        }
      }
    }
  }
  console.log('sec', secCount);
  return count;
}

//console.log(Math.pow(4, 2) + Math.pow(4, 3) + Math.pow(4, 4));

console.log(findSquareCubePower(5000));




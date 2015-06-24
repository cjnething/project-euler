//PROJECT EULER: PROBLEM 518 PRIME TRIPLES AND GEOMETRIC SEQUENCES
//NOT COMPLETED


// Let S(n) = a+b+c over all triples (a,b,c) such that:

// a, b, and c are prime numbers.
// a < b < c < n.
// a+1, b+1, and c+1 form a geometric sequence.
// For example, S(100) = 1035 with the following triples:

// (2, 5, 11), (2, 11, 47), (5, 11, 23), (5, 17, 53), (7, 11, 17), (7, 23, 71), (11, 23, 47), (17, 23, 31), (17, 41, 97), (31, 47, 71), (71, 83, 97)

// Find S(10^8).


function findPrimes(limit) {
  var divisors = [];
  var primes = {};

  //create a blank array to later fill with the sieve
  for (var index = 0; index<limit; index++) {
    divisors.push(0);
    primes[index] = true;
  }
   
  delete primes[0];
  delete primes[1];

  //create a sieve of the divisors count
  for (var i = 1; i<limit; i++) {
    for (var j = i; j<limit; j = j+i) {
      divisors[j]++;
      if (divisors[j] > 2) {
        delete primes[j];
      }
    }
  }
  
  return primes;
}


function secPrimes(limit) {
  var primes = {};
  var isPrime = true;
  
  for (var i = 2; i<limit; i++) {
    for (var j = 2; j<=Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes[i] = true;
    }
    isPrime = true;
  }

  return primes;
}

//Need to try Sieve of Erasthanese (sp?), that is what I attempted in findPrimes but that is not correct
//Right now secPrimes is much faster than findPrimes




//PROJECT EULER: PROBLEM 77 PRIME SUMMATIONS
//NOT COMPLETED


// It is possible to write ten as the sum of primes in exactly five different ways:

// 7 + 3
// 5 + 5
// 5 + 3 + 2
// 3 + 3 + 2 + 2
// 2 + 2 + 2 + 2 + 2

// What is the first value which can be written as the sum of primes in over five thousand different ways?

var isPrime = function(n) {
    var prime = true;
    for (var i = 2; i<=Math.sqrt(n); i++) {
        if (i === n) {
            return true;
        }
        if (n%i === 0) {
            prime = false;
            return prime;
        }
    }
    return prime;
}

var findPrimes = function(limit) {
    var primes  = [];
    for (var i = 2; i<limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}



var findSums = function() {
    var mostWays = 0;
    var mostWaysInt = 0;
    var currWays = 0;
    var currTotal = 0;
    var primes = findPrimes(10);
    var j = 1;
    console.log(primes);
    
    var recurse = function(num, currTotal, start) {
    for (var i = start; i>=0; i--) {
        currTotal += primes[i];
        if (currTotal === num) {
            currWays++;
            currTotal = currTotal - primes[i];
        } else if (currTotal < num) {
            recurse(currTotal, i); 
            currTotal -= primes[i];
        } else {
            currTotal -= primes[i];
        }
    }
    return currWays;
    }
    
    while (mostWays < 5000) {
      var total = recurse(j, 0, primes.length-1);
      if (total > mostWays) {
          mostWays = total;
          mostWaysInt = j;
      }
      j+=5000;
    }
    console.log('mostWaysInt', mostWaysInt, 'mostWays', mostWays);
    return mostWaysInt;
}

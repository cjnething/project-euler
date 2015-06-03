//PROJECT EULER: PROBLEM 77 PRIME SUMMATIONS


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
    var primes  = {};
    for (var i = 2; i<limit; i++) {
        if (isPrime(i)) {
            primes[i] = true;
        }
    }
    return primes;
}


var sumPrimes = function() {
    var mostWays = 0;
    var currWays = 0;
    var currVal = 2;
    var primes = findPrimes(1000);
    
    while (mostWays < 10) {
        
        currVal++;
    }
    
    
}
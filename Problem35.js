//PROJECT EULER: PROBLEM 35 CIRCULAR PRIMES

// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?


var isPrime = function(n) {
    var prime = true;
    for (var i = 2; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
            return prime;
        }
    }
    return prime;
}

var findPrimes = function() {
    var primes = [2];
    for (var i = 3; i<100; i+=2) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

var circular = function() {
    var primes = findPrimes();
    var circular = [];
    var isCircular = true;
    
    for (var i = 0; i<primes.length; i++) {
        var numStr = primes[i].toString();
        if (isPrime(Number(numStr[1]+numStr[0]))) {
            circular.push(primes[i]);
        }
    }
    return circular;
}

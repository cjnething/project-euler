//PROJECT EULER: PROBLEM 37 TRUNCATABLE PRIMES
//COMPLETED 5/22/15
//ANSWER: 748317

// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.


var isPrime = function(n) {
    var prime = true;
    if (n < 2) {
        prime = false;
        return prime;
    }
    for (var i = 2; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
            return prime;
        }
    }
    return prime;
}

var findPrimes = function() {
    var primes = [];
    for (var i = 11; i<800000; i+=2) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

var truncateLeft = function(num) {
    var canTrunc = true;
    var strNum = num.toString();
    strNum = strNum.slice(1, strNum.length);
    while (strNum.length > 0) {
        if(!isPrime(Number(strNum))) {
            canTrunc = false;
            return canTrunc;
        }
        strNum = strNum.slice(1, strNum.length);
    }
    return canTrunc;
    
}

var truncateRight = function(num) {
    var canTrunc = true;
    var strNum = num.toString();
    strNum = strNum.slice(0, strNum.length-1);
    while (strNum.length > 0) {
        if(!isPrime(Number(strNum))) {
            canTrunc = false;
            return canTrunc;
        }
        strNum = strNum.slice(0, strNum.length-1);
    }
    return canTrunc;
}

var findTruncate = function() {
    var numPrimes = 0;
    var allPrimes = findPrimes();
    var truncPrimes = [];
    var total = 0;
    var i = 0;
    
    while(numPrimes < 11) {
        if (truncateLeft(allPrimes[i]) && truncateRight(allPrimes[i])) {
            truncPrimes.push(allPrimes[i]);
            numPrimes++;
        }
        i++;
    }
    
    for (var currPrime = 0; currPrime<truncPrimes.length; currPrime++) {
        total += truncPrimes[currPrime];
    }
    console.log(truncPrimes);
    return total;
    
}


// Congratulations, the answer you gave to problem 37 is correct.

// You are the 43516th person to have solved this problem.
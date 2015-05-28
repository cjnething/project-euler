//PROJECT EULER: PROBLEM 3 LARGEST PRIME FACTOR
//COMPLETED 8/29/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 5/28/15 OPTIMIZED WITH DANNY DELOTT (BELOW)
//ANSWER: 6857


// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?



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

var findTarget = function(tar) {

var target = tar;
var primeFactor = false;
var i = 2;

while(!primeFactor) {
    if (target%i === 0 && isPrime(i)) {
       if (target%(target/i) === 0 && isPrime(target/i)) {
           primeFactor = target/i;
           return primeFactor;
       } else {
           target = target/i;
       }
    } else {
         i++;
    }
}
}
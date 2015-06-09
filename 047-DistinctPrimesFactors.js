//PROJECT EULER : PROBLEM 47 DISTINCT PRIMES FACTORS
//COMPLETED 5/18/15
//ANSWER: 134043


// The first two consecutive numbers to have two distinct prime factors are:

// 14 = 2 × 7
// 15 = 3 × 5

// The first three consecutive numbers to have three distinct prime factors are:

// 644 = 2² × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.

// Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?


var checkPrime = function(num) {
    var isPrime = true;
    
    for (var i = 1; i<=Math.sqrt(num); i++) {
      if (i !== 1 && i !== num && num % i === 0) {
         isPrime = false;
         return isPrime;
      }
    }
    return isPrime;
}

var checkFactors = function(origNum) {
    var primeFactors = {};
    var length = 0;
    
    var recurse = function(num) {
    if(checkPrime(num)) {
         if (!primeFactors[num]) {
            primeFactors[num] = 1;
            length++;
        } else {
            primeFactors[i] = primeFactors[i] + 1;
        }
        return;
    }
    for (var i = 2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) {
           if (checkPrime(i)) {
               if (!primeFactors[i]) {
                 primeFactors[i] = 1;
                 length++;
               } else {
                 primeFactors[i] = primeFactors[i] + 1;
               }
               recurse(num/i);
               return;
           }
        }
    }
    }
    
    recurse(origNum);
    return length;
}

var findConsec = function() {
    var init = 1;
    var first;
    var second;
    var third;
    var fourth;
    var result;
    
    while(!result) {
        if (checkFactors(init-1) !== 4 && checkFactors(init) === 4 && checkFactors(init+1) === 4 && checkFactors(init+2) === 4 && checkFactors(init+3) === 4) {
           first = init;
           second = init+1;
           third = init+2;
           fourth = init+3;
           result = first + " " + second + " " + third + " " + fourth;
        } else {
            init++;
        }
    }
    
    
    return result;
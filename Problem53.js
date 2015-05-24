//PROJECT EULER: PROBLEM 53 COMBINATORIC SELECTIONS
//COMPLETED 5/24/15
//ANSWER: 4075

// There are exactly ten ways of selecting three from five, 12345:

// 123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

// In combinatorics, we use the notation, 5C3 = 10.

// In general,

// nCr =  
// n!
// r!(n−r)!
// ,where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.
// It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.

// How many, not necessarily distinct, values of  nCr, for 1 ≤ n ≤ 100, are greater than one-million?

var factorial = function(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

var combin = function(n, r) {
    var topResult = factorial(n);
    var bottomResult = factorial(r) * factorial(n-r);
    return topResult/bottomResult;
}

var findTotal = function() {
    var count = 0;
    for (var i = 23; i<=100; i++) {
        for (var j = 0; j <= i; j++) {
            if(combin(i, j) > 1000000) {
                count++;
            }
        }
    }
    return count;
}


// Congratulations, the answer you gave to problem 53 is correct.

// You are the 36185th person to have solved this problem.


//PROJECT EULER: PROBLEM 80 SQUARE ROOT DIGITAL EXPANSION
//NOT COMPLETED

// It is well known that if the square root of a natural number is not an integer, then it is irrational. The decimal expansion of such square roots is infinite without any repeating pattern at all.

// The square root of two is 1.41421356237309504880..., and the digital sum of the first one hundred decimal digits is 475.

// For the first one hundred natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.

var isIrrational = function(num) {
    if (Math.sqrt(num) % 1 === 0) {
        return false;
    }
    return true;
}

var findSum = function() {
    var sum = 0;
    var currNumSum = 0;
    
    
    for (var i = 1; i<=100; i++) {
        if (isIrrational(i)) {
            console.log(Math.sqrt(i));
        }
    }
}
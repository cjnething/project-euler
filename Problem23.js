//PROJECT EULER: NON-ABUNDANT SUMS
//COMPLETED 5/21/15
//ANSWER: 4179871

// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

var findDivisors = function(n) {
    var divisors = {};
    for (var i = 1; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors[i] = true;
            if (n/i !== n) {
                divisors[n/i] = true;
            }
        }
    }
    return divisors;
}

var isAbundant = function(num) {
    var isAbundant = false;
    if (num < 0) {
        return isAbundant;
    }
    var divisors = Object.keys(findDivisors(num));
    var total = 0;
    for (var i = 0; i<divisors.length; i++) {
        total += Number(divisors[i]);
    }
    if (total > num) {
        isAbundant = true;
        return isAbundant;
    }
    return isAbundant;
}

var findAbundant = function() {
    var abundant = [];
    for (var i = 1; i<28123; i++) {
        if (isAbundant(i)) {
            abundant.push(i);
        }
    }
    return abundant;
}

var notSum = function() {
    var abundant = findAbundant();
    var notSum = [];
    var isSum = false;
    var total = 0;
    
    for (var i = 1; i<28123; i++) {
        var target = i;
        var j = 0;
        while (j < i && !isSum) {
            if (isAbundant(target - abundant[j])) {
                isSum = true;
                console.log('target', target, 'first', abundant[j], 'second', target-abundant[j]);
            } else {
                j++;
            }
        }
        if (!isSum) {
            notSum.push(target);
        }
        isSum = false;
    }
    
    for (var k = 0; k<notSum.length; k++) {
        total += notSum[k];
    }
    console.log(notSum);
    return total;
}




// Congratulations, the answer you gave to problem 23 is correct.

// You are the 59329th person to have solved this problem.

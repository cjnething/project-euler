//PROJECT EULER: PROBLEM 74 DIGIT FACTORIAL CHAINS
//NOT COMPLETED


// The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:

// 1! + 4! + 5! = 1 + 24 + 120 = 145

// Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:

// 169 → 363601 → 1454 → 169
// 871 → 45361 → 871
// 872 → 45362 → 872

// It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,

// 69 → 363600 → 1454 → 169 → 363601 (→ 1454)
// 78 → 45360 → 871 → 45361 (→ 871)
// 540 → 145 (→ 145)

// Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

// How many chains, with a starting number below one million, contain exactly sixty non-repeating terms?

var factorial = function(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

var factorialDigitSums = function(num) {
    var digits = num.toString().split('');
    var sum = 0;
    for (var i = 0; i<digits.length; i++) {
        sum += factorial(Number(digits[i]));
    }
    return sum;
}

var chains = function() {
    var factorials = {};
    var currChain = {};
    var chainStarters = {};
    var curr;
    var length = 0;
    var hasRepeated = false;
    var numChains = 0;
    
    for (var i = 3; i<4; i++) {
        curr = i;
        length++;
        currChain[curr] = true;
        if (!chainStarters[curr]) {
        while (!hasRepeated) {
            if (factorials[curr]) {
                curr = factorials[curr];
            } 
            if (!factorials[curr]) {
              var temp = factorialDigitSums(curr);
              factorials[curr] = temp;
              curr = temp;
            }
            if (currChain[curr]) {
                hasRepeated = true;
                chainStarters[curr] = true;
            }
            length++;
            currChain[curr] = true;
        }
        
        if (length === 60) {
            numChains++;
        }
        }
        console.log('currChain', currChain, 'i', i);
        currChain = {};
        length = 0;
        hasRepeated = false;
    }
    return numChains;
}
//PROJECT EULER: PROBLEM 95 AMICABLE CHAINS
//DID NOT COMPLETE

// The proper divisors of a number are all the divisors excluding the number itself. For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.

// Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.

// Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

// 12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)

// Since this chain returns to its starting point, it is called an amicable chain.

// Find the smallest member of the longest amicable chain with no element exceeding one million.

var findDivisors = function(n) {
    var divisors = {};
    var total = 0;
    
    for (var i = 1; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors[i] = true;
            if (n/i !== n) {
                divisors[n/i] = true;
            }
        }
    }
    
    for (var key in divisors) {
        total += Number(key);
    }
    
    return total;
}


var findChain = function() {
    var noCheck = {};
    var smallest;
    var length = 0;
    var currLength = 0;
    var currChain = {};
    var longChain = {};
    var begin = 0;
    
    var chain = function(n) {
        if (currChain[n]) {
            return;
        } 
        noCheck[n] = true;
        currChain[n] = true;
        currLength++;
        chain(findDivisors(n));
    }
    
    for (var i = 1; i<100; i++) {
        if (!noCheck[i]) {
        noCheck[i] = true;
        chain(i);
        console.log('i', i, 'chain', currChain);
        for (var key in currChain) {
            if (currLength > length) {
                length = currLength;
                longChain = currChain;
                begin = i;
                if (key < smallest || typeof smallest === "undefined") {
                    smallest = key;
                }
            }
        }
        currLength = 0;
        currChain = {};
        }
    }
    
    console.log('LONG CHAIN', longChain, 'BEGIN', begin);
    return smallest;
}
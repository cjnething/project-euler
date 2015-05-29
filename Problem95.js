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
   var longestStart;
   var longestLength = 0;
   var currLength = 0;
   var noCheck = {};
   var start;
   var currVal;
   
   
   //check findDivisors(i)
   //if that does not equal 1, then keep going along the chain
   //keep adding to the currlength
   //if new finDivisors = i, then that is a chain
   //check if currlength > longestlength
   //add all these numbers to noCheck
   //hold i in the longestStart value
   
   
   for (var i = 2; i<500; i++) {
       if (!noCheck[i]) {
       start = i;
       currVal = findDivisors(i);
       noCheck[i] = true;
       noCheck[currVal] = true;
       if (currVal !== start) {
           currLength++;
       }
       
       while (findDivisors(currVal) !== start && findDivisors(currVal) !== 1 && findDivisors(currVal) !== currVal) {
           currVal = findDivisors(currVal);
           currLength++;
           noCheck[currVal] = true;
       }
       if (findDivisors(currVal) === start) {
           console.log('currvalFIRST', currVal, 'length', currLength);
        if (currLength > longestLength) {
           console.log('currVal', currVal, 'currLength', currLength);
           longestLength = currLength;
           longestStart = start;
       }
       }
      
   }
   currLength = 0;
   }
   return longestStart;
}
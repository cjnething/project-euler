//PROJECT EULER: PROBLEM 95 AMICABLE CHAINS
//COMPLETED 5/29/15
//ANSWER: 14316

// The proper divisors of a number are all the divisors excluding the number itself. For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.

// Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.

// Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

// 12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)

// Since this chain returns to its starting point, it is called an amicable chain.

// Find the smallest member of the longest amicable chain with no element exceeding one million.

var getDivisors = function(num) {
    var divisors = {};
    
    for(var i = 1; i<=num; i++) {
        divisors[i] = findDivisors(i);
    }

   return divisors;
}


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

var findChain = function(limit) {
   var divisors = getDivisors(limit);
    
   var noCheck = {};
   var chainStarts = {};
   var longestStart;
   var longestLength = 0;
   
   var currChain = {};
   var currLength = 0;
   var start;
   var currVal;
   
   
   //check findDivisors(i)
   //if that does not equal 1, then keep going along the chain
   //keep adding to the currlength
   //if new finDivisors = i, then that is a chain
   //check if currlength > longestlength
   //add all these numbers to noCheck
   //hold i in the longestStart value
   
   
   for (var i = 2; i<limit; i++) {
       if (!noCheck[i]) {
       start = i;
       currVal = i;
       currChain[i] = true;
       while (
        divisors[currVal] !== start && 
        divisors[currVal] !== 1 && 
        divisors[currVal] !== currVal && 
        currLength < 30 && 
        !currChain[divisors[currVal]] && 
        divisors[currVal] < limit &&
        !chainStarts[divisors[currVal]]) {
           currVal = divisors[currVal];
           currLength++;
           currChain[currVal] = true;
       }
       if (currChain[divisors[currVal]]) {
           currChain[divisors[currVal]] = 2;
       }
       if (divisors[currVal] === start) {
        if (currLength > longestLength) {
           console.log('currStart', start, 'length', currLength);
           longestLength = currLength;
           longestStart = start;
       }
       }
       for (var key in currChain) {
           if (currChain[key] !== 2) {
               noCheck[key] = true;
           } else {
               chainStarts[key] = true;
               console.log('chainStarts', key, 'start', start);
           }
       }
      
   }
   currLength = 0;
   currChain = {};
   }
   return longestStart;
}


// Congratulations, the answer you gave to problem 95 is correct.

// You are the 8254th person to have solved this problem.




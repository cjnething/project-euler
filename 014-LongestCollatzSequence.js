//PROJECT EULER: PROBLEM 14 LONGEST COLLATZ SEQUENCE
//COMPLETED 9/4/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 6/18/15 OPTIMIZED (BELOW)
//ANSWER: 837799



// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.


var isOdd = function(num) {
  if (num % 2 === 0) {
    return false;
  }
  return true;
}


var chains = function(limit) {
  var longestIndex;
  var longestLength = 0;
  var currentIndex;
  var currentChain;
  
  for (var i = 2; i<limit; i++) {
    currentChain = 1;
    currentIndex = i;
    while (currentIndex !== 1) {
      if (isOdd(currentIndex)) {
        currentIndex = 3*currentIndex + 1;
      } else {
        currentIndex = currentIndex/2;
      }
      currentChain++;
    }
    if (currentChain > longestLength) {
      longestIndex = i;
      longestLength = currentChain;
    }
  }
  return longestIndex; 
}


console.log(chains(1000000))

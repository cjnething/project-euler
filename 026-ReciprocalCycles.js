//PROJECT EULER: PROBLEM 26 RECIPROCAL CYCLES
//NOT COMPLETED

// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2 =   0.5
// 1/3 =   0.(3)
// 1/4 =   0.25
// 1/5 =   0.2
// 1/6 =   0.1(6)
// 1/7 =   0.(142857)
// 1/8 =   0.125
// 1/9 =   0.(1)
// 1/10  =   0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.


var Big = require('big.js');


var findCycle = function(limit) {
  var longestIndex, current, currentLength;
  var length = 0;

  for (var i = 2; i<limit; i++) {
    current = Big(1).div(i).toPrecision();
    
    for (var j = 3; j<current.length; j++) {
      if (current.charAt(j) === current.charAt(2)) {
         currentLength = j - 2;
         if (currentLength > length) {
          length = currentLength;
          longestIndex = i;
         }
         break;
      }
    }
  }
  
  console.log('LENGTH',longestIndex, length);
  return length;
}

console.log(findCycle(1000));



//PROJECT EULER: PROBLEM 63 POWERFUL DIGIT COUNTS
//COMPLETED 3/2/16
//ANSWER: 49


/*
The 5-digit number, 16807=75, is also a fifth power. Similarly, the 9-digit number, 134217728=89, is a ninth power.

How many n-digit positive integers exist which are also an nth power?
*/


var Big = require('big.js');


var digitCounts = function(limit) {
  var originalPerN;
  var i;
  var count = 0;
  
  for (var n = 1; n <= limit; n++) {
    i = 1;
    originalPerN = Big(1);
    if (originalPerN.toFixed().length === n) {
      count++;
    }
    while (originalPerN.toFixed().length <= n) {
      i++;
      originalPerN = Big(i).pow(n);
      if (originalPerN.toFixed().length === n) {
        count++;
      }
    }
  }
  
  return count;
}

console.log(digitCounts(1000));



// Congratulations, the answer you gave to problem 63 is correct.

// You are the 28299th person to have solved this problem.

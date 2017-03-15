//PROJECT EULER: PROBLEM 44 PENTAGON NUMBERS
//COMPLETED 3/14/17
//ANSWER: 5482660

// Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten pentagonal numbers are:

// 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

// It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal.

// Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimised; what is the value of D?


var Big = require('big.js');


var pentagonal = function(n) {
  return Big(3).times(n).minus(1).times(n).div(2).toFixed();
}

var findPair = function() {
  var currSum, currDiff;

  var pents = {};
  var pentsByK = {};

  for (var k = 1; k<3000; k++) {
    var temp = Big(pentagonal(k));
    pents[temp] = true;
    pentsByK[k] = temp;
  }

  for (var i = 1; i<2999; i++) {
    for (var j = 1; j<3000; j++) {
      currSum = Big(pentsByK[j]).plus(pentsByK[i]).toFixed();
      currDiff = Math.abs(Big(pentsByK[j]).minus(pentsByK[i]).toFixed());
      if (pents[currDiff] && pents[currSum]) {
        return currDiff;
      }
    }
  }

  return true;
}

console.log(findPair());


// Congratulations, the answer you gave to problem 44 is correct.

// You are the 42217th person to have solved this problem.


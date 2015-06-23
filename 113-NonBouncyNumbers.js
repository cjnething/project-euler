//PROJECT EULER: PROBLEM 113 NON-BOUNCY NUMBERS
//NOT COMPLETED


// Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.

// Similarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.

// We shall call a positive integer that is neither increasing nor decreasing a "bouncy" number; for example, 155349.

// As n increases, the proportion of bouncy numbers below n increases such that there are only 12951 numbers below one-million that are not bouncy and only 277032 non-bouncy numbers below 1010.

// How many numbers below a googol (10^100) are not bouncy?


var Big = require('big.js');


function numNotBouncy(num) {
  var increasing = false;
  var decreasing = false;
  
  var digits = num.toString().split("");

  for (var i = 1; i<digits.length; i++) {
    if (Number(digits[i]) > Number(digits[i-1])) {
      increasing = true;
    }
    if (Number(digits[i]) < Number(digits[i-1])) {
      decreasing = true;
    }
    if (increasing && decreasing) {
      return false;
    }
  }

  return true;
}


function countNotBouncy(limit) {
  var notBouncy = 99;
  
  for (var i = 100; i<limit; i++) {
    if (numNotBouncy(i)) {
      notBouncy++;
    }
  }

  return notBouncy;
}

var googol = new Big(10).pow(100).toFixed();



function increasing(limit) {
  
}
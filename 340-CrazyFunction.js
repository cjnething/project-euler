//PROJECT EULER: PROBLEM 340 CRAZY FUNCTION
//NOT COMPLETED
//WORKS FOR SMALL NUMBERS

// For fixed integers a, b, c, define the crazy function F(n) as follows:
// F(n) = n - c for all n > b 
// F(n) = F(a + F(a + F(a + F(a + n)))) for all n ≤ b.

// Also, define S(a, b, c) = sum from n = 0 to b of F(n).

// For example, if a = 50, b = 2000 and c = 40, then F(0) = 3240 and F(2000) = 2040.
// Also, S(50, 2000, 40) = 5204240.

// Find the last 9 digits of S(21^7, 7^21, 12^7).

var Big = require('big.js');



function crazy(a, b, c) {
  var sum = 0;
  
  function crazyN(n) {
    if (n > b) {
      return n-c;
    } else {
      return crazyN(a + crazyN(a + crazyN(a + crazyN(a + n))));
    }
  }

  for (var i = 0; i<= b; i++) {
    sum += crazyN(i);
  }

  return sum;
}

// var a = new Big(21).pow(7).toFixed();
// var b = new Big(7).pow(21).toFixed();
// var c = new Big(12).pow(7).toFixed();

// var result = new Big(crazy(a, b, c));

// console.log(a, b, c);

// //console.log(result);

// // 21^7, 7^21, 12^7

console.log(crazy(50, 2000, 40))


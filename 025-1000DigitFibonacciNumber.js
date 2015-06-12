//PROJECT EULER: PROBLEM 25 1000-DIGIT FIBONACCI NUMBER
//COMPLETED 6/12/15 WITH DAVID ERNST @dsernst
//ANSWER: 4782


// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?



var Big = require('big.js');


var alreadyChecked = {};
var temp;

var fib = function(num) {
  if(alreadyChecked[num]) {
    return alreadyChecked[num];
  } else {
    if (num <= 2) {
      alreadyChecked[num] = 1;
      return Big(1);
    } else {
      temp = Big(fib(num-1)).plus(fib(num-2)).toFixed();
      alreadyChecked[num] = temp;
      return temp;
    }
  }
}

var findIndex = function(limit) {
  var index = 1;
  var found = false;

  while (!found) {
    if (fib(index).length >= limit) {
      return index;
    } else {
      index++;
    }
  }
}


console.log(findIndex(1000));


//There is a difference of 21 length for each 100 fibonacci
//So for example fib(1000) has an exponent of 208 and fib(1100) has an exponent of 229

//Knowing that, we can calculate that (4790 - 1000) / 100 * 21 + 208 = 1003.9
//(4780 - 1000) / 100 * 21 + 208 = 1001.8
//(4770 - 1000) / 100 * 21 + 208 = 999.7

//Checked around that range because that was around my original estimate. Also, the first fib with a length
//of 100 is 480, so it's going to be around 10 times that number at 4800.

//So my new estimate is also in the 4770 - 4800 range (final answer was 4782)






// Congratulations, the answer you gave to problem 25 is correct.

// You are the 92091st person to have solved this problem.



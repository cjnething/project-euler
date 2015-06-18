//PROJECT EULER: PROBLEM 34 DIGIT FACTORIALS
//COMPLETED 9/4/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 6/18/15 OPTIMIZED (BELOW)
//ANSWER: 40730


// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.


var factorial = function(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
}

var factorialSums = function() {
  var sum = 0;
  var digits, tempSum, digit;

  for (var i = 3; i<1000000; i++) {
    digits = i.toString().split("");
    for (var j = 0; j<digits.length; j++) {
      digit = Number(digits[j]);
      tempSum += factorial(digit);
    }
    if (tempSum === i) {
      sum += i;
    }
    tempSum = 0;
  }

  return sum;
}


console.log(factorialSums())


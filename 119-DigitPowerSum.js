//PROJECT EULER: PROBLEM 119 DIGIT POWER SUM
//NOT COMPLETED

// The number 512 is interesting because it is equal to the sum of its digits raised to some power: 5 + 1 + 2 = 8, and 8^3 = 512. Another example of a number with this property is 614656 = 28^4.

// We shall define an to be the nth term of this sequence and insist that a number must contain at least two digits to have a sum.

// You are given that a2 = 512 and a10 = 614656.

// Find a30.


var sumDigitpower = function(num) {
  var digits = num.toString().split("");
  var sum = 0;
  return digits.reduce(function(sum, val) {
    return sum + Number(val);}, 0);
}

console.log(sumDigitpower(512))
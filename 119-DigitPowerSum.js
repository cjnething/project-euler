//PROJECT EULER: PROBLEM 119 DIGIT POWER SUM
//NOT COMPLETED

// The number 512 is interesting because it is equal to the sum of its digits raised to some power: 5 + 1 + 2 = 8, and 8^3 = 512. Another example of a number with this property is 614656 = 28^4.

// We shall define an to be the nth term of this sequence and insist that a number must contain at least two digits to have a sum.

// You are given that a2 = 512 and a10 = 614656.

// Find a30.


function sumDigitPower(num) {
  var digits = num.toString().split("");
  var sum, powerEvaluated, exponent;
  sum = digits.reduce(function(sum, val) {
    return sum + Number(val);}, 0);
  if (sum === 1) {
    return false;
  }
  exponent = 1;
  powerEvaluated = sum;
  while (powerEvaluated < num) {
    exponent++;
    powerEvaluated = Math.pow(sum, exponent);
  }
  if (powerEvaluated === num) {
    return true;
  } else {
    return false;
  }
}

function findA30(limit) {
  var count = 0;
  var a = [];
  a.push(0);
  var index = 10;
  
  while (count < limit) {
    if (sumDigitPower(index)) {
      a.push(index);
      count++;
    }
    index++;
  }
  console.log(a);
  return index - 1;
}


console.log(findA30(15))
//PROJECT EULER: PROBLEM 56 POWERFUL DIGIT SUM
//COMPLETED 6/13/15
//ANSWER: 972


// A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

// Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?

var Big = require('big.js');


var findDigitSum = function() {
var nums, digits, sum;
var largest = 0;

for (var i = 1; i<100; i++) {
  for (var j = 1; j<100; j++){
      nums = Big(i).pow(j).toFixed();
      digits = nums.toString().split("");
      sum = digits.reduce(function(total, val) { return total + Number(val);}, 0);
      if (sum > largest) {
        largest = sum;
      }
  }
}

return largest;
}

console.log(findDigitSum());



// Congratulations, the answer you gave to problem 56 is correct.

// You are the 35607th person to have solved this problem.


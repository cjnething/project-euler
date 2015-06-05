//PROJECT EULER: PROBLEM 30 DIGIT FIFTH POWERS
//COMPLETED 5/27/15
//ANSWER: 443839

// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + 4^4
// As 1 = 1^4 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

var findDigits = function() {
    var found = false;
    var curr = 100;
    var arr;
    var sum = 0;
    var allNumbers = [];
    var result = 0;
    
    while(curr.toString().length <= 6) {
       arr= curr.toString().split("");
       for (var i = 0; i<arr.length; i++) {
           sum += Math.pow(Number(arr[i]), 5);
       }
       if (sum === curr) {
           allNumbers.push(curr);
           curr
       }
           sum = 0;
           curr++;
    }
    
    for (var j = 0; j<allNumbers.length; j++) {
        result += allNumbers[j];
    }
    
    return result;
}


// Congratulations, the answer you gave to problem 30 is correct.

// You are the 64708th person to have solved this problem.


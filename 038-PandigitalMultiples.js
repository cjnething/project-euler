//PROJECT EULER: PROBLEM 38 PANDIGITAL MULTIPLES
//COMPLETED 3/9/16
//ANSWER: 932718654


/*
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?
*/

var getNumIndexes = function(arr, targetIndex) {
  targetIndex = targetIndex.toString();
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === targetIndex) {
        count++;
    }
  }
  return count;
}


var isPandigital = function(num) {
  var digits = num.toString().split("");
  for (var i = 1; i <= 9; i++) {
    if (getNumIndexes(digits, i) !== 1) {
        return false;
    }
  }
  return true;
}


var getLargestPandigital = function() {
  var currNum = 1;
  var currResult = "";
  var n = 1;
  var largestPandigital = 0;
  var largestStart = 0;
  var largestN = 0;
    
    
  while ((currNum.toString().length + (2*currNum).toString().length) <= 9) {
        
    while (currResult.length < 9) {
      currResult += (currNum * n);
      n++;
    }
        
    if (currResult.length === 9 && isPandigital(currResult)) {
      if (parseInt(currResult) > largestPandigital) {
        largestPandigital = parseInt(currResult);
        largestStart = currNum;
        largestN = n;
      }
    }

    n = 1;
    currResult = "";
    currNum++;
  }
    
  return largestPandigital;
}


console.log(getLargestPandigital());


// Congratulations, the answer you gave to problem 38 is correct.

// You are the 41299th person to have solved this problem.


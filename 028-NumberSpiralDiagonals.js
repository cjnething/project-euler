//PROJECT EULER: NUMBER SPIRAL DIAGONALS
//COMPLETED 7/1/15
//ANSWER: 669171001


// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?



var numSpiral = function(length) {
  var currentLength = 1;
  var currentSum = 1;
  var previous = 1;
  var additive;


  while (currentLength < length) {
    currentLength += 2;
    additive = currentLength - 1;

    for (var i = 0; i<4; i++) {
      currentSum += (previous + additive);
      previous += additive;
      console.log(previous);
    }
  }
  
  return currentSum;
}

console.log(numSpiral(1001));



// Congratulations, the answer you gave to problem 28 is correct.

// You are the 67222nd person to have solved this problem.



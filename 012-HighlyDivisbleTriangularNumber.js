//PROJECT EULER: PROBLEM 12 HIGHLY DIVISIBLE TRIANGULAR NUMBER
//COMPLETED 9/5/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 6/18/15 OPTIMIZED (BELOW)
//ANSWER: 76576500


// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?


var numDivisors = function(num) {
  var count = 0;
  for (var i = 1; i<=Math.sqrt(num); i++) {
    if(num % i === 0) {
      count+=2;
    }
  }
  return count;
}


var triangleNumbers = function(limit) {
  var divisors = 0;
  var triangle = 0;
  var index = 0;

  while (divisors <= limit) {
    index++;
    triangle += index;
    divisors = numDivisors(triangle);
  }

  return triangle;
}

console.log(triangleNumbers(500))



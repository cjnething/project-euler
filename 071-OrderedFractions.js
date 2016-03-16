//PROJECT EULER: PROBLEM 71 ORDERED FRACTIONS
//COMPLETED: 3/15/16 
//ANSWER: 428570

/*
Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:

1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

It can be seen that 2/5 is the fraction immediately to the left of 3/7.

By listing the set of reduced proper fractions for d ≤ 1,000,000 in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.
*/

function findFraction(limit) {
  var target = 3/7;
  var currLowest = [1/limit, 1, limit];

  for (var j = 2; j <= limit; j++) {
    for (var i = Math.floor(j*3/7); i <= Math.ceil(j*3/7); i++) {
      if (i === 0) {
        i = 1;
      }
      if (currLowest[0] < i/j && i/j < target) {
        currLowest = [i/j, i, j];
      }
      if (i/j > target) {
        break;
      }
    }
  }

  return currLowest;
}


console.log(findFraction(1000000));


// Congratulations, the answer you gave to problem 71 is correct.

// You are the 18995th person to have solved this problem.


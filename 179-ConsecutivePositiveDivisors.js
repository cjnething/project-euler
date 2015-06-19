//PROJECT EULER: PROBLEM 179 CONSECUTIVE POSITIVE DIVISORS
//NOT COMPLETED


// Find the number of integers 1 < n < 10^7, for which n and n + 1 have the same number of positive divisors. 
// For example, 14 has the positive divisors 1, 2, 7, 14 while 15 has 1, 3, 5, 15.


var countDivisors = function(num) {
  if (num === 1) {
    return 1;
  }
  var count = 2;

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num/i === i) {
        count++;
      } else {
        count += 2;
      }
    }
  }
  return count;
};

var findConsecDivisors = function(limit) {
  var prev, curr;
  var count = 0;

  for (var i = 1; i < limit; i++) {
    curr = countDivisors(i);
    if (curr % 2 === 0) {
    if (prev === curr) {
      count++;
    }
    prev = curr;
  } else {
    prev = countDivisors(i+1);
    i++;
  }
  }
  return count;
};

console.log(findConsecDivisors(10000000));

//986262


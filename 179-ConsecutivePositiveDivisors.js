//PROJECT EULER: PROBLEM 179 CONSECUTIVE POSITIVE DIVISORS
//COMPLETED 6/18/15 WITH DAVID KIESEWETTER @webtation
//ANSWER: 986262


// Find the number of integers 1 < n < 10^7, for which n and n + 1 have the same number of positive divisors. 
// For example, 14 has the positive divisors 1, 2, 7, 14 while 15 has 1, 3, 5, 15.


//Before, I used a normal function to find all the divisors
//Using a sieve decreases the time considerably
//Previous function took approx. 100 seconds, new function (sieve) takes 1.6 seconds
//This has a much higher space complexity (the giant divisors array sieve) but a lower time complexity
var findConsecDivisors = function(limit) {
  var divisors = [];
  var count = 0;
 
  //create a blank array to later fill with the sieve
  for (var index = 0; index<limit; index++) {
    divisors.push(0);
  }

  //create a sieve of the divisors count
  for (var i = 1; i<limit; i++) {
    for (var j = i; j<limit; j = j+i) {
      divisors[j]++
    }
  }
  
  //compare the divisors
  for (var k = 1; k<limit; k++) {
    if (divisors[k] === divisors[k-1]) {
      count++;
    }
  }

  return count;
}

console.log(findConsecDivisors(10000000))


// Congratulations, the answer you gave to problem 179 is correct.

// You are the 7348th person to have solved this problem.
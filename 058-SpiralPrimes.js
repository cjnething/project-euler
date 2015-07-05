//PROJECT EULER: PROBLEM 58 SPIRAL PRIMES
//COMPLETED 7/4/15
//ANSWER: 26241



// Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

// 37 36 35 34 33 32 31
// 38 17 16 15 14 13 30
// 39 18  5  4  3 12 29
// 40 19  6  1  2 11 28
// 41 20  7  8  9 10 27
// 42 21 22 23 24 25 26
// 43 44 45 46 47 48 49

// It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.

// If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?


function isPrime(num) {
  for (var i = 2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}



function spiralNumbers() {
  var primes = 0;
  var nonPrimes = 1;
  var total = 1;
  var percentage = 1;
  var currLength = 1;
  var previous = 1;
  var additive;

  while (percentage >= 0.1) {
    currLength += 2;
    additive = currLength - 1;

    for (var i = 0; i<4; i++) {
      previous += additive;
      if (isPrime(previous)) {
        primes++;
      } else {
        nonPrimes++;
      }
    }
    total = primes + nonPrimes;
    percentage = primes/total;
  }

  return currLength;
}


console.log(spiralNumbers());



// Congratulations, the answer you gave to problem 58 is correct.

// You are the 23974th person to have solved this problem.

// Nice work, nething, you've just advanced to Level 2 . 
// 33297 members (6.63%) have made it this far.






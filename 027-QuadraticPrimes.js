//PROJECT EULER: PROBLEM 27 QUADRATIC PRIMES
//COMPLETED 2/27/16
//ANSWER: -59231

/*
Euler discovered the remarkable quadratic formula:

n² + n + 41

It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.

The incredible formula  n² − 79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0 to 79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n² + an + b, where |a| < 1000 and |b| < 1000

where |n| is the modulus/absolute value of n
e.g. |11| = 11 and |−4| = 4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.
*/


//use a sieve to get all primes (much faster than my original solution)
var getAllPrimes = function(limit) {
  var divisors = [];
  var allPrimes = {};
 
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

  //check if the number is prime by checking if the divisors are
  //1 (for 1) or 2 (for all other numbers)
  for (var k = 0; k < divisors.length; k++) {
    if (divisors[k] === 1 || divisors[k] === 2) {
        allPrimes[k] = true;
    }
  }

  return allPrimes;
}


var quadratic = function() {
    var primes = getAllPrimes(1000000);
    var longestStreak = 0;
    var longestStreakA, longestStreakB, currentStreak, n, continueLoop, currentValue;
    
    for (var a = -1000; a < 1000; a++) {
        for (var b = -1000; b < 1000; b++) {
            currentStreak = 0;
            n = 0;
            continueLoop = true;
            while (continueLoop) {
                currentValue = Math.pow(n, 2) + (n * a) + b;
                if (primes[currentValue]) {
                    currentStreak++;
                    n++;
                } else {
                    continueLoop = false;
                }
            }
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
                longestStreakA = a;
                longestStreakB = b;
            }
        }
    }
    
    return longestStreakA * longestStreakB;
}

console.log(quadratic());


// Congratulations, the answer you gave to problem 27 is correct.

// You are the 56785th person to have solved this problem.


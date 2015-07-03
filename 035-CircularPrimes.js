//PROJECT EULER: PROBLEM 35 CIRCULAR PRIMES
//COMPLETED 7/2/15
//ANSWER: 55

// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?


//create a sieve to find primes
var findPrimes = function(limit) {
    //want primesObj for constant lookup, want primesArr to iterate over
    var primesArr = [];
    var primesObj = {};
    var numbers = {};

    for (var i = 2; i<=limit; i++) {
        numbers[i] = 0;
    }

    for (var j = 1; j<=limit; j++) {
        for (var k = j; k<=limit; k=k+j) {
            numbers[k] = numbers[k] + 1;
        }
    }

    for (var m = 2; m<=limit; m++) {
        if (numbers[m] === 2) {
            primesArr.push(m);
            primesObj[m] = true;
        }
    }

    return [primesArr, primesObj];
}



var findCircular = function(limit) {
    var primesArr = findPrimes(limit)[0];
    var primesObj = findPrimes(limit)[1];
    var curr, temp;
    var count = 0;
    var isCircular = true;

    for (var i = 0; i<primesArr.length; i++) {
      curr = primesArr[i].toString();
      if (curr.length > 1) {
        for (var j = 0; j<primesArr[i].toString().length; j++) {
          curr = curr.slice(1, curr.length) + curr.slice(0, 1);
          if (!primesObj[curr]) {
            isCircular = false;
            break;
          }
        }
        if (isCircular) {
          count++;
        } else {
          isCircular = true;
        }
      } else {
        count++;
      }
    }
    return count;
}


console.log(findCircular(1000000));


// Congratulations, the answer you gave to problem 35 is correct.

// You are the 51930th person to have solved this problem.



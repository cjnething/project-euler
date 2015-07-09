//PROJECT EULER: PROBLEM 46 GOLDBACH'S OTHER CONJECTURE
//COMPLETED 7/9/15
//ANSWER: 5777

// It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

// 9 = 7 + 2×1^2
// 15 = 7 + 2×2^2
// 21 = 3 + 2×3^2
// 25 = 7 + 2×3^2
// 27 = 19 + 2×2^2
// 33 = 31 + 2×1^2

// It turns out that the conjecture was false.

// What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?


var findPrimesAndComposites = function(limit) {
  var isPrime = true;

  var primes = {};
  var composites = [];

  primes[2] = true;

  for (var i = 3; i<=limit; i+=2) {
    for (var j = 3; j<=Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes[i] = true;
    } else {
      composites.push(i);
      isPrime = true;
    }
  }

return [primes, composites];

}


var findSmallestOddComposite = function(limit) {
   var primeCompositesLimit = findPrimesAndComposites(limit);
   var primes = primeCompositesLimit[0];
   var composites = primeCompositesLimit[1];
   var canBeWritten;
   var currComposite;
   var square = 1;
   var squarePart = 0;
   var primePart = 0;

   for (var i = 0; i<composites.length; i++) {
     currTotal = 0;
     square = 1;
     canBeWritten = false;
     currComposite = composites[i];
     while (squarePart < currComposite && !canBeWritten) {
       squarePart = Math.pow(square, 2) * 2;
       primePart = currComposite - squarePart;
       if (primes[primePart]) {
         canBeWritten = true;
       }
       square++;
     }
     if (!canBeWritten) {
       return currComposite;
     }
   }
  return false;
}


console.log(findSmallestOddComposite(6000));


// Congratulations, the answer you gave to problem 46 is correct.

// You are the 36103rd person to have solved this problem.





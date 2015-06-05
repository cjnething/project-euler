//PROJECT EULER: PROBLEM 5 SMALLEST MULTIPLE
//COMPLETED 8/26/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 6/5/15 OPTIMIZED (BELOW)
//ANSWER: 232792560

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var primeFactors = function(num) {
    var factors = {};
    var i = 2;
    
    while(num > 1) {
        if (num % i === 0) {
            num = num/i;
            if (factors[i]) {
                factors[i]++;
            } else {
                factors[i] = 1;
            }
        }
        else {
            i++;
        }
    }
    return factors;
}


var smallestMultiple = function() {
  var allFactors = {};
  var factorsofI = {};
  var mult = 1;
  
  for (var i = 2; i<=20; i++) {
      factorsofI = primeFactors(i);
      for (var key in factorsofI) {
          if (!allFactors[key]) {
              allFactors[key] = factorsofI[key];
          } else {
              if (allFactors[key] < factorsofI[key]) {
                  allFactors[key] = factorsofI[key];
              }
          }
      }
  }
  
  for (var props in allFactors) {
      mult *= Math.pow(Number(props), allFactors[props]);
  }
  
  return mult;
}

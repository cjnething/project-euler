//PROJECT EULER: PROBLEM 20 FACTORIAL DIGIT SUM


// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!


var factorialSum = function() {
  var addedSum = 0;
  var factorial = 1;
  for (var i = 1; i<=21; i++) {
    factorial *= i;
    if (factorial % 10 === 0) {
      console.log('factorial', factorial, 'i', i);
      factorial = factorial/10;
    } 
    if (i % 19 === 0) {
          factorial = factorial/19;
          console.log('i', i);
          addedSum += 9;
    }
    // if (factorial % 10 === 0) {
    //   console.log('factorial', factorial, 'i', i);
    //   factorial = factorial/10;
    // } 
  }
  console.log('fact', factorial);
  var arrayDigits = (factorial).toString(10).split("").map(function(t){return parseInt(t)});
  
  console.log('addedSum', addedSum);
  return arrayDigits;
  
  
}
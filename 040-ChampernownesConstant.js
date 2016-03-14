//PROJECT EULER: PROBLEM 40 CHAMPERNOWNE'S CONSTANT
//COMPLETED 3/13/16
//ANSWER: 210


// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If dn represents the nth digit of the fractional part, find the value of the following expression.

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000


function findDigitAt(limit) {
  var currentTotal = "0.";
  var i = 1;

  //add 2 for the "0." part
  while (currentTotal.length < (limit + 2)) {
    currentTotal += i.toString();
    i++;
  }

  var finalTotal = 1;
  for (var j = 0; j <= 6; j++) {
    //add 1 because if you are looking at 0.1 that is the first decimal part but it is charAt(2)
    finalTotal *= (currentTotal.charAt(Math.pow(10, j) + 1));
  }

  return finalTotal;
}

console.log(findDigitAt(1000000));


// Congratulations, the answer you gave to problem 40 is correct.

// You are the 53145th person to have solved this problem.


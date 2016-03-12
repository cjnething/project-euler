//PROJECT EULER: PROBLEM 33 DIGIT CANCELLING FRACTIONS
//COMPLETED 3/11/16
//ANSWER: 100

/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

*/

var canCancelValues = function(num, denom) {
    var numDigits = num.toString().split("");
    var denomDigits = denom.toString().split("");
    var newNum, newDenom, newFraction;

    for (var i = 0; i < numDigits.length; i++) {
        for (var j = 0; j < denomDigits.length; j++) {
            //don't want to include answers like 20/30, so ignore if the common value is 0
            if ((numDigits[i] === denomDigits[j]) && (numDigits[i] !== "0")) {
                (i === 0) ? newNum = Number(numDigits[1]) : newNum = Number(numDigits[0]);
                (j === 0) ? newDenom = Number(denomDigits[1]) : newDenom = Number(denomDigits[0]);
                newFraction = (newNum/newDenom);
                if (newFraction === (num/denom)) {
                    return true;
                }
            }
        }
    }
    
    return false;
}


var findFractions = function() {
    var fractions = [];
    
    //1 digit values cannot cancel, so the lowest possible would be 10/11
    for (var i = 10; i <= 99; i++) {
        for (var j = i+1; j <= 99; j++) {
            if (canCancelValues(i, j)) {
                fractions.push([i, j]);
            }
        }
    }

    var finalNumerator = 1;
    var finalDenominator = 1;
    for (var k = 0; k < fractions.length; k++) {
      finalNumerator *= fractions[k][0];
      finalDenominator *= fractions[k][1];
    }

    var z = finalNumerator;

    while ((z > 1) && (finalNumerator > 1)) {
      if ((finalNumerator % z === 0) && (finalDenominator % z === 0)) {
        finalNumerator = finalNumerator/z;
        finalDenominator = finalDenominator/z;
      } else {
        z++;
      }
    }
    
    return finalDenominator;
}


console.log(findFractions());


// Congratulations, the answer you gave to problem 33 is correct.

// You are the 47271st person to have solved this problem.


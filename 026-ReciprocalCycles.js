//PROJECT EULER: PROBLEM 26 RECIPROCAL CYCLES
//COMPLETED 3/5/16
//ANSWER: 983

// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2 =   0.5
// 1/3 =   0.(3)
// 1/4 =   0.25
// 1/5 =   0.2
// 1/6 =   0.1(6)
// 1/7 =   0.(142857)
// 1/8 =   0.125
// 1/9 =   0.(1)
// 1/10  =   0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.



var getLengthRecurringCycle = function(numerator, divisor, currentAnswer, previousNumerators) {
    //approach: work through the long division problem
    //if the same numerator comes across twice, then we know we have found a recurring cycle

    var length;
    currentAnswer = currentAnswer || "";
    previousNumerators = previousNumerators || [];
    
    //check if we are in a repeating pattern
    if (previousNumerators.indexOf(numerator) === -1) {
        previousNumerators.push(numerator);
    } else {
        return previousNumerators.length - previousNumerators.indexOf(numerator);
    }
    

    //else just continue with the long division

    //numerator is divisible by the divisor, meaning we have found the end of the decimal
    if (numerator % divisor === 0) {
        //now we know it's not repeating, so we just return 0
        return 0;

    //numerator is greater than the divisor, so we can continue with dividing
    } else if (numerator > divisor) {
        var currentAddition = Math.floor(numerator/divisor);
        currentAnswer += currentAddition;
        numerator -= (currentAddition * divisor);
        //"bring down" the next value, which will always be 0 in this case
        numerator += "0";
        return getLengthRecurringCycle(numerator, divisor, currentAnswer, previousNumerators);

    //numerator is less than the divisor, i.e. 1/11, so we need to make a placeholder and move the decimal over
    } else {
        currentAnswer += "0";
        numerator *= 10;
        return getLengthRecurringCycle(numerator, divisor, currentAnswer, previousNumerators);
    }
    
    return currentAnswer;
}


var findLargestRecurringCycle = function(limit) {
    var largestCycle = 0;
    var largestDivisor, currentCycle;
    
    for (var i = 2; i < limit; i++) {
      currentCycle = getLengthRecurringCycle(1, i)
      if (currentCycle > largestCycle) {
        largestCycle = currentCycle;
        largestDivisor = i;
      }
    }
    
    return "Largest Cycle: " + largestCycle + " and Largest Divisor: " + largestDivisor;
}


console.log(findLargestRecurringCycle(1000));




// Congratulations, the answer you gave to problem 26 is correct.

// You are the 54231st person to have solved this problem.




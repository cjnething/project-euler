//PROJECT EULER: PROBLEM 76 COUNTING SUMMATIONS
//COMPLETED 6/2/15 WITH KYLE HILTON
//ANSWER: 190569291


// It is possible to write five as a sum in exactly six different ways:

// 4 + 1
// 3 + 2
// 3 + 1 + 1
// 2 + 2 + 1
// 2 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1

// How many different ways can one hundred be written as a sum of at least two positive integers?


var findSums = function(num) {
    // iterate over n-1 to 0
        // check if it being added to the string makes num
            // push to result arr
        // else if sum is lower than num
            // recurse down a layer
        // else
            // break
    var numWays = 0;
    
    var recurse = function(currTotal, start) {
    for (var i = start; i>0; i--) {
        currTotal = currTotal + i;
        if (currTotal === num) {
            numWays++;
            currTotal = currTotal - i;
        } else if (currTotal < num) {
            recurse(currTotal, i); 
            currTotal = currTotal - i;
        } else {
            currTotal = currTotal - i;
        }
    }
    }
    
    recurse(0, num-1);
    return numWays;
}

console.log(findSums(100));

// Congratulations, the answer you gave to problem 76 is correct.

// You are the 17178th person to have solved this problem.


//PROJECT EULER: PROBLEM 45 TRIANGULAR, PENTAGONAL, AND HEXAGONAL
//COMPLETED 5/25/15
//ANSWER: 1533776805


// Triangle, pentagonal, and hexagonal numbers are generated by the following formulae:

// Triangle   Tn=n(n+1)/2   1, 3, 6, 10, 15, ...
// Pentagonal   Pn=n(3n−1)/2    1, 5, 12, 22, 35, ...
// Hexagonal    Hn=n(2n−1)    1, 6, 15, 28, 45, ...
// It can be verified that T285 = P165 = H143 = 40755.

// Find the next triangle number that is also pentagonal and hexagonal.




var pentagonal = function(n) {
    return n*(3*n - 1)/2;
}

//all hexagonal numbers are also triangular, so no need to check triangular
var hexagonal = function(n) {
    return n*(2*n - 1);
}


var findNumber = function() {
    var j = 0;
    var found = false;

    var pents = [];
    var hexes = {};
    
    //H143 is the number we already have, so we need to check H144 on
    for (var i = 144; i<300000; i++) {
        pents.push(pentagonal(i));
        hexes[hexagonal(i)] = true;
    }
    
    while(!found) {
        if (hexes[pents[j]]) {
            found = true;
            return pents[j];
        } else {
            j++;
        }
    }
    
}



// Congratulations, the answer you gave to problem 45 is correct.

// You are the 43071st person to have solved this problem.

// You have earned 1 new award:

// Easy Prey: Solve twenty-five of the fifty easiest problems

//PROJECT EULER: PROBLEM 44 PENTAGON NUMBERS
//NOT COMPLETED

// Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten pentagonal numbers are:

// 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

// It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal.

// Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimised; what is the value of D?

var pentagonal = function(n) {
    return n*(3*n - 1)/2;
}

var findPair = function() {
    var diff = 10000000000000000;
    var currDiff;
    var currSum;

    var pents = {};
    var pentsByK = {};
    for (var k = 1; k<30000; k++) {
        var temp = pentagonal(k);
        pents[temp] = true;
        pentsByK[k] = temp;
    }
    
    
    for (var i = 1; i<100; i++) {
        for (var j = i+1; j<101; j++) {
            currDiff = pentsByK[j] - pentsByK[i];
            currDiff = currDiff.toString();
            currSum = pentsByK[j] + pentsByK[i];
            currSum = currSum.toString();
            console.log('i', i, 'j', j, 'diff', currDiff, 'sum', currSum, 'isDiff', pents[currDiff], 'isSum', pents[currSum], 'check', diff>currDiff)
            if (pents[currDiff] && pents[currSum] && diff > currDiff) {
                diff = currDiff;
            }
        }
    }
    return diff;
}
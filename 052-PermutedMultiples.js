//PROJECT EULER: PROBLEM 52 PERMUTED MULTIPLES
//COMPLETED 5/24/15 
//ANSWER: 142857

// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

var findInt = function() {
    var curr = 1;
    var digits = {};
    var found = false;
    
    var checkDigits = function(num) {
        var tempStr = num.toString();
        for (var j = 0; j<tempStr.length; j++) {
            if (!digits[tempStr[j]]) {
                return false;
            }
        }
        return true;
    }
    
    while(!found) {
        var str = curr.toString();
        for (var i = 0; i<str.length; i++) {
            digits[str[i]] = true;
        }
        if (checkDigits(curr*2) && checkDigits(curr*3) && checkDigits(curr*4) && checkDigits(curr*5) && checkDigits(curr*6)) {
            found = true;
        } else {
            curr++;
            digits = {};
        }
    }
    
    return curr;
}


// Congratulations, the answer you gave to problem 52 is correct.

// You are the 39820th person to have solved this problem.
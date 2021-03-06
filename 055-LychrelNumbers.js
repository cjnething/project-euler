//PROJECT EULER: PROBLEM 55 LYCHREL NUMBERS
//COMPLETED 5/30/15
//ANSWER: 249


// If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

// Not all numbers produce palindromes so quickly. For example,

// 349 + 943 = 1292,
// 1292 + 2921 = 4213
// 4213 + 3124 = 7337

// That is, 349 took three iterations to arrive at a palindrome.

// Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

// Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.

// How many Lychrel numbers are there below ten-thousand?


var backwards = function(num) {
    var digits = num.toString().split('');
    var backwards = '';
    for (var i = digits.length-1; i>=0; i--) {
        backwards = backwards.concat(digits[i]);
    }
   return Number(backwards);
}

var isPalindrome = function(num) {
    if (num === backwards(num)) {
        return true;
    } else {
        return false;
    }
}

var reverseAndAdd = function(num) {
    return num + backwards(num);
}

var findLychrels = function(limit) {
    var count = 0;
    var curr;
    var currIterations = 0;
    for (var i = 1; i<=limit; i++) {
        curr = i;
        while (!isPalindrome(reverseAndAdd(curr)) && currIterations < 50) {
            curr = reverseAndAdd(curr);
            currIterations++;
        }
        if (!isPalindrome(reverseAndAdd(curr))) {
            count++;
        } 
       currIterations = 0;
    }
    return count;
}


// Congratulations, the answer you gave to problem 55 is correct.

// You are the 32681st person to have solved this problem.



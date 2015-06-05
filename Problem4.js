//PROJECT EULER: PROBLEM 4 LARGEST PALINDROME PRODUCT
//COMPLETED 8/30/14 ORIGINALLY (NOT SHOWN)
//COMPLETED 6/5/15 OPTIMIZED (BELOW)
//ANSWER: 906609

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


var isPalindrome = function(num) {
    var numStr = num.toString();
    
    for (var i = 0; i<=Math.floor(numStr/2); i++) {
        if (numStr.charAt(i) !== numStr.charAt(numStr.length - i - 1)) {
            return false;
        }
    }
    
    return true;
}

var largestPalindrome = function() {
    var largestPalindrome = 0;
    var mult;
    
    for (var i = 1; i<=999; i++) {
        for (var j = 1; j<=999; j++) {
            mult = i*j;
            if (isPalindrome(mult) && mult > largestPalindrome) {
                largestPalindrome = mult;
            }
        }
    }
    return largestPalindrome;
}
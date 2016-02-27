//PROJECT EULER: PROBLEM 36 DOUBLE-BASE PALINDROMES
//COMPLETED 2/27/16
//ANSWER: 872187

/*
The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/


var getBinaryPalindrome = function(origNum) {
  //make an array of digits
  var digits = [];
  //find out how many places there are
  var places = Math.floor(Math.log2(origNum)) + 1;
    
  var recurse = function(num) {
    var currPlace = places - digits.length;
    var currPlaceValue = Math.pow(2, currPlace-1);

    if (num === 0) {
      if (places === digits.length) {
        return;
      } else {
        digits.push(0);
        recurse(num);
      }
    } else if (num >= currPlaceValue) {
      digits.push(1);
      num -= currPlaceValue;
      recurse(num);
    } else {
      digits.push(0);
      recurse(num);
    }
  }
    
  recurse(origNum);
  //now we have all of the digits of the binary value
  var finalBinaryValue = digits.join("");
  //get the reverse of all the digits in the binary value
  var reversedBinaryValue = digits.reverse().join("");
  //return if the original digits and the reversed digits are the same (palindrome)
  return finalBinaryValue === reversedBinaryValue;
}


var isPalindrome = function(num) {
  var digits = num.toString().split("");
  var reversedNum = digits.reverse().join("");
  return (Number(reversedNum) === num);
}


var getAllPalindromes = function(limit) {
  var finalSum = 0;
  //only odd numbers are going to be palindromic in base 2
  for (var i = 1; i < limit; i=i+2) {
    if (isPalindrome(i) && getBinaryPalindrome(i)) {
      finalSum += i;
    }
  }
  return finalSum;
}


console.log(getAllPalindromes(1000000));



// Congratulations, the answer you gave to problem 36 is correct.

// You are the 59646th person to have solved this problem.

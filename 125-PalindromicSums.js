//PROJECT EULER: PROBLEM 125 PALINDROMIC SUMS
//NOT COMPLETED


// The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: 6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2.

// There are exactly eleven palindromes below one-thousand that can be written as consecutive square sums, and the sum of these palindromes is 4164. Note that 1 = 0^2 + 1^2 has not been included as this problem is concerned with the squares of positive integers.

// Find the sum of all the numbers less than 10^8 that are both palindromic and can be written as the sum of consecutive squares.




function isPalindromic(num) {
  var digits = num.toString().split("");

  for (var i = 0; i<=digits.length/2; i++) {
    if (digits[i] !== digits[digits.length - i - 1]) {
      return false;
    }
  }

  return true;
}

function palindromicSums(limit) {
  var count = 0;
  var sum = Math.pow(1, 2);
  var countSum = 0;
  var first = 1;
  var second = 2;

  while (first < Math.sqrt(limit)) {
    if (sum > limit) {
      first++;
      second = first + 1;
      sum = Math.pow(first, 2);
    }
    sum += Math.pow(second, 2);
    if (sum < limit) {
      if (isPalindromic(sum)) {
        count++;
        countSum += sum;
        console.log(first, second, sum);
      }
    }
   
    second++;
  }
  
  // for (var i = 1; i<limit; i++) {
  //     sum += Math.pow(i, 2)
  //   for (var j = i+1; j<limit; j++) {
  //     sum += Math.pow(j, 2);
  //     if (isPalindromic(sum)) {
  //       count++;
  //       countSum += sum;
  //       console.log(i, j, sum);
  //     }
  //   }

  //   sum = 0;
  // }

  console.log(count);
  return countSum;
}


console.log(palindromicSums(Math.pow(10, 8)))
//PROJECT EULER: PROBLEM 112 BOUNCY NUMBERS
//COMPLETED 6/23/15
//ANSWER: 1587000


// Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.

// Similarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.

// We shall call a positive integer that is neither increasing nor decreasing a "bouncy" number; for example, 155349.

// Clearly there cannot be any bouncy numbers below one-hundred, but just over half of the numbers below one-thousand (525) are bouncy. In fact, the least number for which the proportion of bouncy numbers first reaches 50% is 538.

// Surprisingly, bouncy numbers become more and more common and by the time we reach 21780 the proportion of bouncy numbers is equal to 90%.

// Find the least number for which the proportion of bouncy numbers is exactly 99%.


function isNumBouncy(num) {
  var increasing = false;
  var decreasing = false;
  
  var digits = num.toString().split("");

  for (var i = 1; i<digits.length; i++) {
    if (Number(digits[i]) > Number(digits[i-1])) {
      increasing = true;
    }
    if (Number(digits[i]) < Number(digits[i-1])) {
      decreasing = true;
    }
    if (increasing && decreasing) {
      return true;
    }
  }

  return false;
}


function findPercentage(percentage) {
  var isBouncy = 0;
  var notBouncy = 99;
  var index = 100;
  
  while(isBouncy/(isBouncy + notBouncy) < percentage) {
    if(isNumBouncy(index)) {
      isBouncy++;
    } else {
      notBouncy++;
    }
    index++;
  }

  return index - 1;
}


console.log(findPercentage(.99));



// Congratulations, the answer you gave to problem 112 is correct.

// You are the 15122nd person to have solved this problem.




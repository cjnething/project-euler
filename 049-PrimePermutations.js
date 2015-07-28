//PROJECT EULER: PROBLEM 49 PRIME PERMUTATIONS
//COMPLETED 7/28/15
//ANSWER: 296962999629


// The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

// There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

// What 12-digit number do you form by concatenating the three terms in this sequence?




function findPrimes(limit) {
  var allNums = {};
  var primesArr = [];
  var primesObj = {};

  allNums[2] = true;

  for (var i = 3; i<=limit; i+=2) {
    allNums[i] = true;
  }

  for (var j = 3; j<=limit; j+=2) {
    for (var k = j+j; k<=limit; k+=j) {
      if (allNums[k]) {
        allNums[k] = false;
      }
    }
  }

  for (var key in allNums) {
    if (allNums[key] && (key.toString().length === 4)) {
      primesArr.push(key)
      primesObj[key] = true;
    }
  }

  
  return [primesArr, primesObj];
}


function checkSameDigits(num1, num2, num3) {
  var num1Digits = {};
  var num2Digits = {};
  var num3Digits = {};

  var num1Str = num1.toString();
  var num2Str = num2.toString();
  var num3Str = num3.toString();

  //put all the digits of num1 into the num1Digits object
  for (var i = 0; i<num1Str.length; i++) {
    if (num1Digits[num1Str.charAt(i)]) {
      num1Digits[num1Str.charAt(i)]++;
    } else {
      num1Digits[num1Str.charAt(i)] = 1;
    }    
  }

  //do the same thing for num2
  for (var j = 0; j<num2Str.length; j++) {
    if (num2Digits[num2Str.charAt(j)]) {
      num2Digits[num2Str.charAt(j)]++;
    } else {
      num2Digits[num2Str.charAt(j)] = 1;
    }    
  }

  //and the same for num3
  for (var k = 0; k<num3Str.length; k++) {
    if (num3Digits[num3Str.charAt(k)]) {
      num3Digits[num3Str.charAt(k)]++;
    } else {
      num3Digits[num3Str.charAt(k)] = 1;
    }    
  }

  //check if all the digits are the same in each number
  for (var key in num1Digits) {
    var temp = num1Digits[key];
    if ((num2Digits[key] === temp) && (num3Digits[key] === temp)) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}



function findSequence(limit) {
  var temp = findPrimes(limit);
  var primeArr = temp[0];
  var primeObj = temp[1];
  var difference, newNum;

  for (var i = 0; i<primeArr.length; i++) {
    for (var j = i+1; j<primeArr.length; j++) {
      difference = Number(primeArr[j]) - Number(primeArr[i]);
      newNum = Number(primeArr[j]) + difference;
      if (primeObj[newNum]) {
        if (checkSameDigits(primeArr[i], primeArr[j], newNum)) {
          if (primeArr[i] !== '1487') {
            return primeArr[i].concat(primeArr[j]).concat(newNum);
          }
        }
      }
    }
  }
  return false;
}


console.log(findSequence(9999))




// Congratulations, the answer you gave to problem 49 is correct.

// You are the 34566th person to have solved this problem.




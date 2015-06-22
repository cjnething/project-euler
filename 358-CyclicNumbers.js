//PROJECT EULER: PROBLEM 358 CYCLIC NUMBERS
//NOT COMPLETED


// A cyclic number with n digits has a very interesting property:
// When it is multiplied by 1, 2, 3, 4, ... n, all the products have exactly the same digits, in the same order, but rotated in a circular fashion!

// The smallest cyclic number is the 6-digit number 142857 :
// 142857 × 1 = 142857
// 142857 × 2 = 285714
// 142857 × 3 = 428571
// 142857 × 4 = 571428
// 142857 × 5 = 714285
// 142857 × 6 = 857142

// The next cyclic number is 0588235294117647 with 16 digits :
// 0588235294117647 × 1 = 0588235294117647
// 0588235294117647 × 2 = 1176470588235294
// 0588235294117647 × 3 = 1764705882352941
// ...
// 0588235294117647 × 16 = 9411764705882352

// Note that for cyclic numbers, leading zeros are important.

// There is only one cyclic number for which, the eleven leftmost digits are 00000000137 and the five rightmost digits are 56789 (i.e., it has the form 00000000137...56789 with an unknown number of digits in the middle). Find the sum of all its digits.



/*
Pseudocode:
1.) Create a method that checks if it is cyclical or not
    - Create an object of all possibilities of a number
    - Check every multiplication of the number and check if it is in the object
    - Return whether or not it is cyclical
2.) Iterate through every possible number starting with "00000000137" and ending in "56789" and check if it is cyclical
3.) Return the cyclical number
*/


function isCyclical(num) {
  var str = num.toString();
  var length = str.length;
  var possibilities = {};
  var currStr, currPartialStr, currEndStr, mult;

  possibilities[str] = true;
  
  for (var i = 1; i<=length; i++) {
    currPartialStr = str.substring(0, i);
    currEndStr = str.substring(i, length);
    currStr = currEndStr.concat(currPartialStr);
    possibilities[currStr] = true;
  }

  for (var j = 2; j <= length; j++) {
    mult = num * j;
    if (!possibilities[mult]) {
      console.log(mult, j)
      return false;
    }
  }

  return true;
}


function findNumber() {
  var start = "00000000137";
  var end = "56789";
  var index = 0;
  var found = false;
  var temp;

  while (!found) {
    temp = start + index.toString() + end;
    if (isCyclical(temp)) {
      found = true;
      return temp;
    }
    index++;
  }
}

function iterateThroughDigits() {
  var found = false;
  var index = "";
  var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var count = 0;
  var place = 1;

  while(!found) {
    if (index === "999" || count === 999) {
      found = true;
    }
    for (var i = 0; i<digits.length; i++) {
      index = digits[i];
    }
    count++;
  }
  return index;
}


function





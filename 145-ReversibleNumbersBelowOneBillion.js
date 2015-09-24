//PROJECT EULER: PROBLEM 145 HOW MANY REVERSIBLE NUMBERS ARE THERE BELOW ONE-BILLION?
//NOT COMPLETED

// Some positive integers n have the property that the sum [ n + reverse(n) ] consists entirely of odd (decimal) digits. For instance, 36 + 63 = 99 and 409 + 904 = 1313. We will call such numbers reversible; so 36, 63, 409, and 904 are reversible. Leading zeroes are not allowed in either n or reverse(n).

// There are 120 reversible numbers below one-thousand.

// How many reversible numbers are there below one-billion (10^9)?









// var isReversible = function(num) {
//   var isOdd = true;
//   var oddDigits = {1: true, 3: true, 5: true, 7: true, 9: true};
//   var str = num.toString();
//   var total = 0;
//   var currTotal;

//   for (var i = 0; i<str.length; i++) {
//     currTotal = Number(str.charAt(i)) + Number(str.charAt(str.length - 1 - i));
//     currTotal *= Math.pow(10, (str.length - 1 - i));
//     total += currTotal;
//   }

//   total = total.toString();

//   for (var j = 0; j<total.length; j++) {
//     if (!oddDigits[total[j]]) {
//       isOdd = false;
//       break;
//     }
//   }

//   return isOdd;
// }


// var findCount = function(limit) {
//   var count = 0;

//   for (var i = 1; i<limit; i++) {
//     if (i % 10 !== 0) {
//       if (isReversible(i)) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// console.log(findCount(10000000))



/*
****************************** MOST RECENT ATTEMPT ********************
var reverse = function(num) {
  var str = num.toString();
  var newStr = "";

  for (var i = str.length-1; i>=0; i--) {
    newStr = newStr.concat(str[i]);
  }
  
  return Number(newStr);
}


var reversibleNumbers = function(limit) {
  var count = 0;
  var reversible = {};
  var notReversible = {};
  var oddDigits = {1: true, 3: true, 5: true, 7: true, 9: true};
  var isOdd = true;
  var reversed, reverseSum, str;

  for (var i = 1; i<limit; i++) {
    isOdd = true;
    if (i % 10 === 0) {
      notReversible[i] = true;
    }
    if (!reversible[i] && !notReversible[i]) {
      str = i.toString();
      if (!oddDigits[str.charAt(0)] && !oddDigits[str.charAt(str.length-1)]) {
        notReversible[i] = true;
        console.log(str)
      } else {
        reversed = reverse(i);
        reverseSum = reversed + i;
        reverseSum = reverseSum.toString().split("");
        for (var j = 0; j<reverseSum.length; j++) {
          if (!oddDigits[reverseSum[j]]) {
            isOdd = false;
            break;
          }
        }
        if (isOdd) {
          reversible[i] = true;
          reversible[reversed] = true;
          count += 2;
        } else {
          notReversible[i] = true;
          notReversible[reversed] = true;
        }
      }

    }
  }
  return count;
}

console.log(reversibleNumbers(1000))

******************************* END MOST RECENT ATTEMPT ****************
*/

// var reversibleNumbers = function(limit) {
//   var reversed, sum, digits, iStr, reversedStr;
//   var reversible = {};
//   var notReversible = {};
//   var count = 0;
//   var oddDigits = {1: true, 3: true, 5: true, 7: true, 9: true};
//   var isOdd = true;

//   for (var i = 1; i<limit; i++) {
//     if (i % 10 === 0) {
//       notReversible[i] = true;
//     }
//     if (!reversible[i] && !notReversible[i]) {
//       reversed = reverse(i);
//       if (!reversible[reversed] && !notReversible[reversed]) {
//       iStr = i.toString();
//       reversedStr = reversed.toString();
//       sum = reversed + i;
//       digits =  sum.toString().split("");

//       for (var j = 0; j<digits.length; j++) {
//         if (!oddDigits[digits[j]]) {
//           isOdd = false;
//           notReversible[i] = sum;
//           notReversible[reversed] = sum;
//           break;
//         }
//       }
//       if (isOdd) {
//         count+=2;
//         reversible[i] = sum;
//         reversible[reversed] = sum;
//       } 

//       isOdd = true;
//       }
//       }

//   }
  
//   return count;
// }




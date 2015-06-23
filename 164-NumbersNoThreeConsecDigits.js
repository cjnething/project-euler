//PROJECT EULER: PROBLEM 164 NUMBERS FOR WHICH NO THREE CONSECUTIVE DIGITS HAVE A SUM GREATER THAN A GIVEN VALUE
//NOT COMPLETED


//How many 20 digit numbers n (without any leading zero) exist such that no three consecutive digits of n have a sum greater than 9?


// function findCount() {
//   var count = 0;
//   var digits = [];
//   var applicable = true;

//   for (var i = 100; i<910; i++) {
//     digits = i.toString().split("");
//     for (var start = 0; start<18; start++) {
//       if (Number(digits[start]) + Number(digits[start+1]) + Number(digits[start+2]) > 9) {
//         applicable = false;
//         break;
//       }
//     }
//     if (applicable) {
//       console.log(i);
//       count++;
//     }
//     applicable = true;
//   }
//   return count;
// }


// console.log(findCount());


function findResult() {
  var currCount = 0;
  var countResult = 0;
  var current = "";

  function recurse(curr) {
    console.log(curr);
    if (curr.length === 5) {
      countResult++;
      return;
    }
    else if (curr.length === 0) {
      currCount = 0;
    } else if (curr.length === 1) {
      currCount = Number(curr);
    } else {
      currCount = Number(curr.charAt(curr.length-2)) + Number(curr.charAt(curr.length-1));
    }


    for (var i = 0; i<=9; i++) {
      if (curr.length !== 0 || i !== 0) {
        if (currCount + i <= 9) {
          curr = curr.concat(i);
          console.log(curr)
          recurse(curr);
        }
      }

    }
  }

  recurse(current);
  
  return countResult;
}

console.log(findResult());

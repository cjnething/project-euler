//PROJECT EULER: PROBLEM 164 NUMBERS FOR WHICH NO THREE CONSECUTIVE DIGITS HAVE A SUM GREATER THAN A GIVEN VALUE
//NOT COMPLETED


//How many 20 digit numbers n (without any leading zero) exist such that no three consecutive digits of n have a sum greater than 9?


function findCount() {
  var count = 0;
  var digits = [];
  var applicable = true;

  for (var i = 10000000000000000000; i<=99999999999999999999; i++) {
    digits = i.toString().split("");
    for (var start = 0; start<18; start++) {
      if (Number(digits[start]) + Number(digits[start+1]) + Number(digits[start+2]) > 9) {
        applicable = false;
        break;
      }
    }
    if (applicable) {
      count++;
    }
    applicable = true;
  }
  return count;
}


console.log(findCount());
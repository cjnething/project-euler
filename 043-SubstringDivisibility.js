//PROJECT EULER: PROBLEM 43 SUB-STRING DIVISIBILITY
//NOT COMPLETED


// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.


//ok so we know that the 4th digit has to be an even number and the 6th digit has to be 5 or 0


var checkNumber = function(num) {
  var isValid = true;
  
  if (Number(num.substring(1,4)) % 2 !== 0) {
    return false;
  } 
  else if (Number(num.substring(2,5)) % 3 !== 0) {
    return false;
  }
  else if (Number(num.substring(3,6)) % 5 !== 0) {
    return false;
  }
  else if (Number(num.substring(4,7)) % 7 !== 0) {
    return false;
  }
  else if (Number(num.substring(5,8)) % 11 !== 0) {
    return false;
  }
  else if (Number(num.substring(6,9)) % 13 !== 0) {
    return false;
  }
  else if (Number(num.substring(7,10)) % 17 !== 0) {
    return false;
  }

  return isValid;
}



console.log(checkNumber("1406357290"));




var permArr = [],
  //usedChars is the current version of the combinations
  usedChars = [];

function permute(input) {
  console.log('*********************************');
  console.log('input', input);
  console.log('usedChars', usedChars);
  //ch is the character at the i index
  var ch;
  for (var i = 0; i < input.length; i++) {
    //finding the character at this index
    ch = input.splice(i, 1)[0];
    //push the new character into the current version
    usedChars.push(ch);
    //if we have gone through all the letters, push our new version into the total versions list
    if (input.length === 0) {
     //this basically takes a copy of the current usedChars and pushes it
      permArr.push(usedChars.slice());
    }
    permute(input);
    console.log('i', i, 'ch', ch);
    //starting at i, delete 0 characters, then pushes whichever character you are currently on at the i index
    input.splice(i, 0, ch);
    //take out the last value in the current version of the combinations
    usedChars.pop();
  }

  return permArr
}

permute(['a', 'b', 'c', 'd'])





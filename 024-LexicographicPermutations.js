//PROJECT EULER: PROBLEM 24 LEXICOGRAPHIC PERMUTATIONS
//NOT COMPLETED


// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?


var findPerm = function(limit) {
  var count = 0;
  var answer = 0;

  function permutate(num) {
    


    count++;
    if (count < limit) {

    } else {
      answer = num;
    }
  }

  permutate('0123456789');

  return answer;
}


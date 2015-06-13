//PROJECT EULER: PROBLEM 348 SUM OF A SQUARE AND A CUBE
//NOT COMPLETED


// Many numbers can be expressed as the sum of a square and a cube. Some of them in more than one way.

// Consider the palindromic numbers that can be expressed as the sum of a square and a cube, both greater than 1, in exactly 4 different ways.
// For example, 5229225 is a palindromic number and it can be expressed in exactly 4 different ways:

// 2285^2 + 20^3
// 2223^2 + 66^3
// 1810^2 + 125^3
// 1197^2 + 156^3

// Find the sum of the five smallest such palindromic numbers.


var _ = require("underscore");


var isPalindrome = function(num) {
  var digits = num.toString().split("");
  for (var i = 0; i<=digits.length/2; i++) {
     if (digits[i] !== digits[digits.length - i-1]) {
        return false;
     }

  }

  return true;
}

var findSquareCubes = function(limit) {
  var squareCubes = {};
  var palindromes = {};
  var fourSquareCubes = {};
  var square;
  var cube;
  var target;

  for (cube = 1; cube<limit; cube++) {
    for (square = 1; square<limit; square++) {
      target = Math.pow(cube, 3) + Math.pow(square, 2);
      if (palindromes[target]) {
        if (squareCubes[target]) {
          squareCubes[target] = squareCubes[target] + 1;
          if (squareCubes[target] === 4) {
            fourSquareCubes[target] = true;
          }
          if (squareCubes[target] > 4) {
            delete fourSquareCubes[target];
          }
        } else {
          squareCubes[target] = 1;
        }
      }
      else if (isPalindrome(target)) {
        palindromes[target] = true;
        squareCubes[target] = 1;
        }
      }
    }
  

  console.log(squareCubes);
  return fourSquareCubes;
}

console.log(findSquareCubes(3500))













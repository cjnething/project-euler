//PROJECT EULER: PROBLEM 206 CONCEALED SQUARE
//NOT COMPLETED
//answer is 1389019170
//paired with Wendy 7/13/15

//Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0,
//where each “_” is a single digit.

var Big = require('big.js');

function findInt() {
  var squared;

  //The smallest possible value is Math.ceil(Math.sqrt(1020304050607080900)) = 1010101010
  //The largest possible value is Math.floor(Math.sqrt(1929394959697989990)) = 1389026624
  //That will be our range for our for loops

  //The end has to be either 30 or 70 because 30 * 30 = 900 and 70 * 70 = 4900;
  //No other ending will have a 9 and then some number and then a 0

  //So first we will check all of the numbers that end in 30
  for (var i = 1010101030; i<1389026630; i=i+100) {
    squared = new Big(i).pow(2).toFixed();
    //console.log(squared, squared[18])
    if(squared[18] === "0" && squared[16] === "9" && squared[14] === "8" && 
      squared[12] === "7" && squared[10] === "6" && squared[8] === "5" && 
      squared[6] === "4" && squared[4] === "3" && squared[2] === "2" && squared[0] === "1") {
      return i;
    }
  }

  //Then we will check all of the numbers that end in 70
  for (var j = 1010101070; j<1389026670; j=j+100) {
    squared = new Big(j).pow(2).toFixed();
    //console.log(squared, squared[18])
    if(squared[18] === "0" && squared[16] === "9" && squared[14] === "8" && 
      squared[12] === "7" && squared[10] === "6" && squared[8] === "5" && 
      squared[6] === "4" && squared[4] === "3" && squared[2] === "2" && squared[0] === "1") {
      return j;
    }
  }
 
 return false;
}

console.log(findInt());


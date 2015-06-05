//PROJECT EULER: PROBLEM 206 CONCEALED SQUARE
//NOT COMPLETED

//Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0,
//where each “_” is a single digit.

function findInt() {
  var found = false;
  var i = 1010101030;
  var target = 0;

  while(!found || (i*i) < 1999999999999999999) {
    var squared = (i*i).toString();
    console.log('i', i, 'squared', squared);
    if(squared[0] === "1" || squared[2] === "2" || squared[4] === "3" || 
      squared[6] === "4" || squared[8] === "5" || squared[10] === "6" || 
      squared[12] === "7" || squared[14] === "8" || squared[16] === "9" ||
      squared[18] === "0") {
      found = true;
      target = i;
      return target;
    }
    i += 30;
  }
}
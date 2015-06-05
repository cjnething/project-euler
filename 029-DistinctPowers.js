//PROJECT EULER: PROBLEM 29 DISTINCT POWERS
//COMPLETED 5/28/15
//ANSWER: 9183

// Consider all integer combinations of ab for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:

// 2^2=4, 2^3=8, 2^4=16, 2^5=32
// 3^2=9, 3^3=27, 3^4=81, 3^5=243
// 4^2=16, 4^3=64, 4^4=256, 4^5=1024
// 5^2=25, 5^3=125, 5^4=625, 5^5=3125
// If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:

// 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

// How many distinct terms are in the sequence generated by ab for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?

 
  var findTerms = function() {
     var checked = {};
     var twos = {'4': 2, '8': 3, '16': 4, '32': 5, '64': 6};
     var threes = {'9': 2, '27': 3, '81': 4};
     var squares = {'25':true, '36':true, '49':true, '100': true};
     var count = 0;
     for (var i = 2; i<=100; i++) {
         if (twos[i.toString()]) {
             for (var k = 2; k<=100; k++) {
                 var tempTwos = "2." + k*twos[i.toString()];
                 if(!checked[tempTwos]) {
                     checked[tempTwos] = true;
                     count++;
                 }
             }
         } else if (threes[i.toString()]) {
              for (var m = 2; m<=100; m++) {
                 var tempThrees = "3." + m*threes[i.toString()];
                 if(!checked[tempThrees]) {
                     checked[tempThrees] = true;
                     count++;
                 }
             }
         } else if (Math.pow(i, 2) >= 2 && Math.pow(i, 2) <= 100) {
             for (var j = 2; j<=100; j++) {
               var key = i + "." + j;
               checked[key] = true;
               count++;
             }
         } else if (squares[i.toString()]) {
             for (var n = 2; n<=100; n++) {
                  var tempSquares = Math.sqrt(i) + "." + 2*n;
                  if (!checked[tempSquares]) {
                      checked[tempSquares] = true;
                      count++;
                  }
             }
            
         } else {
             console.log('i', i, 'else');
             count += 99;
         }
     }
     console.log(checked);
     return count;
 }


// Congratulations, the answer you gave to problem 29 is correct.

// You are the 61214th person to have solved this problem.



//PROJECT EULER: PROBLEM 463 A WEIRD RECURRENCE RELATION
//NOT COMPLETED



// The function f is defined for all positive integers as follows:

// f(1)=1
// f(3)=3
// f(2n)=f(n)
// f(4n+1)=2f(2n+1)−f(n)
// f(4n+3)=3f(2n+1)−2f(n)
// The function S(n) is defined as ∑(i=1 to n) of f(i).

// S(8)=22 and S(100)=3604.

// Find S(3^37). Give the last 9 digits of your answer.


function findRecurrenceRelation(limit) {
  var sum = 0;
  var current, third, fourth;
  var alreadyFound = {};

  alreadyFound[1] = 1;
  alreadyFound[3] = 3;


  for (var i = 1; i<=limit; i++) {
    third = (i-1)/4;
    fourth = (i-3)/4;

    if (alreadyFound[i]) {
      current = alreadyFound[i];
    } else if ((i % 2 === 0) && (alreadyFound[i/2])) {
      current = alreadyFound[i/2];
    } else if (third % 1 === 0) {
      current = 2 * alreadyFound[2*third+1] - alreadyFound[third];
    } else if (fourth % 1 === 0) {
      current = 3 * alreadyFound[2*fourth+1] - (2*alreadyFound[fourth]);
    } else {
      console.log('else', i);
    }
    alreadyFound[i] = current;
    sum += current;
  }
  return sum;
}

console.log(findRecurrenceRelation(10000000))

//console.log(Math.pow(3, 37))


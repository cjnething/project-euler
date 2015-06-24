//PROJECT EULER: PROBLEM 205 DICE GAME
//NOT COMPLETED


// Peter has nine four-sided (pyramidal) dice, each with faces numbered 1, 2, 3, 4.
// Colin has six six-sided (cubic) dice, each with faces numbered 1, 2, 3, 4, 5, 6.

// Peter and Colin roll their dice and compare totals: the highest total wins. The result is a draw if the totals are equal.

// What is the probability that Pyramidal Pete beats Cubic Colin? Give your answer rounded to seven decimal places in the form 0.abcdefg


function peterOutcomes() {
  var outcomes = [];
  var currSum = 0;

  for (var i = 1; i<=9; i++) {
    for (var j = 1; j<=4; j++) {
      currSum += j;
    }
    outcomes.push(currSum)
    currSum = 0;
  }

  return outcomes;
}

console.log(peterOutcomes())

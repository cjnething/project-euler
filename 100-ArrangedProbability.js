//PROJECT EULER: PROBLEM 100 ARRANGED PROBABILITY
//NOT COMPLETED

// If a box contains twenty-one coloured discs, composed of fifteen blue discs and six red discs, and two discs were taken at random, it can be seen that the probability of taking two blue discs, P(BB) = (15/21)×(14/20) = 1/2.

// The next such arrangement, for which there is exactly 50% chance of taking two blue discs at random, is a box containing eighty-five blue discs and thirty-five red discs.

// By finding the first arrangement to contain over 10^12 = 1,000,000,000,000 discs in total, determine the number of blue discs that the box would contain.


var findDiscs = function(start) {
  var found = false;
  var total = start;
  var blue, red, fractionFirst, fractionSecond;

  while(!found) {
    for (blue = Math.floor(total * 2/3); blue<Math.ceil(total * 3 / 4); blue++) {
      red = total-blue;
      console.log('blue', blue, 'red', red, 'total', total);
      fractionFirst = blue/total;
      fractionSecond = (blue-1)/(total-1);
      if (fractionFirst * fractionSecond === 0.5) {
        found = true;
        console.log('FOUND','total', total, 'blue', blue);
        return blue;
      }
    }
    total++;
  }
}

console.log(findDiscs(10000));

// var simple = function(target) {
//   for (var i = 1; i<target; i++) {
//     var probability = (i/target) * (i-1)/(target-1)
//     console.log('blue', i, 'red', target-i, 'prob', probability)
//   }

//   console.log('2/3', target * 2 / 3);
//   console.log('3/4', target * 3 / 4);
// }

// console.log(simple(21));

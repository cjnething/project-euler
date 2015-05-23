//PROJECT EULER: PROBLEM 92 SQUARE DIGIT CHAINS
//COMPLETED 5/22/15
//ANSWER: 8581146


// A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

// For example,

// 44 → 32 → 13 → 10 → 1 → 1
// 85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

// Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

// How many starting numbers below ten million will arrive at 89?

var getChain = function() {
    var countEightyNine = 0;
    var curr;
    var total = 0;
    var leadsToEightyNine = {};
    var leadsToOne = {};
    var currChain = [];
    

var chainLoop = function(curr) {
        currChain.push(curr);
        var str = curr.toString();
        for (var j = 0; j<str.length; j++) {
            var squared = Number(str.charAt(j)) * Number(str.charAt(j));
            total += squared;
            //console.log('curr', curr, 'squared', squared, 'total', total);
        }
        if (total === 89) {
             for (var k = 0; k<currChain.length; k++) {
                leadsToEightyNine[currChain[k]] = true;
            }
            countEightyNine++;
            return;
        } else if (total === 1){
            for (var m = 0; m<currChain.length; m++) {
                leadsToOne[currChain[m]] = true;
            }
            return;
        } else {
            var temp = total;
            total = 0;
            if (leadsToEightyNine[temp]) {
                countEightyNine++;
                return;
            } else if (leadsToOne[temp]){
                return;
            } else {
              chainLoop(temp);
            }
        }
  }

    for (var i = 2; i<10000000; i++) {
        chainLoop(i, i);
        total = 0;
        currChain = [];
    }

return countEightyNine;
}


// Congratulations, the answer you gave to problem 92 is correct.

// You are the 25560th person to have solved this problem.


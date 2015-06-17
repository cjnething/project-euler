//PROJECT EULER: PROBLEM 31 COIN SUMS
//COMPLETED 6/17/15 WITH SUNNY G AND DANNY DELOTT
//ANSWER: 73682


// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?



var coinSums = function(n) {
  var count = 0;
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];

  var recurse = function(balance, index) {
    if (balance === 0) {
        count++;
        return;
    } else {
        for (var i = index; i<coins.length; i++) {
            if (balance - coins[i] >= 0) {
                recurse(balance - coins[i], i);
            }            
        }
    }
  }

  recurse(n, 0);
  return count;
}


console.log(coinSums(200));


// Congratulations, the answer you gave to problem 31 is correct.

// You are the 48968th person to have solved this problem.







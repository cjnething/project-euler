//PROJECT EULER: PROBLEM 243 RESILIENCE
//NOT COMPLETED

/*
A positive fraction whose numerator is less than its denominator is called a proper fraction.
For any denominator, d, there will be d−1 proper fractions; for example, with d = 12:
1/12 , 2/12 , 3/12 , 4/12 , 5/12 , 6/12 , 7/12 , 8/12 , 9/12 , 10/12 , 11/12 .

We shall call a fraction that cannot be cancelled down a resilient fraction.
Furthermore we shall define the resilience of a denominator, R(d), to be the ratio of its proper fractions that are resilient; for example, R(12) = 4/11 .
In fact, d = 12 is the smallest denominator having a resilience R(d) < 4/10 .

Find the smallest denominator d, having a resilience R(d) < 15499/94744 .
*/



//plan: going to make a sieve of all divisors

/*
var sieve = function(limit) {
  var allNums = [];

  for (var i = 0; i <= limit; i++) {
    allNums.push({});
  }

  for (var j = 2; j <= limit; j++) {
    for (var k = j; k <= limit; k=(k+j)) {
      allNums[k][j] = true;
    }
  }

  return allNums;
}


var getResilienceCount = function(limit, allDenoms) {
  var divisorsSieve;
  if (allDenoms) {
    divisorsSieve = allDenoms.slice(0, (limit+1));
  } else {
    divisorsSieve = sieve(limit);
  }
  var limitDivisors = divisorsSieve[divisorsSieve.length-1];
  
  for (var key in limitDivisors) {
    for (var i = 0; i < divisorsSieve.length; i++) {
      if (divisorsSieve[i][key]) {
        divisorsSieve.splice(i, 1);
      }
    }
  }

  //take away one because of the empty 0 divisors key
  return ((divisorsSieve.length - 1) / (limit - 1));
}



var getLowestDenominator = function(max, sieveLimit) {
  var allDenoms = sieve(sieveLimit);
  var i = 2;
  var currResilience;

  for (var i = 510510; i < sieveLimit; i=i+510510) {
    currResilience = getResilienceCount(i, allDenoms);
    if (currResilience < max) {
      return i;
    }
  }

  return "NONE";
}
*/


var primeFactorizationSieve = function(limit) {
  var allNums = [];
  var power;

  for (var i = 0; i <= limit; i++) {
    allNums.push([i, {}]);
  }

  for (var j = 2; j <= limit; j++) {
    //j is making sure we get prime factors for all numbers
    //k is getting the prime factors
    var k = 2;
    while (k <= j) {
     if (allNums[j][0] % k === 0) {
        if (allNums[j][1][k]) {
          allNums[j][1][k]++;
        } else {
          allNums[j][1][k] = 1;
        }
        allNums[j][0] = allNums[j][0]/k;
      } else {
        k++;
      }
    }
  }

  var divisors = [];

  for (var m = 0; m < allNums.length; m++) {
    divisors.push(allNums[m][1]);
  }

  return divisors;
}



var checkResilience = function(limit) {
  var divisors = primeFactorizationSieve(15000);
  var currentResult = 1;
  var currentResultPrimes = {};
  var index = 2;
  var difference;

  while (getResilience(currentResult, currentResultPrimes) > limit) {
    for (var key in divisors[index]) {
      if (currentResultPrimes[key]) {
        difference = divisors[index][key] - currentResultPrimes[key];
        if (difference > 0) {
          currentResultPrimes[key] = divisors[index][key];
          currentResult *= Math.pow(key, difference);
        }
      } else {
        currentResultPrimes[key] = 1;
        currentResult *= key;
      }
    }
    index++;
  }
  
  return currentResult;
}


var getResilience = function(num, primeDivisors) {
  var count = 1;
  var isResilient;
  
  for (var i = 2; i < num; i++) {
    isResilient = true;
    for (var key in primeDivisors) {
      if (i % Number(key) === 0) {
        isResilient = false;
        break;
      }
    }
    if (isResilient) {
      count++;
    }
  }

  return count/(num-1);
}



console.log(checkResilience(15499/94744));












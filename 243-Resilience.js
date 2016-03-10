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




var primeFactorizationSieve = function(limit) {
  var allNums = [];
  var power;

  for (var i = 0; i <= limit; i++) {
    allNums.push([i, {}, 0]);
  }

  for (var j = 2; j <= limit; j++) {
    //j is making sure we get prime factors for all numbers
    //k is getting the prime factors
    var k = 2;
    while (k <= j) {
     if (allNums[j][0] % k === 0) {
        if (allNums[j][1][k]) {
          allNums[j][1][k]++;
          //increasing the length (so I know if it's prime or not)
          allNums[j][2]++;
        } else {
          allNums[j][1][k] = 1;
          //increasing the length (so I know if it's prime or not)
          allNums[j][2]++;
        }
        allNums[j][0] = allNums[j][0]/k;
      } else {
        k++;
      }
    }
  }

  var divisors = [];
  //var primesArr = [];
  //var primesObj = {};

  for (var m = 0; m < allNums.length; m++) {
    divisors.push(allNums[m][1]);
    //if (allNums[m][2] === 1) {
      //primesArr.push(m);
      //primesObj[m] = true;
    //}
  }

  return divisors;
  //return [divisors, primesObj];
  //return [divisors, primesArr, primesObj];
}



var checkResilience = function(limit) {
  var divisors = primeFactorizationSieve(1000);
  //var sieve = primeFactorizationSieve(1000);
  //var divisors = sieve[0];
  //var primesArr = sieve[1];
  //var primesObj = sieve[2];

  var currentResult = 1;
  var currentResultPrimes = {};
  var currentResultPrimesArray = [];
  var index = 2;
  var difference, newResilience;
  var alreadyChecked = {};


  var getResilience = function(num, primeDivisors) {

    //count starts at 1 because 1/x will always be resilient
    var count = 0;
    var allNums = [];

   //making that sieve yo
    for (var i = 0; i < num; i++) {
      allNums.push(i);
    }
  
    for (var j = 0; j < primeDivisors.length; j++) {
      for (var k = primeDivisors[j]; k < allNums.length; k=k+primeDivisors[j]) {
        if ((allNums[k] > 0) && (allNums[k] % primeDivisors[j] === 0)) {
           allNums[k] = 0;
        }
      }
    }

    for (var m = 0; m < allNums.length; m++) {
      if (allNums[m] > 0) {
        count++;
      }
    }

    //give it at least a count of 1 to keep it from giving NaN
    if (count === 0) {
      count = 1;
    }

    return (count)/(num-1);
  }



 
  newResilience = getResilience(currentResult, currentResultPrimesArray);
  alreadyChecked[currentResult] = newResilience;

  while (newResilience > limit) {
    console.log(currentResult, newResilience);
    for (var key in divisors[index]) {
      if (currentResultPrimes[key]) {
        difference = divisors[index][key] - currentResultPrimes[key];
        if (difference > 0) {
          currentResultPrimes[key] = divisors[index][key];
          currentResult *= Math.pow(key, difference);
        }
      } else {
        currentResultPrimes[key] = 1;
        currentResultPrimesArray.push(Number(key));
        currentResult *= key;
      }
    }
    index++;
    if (!alreadyChecked[currentResult]) {
      console.log('getting new resilience?', currentResult);
      newResilience = getResilience(currentResult, currentResultPrimesArray);
      alreadyChecked[currentResult] = newResilience;
    } else {
      newResilience = alreadyChecked[currentResult];
    }
    
  }
  
  console.log(currentResult, newResilience);
  return 'RESULT: ' + currentResult;

}



//console.log(getResilience(2520, { '2': 3, '3': 2, '5': 1, '7': 1 }, 0));
console.log(checkResilience(4/11));
//console.log(primeFactorizationSieve(12))


/*
This still doesn't work but it gets pretty high before it runs out of memory
*/








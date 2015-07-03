//PROJECT EULER: PROBLEM 357 PRIME GENERATING INTEGERS
//NOT COMPLETED

// Consider the divisors of 30: 1,2,3,5,6,10,15,30.
// It can be seen that for every divisor d of 30, d+30/d is prime.

// Find the sum of all positive integers n not exceeding 100 000 000
// such that for every divisor d of n, d+n/d is prime.



var findIntegers = function(limit) {
  var numbers = {};

  //the max number we need to find is limit + limit/limit = limit + 1
  for (var i = 1; i<=limit+1; i++) {
    //set up the numbers object by putting in all of the numbers and create an object of objects
    //where each nested object will be all of the divisors
    numbers[i] = {};

    //create a "prime" key so that we can easily check if every number is prime or not
    numbers[i]["prime"] = true;
  }

  //create the sieve of primes
  for (var j = 1; j<=limit+1; j++) {
    //j will be our divisor, i.e. is each number divisible by 37
    for (var k = j; k<=limit+1; k = k+j) {
      //k will be each number in our numbers object
      //so if j = 5, we are going all the numbers k that are divisible by 5
      if (numbers[k]["prime"] === true && j !== 1 && j !== k) {
        numbers[k]["prime"] = false;
      }
      numbers[k][j] = true;
    }
  }


  var primeGenerating = true;
  var sum;
  var sumFinal = 0;

  for (var key in numbers) {
    key = Number(key);
    for (var prop in numbers[key]) {
      if (prop !== "prime") {
        prop = Number(prop);
        sum = prop + key/prop;
        if (sum <= limit + 1 && !numbers[sum]["prime"]) {
          primeGenerating = false;
          break;
        }
      }

    }
    if (primeGenerating) {
      sumFinal += key;
    } else {
      primeGenerating = true;
    }
  }

 return sumFinal;
}


console.log(findIntegers(100000));



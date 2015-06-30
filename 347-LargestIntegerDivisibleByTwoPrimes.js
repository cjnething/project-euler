//PROJECT EULER: PROBLEM 347 LARGEST INTEGER DIVISIBLE BY TWO PRIMES
//NOT COMPLETED


// The largest integer ≤ 100 that is only divisible by both the primes 2 and 3 is 96, as 96=32*3=2^5*3. For two distinct primes p and q let M(p,q,N) be the largest positive integer ≤N only divisible by both p and q and M(p,q,N)=0 if such a positive integer does not exist.

// E.g. M(2,3,100)=96.
// M(3,5,100)=75 and not 90 because 90 is divisible by 2 ,3 and 5.
// Also M(2,73,100)=0 because there does not exist a positive integer ≤ 100 that is divisible by both 2 and 73.

// Let S(N) be the sum of all distinct M(p,q,N). S(100)=2262.

// Find S(10 000 000).


function findLargestInt(p, q, n) {
  var curr;
  var maxTotal = 0;

  if ((p * q) > n) {
    return 0;
  }

  //this is the maximum value of p under n when q has an exponent of 1
  var maxP = n/q;

  //this is the maximum value of q under n when p has an exponent of 1
  var maxQ = n/p;

  /*
  create a custom log function to find out the maximum exponent of p under maxP
  or the maximum exponent of q under maxQ
  in this function, numMax is either maxP or maxQ
  in this function, numPQ is either p or q
  this essentially figures out the largest exponent p or q could have
  */
  Math.logCustom = function(numMax, numPQ) {
    return Math.floor((Math.log(numMax)) / (Math.log(numPQ)));
  }
  
  var maxPExp = Math.logCustom(maxP, p);
  var maxQExp = Math.logCustom(maxQ, q);

  for (var i = maxPExp; i > 0; i--) {
    for (var j = maxQExp; j > 0; j--) {
      curr = Math.pow(p, i) * Math.pow(q, j);
      if (curr <= n && curr > maxTotal) {
        maxTotal = curr;
      } 
    }
  }

  return maxTotal;

}




console.log(findLargestInt(2,3,100));






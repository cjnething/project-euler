//PROJECT EULER: PROBLEM 485 MAXIMUM NUMBER OF DIVISORS
//NOT COMPLETED


// Let d(n) be the number of divisors of n.
// Let M(n,k) be the maximum value of d(j) for n ≤ j ≤ n+k-1.
// Let S(u,k) be the sum of M(n,k) for 1 ≤ n ≤ u-k+1.

// You are given that S(1000,10)=17176.

// Find S(100 000 000,100 000).

/*
u = 1000
k = 10
S(u, k) is sum of M(n, k) for 1<= n <= 991
M(n, k) is the maximum number of divisors for n<= j <=n+9

*/


function maxDivisors(n, k) {
  var divisors = [];

  //create a blank array to later fill with the sieve
  for (var index = 0; index<(n+k-1); index++) {
    divisors.push(0);
  }

  //create a sieve of the divisors count
  for (var i = 1; i<=(n+k-1); i++) {
    for (var j = i; j<=(n+k-1); j = j+i) {
      divisors[j]++
    }
  }

  
}


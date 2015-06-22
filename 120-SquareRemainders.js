//PROJECT EULER: PROBLEM 120 SQUARE REMAINDERS
//NOT COMPLETED


// Let r be the remainder when (a−1)^n + (a+1)^n is divided by a^2.

// For example, if a = 7 and n = 3, then r = 42: 6^3 + 8^3 = 728 ≡ 42 mod 49. And as n varies, so too will r, but for a = 7 it turns out that rmax = 42.

// For 3 ≤ a ≤ 1000, find ∑ r max.


function findMax(a) {
  var max = 0;
  var sum, r;

  for (var n = 1; n < a; n++) {
    sum = Math.pow((a-1), n) + Math.pow((a+1), n);
    r = sum % Math.pow(a, 2);
    if (r > max) {
      max = r;
    }
  }
  return max;
}

function findSum() {
  var sum = 0;
  var max;

  for (var a = 3; a<=1000; a++) {
    max = findMax(a);
    sum += max;
  }

  return sum;
}


console.log(findSum());

//331176145

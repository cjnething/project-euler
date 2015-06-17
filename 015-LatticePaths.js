//PROJECT EULER: PROBLEM 15 LATTICE PATHS
//COMPLETED 6/17/15
//ANSWER: 137846528820


// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?



var findPaths = function(n) {
  var alreadyFound = [];

  for (var i = 0; i<=n; i++) {
    alreadyFound.push([]);
    for (var j = 0; j<=n; j++) {
      alreadyFound[i].push(false);
    }
  }

  alreadyFound[0][0] = 0;

  var recurse = function(row, col) {
    if (row === 0 || col === 0) {
      alreadyFound[row][col] = 1;
      return alreadyFound[row][col];
    }
    else if (alreadyFound[row][col]) {
      return alreadyFound[row][col];
    }
    else {
      alreadyFound[row][col] = recurse(row-1, col) + recurse(row, col-1);
      return alreadyFound[row][col];
    }
  }
  
  return recurse(n, n);
}


console.log(findPaths(20))


// Congratulations, the answer you gave to problem 15 is correct.

// You are the 107115th person to have solved this problem.



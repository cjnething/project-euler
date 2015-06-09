//PROJECT EULER: PROBLEM 96 SU DOKU
//NOT COMPLETED

// Su Doku (Japanese meaning number place) is the name given to a popular puzzle concept. Its origin is unclear, but credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin Squares. The objective of Su Doku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that each row, column, and 3 by 3 box contains each of the digits 1 to 9. Below is an example of a typical starting puzzle grid and its solution grid.

// A well constructed Su Doku puzzle has a unique solution and can be solved by logic, although it may be necessary to employ "guess and test" methods in order to eliminate options (there is much contested opinion over this). The complexity of the search determines the difficulty of the puzzle; the example above is considered easy because it can be solved by straight forward direct deduction.

// The 6K text file, sudoku.txt (right click and 'Save Link/Target As...'), contains fifty different Su Doku puzzles ranging in difficulty, but all with unique solutions (the first puzzle in the file is the example above).

// By solving all fifty puzzles find the sum of the 3-digit numbers found in the top left corner of each solution grid; for example, 483 is the 3-digit number found in the top left corner of the solution grid above.

var grid = [
[0,0,3,0,2,0,6,0,0],
[9,0,0,3,0,5,0,0,1],
[0,0,1,8,0,6,4,0,0],
[0,0,8,1,0,2,9,0,0],
[7,0,0,0,0,0,0,0,8],
[0,0,6,7,0,8,2,0,0],
[0,0,2,6,0,9,5,0,0],
[8,0,0,2,0,3,0,0,9],
[0,0,5,0,1,0,3,0,0]];

var solver = function(grid) {
    var rows = {};
    var cols = {};

    for (var i = 0; i<9; i++) {
      rows[i] = {};
    }
    for (var j = 0; j<9; j++) {
      cols[j] = {};
    }
  for (var k = 0; k<9; k++) {
    for (var m = 0; m<9; m++) {
      if(grid[k][m] !== 0) {
          rows[k][grid[k][m]] = true;
      }   
    }
  }
  for (var n = 0; n<9; n++) {
    for (var p = 0; p<9; p++) {
      if(grid[p][n] !== 0) {
          cols[n][grid[p][n]] = true;
      }   
    }
   console.log('p', n, 'cols', cols[n]);
  }
}
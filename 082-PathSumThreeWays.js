//PROJECT EULER: PROBLEM 82 PATH SUM: THREE WAYS
//NOT COMPLETED

// NOTE: This problem is a more challenging version of Problem 81.

// The minimal path sum in the 5 by 5 matrix below, by starting in any cell in the left column and finishing in any cell in the right column, and only moving up, down, and right, is indicated in red and bold; the sum is equal to 994.

// Find the minimal path sum, in matrix.txt (right click and "Save Link/Target As..."), a 31K text file containing a 80 by 80 matrix, from the left column to the right column.


var matrixExample = [
[131, 673, 234, 103, 18],
[201, 96, 342, 965, 150],
[630, 803, 746, 422, 111],
[537, 699, 497, 121, 956],
[805, 732, 524, 37, 331]
]


var findPathSum = function(matrix) {
  for (var col = matrix.length-2; col>=0; col--) {
    for (var row = 0; row<matrix.length; row++) {
      if (col === matrix.length - 2) {
        matrix[row][col] += matrix[row][col+1];
      } else {

        if (row === 0) {
          if (matrix[row][col+1] < (matrix[row+1][col] + matrix[row+1][col+1])) {
            matrix[row][col] += matrix[row][col+1];
          } else {
            matrix[row][col] += (matrix[row+1][col] + matrix[row+1][col+1]);
          }
        } else if (row === matrix.length - 1) {
          //check the same and above
          if (matrix[row][col+1] < (matrix[row-1][col] + matrix[row-1][col+1])) {
            matrix[row][col] += matrix[row][col+1];
          } else {
            matrix[row][col] += (matrix[row-1][col] + matrix[row-1][col+1]);
          }
        } else {
          //check the same, above and below
          //if the same row is less than the one below
          if (matrix[row][col+1] < (matrix[row+1][col] + matrix[row+1][col+1])) {
            //and the same row is less than the one above
            if (matrix[row][col+1] < (matrix[row-1][col] + matrix[row-1][col+1])) {
              matrix[row][col] += matrix[row][col+1];
            //and it's smaller than the one above
            } else {
              matrix[row][col] += (matrix[row-1][col] + matrix[row-1][col+1]);
            }
            //if the one below is smaller than the current row
          } else {
              //and it's smaller than the one above
              if ((matrix[row+1][col] + matrix[row+1][col+1]) < (matrix[row-1][col] + matrix[row-1][col+1])) {
                matrix[row][col] += (matrix[row+1][col] + matrix[row+1][col+1]);
              //and it's bigger than the one above
              } else {
                matrix[row][col] += (matrix[row-1][col] + matrix[row-1][col+1]);
              }
          }
        }
      }
    }
  }
  return matrix;
}

console.log(findPathSum(matrixExample))




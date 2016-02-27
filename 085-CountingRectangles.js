//PROJECT EULER: PROBLEM 85 COUNTING RECTANGLES
//NOT COMPLETED


// By counting carefully it can be seen that a rectangular grid measuring 3 by 2 contains eighteen rectangles:

// Although there exists no rectangular grid that contains exactly two million rectangles, find the area of the grid with the nearest solution.


/*
at (0,0) you can do a 1x1, 2x1, 3x1, 1x2, 2x2, 3x2
*/

//let's say that the top corner is at (0, 0) and the last is at (height-1, width-1) and we can only make our rectangles upward

var countRectangles = function(height, width) {
  var count = 0;

  for (var x = 0; x < height; x++) {
    for (var y = 0; y < width; y++) {
      
    }
  }

  return count;
}
//PROJECT EULER: PROBLEM 81 PATH SUM: TWO WAYS
//NOT COMPLETED

// In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.


// Find the minimal path sum, in matrix.txt (right click and "Save Link/Target As..."), a 31K text file containing a 80 by 80 matrix, from the top left to the bottom right by only moving right and down.
// var matrix =
// [
//     [131, 673, 234, 103, 18],
//     [201, 96, 342, 965, 150],
//     [630, 803, 746, 422, 111],
//     [537, 699, 497, 121, 956],
//     [805, 732, 524, 37, 331]
//     ];

var matrix =
[
    [131, 673],
    [201, 96]
    ];
    
var findPaths = function(matrixCurr) {
    var currTotal = 0;
    var matrix = matrixCurr;
    var smallestTotal = 1000 * matrix.length * 2;

    
    var recurse = function(starti, startj) {
        currTotal += matrix[starti][startj];
        console.log('new', matrix[starti][startj], 'i', starti, 'j', startj, 'total', currTotal);
        if (starti === matrix.length-1 && startj === matrix.length-1 ) {
            if (currTotal < smallestTotal) {
                smallestTotal = currTotal;
                console.log('SMALLEST', smallestTotal);
            }
            currTotal = 0;
            return;
        }

            //console.log('i', starti, 'j', startj, 'currTotal', currTotal);
            if (startj + 1 < matrix.length) {
                 recurse(starti, startj+1);
            }
            if (starti + 1 < matrix.length) {
                recurse(starti+1, startj);
            }
    }
    
    recurse(0,0);
    return smallestTotal;
}

findPaths(matrix);
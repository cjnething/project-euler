//PROJECT EULER: PROBLEM 15 LATTICE PATHS
//NOT COMPLETED

// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?



var findPaths = function(nRow, nCol) {
  var alreadyFound = {};
  var routes = 1;

  for (var index = 0; index < nRow; index++) {
    alreadyFound[index] = {};
  }

  var recurse = function(i, j) {
    if (i === nRow || j === nCol) {
      return routes;
    }
    else if (alreadyFound[i][j]) {
      //return routes + alreadyFound[i][j];
      return alreadyFound[i][j];
    }
    else {
      routes++;
      if (i+1 < nRow) {
         var temp1 = findPaths(nRow - (i+1), nCol - j);
         alreadyFound[i+1][j] = temp1;
         routes += temp1;
      }
      if (j+1 < nCol) {
         var temp2 = findPaths(nRow - i, nCol - (j+1));
         alreadyFound[i][j+1] = temp2;
         routes += temp2;
      }
      if (i+1 === nRow || j+1 === nCol) {
        return routes;
      }
      
    }
  }

  recurse(0, 0);

  console.log(alreadyFound);
  return routes;
}


findPaths(2);







// var findPaths = function(n) {
//   var alreadyFound = {};
//   var alreadyChecked = {};
//   var routes = 1;
  
//    var recurse = function(i, j) {
//      if(i === n || j === n) {
//          return routes;
//      } else if (i > 0 && i === j) {
//         if(alreadyChecked[i]) {
//             return routes;
//         }
//         else if(alreadyFound[n-i]) {
//             routes += alreadyFound[n-i];
//         } else {
//             var temp = findPaths(n-i);
//             alreadyFound[n-i] = temp;
//             routes += temp;
//         }
//         alreadyChecked[i] = true;
//         return routes;
//      } else {
//          routes++;
//          recurse(i+1, j);
//          recurse(j, i+1);
//      }
     
//    }
   
//    recurse(0,0);
//   return routes;
// }


for (var i = 1; i<15; i++) {
  console.log('i', i, 'paths', findPaths(i));
}

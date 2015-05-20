// PROJECT EULER: PROBLEM 15 LATTICE PATHS
//NOT COMPLETED

// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?


var findPaths = function(n) {
  var alreadyFound = {};
  var alreadyChecked = {};
  var routes = 1;
  
   var recurse = function(i, j) {
     if(i === n || j === n) {
         return routes;
     } else if (i > 0 && i === j) {
        if(alreadyChecked[i]) {
            return routes;
        }
        else if(alreadyFound[n-i]) {
            routes += alreadyFound[n-i];
        } else {
            var temp = findPaths(n-i);
            alreadyFound[n-i] = temp;
            routes += temp;
        }
        alreadyChecked[i] = true;
        return routes;
     } else {
         routes++;
         recurse(i+1, j);
         recurse(j, i+1);
     }
     
   }
   
   recurse(0,0);
  return routes;
}
   
   recurse(0,0)
  
  return routes;
}
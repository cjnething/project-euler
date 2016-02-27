//PROJECT EULER: PROBLEM 215 CRACKED WALLS
//NOT COMPLETED
//ANSWER:


// Consider the problem of building a wall out of 2×1 and 3×1 bricks (horizontal×vertical dimensions) such that, for extra strength, the gaps between horizontally-adjacent bricks never line up in consecutive layers, i.e. never form a "running crack".

// For example, the following 9×3 wall is not acceptable due to the running crack shown in red:

// There are eight ways of forming a crack-free 9×3 wall, written W(9,3) = 8.

// Calculate W(32,10).



function findPossibilities(width, height) {
  var brickWall = [];
  var alreadySeen = {};
  var totalPossibilities = 0;

  for (var i = 0; i<height; i++) {
    brickWall.push([]);
    for (var j = 0; j<width; j++) {
      brickWall[i].push(0);
    }
  }

  function recurse (x, y) {
    if (x === width) {
      if (y < (height-1)) {
        recurse(0, (y+1));
      } else {
        alreadySeen[brickWall] = true;
        totalPossibilities++;
        //console.log(totalPossibilities, brickWall);
      }
      return;
    } 
    else if (x > width) {
      return;
    }
    else {
      if (y === 0) {
        if (x > 0) {
          brickWall[y][x] = 1;
        }
        recurse((x+2), y);
        recurse((x+3), y);
        brickWall[y][x] = 0;
      }
      else {
        if (brickWall[y-1][x] === 1) {
          return;
        }
        else {
          if (x > 0) {
            brickWall[y][x] = 1;
          }
          recurse((x+2), y);
          recurse((x+3), y);
          brickWall[y][x] = 0;
        }
      }
    }
  }

  recurse(0,0);
  //console.log(alreadySeen)
  return totalPossibilities;
}

console.log(findPossibilities(9, 1));
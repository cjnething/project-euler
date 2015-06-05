//PROJECT EULER: PROBLEM 25 1000-DIGIT FIBONACCI NUMBER
//NOT COMPLETED
//DOES NOT WORK BECAUSE OF THE BIG INT

var findIndex = function() {
  var alreadyComputated = {};
  var index = 1;
  var found = false;

  var fib = function(num) {
    if(alreadyComputated[num-1] && alreadyComputated[num-2]) {
      return alreadyComputated[num-1] + alreadyComputated[num-2];
    } else {
      if(num === 1 || num === 2) {
        return 1;
      } else {
        return fib(num-1) + fib(num-2);
      }
    }
  }

  while (!found) {
    alreadyComputated[index] = fib(index);
    if(alreadyComputated[index].length === 1000) {
      found = true;
      return index;
    } else {
      index++;
    }
  }

  return alreadyComputated;
}
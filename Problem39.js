//PROJECT EULER: PROBLEM 39 INTEGER RIGHT TRIANGLES
//COMPLETED 5/27/15 WITH NICK SIPPL-SWEZEY
//ANSWER: 840


// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

// a = 20;
// b = 48;
// c = Math.sqrt(Math.pow(20,2) + Math.pow(48, 2))

//Given a value of a and b, check if c is an integer

//a can never be more than 1/3 of p
//b is greater than a
//c is greater than b
//once we have a value for a that works, we can move on to a new value of a

//we can stop whenever b is greater than c
//we will have found all solutions for a given value of a if b >= c

var findParams = function(p){
  var a;
  var b;
  var c = p;
  //number of solutions found, given p
  var sum = 0;
    
    
    for(a = 1; a < p*(1/3); a++){
        for(b = a; b < p; b++){
            c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
            
            if(b > c){
                //exit the innter for loop
                //increment a
                b = p;
            }
            //we will have found all solutions for a given value of a if b >= c
            if (a+b+c === p && c%1 === 0){
                sum++;
            }
        }
    }
    return sum;
};


var findBestSolution = function(maxP) {
    var bestResult = 0;
    var bestP = 0;
    
    
    for (var i = 1; i<=maxP; i++) {
        if(findParams(i) > bestResult) {
            bestResult = findParams(i);
            bestP = i;
        }
    }
    
    return [bestResult, bestP];
}



// Congratulations, the answer you gave to problem 39 is correct.

// You are the 42975th person to have solved this problem.

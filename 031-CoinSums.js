//PROJECT EULER: PROBLEM 31 COIN SUMS
//NOT COMPLETED


// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

/*
Coin sum is 2 pounds = 200 pence
8 checks and subsequent decision trees
Constantly subtract from our total, total starts out at 200p
Inner recursive, pass in new total
When total value is 0, that's base case (this is solution, add to solution)
Less than zero, also base case (not a solution)
recursively pass in new value eight times

coinSums(n)

coinSums(200 - 200){
    is n === 0? if so add to count
    is n < 0? if so break out of this recursive call
    otherwise...
    
    make lots of recursive call babies
        coinSums(n - 200)
        coinSums(n - 100)
        
    
}
coinSums(200 - 100)
*/

var coinSums = function(n) {
    var counter = 0;
    debugger;
    
    var findTotal = function(num) {
        if (num === 0) {
            counter++;
            return;
        }
        else if (num < 0) {
            return;
        }
        if (num >= 200) {
            findTotal(num - 200)
        }
        if (num >= 100) {
          findTotal(num - 100)  
        }
        if (num >= 50) {
         findTotal(num - 50)   
        }
        if (num >= 20) {
         findTotal(num - 20)   
        }
        if (num >= 10) {
          findTotal(num - 10)  
        }
        if (num >= 5) {
           findTotal(num - 5) 
        }
        if (num >= 2) {
          findTotal(num - 2)  
        }
        if (num >= 1) {
           findTotal(num - 1) 
        }
        
    }
    
    findTotal(n);
    
    return counter;
}

coins = [1,2,5,10,20,50,100,200]

while(num > 0){
    num - coins[coins.length - 1];
    
}

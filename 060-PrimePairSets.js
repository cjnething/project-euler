//PROJECT EULER: PROBLEM 60 PRIME PAIR SETS
//NOT COMPLETED

// The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. 
//For example, taking 7 and 109, both 7109 and 1097 are prime. 
//The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

// Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

/*

Thoughts on how to approach: find all primes in a set (i.e. up to 1000), then try combining those primes
in a loop to see if they get along (two inner for loops) and push those pairs into an object (an object of objects)

Once those for loops are done, check each set of pairs and see if those pairs all get along

Count to find 5

Find sum

Return

*/

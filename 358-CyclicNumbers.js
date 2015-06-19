//PROJECT EULER: PROBLEM 358 CYCLIC NUMBERS
//NOT COMPLETED


// A cyclic number with n digits has a very interesting property:
// When it is multiplied by 1, 2, 3, 4, ... n, all the products have exactly the same digits, in the same order, but rotated in a circular fashion!

// The smallest cyclic number is the 6-digit number 142857 :
// 142857 × 1 = 142857
// 142857 × 2 = 285714
// 142857 × 3 = 428571
// 142857 × 4 = 571428
// 142857 × 5 = 714285
// 142857 × 6 = 857142

// The next cyclic number is 0588235294117647 with 16 digits :
// 0588235294117647 × 1 = 0588235294117647
// 0588235294117647 × 2 = 1176470588235294
// 0588235294117647 × 3 = 1764705882352941
// ...
// 0588235294117647 × 16 = 9411764705882352

// Note that for cyclic numbers, leading zeros are important.

// There is only one cyclic number for which, the eleven leftmost digits are 00000000137 and the five rightmost digits are 56789 (i.e., it has the form 00000000137...56789 with an unknown number of digits in the middle). Find the sum of all its digits.



/*
Pseudocode:
1.) Create a method that checks if it is cyclical or not
    - Create an object of all digits of a number
    - Make sure that every iteration (i.e. n * 4) has the same digits
    - Make sure that every iteration does not have digits not in the original
    - Return whether or not it is cyclical
2.) Iterate through every possible number starting with "00000000137" and ending in "56789" and check if it is cyclical
3.) Return the cyclical number
*/
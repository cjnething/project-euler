//PROJECT EULER: PROBLEM  17 NUMBER LETTER COUNTS
//COMPLETED 4/30/15
//ANSWER: 21124


//If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
//Do not include spaces or hyphens, but do include "and"

var numberLetterCounts = function() {
    var result = 0;
    var digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "and"];
    for (var i = 0; i<digits.length; i++) {
        result += digits[i].length * 10;
    }
    for (var j = 0; j<8; j++) {
        result += tens[j].length * 10;
        for (var k = 0; k<9; k++) {
            result += (tens[j].length + digits[k].length) * 10;
        }
    }
    
    for (var k = 0; k<9; k++) {
        result += (digits[k].length + tens[8].length) * 100;
    }
    
    result += tens[10].length * 99 * 9;
    
    result += digits[0].length + tens[9].length;
    
    return result;
}
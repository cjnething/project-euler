//PROJECT EULER: PROBLEM 9 SPECIAL PYTHAGOREAN TRIPLET
//COMPLETED 4/30/15
//ANSWER: 31875000

//There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

var findTriple = function() {
    for (var a = 1; a<998; a++) {
        for (var b = 1; b<998; b++) {
            var c = Math.sqrt((a*a) + (b*b));
            if (a + b + c === 1000) {
                return a*b*c;
            }
        }
    }
}
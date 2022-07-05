// Warmup-2 -- stringTimes
// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

// Examples

// stringTimes('Hi', 2) → HiHi
// stringTimes('Hi', 3) → HiHiHi
// stringTimes('Hi', 1) → Hi



function stringTimes(str, n){
    let str1 = "";
    while(n--){
      str1 += str;
    }
    return str1;
  }


console.log(stringTimes('Hi', 2));
console.log(stringTimes('Hi', 3));
console.log(stringTimes('Hi', 1));
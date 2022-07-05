// Warmup-2 -- frontTimes
// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.

// Examples

// frontTimes('Chocolate', 2) → ChoCho
// frontTimes('Chocolate', 3) → ChoChoCho
// frontTimes('Abc', 3) → AbcAbcAbc


function frontTimes(str, n){
    let f = str;
    let str1 = "";
    if(str.length > 3){
      f = str.substring(0,3);
    }
    for(let i = 0; i<n; i++){
      str1 += f;
    }
    return str1;
  }


console.log(frontTimes('Chocolate', 2));
console.log(frontTimes('Chocolate', 3));
console.log(frontTimes('Abc', 3));
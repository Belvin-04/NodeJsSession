// Warmup-1 -- posNeg
// Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

// Examples

// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

function posNeg(a, b, negative){
    let pos = 0,neg = 0;
    if(a > 0){pos++}else{neg++}
    if(b > 0){pos++}else{neg++}
    if(negative){
      return neg == 2;
    }
    else{
      return (pos == 1 && neg == 1);
    }
  }

  console.log(posNeg(1,-1,false));
  console.log(posNeg(-1,1,false));
  console.log(posNeg(-4,-5,true));
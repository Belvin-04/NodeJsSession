// Warmup-2 -- stringX
// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

// Examples

// stringX('xxHxix') → xHix
// stringX('abxxxcd') → abcd
// stringX('xabxxxcdx') → xabcdx

function stringX(str){
    let str1 = str.replaceAll("x","");
    if(str[0] == "x"){str1 = "x"+str1;}
    if(str[str.length-1] == "x"){str1 = str1+"x";}
    return str1;
  }



console.log(stringX('xxHxix'));
console.log(stringX('abxxxcd'));
console.log(stringX('xabxxxcdx'));
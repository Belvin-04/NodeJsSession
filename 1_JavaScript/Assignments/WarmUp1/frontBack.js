// Warmup-1 -- frontBack
// Given a string, return a new string where the first and last chars have been exchanged.

// Examples

// frontBack('code') → eodc
// frontBack('a') → a
// frontBack('ab') → ba

function frontBack(str){
    if(str.length == 0 || str.length == 1){
      return str;
    }
    let f = str[0],b = str[str.length-1];
    let extractedString = str.substring(1,str.length-1);
    let str1 = b+extractedString+f;
    return str1;
  }

  console.log(frontBack('code'));
  console.log(frontBack('a'));
  console.log(frontBack('ab'));
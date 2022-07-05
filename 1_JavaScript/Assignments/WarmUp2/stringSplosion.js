// Warmup-2 -- stringSplosion
// Given a non-empty string like "Code" return a string like "CCoCodCode".

// Examples

// stringSplosion("Code") -> CCoCodCode

function stringSplosion(str){
    let str1 = "";
    for(let i = 0; i<str.length; i++){
      for(let j = 0; j<=i; j++){
        str1 += str[j];
      }
    }
    return str1;
  }

console.log(stringSplosion("Code"));

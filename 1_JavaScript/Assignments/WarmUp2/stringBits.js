// Warmup-2 -- stringBits
// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

// Examples

// stringBits('Hello') → Hlo
// stringBits('Hi') → H
// stringBits('Heeololeo') → Hello


function stringBits(str){
    let str1 = ""
    for(let i = 0; i<str.length; i=i+2){
      str1 = str1 + str[i];
    }
    return str1;
  }


console.log(stringBits('Hello'));
console.log(stringBits('Hi'));
console.log(stringBits('Heeololeo'));
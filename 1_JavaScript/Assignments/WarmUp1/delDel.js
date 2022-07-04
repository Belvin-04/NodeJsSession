// Warmup-1 -- delDel
// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

// Examples

// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel

function delDel(str){
    let isDel = (str[1]+str[2]+str[3]) == "del";
    if(isDel){
      return str[0]+str.substring(4);
    }
    return str;
  }

  console.log(delDel('adelbc'));
  console.log(delDel('adelHello'));
  console.log(delDel('abcdel'));
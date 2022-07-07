function doubleChar(str){
    let str1 = "";
    for(let i = 0; i<str.length; i++){
      str1 = str1 + str[i]+str[i];
    }
    return str1;
  }
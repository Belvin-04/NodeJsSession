function atFirst(str){
    let str1 = str.substr(0,2);
    if(str1.length == 0){
      return "@@";
    }
    else if(str.length == 1){return str1+"@"}
    return str1
  }
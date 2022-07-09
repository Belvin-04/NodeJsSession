function starBit(str){
    if(str[0] == "*"){
      return str[0];
    }
    if(str.indexOf("-") == -1 || str[0] == "-"){
      return str[0]+starBit(str.substring(1));
    }
    return starBit(str.substring(1));
  }
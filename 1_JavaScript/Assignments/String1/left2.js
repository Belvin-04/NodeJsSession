function left2(str){
    if(str.length <= 2){
      return str;
    }
    let str1 = str.substring(0,2);
    let str2 = str.substring(2);
    return str2+str1;
  }
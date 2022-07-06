function right2(str){
    if(str.length <= 2){
      return str;
    }
    let str1 = str.substring(str.length-2);
    let str2 = str.substring(0,str.length-2);
    return str1+str2;
  }
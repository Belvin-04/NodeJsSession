function xyzThere(str){
    let str1 = str;
    let i = str1.indexOf("xyz");
    while(i != -1){
      if(str1[i-1] != "."){
        return true;
      }
      str1 = str1.substring(i+3);
      i = str1.indexOf("xyz");
    }
    return false;
  }
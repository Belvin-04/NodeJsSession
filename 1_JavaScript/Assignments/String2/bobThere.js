function bobThere(str){
    let str1 = str;
    let i = str1.indexOf("b");
    while(i != -1){
      if(str1[i+2] == "b"){
        return true
      }
      str1 = str1.substring(i+2);
      i = str1.indexOf("b");
    }
    return false;
  }
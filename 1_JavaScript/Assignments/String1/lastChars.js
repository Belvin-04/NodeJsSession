function lastChars(a, b){
    let str = "@@";
    if(a.length != 0){
      str = str.replace("@",a[0]);
    }
    if(b.length != 0){
      str = str.substring(0,str.length-1);
      str = str+b[b.length-1];
    }
    return str;
  }
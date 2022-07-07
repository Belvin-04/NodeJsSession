function countHi(str){
    let count = 0,str1 = str;
    while(str1.indexOf("hi") != -1){
      count++;
      str1 = str1.substring(0,str1.indexOf("hi"))+str1.substring(str1.indexOf("hi")+2);
    }
    
    return count;
  }
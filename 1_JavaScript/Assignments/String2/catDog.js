function catDog(str){
    let catCount = 0,dogCount = 0,str1 = str,str2 = str;
    while(str1.indexOf("cat") != -1){
      catCount++;
      str1 = str1.substring(0,str1.indexOf("cat"))+str1.substring(str1.indexOf("cat")+3);
    }
    while(str2.indexOf("dog") != -1){
      dogCount++;
      str2 = str2.substring(0,str2.indexOf("dog"))+str2.substring(str2.indexOf("dog")+3);
    }
    
    return catCount == dogCount;
  }
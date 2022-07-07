function equalIsNot(str){
    let isCount = 0,notCount = 0,str1 = str,str2 = str;
    while(str1.indexOf("is") != -1){
      isCount++;
      str1 = str1.substring(0,str1.indexOf("is"))+str1.substring(str1.indexOf("is")+2);
    }
    while(str2.indexOf("not") != -1){
      notCount++;
      str2 = str2.substring(0,str2.indexOf("not"))+str2.substring(str2.indexOf("not")+3);
    }
    
    return isCount == notCount;
  }
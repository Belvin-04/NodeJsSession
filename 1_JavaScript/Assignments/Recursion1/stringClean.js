function stringClean(str){
    if(str.length == 0){
      return "";
    }
    if(str[0]==str[1]){
      return stringClean(str.substring(1))
    }
    return str[0]+stringClean(str.substring(1))
  }
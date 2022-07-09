function endX(str){
    if(str.length == 0){
      return "";
    }
    if(str[0] == "x"){
      return endX(str.substring(1))+str[0];
    }
    return str[0]+endX(str.substring(1));
    
  }
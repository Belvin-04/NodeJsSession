function allStar(str){
    if(str.length == 0){return ""}
    if(str.length == 1){return str[0];}
    return str[0]+"*"+allStar(str.substring(1))
  }
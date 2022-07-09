function noX(str){
    if(str.length == 0){return "";}
    if(str.length == 1){return (str[0]=="x")?"":str}
    return (str[0]=="x")?""+noX(str.substring(1)):str[0]+noX(str.substring(1))
  }
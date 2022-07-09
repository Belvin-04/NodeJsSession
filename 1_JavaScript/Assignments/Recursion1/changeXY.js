function changeXY(str){
    if(str.length == 0){return "";}
    if(str.length == 1){return (str[0]=="x")?"y":str[0]}
    return (str[0]=="x")?"y"+changeXY(str.substring(1)):str[0]+changeXY(str.substring(1))
  }
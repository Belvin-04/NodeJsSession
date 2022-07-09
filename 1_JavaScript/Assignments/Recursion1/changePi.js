function changePi(str){
    if(str.length < 2){return str;}
    if(str.length == 2){return (str[0]+str[1]=="pi")?"3.14":str}
    if(str[0]+str[1] == "pi"){
      return "3.14"+changePi(str.substring(2));
    }
    return str[0]+changePi(str.substring(1));
  }
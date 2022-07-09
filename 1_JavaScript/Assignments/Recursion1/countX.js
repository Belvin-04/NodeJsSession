function countX(str){
    if(str.length <= 1){return (str[0]=="x")?1:0}
    return ((str[0]=="x")?1+countX(str.substring(1)):countX(str.substring(1)))
  }
function count11(str){
    if(str.length < 2){return 0}
    if(str[0]=="1" && str[1]=="1"){
      return 1+count11(str.substring(2))
    }
    return count11(str.substring(1))
  }
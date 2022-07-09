function countHi2(str){
    if(str.length < 2){
      return 0
    }
    if(str[0]+str[1]+str[2] == "xhi"){
      return countHi2(str.substring(3))
    }
    if(str[0]+str[1] == "hi"){
      return 1+countHi2(str.substring(2))
    }
    return countHi2(str.substring(1))
  }
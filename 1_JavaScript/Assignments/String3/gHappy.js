function gHappy(str){
    for(let i = 0; i<str.length; i++){
      if(str[i] == "g"){
        if(str[i+1] != "g" && str[i-1] != "g"){
          return false;
        }
      }
    }
    return true;
  }
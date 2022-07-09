function strCount(str, sub){
    if(str.indexOf(sub) == -1){
      return 0
    }
    return 1+strCount(str.substring(str.indexOf(sub)+sub.length),sub);
  }
function old35(n){
    if(n%3 == 0 || n%5 == 0){
      if(n%3 == 0 && n%5 == 0){
         return false;
      }
      return true;
    }
    return false;
    
  }
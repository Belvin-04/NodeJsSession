function no23(nums){
    for(const n of nums){
      if(n == 2 || n== 3){
         return false;
      }
    }
    return true;
  }
function shareDigit(a, b){
    let a1 = Math.floor(a/10),a2 = Math.floor(a%10),
        b1 = Math.floor(b/10),b2 = Math.floor(b%10);
    if(a1 == b1 || a1 == b2 || b1 == a2 || a2 == b2){
      return true;
    }
    return false;
  }
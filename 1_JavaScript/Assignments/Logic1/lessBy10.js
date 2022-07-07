function lessBy10(a, b, c){
    let d1 = Math.abs(a-b),d2 = Math.abs(b-c);
    let d3 = Math.abs(a-c);
    if(d1>=10 || d2>=10 || d3>=10){
      return true;
    }
    return false;
  }
function conCat(a, b){
    let aLast = a.substring(a.length - 1);
    let bLast = b.substring(0,1);
    
    if(aLast != bLast){
      return a+b;
    }
    return a+b.substring(1);
  }
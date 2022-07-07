function endOther(a, b){
    let a1 = a.toLowerCase(),b1 = b.toLowerCase();
    return a1.endsWith(b1) || b1.endsWith(a1);
  }
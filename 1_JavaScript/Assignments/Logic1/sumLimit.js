function sumLimit(a, b){
    let aLength = a.toString().length;
    let sum = a+b;
    let sumLength = sum.toString().length;
    if(sumLength == aLength){
      return sum;
    }
    return a;
  }
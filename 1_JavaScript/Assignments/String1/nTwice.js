function nTwice(str, n){
    let front = str.substring(0,n);
    let back = str.substring(str.length-n);
    return front+back;
  }
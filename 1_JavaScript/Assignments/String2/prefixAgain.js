function prefixAgain(str, n){
    let prefix = str.substr(0,n);
    let i = str.lastIndexOf(prefix);
    let j = str.indexOf(prefix);
    return j != i;
  }
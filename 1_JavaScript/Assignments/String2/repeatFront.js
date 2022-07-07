function repeatFront(str, n){
    let str1 = "";
    while(n){
      str1 += str.substring(0,n);
      n--;
    }
    return str1;
  }
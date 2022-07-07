function repeatEnd(str, n){
    let str2 = "";
    let str1 = str.substring(str.length-n);
    for(let i = 0; i<n; i++){
      str2 += str1;
    }
    return str2;
  }
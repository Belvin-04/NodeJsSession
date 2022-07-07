function repeatSeparator(word, sep, count){
    if(count == 0)return "";
    let str1 = word;
    for(let i =0; i<count-1; i++){
      str1 += sep+word;
    }
    return str1;
  }
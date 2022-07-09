function sumDigits1(n){
    let i = Math.floor(n/10);
    if(i == 0){return n}
    return n%10+sumDigits1(i);
  }
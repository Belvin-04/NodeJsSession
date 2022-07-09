function count8(n){
    let i = Math.floor(n/10);
    if(i == 0){if(n == 8){return 1;}else{return 0;}}
    if(n%100 == 88){return 2+count8(i);}
    if(n%10 == 8){return 1+count8(i);}
    if(n%10 != 8){return count8(i)}
  }
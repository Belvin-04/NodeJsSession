function count7(n){
    let i = Math.floor(n/10);
    if(i == 0){if(n == 7){return 1;}else{return 0;}}
    if(n%10 == 7){return 1+count7(i);}
    if(n%10 != 7){return count7(i)}
  }
function blueTicket(a, b, c){
    let ab = a+b,bc = b+c, ac = a+c;
    let result = 0;
    if(bc+10 == ab || ac+10 == ab){result = 5;}
    if(ab == 10 || bc == 10 || ac == 10){result = 10;}
    return result;
  }
function greenTicket(a, b, c){
    let result = 0;
    if(a==b || b==c || a==c){result = 10;}
    if(a==b && b==c){result = 20;}
    return result;
  }
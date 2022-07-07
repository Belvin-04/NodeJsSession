function redTicket(a, b, c){
    if(a==b && b==c){
      if(a==2){return 10;}else{return 5;}
    }
    if(a != b && a!=c ){
      return 1;
    }
    return 0;
  }
function teaParty(tea, candy){
    let party = 0;
    if(tea >= 5 && candy >= 5){
      party = 1;
      if(tea >= 2*candy || candy >= 2*tea){party = 2;}
    }
    return party;
  }
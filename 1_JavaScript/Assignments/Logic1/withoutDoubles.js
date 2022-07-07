function withoutDoubles(die1, die2, noDoubles){
    if(noDoubles && die1==die2){
      die2++;
      if(die2 == 7){die2 = 1}
    }
    return die1+die2;
  }
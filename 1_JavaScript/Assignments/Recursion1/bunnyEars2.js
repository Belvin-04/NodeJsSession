function bunnyEars2(bunnies){
    if(bunnies<=1){
      return 2*bunnies;
    }
    if(bunnies%2==0){return 3+bunnyEars2(bunnies-1)}
    if(bunnies%2==1){return 2+bunnyEars2(bunnies-1)}
  }
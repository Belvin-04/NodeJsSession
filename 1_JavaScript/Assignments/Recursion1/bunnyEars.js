function bunnyEars(bunnies){
    if(bunnies <= 1){
      return 2*bunnies;
    }
    return 2+bunnyEars(bunnies-1);
  }
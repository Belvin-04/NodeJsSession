function inOrderEqual(a, b, c, equalOk){
    if(equalOk){
      return (a<=b && b<=c);
    }
    return (a<b && b<c);
  }
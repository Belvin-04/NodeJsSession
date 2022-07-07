function inOrder(a, b, c, bOk){
    if(bOk){
      return (b<c);
    }
    return (b>a && b<c)
  }
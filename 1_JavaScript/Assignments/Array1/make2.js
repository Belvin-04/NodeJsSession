function make2(a, b){
    let size = a.length;
    if(size >= 2){
      return [a[0],a[1]];
    }
    if(size == 1){
      return [a[0],b[0]];
    }
    if(size == 0){
      return [b[0],b[1]];
    }
  }
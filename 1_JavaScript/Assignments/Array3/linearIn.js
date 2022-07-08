function linearIn(outer, inner){
    for(let i = 0; i<inner.length; i++){
      if(!outer.includes(inner[i])){return false;}
    }
    return true;
  }
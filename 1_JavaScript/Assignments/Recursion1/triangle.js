function triangle(rows){
    if(rows<=1){return rows;}
    return rows+triangle(rows-1);
  }
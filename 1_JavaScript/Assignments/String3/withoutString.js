function withoutString(base, remove){
    let str1 = base.replaceAll(remove.toUpperCase(),"");
    let str2 = str1.replaceAll(remove.toLowerCase(),"");
    return str2.replaceAll(remove,"");
  }
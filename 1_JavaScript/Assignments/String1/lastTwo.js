function lastTwo(str){
    if(str.length < 2){return str}
    let i = str.length-2;
    let str1 = str.substring(0,str.length-2)+str[i+1]+str[i];
    return str1;
  }
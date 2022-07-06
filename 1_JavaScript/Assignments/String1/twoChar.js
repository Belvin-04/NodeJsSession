function twoChar(str, index){
    let str1 = str.substr(index,2);
    return (str1.length < 2)?str[0]+str[1]:str1;
  }
function countYZ(str){
    let count = 0;
    for(let i = 0; i<str.length; i++){
      if(!isLetter(str[i+1]) && (str[i] == 'y' || str[i]=='z' || str[i] == 'Y' || str[i]=='Z')){
        count++;
      }
    }
    return count;
  }
  function isLetter(char){
    if((char >= "A" && char <= "Z")||((char >= "a" && char <= "z"))){
      return true;
    }
    return false;
  }
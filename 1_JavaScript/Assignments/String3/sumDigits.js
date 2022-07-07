function sumDigits(str){
    let sum = 0;
    for(let i = 0; i<str.length; i++){
      if(isDigit(str[i])){
         sum += parseInt(str[i]);
      }
    }
    return sum;
  }
  function isDigit(n){
    if(n >= "0" && n<="9"){
       return true;
    }
    return false;
  }
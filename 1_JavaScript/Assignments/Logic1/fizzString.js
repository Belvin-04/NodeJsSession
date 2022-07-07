function fizzString(str){
    let fl = str.substring(0,1);
    let ll = str.substring(str.length-1);
    let f = "Fizz";
    let b = "Buzz";
    if(fl == "f" && ll == "b"){
      return f+b;
    }
    if(fl == "f"){ 
      return f;
    }
    if(ll == "b"){
      return b;
    }
    return str;
    
  }
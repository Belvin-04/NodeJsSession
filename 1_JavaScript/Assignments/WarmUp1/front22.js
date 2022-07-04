// Warmup-1 -- front22
// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.

// Examples

// front22('kitten') → kikittenki
// front22('Ha') → HaHaHa
// front22('abc') → ababcab

function front22(str){
    let f = "";
    if(str.length == 0){
      return f;
    }
    else if(str.length == 1){
      return str+str+str;
    }
    else if(str.length > 1){
      f = str[0]+str[1];
      return f+str+f;
    } 
  }

  console.log(front22('kitten'));
  console.log(front22('Ha'));
  console.log(front22('abc'));
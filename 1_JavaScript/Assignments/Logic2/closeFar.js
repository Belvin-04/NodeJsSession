// Logic-2 -- closeFar
// Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

// Examples

// closeFar(1, 2, 10) → true
// closeFar(1, 2, 3) → false
// closeFar(4, 1, 3) → true

function closeFar(a, b, c){
    let close = 0, far = 0;
    if(Math.abs(a-b) <= 1 || Math.abs(a-c) <= 1){
      close++;
    }
    if((Math.abs(b-a) >= 2 && Math.abs(b-c) >= 2)
       ||(Math.abs(c-a) >= 2 && Math.abs(c-b) >= 2)
      ){
       far++;
    }
    
    return (close == 1 && far == 1);
  }



console.log(closeFar(1, 2, 10));
console.log(closeFar(1, 2, 3));
console.log(closeFar(4, 1, 3));
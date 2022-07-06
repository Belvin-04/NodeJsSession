// Logic-2 -- evenlySpaced
// Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

// Examples

// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

function evenlySpaced(a, b, c){
    let max,med,min;
    if(a>b){
      if(a>c){
        max = a;
      }
      else{
        max = c;
      }
    }
    else{
      if(b>c){
        max = b;
      }
      else{
        max = c;
      }
    }
    
    if(a<b){
      if(a<c){
        min = a;
      }
      else{
        min = c;
      }
    }
    else{
      if(b<c){
        min = b;
      }
      else{
        min = c;
      }
    }
    
    if((max==b)&&(min==c) || (max==c)&&(min==b)){
      med = a;
    }
    else if((max==a)&&(min==c) || (max==c)&&(min==a)){
      med = b;
    }
    else if((max==a)&&(min==b) || (max==b)&&(min==a)){
      med = c;
    }
    
    a = max;b = med;c = min;
    let diff1 = Math.abs(a-b),diff2 = Math.abs(b-c);
    return (diff1 == diff2);
  }


console.log(evenlySpaced(2, 4, 6));
console.log(evenlySpaced(4, 6, 2));
console.log(evenlySpaced(4, 6, 3));


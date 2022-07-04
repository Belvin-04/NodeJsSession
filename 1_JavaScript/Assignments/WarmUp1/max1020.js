// Warmup-1 -- max1020
// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// Examples

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11


function max1020(a, b){
    let inRangeA = (a>=10 && a<= 20);
    let inRangeB = (b>=10 && b<= 20);
    if(!inRangeA && !inRangeB){
      return 0;
    }
    else if(inRangeA && !inRangeB){
      return a;
    }
    else if(!inRangeA && inRangeB){
      return b;
    }
    else if(inRangeA && inRangeB){
      if(a>b){return a}else{return b}
    }
  }


console.log(max1020(11, 19));
console.log(max1020(19, 11));
console.log(max1020(11, 9));
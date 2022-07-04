// Warmup-1 -- icyHot
// Given two temperatures, return true if one is less than 0 and the other is greater than 100.

// Examples

// icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false

function icyHot(temp1, temp2){
    let cold = 0,hot = 0;
    if(temp1 < 0){cold++}
    if(temp1>100){hot++}
    if(temp2 < 0){cold++}
    if(temp2>100){hot++}
    
    return (cold==1 && hot==1);
  }

console.log(icyHot(120,-1));
console.log(icyHot(-1,120));
console.log(icyHot(2,120));
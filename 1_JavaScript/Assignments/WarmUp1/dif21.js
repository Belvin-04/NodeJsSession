// Warmup-1 -- diff21
// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// Examples

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0

function diff21(n){
    let answer = n-21;
    if(n < 21){
      answer *= -1;
    }
    else{
      answer *= 2;
    }
    return answer;
}

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));
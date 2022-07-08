function squareUp(n){
    let nums = [];
    let k = 0;
    let n1 = 0;
    for(let i = 0; i<n; i++){
      for(let j = 0; j<(n-i-1); j++){
        nums[k++] = 0;
      }
      n1 = i+1;
      for(let j = 0; j<(n-(n-i-1)); j++){
        nums[k++] = n1--;
      }
    }
    return nums;
  }
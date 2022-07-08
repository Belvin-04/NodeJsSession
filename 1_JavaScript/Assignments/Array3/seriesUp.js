function seriesUp(n){
    let k = 0;
    let nums = [];
    for(let i = 0; i<n; i++){
      for(let j = 0; j<=i; j++){
        nums[k++] = j+1;
      }
    }
    return nums;
  }
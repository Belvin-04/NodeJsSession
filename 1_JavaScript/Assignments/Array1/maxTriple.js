function maxTriple(nums){
    let a = nums[0],b=nums[Math.floor(nums.length/2)]
    let c=nums[nums.length-1];
    if(a>b){if(a>c){return a;}else{return c}}
    else{if(b>c){return b;}else{return c}}
  }
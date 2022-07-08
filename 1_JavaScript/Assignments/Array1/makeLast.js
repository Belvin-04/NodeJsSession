function makeLast(nums){
    let n = nums[nums.length-1];
    let nums1 = [];
    for(let i = 0; i<(2*nums.length)-1;i++){
      nums1[i] = 0;
    }
    nums1[i] = n;
    return nums1;
  }
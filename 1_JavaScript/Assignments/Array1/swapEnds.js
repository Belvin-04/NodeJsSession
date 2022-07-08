function swapEnds(nums){
    let t = nums[0];
    nums[0] = nums[nums.length - 1];
    nums[nums.length - 1] = t;
    return nums;
  }
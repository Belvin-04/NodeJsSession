function maxEnd3(nums){
    let i = (nums[0]>=nums[nums.length-1])?nums[0]:nums[nums.length-1];
    nums[0] = i;nums[1] = i;nums[2] = i;
    return nums;
  }
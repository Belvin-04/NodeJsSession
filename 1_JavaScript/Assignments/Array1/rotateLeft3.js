function rotateLeft3(nums){
    let temp = nums[0];
    nums[0] = nums[1];
    nums[1] = nums[2];
    nums[2] = temp;
    return nums;
  }
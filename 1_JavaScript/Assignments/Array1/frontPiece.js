function frontPiece(nums){
    let size = nums.length;
    if(size<2){
      return nums;
    }
    return [nums[0],nums[1]];
  }
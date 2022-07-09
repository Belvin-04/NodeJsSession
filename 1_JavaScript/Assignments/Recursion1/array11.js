function array11(nums, i){
    if(i == nums.length){
      return 0
    }
    return ((nums[i]==11)?1+array11(nums,i+1):array11(nums,i+1))
  }
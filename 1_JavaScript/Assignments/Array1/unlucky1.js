function unlucky1(nums){
    for(let i = 0; i<nums.length-1; i++){
      if(i == 0 || i==1){
        if(nums[i]==1 && nums[i+1]==3){return true}
      }
      if(i==nums.length-2){
        if(nums[i]==1 && nums[i+1]==3){return true}
      }
    }
    return false;
  }
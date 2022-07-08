function fix45(nums){
    let i4 = [],i5=[];
    
    for(let i = 0; i<nums.length; i++){
      if((nums[i] == 4 && nums[i+1]!=5) || ((nums[i] == 5 && nums[i-1]!=4))){
        if(nums[i]==4){i4.push(i+1)}
        if(nums[i]==5){i5.push(i)}
      }
    }
    for(let i = 0; i<i4.length; i++){
      let t = nums[i4[i]]
      nums[i4[i]] = nums[i5[i]]
      nums[i5[i]] = t;
    }
    return nums;
  }
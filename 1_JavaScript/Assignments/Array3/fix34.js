function fix34(nums){
    let i3 = [],i4=[];
    for(let i = 0; i<nums.length; i++){
      if(nums[i]==3){i3.push(i+1)}
      if(nums[i]==4){i4.push(i)}
    }
    for(let i = 0; i<i3.length; i++){
      let t = nums[i3[i]]
      nums[i3[i]] = nums[i4[i]]
      nums[i4[i]] = t;
    }
    return nums;
  }
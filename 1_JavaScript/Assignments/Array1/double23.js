function double23(nums){
    let twice2 = nums.indexOf(2) != nums.lastIndexOf(2);
    let twice3 = nums.indexOf(3) != nums.lastIndexOf(3);
    return twice2 || twice3;
  }
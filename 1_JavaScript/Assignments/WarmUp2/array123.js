// Warmup-2 -- array123
// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

// Examples
// array123([0,1,2,3,4]) → true
// array123([0,1,2,4,3]) → false
// array123([1,2,1,2,3]) → true


function array123(nums){
    for(let i = 0; i<nums.length-2; i++){
      if(nums[i] == 1 && nums[i+1] == 2 && nums[i+2] == 3){
        return true;
      }
    }
    return false;
  }

  console.log(array123([0,1,2,3,4]));
  console.log(array123([0,1,2,4,3]));
  console.log(array123([1,2,1,2,3]));
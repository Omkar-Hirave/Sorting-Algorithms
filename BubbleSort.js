function bubbleSort(nums) {    
    for (let i = 1; i < nums.length - 1; i++) {
      let swapped = true;
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
          let temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
          swapped = false;
        }
      }
      
      if (swapped) {
        console.log('The array is already sorted')
        break;
      }
    }
    
    return nums;
  }
  
  // Example usage
  var nums = [5, 8, 3, 1, 9];
  var nums = [ 1, 3, 5, 8, 9 ]
  console.log(bubbleSort(nums));
  
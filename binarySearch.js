function binarySearch(nums,key){
    let low = 0 
    let high = nums.length -1 
    while(low <= high){
        let mid = Math.floor(low + ((high-low)/2))
        if(nums[mid] === key){
            return mid
        }else if (key > nums[mid]){
            low = mid + 1 
        }else if (key < nums[mid]){
            high = mid - 1
        }
    }
    return -1
}

const nums = [2, 4, 6, 8, 10];
const key = 6;
console.log(binarySearch(nums, key)); 
function linearSearch(nums){
    target = 81;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === target)
            return i 
    }
    return -1
}
const nums = [3, 6, 8, 12, 4, 9];
console.log(linearSearch(nums));
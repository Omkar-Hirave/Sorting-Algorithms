function InsertionSort(nums){
    for(let i = 0 ; i < nums.length ; i++){
        let temp = nums[i]
        let j = i -1 
        while(j >= 0 && nums[j] > temp){
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = temp
    }return nums 
}
const nums = [5, 8, 3, 1, 9];
console.log(InsertionSort(nums));
function SelectionSort(nums){
    for(let i = 0 ; i < nums.length -1 ; i++){
        let minIndex = i
        for(let j = i + 1 ; j < nums.length ; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j
            }
        } 
        if(i!=minIndex){
            let temp = nums[i]
            nums[i] = nums[minIndex]
            nums[minIndex] = temp
        }
    }
    return nums
}
const nums = [5, 8, 3, 1, 9];
console.log(SelectionSort(nums));
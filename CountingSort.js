function countSort(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let count = new Array(max - min + 1).fill(0);
    // let output = new Array(arr.length);
  
    for (let i = 0; i < arr.length; i++) {
      count[arr[i] - min]++;
    }
    return count
    // for (let i = 1; i < count.length; i++) {
    //   count[i] += count[i - 1];
    // }
  
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   output[count[arr[i] - min] - 1] = arr[i];
    //   count[arr[i] - min]--;
    // }
  
    // for (let i = 0; i < arr.length; i++) {
    //   arr[i] = output[i];
    // }
  }
  
  let arr = [11, 30, 24, 7, 31, 16];
  console.log("Before sorting array elements are - ");
  console.log(arr);
  countSort(arr);
  console.log("After sorting array elements are - ");
  console.log(arr);
  
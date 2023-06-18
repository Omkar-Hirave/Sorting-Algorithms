function partition(arr, low, high) {
    const pivot = arr[low];
    let i = low;
    let j = high;
  
    while (i < j) {
      while (arr[i] <= pivot && i <= high - 1) {
        i++;
      }
  
      while (arr[j] > pivot && j >= low + 1) {
        j--;
      }
  
      if (i < j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  
    const temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
  
    return j;
  }
  
  
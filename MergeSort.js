function mergeSort(arr, low, high) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low , mid , high);
  }
}

function merge(arr,low,  mid , high) {
  let i = low;
  let j = mid + 1;
  let k = low;
  const tempArray = [];

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      tempArray[k] = arr[i];
      i++;
    } else {
      tempArray[k] = arr[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    tempArray[k] = arr[i];
    k++;
    i++;
  }

  while (j <= high) {
    tempArray[k] = arr[j];
    k++;
    j++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = tempArray[i];
  }
}
const arr = [9, 1, 4, 14, 4, 15, 6];
console.log("Before sorting array:",arr);
mergeSort(arr, 0, arr.length - 1);
console.log("After sorting array:",arr);


const quickSort = (arr) => {
  if (arr.length === 0) { return [] }

  let length   = arr.length;
  let pivot    = arr[length-1];
  let leftArr  = [];
  let rightArr = [];

  arr.forEach((element) => {
    if(element < pivot) {
      leftArr.push(element);
    } else if (element > pivot) {
      rightArr.push(element);
    }
  })

  leftArr  = quickSort(leftArr);
  rightArr = quickSort(rightArr);

  return leftArr.concat(pivot).concat(rightArr);
}

console.log(quickSort([]))
console.log(quickSort([1,2,3,4]))
console.log(quickSort([12,2,32,4]))

console.log(quickSort([12, 2, 32, 234, -34, 2, 1, -4]))

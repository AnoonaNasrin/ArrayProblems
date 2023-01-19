// find third largest number //

const array = [3, 4, 5, 23, 78, 65, 12, 90, 76, 344];
function thirdLargest(arr) {
  let first = -1,
    second = -1,
    third = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    } else if (arr[i] > third && arr[i] != first && arr[i] != second) {
      third = arr[i];
    }
  }
  return third;
}

console.log(thirdLargest(array));

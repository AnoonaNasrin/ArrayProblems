// move all zeros to end of the array O(n)//

let a = [0, 1, 2, 0, 4, 3, 0, 0, 4, 1, 9];

function moveZeros(arr) {
  let P = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[P++] = arr[i];
    }
  }
  for (let i = P; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(moveZeros(a));

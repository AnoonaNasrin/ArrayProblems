// comparing two arrays element of a2 is present in a1 return true or return false//

const arr1 = [1, 2, 3, 4];
const arr2 = [8, 5, 6, 7, 4];

function comparingArray(a1, a2) {
  let obj = {};
  let include;
  for (let i = 0; i < a1.length; i++) {
    obj[a1[i]] = obj[a1[i]];
  }

  for (let i = 0; i < a2.length; i++) {
    if (a2[i] in obj) {
      include = true;
      break;
    } else {
      include = false;
      
    }
  }
  return include;
}

console.log(comparingArray(arr1, arr2));

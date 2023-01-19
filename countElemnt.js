// count elements in  String  in O(n)//
let string = "anoona";
function countElement(str) {
  let b = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in b) {
      b[str[i]] = b[str[i]] + 1;
    } else {
      b[str[i]] = 1;
    }
  }
  return b;
}
console.log(countElement(string));

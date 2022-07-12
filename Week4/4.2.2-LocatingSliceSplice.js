const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log(arr.indexOf("a"));
console.log(arr.indexOf("b"));
console.log(arr.indexOf("c"));

// find the last index of "a", "b", and "c"
console.log(arr.lastIndexOf("a"));
console.log(arr.lastIndexOf("b"));
console.log(arr.lastIndexOf("c"));

// if the first index and last index of "a" is not the same, remove the last instance
console.log(arr.splice)

// repeat until there is just one "a"
function removeDuplicates(Array, dupVal) {
  let firstIndex = array.indexOf(dupVal);
  let lastIndex = array.lastIndexOf(dupVal);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
  };
}

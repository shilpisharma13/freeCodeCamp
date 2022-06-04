/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

const chunkArrayInGroups = (arr, size) => {
  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, size));
  }
  return res;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

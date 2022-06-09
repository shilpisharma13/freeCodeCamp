/*Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.*/

const frankenSplice = (arr1, arr2, n) => {
  const newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
};

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

console.log([1, 2, 3].splice(1, 0, 3, 4));

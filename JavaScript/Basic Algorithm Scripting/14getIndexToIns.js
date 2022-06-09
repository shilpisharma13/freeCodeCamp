/*Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.*/

const getIndexToIns = (arr, num) => {
  const newArr = arr.sort((a, b) => a - b);
  const length = arr.length;
  const getIndex = newArr.findIndex((el) => el >= num);
  if (length === 0) return 0;
  if (num > newArr[length - 1]) return length;
  return getIndex;
};

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));

/*Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

const sumAll = (arr) => {
  arr.sort((a, b) => a - b);
  let acc = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    acc += i;
  }
  return acc;
};*/

const sumAll = (arr) => {
  const [min, max] = arr.sort((a, b) => a - b);
  return min !== max ? min + sumAll([min + 1, max]) : min;
};

console.log(sumAll([1, 4]));

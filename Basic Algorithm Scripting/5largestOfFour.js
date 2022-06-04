/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.*/

//1. find the largest number
//2. find the nested-array containing the largest number
//3. find the index of the nested-array

const largestOfFour = (arr) => {
  const newArr = [];
  arr.forEach((el) => newArr.push(Math.max(...el)));
  return newArr;
};

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

//Steamroller- Flatten a nested array. You must account for varying levels of nesting.

const steamrollArray = (arr) => {
  const flatArr = [].concat(...arr);
  return flatArr.some(Array.isArray) ? steamrollArray(flatArr) : flatArr;
};

// const steamrollArray = (arr, newArr = []) => {
//   arr.forEach((element) => {
//     console.log(element);
//     if (typeof element === "number") newArr.push(element);
//     else steamrollArray(element, newArr);
//   });
//   return newArr;
// };
console.log(steamrollArray([1, [2], [3, [4]]]));
// const arr = [[3, [4]]];
// console.log(...arr);

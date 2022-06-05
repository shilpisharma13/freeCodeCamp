//Steamroller- Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  const newArr = [];
  if (arr === []) return [];

  arr.map((el) => {
    if (typeof el === "number") newArr.push(el);
  });
  newArr = arr.push(arr);
  console.log(arr);
}

console.log(steamrollArray([1, [2]]));

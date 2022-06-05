/*Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.*/

function addTogether() {
  const [x, y] = arguments;
  if (typeof x !== "number") return undefined;
  if (y === undefined) return (y) => addTogether(x, y);
  if (typeof y !== "number") return undefined;
  return x + y;
}
console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether(2)([3])); //undefined

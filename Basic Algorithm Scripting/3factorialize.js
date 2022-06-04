// Return the factorial of the provided integer.

const factorialize = (num) =>
  num === 1 || num === 0 ? 1 : num * factorialize(num - 1);

console.log(factorialize(5));

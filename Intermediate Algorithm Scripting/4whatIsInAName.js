/*Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.*/

// 1.For each element in the collection, compare it with source
// 2. If element matches with source then push element to new array
const whatIsInAName = (collection, source) => {
  const arr = [];
  collection.forEach((element) => {
    for (const val in source) {
      if (source[val] !== element[val]) return;
    }
    arr.push(element);
  });
  return arr;
};

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  })
);

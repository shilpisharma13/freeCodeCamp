/*Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target)*/

const confirmEnding = (str, target) =>
  str.split("").splice(-target.length).join("") === target;

//Updated Aproach
//const confirmEnding = (str, target) => str.endsWith(target);

console.log(confirmEnding("Bastian", "n"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
console.log(confirmEnding("Open sesame", "same"));

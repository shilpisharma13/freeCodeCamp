/*Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target)*/

const confirmEnding = (str, target) => str[str.length - 1] === target;

console.log(confirmEnding("Bastian", "n"));
confirmEnding(
  "Walking on water and developing software from a specification are easy if both are frozen",
  "specification"
);
confirmEnding("Open sesame", "same");

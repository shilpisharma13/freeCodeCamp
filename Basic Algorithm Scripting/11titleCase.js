/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.*/

const titleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));

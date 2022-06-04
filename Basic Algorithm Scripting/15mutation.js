/*Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.*/

const mutation = (arr) => {
  const newA = [...arr];
  const newArr = newA.map((el) => el.toLowerCase());
  return newArr[1].split("").every((element) => newArr[0].includes(element));
};
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["Mary", "Aarmy"]));

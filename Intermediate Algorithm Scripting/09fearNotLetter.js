/*Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/
const fearNotLetter = (str) => {
  let start = str.charCodeAt(0); // index to ASCII
  let toAdd = undefined;
  const arr = str.split("");
  arr.forEach((letter) => {
    console.log(letter, start);
    if (letter.charCodeAt(0) === start) {
      start++;
    } else {
      toAdd = String.fromCharCode(start);
    }
  });
  return toAdd;
};
// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));

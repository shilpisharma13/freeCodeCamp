/*Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).*/

const myReplace = (str, before, after) => {
  const newBefore = before.toLowerCase();
  let newAfter = after.toLowerCase();
  if (before[0] !== newBefore[0]) {
    newAfter = newAfter[0].toUpperCase() + newAfter.slice(1);
  }
  return str.replace(before, newAfter);
};

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

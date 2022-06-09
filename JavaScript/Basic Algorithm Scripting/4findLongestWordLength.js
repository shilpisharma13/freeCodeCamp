//Return the length of the longest word in the provided sentence.

const findLongestWordLength = (str) =>
  str.split(" ").reduce((acc, el) => {
    if (acc.length > el.length) {
      return acc;
    } else {
      return (acc = el);
    }
  }).length;

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

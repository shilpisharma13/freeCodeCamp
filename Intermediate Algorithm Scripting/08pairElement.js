/*DNA Pairing
Pairs of DNA strands consist of protein base pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]*/

const pairElement = (str) => {
  const pairedStr = str.split("").map((element) => {
    switch (element) {
      case "A":
        return ["A", "T"];
        break;
      case "T":
        return ["T", "A"];
        break;
      case "C":
        return ["C", "G"];
        break;
      case "G":
        return ["G", "C"];
        break;
      default:
        return "incorrect";
    }
  });
  return pairedStr;
};
console.log(pairElement("GCG"));

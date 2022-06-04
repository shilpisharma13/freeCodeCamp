/* Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.*/

const truncateString = (str, num) => {
  if (str.length <= num) return str;
  return str
    .split("")
    .splice(0, num)
    .join("")
    .padEnd(num + 3, ".");
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);

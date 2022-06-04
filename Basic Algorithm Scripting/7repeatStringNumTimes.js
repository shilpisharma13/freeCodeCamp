/* Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.*/

const repeatStringNumTimes = (str, num) => {
  let s = "";
  if (num < 1) return s;
  s = str + repeatStringNumTimes(str, num - 1);
  return s;
};

console.log(repeatStringNumTimes("abc", 3));

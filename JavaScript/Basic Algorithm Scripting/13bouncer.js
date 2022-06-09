/*Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/

const bouncer = (arr) => arr.filter((el) => !!el);

console.log(bouncer([7, "ate", "", false, 9]));

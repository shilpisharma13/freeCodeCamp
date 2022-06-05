/*Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)*/

class Person {
  constructor(firstAndLast) {
    this.firstAndLast = firstAndLast;
  }

  getFullName() {
    return this.firstAndLast;
  }

  setFullName(firstAndLast) {
    return (this.firstAndLast = firstAndLast);
  }

  getFirstName() {
    return this.firstAndLast.split(" ")[0];
  }

  setFirstName(first) {
    return (this.firstAndLast = first + " " + this.firstAndLast.split(" ")[1]);
  }

  getLastName() {
    return this.firstAndLast.split(" ")[1];
  }

  setLastName(last) {
    return (this.firstAndLast = this.firstAndLast.split(" ")[0] + " " + last);
  }
}

// const Person = function (firstAndLast) {
//   let fullName = firstAndLast;

//   this.getFirstName = function () {
//     return fullName.split(" ")[0];
//   };
//   this.getLastName = function () {
//     return fullName.split(" ")[1];
//   };
//   this.getFullName = function () {
//     return fullName;
//   };
//   this.setFirstName = function (first) {
//     fullName = first + " " + fullName.split(" ")[1];
//   };

//   this.setLastName = function (last) {
//     fullName = fullName.split(" ")[0] + " " + last;
//   };

//   this.setFullName = function (firstAndLast) {
//     fullName = firstAndLast;
//   };
// };
const bob = new Person("Bob Ross");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.setLastName("Curry"));
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFirstName());

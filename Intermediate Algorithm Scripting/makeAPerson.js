/*Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)*/

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  getFirstName = function () {
    return this.split(" ")[0];
  };
};

const bob = new Person("Bob Ross");
const firstName = bob.getFirstName;

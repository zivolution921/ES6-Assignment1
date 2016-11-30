// 1. Often we have nested functions in which we would like to preserve the context
// of this from its lexical scope. An example is shown below:
function Person(name) {
 this.name = name;
}
Person.prototype.prefixName = (arr) => {
  return arr.map(character) =>  {
    return this.name + character;
  }, this;
};
// Using Arrow Functions, the lexical value of this isn't shadowed. So re-write the
// above code using arrow function.



// 2. Create Object destructuring for user where user has: 1. First Name, 2. Last
// Name, 3. Date of Birth, then assign this object in other object like:
let obj = { first: 'Ziv', last: 'Zamechek', dob: 1988 };
let {first: f, last: l} = obj;
// Then use this object in other function to display full name with date of birth.
var user = {
  firstName: "Ziv",
  lastName: "Zamechek", 
  dob: 1988
};

let user2 {firstName: f, lastName: l, dob: dob} = user

var displayUser = (user2) => {
  console.log('My name is ${user2.firstName} ${user2.lastName} I was born in ${user2.dob}');
}

// 3. Create Array destructuring (which works for all iterable values) where you have
// all your friends name then console one by one all separately.
var foo = ["one", "two", "three"];
var [one, two, three] = foo;
console.log(one); // "one"


var friends = ["Noe", "Adam", "Mikhail", "Anthony"];
var [one, two, three, four] = friends;
console.log(one);
console.log(two);
console.log(three);
console.log(four);
// Print something
// console.log("Hello, World!");

// Single line comment
/*
    Multi-line comment
*/

// Variables
let name = "Prayush Adhikari";
const age = 22;
var isStudent = true;

// Data Types
let stringData = "This is a string.";
let numberData = 42;
let booleanData = true;
let nullData = null;
let undefinedData;

console.log("Name:" + name); // string concatenation
console.log(`Name: ${name}`); // Template literals (ES6 feature)

// Functions
function check_even_or_odd(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

if (check_even_or_odd(4)) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Arrow function
let checkEven = (number) => {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

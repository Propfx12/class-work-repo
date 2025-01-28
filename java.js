
// Answer One 
function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      const line = '#'.repeat(i);
      console.log(line);
    }
  }
 
  printPyramid(5);

//   Answer Two
let character;
let character = "Hello";
let character = 'Hello';

// Answer 3
// JavaScript describes function as a first class citizen, meaning they can me Assigned to a variable Passed to other Function and Return from other function

// Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  // Using the variable to call the function
  console.log(greet("Alice")); // Output: Hello, Alice!

  // Answer 4
//   A higher-order function is a function that either: Takes one or more functions as arguments. Returns another function as its output.

// A function that accepts another function as an argument
function applyOperation(operation, num) {
    return operation(num);
  }
  
  // A function to pass as an argument
  function square(x) {
    return x * x;
  }

  // Using the higher-order function
console.log(applyOperation(square, 5)); // Output: 25
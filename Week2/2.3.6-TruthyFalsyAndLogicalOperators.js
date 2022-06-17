// Logical Operators
// what do you expect each line to print?
console.log(true && false);     // false
console.log(true || false);     // true
console.log(!true);             // false
console.log(!(true && false));  // true
console.log(false || !false);   // true

// Logical Operators and Truthy/Falsy
// what do you expect each line to print?
console.log("" && 0);           // undefined
console.log(undefined || null); // null
console.log(!``);               // true
console.log(!(1 && "false"));   // false
console.log(NaN || !"true");    // false

let age;
age = 25;

/*
  if (age > 10) {
    console.log("full menu");
  } else {
    console.log("kids menu");
  }
*/

age > 10 ? console.log("full menu") : console.log("kids menu");

// Using only logical operators (no comparison operators),
//  write an if statement that prints...
// "The number is zero" when num is 0.

let num = 0;

// Write your if statement here *
if (!num) {
  console.log(`The number is zero`);
}

// new way to write condition
!num ? null : console.log(`The number is zero`);

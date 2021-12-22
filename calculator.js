const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const number1 = prompt("Type the first number: ");
const number2 = prompt("Type the second number: ");
const operation = prompt("Type the operation: ");
let result;
if (isNaN(number1) || isNaN(number2)) {
  console.log("invalid Please put numbers !");
} else if (operation == "+") {
  result = +number1 + +number2;
  console.log(number1, "+", number2, "=", result);
} else if (operation == "-") {
  result = +number1 - +number2;
  console.log(number1, "-", number2, "=", result);
} else if (operation == "*") {
  result = +number1 * +number2;
  console.log(number1, "*", number2, "=", result);
} else if (operation == "/") {
  result = +number1 / +number2;
  console.log(number1, "/", number2, "=", result);
}

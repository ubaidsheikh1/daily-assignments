
const userInput = prompt("Enter a number:");


const number = parseFloat(userInput);


if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
}

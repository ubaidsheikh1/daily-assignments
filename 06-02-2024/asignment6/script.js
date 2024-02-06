
const menuMessage = "Calculator Menu:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide";
alert(menuMessage);

const userChoice = prompt("Enter the number corresponding to your operation choice:");


const operationChoice = parseInt(userChoice);


if (isNaN(operationChoice) || operationChoice < 1 || operationChoice > 4) {
  console.log("Invalid choice. Please enter a number between 1 and 4.");
} else {
  
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));

  
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Invalid input. Please enter valid numbers.");
  } else {
    
    let result;
    switch (operationChoice) {
      case 1:
        result = firstNumber + secondNumber;
        console.log(`Result of addition: ${result}`);
        break;
      case 2:
        result = firstNumber - secondNumber;
        console.log(`Result of subtraction: ${result}`);
        break;
      case 3:
        result = firstNumber * secondNumber;
        console.log(`Result of multiplication: ${result}`);
        break;
      case 4:
        if (secondNumber !== 0) {
          result = firstNumber / secondNumber;
          console.log(`Result of division: ${result}`);
        } else {
          console.log("Division by zero is not allowed.");
        }
        break;
    }
  }
}


function add(x, y) {
    return x + y;
  }
  
  
  function subtract(x, y) {
    return x - y;
  }
  
  
  function multiply(x, y) {
    return x * y;
  }
  
  
  function divide(x, y) {
    if (y !== 0) {
      return x / y;
    } else {
      return "Cannot divide by zero";
    }
  }
  
  
  function calculator(operator, x, y) {
    switch (operator) {
      case '+':
        return add(x, y);
      case '-':
        return subtract(x, y);
      case '*':
        return multiply(x, y);
      case '/':
        return divide(x, y);
      default:
        return "Invalid operator";
    }
  }
  
  
  var operator = prompt("Enter operator (+, -, *, /):");
  var num1 = parseFloat(prompt("Enter first number:"));
  var num2 = parseFloat(prompt("Enter second number:"));
  
  var result = calculator(operator, num1, num2);
  console.log("Result: " + result);
  


const valuesToTest = [
    prompt("Enter an empty string:"),
    prompt("Enter the number 0:"),
    prompt("Enter null:"),
    prompt("Enter undefined:"),
    prompt("Enter NaN:"),
    prompt("Enter the boolean value false:"),
    prompt("Enter a non-empty string:"),
    prompt("Enter any number other than zero:")
  ];
  
  
  for (const value of valuesToTest) {
    if (value) {
      console.log(`"${value}" is truthy.`);
    } else {
      console.log(`"${value}" is falsy.`);
    }
  }
  

const principal = parseFloat(prompt("Enter the principal amount:"));


const rate = parseFloat(prompt("Enter the rate of interest per annum:"));


const time = parseFloat(prompt("Enter the time period in years:"));


const simpleInterest = (principal * rate * time) / 100;


console.log("Simple Interest:", simpleInterest);

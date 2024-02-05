let num=parseFloat(prompt("enter the number"));
let initial_unit=prompt("enter the unit to convert from");
let final_unit=prompt("Enter the unit to convert to");

if(initial_unit==="km" && final_unit==="miles")
{
    console.log(num*0.621371,"miles")
}
else if(initial_unit==="celsius" && final_unit==="fehrenheit")
{
    console.log((num*9/5)+32,"fehrenheit");
}
else{
    console.log("invalid unit conversion");
}

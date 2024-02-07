function sumValidNumbers(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  
  // Example usage:
  const mixedArray = [1, 'two', 3, 'four', 5, 'six', true, null, undefined, 9];
  const result = sumValidNumbers(mixedArray);
  console.log("Sum of valid numbers:", result);
  
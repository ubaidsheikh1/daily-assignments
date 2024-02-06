function playNumberGuessingGame() {
  console.log("Welcome to the Number Guessing Game!");
  
  do {
    
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let numberOfGuesses = 0;
    let playerGuess;

    console.log("I've selected a random number between 1 and 100. Can you guess it?");

    
    while (true) {
      playerGuess = parseInt(prompt("Enter your guess:"));

      if (isNaN(playerGuess)) {
        console.log("Please enter a valid number.");
      } else {
        numberOfGuesses++;

        if (playerGuess < targetNumber) {
          console.log("Too low! Try again.");
        } else if (playerGuess > targetNumber) {
          console.log("Too high! Try again.");
        } else {
          console.log(`Congratulations! You guessed the number in ${numberOfGuesses} attempts.`);
          break;
        }
      }
    }

    
    const playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();

    if (playAgain !== 'yes') {
      console.log("Thanks for playing. Goodbye!");
      break;
    }

  } while (true);
}


playNumberGuessingGame();



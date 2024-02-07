
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  function playRound() {
    const targetNumber = getRandomNumber(1, 10);
    let attempts = 0;
  
    while (true) {
      const guess = parseInt(prompt("Guess the number between 1 and 10:"));
  
      if (isNaN(guess)) {
        alert("Please enter a valid number.");
        continue;
      }
  
      attempts++;
  
      if (guess === targetNumber) {
        alert(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
        return attempts;
      } else {
        alert("Incorrect guess. Try again.");
      }
    }
  }
  
  
  function runGame() {
    const numRounds = 3; 
    const scores = [];
  
    for (let round = 1; round <= numRounds; round++) {
      alert(`Round ${round}`);
      const roundScore = playRound();
      scores.push(roundScore);
    }
  
    alert("Game Over! Here are the scores from each round:\n" + scores.join(', '));
  }
  
  
  runGame();
  
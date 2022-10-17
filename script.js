const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const choices = [rock, paper, scissors];

const resolution = document.querySelector(".resolution");
const playerPickDisplay = document.querySelector(".player-pick");
const playerScoreDisplay = document.querySelector(".player-score");
const cpuPickDisplay = document.querySelector(".cpu-pick");
const cpuScoreDisplay = document.querySelector(".cpu-score");
const roundNumberDisplay = document.querySelector(".round-number");

let playerScoreNumber = 0;
let cpuScoreNumber = 0;
let roundNumber = 1;

rock.addEventListener("click", () => {
   return compareSelection(rock);
});
paper.addEventListener("click", () => {
   return compareSelection(paper);
});
scissors.addEventListener("click", () => {
   return compareSelection(scissors);
});

/**
 *
 * @returns Random number (0, 1, or 2)
 */
const getComputerChoice = () => {
   return choices[Math.floor(Math.random() * 3)];
};

const updateDisplay = (playerChoice, cpu) => {
   choices.forEach((e) => {
      if (e.classList) {
         e.classList.remove("player-active", "cpu-active");
      }
   });

   if (playerChoice === rock) {
      playerPickDisplay.textContent = "rock";
      rock.classList.add("player-active");
   } else if (playerChoice === paper) {
      playerPickDisplay.textContent = "paper";
      paper.classList.add("player-active");
   } else {
      playerPickDisplay.textContent = "scissors";
      scissors.classList.add("player-active");
   }

   if (cpu === rock) {
      cpuPickDisplay.textContent = "rock";
      rock.classList.add("cpu-active");
   } else if (cpu === paper) {
      cpuPickDisplay.textContent = "paper";
      paper.classList.add("cpu-active");
   } else {
      cpuPickDisplay.textContent = "scissors";
      scissors.classList.add("cpu-active");
   }
};

/**
 * Determines win or loss based on player and cpu selection
 * @param {*} playerChoice
 */
const compareSelection = (playerChoice) => {
   const cpu = getComputerChoice();
   updateDisplay(playerChoice, cpu);

   if (playerChoice === cpu) {
      resolution.textContent = "Tie!";
      resolution.style.color = "#fabb5a";
      return tieRound();
   } else if (
      (playerChoice === rock && cpu === paper) ||
      (playerChoice === paper && cpu === scissors) ||
      (playerChoice === scissors && cpu === rock)
   ) {
      resolution.textContent = "You lose!";
      resolution.style.color = "#fc7634";
      return loseRound();
   } else {
      resolution.textContent = "You win!";
      resolution.style.color = "#00FFFF";
      return winRound();
   }
};

const tieRound = () => {
   roundNumberDisplay.textContent = ++roundNumber;
};

const winRound = () => {
   playerScoreDisplay.textContent = ++playerScoreNumber;

   roundNumberDisplay.textContent = ++roundNumber;

   if (playerScoreNumber === 5) {
      return resetGame();
   }
};

const loseRound = () => {
   cpuScoreDisplay.textContent = ++cpuScoreNumber;

   roundNumberDisplay.textContent = ++roundNumber;

   if (cpuScoreNumber === 5) {
      return resetGame();
   }
};

const resetGame = () => {
   if (playerScoreNumber === 5) {
      resolution.textContent = "You won the game! Click to play again.";
      resolution.style.color = "#00ffff";
   } else {
      resolution.textContent = "You lost the game! Click to try again.";
      resolution.style.color = "#fc7634";
   }

   playerScoreNumber = 0;
   cpuScoreNumber = 0;
   roundNumber = 0;

   playerScoreDisplay.textContent = playerScoreNumber;
   cpuScoreDisplay.textContent = cpuScoreNumber;
   roundNumberDisplay.textContent = roundNumber;
   choices.forEach((e) => {
      if (e.classList) {
         e.classList.remove("player-active", "cpu-active");
      }
   });
};

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScoreElement = document.getElementById("user-score");
const compScoreElement = document.getElementById("comp-score");
const userAttemptsElement = document.getElementById("user-rem-attempts");
const compAttemptsElement = document.getElementById("comp-rem-attempts");
const newGameBtn = document.getElementById("new-game");
let userScore = 0;
let computerScore = 0;
let userAttempts = 10;
let compAttempts = 10;

function newGame() {
  userScore = 0;
  computerScore = 0;
  userAttempts = 10;
  compAttempts = 10;
  userAttemptsElement.innerText = '10';
  compAttemptsElement.innerText = '10';
  msg.innerText = 'Play your move';
  msg.style.backgroundColor = '#e0eb10e3';
  userScoreElement.innerText = '0';
  compScoreElement.innerText = '0';
  choices.forEach((choice) => {
    choice.addEventListener("click", handleChoiceClick); // reference of handleChoiceClick()
  });
}
function buttonClick() {
  newGame();
}
newGameBtn.addEventListener("click", buttonClick);
//Generating Computer Choice
function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3); // Generating number between 0 to 2
  return choices[randomIdx];
}

//When game is draw.
function drawGame() {
  msg.innerText = `Game is draw.`;
  msg.style.backgroundColor = "#ffd700";
}

//Showing Winner
function showWinner(userWin, userChoice, computerChoice) {
  if (userWin) {
    userScore++;
    msg.innerText = `You win! ${userChoice} beats ${computerChoice}.`;
    msg.style.backgroundColor = "green";
    userScoreElement.innerText = userScore;
  } else {
    computerScore++;
    msg.innerText = `You lost! ${computerChoice} beats ${userChoice}.`;
    msg.style.backgroundColor = "red";
    compScoreElement.innerText = computerScore;
  }
}

// Checking winner
function checkWinner(userChoice, computerChoice) {
  let userWin = true;
  if (userChoice === computerChoice) {
    drawGame();
  } else if (userChoice === "rock") {
    // Computer choices are - paper or scissor
    userWin = computerChoice === "paper" ? false : true; // Can also do | computerChoice === 'paper' ? !userChoice : userChoice
  } else if (userChoice === "paper") {
    // Computer choices are - rock or scissor
    userWin = computerChoice === "scissors" ? false : true; // false : truw should be align so make condition like so that computer win  and false is set to user[means user loss]
  } else {
    //User choice must be scissors
    //Computer choices are - rock or paper
    userWin = computerChoice === "rock" ? false : true;
  }
  if (userChoice != computerChoice) {
    // This condition is neccesary other wise userWin allways set to true and we get scissors beats scissors situation.
    showWinner(userWin, userChoice, computerChoice);
  }

  // if (userAttempts >= 0 && compAttempts >= 0) {
  //   if (!(userAttempts === 0 && compAttempts === 0)) {
  //     userAttempts--;
  //     compAttempts--;
  //   }
  //   userAttemptsElement.innerText = userAttempts;
  //   compAttemptsElement.innerText = compAttempts;
  // }

  //Same as above but in different way.
  if (userAttempts > 0 || compAttempts > 0) {
    userAttempts--;
    compAttempts--;
    userAttemptsElement.innerText = userAttempts;
    compAttemptsElement.innerText = compAttempts;
  }

  if (userAttempts === 0 && compAttempts === 0) {
    // Disable choices after the maximum number of attempts
    choices.forEach((choice) => {
      choice.removeEventListener("click", handleChoiceClick);
      choice.style.pointerEvents = "none"; // Disable click events
    });
    msg.innerText = "Out of attempts. Game over!";
  }
}

// Define handleChoiceClick function
function handleChoiceClick(e) {
  // Getting user choice
  const userChoice = e.target.parentNode.id;

  // Getting computer choice
  const computerChoice = generateComputerChoice();

  //Check Winner
  checkWinner(userChoice, computerChoice);
}

//Adding click event on every choices which is div.
choices.forEach((choice) => {
  choice.addEventListener("click", handleChoiceClick); // reference of handleChoiceClick()
});

//If we write handleChoiceClick() function in above .addEventListener().
//Then handleChoiceClick fucntion is only accesible to .addEventListener() -> this scope
//If we use handleChoiceClick here in this code ->  choice.removeEventListener("click", handleChoiceClick);
//then we will not able to access handleChoiceClick -> this error will be come -> Uncaught ReferenceError: handleChoiceClick is not defined

//So use this type of code and define function above and reference here in this code.  choice.addEventListener("click",  handleChoiceClick);


//------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------Below code is how I can write  my code--------------------------------------------------------------------------

// but there is some problem in code fuctionality wise
// When new game button is clicked msg-container msg is not changing to- >  Play your move

// const choices = document.querySelectorAll(".choice");
// const msg = document.getElementById("msg");
// const userScoreElement = document.getElementById("user-score");
// const compScoreElement = document.getElementById("comp-score");
// const userAttemptsElement = document.getElementById("user-rem-attempts");
// const compAttemptsElement = document.getElementById("comp-rem-attempts");
// const newGameBtn = document.getElementById("new-game");

// const COLORS = {
//   DRAW: "#ffd700",
//   WIN: "green",
//   LOSS: "red",
//   DEFAULT: "#e0eb10e3",
// };

// let userScore = 0;
// let computerScore = 0;
// let userAttempts = 10;
// let compAttempts = 10;

// function updateUI() {
//   userAttemptsElement.innerText = userAttempts;
//   compAttemptsElement.innerText = compAttempts;
//   userScoreElement.innerText = userScore;
//   compScoreElement.innerText = computerScore;
//   msg.innerText = message;
//   msg.style.backgroundColor = messageColor;
// }

// function updateMessage(result, userChoice, computerChoice) {
//   switch (result) {
//     case "draw":
//       setMessage("Game is draw.", COLORS.DRAW);
//       break;
//     case "win":
//       setMessage(`You win! ${userChoice} beats ${computerChoice}.`, COLORS.WIN);
//       break;
//     case "loss":
//       setMessage(`You lost! ${computerChoice} beats ${userChoice}.`, COLORS.LOSS);
//       break;
//     default:
//       setMessage("Play your move", COLORS.DEFAULT);
//   }
// }

// function setMessage(text, color) {
//   msg.innerText = text;
//   msg.style.backgroundColor = color;
// }

// function handleChoiceClick(e) {
//   const userChoice = e.target.parentNode.id;
//   const computerChoice = generateComputerChoice();
//   checkWinner(userChoice, computerChoice);
// }

// function generateComputerChoice() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomIdx = Math.floor(Math.random() * 3);
//   return choices[randomIdx];
// }

// function drawGame() {
//   updateMessage("draw");
// }

// function showWinner(userWin, userChoice, computerChoice) {
//   if (userWin) {
//     userScore++;
//     updateMessage("win", userChoice, computerChoice);
//   } else {
//     computerScore++;
//     updateMessage("loss", userChoice, computerChoice);
//   }
// }

// function checkWinner(userChoice, computerChoice) {
//   let userWin = true;
//   if (userChoice === computerChoice) {
//     drawGame();
//   } else if (userChoice === "rock") {
//     userWin = computerChoice === "paper" ? false : true;
//   } else if (userChoice === "paper") {
//     userWin = computerChoice === "scissors" ? false : true;
//   } else {
//     userWin = computerChoice === "rock" ? false : true;
//   }

//   if (userChoice != computerChoice) {
//     showWinner(userWin, userChoice, computerChoice);
//   }

//   if (userAttempts > 0 || compAttempts > 0) {
//     userAttempts--;
//     compAttempts--;
//     updateUI();
//   }

//   if (userAttempts === 0 && compAttempts === 0) {
//     disableChoices();
//     msg.innerText = "Out of attempts. Game over!";
//   }
// }

// function enableChoices() {
//   choices.forEach((choice) => {
//     choice.addEventListener("click", handleChoiceClick);
//     choice.style.pointerEvents = "auto"; // Enable click events
//   });
// }

// function disableChoices() {
//   choices.forEach((choice) => {
//     choice.removeEventListener("click", handleChoiceClick);
//     choice.style.pointerEvents = "none"; // Disable click events
//   });
// }

// function newGame() {
//   userScore = 0;
//   computerScore = 0;
//   userAttempts = 10;
//   compAttempts = 10;
//   updateUI();
//   enableChoices();
// }

// function buttonClick() {
//   newGame();
// }

// newGameBtn.addEventListener("click", buttonClick);
// enableChoices();

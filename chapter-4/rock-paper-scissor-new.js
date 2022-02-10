


function playerChoice() {
    const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return playerChoice
  }
  
  function compChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
      compChoice = "rock";
    } else if (compChoice === 1) {
      compChoice = "paper";
    } else {
      compChoice = "scissors";
    }
    return compChoice
  }
  
  function playRound(playerChoice, compChoice) {
    //Rock Choice
    if (playerChoice == "rock") {
      if (compChoice == "scissors") {
        return "You Win! rock beats scissors!";
      } else if (compChoice == "paper") {
        return "Loser! paper Beats rock";
      } else if (compChoice == "rock") {
        return "It's a Draw";
      } else {
        return "Something Went Wrong";
      }
    }
    //paper Choice
    else if (playerChoice == "paper") {
      if (compChoice == "rock") {
        return "You Win! paper beats rock";
      } else if (compChoice == "scissors") {
        return "You Lose! scissors beats paper";
      } else if (compChoice == "paper") {
        return "It's a Draw";
      } else {
        return "Something Went Wrong";
      }
    }
    //scissors Choice
    else if (playerChoice == "scissors") {
      if (compChoice == "paper") {
        return "You win! scissors beat paper";
      } else if (playerChoice == "scissors" && compChoice == "rock") {
        return "You Lose! rock beats scissors";
      } else if (playerChoice == "scissors" && compChoice == "scissors") {
        return "It's a Draw";
      } else {
        return "Something Went Wrong";
      }
    } else {
      return "That's not a valid choice";
    }
  }
  
  console.log(playRound(playerChoice(), compChoice()))
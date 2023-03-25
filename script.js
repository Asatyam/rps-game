const choices = ['rock', 'paper', 'scissors'];


/* The function generates a prompt for user to enter his/her choice and
convert it into lowercase. The do-while loop runs until the user enters
a valid choice which is then returned. */

function getUserChoice() {
  let userChoice;
  do {
    userChoice = prompt('Enter one of your choices: Rock, Paper or Scissors');
    userChoice = userChoice.toLowerCase();
    if (!choices.includes(userChoice)) {
      alert('Invalid Choice!');
    }
  } while (!choices.includes(userChoice));
  return userChoice;
}


/* The function generates the random number between 0 and 3 and floors it.
Then, we return the choice using it as the index of the choices array */

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

/* The function compares the choices of the user and computer 
and returns the result based on the rules of the game */

function compareChoice(userChoice, computerChoice) {
  if (userChoice == 'rock') {
    if (computerChoice == 'rock') {
      return 'tie';
    } else if (computerChoice == 'paper') {
      return 'lose';
    } else return 'win';
  } else if (userChoice == 'paper') {
    if (computerChoice == 'rock') {
      return 'win';
    } else if (computerChoice == 'paper') {
      return 'tie';
    } else return 'lose';
  } else {
    if (computerChoice == 'rock') {
      return 'lose';
    } else if (computerChoice == 'paper') {
      return 'win';
    } else return 'tie';
  }
}

 /*The function gets the winner based on the scores of the players.*/
function getWinner(userScore,compScore)
{
    if(userScore > compScore){
        return "You";
    } else if (userScore < compScore){
        return "Computer";
    } else return "Tie";
}

/*The function consists of loop which run for 5 times. In each iteration we get the 
choices from the user and computer and compare them to increment the winner's score.
Finally, we display the winner or conclude that it's a tie. */

function game() {
     let userScore = 0;
     let compScore = 0;
     
  for (let i = 0; i < 5; i++) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
   
    let outcome = compareChoice(userChoice, computerChoice);

    if (outcome === 'win') {
      console.log('You win this round');
      userScore++;
    } else if (outcome === 'lose') {
      console.log('You lose this round');
      compScore++;
    } else {
      console.log('This round is a tie');
    }
  }

  const winner = getWinner(userScore, compScore);

  if (winner !== 'Tie') {
    console.log(`Winner : ${winner}`);
  } else {
    console.log('The game ends in a tie');
  }
}

game();





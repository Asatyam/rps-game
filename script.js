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



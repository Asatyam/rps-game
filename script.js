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


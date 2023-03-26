const choices = ['rock', 'paper', 'scissors'];
const main = document.querySelector('.main');


function createHeading() {
  
  const headingDiv = document.createElement('div');
  headingDiv.setAttribute('class', 'heading');
  
  const headingPara = document.createElement('p');
  headingPara.textContent = "ROCK PAPER SCISSORS";

  headingDiv.appendChild(headingPara);
  main.appendChild(headingDiv);
}

/* the index is 0 for player and 1 for computer */
function displayPoints(userScore, index){

  const user = index ? 'comp' : 'player';
  let pointsDiv = document.querySelector('.points');

  if(!pointsDiv){
    pointsDiv = document.createElement('div');
    pointsDiv.setAttribute('class', 'points');
      main.appendChild(pointsDiv);
  }

  if(round)
  {
    const userPointPara = document.querySelector(`.${user}Points:nth-child(${index+1})`);
    userPointPara.textContent = `${user.toUpperCase()} : ${userScore}`;
    return;
  }

  const userPointDiv = document.createElement('div');
  userPointDiv.setAttribute('class', `${user}Points`);

  const userPointPara = document.createElement('p');
  userPointPara.textContent = `${user.toUpperCase()} : ${userScore}`;
  
  userPointDiv.appendChild(userPointPara);
  pointsDiv.appendChild(userPointDiv);
  
}


function displayCompChoice(compChoice){

  const compChoiceDiv = document.createElement('div');
  compChoiceDiv.setAttribute('class','compChoice');

  const compChoicePara = document.createElement('p');

  if(!compChoice){
    compChoicePara.textContent = "Computer's Choice:";
  } else{
    compChoicePara.textContent =  `Computer's Choice: ${compChoice.toUpperCase()}`;
  }
   
  compChoiceDiv.appendChild(compChoicePara);
  main.appendChild(compChoiceDiv);

}

function displayUserChoices(index){

  let playerChoicesDiv = document.querySelector('.playerChoices');
  if(!playerChoicesDiv)
  {
    playerChoicesDiv = document.createElement('div');
     playerChoicesDiv.setAttribute('class', 'playerChoices');
    main.appendChild(playerChoicesDiv);
  }

  
  
  let btnValue = choices[index];

  const choiceDiv = document.createElement('div');

  const choiceBtn = document.createElement('button');
  
  choiceBtn.setAttribute('class',`${btnValue}`);

  choiceBtn.innerHTML = `<img src="./images/${btnValue}.png">`;
  choiceDiv.appendChild(choiceBtn);
  playerChoicesDiv.appendChild(choiceDiv);
  
}

/* The function generates the random number between 0 and 3 and floors it.
Then, we return the choice using it as the index of the choices array */

function getCompChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

/* The function compares the choices of the user and computer 
and returns the result based on the rules of the game */

function compareChoice(userChoice, compChoice) {
  if (userChoice == 'rock') {
    if (compChoice == 'rock') {
      return 'tie';
    } else if (compChoice == 'paper') {
      return 'lose';
    } else return 'win';
  } else if (userChoice == 'paper') {
    if (compChoice == 'rock') {
      return 'win';
    } else if (compChoice == 'paper') {
      return 'tie';
    } else return 'lose';
  } else {
    if (compChoice == 'rock') {
      return 'lose';
    } else if (compChoice == 'paper') {
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

function game(e){
  const btn =(e.target.parentElement.className);
  round++;
  let compChoice = getCompChoice();

  //displayCompChoice(compChoice);

  outcome = compareChoice(btn.className, compChoice);

  if (outcome === 'win') {
    console.log('You win this round');
    userScore++;
    console.log(`${userScore} ${compScore}`);
  } else if (outcome === 'lose') {
    console.log('You lose this round');
    compScore++;
    console.log(`${userScore} ${compScore}`);
  } else {
    console.log('This round is a tie');
    console.log(`${userScore} ${compScore}`);
  }

  displayPoints(userScore, 0);
  console.log(`${userScore} ${compScore}`);
  displayPoints(compScore, 1);
}


createHeading();

let userScore = 0;
let compScore = 0;

for (let i = 0; i < 3; i++) {
  displayUserChoices(i);
}


const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', game);
});

let outcome;
let compChoice;
let round = 0;
displayCompChoice(compChoice);


displayPoints(userScore, 0);
displayPoints(compScore, 1);





const winner = getWinner(userScore, compScore);

if (winner !== 'Tie') {
  console.log(`Winner : ${winner}`);
} else {
  console.log('The game ends in a tie');
}







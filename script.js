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
    const userPointPara = document.querySelector(`.${user}Points>p`);
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

  if(round){
    const compChoicePara = document.querySelector(".compChoice>p");
    compChoicePara.textContent = `Computer's Choice: ${compChoice.toUpperCase()}`;
    return;
  }
  const compChoiceDiv = document.createElement('div');
  compChoiceDiv.setAttribute('class','compChoice');

  const compChoicePara = document.createElement('p');

  if(!compChoice){
    compChoicePara.textContent = "Computer's Choice:";
  } else{
    
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


  if (userScore == 5 || compScore == 5) {
    return;
  }
  let outcome;
  const btn =(e.target.parentElement.className);
  round++;
  let compChoice = getCompChoice();

  displayCompChoice(compChoice);
  console.log(`${btn} ${compChoice}`);
  outcome = compareChoice(btn, compChoice);

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

  if (userScore == 5 || compScore == 5) {
    displayWinner();
    playAgain();
  }

}

function displayWinner() {
  const winnerDiv = document.createElement('div');
  const winnerPara = document.createElement('p');
  winnerDiv.setAttribute('class', 'winner');
  winnerPara.textContent = `Winner : ${
    userScore > compScore ? 'Player' : 'Computer'
  }`;
  winnerDiv.appendChild(winnerPara);
  main.appendChild(winnerDiv);
}

function playAgain(){

  const playAgainBtn = document.createElement('button');
  playAgainBtn.setAttribute('class','playAgain');  
  playAgainBtn.innerHTML = "<p>Play Again</p>";
  playAgainBtn.addEventListener('click',()=>{
    indow.location.reload(true);
  })
  main.appendChild(playAgainBtn);
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


let compChoice;
let round = 0;
displayCompChoice(compChoice);


displayPoints(userScore, 0);
displayPoints(compScore, 1);



const winner = getWinner(userScore, compScore);







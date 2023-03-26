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

  let pointsDiv = document.querySelector('.points');

  if(!pointsDiv){
    pointsDiv = document.createElement('div');
      main.appendChild(pointsDiv);
  }
   
  pointsDiv.setAttribute('class','points');

  const user = index?"comp":"player";
  
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

  compChoicePara.textContent = `Computer's Choice: ${compChoice.toUpperCase()}`;

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

  let btnValue = choices[index].toUpperCase();

  const choiceDiv = document.createElement('div');

  const choiceBtn = document.createElement('button');
  
  choiceBtn.setAttribute('class',`${btnValue.toLowerCase()}`);

  choiceBtn.textContent = btnValue;
  choiceBtn.innerHTML = `<img src='./images/${btnValue.toLowerCase()}.png'>`
  choiceDiv.appendChild(choiceBtn);
  playerChoicesDiv.appendChild(choiceDiv);
  
}

/* The function generates the random number between 0 and 3 and floors it.
Then, we return the choice using it as the index of the choices array */

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
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

/* The function generates a prompt for user to enter his/her choice and
convert it into lowercase. The do-while loop runs until the user enters
a valid choice which is then returned. */

async function getUserChoice() {
  let userChoice;

  const btns = document.querySelectorAll("button");

  btns.forEach((btn)=>{ 
    btn.addEventListener('click',(e)=>{
     userChoice = btn.className;
    })

  })

 
}

function creatGameSetting()
{
    createHeading();
    for (let i = 0; i < 3; i++) {
      displayUserChoices(i);
    }
    let userChoice;
  const btns = document.querySelectorAll('button');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      game(btn.className);
    });
  });
  return userChoice;

}
async function game(userChoice) {

     let userScore = 0;
     let compScore = 0;

    let userChoice, compChoice;
    
    
      

       compChoice = getComputerChoice();

      console.log(userChoice);
      let outcome = compareChoice(userChoice, compChoice);

      if (outcome === 'win') {
        console.log('You win this round');
        userScore++;
      } else if (outcome === 'lose') {
        console.log('You lose this round');
        compScore++;
      } else {
        console.log('This round is a tie');
      }

       displayCompChoice(compChoice);

       displayPoints(userScore, 0);
       displayPoints(compScore, 1);
    
  

  const winner = getWinner(userScore, compScore);

  if (winner !== 'Tie') {
    console.log(`Winner : ${winner}`);
  } else {
    console.log('The game ends in a tie');
  }
}

creatGameSetting();
game();





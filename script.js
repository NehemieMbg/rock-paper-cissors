let possibleChoices = document.querySelectorAll('button');
const message = document.querySelector('.message');
const rdResult = document.querySelector('.rd-result');
const playerChoice = document.querySelector('.player-choice');
const cptChoice = document.querySelector('.computer-choice');
let usrScore = document.querySelector('.usr-score');
let cptScore = document.querySelector('.cpt-score');
const restart = document.querySelector('.restart-btn')
const revealBtn = document.querySelector('.reveal-btn')
const endMessage = document.querySelector('.end-message')

let result;
let computerChoice;
let userSelection;
let player = 0;
let ai = 0;

function reloadPage() {
	location.reload()
}
restart.addEventListener('click', reloadPage);


// Start the game a soon as the user click on a button
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
	userSelection = e.target.classList;

	for (choice of userSelection) {
		if (choice === 'rock') {
			playerChoice.innerText = '👊';
		} else if (choice === 'paper') {
			playerChoice.innerText = '🖐';
		} else if (choice === 'scissors') {
			playerChoice.innerText = '✌️';
		}
	}

	getComputerChoice();
	playRound();
	game();
}))

// Generates a random choice for the computer
function getComputerChoice() {

	let computer = Math.floor(Math.random() * 3)

	if (computer === 0) {
		cptChoice.innerText = '👊'
		return "rock";
	}
	if (computer === 1) {
		cptChoice.innerText = '🖐'
		return "paper"
	}
	if (computer === 2) {
		cptChoice.innerText = '✌️'
		return "scissors"
	}
}

// Display the result of the current round
function playRound(playerSelection, computerSelection) {

	computerSelection = getComputerChoice();
	playerSelection = userSelection.toString();

	// Rock and Scissors
	if (playerSelection === "rock" && computerSelection === "scissors") {
		rdResult.innerText = 'You Win!';
		message.innerText = `${playerSelection} beats ${computerSelection}.`;
		usrScore.innerText = player += 1
	}
	else if (playerSelection === "scissors" && computerSelection === "rock") {
		rdResult.innerText = 'You Lose!';
		message.innerText = `${computerSelection} beats ${playerSelection}.`;
		cptScore.innerText = ai += 1
	}

	// Paper and Rock
	else if (playerSelection === "paper" && computerSelection === "rock") {
		rdResult.innerText = 'You Win!';
		message.innerText = `${playerSelection} beats ${computerSelection}.`;
		usrScore.innerText = player += 1
	}
	else if (playerSelection === "rock" && computerSelection === "paper") {
		rdResult.innerText = 'You Lose!';
		message.innerText = `${computerSelection} beats ${playerSelection}.`;
		cptScore.innerText = ai += 1
	}

	// Scissors and paper
	else if (playerSelection === "scissors" && computerSelection === "paper") {
		rdResult.innerText = 'You Win!';
		message.innerText = `${playerSelection} beats ${computerSelection}.`;
		usrScore.innerText = player += 1
	}
	else if (playerSelection === "paper" && computerSelection === "scissors") {
		rdResult.innerText = 'You Lose!';
		message.innerText = `${computerSelection} beats ${playerSelection}.`;
		cptScore.innerText = ai += 1
	}

	// Draw
	else if (playerSelection == computerSelection) {
		rdResult.innerText = "Tie!";
		message.innerText = "nobody wins.";
		return;
	}
	return;
}

// Initialize to 0 at the end of the game
// Resets the game
function game() {

	if (ai > 4) {
		rdResult.innerText = '';
		message.innerText = '⌄';
		endMessage.innerText = "You have lost...";
		revealBtn.style.display = '';
		player = 0;
		ai = 0;
		cptScore.innerText = ai;
		usrScore.innerText = player;
		return
	}
	
	else if (player > 4) {
		rdResult.innerText = '';
		message.innerText = '⌄';
		endMessage.innerText = "You have won!";
		revealBtn.style.display = '';
		player = 0;
		ai = 0;
		cptScore.innerText = ai;
		usrScore.innerText = player;
		return
	}

}

function hideMenu() {
	revealBtn.style.display = 'none';
}

revealBtn.style.display = 'none'


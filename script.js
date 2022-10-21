function getComputerChoice() {
	let computer = Math.floor(Math.random() * 3)

	if (computer === 0) {
		return "rock";
	} else if (computer === 1) {
		return "paper"
	} else {
		return "scissors"
	}
}

let pScore = 0;
let cScore = 0;

function playRound(playerSelection, computerSelection) {
	playerSelection = prompt().toLocaleLowerCase();
	computerSelection = getComputerChoice();

	if (playerSelection === computerSelection) {
		console.log("It's a draw")
	}
	// Rock and Scissors
	else if (playerSelection == "rock" && computerSelection == "scissors") {
		console.log(`You Won! ${playerSelection} beats ${computerSelection}`)
		return pScore += 1;
	}
	else if (playerSelection == "scissors" && computerSelection == "rock") {
		console.log(`You Lost! ${computerSelection} beats ${playerSelection}`)
		return cScore += 1;
	}
	// Paper and Rock
	else if (playerSelection == "paper" && computerSelection == "rock") {
		console.log(`You Won! ${playerSelection} beats ${computerSelection}`)
		return pScore += 1;
	}
	else if (playerSelection == "rock" && computerSelection == "paper") {
		console.log(`You Lost! ${computerSelection} beats ${playerSelection}`)
		return cScore += 1;
	}
	// Scissors and paper
	else if (playerSelection == "scissors" && computerSelection == "paper") {
		console.log(`You Won! ${playerSelection} beats ${computerSelection}`)
		return pScore += 1;
	}
	else if (playerSelection == "paper" && computerSelection == "scissors") {
		console.log(`You Lost! ${computerSelection} beats ${playerSelection}`)
		return cScore += 1;
	}
}

function game() {
	for (let round = 0; round < 5; round++) {
		playRound()
		console.log(`Your Score: ${pScore} Computer Score: ${cScore}`)
	}
	if (pScore > cScore) {
		return "You have won!"
	} else if (pScore < cScore) {
		return "You have lost!"
	} else {
		return "It's a draw!"
	}
}

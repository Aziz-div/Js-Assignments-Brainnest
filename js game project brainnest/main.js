
// a message in the DOM for the user
document.write(`This game made by Aziz 2023 | no interface for this game play it in the console.`);
// computer turn function
function computerPlay() {
    const plays = {
        rock: 'Rock',
        paper: 'Paper',
        scissors: 'Scissors'
    };
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return plays.rock;
        case 2:
            return plays.paper;
        case 3:
            return plays.scissors;
    }
}

// game round function
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result;

    switch (player + ',' + computer) {
        case 'rock,rock':
        case 'paper,paper':
        case 'scissors,scissors': result = "It's a draw";
            break;
        case 'rock,scissors':
        case 'paper,rock':
        case 'scissors,paper': result = `You win!`;
            break;
        case 'rock,paper':
        case 'paper,scissors':
        case 'scissors,rock': result = `You lose!`;
            break;
        default: result = 'enter Rock, Paper, or Scissors.';
            break;
    }

    return result;
}

// display the Result in the console
function gameBoard() {
    let playerScore = 0,
        computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(`Round ${i}: Enter Rock, Paper, or Scissors`).trim();
        let computerSelection = computerPlay();

        console.log(`You played ${playerSelection}. Computer played ${computerSelection}.`);

        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult === 'You win!') {
            playerScore++;
        } else if (roundResult === 'You lose!') {
            computerScore++;
        }
    }

    console.log(`You: ${playerScore} 
  Computer: ${computerScore}`);

    switch (Math.sign(playerScore - computerScore)) {
        case 1:
            console.warn('You win!');
            break;
        case - 1:
            console.warn('You lose!');
            break;
        default:
            console.warn("it's draw!");
            break;
    }
}
gameBoard();
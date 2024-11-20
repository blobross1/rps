const computerChoice = () => {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;
let result = '';
let choice = '';

const playRound = (humanChoice) => {
    const computerChoiceResult = computerChoice();
    document.getElementById('choice').innerHTML = `You chose ${humanChoice} Computer chose ${computerChoiceResult}`;

    switch (humanChoice) {
        case 'rock':
            if (computerChoiceResult === 'rock') {
                result = `It\'s a tie!`;
            } else if (computerChoiceResult === 'paper') {
                result = `Computer wins!`;
                computerScore++;
            } else {
                result = `You win!`;
                humanScore++;
            }
            console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
            break;
        case 'paper':
            if (computerChoiceResult === 'rock') {
                result = `You win!`;
                humanScore++;
            } else if (computerChoiceResult === 'paper') {
                result = `It\'s a tie!`;
            } else {
                result = `Computer wins!`;
                computerScore++;
            }
            break;
        case 'scissors':
            if (computerChoiceResult === 'rock') {
                result = `Computer wins!`;
                computerScore++;
            } else if (computerChoiceResult === 'paper') {
                result = `You win!`;
                humanScore++;
            } else {
                result = `It\'s a tie!`;
            }
            break;
    }
    document.getElementById('Score').innerHTML = `Human score: ${humanScore} Computer score: ${computerScore}`;
    document.getElementById('Result').innerHTML = `${result}`
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            document.getElementById('Result').innerHTML = `You win the game!`;
        } else {
            document.getElementById('Result').innerHTML = `Computer wins the game!`;
        }
        humanScore = 0;
        computerScore = 0;
        removeEventListeners()
    }
}

const rockHandler = () => {
    playRound('rock');
}
const paperHandler = () => {
    playRound('paper');
}
const scissorsHandler = () => {
    playRound('scissors');
}


const removeEventListeners = () => {
    document.getElementById('rock').removeEventListener('click', rockHandler
    );
    document.getElementById('paper').removeEventListener('click', paperHandler
    );
    document.getElementById('scissors').removeEventListener('click', scissorsHandler
    );
}



document.getElementById('rock').addEventListener('click', rockHandler);
document.getElementById('paper').addEventListener('click', paperHandler);
document.getElementById('scissors').addEventListener('click', scissorsHandler);

// playGame = () => {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
// }
playGame();
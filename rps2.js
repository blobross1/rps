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

const playRound = () => {
    const humanChoice = prompt('Enter your choice: rock, paper, or scissors');
    console.log(`You chose ${humanChoice}`);
    console.log(`The Computer chose ${computerChoice()}`);
    switch (humanChoice) {
        case 'rock':
            if (computerChoice() === 'rock') {
                console.log('It\'s a tie!');
            } else if (computerChoice() === 'paper') {
                console.log('Computer wins!');
                computerScore++;
            } else {
                console.log('You win!');
                humanScore++;
            }
            console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
            break;
        case 'paper':
            if (computerChoice() === 'rock') {
                console.log('You win!');
                humanScore++;
            } else if (computerChoice() === 'paper') {
                console.log('It\'s a tie!');
            } else {
                console.log('Computer wins!');
                computerScore++;
            }
            break;
        case 'scissors':
            if (computerChoice() === 'rock') {
                console.log('Computer wins!');
                computerScore++;
            } else if (computerChoice() === 'paper') {
                console.log('You win!');
                humanScore++;
            } else {
                console.log('It\'s a tie!');
            }
            break;
    }
}

// playRound();

playGame = () => {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}
playGame();
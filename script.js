let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choice[Math.floor(Math.random() * choice.length)];

}
getComputerChoice();

let playerSelection = 'rock';
const computerSelection = getComputerChoice();
function playRound (playerSelection, computerSelection){
    if(playerSelection === 'rock' && computerSelection === 'scissors')
    {
        return 'You Win! Rock beats Scissors';
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper')
    {
        return 'You Lose! Paper beats Rock';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors')
    {
        return 'You Lose! Scissors beats Paper';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock')
    {
        return 'You Win! Paper beats Rock';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper')
    {
        return 'You Win! Scissors beats paper';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock')
    {
        return 'You Lose! Rock beats Scissors';
        
    }
    else if(playerSelection === 'scissors' && computerSelection === 'scissors')
    {
        return 'It\'s a tie!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper')
    {
        return 'It\'s a tie!';
    }
    else if(playerSelection === 'rock' && computerSelection === 'rock')
    {
        return 'It\'s a tie!';
    }
};

playRound(playerSelection,computerSelection);
console.log(playRound(playerSelection,computerSelection))

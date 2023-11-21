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
        return 'You Win this round!';
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper')
    {
        return 'You Lose this round!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors')
    {
        return 'You Lose this round!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock')
    {
        return 'You Win this round!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper')
    {
        return 'You Win this round!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock')
    {
        return 'You Lose this round!';
        
    }
    else if(playerSelection === 'scissors' && computerSelection === 'scissors')
    {
        return 'It\'s a tie this round!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper')
    {
        return 'It\'s a tie this round!';
    }
    else if(playerSelection === 'rock' && computerSelection === 'rock')
    {
        return 'It\'s a tie this round!';
    }
};

playRound(playerSelection,computerSelection);


let playerResult=0;
let computerResult = 0;

function game() 
    {for (i = 0; i<=5; i++){
        let playerSelection = prompt('select element').toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        console.log(result);
       
        if (result === 'You Lose this round!'){
            computerResult++;
            console.log('computer score is ' + computerResult);
        }
        else if (result === 'You Win this round!'){
            playerResult++;
            console.log('your score is ' + playerResult);
        }
    
    }
    if (playerResult > computerResult){
        return 'You win the game!';
    }
    else if(computerResult>playerResult){
        return 'You lose the game!';
    }
    else{ return 'probably a tie';}
}
console.log(game());
let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choice[Math.floor(Math.random() * choice.length)];

}
getComputerChoice();

let playerSelection = '';
let result = '';
const computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection){
    if(playerSelection === 'rock' && computerSelection === 'scissors')
    {
        result = 'You Win this round!';
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper')
    {
        result = 'You Lose this round!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors')
    {
        result = 'You Lose this round!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock')
    {
        result = 'You Win this round!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper')
    {
        result = 'You Win this round!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock')
    {
        result = 'You Lose this round!';
        
    }
    else if(playerSelection === 'scissors' && computerSelection === 'scissors')
    {
        result = 'It\'s a tie this round!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper')
    {
        result = 'It\'s a tie this round!';
    }
    else if(playerSelection === 'rock' && computerSelection === 'rock')
    {
        result = 'It\'s a tie this round!';
    }
};

 result = playRound(playerSelection,computerSelection);

rockbtn = document.querySelector('#rock');
paperbtn = document.querySelector('#paper');
scissorsbtn = document.querySelector('#scissors');

 const body = document.querySelector('body');

 const div = document.createElement('div');

 body.appendChild(div);
const buttons = document.querySelectorAll('button')

let computerResult = 0;
let playerResult = 0;



rockbtn.addEventListener('click',() => {
    playerSelection = 'rock';
})

paperbtn.addEventListener('click',() => {
    playerSelection = 'paper';
})

scissorsbtn.addEventListener('click',() => {
    playerSelection = 'scissors';
})


buttons.forEach((button) => {
    button.addEventListener('click', () => { 
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
   

     if (result ===  'You Win this round!'){
        playerResult++;
     }
     else if (result === 'You Lose this round!'){
         computerResult++;
     }
    alert (result)
     div.textContent = 'result is:\n'
     +'Your Score = ' + playerResult + '\n'
     +'Computer\'s score = ' + computerResult;

   

    if (playerResult  === 5 )
{
    div.textContent = 'Congratulations, You win the game!';
}

else if (computerResult === 5){
    div.textContent = 'Oops, You lost the game :(';
}


        if (playerResult > 5 || computerResult > 5)
        {
            div.textContent = 'reload to play game';
            alert('reload page to restart');
        }

});

});




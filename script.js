function getComputerChoice(){
    choices=["rock","paper","scissors"];
    //Math.random()*max
    return choices[Math.floor(Math.random()*3)];
}

const playerChoiceClasses=document.getElementsByClassName("btn");
const playerChoice=Array.from(playerChoiceClasses);


let playerPoints=0;
let computerPoints=0;

function playRound(playerSelection,computerSelection)
{
  
    if(playerSelection=="rock"&&computerSelection=="scissors")
    {
        playerPoints++;
        return "You win!Rock beats Scissors";
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper")
    {
        playerPoints++;
        return "You win!Scissors beats paper";
    }
    else if(playerSelection=="paper"&&computerSelection=="rock")
    {
        playerPoints++;
        return "You win!Paper beats rock";
    }
    
    else if(playerSelection=="scissors"&&computerSelection=="rock")
    {
        computerPoints++;
        return "You lose!Rock beats scissors";
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors")
    {
        computerPoints++;
        return "You lose!Scissors beats paper";
    }
    else if(playerSelection=="rock"&&computerSelection=="paper")
    {
        computerPoints++;
        return "You lose!Paper beats rock";
    }
    else
    {
        return "It's a tie!!!"
    }

    //return {playerPoints,computerPoints};
}
        

function getChoices()
{
    let playerSelection=this.innerText.toLowerCase();
    let computerSelection=getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));

    console.log(playerPoints);
    console.log(computerPoints);

    //playerPoints>computerPoints?console.log("You win"):console.log("Computer wins");


}


function game()
{

    playerChoice.forEach(choice => {
        choice.addEventListener("click",getChoices);
    });
    
}

game();

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
        return "You win! Rock beats Scissors";
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper")
    {
        playerPoints++;
        return "You win! Scissors beats paper";
    }
    else if(playerSelection=="paper"&&computerSelection=="rock")
    {
        playerPoints++;
        return "You win! Paper beats rock";
    }
    
    else if(playerSelection=="scissors"&&computerSelection=="rock")
    {
        computerPoints++;
        return "You lose! Rock beats scissors";
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors")
    {
        computerPoints++;
        return "You lose! Scissors beats paper";
    }
    else if(playerSelection=="rock"&&computerSelection=="paper")
    {
        computerPoints++;
        return "You lose! Paper beats rock";
    }
    else
    {
        return "It's a tie!!!"
    }

}
        
//Gets the player and the computer choices
//Plays round and append the results to the divs
function getChoices()
{
    document.body.style.backgroundColor = "white";
    let playerSelection=this.innerText.toLowerCase();
    let computerSelection=getComputerChoice();

    result=playRound(playerSelection,computerSelection);

    let resultDiv=document.getElementById("results");
    let scoreDiv=document.getElementById("scores");

    resultDiv.textContent=result;

    scoreDiv.textContent=`${playerPoints}-${computerPoints}`;

    if(playerPoints==5||computerPoints==5)
    {
        if(playerPoints==5)
        {
            resultDiv.textContent="You win. Starting a new game ...Go again";
            document.body.style.backgroundColor = "aqua";
            
        }
            
        else
        {
            resultDiv.textContent="AI wins.  Starting a new game ...Go again";
            document.body.style.backgroundColor = "red";
            
        }
        playerPoints=0;
        computerPoints=0;
        
        //scoreDiv.textContent=`0-0`;
    }     
}

function game()
{
    playerChoice.forEach(choice => {
        choice.addEventListener("click",getChoices);
    }); 
}

game();



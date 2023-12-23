function getComputerChoice(){
    let result = Math.floor(Math.random()*3)
    if(result === 0){
        return "rock"
    } else if (result === 1){
        return "paper"
    } else {
        return "scissors"
    }
}

const choices = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}



function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    while (!["rock", "paper", "scissors"].includes(playerSelection)) 
        playerSelection = prompt("Invalid choice. Enter: rock, paper, or scissors").toLowerCase()
    
    if(playerSelection === computerSelection){
         return `Its a TIE you both chose ${playerSelection}`
    } else if (choices[playerSelection] === computerSelection){
        return `You won! Your ${playerSelection} beats computers ${computerSelection}`
    } else if(choices[computerSelection] === playerSelection){
        return `You lose! Computers ${computerSelection} beats your ${playerSelection}`
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0

    for(let i = 0; i < 5; i ++){
    
    let playerSelection = prompt("Enter: rock || paper || scissors")
        
    playerSelection = playerSelection.toLowerCase()
    const computerSelection = getComputerChoice()

    
    let roundResult = playRound(playerSelection, computerSelection)
    console.log(roundResult)
        if(roundResult.includes("won!")){
            playerScore++
        } else if(roundResult.includes("lose!")){
            computerScore++
        }
    }
    console.log("FINAL SCORE:")
    console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)
    if(playerScore > computerScore){
        console.log("YOU WON")
    } else if (playerScore < computerScore){
        console.log("YOU LOST")
    } else {
        console.log("its a TIE")
    }
}

game()

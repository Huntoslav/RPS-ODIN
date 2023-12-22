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

console.log(getComputerChoice())

const choices = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Enter rock or paper or scissors")
    computerSelection = getComputerChoice().toLocaleLowerCase()
    if(playerSelection === computerSelection){
        console.log(`Its a TIE you both chose ${playerSelection}`)
    } else if (choices[playerSelection] === computerSelection){
        console.log(`You won! Your ${playerSelection} beats computers ${computerSelection}`)
    } else {
        console.log(`You lose! Computers ${computerSelection} beats your ${playerSelection}`)
    }
}

playRound()
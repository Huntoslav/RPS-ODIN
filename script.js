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



function playRound(playerSelection){
    
    let computerSelection = getComputerChoice()

    if(playerSelection === computerSelection){
         return `Its a TIE you both chose ${playerSelection}`
    } else if (choices[playerSelection] === computerSelection){
        return `You won! Your ${playerSelection} beats computers ${computerSelection}`
    } else if(choices[computerSelection] === playerSelection){
        return `You lose! Computers ${computerSelection} beats your ${playerSelection}`
    }
}

let rock = document.querySelector(".rock").addEventListener("click", function(e){
    playerSelection = "rock"
    let result =playRound(playerSelection)
    console.log(result)
    game(result)
})

let paper = document.querySelector(".paper").addEventListener("click", function(e){
    playerSelection = "paper"
    let result =playRound(playerSelection)
    console.log(result)
    game(result)
})

let scissors = document.querySelector(".scissors").addEventListener("click", function(e){
    let result =playRound(playerSelection)
    console.log(result)
    game(result)
})

function game(gameResult){
    let showResult = document.querySelector(".myDiv")
    showResult.textContent = gameResult
}
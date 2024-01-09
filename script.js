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

let playerScore = 0
let computerScore = 0

function playRound(playerSelection){
    
    let computerSelection = getComputerChoice()

    if(playerSelection === computerSelection){
         return `Its a TIE you both chose ${playerSelection}`
    } else if (choices[playerSelection] === computerSelection){
        playerScore++
        return `You won! Your ${playerSelection} beats computers ${computerSelection}`
    } else if(choices[computerSelection] === playerSelection){
        computerScore++
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
    playerSelection = "scissors"
    let result =playRound(playerSelection)
    console.log(result)
    game(result)

})

function game(gameResult){

    
    let showResult = document.querySelector(".myDiv")
    showResult.textContent = gameResult

    let playerElement = document.querySelector(".playerScore")
    let computerElement = document.querySelector(".computerScore")

    playerElement.textContent = `Player Score: ${playerScore}`
    computerElement.textContent = `Computer Score: ${computerScore}`

    endGame()


}


function endGame() {
    if (playerScore === 5) {
        let result = document.createElement("p");
        result.textContent = `CG! YOU WON!`
        let winResultElement = document.querySelector(".gameResultWin")
        if (winResultElement) {
            winResultElement.appendChild(result)
        }
        newGame()
    } else if (computerScore === 5) {
        let result = document.createElement("p")
        result.textContent = `Sadly, YOU LOST! :(`
        let loseResultElement = document.querySelector(".gameResultLose")
        if (loseResultElement) {
            loseResultElement.appendChild(result)
        }
        newGame()
    }
}


function newGame(){
    let newGameButton = document.createElement("button")
    newGameButton.textContent = "NEW GAME"
    newGameButton.id = "novaHra"
    document.querySelector(".newGame").appendChild(newGameButton)

    let novaHraElement = document.getElementById("novaHra")
    novaHraElement.addEventListener("click", function(e){
        playerScore = 0
        computerScore = 0
        game()

        let parentElement = document.querySelector(".newGame")
        parentElement.removeChild(newGameButton)

        let winResultElement = document.querySelector(".gameResultWin")
        let loseResultElement = document.querySelector(".gameResultLose")

        if(winResultElement){
            parentElement.removeChild(winResultElement)
        }

        if(loseResultElement){
            parentElement.removeChild(loseResultElement)
        }

    })
}


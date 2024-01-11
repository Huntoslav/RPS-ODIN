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
let playerScore =0
let computerScore = 0

function playRound(playerSelection){
    let computerSelection = getComputerChoice()
    if(playerSelection === computerSelection){
        return "Its a TIE"
    } else if(choices[playerSelection] === computerSelection){
        playerScore++
        return `You won your ${playerSelection} beats computers ${computerSelection}`
    } else {
        computerScore++
        return `You lose computers ${computerSelection} beats your ${playerSelection}`
    }
    
}



const rock = document.querySelector(".rock")
rock.addEventListener("click", function(e){
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    playerSelection = "rock"
    let result = playRound(playerSelection)
    console.log(result)
    game(result)
})

const paper = document.querySelector(".paper").addEventListener("click", function(e){
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    playerSelection = "paper"
    let result = playRound(playerSelection)
    game(result)
})

const scissors = document.querySelector(".scissors").addEventListener("click", function(e){
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    playerSelection = "scissors"
    let result = playRound(playerSelection)
    game(result)
})

function game(showResult){
    let showScoreOnPage = document.querySelector(".showResult")
    showScoreOnPage.textContent = showResult
    showScore()
    endGame()
    
}

function showScore(){
    let showTheScore = document.getElementById("score")

    if(!showTheScore){
        showTheScore = document.createElement("p")
        showTheScore.id = "score"
        document.querySelector(".container").appendChild(showTheScore)
    }
    if(showTheScore){
    showTheScore.textContent = `Player SCORE: ${playerScore} Computer SCORE: ${computerScore}`
    }
}

function endGame(){
    if(playerScore === 5){
        let playerWon = document.createElement("p")
        playerWon.id = "playerWon"
        playerWon.textContent = `CG! YOU WON !!!`
        document.querySelector(".container").appendChild(playerWon)
    }if (computerScore === 5){
        let computerWon = document.createElement("p")
        computerWon.id = "computerWon"
        computerWon.textContent = "SADLY, YOU LOSE :("
        document.querySelector(".container").appendChild(computerWon)
    }
    restartTheGame()
}


function restartTheGame(){
    if(computerScore === 5 || playerScore === 5){
        let restart = document.createElement("button")
        restart.id = "restart"
        restart.textContent = "RESTART"
        document.querySelector(".container").appendChild(restart)

        let startNewGame = document.getElementById("restart")
        startNewGame.addEventListener("click", function(e){
        
        playerScore = 0
        computerScore = 0
        
        let deleteTheTextPlayer = document.getElementById("playerWon")
        let deleteTheTextComputer = document.getElementById("computerWon")
        let deleteTheButton = document.getElementById("restart")

        document.querySelector(".container").removeChild(deleteTheButton);
            
        if (deleteTheTextPlayer) {
            deleteTheTextPlayer.textContent = ""
        }
        if (deleteTheTextComputer) {
            deleteTheTextComputer.textContent = ""
        }

        showScore()
    })
    

    }

    
}
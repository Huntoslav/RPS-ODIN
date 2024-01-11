// function providing random computer choice - rock / paper / scissors
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

// possible choices of each player
const choices = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}
let playerScore =0
let computerScore = 0

// function that declares the winner of each round
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


// event listeners that work on clicking the buttons
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


// function that plays the game
function game(showResult){
    let showScoreOnPage = document.querySelector(".showResult")
    showScoreOnPage.textContent = showResult
    showScore()
    endGame()
    
}

// function which shows the score of both PC and USER
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

// function showing result of the game (who scored first 5 points)
function endGame(){
    if(playerScore === 5){
        let playerWon = document.createElement("p")
        playerWon.id = "playerWon"
        playerWon.textContent = `CG! YOU WON !!! :)`
        playerWon.style.color = "green"
        playerWon.style.backgroundColor = "yellow"
        document.querySelector(".container").appendChild(playerWon)
    }if (computerScore === 5){
        let computerWon = document.createElement("p")
        computerWon.id = "computerWon"
        computerWon.textContent = "SADLY, YOU LOSE :("
        computerWon.style.color = "red"
        computerWon.style.backgroundColor = "Yellow"
        document.querySelector(".container").appendChild(computerWon)
    }
    restartTheGame()
}

// function that restars the game whenever someone reaches 5 points
function restartTheGame(){
    if(computerScore === 5 || playerScore === 5){
        let restart = document.createElement("button")
        restart.id = "restart"
        restart.textContent = "RESTART"
        restart.style.background = "red"
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
            document.querySelector(".container").removeChild(deleteTheTextPlayer);
        }
        if (deleteTheTextComputer) {
            document.querySelector(".container").removeChild(deleteTheTextComputer);
        }
        if (deleteTheButton) {
            console.log("test")
            document.querySelector(".container").removeChild(deleteTheButton);
        }
        if(!deleteTheButton){
            console.log("nevim")
        }

        showScore()
    })
    

    }

    
}
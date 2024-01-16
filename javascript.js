//Generate a random selection of rock, paper or scissors.
function getComputerChoice() {
    //list of computers possible choices
    let possibleChoices = ['rock','paper','scissors'];
    
    //randomly generate a number from 0 to 2
    let computerChoice = Math.floor(Math.random()*3);
    
    //check and return computer's actual selection from the possible choices
    if(computerChoice == 0) {
        return possibleChoices[computerChoice];
    }
    else if(computerChoice == 1) {
        return possibleChoices[computerChoice];
    }
    else {
        return possibleChoices[computerChoice];
    }
}
//Accept user input
let playerSelection = prompt("Enter your choice");

//Determines the winner between the user and computer based on game logic.
function singleRoundRPS(playerSelection, computerSelection) {
    //a variable to store the lower case of user selection.
    let lcPlayerSelection = playerSelection.toLowerCase();
    
    let uWin = "win";
    let cWin = "lose";
    let draw = "draw";

    //Game logic to determine the winner
    if(lcPlayerSelection == "rock" && computerSelection == "scissors" || lcPlayerSelection == "paper" && computerSelection == "rock" || lcPlayerSelection == "scissors" && computerSelection == "paper") {
        return uWin;
    }
    else if(lcPlayerSelection == "rock" && computerSelection == "paper" || lcPlayerSelection == "paper" && computerSelection == "scissors" || lcPlayerSelection == "scissors" && computerSelection == "rock") {
        return cWin;
    }
    else {
        return draw;
        //a function call in case of Ties to re-play the round.
        //singleRoundRPS(lcPlayerSelection, computerSelection);
    }
}
//Determine the winner of the best-of-five game
function game() {
    let userWin = 0;
    let computerWin = 0;
    let roundsToWin = 3;

    let playerInput = prompt("Please enter you choice");

    for(let i=1; i<=5; i++) {
        if(singleRoundRPS(playerInput, getComputerChoice()) == "win") {
            userWin++;
            console.log("You win!");
        }
        else if(singleRoundRPS(playerInput, getComputerChoice()) == "lose") {
            computerWin++;
            console.log("You lose!");
        }
        else {
            console.log("It's a draw!");
        }
    }
    if(userWin > computerWin) {
        console.log("Congratulations! You win the game.");
    }
    else if(userWin < computerWin) {
        console.log("Sorry buddy, You lose!");
    }
    else {
        console.log("It's a draw!");
    }
}
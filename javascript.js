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
    
    let userWin = "You win, Congratulation.";
    let compWin = "Computer win";
    let draw = "It's a draw, please play again!";

    //Game logic to determine the winner
    if(lcPlayerSelection == "rock" && computerSelection == "scissors" || lcPlayerSelection == "paper" && computerSelection == "rock" || lcPlayerSelection == "scissors" && computerSelection == "paper") {
        return userWin;
    }
    else if(lcPlayerSelection == "rock" && computerSelection == "paper" || lcPlayerSelection == "paper" && computerSelection == "scissors" || lcPlayerSelection == "scissors" && computerSelection == "rock") {
        return compWin;
    }
    else {
        return draw;
    }
}
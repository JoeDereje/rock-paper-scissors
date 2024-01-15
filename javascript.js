//Generate a random selection of rock, paper or scissors.
function getComputerChoice() {
    //list of computers possible choices
    let possibleChoices = ['rock','paper','scissors'];
    
    //randomly generate a number from 0 to 2
    let computerChoice = Math.floor(Math.random()*3);
    
    //check and return computer's actual selection from the possible choices
    if(computerChoice == 0) {
        return possibleChoices[computerChoice].toLowerCase();
    }
    else if(computerChoice == 1) {
        return possibleChoices[computerChoice].toLowerCase();
    }
    else {
        return possibleChoices[computerChoice].toLowerCase();
    }
}

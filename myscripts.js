//system takes in user choice of rock, paper, or scissors

let num = prompt("1 for rock, 2 sci, 3 pape");
num = parseInt(num); //convert the string to a number for easy use

function getPlayerChoice(num) {
    let playerChoice= "";
    if (num === 1) {
        playerChoice = "ROCK";
    }

    else if (num === 2) {
        playerChoice = "SCISSORS";
    }

    else if (num === 3) {
        playerChoice = "PAPER";
    }

    else {
        playerChoice = "Please choose a valid number"; //just in case an invalid entry
    }

    return playerChoice;
    
}


//system makes a choice of rock, paper, or scissors for the computer "player"
function getComputerChoice(){

    let chooseNum = Math.floor(Math.random() * 3) + 1; //returns random number for action selection, 1-3
    let choice = "";

    if (chooseNum === 1) {
        choice = "ROCK";
    }

    else if (chooseNum === 2) {
        choice = "PAPER";
    }

    else if (chooseNum === 3) {
        choice = "SCISSORS";
    }

    else {
        choice = "Error";
    }

    return choice;
}



//compare the two choices to decide a winner

function chooseWinner (choicePlayer, choiceComp) { //this is going to take the two "get" functions above for use later

        let decision = "test";

        if (choiceComp == choicePlayer) {
            
            decision = "Tie!";
        
        }

        else if (choicePlayer === "ROCK" && choiceComp === "SCISSORS") {
            decision = "Player wins! Rock beats Scissors!";
        }

        else if (choicePlayer === "ROCK" && choiceComp === "PAPER") {
            decision = "Player loses! Rock loses to Paper";
        }

        else if (choicePlayer === "PAPER" && choiceComp === "ROCK") {
            decision = "Player wins! Paper beats rock";
        }

        else if (choicePlayer === "PAPER" && choiceComp === "SCISSORS") {
            decision = "Player loses! Paper loses to Scissors";
        }

        else if (choicePlayer === "SCISSORS" && choiceComp === "ROCK"){
            decision = "Player loses! Scissors loses to Rock";
        }

        else if (choicePlayer === "SCISSORS" && choiceComp === "PAPER") {
            decison = "Player wins! Scissors beats paper";
        }
        else {

            decision = "Failure"; //only for an issue in the code
            
        }

        return decision;
}

    


//display winner of the round

console.log(chooseWinner(getPlayerChoice(num), getComputerChoice())); //order of functions is important


//repeat 5 times, best of 5
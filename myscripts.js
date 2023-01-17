//system takes in user choice of rock, paper, or scissors
function getPlayerChoice(txt) {
    txt = txt.toUpperCase();
    return txt;
}
//number system - 1 2 or 3 for different choices

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

function chooseWinner (choicePlayer, choiceComp) {

        let decision = "test";

        if (choiceComp == choicePlayer) {
            
            decision = "Tie!";
        
        }

        else if (choicePlayer == "ROCK" && choiceComp == "SCISSORS") {
            decision = "Player wins!"
        }

        else if (choicePlayer == "ROCK" && choiceComp == "PAPER") {
            decision = "Player loses!";
        }

        else {

            decision = "Failure";
            
        }

        return decision;
}

    console.log(getPlayerChoice("rock"));
    console.log(getComputerChoice())
    console.log(chooseWinner(getPlayerChoice("rock"), getComputerChoice()));


//display winner of the round


//repeat 5 times, best of 5
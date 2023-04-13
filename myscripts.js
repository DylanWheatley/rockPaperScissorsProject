//system takes in user choice of rock, paper, or scissors

//let num = prompt("1 for rock, 2 sci, 3 pape");
//num = parseInt(num); //convert the string to a number for easy use


let playerPoints = 0;
let compPoints = 0; 


//query selectors for buttons on ui
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.onclick = console.log(chooseWinner(getPlayerChoice(1), getComputerChoice()));
paper.onclick = getPlayerChoice(2);
scissors.onclick = getPlayerChoice(3);

function getPlayerChoice(num) {

        //old code, no need for it when using buttons now
    //let num = prompt("1 for rock, 2 sci, 3 pape");
    //num = parseInt(num); //convert the string to a number for easy use

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

        let decision = "";

        if (choiceComp === choicePlayer) {
            
            decision = "Tie!";
        
        }

        else if (choicePlayer === "ROCK" && choiceComp === "SCISSORS") {
            decision = "Player wins!";
            playerPoints++;
        }

        else if (choicePlayer === "ROCK" && choiceComp === "PAPER") {
            decision = "Player loses!";
            compPoints++;
        }

        else if (choicePlayer === "PAPER" && choiceComp === "ROCK") {
            decision = "Player wins!";
            playerPoints++;
        }

        else if (choicePlayer === "PAPER" && choiceComp === "SCISSORS") {
            decision = "Player loses!";
            compPoints++;
        }

        else if (choicePlayer === "SCISSORS" && choiceComp === "ROCK"){
            decision = "Player loses!";
            compPoints++;
        }

        else if (choicePlayer === "SCISSORS" && choiceComp === "PAPER") {
            decision = "Player wins!";
            playerPoints++;

        }
        else {

            decision = "Please enter a valid number, round forfeit."; //this is the line that will print if a wrong number is entered at the start
            
        }

        return decision;
}

    


//display winner of the round

//console.log(chooseWinner(getPlayerChoice(num), getComputerChoice())); 
//old version, used to print just one round. 


//repeat 5 times, best of 5


//-----Removing for now for upgrading ui------
// for (let i = 0; i<5; i++) {

//     let points = console.log(chooseWinner(getPlayerChoice(), getComputerChoice()));

//     if (playerPoints < 3 || compPoints < 3) {
//         i--; //ensures a best of 5 
//     }

//     if (playerPoints === 3 || compPoints === 3) {
//         i = 5;  //meets best of 5 condition
//     }
  






//old code
    // if (points === "Player loses!") {
    //     compPoints++;
    // }

    // else if (points === "Player wins!") {
    //     playerPoints++;
    // }

    // else if (points === "Tie!") {
    //     i--;
    // }

   // console.log("Current score - Player: " + playerPoints + " Computer Points: " + compPoints);
//}
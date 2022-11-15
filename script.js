/*
1. This game is going to be played completely from the console, so don’t worry about putting anything else in there.

2. Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

3. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
    Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

4. Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:
    function playRound(playerSelection, computerSelection) {
        // your code here!
    }
 
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

5. Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    * Remember loops? This is a great opportunity to use one to play those five rounds:
        for (let i = 0; i < 5; i++) {
            // your code here!
        }
    * At this point you should be using console.log() to display the results of each round and the winner at the end.
    * Use prompt() to get input from the user.
    * Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
    * Feel free to create more “helper” functions if you think it would be useful.
*/

/*
Plan
Generate computer choice
    Generate random number 0-1
        Multiply to account for the 3 choices
            Round to the nearest whole number

Collect user input
        Have user type out input (fianl cut would be a selection of a choice from icons on screen)
Assess user input
        Account for differences in case sensitiviy
        Compare input to selection types
            Account for incorrect inputs
                Require correct input

Compare inputs
        Create hierarchy of choices
            Translate user and comp choice into comparable values?
            Set conditionals based on each users input choice?
                Translation will have cleaner code
*/

// Picks the computer choice by generating a number 1-3
function getComputerChoice () {
    let compChoice = Math.floor((Math.random() * 3) + 1);
    // console.log(compChoice);

    return compChoice;
}

function getUserChoice () {
    let userChoice = prompt("Rock, paper, or scissors?");
    return userChoice;
}



function checkUser (userChoice = getUserChoice()) {
    if (userChoice === 'rock') {
        return 1;
    } else if (userChoice === 'paper') {
        return 2;
    } else if (userChoice === 'scissors') {
        return 3;
    } else {
        checkUser();
    }
}
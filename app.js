// const button=document.querySelectorAll("button")
// const resultE1=document.querySelectorAll("result")
// const playerScoreE1=document.querySelectorAll("user-score")
// const computerScoreE1=document.querySelectorAll("computer-score");

// let playerScore=0;
// let computerScore=0;

// buttons.forEach(button => {
//     button.addEventListener("Click",()=>{
//         const result=playRound(button.id,computerPlay());
//         resultE1.textcontent=result;
//     });
// });


// function computerPlay(){
// const choices=["Rock","","Paper","Scissors"];
// const randomchoice=Math.floor(Math.random()*choice.length);
// return choices[randomchoice];
// }

// function playRound(playSelection,ComputerSelection){
//     if(playerSelection===ComputerSelection){
//         return "It's a tie";
//     }else if(
//         (playerSelection==="Rock" && ComputerSelection==="Scissors")||
//         (playerSelection==="Paper" && ComputerSelection==="Rock")||
//         (playerSelection==="Scissors" && ComputerSelection==="Paper")
//     ){
//         playerScore++;
//         playerScoreE1.textcontent=playerScore;
//         return "You win!"+playSelection+"beats"+ComputerSelection;
//     }else{
//         ComputerScore++;
//         computerScoreE1.textcontent=ComputerScore;
//         return "You lose!"+ComputerSelection+"beats"+playSelection;
//     }
// }

const buttons = document.querySelectorAll("button");
const resultE1 = document.querySelector("#result");
const playerScoreE1 = document.querySelector("#user-score");
const computerScoreE1 = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultE1.textContent = result;
    });
});

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        playerScoreE1.textContent = playerScore;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        computerScoreE1.textContent = computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

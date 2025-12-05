const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const statusText = document.getElementById("status-text");

const userChoiceEl = document.getElementById("user-choice");
const compChoiceEl = document.getElementById("comp-choice");
const roundResultEl = document.getElementById("round-result");

const buttons = document.querySelectorAll(".choice-btn");
const resetBtn = document.getElementById("reset-btn");

let userScore = 0;
let compScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getResult(user, comp) {
    if (user === comp) return "Draw";

    if (
        (user === "rock" && comp === "scissors") ||
        (user === "paper" && comp === "rock") ||
        (user === "scissors" && comp === "paper")
    ) {
        return "You Win";
    }

    return "You Lose";
}

function playRound(userChoice) {
    const compChoice = getComputerChoice();
    const result = getResult(userChoice, compChoice);

    // Update text choices
    userChoiceEl.textContent = userChoice.toUpperCase();
    compChoiceEl.textContent = compChoice.toUpperCase();
    roundResultEl.textContent = result;

    // Update score
    if (result === "You Win") {
        userScore++;
        statusText.textContent = "Nice! You won this round 🎉";
    } else if (result === "You Lose") {
        compScore++;
        statusText.textContent = "Oops! Computer won this round 🤖";
    } else {
        statusText.textContent = "It's a draw. Try again 😄";
    }

    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice = btn.getAttribute("data-choice");
        playRound(userChoice);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreEl.textContent = 0;
    compScoreEl.textContent = 0;

    userChoiceEl.textContent = "-";
    compChoiceEl.textContent = "-";
    roundResultEl.textContent = "-";
    statusText.textContent = "Game reset. Click any option to start!";
});

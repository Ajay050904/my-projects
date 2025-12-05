const quotes = [
    "Practice makes you better each day.",
    "Web development is fun and powerful.",
    "Never stop learning new things in life.",
    "Typing fast comes with regular practice.",
    "JavaScript adds life to web pages."
];

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input-area");
const timeEl = document.getElementById("time-left");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const messageEl = document.getElementById("message");

const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

let timeLeft = 60;
let timer = null;
let started = false;

let currentQuote = "";
let totalTyped = 0;
let correctTyped = 0;

function pickRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[index];
    quoteEl.textContent = currentQuote;
}

function startTest() {
    if (started) return;

    started = true;
    timeLeft = 60;
    totalTyped = 0;
    correctTyped = 0;
    inputEl.value = "";
    inputEl.disabled = false;
    inputEl.focus();
    wpmEl.textContent = "0";
    accuracyEl.textContent = "0";
    messageEl.textContent = "";

    pickRandomQuote();
    timeEl.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

function endTest() {
    clearInterval(timer);
    timer = null;
    started = false;
    inputEl.disabled = true;

    const minutes = 60 / 60; // always 1 minute here
    const wordsTyped = totalTyped / 5; // average word length assumed 5 chars
    const wpm = Math.round(wordsTyped / minutes) || 0;
    const accuracy = totalTyped ? Math.round((correctTyped / totalTyped) * 100) : 0;

    wpmEl.textContent = wpm;
    accuracyEl.textContent = accuracy;

    messageEl.textContent = `Time up! Your speed is ${wpm} WPM with ${accuracy}% accuracy.`;
}

inputEl.addEventListener("input", () => {
    const typedText = inputEl.value;
    totalTyped = typedText.length;

    // Count correct characters
    correctTyped = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentQuote[i]) {
            correctTyped++;
        }
    }

    // Change quote color feedback
    let highlighted = "";
    for (let i = 0; i < currentQuote.length; i++) {
        if (i < typedText.length) {
            if (typedText[i] === currentQuote[i]) {
                highlighted += `<span class="correct">${currentQuote[i]}</span>`;
            } else {
                highlighted += `<span class="incorrect">${currentQuote[i]}</span>`;
            }
        } else {
            highlighted += currentQuote[i];
        }
    }
    quoteEl.innerHTML = highlighted;

    // If user finished sentence, load new one
    if (typedText === currentQuote) {
        pickRandomQuote();
        inputEl.value = "";
    }

    const accuracy = totalTyped ? Math.round((correctTyped / totalTyped) * 100) : 0;
    accuracyEl.textContent = accuracy;
});

startBtn.addEventListener("click", startTest);

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    started = false;

    timeLeft = 60;
    timeEl.textContent = timeLeft;

    inputEl.value = "";
    inputEl.disabled = true;

    quoteEl.textContent = "Click Start Test to begin.";
    wpmEl.textContent = "0";
    accuracyEl.textContent = "0";
    messageEl.textContent = "";
});

// Initial state
quoteEl.textContent = "Click Start Test to begin.";
inputEl.disabled = true;

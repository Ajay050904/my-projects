// Simple quiz data
const questions = [
    {
        question: "Which language is used to structure a web page?",
        options: ["CSS", "HTML", "Java", "Python"],
        answer: 1 // index of correct option
    },
    {
        question: "Which tag is used to link an external CSS file?",
        options: ["<css>", "<style>", "<link>", "<script>"],
        answer: 2
    },
    {
        question: "Which CSS property changes the text color?",
        options: ["background-color", "color", "font-style", "text-align"],
        answer: 1
    },
    {
        question: "Which HTML tag is used to create a button?",
        options: ["<button>", "<click>", "<press>", "<input>"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 2
    }
];

// DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

let currentIndex = 0;
let score = 0;
let selected = false;

totalEl.textContent = questions.length;

function loadQuestion() {
    selected = false;
    nextBtn.disabled = true;
    const q = questions[currentIndex];

    questionEl.textContent = q.question;
    currentEl.textContent = currentIndex + 1;

    // Clear old options
    optionsEl.innerHTML = "";

    q.options.forEach((optText, index) => {
        const btn = document.createElement("button");
        btn.textContent = optText;
        btn.classList.add("option-btn");
        btn.addEventListener("click", () => handleOptionClick(index, btn));
        optionsEl.appendChild(btn);
    });
}

function handleOptionClick(index, button) {
    if (selected) return; // prevent multiple clicks

    selected = true;
    const correctIndex = questions[currentIndex].answer;

    // disable all buttons
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correctIndex) {
            btn.classList.add("option-correct");
        }
    });

    // mark wrong if needed
    if (index !== correctIndex) {
        button.classList.add("option-wrong");
    } else {
        score++;
    }

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
    // reset state
    currentIndex = 0;
    score = 0;
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");
    loadQuestion();
});

// initial load
loadQuestion();

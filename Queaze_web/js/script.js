// ===============================
// QUESTIONS
// ===============================

const allQuestion = [

    {
        question: "01. Which keyword is used to declare a block-scoped variable in JavaScript?",
        option: ["var", "let", "constvar", "define"],
        answer: 1
    },

    {
        question: "02. Which method removes the first element from an array?",
        option: ["pop()", "delete()", "shift()", "removefirst()"],
        answer: 2
    },

    {
        question: "03. Which method returns the first element that satisfies a condition?",
        option: ["filter()", "find()", "map()", "search()"],
        answer: 1
    },

    {
        question: "04. What is the output of console.log(10 + 5 + '5')?",
        option: [20, "1055", "155", "205"],
        answer: 2
    },

    {
        question: "05. Which keyword refers to the current object in a method?",
        option: ["self", "current", "this", "object"],
        answer: 2
    },

    {
        question: "06. Which symbol is used for strict equality in JavaScript?",
        option: ["==", "=", "===", "!="],
        answer: 2
    },

    {
        question: "07. Which method adds an element to the end of an array?",
        option: ["push()", "add()", "append()", "insert()"],
        answer: 0
    },

    {
        question: "08. Which method removes the last element from an array?",
        option: ["shift()", "pop()", "remove()", "delete()"],
        answer: 1
    },

    {
        question: "09. Which method converts a JavaScript object into a JSON string?",
        option: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: 1
    },

    {
        question: "10. Which method converts a JSON string into a JavaScript object?",
        option: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.toObject()"
        ],
        answer: 0
    },

    {
        question: "11. Which function is used to print output in the browser console?",
        option: [
            "print()",
            "console.log()",
            "display()",
            "write()"
        ],
        answer: 1
    },

    {
        question: "12. Which keyword is used to declare a constant variable?",
        option: [
            "var",
            "let",
            "constant",
            "const"
        ],
        answer: 3
    },

    {
        question: "13. Which operator is used for logical AND?",
        option: [
            "||",
            "&&",
            "!",
            "&"
        ],
        answer: 1
    },

    {
        question: "14. Which operator is used for logical OR?",
        option: [
            "&&",
            "||",
            "!",
            "|"
        ],
        answer: 1
    },

    {
        question: "15. Which method is used to execute a function after a specified time?",
        option: [
            "setInterval()",
            "setTimeout()",
            "delay()",
            "wait()"
        ],
        answer: 1
    },

    {
        question: "16. Which method repeatedly executes a function at a specified interval?",
        option: [
            "setTimeout()",
            "setInterval()",
            "repeat()",
            "loop()"
        ],
        answer: 1
    },

    {
        question: "17. Which keyword is used to define a function?",
        option: [
            "function",
            "def",
            "func",
            "method"
        ],
        answer: 0
    },

    {
        question: "18. Which property returns the length of a string?",
        option: [
            "size()",
            "length()",
            "length",
            "count()"
        ],
        answer: 2
    },

    {
        question: "19. Which method converts a string to uppercase?",
        option: [
            "upperCase()",
            "toUpperCase()",
            "uppercase()",
            "changeUpper()"
        ],
        answer: 1
    },

    {
        question: "20. Which method converts a string to lowercase?",
        option: [
            "lowerCase()",
            "toLowerCase()",
            "lower()",
            "changeLower()"
        ],
        answer: 1
    },

    {
        question: "21. Which method creates a new array by applying a function to every element?",
        option: [
            "filter()",
            "map()",
            "find()",
            "reduce()"
        ],
        answer: 1
    },

    {
        question: "22. Which method creates a new array containing elements that pass a condition?",
        option: [
            "map()",
            "filter()",
            "find()",
            "forEach()"
        ],
        answer: 1
    },

    {
        question: "23. Which method executes a function for each element of an array?",
        option: [
            "forEach()",
            "each()",
            "loop()",
            "iterate()"
        ],
        answer: 0
    },

    {
        question: "24. Which method combines all array elements into a single value?",
        option: [
            "combine()",
            "reduce()",
            "join()",
            "merge()"
        ],
        answer: 1
    },

    {
        question: "25. Which method joins array elements into a string?",
        option: [
            "join()",
            "combine()",
            "concatString()",
            "merge()"
        ],
        answer: 0
    },

    {
        question: "26. Which keyword is used to stop a loop?",
        option: [
            "stop",
            "exit",
            "break",
            "end"
        ],
        answer: 2
    },

    {
        question: "27. Which keyword skips the current iteration of a loop?",
        option: [
            "skip",
            "continue",
            "next",
            "pass"
        ],
        answer: 1
    },

    {
        question: "28. Which event occurs when a user clicks an HTML element?",
        option: [
            "onchange",
            "onclick",
            "onhover",
            "onpress"
        ],
        answer: 1
    },

    {
        question: "29. Which method is used to select an element by its ID?",
        option: [
            "getElementById()",
            "queryById()",
            "selectId()",
            "getId()"
        ],
        answer: 0
    },

    {
        question: "30. Which method is used to select the first element matching a CSS selector?",
        option: [
            "querySelector()",
            "getSelector()",
            "selectElement()",
            "findSelector()"
        ],
        answer: 0
    }

];


// ===============================
// GET HTML ELEMENTS
// ===============================

const question =
    document.getElementById("question");

const option =
    document.querySelectorAll(".option span");

const optionInputs =
    document.querySelectorAll(".option input");

const nextBtn =
    document.getElementById("nextBtn");

const preBtn =
    document.getElementById("preBtn");

const questionNumber =
    document.getElementById("questionNumber");

const submitModal =
    document.getElementById("submitModal");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const successModal =
    document.getElementById("successModal");

const doneBtn =
    document.getElementById("doneBtn");

const timer =
    document.getElementById("timer");


// ===============================
// VARIABLES
// ===============================

let currentIndex = 0;


// Store selected answer
// for every question

let selectedAnswers =
    new Array(allQuestion.length).fill(null);


// Score

let score = 0;


// Timer

let totalSeconds = 30 * 60;

let timerInterval;


// ===============================
// LOAD QUESTION
// ===============================

function loadTheQuestion() {

    const currentQuestion =
        allQuestion[currentIndex];


    // Question

    question.textContent =
        currentQuestion.question;


    // Options

    option.forEach((item, index) => {

        item.textContent =
            currentQuestion.option[index];

    });


    // Question number

    questionNumber.textContent =
        currentIndex + 1;


    // Previous button

    if (currentIndex === 0) {

        preBtn.disabled = true;

    } else {

        preBtn.disabled = false;

    }


    // Next / Submit button

    if (
        currentIndex ===
        allQuestion.length - 1
    ) {

        nextBtn.textContent =
            "Submit";

    } else {

        nextBtn.textContent =
            "Next →";

    }


    // Remove selected class

    option.forEach((item) => {

        item.parentElement.classList.remove(
            "selected"
        );

    });


    // Remove radio selection

    optionInputs.forEach((input) => {

        input.checked = false;

    });


    // Show previously selected answer

    if (
        selectedAnswers[currentIndex] !== null
    ) {

        const selectedIndex =
            selectedAnswers[currentIndex];


        option[selectedIndex]
            .parentElement
            .classList.add("selected");


        optionInputs[selectedIndex]
            .checked = true;

    }

}


// ===============================
// SELECT ANSWER
// ===============================

option.forEach((item, index) => {

    item.addEventListener("click", function () {

        // Save selected answer

        selectedAnswers[currentIndex] =
            index;


        // Remove selected class

        option.forEach((optionItem) => {

            optionItem.parentElement
                .classList.remove("selected");

        });


        // Add selected class

        item.parentElement
            .classList.add("selected");


        // Check radio

        optionInputs[index].checked = true;

    });

});


// Also allow clicking radio button

optionInputs.forEach((input, index) => {

    input.addEventListener("change", function () {

        selectedAnswers[currentIndex] =
            index;


        option.forEach((optionItem) => {

            optionItem.parentElement
                .classList.remove("selected");

        });


        option[index]
            .parentElement
            .classList.add("selected");

    });

});


// ===============================
// NEXT BUTTON
// ===============================

nextBtn.addEventListener("click", () => {

    if (
        currentIndex <
        allQuestion.length - 1
    ) {

        currentIndex++;

        loadTheQuestion();

    } else {

        // Calculate score

        calculateScore();


        // Stop timer

        clearInterval(timerInterval);


        // Open confirmation modal

        submitModal.style.display =
            "flex";

    }

});


// ===============================
// PREVIOUS BUTTON
// ===============================

preBtn.addEventListener("click", () => {

    if (currentIndex > 0) {

        currentIndex--;

        loadTheQuestion();

    }

});


// ===============================
// NO BUTTON
// ===============================

noBtn.addEventListener("click", () => {

    // Close submit modal

    submitModal.style.display =
        "none";


    // Continue timer

    clearInterval(timerInterval);

    timerInterval =
        setInterval(updateTimer, 1000);

});


// ===============================
// YES BUTTON
// ===============================

yesBtn.addEventListener("click", () => {

    // Calculate final score

    calculateScore();


    // Close submit modal

    submitModal.style.display =
        "none";


    // Stop timer

    clearInterval(timerInterval);


    // Open result modal

    successModal.style.display =
        "flex";

});


// ===============================
// DONE BUTTON
// ===============================

doneBtn.addEventListener("click", () => {

    successModal.style.display =
        "none";

});


// ===============================
// SCORE LOGIC
// ===============================

function calculateScore() {

    score = 0;

    let correct = 0;

    let wrong = 0;

    let skipped = 0;


    // Check every question

    for (
        let i = 0;
        i < allQuestion.length;
        i++
    ) {

        // Skipped

        if (
            selectedAnswers[i] === null
        ) {

            skipped++;

        }


        // Correct

        else if (
            selectedAnswers[i] ===
            allQuestion[i].answer
        ) {

            correct++;

        }


        // Wrong

        else {

            wrong++;

        }

    }


    // Final score

    score = correct;


    // Percentage

    const percentage =
        (score / allQuestion.length) * 100;


    // Console result

    console.log(
        "========== EXAM RESULT =========="
    );

    console.log(
        "Total Questions:",
        allQuestion.length
    );

    console.log(
        "Correct Answers:",
        correct
    );

    console.log(
        "Wrong Answers:",
        wrong
    );

    console.log(
        "Skipped Questions:",
        skipped
    );

    console.log(
        "Score:",
        score + "/" + allQuestion.length
    );

    console.log(
        "Percentage:",
        Math.round(percentage) + "%"
    );

    console.log(
        "================================="
    );


    // ===============================
    // SHOW RESULT IN HTML
    // ===============================

    const finalScore =
        document.getElementById(
            "finalScore"
        );


    const finalPercent =
        document.getElementById(
            "finalPercent"
        );


    const correctResult =
        document.getElementById(
            "correctResult"
        );


    const wrongResult =
        document.getElementById(
            "wrongResult"
        );


    const skippedResult =
        document.getElementById(
            "skippedResult"
        );


    // Final score

    finalScore.textContent =
        score + "/" + allQuestion.length;


    // Percentage

    finalPercent.textContent =
        Math.round(percentage) + "% Score";


    // Correct

    correctResult.textContent =
        correct;


    // Wrong

    wrongResult.textContent =
        wrong;


    // Skipped

    skippedResult.textContent =
        skipped;

}


// ===============================
// TIMER
// ===============================

function updateTimer() {

    let minutes =
        Math.floor(
            totalSeconds / 60
        );


    let seconds =
        totalSeconds % 60;


    // Add zero

    minutes =
        minutes < 10
            ? "0" + minutes
            : minutes;


    seconds =
        seconds < 10
            ? "0" + seconds
            : seconds;


    // Display timer

    timer.textContent =
        minutes + ":" + seconds;


    // Time finished

    if (totalSeconds <= 0) {

        clearInterval(timerInterval);


        timer.textContent =
            "00:00";


        // Calculate result

        calculateScore();


        // Automatically show result

        successModal.style.display =
            "flex";


        return;

    }


    // Decrease time

    totalSeconds--;

}


// ===============================
// START TIMER
// ===============================

updateTimer();

timerInterval =
    setInterval(
        updateTimer,
        1000
    );


// ===============================
// FIRST QUESTION
// ===============================

loadTheQuestion();
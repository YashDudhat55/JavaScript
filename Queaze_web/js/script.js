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


let currentIndex = 0;

let selectedAnswers =
    new Array(allQuestion.length).fill(null);

let score = 0;

let totalSeconds = 30 * 60;

let timerInterval;


function loadTheQuestion() {

    const currentQuestion =
        allQuestion[currentIndex];

    question.textContent =
        currentQuestion.question;

    option.forEach((item, index) => {

        item.textContent =
            currentQuestion.option[index];

    });

    questionNumber.textContent =
        currentIndex + 1;

    if (currentIndex === 0) {

        preBtn.disabled = true;

    } else {

        preBtn.disabled = false;

    }

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

    option.forEach((item) => {

        item.parentElement.classList.remove(
            "selected"
        );

    });

    optionInputs.forEach((input) => {

        input.checked = false;

    });

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


option.forEach((item, index) => {

    item.addEventListener("click", function () {

        selectedAnswers[currentIndex] =
            index;

        option.forEach((optionItem) => {

            optionItem.parentElement
                .classList.remove("selected");

        });

        item.parentElement
            .classList.add("selected");

        optionInputs[index].checked = true;

    });

});


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


nextBtn.addEventListener("click", () => {

    if (
        currentIndex <
        allQuestion.length - 1
    ) {

        currentIndex++;

        loadTheQuestion();

    } else {

        calculateScore();

        clearInterval(timerInterval);

        submitModal.style.display =
            "flex";

    }

});


preBtn.addEventListener("click", () => {

    if (currentIndex > 0) {

        currentIndex--;

        loadTheQuestion();

    }

});


noBtn.addEventListener("click", () => {

    submitModal.style.display =
        "none";

    clearInterval(timerInterval);

    timerInterval =
        setInterval(updateTimer, 1000);

});


yesBtn.addEventListener("click", () => {

    calculateScore();

    submitModal.style.display =
        "none";

    clearInterval(timerInterval);

    successModal.style.display =
        "flex";

});


doneBtn.addEventListener("click", () => {

    successModal.style.display =
        "none";

});


function calculateScore() {

    score = 0;

    let correct = 0;

    let wrong = 0;

    let skipped = 0;

    for (
        let i = 0;
        i < allQuestion.length;
        i++
    ) {

        if (
            selectedAnswers[i] === null
        ) {

            skipped++;

        }

        else if (
            selectedAnswers[i] ===
            allQuestion[i].answer
        ) {

            correct++;

        }

        else {

            wrong++;

        }

    }

    score = correct;

    const percentage =
        (score / allQuestion.length) * 100;

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

    finalScore.textContent =
        score + "/" + allQuestion.length;

    finalPercent.textContent =
        Math.round(percentage) + "% Score";

    correctResult.textContent =
        correct;

    wrongResult.textContent =
        wrong;

    skippedResult.textContent =
        skipped;

}


function updateTimer() {

    let minutes =
        Math.floor(
            totalSeconds / 60
        );

    let seconds =
        totalSeconds % 60;

    minutes =
        minutes < 10
            ? "0" + minutes
            : minutes;

    seconds =
        seconds < 10
            ? "0" + seconds
            : seconds;

    timer.textContent =
        minutes + ":" + seconds;

    if (totalSeconds <= 0) {

        clearInterval(timerInterval);

        timer.textContent =
            "00:00";

        calculateScore();

        successModal.style.display =
            "flex";

        return;

    }

    totalSeconds--;

}


updateTimer();

timerInterval =
    setInterval(
        updateTimer,
        1000
    );


loadTheQuestion();
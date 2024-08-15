//Step1: Define Quiz Data

const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
    },

    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        correct: 1,
    },
    {
        question: "What is the JavaScript function used to select an HTML element by its id?",
        options: [
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct: 1,
    },
    {
        question: "In React.js, which hook is used to perform side effects in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2,
    },

];

//Step 2: Javascript Initialization

const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = 
    document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

//Step 3: Load Quiz Function

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(options);

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    scores.innerHTML = `Score: ${score}/${quizData.length}`;
    //options.forEach((curOption, index) => (option_1.innerText = curOption));
    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );

};

loadQuiz();

//Step 4: Get Selected Answer function on Button click

const getSelectedOption = () => {
    //let ans_index;
    //answerElm.forEach((curOption, index) => {
    //    if(curOption.checked) {
    //       ans_index = index;
    //    }
    //});
    //return ans_index;

    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};

//deselectedAnswer
const deselectedAnswer = () => {
    answerElm.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score + 1;
    }

    currentQuiz++;
    if(currentQuiz < quizData.length) {
        deselectedAnswer();
        loadQuiz();
    } else{
        quiz.innerHTML = `
        <div class="result">
        <h2> 🏆 Your Score: ${score}/${quizData.length} Correct Answers </h2>
        <p>Congratulations for completing the Quiz! 🎉</p>
        <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
        </div>`;
    }
});

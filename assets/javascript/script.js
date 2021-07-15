var quizQuestions = document.GetElementById('question');
var aA = document.GetElementById('answerA');
var aB = document.GetElementById('answerB');
var aC = document.GetElementById('answerC');
var aD = document.GetElementById('answerD');
var start = document.GetElementById('startBtn');
var next = document.GetElementById('nextBtn');

var lastQuestionIndex = quizQuestion.length-1;
var runningQuestionIndex = 0;

var quizQuestion = [
    {
        question: "Who invented JavaScript?",
        a: "Johnny Cochran",
        b: "F. Lee Bailey",
        c: "Brendan Eich",
        d: "Robert kardashian",
        correctAnswer: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hold my beer watch this!",
        b: "Hyper Tangent Miraculous Language",
        c: "HyperText Markup Language",
        d: "Hold my other beer and watch this!",
        correctAnswer: "c",
    }
];

function startQuiz() {
    let i = quizQuestion[runningQuestionIndex];
    question.innerHTML = quizQuestion[0];
};
console.log(question);
start.addEventListener("click", startQuiz());

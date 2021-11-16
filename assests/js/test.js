
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')

let randomizedQuestions, currentQuestionIndex

function startGame() {
    //Sorting the question by a postivie/negative number. In this instance the numbe will be random, either below 0 or above zero 50% of the time
    randomizedQuestions = questions.sort(() => Math.random() - .5)

    currentQuestionIndex = 0

    getNextQuestion();
}

function getNextQuestion() {
    resetState();
    showQuestion(randomizedQuestions[currentQuestionIndex])
   
}

function showQuestion(question) {
    questionEl.innerText = question.question
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}


const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    }
];

startGame();


let choiceText = Array.from(document.querySelectorAll('.choice-text'));

const questions = document.querySelector('#question');

const scoreText = document.querySelector('#highscore');

let activeQuestion = {};
let chooseAnswer = true;
let score = 0;
let allQuestions = [];


let questionObj = [
    {
        question: 'What is 2 + 2',
        choice1: '2',
        choice2: '4',
        choice3: '19',
        choice4: '0',
        answer: 2,
    },
    {
        question: 'What is 5 + 5',
        choice1: '2',
        choice2: '2',
        choice3: '2',
        choice4: '2',
        answer: 3,
    },
    {
        question: 'What is 1 + 1',
        choice1: '2',
        choice2: '2',
        choice3: '2',
        choice4: '2',
        answer: 3,
    },
    {
        question: 'What is 3 + 3',
        choice1: '2',
        choice2: '2',
        choice3: '2',
        choice4: '2',
        answer: 1,
    },
    {
        question: 'What is 4 + 4',
        choice1: '2',
        choice2: '2',
        choice3: '2',
        choice4: '2',
        answer: 3,
    }
];

//Captializing means fixed, it will not change 
const SCORE_POINTS = 100;
//Set max questions equal to the array's length to be able to add more questions
const MAX_QUESTIONS = questionObj.length;

function startGame() {
    score = 0
    getNextQuestion();
    checkAnswers();
}

function getNextQuestion() {
    allQuestions = [...questionObj]

    //Setting up the questions to be randomized and will be in the id of 'questions'
    const questionsIndex = Math.floor(Math.random() * allQuestions.length)
    activeQuestion = allQuestions[questionsIndex]
    questions.innerText = activeQuestion.question


    //Will change the question's choices to match the question.
    choiceText.forEach(choice => {
        const number = choice.dataset['number']
        choiceText.innerText = activeQuestion['choice' + number]
    })

    allQuestions.splice(questionsIndex, 1)
    

    chooseAnswer = true
}








function checkAnswers() {
    //Each choice in the array will display
    choiceText.forEach(choice => {
        //choice will listen for a click, the target being '.choice-text'
        choice.addEventListener('click', c => {
            const selectedChoice = c.target
            const selectedAnswer = selectedChoice.dataset['number']
            //When an answer is clicked it will move to the next question
            setTimeout(() => {
                getNextQuestion();
    
            }, 100)
        })
    })
}

startGame();


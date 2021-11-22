const questionEl = document.getElementById('question')
const answers = document.getElementById('allchoices')
const choiceText = document.querySelectorAll('.choice-text')
const scoreText = document.getElementById('score')
const addScore = document.getElementById('add-score')
const countDown = document.getElementById('timer')

const choiceOne = document.querySelector('.c1')
const choiceTwo = document.querySelector('.c2')
const choiceThree = document.querySelector('.c3')
const choiceFour = document.querySelector('.c4')

let highScores = JSON.parse(localStorage.getItem('highScores')) || []

const questionObj = [
    {
        prompt: 'What is 2 + 2',
        answers: [
            {text: 'What happens if i do this', correct: true},
            {text: '11', correct: false},
            {text: '10', correct: false},
            {text: '0', correct: false}
        ]
    },
    {
        prompt: 'Why is 5 + 5',
        answers: [
            {text: '4', correct: true},
            {text: '11', correct: false},
            {text: '10', correct: false},
            {text: '0', correct: false}
        ]
    },
    {
        prompt: 'Who is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '11', correct: false},
            {text: '10', correct: false},
            {text: '0', correct: false}
        ]
    },
    {
        prompt: 'When is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '11', correct: false},
            {text: '10', correct: false},
            {text: '0', correct: false}
        ]
    }
]

let inOrderQuestion;

let questionIndex;

let activeQuestion;

let i = 0;

let score;

function startQuiz() {
    score = 0;
    getNextQuestion();
    checkAnswers();
    //startTime();
}

function getNextQuestion() {
    //inOrderQuestion will equal to current questionObj
    inOrderQuestion = questionObj[i]
    //If the question is greater than questionObj length, it will tally the score go to the highscore page
    if (i > questionObj.length - 1) {
        localStorage.setItem('mostRecentScore', score)
        highScores.push(score)
        
        window.location.assign('./data.html')
        return false;
    }
    //innerText of 'question' will be the CURRENT prompt 
    questionEl.innerText = questionObj[i].prompt

    choiceOne.innerText = questionObj[i].answers[0].text;
    choiceOne.setAttribute('data-check',questionObj[i].answers[0].correct);

    choiceTwo.innerText = questionObj[i].answers[1].text;
    choiceTwo.setAttribute('data-check',questionObj[i].answers[1].correct);

    choiceThree.innerText = questionObj[i].answers[2].text;
    choiceThree.setAttribute('data-check',questionObj[i].answers[2].correct);

    choiceFour.innerText = questionObj[i].answers[3].text;
    choiceFour.setAttribute('data-check',questionObj[i].answers[3].correct);

    i++
}

function hoverSound(sound) {
    const choiceSound = document.getElementById(sound)
    choiceSound.play();
}


function checkAnswers() {

    let correctSound = new Audio('../sounds/Correct.mp3');
    let wrongSound = new Audio('../sounds/Incorrect.mp3');

    
    // 'C' knows what were clicking on so we just have to get the attribute, attribute being 'data-check' and look at the value. If the value is true, it is correct and will add score
    choiceText.forEach(choice => {
        choice.addEventListener('click', (c) => {

            if (c.target.getAttribute('data-check') == 'true') {
                //The score will add 100 when its correct and added to the innerText of 'score'
                score += 100;

                c.target.setAttribute('style', 'background-color:chartreuse', 'color:black')

                addScore.classList.remove('hide-adding-score')

                addScore.classList.add('score-up')
                //Creating an animation for when you get it correct

                correctSound.play();
                
            } else {
                c.target.setAttribute('style', 'background-color:red', 'color:black')

                wrongSound.play();

                console.log('wrong');
            }

            setTimeout(() => {

                addScore.classList.add('hide-adding-score')

                addScore.classList.remove('score-up')

                //Making the score just display its score
                scoreText.innerText= score;

                c.target.setAttribute('style', 'background-color:black', 'color:white')

                getNextQuestion();

            }, 1000);
        })
    })
}

//This will start the timer that will count down to 30. When the timer is done it will make you lose so you can't enter your score.
function startTime() {
    let sec = 30;

    setInterval(function() {
        countDown.innerHTML = --sec;
        if (sec === 0) {
            window.location.assign('../../index.html')
        }
    
    }, 1000);
}

startQuiz();

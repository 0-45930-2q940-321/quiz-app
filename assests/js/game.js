const questionEl = document.getElementById('question')

const answers = document.getElementById('allchoices')

const choiceText = document.querySelectorAll('.choice-text')

const scoreText = document.getElementById('score')

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
            {text: '4', correct: true},
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
        localStorage.setItem('highScores', JSON.stringify(highScores))
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

function checkAnswers() {
    // 'C' knows what were clicking on so we just have to get the attribute, attribute being 'data-check' and look at the value. If the value is true, it is correct and will add score
    choiceText.forEach(choice => {
        choice.addEventListener('click', (c) => {
            console.log(c.target.getAttribute('data-check'));
            if (c.target.getAttribute('data-check') == 'true') {
                //The score will add 100 when its correct and added to the innerText of 'score'
                score += 100;
                scoreText.innerText = score;
            } else {
                console.log('wrong');
            }
            getNextQuestion();
        })
    })
}

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
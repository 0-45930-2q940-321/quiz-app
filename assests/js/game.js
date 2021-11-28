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

let inOrderQuestion;

let questionIndex;

let activeQuestion;

let i = 0;

let score;

function startQuiz() {
    score = 0;
    getNextQuestion();
    checkAnswers();
    hoverSound();
    startTime();
}

function getNextQuestion() {
    //inOrderQuestion will equal to current questionObj
    inOrderQuestion = questionObj[i]
    //If the question is greater than questionObj length, it will tally the score to the highscore page
    if (i > questionObj.length - 1) {
        localStorage.setItem('mostRecentScore', score)
        highScores.push(score)

        location.assign('../pages/data.html')
        return false;
    }
    //innerText of 'question' will be the CURRENT prompt 
    questionEl.innerText = questionObj[i].prompt

    //Will get the questionObj index and get all the answers and boolean values of each and put them into their respective innerText 
    choiceOne.innerText = questionObj[i].answers[0].text;
    choiceOne.setAttribute('data-check', questionObj[i].answers[0].correct);

    choiceTwo.innerText = questionObj[i].answers[1].text;
    choiceTwo.setAttribute('data-check', questionObj[i].answers[1].correct);

    choiceThree.innerText = questionObj[i].answers[2].text;
    choiceThree.setAttribute('data-check', questionObj[i].answers[2].correct);

    choiceFour.innerText = questionObj[i].answers[3].text;
    choiceFour.setAttribute('data-check', questionObj[i].answers[3].correct);

    i++
}

function hoverSound(sound) {
    const choiceSound = document.getElementById(sound)
    choiceSound.play();
}

function checkAnswers() {

    const correctSound = new Audio('../sounds/Correct.mp3');
    const wrongSound = new Audio('../sounds/Incorrect.mp3');


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
                scoreText.innerText = score;

                c.target.setAttribute('style', 'background-color:black', 'color:white')

                getNextQuestion();

            }, 1000);
        })
    })
}

//This will start the timer that will count down to 30. When the timer is done it will make you lose so you can't enter your score.
function startTime() {
    let sec = 60;

    let gameOver = new Audio('../sounds/Game-Over.mp3')

    setInterval(function () {

        countDown.innerHTML = --sec;

        if (sec === 0) {
            window.location.assign('../../index.html')
            gameOver.play();
        }

        if (sec < 6) {
            countDown.setAttribute('style', 'color:red')
        }

    }, 1000);
}

const questionObj = [
    {
        prompt: 'What artists recorded two of their bestselling albums while they were behind bars?',
        answers: [
            { text: 'Tupac', correct: false },
            { text: 'Ozzy Osbourne', correct: false },
            { text: 'Johnny Cash', correct: true },
            { text: '50 Cent', correct: false }
        ]
    },
    {
        prompt: 'Michael Jackson debuted his trademark moonwalk during which song in 1983?',
        answers: [
            { text: 'Smooth Criminal', correct: false },
            { text: 'Billie Jean', correct: true },
            { text: 'Beat It', correct: false },
            { text: 'Thriller', correct: false }
        ]
    },
    {
        prompt: 'It took Mariah Carey 15 minutes to write which song in 1994?',
        answers: [
            { text: 'Without You', correct: false },
            { text: 'Fantasy', correct: false },
            { text: 'Emotions', correct: false },
            { text: 'All I Want For Christmas Is You', correct: true }
        ]
    },
    {
        prompt: 'The most awarded female act of all time goes to… which 80s sensation?',
        answers: [
            { text: 'Cyndi Lauper', correct: false },
            { text: 'Madonna', correct: false },
            { text: 'Tina Turner', correct: false },
            { text: 'Whitney Houston', correct: true }
        ]
    },
    {
        prompt: 'What was Madonna‘s first top 10 hit?',
        answers: [
            { text: 'Like a Prayer', correct: false },
            { text: 'Ray of Light', correct: false },
            { text: 'Holiday', correct: true },
            { text: 'Hung Up', correct: false }
        ]
    },
    {
        prompt: 'Which DJ is known for throwing a cake at an audience member at every show?',
        answers: [
            { text: 'Calvin Harris', correct: false },
            { text: 'David Guetta', correct: false },
            { text: 'Steve Aoki', correct: true },
            { text: 'Skrillex', correct: false }
        ]
    },
    {
        prompt: 'EDM grew in part as a revolt against which music trend?',
        answers: [
            { text: 'Pop', correct: false },
            { text: 'Punk', correct: false },
            { text: 'Disco', correct: true },
            { text: 'Jazz', correct: false }
        ]
    },
    {
        prompt: 'Which 2000s artist sings: "What A Girl Wants"?',
        answers: [
            { text: 'Christina Aguilera', correct: false },
            { text: 'Carrie Underwood', correct: false },
            { text: 'Kelly Clarkson', correct: true },
            { text: 'Avril Lavigne', correct: false }
        ]
    },
    {
        prompt: 'What U.S. city is considered the "Country Music Capital of the World"?',
        answers: [
            { text: 'Nashville', correct: true },
            { text: 'Dallas', correct: false },
            { text: 'Louisville', correct: false },
            { text: 'Denver', correct: false }
        ]
    },
    {
        prompt: 'What was the name of the band Justin Timberlake started in?',
        answers: [
            { text: 'NSYNC', correct: true },
            { text: 'Backstreet Boys', correct: false },
            { text: '5ive', correct: false },
            { text: '2Gether', correct: false }
        ]
    }
]

startQuiz();

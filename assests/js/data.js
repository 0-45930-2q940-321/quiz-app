const username = document.querySelector('#username')
const form = document.querySelector('.end-form')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalscore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []
console.log(highScores);

const MAX_HIGH_SCORES = 5

//This will show 'Final Score: (number)' 
finalScore.innerText = `Final Score: ${mostRecentScore}` || 0

function saveHighScore() {
    
    form.addEventListener('submit', () => {
        localStorage.setItem(username)

        if(!username) {
            username = 'Anonymous';
            localStorage.setItem(username)
        }
    })

    if (highScores.length >= MAX_HIGH_SCORES) {
        highScores.pop()
        highScores.unshift(mostRecentScore)
    }
    else {
        highScores.unshift(mostRecentScore)
    }
    console.log(highScores);

    localStorage.setItem('highScores', JSON.stringify(highScores))
}

saveHighScore();
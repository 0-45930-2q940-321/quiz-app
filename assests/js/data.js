const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalscore')
const mostRecentScore = document.querySelector('#mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_CSORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

    
    saveHighScore = h => {
        h.preventDefault()

        const scoreObj = {
            score: mostRecentScore,
            name: username.value
        }

        highScores.push(scoreObj)

        highScores.sort((a,b) => {
            return b.scoreObj - a.scoreObj
        })

        highScores.splice(5)

        localStorage.setItem('highScores', JSON.stringify(highScores))
        window.location.assign('/')
    }
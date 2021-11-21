const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []


highScoresList.innerHTML = highScores.map( (score,username) => {
    return `<li class="high-score">${username} -> &nbsp; ${score}</li>`
}).join('')

function highScoreLimit () {
    if (highScores.length > 5) {
        highScores.pop()
        highScores.unshift()
    }
}

highScoreLimit();

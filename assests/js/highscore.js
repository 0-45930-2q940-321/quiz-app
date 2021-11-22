const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores'))



const score = {
    score: mostRecentScore,
    name: username
}

highScoresList.innerHTML = highScores.map((score) => {
    return `<li class="high-score">${score.username} -> &nbsp; ${score.score}</li>`
}).join('')


const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = highScores.map( (score,index) => {
    return `<li class="high-score">Score_${index+1} -> &nbsp; ${score}</li>`
}).join('')
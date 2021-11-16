const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${scoreObj.name} - ${scoreObj.score}`
}).join('')
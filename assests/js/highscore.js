const highScoresList = document.querySelector('#highScoresList')
//Getting 'highScores' from localStorage to be able to map over and display all scores as a string.
const highScores = JSON.parse(localStorage.getItem('highScores'))
console.log(highScores);

//Map copies the array, and lets us change how we want the information stored
highScoresList.innerHTML = highScores.map((score) => {
    return `
    <li class="high-score">
    <span>Name: <span>${score.name} |</span>
    <span>Score: <span>${score.score}</span>
    </li>
    `
    //Without join('') it will forever be an array. But since we have it, the array will be turned into a string.
}).join('')

const test = [1, 2, 3]

console.log(test.join(''))
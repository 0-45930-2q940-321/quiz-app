const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalscore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const fallBackSaveScore = document.querySelectorAll(".save-high-score");
let usernameInpVal;

const MAX_HIGH_SCORES = 5;

finalScore.innerText = `Final Score: ${localStorage.getItem("mostRecentScore")}` || 0;

//Gets the 'username value', which is what is entered. And stores it in the variable 'usernameInpVal'
username.addEventListener("keyup", () => {
    usernameInpVal = username.value;
    console.log(usernameInpVal);
});

//Whenever 'Go Home' or 'Play again' is clicked the 'name' and 'score' will save. If a 'name' isn't inputted it'll default the 'name' as guest and save the 'score' with it.
fallBackSaveScore.forEach((el) => {
    el.addEventListener("click", () => {
        if (usernameInpVal) {
            saveHighScore(usernameInpVal, mostRecentScore);
        } else {
            saveHighScore("Guest", mostRecentScore);
        }
    });
});

//The function 'saveHighScore' will have arguements of 'nameValue' and 'scoreValue'. 
//Good practice to do so, so you can call it whenever you need to save a score with a name and score.
function saveHighScore(nameValue, scoreValue) {
    //Converting strings into an array and getting an array from 'localStorage'. However, if there is no array it will be assigned to an empty array
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    const score = {
        score: scoreValue,
        name: nameValue,
    };
    //This if statement will limit the total number of scores listed in 'highScoreList' and will remove the lowest score
    if (highScores.length >= MAX_HIGH_SCORES) {
        highScores.pop();
        highScores.unshift(score);
    } else {
        highScores.unshift(score);
    }
    console.log(highScores);
    //Making the array into an a string and putting it in localStorage
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

//Note: Nothing will be saved if neither of the buttons are pressed. Even hitting enter will nullify the saveHighScore function.

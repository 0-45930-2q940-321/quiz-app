const hoverSound = document.querySelector('.play-btn')

function playSound() {
    let goSound = new Audio('../sounds/Incorrect.mp3');

    hoverSound.addEventListener('mouseover', goSound.play())
}




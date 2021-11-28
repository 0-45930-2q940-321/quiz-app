# Music will play at the beginning. You can stop or mute it yourself.

## Music Quiz

### Credits to (https://github.com/LazyLizard95) for helping me rethink my starting process
### Credits again to (https://github.com/SyedAli310) for teaching me to me new things, and a better grip on localStorage than before

## How the quiz functions:
#### First 2 buttons are made that direct the player to the Game or the Highscore page.
#### When the player clicks the game button, will direct to a new page.
#### On that new page, the game will start. A timer of 60 secounds will countdown to 0.
#### If they player does not answer all questions within 60 seconds the game ends and redirects back to the Start page.
#### If the player answers all questions, it will set the score in localStorage and direct the player to the Data page.
#### Then the player will choose a name to tie their score with and submit their name by choosing 2 buttons; Play again or Go Home.
#### The name will be in objects of an array with the score they got. Then mapped to change how the information is stored and turning the array into a string.
#### The players name and score will show in the Highscore page.
#### The Highscore page will only have at max 5 scores. If it exceeds the ammount it will pop the last score entered before shifting a players score in the highscore array.

https://94r0372189547389.github.io/quiz-app/
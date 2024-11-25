let userName = prompt("Hello, What is your name?")

userName ? document.getElementById('greeting').interText=`Hello, ${userName}!` : document.getElementById('greeting').innerText='Hello stranger!'

function shakeMagic8Ball(){
//get user qustion
let userQuestion = 'Am I going to win?'

console.log(`${userName} asked: ${userQuestion}`)
// do not Touch
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = ''
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 7:
    eightBall = 'Signs point to yes'
  default:
    console.log(`There appears to be a problem ${userName}! Please contact nine bal services.`)
}

console.log(`Magic Eightball: ${eightBall}`)

}

let userName = prompt("Hello, What is your name?")

let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')


userName ? document.getElementById('greeting').interText=`Hello, ${userName}!` 
: document.getElementById('greeting').innerText='Hello stranger!'


function shakeMagic8Ball(){
//get user qustion
let userQuestion = prompt('What do you want to ask the 8 Ball')

// do not Touch
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = ''
let imageChoice = ''
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    imageChoice = 'imgs/ball1.jpg'
    break;
  case 1:
    eightBall = 'It is decidedly so'
     imageChoice = 'imgs/ball2.jpg'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
     imageChoice = 'imgs/ball3.jpg'
    break;
  case 3:
    eightBall = 'Cannot predict now'
     imageChoice = 'imgs/ball4.avif'
    break;
  case 4:
    eightBall = 'Do not count on it'
     imageChoice = 'imgs/ball5.png'
    break;
  case 5:
    eightBall = 'My sources say no'
     imageChoice = 'imgs/ball6.jpg'
    break;
  case 6:
    eightBall = 'Outlook not so good'
     imageChoice = 'imgs/ball7.jpg'
    break;
  case 7:
    eightBall = 'Signs point to yes'
     imageChoice = 'imgs/ball8.jpg'
  default:
    console.log(`There appears to be a problem ${userName}! Please contact nine bal services.`)
}

console.log(`Magic Eightball: ${eightBall}`)

document.getElementById('response-text').innerText = `${userName} has asked ${userQuestion} to the almighty 8eightBall. The 8 ball has replied ${eightBall}.`

responseImg.src = imageChoice
}

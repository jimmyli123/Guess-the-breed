document.querySelector('#takeTheGuess').addEventListener('click', checkAnswer)
document.querySelector('#begin').addEventListener('click', playTime)
let dogUrl = 'https://dog.ceo/api/breeds/image/random'

let currentBreed;

function playTime() {
    document.querySelector('#gameTime').style.display = "block"
    justDoIt()
}

let totalCounter = 0;
let correctGuesses = 0;


function justDoIt() {
    document.querySelector('#begin').style.display = "none"
    fetch(dogUrl)
    .then(res=> res.json())
    .then(data => { 
        console.log(data)
        document.querySelector('img').src=data.message;
        currentBreed = getBreedFromString(data.message)
        console.log(currentBreed)
    })
    
    
}

function checkAnswer() {
    let guess = document.querySelector('#guess').value
    if (guess.toLowerCase() === currentBreed) {
        correctGuesses++
        document.getElementById('result').innerText = 'Wow, you are correct!'
    }
    else {
        document.getElementById('result').innerText = 'Unfortunately, you are wrong.'
    }
    document.querySelector('#playerScore').innerText = correctGuesses;
    document.getElementById('totalQuestions').innerText = totalCounter+1;
    totalCounter++;
    justDoIt()
}

function getBreedFromString(word) {
    let needFilter = word.split('/')
    let indexOfBreed = 0;
    for (let i =0; i <needFilter.length; i++) {
        if (needFilter[i] === 'breeds'){
            indexOfBreed = i+1
        }
    }
    return needFilter[indexOfBreed].split('-').join(' ')
}


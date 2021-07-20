document.querySelector('#takeTheGuess').addEventListener('click', justDoIt)
document.querySelector('#begin').addEventListener('click', playTime)
let dogUrl = 'https://dog.ceo/api/breeds/image/random'


function playTime() {
    document.querySelector('#gameTime').style.display = "block"
    fetch(dogUrl)
    .then(res=> res.json())
    .then(data => { 
        console.log(data)
        document.querySelector('img').src=data.message;
        let breed = data.message.split('/')
        console.log(`Breed= ${breed}`)
        
    })
}

let counter = 0;



function justDoIt() {
    document.getElementById('totalQuestions').innerText = counter+1;
    counter++;
    
}
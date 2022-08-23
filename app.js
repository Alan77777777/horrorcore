const squares = document.querySelectorAll('.square')
const mole = document.querySelector('mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const time = document.querySelector('#time').value
const dificulty = document.querySelector('#dificulty').value * 100
let formulario = document.querySelector("#formulario")
let sonido = document.querySelector('#sonido')
let reset = document.querySelector('#reset')
let countDownTimerId
let randomGif
let randomGifComp
let randomSound
let randomSong

randomSong = Math.floor(Math.random() * 5)
    // sonido.innerHTML = `<audio src="./SONGS/${randomSong}.mp3" autoplay></audio>`

formulario.addEventListener("submit", () => {
    console.log('start')
    console.log("Evento submit ejecutado");
    console.log(time, dificulty)
    countDownTimerId = setInterval(countDown, 1000)
    moveMole()
});

reset.addEventListener("submit", () => {
    console.log('reset')
    location.reload()
});

let result = 0;
let hitPosition
let currentTime = time
let timerId = null

function randomSquare() {
    // if (randomGif = randomGifComp) {
    //     randomGif = Math.floor(Math.random() * 25)
    // } crazy botton
    squares.forEach(square => {
        square.classList.remove('gifi' + randomGif)
        square.classList.remove('hover')
    })

    let randomSquare = squares[Math.floor(Math.random() * squares.length)]
    randomGif = Math.floor(Math.random() * 25)
    randomGifComp = randomGif

    console.log(randomSquare)
    console.log(randomGif)
    randomSquare.classList.add('gifi' + randomGif)
    randomSquare.classList.add('hover')
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            randomSound = Math.floor(Math.random() * 3)
            sonido.innerHTML = `<audio src="./SOUNDS/${randomSound}.mp3" autoplay></audio>`
            result++;
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, dificulty)
}

// moveMole()

function countDown() {

    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        sonido.innerHTML = `<audio src="./SONGS/${randomSong}.mp3" autoplay></audio>`


        alert(
            `GAME OVER YOUR FINAL SCORE IS ${result} - ${result} - ${result} !!!!!!!!!!!!!!!!!!!!` +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '███▀▀▀██┼███▀▀▀███┼███▀█▄█▀███┼██▀▀▀' +
            '                                    ' +
            '██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼█┼┼┼██┼██┼┼┼' +
            '                                    ' +
            '██┼┼┼▄▄▄┼██▄▄▄▄▄██┼██┼┼┼▀┼┼┼██┼██▀▀▀' +
            '                                    ' +
            '██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██┼┼┼' +
            '                                    ' +
            '███▄▄▄██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██▄▄▄' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '███▀▀▀███┼▀███┼┼██▀┼██▀▀▀┼██▀▀▀▀██▄┼' +
            '                                    ' +
            '██┼┼┼┼┼██┼┼┼██┼┼██┼┼██┼┼┼┼██┼┼┼┼┼██┼' +
            '                                    ' +
            '██┼┼┼┼┼██┼┼┼██┼┼██┼┼██▀▀▀┼██▄▄▄▄▄▀▀┼' +
            '                                    ' +
            '██┼┼┼┼┼██┼┼┼██┼┼█▀┼┼██┼┼┼┼██┼┼┼┼┼██┼' +
            '                                    ' +
            '███▄▄▄███┼┼┼─▀█▀┼┼─┼██▄▄▄┼██┼┼┼┼┼██▄' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼██┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼██┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼████▄┼┼┼▄▄▄▄▄▄▄┼┼┼▄████┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼▀▀█▄█████████▄█▀▀┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼┼█████████████┼┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼┼██▀▀▀███▀▀▀██┼┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼┼██┼┼┼███┼┼┼██┼┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼┼█████▀▄▀█████┼┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼┼┼███████████┼┼┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼▄▄▄██┼┼█▀█▀█┼┼██▄▄▄┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼▀▀██┼┼┼┼┼┼┼┼┼┼┼██▀▀┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼▀▀┼┼┼┼┼┼┼┼┼┼┼▀▀┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    ' +
            '┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼' +
            '                                    '

        )
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        location.reload()
    }
}

// GLITCHING
function glitchItUp() {
    document.querySelector('.inputs').style.display = 'none'
    document.querySelector('.displays').style.display = 'none'
    document.querySelector('.info').style.display = 'none'
    document.querySelector('.foot').style.display = 'none'
    document.querySelector('.grid').style.width = '100%';
    // document.querySelector('.grid').innerHTML = `<div class="grid">
    // <div class="square" id="1"></div>
    // <div class="square" id="2"></div>
    // <div class="square" id="3"></div>
    // <div class="square" id="4"></div>
    // <div class="square" id="5"></div>
    // <div class="square" id="6"></div>
    // <div class="square" id="7"></div>
    // <div class="square" id="8"></div>
    // <div class="square" id="9"></div>
    // <div class="square" id="10"></div>
    // <div class="square" id="11"></div>
    // <div class="square" id="12"></div>
    // <div class="square" id="13"></div>
    // <div class="square" id="14"></div>
    // <div class="square" id="15"></div>
    // <div class="square" id="16"></div>
    // <div class="square" id="17"></div>
    // <div class="square" id="18"></div>
    // <div class="square" id="19"></div>
    // <div class="square" id="20"></div>
    // </div>`
    sonido.innerHTML = `<audio src="./SONGS/${randomSong}.mp3" autoplay></audio>`
    countDownTimerId = setInterval(countDown, 1000)
    moveMole()
    window.location.replace("http://127.0.0.1:5500/whac-a-mole/glitchPage.html");

}
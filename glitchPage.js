const squares = document.querySelectorAll('.square')
const mole = document.querySelector('mole')
const time = 99999
const dificulty = 1
let sonido = document.querySelector('#sonido')
let randomGif
let randomGifComp
let randomSong
let randomGlitch = Math.floor(Math.random() * 2 + 1)
let randomNumber = Math.floor(Math.random() * 5)
randomSong = Math.floor(Math.random() * 5)
sonido.innerHTML = `<audio src="./SONGS/${randomSong}.mp3" autoplay></audio>`
    // console.log(time, dificulty)
moveMole()

function randomSquare() {

    switch (randomNumber) {
        case 1:
            if (randomGif = randomGifComp) {
                randomGif = Math.floor(Math.random() * 25)
            }
            break;
        case 2:
            if (randomGif = randomGif) {
                randomGif = randomGif = 1
            }
            break;
        default:
    }

    squares.forEach(square => {
        square.classList.remove('gifi' + randomGif)
    })



    let randomSquare = squares[Math.floor(Math.random() * squares.length)]
    randomGif = Math.floor(Math.random() * 25)
    randomGifComp = randomGif
        // console.log(randomSquare)
        // console.log(randomGif)
    randomSquare.classList.add('gifi' + randomGif)

}

function moveMole() {
    timerId = setInterval(randomSquare, dificulty)
}
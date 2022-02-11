// * GLOBAL VARIABLES

let gameOverScreen = document.querySelector("#gameover-screen")
let startScreen = document.querySelector("#start-screen")
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")
let yourScoreDom = document.querySelector("#accumulator")
let newGame
const audio1 = new Audio()
audio1.src = "./sounds/startplaymusic.mp3"
audio1.load()
audio1.volume = 0.05
audio1.loop = true

const audio2 = new Audio()
audio2.src = "./sounds/starwarsintro.mp3"
audio2.load()
audio2.volume = 0.05
audio2.play()

const audio3 = new Audio()
audio3.load()
audio3.src = "./sounds/sonidolaser.mp3"

const audio4 = new Audio()
audio4.src = "./sounds/marchaimperial.mp3"
audio4.load()
audio4.volume = 0.07


// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
    startScreen.style.display = "none"
    gameOverScreen.style.display = "none"
    canvas.style.display = "flex"
    audio1.play()
    audio2.pause()
    audio4.pause()
    newGame = new Game()
    newGame.gameLoop()
}

// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn") 
startButton.addEventListener("click", startGame)

let playAgainButton = document.querySelector("#replay-btn")
playAgainButton.addEventListener("click", startGame)

document.addEventListener("keydown",(event) => {
    newGame.ship.movShip(event)
    newGame.ship.shoot(event)
} )

document.addEventListener("keyup", (event) => {
    newGame.ship.movAltShip(event)
})
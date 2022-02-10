// * GLOBAL VARIABLES

let gameOverScreen = document.querySelector("#gameover-screen")
let startScreen = document.querySelector("#start-screen")
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")
let yourScoreDom = document.querySelector("#accumulator")
let newGame

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
    startScreen.style.display = "none"
    gameOverScreen.style.display = "none"
    canvas.style.display = "flex"
    
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
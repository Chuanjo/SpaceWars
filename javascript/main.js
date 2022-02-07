// * GLOBAL VARIABLES

let gameOverScreen = document.querySelector("#gameover-screen")
let startScreen = document.querySelector("#start-screen")
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")
let newGame


// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
    startScreen.style.display = "none"
    canvas.style.display = "flex"
    newGame = new Game()
    newGame.gameLoop()
}



// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn") 
startButton.addEventListener("click", startGame)

document.addEventListener( "keydown",( event) =>{
    newGame.ship.movShip(event)
} )

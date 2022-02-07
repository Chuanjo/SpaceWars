class Game{
    constructor() {
        this.bg = new Image()
        this.bg.src = "../images/fondocanvas.png"
        this.ship = new Ship()
    }

    drawBackground = () => {
        ctx.drawImage(this.bg,0,0,canvas.width,canvas.height)
        
    }

    //metodos
    gameLoop = () => {
        // Limpiar canvas
        ctx.clearRect(0,0,canvas.width,canvas.height)

        // mover elementos

        
        // dibujar elementos
        this.drawBackground()
        this.ship.drawShip()
        
        // recursion animacion

        requestAnimationFrame(this.gameLoop)        
    }

}
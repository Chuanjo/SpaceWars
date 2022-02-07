class Game{
    constructor() {
        this.bg = new Image()
        this.bg.src = "../images/fondocanvas.png"
        this.ship = new Ship()
        this.enemyArr = [new Enemy()]
        this.enemyDist = 150
        this.enemy = new Enemy()
    }

    drawBackground = () => {
        ctx.drawImage(this.bg,0,0,canvas.width,canvas.height)
        
    }

    spawnEnemy = () => {
        let lastEnemy = this.enemyArr[this.enemyArr.length - 1]
        if (lastEnemy.y > (0 + this.enemyDist)) {
            let randomX = Math.random() * (canvas.width - this.enemy.width)
            randomX = Math.floor(randomX)
            this.enemyArr.push(new Enemy(randomX))
        }
    }

    checkShipEnemyCollision = (eachEnemyParam) => {
        if (this.ship.x < eachEnemyParam.x + eachEnemyParam.width &&
            this.ship.x + this.ship.width > eachEnemyParam.x &&
            this.ship.y < eachEnemyParam.y + eachEnemyParam.height &&
            this.ship.height + this.ship.y > eachEnemyParam.y) {

                this.isGameOn = false
                canvas.style.display = "none"
                gameOverScreen.style.display = "flex"  
            }
    }

    cleanCanvas = () => {
        ctx.clearRect(this.bg,0,0,canvas.width,canvas.height)
    }

    //metodos
    gameLoop = () => {
        // Limpiar canvas
        this.cleanCanvas()

        // mover elementos
        this.enemyArr.forEach( (eachEnemy) => {
            eachEnemy.enemyMov()
        })

        this.spawnEnemy()
        this.enemyArr.forEach((eachEnemy) => {
            this.checkShipEnemyCollision(eachEnemy)
        })
        
        // dibujar elementos
        this.drawBackground()
        this.ship.drawShip()
        this.enemyArr.forEach( (eachEnemy) => {
            eachEnemy.drawEnemy()
        })
        
        // recursion animacion

        requestAnimationFrame(this.gameLoop)        
    }

}
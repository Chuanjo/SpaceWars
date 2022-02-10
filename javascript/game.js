class Game{
    constructor() {
        this.ship = new Ship()
        this.enemyArr = [new Enemy()]
        this.enemyDist = 150
        this.enemy = new Enemy()
        this.isGameOn = true
        this.score = new Score()
        this.background = new Background()
    }

// * METHODS

    cleanCanvas = () => {
        ctx.clearRect(this.bg,0,0,canvas.width,canvas.height)
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

                const eachEnemyParamIndex = this.enemyArr.indexOf(eachEnemyParam)

                this.enemyArr.splice(eachEnemyParamIndex, 1)

                this.ship.lives -= 1

                if (this.ship.lives === 0 ) {
                    this.isGameOn = false
                    canvas.style.display = "none"
                    gameOverScreen.style.display = "flex"
                    yourScoreDom.innerText =  this.score.score
                } 
            }
    }
    checkSootEnemyCollision = (eachEnemy, shootParam, indexEnemy) => {
        if (shootParam.x < eachEnemy.x + eachEnemy.width &&
            shootParam.x + shootParam.width > eachEnemy.x &&
            shootParam.y < eachEnemy.y + eachEnemy.height &&
            shootParam.height + shootParam.y > eachEnemy.y) {
                this.enemyArr.splice(indexEnemy, 1)
                const indexShoot = this.ship.shootArr.indexOf(shootParam)
                this.ship.shootArr.splice(indexShoot, 1)
                this.score.score+= 100
            }
    }
    drawLives = () => {
        ctx.font = "30px monospace"
        ctx.fillStyle= "LightBlue"
        ctx.fillText(`LIVES: ${this.ship.lives}`, 650, 30)
}
    gameLoop = () => {

        this.cleanCanvas()

    // * MOVEMENT

        this.enemyArr.forEach( (eachEnemy) => {
            eachEnemy.enemyMov()
        })
        this.spawnEnemy()
        this.enemyArr.forEach((eachEnemy, indexEnemy) => {
            this.checkShipEnemyCollision(eachEnemy)
            this.ship.shootArr.forEach((shootParam) => {
                this.checkSootEnemyCollision(eachEnemy,shootParam, indexEnemy)
            })
        })
        this.ship.shootArr.forEach( (eachShoot) => {
            eachShoot.shootMov()
        })
        this.ship.updatePositionShip()
        this.background.backgroundMov()
        
    // * DRAWN

        this.background.drawBackground()

        this.score.drawScore()

        this.drawLives()

        this.ship.drawShip()

        this.ship.shootArr.forEach( (eachShoot) => {
            eachShoot.drawShoot()
        })

        this.enemyArr.forEach( (eachEnemy) => {
            eachEnemy.drawEnemy()
        })
        
        
    // * RECURSION 

        if (this.isGameOn === true) {
            requestAnimationFrame(this.gameLoop)
        }
               
    }

}
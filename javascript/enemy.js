class Enemy {
    constructor(paramX) {
        this.img = new Image()
        this.img.src = "./images/tie.png"
        this.x = paramX
        this.y = - 30
        this.height = 60
        this.width = 60
        this.speedEnemy = 4
        this.correction = 10
    }
    drawEnemy = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    enemyMov = () => {
        this.y = this.y + this.speedEnemy 
    }
}
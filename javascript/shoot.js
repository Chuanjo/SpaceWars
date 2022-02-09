class Shoot {
    constructor(paramShipX, paramShipY) {
        this.img = new Image()
        this.img.src = "./images/shoot.png"
        this.x = paramShipX
        this.y = paramShipY
        this.height = 10
        this.width = 20
        this.shootSpeed = 5
        this.shootCorrect = 25
    }

    drawShoot = () => {
        ctx.drawImage(this.img, this.x + this.shootCorrect, this.y, this.height, this.width)
    }
    shootMov = () => {
        this.y = this.y - this.shootSpeed
    }
}
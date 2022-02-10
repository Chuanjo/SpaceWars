class Liveup {
    constructor(paramX) {
        this.img = new Image()
        this.img.src = "./images/upgrade.png"
        this.x = paramX
        this.y = - 30
        this.height = 30
        this.width = 30
        this.speedLiveup = 1
    }

    drawLiveup = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    liveupMov = () => {
        this.y = this.y + this.speedLiveup
    }
}
class Ship {
    constructor() {
        this.img = new Image()
        this.img.src = "./images/xwing2.png"
        this.speedX = 0
        this.speedY = 0
        this.x = canvas.width / 2 - 30
        this.y = canvas.height - 100
        this.height = 60
        this.width = 60
        this.correction = 10
        this.shootArr = []
    }
    drawShip = () => {
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
    shoot = (event) => { 
        if (event.key === " "){
            const newShoot = new Shoot(this.x, this.y)
            this.shootArr.push(newShoot)
        }
    }
    updatePositionShip = () => {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x > canvas.width - this.width - this.correction || this.x < 0 + this.correction) {
            this.speedX = 0
        } else if (this.y > canvas.height - this.height || this.y < 0) {
            this.speedY = 0
        }
    }
    movAltShip = (event) => {
        if (event.key === "a" || event.key === "d") {
            this.speedX = 0
        } else if (event.key === "w" || event.key === "s") {
            this.speedY = 0
        }
    }
    movShip = (event) => {
        if (event.key === "d" && this.x < canvas.width - this.width - this.correction) {
            this.speedX = 5
        }
        if (event.key === "a"  && this.x > 0 + this.width + this.correction) {
            this.speedX = -5
        }
        if (event.key === "s" && this.y < canvas.height - this.height) {
            this.speedY = 5
        }
        if (event.key === "w" && this.y > 0) {
            this.speedY = -5
        } 
    }
}
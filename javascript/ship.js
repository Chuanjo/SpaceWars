class Ship {
    constructor() {
        // propiedades
        this.img = new Image()
        this.img.src = "../images/nave.png"
        this.x = canvas.width / 2 - 30
        this.y = canvas.height - 100
        this.height = 60
        this.width = 60
        this.speedShip = 20
        this.correction = 10
    }
    // metodos
    drawShip = () => {
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }

    movShip = (event) => {
        if (event.key === "d" && this.x < canvas.width - this.width - this.correction ) {
            this.x = this.x + this.speedShip
        } else if (event.key === "a" && this.x > 0 + this.correction) {
            this.x = this.x - this.speedShip
        } else if (event.key === "s" && this.y < canvas.height - this.height) {
            this.y = this.y + this.speedShip
        } else if (event.key === "w" && this.y > 0) {
            this.y = this.y - this.speedShip
        } 
    }
}
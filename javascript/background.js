class Background {
    constructor () {
        this.x = 0
        this.y1 = 0
        this.y2 = 600
        this.bg1 = new Image()
        this.bg1.src = "./images/fondocanvas.png"
        this.bg2 = new Image()
        this.bg2.src = "./images/fondocanvas.png"
    }

    backgroundMov = () => {
        if (this.y1 >= 600) {
            this.y1 = -600
        }
        if (this.y2 >= 600) {
            this.y2 = - 600
        }
        this.y1 += 0.2
        this.y2 += 0.2
    }

    drawBackground = () => {
        ctx.drawImage(this.bg1,0,this.y1,canvas.width,canvas.height)
        ctx.drawImage(this.bg2,0,this.y2,canvas.width,canvas.height)
    }

}
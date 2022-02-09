class Score {
    constructor() {
        this.img = new Image()
        this.img.src = "./images/counter.png";
        this.score = 0
        this.x = 0
        this.y = 0
        this.width = 100
        this.height = 100
        
        
      }
    
      drawScore = () => {
        ctx.font = "30px Arial "
        ctx.fillStyle= "LightBlue"
        ctx.fillText(`SCORE: ${this.score}`, 10, 30)
    }
}
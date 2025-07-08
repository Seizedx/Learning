export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Creepster';
    }
    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        context.fillText('Score: ' + this.game.score, 20, 50);
        context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(2), 20, 80);

        for(let i = 0; i < this.game.lives; i++) {
            context.fillText('💔', 18 + 23 * i, 110);
        };
        if(this.game.gameOver) {
            context.textAlign = 'left';
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            context.textAlign = 'center';
            context.fillText('Game Over', this.game.width * 0.5, this.game.height * 0.5);
            context.font = this.fontSize * 1.2 + 'px ' + this.fontFamily;
            context.fillText('Score: ' + this.game.score, this.game.width * 0.5, this.game.height * 0.6);
        }
    }
}
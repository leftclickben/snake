module.exports = GameView;

function GameView (game, canvas, score, tileSize) {
    var context = canvas.getContext('2d');

    this.initialise = () => {
        canvas.width = game.width() * tileSize;
        canvas.height = game.height() * tileSize;
        canvas.style.width = canvas.width + 'px';
        canvas.style.height = canvas.height + 'px';
    };

    this.draw = () => {
        var i, len, coords;
        context.clearRect(0, 0, canvas.width, canvas.height);

        coords = game.apple().position().coords();
        context.beginPath();
        context.arc((coords.x + 0.5) * tileSize + 1, (coords.y + 0.5) * tileSize + 1, tileSize / 2 - 2, 0, 2 * Math.PI, false);
        context.fillStyle = game.dead() ? '#666' : '#f00';
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = game.dead() ? '#ccc' : '#600';
        context.stroke();

        context.fillStyle = game.dead() ? '#ccc' : '#880';
        for (i = 0, len = game.snake().bodyLength(); i < len; ++i) {
            coords = game.snake().bodyElement(i);
            context.fillRect(coords.x * tileSize, coords.y * tileSize, tileSize, tileSize);
        }

        score.style.color = game.dead() ? '#f00' : '#000';
        score.innerText = game.score() + (game.dead() ? ' [GAME OVER]' : '');
    };
}

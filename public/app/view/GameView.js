module.exports = GameView;

const Direction = require('../util/Direction');

function GameView (game, canvas, score, tileSize) {
    const context = canvas.getContext('2d');

    this.initialise = () => {
        canvas.width = game.width() * tileSize;
        canvas.height = game.height() * tileSize;
        canvas.style.width = canvas.width + 'px';
        canvas.style.height = canvas.height + 'px';
    };

    this.draw = () => {
        var snake = game.snake();

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (!game.dead()) {
            let coords = game.apple().position().coords();
            context.fillStyle = '#f00';
            context.strokeStyle = '#600';
            context.lineWidth = 2;
            context.beginPath();
            context.arc((coords.x + 0.5) * tileSize + 1, (coords.y + 0.5) * tileSize + 1, tileSize / 2 - 2, 0, 2 * Math.PI, false);
            context.fill();
            context.stroke();
        }

        context.fillStyle = game.dead() ? '#ccc' : '#880';
        context.strokeStyle = game.dead() ? '#eee' : '#330';
        context.lineWidth = 1;
        context.beginPath();
        for (let i = 0, len = snake.bodyLength(); i < len; ++i) {
            let coords = snake.bodyElement(i),
                previousCoords = i === 0 ? undefined : snake.bodyElement(i - 1),
                nextCoords = snake.bodyElement(i + 1),
                previousToLeft = previousCoords && previousCoords.x === coords.x - 1 && previousCoords.y === coords.y,
                previousToTop = previousCoords && previousCoords.y === coords.y - 1 && previousCoords.x === coords.x,
                previousToRight = previousCoords && previousCoords.x === coords.x + 1 && previousCoords.y === coords.y,
                previousToBottom = previousCoords && previousCoords.y === coords.y + 1 && previousCoords.x === coords.x,
                nextToLeft = nextCoords && nextCoords.x === coords.x - 1 && nextCoords.y === coords.y,
                nextToTop = nextCoords && nextCoords.y === coords.y - 1 && nextCoords.x === coords.x,
                nextToRight = nextCoords && nextCoords.x === coords.x + 1 && nextCoords.y === coords.y,
                nextToBottom = nextCoords && nextCoords.y === coords.y + 1 && nextCoords.x === coords.x,
                headLeft = !nextCoords && snake.direction() === Direction.LEFT,
                headTop = !nextCoords && snake.direction() === Direction.UP,
                headRight = (!nextCoords && snake.direction() === Direction.RIGHT),
                headBottom = (!nextCoords && snake.direction() === Direction.DOWN),
                tailLeft = !previousCoords && nextToRight,
                tailTop = !previousCoords && nextToBottom,
                tailRight = !previousCoords && nextToLeft,
                tailBottom = !previousCoords && nextToTop,
                left = coords.x * tileSize,
                top = coords.y * tileSize,
                right = (coords.x + 1) * tileSize,
                bottom = (coords.y + 1) * tileSize;
            context.fillRect(left, top, tileSize, tileSize);
            context.moveTo(left, bottom);
            if (headLeft || tailLeft) {
                context.arc(left, top + tileSize / 2, tileSize / 2, Math.PI / 2, -Math.PI / 2, false);
                if (headLeft) {
                    context.moveTo(left, top + tileSize / 4 + 2);
                    context.arc(left, top + tileSize / 4, 2, 0, Math.PI * 2);
                    context.moveTo(left, top + tileSize * 3 / 4 - 2);
                    context.arc(left, top + tileSize * 3 / 4, 2, 0, Math.PI * 2);
                }
            } else if (!previousToLeft && !nextToLeft) {
                context.lineTo(left, top);
            }
            context.moveTo(left, top);
            if (headTop || tailTop) {
                context.arc(left + tileSize / 2, top, tileSize / 2, Math.PI, 0, false);
                if (headTop) {
                    context.moveTo(left + tileSize / 4 + 2, top);
                    context.arc(left + tileSize / 4, top, 2, 0, Math.PI * 2);
                    context.moveTo(left + tileSize * 3 / 4 - 2, top);
                    context.arc(left + tileSize * 3 / 4, top, 2, 0, Math.PI * 2);
                }
            } else if (!previousToTop && !nextToTop) {
                context.lineTo(right, top);
            }
            context.moveTo(right, top);
            if (headRight || tailRight) {
                context.arc(right, top + tileSize / 2, tileSize / 2, -Math.PI / 2, Math.PI / 2, false);
                if (headRight) {
                    context.moveTo(right, top + tileSize / 4 + 2);
                    context.arc(right, top + tileSize / 4, 2, 0, Math.PI * 2);
                    context.moveTo(right, top + tileSize * 3 / 4 - 2);
                    context.arc(right, top + tileSize * 3 / 4, 2, 0, Math.PI * 2);
                }
            } else if (!previousToRight && !nextToRight) {
                context.lineTo(right, bottom);
            }
            context.moveTo(right, bottom);
            if (headBottom || tailBottom) {
                context.arc(left + tileSize / 2, bottom, tileSize / 2, 0, Math.PI, false);
                if (headBottom) {
                    context.moveTo(left + tileSize / 4 + 2, bottom);
                    context.arc(left + tileSize / 4, bottom, 2, 0, Math.PI * 2);
                    context.moveTo(left + tileSize * 3 / 4 - 2, bottom);
                    context.arc(left + tileSize * 3 / 4, bottom, 2, 0, Math.PI * 2);
                }
            } else if (!previousToBottom && !nextToBottom) {
                context.lineTo(left, bottom);
            }
        }
        context.fill();
        context.stroke();

        score.style.color = game.dead() ? '#f00' : '#000';
        score.innerText = game.score() + (game.dead() ? ' [GAME OVER]' : '');
    };
}

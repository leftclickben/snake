module.exports = Game;

const Snake = require('./Snake');
const Apple = require('./Apple');

function Game (width, height, growthRate) {
    var snake = new Snake(this),
        apple = new Apple(this),
        score = 0,
        dead = false,
        running = false;

    this.width = () => width;
    this.height = () => height;
    this.growthRate = () => growthRate;
    this.snake = () => snake;
    this.apple = () => apple;
    this.score = () => score;
    this.dead = () => dead;

    this.start = () => running = true;
    this.stop = () => running = false;
    this.process = function () {
        var i, len, snakePosition, applePosition;
        if (!running) {
            return;
        }
        snakePosition = snake.move().position();
        applePosition = apple.position();
        if (snakePosition.x() === applePosition.x() && snakePosition.y() === applePosition.y()) {
            score += apple.points();
            snake.longer();
            apple.next();
        }
        for (i = 0, len = snake.bodyLength(); i < len - 1; ++i) {
            if (snake.bodyElement(i).x === snakePosition.x() && snake.bodyElement(i).y === snakePosition.y()) {
                this.stop();
                dead = true;
            }
        }
    };

    this.reset = function () {
        snake.reset();
        apple.reset();
        return this;
    };

    this.reset();
}

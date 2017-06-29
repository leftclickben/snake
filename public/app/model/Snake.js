module.exports = Snake;

const Position = require('./Position');
const Direction = require('./Direction');

function Snake (game) {
    var body = [],
        length = 5,
        directionChangeQueue = [],
        position, direction;

    this.game = () => game;
    this.position = () => position;
    this.direction = () => direction;
    this.bodyLength = () => body.length;
    this.bodyElement = (i) => body[i];

    this.longer = () => length = Math.ceil(length * game.growthRate());

    this.enqueueDirectionChange = (dir) => {
        if (dir === Direction.UP || dir === Direction.DOWN || dir === Direction.LEFT || dir === Direction.RIGHT) {
            directionChangeQueue.push(dir);
        }
    };

    this.applyNextDirectionChange = () => {
        if (directionChangeQueue.length === 0) {
            return;
        }
        const dir = directionChangeQueue.shift();
        if (!(direction === Direction.UP && dir === Direction.DOWN) &&
            !(direction === Direction.DOWN && dir === Direction.UP) &&
            !(direction === Direction.LEFT && dir === Direction.RIGHT) &&
            !(direction === Direction.RIGHT && dir === Direction.LEFT)) {
            direction = dir;
        }
    };

    this.move = function () {
        var w = game.width(),
            h = game.height(),
            x = position.x(),
            y = position.y();

        this.applyNextDirectionChange();
        switch (direction) {
            case Direction.LEFT:
                position = new Position((x + w - 1) % w, y);;
                break;

            case Direction.UP:
                position = new Position(x, (y + h - 1) % h);
                break;

            case Direction.RIGHT:
                position = new Position((x + w + 1) % w, y);
                break;

            case Direction.DOWN:
                position = new Position(x, (y + h + 1) % h);
                break;
        }

        body.push(position.coords());
        if (body.length > length) {
            body.shift();
        }

        return this;
    };

    this.reset = function () {
        position = Position.random(game);
        direction = Direction.random();
        return this;
    };
}

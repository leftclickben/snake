module.exports = Position;

const Random = require('../util/Random');

function Position (x, y) {
    this.x = () => x;
    this.y = () => y;
    this.coords = () => ({ x: x, y: y });
}

Position.random = (game) => new Position(Random.integer(game.width()), Random.integer(game.height()));

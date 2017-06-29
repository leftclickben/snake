module.exports = Position;

const Random = require('./Random');

function Position (x, y) {
    this.x = () => x;
    this.y = () => y;
    this.coords = () => ({ x: x, y: y });
}

Position.random = (width, height) => new Position(Random.integer(width), Random.integer(height));

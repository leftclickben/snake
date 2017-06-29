module.exports = Direction;

const Random = require('./Random');

function Direction () {}

Direction.LEFT = 37;
Direction.UP = 38;
Direction.RIGHT = 39;
Direction.DOWN = 40;

Direction.random = () => Direction[Random.key(Direction)];

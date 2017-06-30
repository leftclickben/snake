module.exports = Direction;

const Random = require('./Random');

function Direction () {}

Direction.LEFT = 37;
Direction.UP = 38;
Direction.RIGHT = 39;
Direction.DOWN = 40;

Direction.random = () => 37 + Random.integer(4);

Direction.fromMovement = (dx, dy) =>
    (Math.abs(dx) > Math.abs(dy)) ?
        (dx < 0 ? Direction.LEFT : Direction.RIGHT) :
        (dy < 0 ? Direction.UP : Direction.DOWN);

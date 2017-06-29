module.exports = Apple;

const Random = require('../util/Random');
const Position = require('./Position');

function Apple (game) {
    var position, points;

    this.game = () => game;
    this.position = () => position;
    this.points = () => points;

    this.reset = function () {
        position = Position.random(game);
        points = 100;
        return this;
    };

    this.next = function () {
        position = Position.random(game);
        points = points + 10;
        return this;
    };
}

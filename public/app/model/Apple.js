module.exports = Apple;

const Position = require('../util/Position');

function Apple (game) {
    var position, points;

    this.game = () => game;
    this.position = () => position;
    this.points = () => points;

    this.reset = function () {
        position = Position.random(game.width(), game.height());
        points = 100;
        return this;
    };

    this.next = function () {
        position = Position.random(game.width(), game.height());
        points = points + 10;
        return this;
    };
}

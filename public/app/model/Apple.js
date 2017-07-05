module.exports = Apple;

const Position = require('../util/Position');

function Apple (game, nextAppleValue) {
    var position, points;

    this.game = () => game;
    this.position = () => position;
    this.points = () => points;

    this.reset = function () {
        position = Position.random(game.width(), game.height());
        points = nextAppleValue();
        return this;
    };

    this.next = function () {
        position = Position.random(game.width(), game.height());
        points = nextAppleValue(points);
        return this;
    };
}

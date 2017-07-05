const Game = require('./model/Game');
const GameView = require('./view/GameView');
const KeyController = require('./controller/KeyController');
const Direction = require('./util/Direction');

window.onload = function () {
    const game = new Game(48, 27, (length) => length ? length * 1.15 : 5, (points) => points ? points + 10 : 100);
    const gameView = new GameView(game, document.querySelector('canvas'), document.querySelector('code'), 20);

    gameView.initialise();
    game.start();

    window.setInterval(timer, 50);
    KeyController.register(game, window.document);

    function timer () {
        game.process();
        gameView.draw();
    }
};

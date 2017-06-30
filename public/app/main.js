const Game = require('./model/Game');
const GameView = require('./view/GameView');
const KeyController = require('./controller/KeyController');
const Direction = require('./util/Direction');

window.onload = function () {
    var game = new Game(48, 27, 1.15),
        gameView = new GameView(game, document.querySelector('canvas'), document.querySelector('code'), 20);
    gameView.initialise();
    game.start();
    window.setInterval(() => { game.process(); }, 75);
    window.setInterval(() => { gameView.draw(); }, 75);
    KeyController.register(game, window.document);
};

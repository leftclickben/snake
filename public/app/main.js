const Game = require('./model/Game');
const GameView = require('./view/GameView');

window.onload = function () {
    var game = new Game(48, 27, 1.15),
        gameView = new GameView(game, document.querySelector('canvas'), document.querySelector('code'), 20);
    window.setInterval(() => { game.process(); gameView.draw() }, 75);
    document.addEventListener('keydown', (evt) => game.snake().enqueueDirectionChange(evt.keyCode));
    gameView.initialise();
    game.start();
};

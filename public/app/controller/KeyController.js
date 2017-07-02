module.exports = KeyController;

function KeyController () {}

KeyController.register = (game, document) =>
    document.addEventListener('keydown', (evt) => {
        game.snake().enqueueDirectionChange(evt.keyCode);
        evt.stopPropagation();
    });

module.exports = KeyController;

function KeyController () {}

KeyController.register = (game, document) =>
    document.addEventListener('keydown', (evt) => {
        game.snake().enqueueDirectionChange(evt.keyCode);
        // TODO This prevents all keypresses, so for example F5 no longer reloads the page.  Is that correct or a bug?
        evt.preventDefault();
    });

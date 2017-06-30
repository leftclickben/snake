module.exports = TouchController;

const Direction = require('../util/Direction');

function TouchController () {}

TouchController.TOUCH_THRESHOLD = 5;

TouchController.register = (game, document) => {
    var originalTouch;
    document.addEventListener('touchstart', (evt) => {
        originalTouch = evt.changedTouches[0];
        evt.preventDefault();
    });
    document.addEventListener('touchmove', (evt) => {
        const touch = evt.changedTouches[0];
        const dx = touch.pageX - originalTouch.pageX;
        const dy = touch.pageY - originalTouch.pageY;
        if (Math.abs(dx) > TouchController.TOUCH_THRESHOLD || Math.abs(dy) > TouchController.TOUCH_THRESHOLD) {
            game.snake().enqueueDirectionChange(Direction.fromMovement(dx, dy));
            originalTouch = touch;
        }
        evt.preventDefault();
    });
    document.addEventListener('touchend', (evt) => {
        originalTouch = undefined;
        evt.preventDefault();
    });
};

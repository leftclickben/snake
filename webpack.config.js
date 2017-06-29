const path = require('path');

module.exports = {
    entry: {
        app: './public/app/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'snake.js'
    }
};

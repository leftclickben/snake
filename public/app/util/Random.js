module.exports = Random;

function Random () {}

Random.integer = (n) => Math.floor(Math.random() * n);

Random.key = (obj) => {
    var keys = Object.keys(obj);
    return keys[Random.integer(keys.length)];
};

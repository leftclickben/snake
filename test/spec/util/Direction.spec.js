const expect = require('chai').expect;
const Direction = require('../../../public/app/util/Direction');

describe('The `Direction` utility module', () => {
    it('Is a constructor function', () => {
        expect(Direction).to.be.a('function');
    });
    it('Exposes constants', () => {
        expect(Direction.LEFT).to.equal(37);
        expect(Direction.UP).to.equal(38);
        expect(Direction.RIGHT).to.equal(39);
        expect(Direction.DOWN).to.equal(40);
    });
    it('Exposes the correct static methods', () => {
        expect(Direction.random).to.be.a('function');
    });
    describe('The `random` static method', () => {
        it('Returns one of the constants', () => {
            expect([ Direction.LEFT, Direction.UP, Direction.RIGHT, Direction.DOWN ]).to.contain(Direction.random());
        })
    });
});

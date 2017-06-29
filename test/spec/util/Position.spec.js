const expect = require('chai').expect;
const Position = require('../../../public/app/util/Position');

describe('The `Position` utility module', () => {
    it('Is a constructor function', () => {
        expect(Position).to.be.a('function');
    });
    it('Exposes the correct static methods', () => {
        expect(Position.random).to.be.a('function');
    });
    describe('When constructed', () => {
        var position;
        beforeEach(() => {
            position = new Position(4, 2);
        });
        it('Exposes the correct methods', () => {
            expect(position.x).to.be.a('function');
            expect(position.y).to.be.a('function');
            expect(position.coords).to.be.a('function');
        });
        it('Returns the correct values', () => {
            expect(position.x()).to.equal(4);
            expect(position.y()).to.equal(2);
            expect(position.coords()).to.deep.equal({ x: 4, y: 2 });
        });
    });
    describe('The `random` static method', () => {
        it('Returns an instance of `Position`', () => {
            expect(Position.random(30, 20)).to.be.an.instanceof(Position);
        })
    });
});

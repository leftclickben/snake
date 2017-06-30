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
        expect(Direction.fromMovement).to.be.a('function');
    });
    describe('The `random` static method', () => {
        it('Returns one of the constants', () => {
            expect([ Direction.LEFT, Direction.UP, Direction.RIGHT, Direction.DOWN ]).to.contain(Direction.random());
        })
    });
    describe('The `fromMovement` static method', () => {
        describe('When moving directly left', () => {
            it('Returns left', () => {
                expect(Direction.fromMovement(-1, 0)).to.equal(Direction.LEFT);
            });
        });
        describe('When moving approximately left', () => {
            it('Returns left', () => {
                expect(Direction.fromMovement(-10, 6)).to.equal(Direction.LEFT);
            });
        });
        describe('When moving directly up', () => {
            it('Returns up', () => {
                expect(Direction.fromMovement(0, -1)).to.equal(Direction.UP);
            });
        });
        describe('When moving approximately up', () => {
            it('Returns up', () => {
                expect(Direction.fromMovement(6, -10)).to.equal(Direction.UP);
            });
        });
        describe('When moving directly right', () => {
            it('Returns right', () => {
                expect(Direction.fromMovement(1, 0)).to.equal(Direction.RIGHT);
            });
        });
        describe('When moving approximately right', () => {
            it('Returns right', () => {
                expect(Direction.fromMovement(10, 6)).to.equal(Direction.RIGHT);
            });
        });
        describe('When moving directly down', () => {
            it('Returns down', () => {
                expect(Direction.fromMovement(0, 1)).to.equal(Direction.DOWN);
            });
        });
        describe('When moving approximately down', () => {
            it('Returns down', () => {
                expect(Direction.fromMovement(6, 10)).to.equal(Direction.DOWN);
            });
        });
    });
});

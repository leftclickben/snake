const expect = require('chai').expect;
const Apple = require('../../../public/app/model/Apple');
const Position = require('../../../public/app/util/Position');

describe('The `Apple` model', () => {
    it('Is a constructor function', () => {
        expect(Apple).to.be.a('function');
    });
    describe('When constructed', () => {
        var game, apple;
        beforeEach(() => {
            game = {
                width: () => 30,
                height: () => 20
            };
            apple = new Apple(game, (points) => points ? points + 10 : 100);
        });
        it('Exposes the correct methods', () => {
            expect(apple.game).to.be.a('function');
            expect(apple.position).to.be.a('function');
            expect(apple.points).to.be.a('function');
            expect(apple.reset).to.be.a('function');
            expect(apple.next).to.be.a('function');
        });
        describe('The `game` method', () => {
            it('Returns the passed in `game` parameter', () => {
                expect(apple.game()).to.equal(game);
            });
        });
        describe('Initially', () => {
            describe('The `position` method', () => {
                it('Returns `undefined`', () => {
                    expect(apple.position()).to.equal(undefined);
                });
            });
            describe('The `points` method', () => {
                it('Returns `undefined`', () => {
                    expect(apple.points()).to.equal(undefined);
                });
            });
        });
        describe('After being `reset`', () => {
            beforeEach(() => {
                apple.reset();
            });
            describe('The `position` method', () => {
                it('Returns a `Position`', () => {
                    expect(apple.position()).to.be.an.instanceOf(Position);
                });
            });
            describe('The `points` method', () => {
                it('Returns the default value', () => {
                    expect(apple.points()).to.equal(100);
                });
            });
            describe('After being `reset` again', () => {
                beforeEach(() => {
                    apple.reset();
                });
                describe('The `position` method', () => {
                    it('Returns a `Position`', () => {
                        expect(apple.position()).to.be.an.instanceOf(Position);
                    });
                });
                describe('The `points` method', () => {
                    it('Returns the default value', () => {
                        expect(apple.points()).to.equal(100);
                    });
                });
            });
            describe('After `next` is invoked', () => {
                beforeEach(() => {
                    apple.next();
                });
                describe('The `position` method', () => {
                    it('Returns a `Position`', () => {
                        expect(apple.position()).to.be.an.instanceOf(Position);
                    });
                });
                describe('The `points` method', () => {
                    it('Returns the next points value', () => {
                        expect(apple.points()).to.equal(110);
                    });
                });
                describe('After `next` is invoked again', () => {
                    beforeEach(() => {
                        apple.next();
                    });
                    describe('The `position` method', () => {
                        it('Returns a `Position`', () => {
                            expect(apple.position()).to.be.an.instanceOf(Position);
                        });
                    });
                    describe('The `points` method', () => {
                        it('Returns the third points value', () => {
                            expect(apple.points()).to.equal(120);
                        });
                    });
                });
            });
        });
    });
});

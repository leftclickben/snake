const expect = require('chai').expect;
const sinon = require('sinon');
const GameView = require('../../../public/app/view/GameView');
const Game = require('../../../public/app/model/Game');

describe('The `GameView` view controller', () => {
    it('Is a constructor function', () => {
        expect(GameView).to.be.a('function');
    });
    describe('When constructed', () => {
        var game, context, canvas, view;
        beforeEach(() => {
            game = new Game(30, 20, (length) => length ? length * 1.1 : 5, (points) => points ? points + 10 : 100);
            sinon.stub(game.apple(), 'position').returns({
                coords: () => ({ x: 4, y: 2 })
            });
            sinon.stub(game.snake(), 'bodyLength').returns(3);
            sinon.stub(game.snake(), 'bodyElement')
                .withArgs(0).returns({ x: 0, y: 0 })
                .withArgs(1).returns({ x: 1, y: 0 })
                .withArgs(2).returns({ x: 2, y: 0 });
            context = {
                clearRect: sinon.spy(),
                beginPath: sinon.spy(),
                moveTo: sinon.spy(),
                lineTo: sinon.spy(),
                arc: sinon.spy(),
                fill: sinon.spy(),
                stroke: sinon.spy(),
                fillRect: sinon.spy()
            };
            canvas = {
                width: undefined,
                height: undefined,
                style: {},
                getContext: () => context
            };
            score = {
                style: {},
                innerText: ''
            };
            view = new GameView(game, canvas, score, 10);
        });
        it('Exposes the correct methods', () => {
            expect(view.initialise).to.be.a('function');
            expect(view.draw).to.be.a('function');
        });
        describe('When the `initialise` method is invoked', () => {
            beforeEach(() => {
                view.initialise();
            });
            it('Initialises the `canvas` dimensions', () => {
                expect(canvas.width).to.equal(300);
                expect(canvas.height).to.equal(200);
                expect(canvas.style.width).to.equal('300px');
                expect(canvas.style.height).to.equal('200px');
            });
            describe('When the `draw` method is invoked', () => {
                beforeEach(() => {
                    view.draw();
                });
                it('Performs drawing operations', () => {
                    expect(context.clearRect.calledOnce).to.equal(true);
                    expect(context.clearRect.firstCall.args).to.deep.equal([ 0, 0, 300, 200 ]);

                    expect(context.beginPath.calledTwice).to.equal(true); // Snake and apple
                    expect(context.fill.calledTwice).to.equal(true);
                    expect(context.stroke.calledTwice).to.equal(true);

                    expect(context.fillRect.callCount).to.equal(3); // One per body segment
                    expect(context.fillRect.firstCall.args).to.deep.equal([ 0, 0, 10, 10 ]);
                    expect(context.fillRect.secondCall.args).to.deep.equal([ 10, 0, 10, 10 ]);
                    expect(context.fillRect.thirdCall.args).to.deep.equal([ 20, 0, 10, 10 ]);

                    expect(context.arc.callCount).to.equal(5); // Head, tail and two eyes on snake, plus one for apple
                    expect(context.lineTo.callCount).to.equal(6); // Two per body segment
                });
            });
        });
    });
});

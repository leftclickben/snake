const expect = require('chai').expect;
const sinon = require('sinon');
const KeyController = require('../../../public/app/controller/KeyController');

describe('The `KeyController` model', () => {
    it('Is a constructor function', () => {
        expect(KeyController).to.be.a('function');
    });
    it('Exposes static methods', () => {
        expect(KeyController.register).to.be.a('function');
    });
    describe('When the `register` method is invoked', () => {
        var document, snake;
        beforeEach(() => {
            document = { addEventListener: sinon.spy() };
            snake = { enqueueDirectionChange: sinon.spy() };
            KeyController.register({ snake: () => snake }, document);
        });
        it('Adds a key event handler', () => {
            expect(document.addEventListener.calledOnce).to.equal(true);
            expect(document.addEventListener.firstCall.args[0]).to.equal('keydown');
            expect(document.addEventListener.firstCall.args[1]).to.be.a('function');
        });
        describe('When the event handler is invoked', () => {
            var evt;
            beforeEach(() => {
                evt = {
                    keyCode: 37,
                    stopPropagation: sinon.spy()
                };
                document.addEventListener.firstCall.args[1](evt);
            });
            it('Enqueues the direction change', () => {
                expect(snake.enqueueDirectionChange.calledOnce).to.equal(true);
                expect(snake.enqueueDirectionChange.firstCall.args[0]).to.equal(37);
            });
            it('Prevents the event cascade', () => {
                expect(evt.stopPropagation.calledOnce).to.equal(true);
            });
        });
    });
});

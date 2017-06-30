const expect = require('chai').expect;
const sinon = require('sinon');
const TouchController = require('../../../public/app/controller/TouchController');

describe('The `TouchController` model', () => {
    it('Is a constructor function', () => {
        expect(TouchController).to.be.a('function');
    });
    it('Exposes static methods', () => {
        expect(TouchController.register).to.be.a('function');
    });
    describe('When the `register` method is invoked', () => {
        var document, snake;
        beforeEach(() => {
            document = { addEventListener: sinon.spy() };
            snake = { enqueueDirectionChange: sinon.spy() };
            TouchController.register({ snake: () => snake }, document);
        });
        it('Adds touch event handlers', () => {
            expect(document.addEventListener.calledThrice).to.equal(true);
            expect(document.addEventListener.firstCall.args[0]).to.equal('touchstart');
            expect(document.addEventListener.firstCall.args[1]).to.be.a('function');
            expect(document.addEventListener.secondCall.args[0]).to.equal('touchmove');
            expect(document.addEventListener.secondCall.args[1]).to.be.a('function');
            expect(document.addEventListener.thirdCall.args[0]).to.equal('touchend');
            expect(document.addEventListener.thirdCall.args[1]).to.be.a('function');
        });
        // TODO Test calling the event handlers
    });
});

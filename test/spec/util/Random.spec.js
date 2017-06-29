const expect = require('chai').expect;
const Random = require('../../../public/app/util/Random');

describe('The `Random` model', () => {
    it('Is a constructor function', () => {
        expect(Random).to.be.a('function');
    });
    it('Exposes the correct static methods', () => {
        expect(Random.integer).to.be.a('function');
        expect(Random.key).to.be.a('function');
    });
});

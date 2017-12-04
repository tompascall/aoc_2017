const { add } = require('../src/01.js');

describe('test framework', () => {
    it('adds two numbers', () => {
        expect(add(1, 3)).toEqual(4);
    });
});

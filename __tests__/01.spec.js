const day = require('../days/01.js');

describe('day 01', () => {
    it('gives back the sum of digits if digits are the same', () => {
        expect(day('1111')).toEqual(4);
        expect(day('11111')).toEqual(5);
    });

    it('gives back zero if all digits are different', () => {
        expect(day('1234')).toEqual(0);
    });

    it('gives back a digit if it matches to the next one (nput is circular)', () => {
        expect(day('12234')).toEqual(2);
        expect(day('1231')).toEqual(1);
    });
});

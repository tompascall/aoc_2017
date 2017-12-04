const day = require('../days/02.js');

describe('day 02', () => {
    const row1 = '12\t4\t3';
    const row2 = '5\t20\t9';

    it('gives back the difference between the largest and smallest number in one row', () => {
        expect(day(row1)).toEqual(9);
        expect(day(row2)).toEqual(15);
    });

    it('gives back the sum of diffs in all raws', () => {
        expect(day(`${row1}\n${row2}`)).toEqual(24);
    });
});

const getRows = input => input.split('\n');

const getRowNums = row => (row.split('\t').map(num => +num));

const getMaxMinDiff = row => Math.max.apply(null, row) - Math.min.apply(null, row);

module.exports = input =>
    getRows(input).reduce((acc, row) =>
        // eslint-disable-next-line no-param-reassign
        (acc += getMaxMinDiff(getRowNums(row))), 0);

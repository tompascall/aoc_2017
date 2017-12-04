const path = require('path');

const [, , dayFile, input] = process.argv;
if (!dayFile || !input) {
    throw Error('demo needs day file and input as arguments, respectively');
}

/* eslint-disable import/no-dynamic-require */
const day = require(path.join(process.cwd(), dayFile));

console.log('The solution is:', day(input));

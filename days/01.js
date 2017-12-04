const getDigits = (input) => input.split('').map(x => +x);

const getNextDigit = (digits, currentIndex) => {
    return (currentIndex < digits.length - 1) ?
        digits[currentIndex + 1] : digits[0];
};

module.exports = (input) => {
    const digits = getDigits(input);
    return digits.reduce((acc, digit, index) => {
        const nextDigit = getNextDigit(digits, index);
        if (digit === nextDigit) acc += digit;
        return acc;
    }, 0)
};

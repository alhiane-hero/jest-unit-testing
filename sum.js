function theSum(...numbers) {
    return numbers.reduce((prev, current) => prev + current, 0);
}

module.exports = theSum;
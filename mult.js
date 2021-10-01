function mult(...nums) {
    return nums.reduce((prev, current) => prev * current, 1);
}

module.exports = mult;
const theMult = require('../mult');

describe('Validate Mult Function', () => {
    // two only test that will be work:
    test.only('Check If Numbers Is Undefind', () => {
        expect(theMult()).toBe(1);
    });
    test.only('Given Two Numbers', () => {
        expect(theMult(10, 2)).toBe(20);
    });

    // 2 skipped:
    test('Given Three Numbers', () => {
        expect(theMult(10, 2, 2)).toBe(40);
    });
    test('Given Four Numbers', () => {
        expect(theMult(10, 2, 2, 2)).toBe(80);
    });
});
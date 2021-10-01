const theFilter = require('../input');

describe('Validate The Name Input', () => {

    // skipped test:
    test.skip('Check If The Name Is Empty', () => {
        expect(theFilter()).toBe('Unknown');
    });

    // passed test:
    test('Check For Start And End Spaces', () => {
        expect(theFilter(' Alhiane ')).toBe('Alhiane');
    });

    // passed test:
    test('Check If Name Width Greater Than 10', () => {
        expect(theFilter(' Alhiane_Lahcen_Here ')).toBe('Alhiane_La');
    });

    // skipped test:
    test.skip('Check If Name Not Starts With _', () => {
        expect(theFilter('_Alhiane')).toBe('Alhiane');
    });
});
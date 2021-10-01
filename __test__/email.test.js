const validateEmail = require('../email');

describe('First Validation', () => {
    test('Check If Email Is Undefined', () => {
        expect(validateEmail()).toBe('Unknown!');
    });

    test('Check If Email Is Not Valid', () => {
        expect(validateEmail('alhiane.com')).toBe('Invalid Email!');
    });

    test('Check If Email Is Valid', () => {
        expect(validateEmail('alhiane@gmail.com')).toBe('alhiane@gmail.com');
    });
});
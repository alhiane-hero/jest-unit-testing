const theSum = require('../sum');

// test(name(desc), function, timeOut);
// it(name(desc), function, timeOut) => 'it' is alias in 'test';

// describe(desc, function) => tests تنضيم ال;

describe('Check The Numbers Sum Total', _ => {
    // only describe that will be work on test => => 3 tests passed:
    describe.only('First Three Tests', _ => {
        test('Return The Number', () => { // passed;
            expect(theSum(100)).toBe(100);
        });
        
        test('Number 1 + Number 2', () => { // passed;
            expect(theSum(100, 200)).toBe(300);
        });
        
        it('Number 1 + Number 2 + Number 3', () => { // passed;
            expect(theSum(100, 200, 300)).toBe(600);
        });
    });

    // skipped describe => 3 tests skipped:
    describe('Last Three Tests', _ => {
        it('Number 1 + Number 2 + Number 3 + Number 4', () => { // passed;
            expect(theSum(100, 200, 300, 400)).toBe(1000);
        });
        
        it('Return The Sum Of Some Numbers', () => { // passed;
            expect(theSum(1, 2, 10, 20, 100, 200, -1)).toBe(332);
        });
        
        it('Return 0 If No Numbers', () => { // passed;
            expect(theSum()).toBe(0); // reduce initialValue = 0;
        });
    });
});

console.log([].reduce((a, b) => a + b, 0));
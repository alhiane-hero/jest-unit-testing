const myData = require('../all');
/*  
    * matchers:
        - toBe(value) => compare expect(data) with toBe(value);
        - toHaveLength(length) => check if data has expected length;
        - toContain(value) => check if dataStructure has expected value;
        - not => true => fale;
        - toBeFalsy() => result will be false;
        - toBeTruthy() => result will be true;
        - toBeGreaterThan(value) => element > 'value';
        - toBeGreaterThanOrEqual(value) => element >= 'value';
        - toBeLessThan(value) => element < 'value';
        - toBeLessThanOrEqual(value) => element <= 'value';
        - toBeUndefined() => element is undefined;
        - toMatch(regex) => match any string with regex;
        - ToHaveProperty(property) => check if object has 'property';
        - toEqual(expect.anything()) => expect anything without 'undefined' || 'null';
        - toEqual(expect.any(constructor)) => expect anything created by passed constructor;
        - expect.arrayContaining(target arr) => check if any Array has elements inside 'target arr';
        * Mock Matchers:
        - toHaveBeenCalled() => is function called or not ?
        - toHaveBeenCalledTimes(3) => is function called 3 times ?
        - toHaveBeenCalledWith("Ahmed") => is function called with "Ahmed" arg ?
        - toHaveBeenLastCalledWith("Aicha") => is function called with "Aicha" arg in it last call;
*/

test('Check If Array Contains 6 Elements', () => {
    expect(myData.length).toBe(6);
});

// toHaveLength():
test('Check If My Data With Is 6', () => {
    expect(myData).toHaveLength(6);
});

// notHaveLength():
test('Check If Array Is Not Have Length = 10', () => {
    expect(myData).not.toHaveLength(10);
});

// toContain():
test('Check If Array Contain Number 4', () => {
    expect(myData).toContain(4);
});

// notContain():
test('Check If Array Not Contain Number 10', () => {
    expect(myData).not.toContain(10);
});

// check for all array elements by for loop:
test('Check If Array Not Contain 0', () => {
    for (let i = 0; i < myData.length; i++) {
        expect(myData[i]).not.toBe(0);
    }
});

// check for all array elements by for loop:
test('Check If All Array Elements Is Number 1st Method', () => {
    for (let i = 0; i < myData.length; i++) {
        expect(isNaN(myData[i])).toBe(false);
    }
});

// toBeFalsy();
test('Check If All Array Elements Is Number 2st Method', () => {
    for (let i = 0; i < myData.length; i++) {
        expect(isNaN(myData[i])).toBeFalsy();
    }
});

// toBeTruthy();
test('Check If All Array Elements Is Number 3th Method', () => {
    for (let i = 0; i < myData.length; i++) {
        expect(isNaN(myData[i])).not.toBeTruthy();
    }
});

// toBeGreaterThan():
test('Check If Array Not Contains Negative Numbers 1st Method', () => {
    for (let i = 0; i < myData.length; i++) {
        expect(myData[i]).toBeGreaterThan(0);
    }
}); // shoud => myData[i] > 0;

// toBeGreaterThanOrEqual():
test('Check If Array Not Contains Negative Numbers 2st Method', () => {
    for (let i = 0; i < myData.length; i++) {
        expect(myData[i]).toBeGreaterThanOrEqual(0);
    }
}); // shoud => myData[i] >= 0;

// toBeLessThanOrEqual():
test('Check If 1st Array Element <= 10', () => {
    expect(myData[0]).toBeLessThanOrEqual(10);
}); // shoud => myData[0] <= 10;

// toBeUndefined():
test('Check If Array[1] Is Not Undefined', () => {
    expect(myData[1]).not.toBeUndefined();
});

// toMatch():
test('Check If String Has Anything By Regex', () => {
    let str = 'Alhiane 1234 Lahcen';
    expect(str).toMatch(/\s\d+\s/);
});

// ToHaveProperty():
test('Check If Object Has Any Property', () => {
    let obj = {
        name: 'Alhiane',
        age: 24
    }
    expect(obj).toHaveProperty('name');
});

// ToHaveProperty(key(required), value(optional));
test('Check If Object key(age) with value(24)', () => {
    let obj = {
        name: 'Alhiane',
        age: 24
    }
    expect(obj).toHaveProperty('age', 24);
});

// create our matchers:

// toBeLargerThan() => expect(recieved).toBeLargerThan(target);
expect.extend({
    toBeLargerThan(recieved, target) {
        const pass = recieved > target;
        if (pass) {
            return {
                message: _ => `Expected ${recieved} To Be Larger Than ${target}`,
                pass: true
            }
        } else {
            return {
                message: _ => `Expected: ${recieved} To Be Larger Than ${target}
Recieved: ${target} To Be Larger Than ${recieved}`,
                pass: false
            }
        }
    }
});
test('Check If Array[0] > Array[Array.length - 1]', () => {
    expect(myData[0]).toBeLargerThan(myData[myData.length - 1]);
});

// toBeBetween() => expect(recieved).toBeBetween(start, end);
expect.extend({
    toBeBetween(recieved, start, end) {
        const pass = recieved > start && recieved < end;
        if (pass) {
            return {
                message: _ => `Expected ${recieved} To Be Between ${start} And ${end}`,
                pass: true
            }
        } else {
            return {
                message: _ => `Error: Expected ${recieved} To Be Between ${start} And ${end}`,
                pass: false
            }
        }
    }
});
test('Check If Array[2] Is Between 5 And 10', () => {
    expect(myData[2]).not.toBeBetween(5, 10);
});

// expect anything => accept all data without 'undefined' or 'null';
// expect anything without 'undefined' or 'null':
test('Expect Anything', () => {
    expect(myData[0]).toEqual(expect.anything());
});
// expect anything without 'undefined':
test('Expect Anything', () => {
    let a;
    expect(a).toEqual(expect.anything());
});
/*
    - Expected: Anything;
    - Received: undefined;
*/
// expect anything without 'null':
test('Expect Anything', () => {
    let a = null;
    expect(a).toEqual(expect.anything());
});
/*
    - Expected: Anything;
    - Received: null;
*/

// expect any(constructor) => accept all data that created by 'constructor' (Number, String, Boolean, ...):
// expect any Number:
test('Expect Any Number', () => {
    expect(myData[0]).toEqual(expect.any(Number));
});
// expect any String:
test('Expect Any String', () => {
    let str = 'Alhiane';
    expect(str).toEqual(expect.any(String));
});
// expect any Boolean:
test('Expect Any Boolean 1st', () => {
    let bool = 120;
    expect(bool).toEqual(expect.any(Boolean));
});
/*
    - Expected: Any<Boolean>;
    - Received: 120;
*/
// expect any Boolean:
test('Expect Any Boolean 2nd', () => {
    let bool = true;
    expect(bool).toEqual(expect.any(Boolean));
});

// expect.arrayContaining(arr):
test('Match Arrays 1st', () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
    expect(arr).toEqual(expect.arrayContaining(['B', 'C', 'D']));
});
test('Match Arrays 2nd', () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
    expect(arr).toEqual(expect.arrayContaining(['Z', 'B', 'C']));
});
/*
    - Expected: ArrayContaining ["Z", "B", "C"];
    - Received: ["A", "B", "C", "D", "E", "F"];
*/
test('Match Arrays 3rd', () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
    expect(arr).toEqual(expect.arrayContaining(['D', 'C', 'B']));
});
test('Match Arrays 4th', () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
    expect(arr).toEqual(expect.arrayContaining(['A', 'F']));
});
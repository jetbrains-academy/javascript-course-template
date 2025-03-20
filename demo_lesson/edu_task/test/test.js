const rewire = require('rewire');
const task = rewire('../task');
const {importByName, customizeError} = require('#utils/utils.js')

// TODO: declare what you need to use from task.js
let mySum;

beforeAll(() => {
    // TODO: import what you need to use from task.js using importByName function
    mySum = importByName(task, 'mySum');
});

// TODO: update with your actual tests
test('Returns 2 for input 1 1', () => {
    try {
        expect(mySum(1, 1)).toBe(2)
    } catch (e){
        // You can overwrite a default exception message like "Error: expect(received).toBe(expected) // Object.is equality"
        // with something more user-friendly and remove stacktrace from the output:
        customizeError(e, 'mySum(1,1) should returns 2', true)
        throw e
    }
});

// TODO: update with your actual tests
test('Returns 0 for input -10 10', () => {
    try {
        expect(mySum(-10, 10)).toBe(0)
    } catch (e){
        // You can overwrite a default exception message like "Error: expect(received).toBe(expected) // Object.is equality"
        // with something more user-friendly and remove stacktrace from the output:
        customizeError(e, 'mySum(-10,10) should returns 0', true)
        throw e
    }
});
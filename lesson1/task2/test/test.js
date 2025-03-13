const rewire = require('rewire');
const console = require("node:console");
const {customizeError} = require('#utils/utils.js')

const consoleOutput = [];

beforeAll(() => {
    let originalConsoleLog = console["log"];
    const storeLog = (...inputs) => consoleOutput.push(inputs.join(' '));
    console.log = jest.fn(storeLog);

    rewire('../task');
    //require('../task');

    console.log = originalConsoleLog
});

// TODO: update with your actual tests
test('Check output of task.js', () => {
    try {
        // At this point console output is work again
        const joinedOutput = consoleOutput.join('\n');
        expect(joinedOutput).toEqual("Some text one 2nd arg\nSome text two: 2");
    } catch (e){
        // You can overwrite a default exception message like "Error: expect(received).toEqual(expected) // deep equality"
        // with something more user-friendly and remove stacktrace from the output:
        customizeError(e, 'Output is wrong', true)
        throw e
    }
});

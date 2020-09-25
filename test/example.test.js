
const test = QUnit.test;

import { addTwoNumbers, multiplyTwoNumbers, divideTwoNumbers,
    subtractTwoNumbers } from '../mathUtils.js';

test('add should take in 7 and 3 and return 10', (expect) => {
    const argument1 = 7;
    const argument2 = 3;
    const expected = 10;
    const actual = addTwoNumbers(argument1, argument2);
    expect.equal(actual, expected);
    });
    
test('subtract should take in 60 and 3 and return 57', (expect) => {
    const argument1 = 60;
    const argument2 = 3;
    const expected = 57;
    const actual = subtractTwoNumbers(argument1, argument2);
    expect.equal(actual, expected);
    });


test('multiply should take in 10 and 3 and return 30', (expect) => {
    const argument1 = 10;
    const argument2 = 3;
    const expected = 30;
    const actual = multiplyTwoNumbers(argument1, argument2);
    expect.equal(actual, expected);
    });



test('divide should take in 20 and 4 and return 5', (expect) => {
    const argument1 = 20;
    const argument2 = 4;
    const expected = 5;
    const actual = divideTwoNumbers(argument1, argument2);
    expect.equal(actual, expected);
    });
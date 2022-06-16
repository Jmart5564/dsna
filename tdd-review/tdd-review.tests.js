import {
    arrayTest,
    returnThirdSpotInArray,
    firstKeyLastValue,
} from './tdd-review.js';

const test = QUnit.test;

QUnit.module('tdd-review');

test('array test', (expect) => {
    // Arrange, Act, Assert
    const array = [1, 2, 3, 4];
    const expected = 4;

    const actual = arrayTest(array);

    expect.equal(actual, expected);
});

test('returns third item in array', (expect) => {
    const array = [1, 2, 3, 4];
    const expected = 3;

    const actual = returnThirdSpotInArray(array);

    expect.equal(actual, expected);
});

test('Object keys returns array of keys', (expect) => {
    // Arrange, Act, Assert
    const cat = {
        name: 'momo',
        type: 'chonk'
    };
    const expected = ['name', 'type']; 
    
    const actual = Object.keys(cat);

    expect.deepEqual(actual, expected);
});

test('Returns first key, last value', (expect) => {
    // Arrange, Act, Assert
    const cat = {
        name: 'momo',
        type: 'chonk',
        color: 'black',
        age: 2
    };
    const expected = {
        firstKey:'name', 
        lastValue: 2 };

    const actual = firstKeyLastValue(cat);

    expect.deepEqual(actual, expected);
    
});





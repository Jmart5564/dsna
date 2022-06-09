import {
    makePet,
    formatWork
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

test('makes a pet', (expect) => {
    const actual = makePet(
        'felix',
        'cat',
        6,
        'tuna',
        ['feather chaser', 'laser pointer', 'ball of yarn']
    );

    expect.deepEqual(actual, {
        name: 'felix',
        type: 'cat',
        age: 6,
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn'] 
    });
});


test('formats a book', (expect) => {
    const actual = formatWork(
        'war of the worlds',
        'h.g. wells', 
    );

    expect.deepEqual(actual, {
        work: 'war of the worlds', 
        writer: 'h.g. wells', 
    });
});
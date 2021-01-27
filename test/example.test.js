// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { makeSeenArray, makeCaughtArray, makeLabelsArray } from '../results/mungeUtils.js';

const test = QUnit.test;

const pokeStats = [
    { 'name':'kakuna', '_id':'5cef3501ef6005a77cd4fd27', 'seen':3, 'caught':0 }, 
    { 'name':'pidgey', '_id':'5cef3501ef6005a77cd4fd29', 'seen':2, 'caught':0 }, 
    { 'name':'blastoise', '_id':'5cef3501ef6005a77cd4fd21', 'seen':1, 'caught':0 }, 
    { 'name':'ivysaur', '_id':'5cef3501ef6005a77cd4fd19', 'seen':2, 'caught':0 }, 
    { 'name':'metapod', '_id':'5cef3501ef6005a77cd4fd24', 'seen':2, 'caught':0 }, 
    { 'name':'wartortle', '_id':'5cef3501ef6005a77cd4fd20', 'seen':2, 'caught':1 }, 
    { 'name':'beedrill', '_id':'5cef3501ef6005a77cd4fd25', 'seen':2, 'caught':0 }, 
    { 'name':'weedle', '_id':'5cef3501ef6005a77cd4fd26', 'seen':3, 'caught':1 }, 
    { 'name':'charmander', '_id':'5cef3501ef6005a77cd4fd1a', 'seen':2, 'caught':1 }, 
    { 'name':'caterpie', '_id':'5cef3501ef6005a77cd4fd23', 'seen':1, 'caught':0 }, 
    { 'name':'bulbasaur', '_id':'5cef3501ef6005a77cd4fd17', 'seen':3, 'caught':0 }];

test('makeSeenArray should take in pokeStats and return an array of numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        3, 2, 1, 2, 2, 2, 2, 3, 2, 1, 3


    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeSeenArray(pokeStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('makeCaughtArray should take in pokeStats and return an array of numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0


    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCaughtArray(pokeStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});









test('makeLabelsArray should take in pokeStats and return an array of strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        'kakuna', 'pidgey', 'blastoise', 'ivysaur', 'metapod', 'wartortle', 'beedrill', 'weedle', 'charmander', 'caterpie', 'bulbasaur'


    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeLabelsArray(pokeStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

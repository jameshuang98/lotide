const letterPositions = function(sentence) {
    const output = {};
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter !== ' ') {
            if (output[letter.toLowerCase()]) {
                output[letter.toLowerCase()].push(i); // if key already exists, push additional letter position into the array
            } else {
                output[letter.toLowerCase()] = [i]; // insert that letter key into the output object
            }
        }
    }
    return output;
};

module.exports = letterPositions;

// const eqArrays = require('./eqArrays')
// const assertArraysEqual = require('./assertArraysEqual')


// assertArraysEqual(letterPositions('hello').h,[0]);
// assertArraysEqual(letterPositions('hello').e,[1]);
// assertArraysEqual(letterPositions('Coding is so fun').s,[8, 10]);
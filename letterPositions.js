const letterPositions = function(sentence) {
    const output = {};
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter !== ' ') {
            if (output[letter.toLowerCase()]) {
                output[letter.toLowerCase()].push(i);
            } else {
                output[letter.toLowerCase()] = [i];
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
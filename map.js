
const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
}

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map(['14123', '123', '43'], x => x[0]), ['1', '1', '4'])
// assertArraysEqual(map(['strslj', 'adsf'], x => x[0] + 'a'), ['sa', 'aa'])
// assertArraysEqual(map([123, 321], x => x % 2), [1, 1])
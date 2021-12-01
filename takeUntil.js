const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')


const takeUntil = function(array, callback) {
    output = [];
    for (const item of array) {
        if (!(callback(item))) { // checks if the item doesn't meet the callback criteria
            output.push(item)
        } else {
            return output; // return the array we have so far
        }
    }
    return output;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// console.log('---');

// assertArraysEqual(takeUntil(['14123', '100', '123', '43'], x => x === '123'), ['14123', '100'])
// assertArraysEqual(takeUntil(['strslj', 'dsafss', 'adsf'], x => x.length < 5), ['strslj', 'dsafss'])
// assertArraysEqual(takeUntil([123, 11, 321], x => x > 200), [123, 11])
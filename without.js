const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const without = function(original, unwanted) {
    // let output = original;
    // for (let i = 0; i < unwanted.length; i++) {
    //     for (let j = 0; j < original.length; j++) {
    //         if (unwanted[i] === original[j]) {
    //             output.splice(j, 1); // splice alters the original array
    //         }
    //     }
    // }

    return original.filter(element => element !== unwanted); // filtering each element of array so the output array excludes the unwanted item
}

module.exports = without;


// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"]))// => ["1", "2"])

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(words)
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
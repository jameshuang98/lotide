// Importing relevant functions
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// function that returns the middle element(s) of an array
const middle = function(arr) {
    output = [];
    if (arr.length <= 2) {
        return output;
    }
    if (arr.length % 2 !== 0) {
        output.push(arr[Math.floor(arr.length/2)])
    } else {
        output.push(arr[(arr.length/2)-1])
        output.push(arr[(arr.length/2)])
    }
    return output;
}

module.exports = middle;
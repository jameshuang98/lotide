const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

let output = []
const flatten = function(arr) {
    for (const item of arr) {
        if (Array.isArray(item)) { // check if array element is a nested array
            flatten(item) // use recursion on array element
        } else {
            output.push(item); // add array element to global variable output
        }
    }
    return output
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))
const assertEqual = require('./assertEqual')

const tail = function(arr) {
    if (arr.length === 1) {
        return []; // if array only has 1 element (consider it the head), we return an empty array
    } else if (arr.length === 0) {
        return []; // if array is empty, we return an empty array
    } else {
        return arr.slice(1);
    }
}

module.exports = tail;